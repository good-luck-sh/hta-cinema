// 유효성 검사를 위한 정규표현식들
const engReg = /[a-zA-Z]/;
const numReg = /[0-9]/;
const specialReg = /[~!@#$%^&*+=?_-]/;
const idReg = /^[a-zA-Z0-9]+$/;
const passwordReg = /^[a-zA-Z0-9~!@#$%^&*+=?_-]+$/;
const phoneNumberReg = /^01([0|1|6|7|8|9])([0-9]{7,8})$/;
const emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;