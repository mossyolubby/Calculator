function Buildcalculator(){
    let x = document.getElementById("calContainer");
    x.innerHTML = `<div><div><input id = "value1" type = 'number' placeholder = 'enter number' styles=backgroundColor:blue/> </div>
                    <br/></br>
                   <div>
                  <select id = "cal" style = backgroundcolor:"yellow">
                     <option>select operan</option>
                     <option>+</option>
                     <option>-</option>
                     <option>*</option>
                     <option>/</option>
                     </select>
                     </div>
                     <br/><br/>
                     <div><input id = "value2" type = 'number' placeholder = 'enter number'/></div>
                     <div><button onclick = "submitAnswer()">Get Answer</button></div>

                     </div>`

    x.style.backgroundColor="red";            
    x.style.padding = "20px"; 
    x.cal.style.backgroundColor="blue";
}
function submitAnswer(){
    let num1 = document.getElementById("value1").value;
    console.log(num1)
    let num2 = document.getElementById("value2").value;
    let cal = document.getElementById("cal").value;
    let total = document.getElementById("answer");

    let calculation;
    if(cal === "+"){
        calculation = Number(num1) + Number(num2);
    }else if(cal === "-"){
        calculation = num1 - num2;
    }else if (cal === "*"){
        calculation = num1 * num2;
    }else if (cal === "/"){
        calculation = num1/num2;
    }else{
        "enter a number to calaculate"
    }
    total.innerHTML = calculation;
}