function act () {
    alert('누르지말라니깐!!!');
}
act() // -> 함수 실을 시켜주지 않으면 안됨.
console.log(act)

// 변수 선언
// let a = 1 // 변수.
// const b = 1 // 상수(값이 안 바뀜).

// 데이터 타입
// let으로 선언, 일반 데이터타입 (값 참조형) : Number, String, Boolean
// const로 선언, 객체 데이터타입 (주소 참조형) : Array, Object

//문자열
let str = 'Hello world';
let n = str.charAt(2) //charAt은 문자의 인덱스번호 자리의 값을 구해온다
console.log(n);
let string = 'Hello world';
let string1 = 'javascript';
let string2 = str.indexOf('world');//string의 몇번째 인덱스에서 시작되는지 결과는 6
let newStr1 = string.concat(string1);//변수에 변수를 붙임.
let n1 = string.charAt(2);
console.log(string2); // 6
console.log(newStr1); // Hello worldjavascript
console.log(n1) // l 
/*
    setTimeout(할일, 시간);
    시간이 지나면 할일 = 함수
    할일 = function(){ 실제로 할일 }
    3초 3000
    실제로 할일 = alert('힘들죠');
    clearTimeout(할일의 이름); -> 타임아웃을 멈추고싶을때
*/
let timer = setTimeout(function () {
    alert('힘들죠');
}, 3000);
clearTimeout(timer);

/*
    일정시간마다 할일
    setInterval(할일, 시간);
*/
let timer2 = setInterval(function () {
    alert('힘들죠');
}, 3000);
clearInterval(timer2);


let a = 12 // 연산 가능
// 연산자 종류
let test = 0
test = test + 5
test = test - 2
test = test * test
test = test / 2 // 4.5
test = test ** 2 // 4.5 x 4.5
test = test % 3 // 3으로 나눈 나머지
let b = '12' // 연산 불가능
let c = true

// 배열(Array) : 인덱스와 밸류로 이루어짐
const arr = [1, 2, 3, 4, 5] // 인덱스 0번째는 a[0]이고 값은 1
// 배열의 추가
arr.push(6)
arr.push(7)
// 배열의 삭제
arr.pop() // 마지막꺼 하나 삭제
arr.slice(1, 3) // [1, 4, 5]
arr.splice(2, 2) // [1, 2, 5]
// 배열의 값 출력
console.log(arr)
console.log(arr[3])
console.log(arr[arr.length - 1]) // 마지막 값

// 객체(Object) : 키와 밸류로 이루어짐
const obj = { id: 'azumaapp', pw: 'sdfjewflk', name: 'yang dh', no: 154 }
console.log(obj['id']) // 이렇게도 꺼낼 수 있다.
console.log(obj.pw)
console.log(obj.name)
console.log(obj.no)

// JSON 데이터타입
const userInfo = [
    { id: 'azumaapp', pw: 'sdfjewflk', name: 'yang', no: 154 },
    { id: 'kimikimi', pw: 'df134wflk', name: 'kim', no: 155 },
    { id: 'parkupaku', pw: 'sdjew1234flk', name: 'park', no: 156 },
    { id: 'hhhwang', pw: '1aafjewflk', name: 'hwang', no: 157 }
]

for (let i = 0; i < userInfo.length; i++) {
    console.log(userInfo[i].no, '번째 고객 이름: ', userInfo[i].name)
}




