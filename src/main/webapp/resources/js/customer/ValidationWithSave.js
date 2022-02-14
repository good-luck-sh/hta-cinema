class ValidationWithSave {
	// inputElement: 유효성 검사를 실시할 input
	// regExp: 해당 정규표현식으로 유효성 검사를 실시한다.
	constructor(inputElement, regExp) {
		this._inputElement = inputElement;
		this._regExp = regExp;
		// 유효성 검사 통과 여부를 저장하는 변수로 true이면 통과한 것이다.
		this._flag = false;
		// 잘못된 입력이 있을 때를 대비해 기존의 값을 저장하는 변수이다.
		this._savedValue = "";
	}
	
	// flag에 대한 getter
	get flag() {
		return this._flag;
	}
	
	/* 
	 * 유효성 검사를 실시한다.
	 * input 값이 비어있으면 savedValue에 현재 input 값을 저장하고 flag를 false로 변경하고 true를 반환한다.
	 * 검사를 통과하면 savedValue에 현재 input 값을 저장하고 flag를 true로 변경하고 true를 반환한다.
     * 검사를 통과하지 못하면 input 값을 savedValue로 변경하고 flag를 true로 변경하고 false를 반환한다.
	 */
	test() {
		const value = this._inputElement.val();
		
		if (value === "") {
			this._savedValue = value;
			this._flag = false;
			console.log("savedValue: " + this._savedValue);
			console.log("test 결과: " + this._flag);
			return true;
		} else if (this._regExp.test(value)) {
			this._savedValue = value;
			this._flag = true;
			console.log("savedValue: " + this._savedValue);
			console.log("test 결과: " + this._flag);
			return true;
		} else {
			this._inputElement.val(this._savedValue);
			this._flag = true;
			console.log("savedValue: " + this._savedValue);
			console.log("test 결과: " + this._flag);
			return false;
		}
		console.log("savedValue: " + this._savedValue);
		console.log("test 결과: " + this._flag);
	}
}