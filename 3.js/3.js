// runtime : 구동 환경. 브라우져(js), 터미널(nodejs)

// 조건문
let a = 3
let b = 3

if (a < b) {
    console.log('b가 더 큼')
} else if (a === b) {
    console.log('b가 a와 동일함');
} else {
    console.log('b가 더 크지 않음')
}

// 문제1
// c는 3, d, 4
// c가 d보다 클때는 c가 큼, c=d 일때는 같음, d가 클때는 d가 큼을 로그에 출력


let c = 5
let d = 5

if (c > d) {
    console.log('c가 큼')
}
else if (c < d) {
    console.log('d가 큼')
}
else {
    console.log('같음')
}

// 문제2
// let e = *
// e가 2의 배수이면, (if (e % 2 === 0) {}) 2의 배수 출력
// 3의 배수면 3의 배수 출력
// 5의 배수면 -- 출력
// .. 그 외면, 2, 3, 5의 배수가 아닙니다. 출력


let e = 213979678678541

if (e % 2 === 0) {
    console.log('2의 배수')
}
else if (e % 3 === 0) {
    console.log('3의 배수')
}
else if (e % 5 === 0) {
    console.log('5의 배수')
}
else {
    console.log('2, 3, 5의 배수가 아닙니다.');
}
