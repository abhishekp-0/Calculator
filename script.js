const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const multiply= function(a,b) {
	return a*b;
};

const divide = function(a,b) {
  return a/b;
};

const operate = function(a,b,operator){
    switch(operator){
        case "add":
            console.log(add(a,b))
            return display(add(a,b));

        case "subtract":
            console.log(subtract(a,b))
            return display(subtract(a,b));

        case "multiply":
            console.log(multiply(a,b))
            return display(multiply(a,b));

        case "divide":
            console.log(divide(a,b))
            return display(divide(a,b));
    }
}

const display = function(displayValue){
    // if(displayValue==="0" || calcDisplay.textContent==="0"){
    //     calcDisplay.textContent = displayValue;
    // }
    if(newValue || calcDisplay.textContent==="0"){
        calcDisplay.textContent = displayValue;
        newValue=false;
    }
    else{
    calcDisplay.textContent += displayValue;
    }

    return calcDisplay.textContent;
}




let a=0;
let b=0;
let operator="";
let newValue=false;
let bValue=false;

const calcDisplay=document.querySelector(".calculator__display");
const numberButtons=document.querySelectorAll(".key--operand"); 

numberButtons.forEach(number => {
    number.addEventListener("click",(e)=>{
        console.log(typeof(e.target.textContent));
        if(bValue){
            b=parseInt(display(e.target.textContent)); 
        }
        else{
            a=parseInt(display(e.target.textContent)); 
        }
    })
});

const restButtons=document.querySelectorAll(".calculator__keys button:not(.key--operand)");

restButtons.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        const action=e.target.getAttribute("data-action");
        switch(action){
            case "add":
                // a=parseInt(calcDisplay.textContent);
                if(a===0){
                    break;
                }
                operator=action;
                newValue=true;
                bValue=true;
                break;

            case "subtract":
                // a=parseInt(calcDisplay.textContent);
                if(a===0){
                    break;
                }
                operator=action;
                newValue=true;
                bValue=true;
                break;

            case "multiply":
                // a=parseInt(calcDisplay.textContent);
                if(a===0){
                    break;
                }
                operator=action;
                newValue=true;
                bValue=true;
                break;

            case "divide":
                // a=parseInt(calcDisplay.textContent);
                if(a===0){
                    break;
                }
                operator=action;
                newValue=true;
                bValue=true;
                break;

            case "clear":
                newValue=true;
                bValue=false;
                display("0");
                a=0;
                b=0;
                operator="";
                break;


            case "calculate":
                if(operator===""){
                    break;
                }
                newValue=true;
                // b=parseInt(calcDisplay.textContent);
                let result = operate(a,b,operator);
                a=result;
                b=0;
                operator="";
                bValue=false;
                newValue=true;
                break;
        }
    })
});