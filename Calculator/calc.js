const btn = document.querySelectorAll("button");
const input = document.getElementById("input");

var beforeValue = 0;
var currentValue = 0;
var returnValue = 0;
var plusX2 = -1;

var v = 0;
var vl = 0;

function printVal() {
    console.log(`plusX2 : ${plusX2}`);
       
    console.log(`beforeValue : ${beforeValue}`);
    console.log(`currentValue : ${currentValue}`);
    console.log(`returnValue : ${returnValue}`);
    // console.log(`vl : ${vl}`);
    console.log(`eval(vl) : ${eval(vl)}`);
}


function evalRun(res) {
    input.setAttribute("value", eval(res));
    beforeValue = input.value;
}

function evalRun2(res2) {
    plusX2 = -1;
    vl2 = eval(vl);
    // console.log(`vl2 type: ${typeof(vl2)}`);
    beforeValue = vl2;
    currentValue = vl2;
    returnValue = vl2;
    input.setAttribute("value", eval(res2));
}

function call_evalRun2() {
    v = beforeValue.length-1;
    vl = beforeValue.substring(0,v);
    evalRun2(vl);
}


function clickHandler() {
    // printVal();
    // 계산기 입력창에 값 표시 구현
    // console.log(this.textContent);
    lastIndex = input.value.length-1;
    currentValue = this.textContent;
    // C buttton enter = clear returnVlaue
    // = + - X / 연산자 미구현
    if (currentValue == "=") {
        let bvli = beforeValue.length-1;
        let bvlc = beforeValue[bvli];
        // console.log(`bvli : ${bvli}`);
        // console.log(`bvlc : ${bvlc}`);
        if (bvlc == "+") {
            call_evalRun2();
        } else {
            evalRun(input.value);
        }

        // else if(plusX2) {
        //     evalRun(input.value.pop());
        // }

    } else {
        if (currentValue !== "C") {
            if(beforeValue == 0) {
                returnValue = currentValue;
            }else if(currentValue == "+") {
                plusX2 = plusX2 + 1;
                if(plusX2 > 0) {
                    call_evalRun2();
                } else {
                    returnValue = beforeValue + currentValue;
                    // console.log(plusX2);
                }
            }else {
                returnValue = beforeValue + currentValue;
                plusX2 = -1;
                console.log(plusX2);
            }
               
        }else if(currentValue == "+") {

        }else {
            returnValue = 0;
        }
        input.setAttribute("value", returnValue);
        beforeValue = returnValue;
    }
       
}

    // 계산기 버튼 조작 구현
for (i = 0; i < btn.length; i++){
   btn[i].addEventListener("click", clickHandler); 
}

