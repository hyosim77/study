const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}
/* 아래 긴 코드를 위의 한줄로 대체할 수 있다. 
  const clickedClass = "clicked";
  if (h1.classList === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}*/

h1.addEventListener("click", handleTitleClick);
