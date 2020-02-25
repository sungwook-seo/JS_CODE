const btn = document.querySelectorAll("button");
const input = document.getElementById("input");

var beforeValue = 0;
var currentValue = 0;
var returnValue = 0;

function clickHandler() {
    // 계산기 입력창에 값 표시 구현
    // console.log(this.textContent);
    currentValue = this.textContent;
    // C buttton enter = clear returnVlaue
    // = + - X / 연산자 미구현
    if (currentValue !== "C") {
        if(beforeValue !== 0) {
            returnValue = beforeValue + currentValue;
        } else {
            returnValue = currentValue;
        }

    }   else {
        returnValue = 0;
    }
    input.setAttribute("value", returnValue);
    beforeValue = returnValue;
       
}

    // 계산기 버튼 조작 구현
for (i = 0; i < btn.length; i++){
   btn[i].addEventListener("click", clickHandler); 
}


