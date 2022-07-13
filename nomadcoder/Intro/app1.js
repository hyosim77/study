const h1 = document.querySelector("div.hello:first-child h1")
// -> document에서 h1태그를 불러들여 h1이란 변수로 정해놓고!!

function handleh1Click () {
 //   console.log("h1 was clicked");
 //   console.dir(h1);
    h1.style.color = "blue";
}

function handleh1MouseEnter () { 
    h1.innerText = "Mouse is here!";
}

function handleh1MouseLeave () { 
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize () { 
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy () { 
    alert("dopier!");
}
function handleWindowOffline () { 
    alert("SOS no WIFI!");
}

function handleWindowOnline () { 
    alert("ALL GOOOD!");
}
// 클릭하면 메세지를 콘솔로그에 찍는 함수를 정의해놓고!!
// 여기서 왜 클릭전에도 콘솔이 찍히는지 질문!!

h1.innerText = "BTS forever"; // h1의 텍스트를 바꿈.

//h1.style.color = "blue"; // h1의 스타일 중 컬러를 바꿈.
// h1의 속성을 알고 싶을땐 console.dir(h1)

h1.addEventListener("click", handleh1Click); // h1.onclick = handleh1Click; 와 같이 온이벤트 이름으로도 사용가능.
h1.addEventListener("mouseenter", handleh1MouseEnter); // onmouseenter
h1.addEventListener("mouseleave", handleh1MouseLeave); // onmouseleave
//handleh1Click(); 요게 있음 클릭전에도 콘솔에 h1 was clicked이 출력됨. 지우면 클릭발생전에는 콘솔이 안찍힘.

window.addEventListener("resize", handleWindowResize); // 동작안함.
window.addEventListener("copy", handleWindowCopy); 
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
