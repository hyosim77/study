//화살표 함수


function arrow1 () {
    console.log('arrow1')
}
//함수의 간략화
arrow1();

function plus4 (a, b) {
    return a + b
}
console.log(plus4(1, 2))

//function을 변수안에 넣을수있고

let plus3 = function (a, b) { return a + b }
console.log(plus3(1, 2))

//function을 삭제할수 있고 
let plus2 = (a, b) => { return a + b }
console.log(plus2(1, 2))


//function,return도 삭제할수 있다
let plus1 = (a, b) => a + b
console.log(plus1(1, 2))

//실무에서는 화살표 함수사용 1->2->3->4 순서로...
