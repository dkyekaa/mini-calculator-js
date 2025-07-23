function startcalc(){
    let number = prompt("Enter First Number : ");

    let operator = prompt("Enter Operator (+, -, *, /) : ");

    let number2 = prompt("Enter Second Number : ");
    
    if (operator == "+"){
        x = number
        y = number2
        result = parseFloat(x) + parseFloat(y)
    }
    else if (operator == "-"){
        result = parseFloat(number)-parseFloat(number2)
    }   
    else if (operator == "*"){
        result = parseFloat(number)*parseFloat(number2)
    }   
    else if (operator == "/"){
        result = parseFloat(number)/parseFloat(number2)
    }
    else {
        alert("Wrong Operator")
        document.getElementById('calc').innerHTML = "Invalid Operator, Start Again"
    }

    document.getElementById('calc').innerHTML = "Result from " + number + " " + operator + " " + number2 + " is " + result;
}
function theme(){
    document.getElementById('yo').style.backgroundColor = "white";
    document.getElementById('body').style.backgroundImage = "url(./assets/images/background.jpg)";
    document.getElementById('text').style.color = "black";
    document.getElementById('calc').style.backgroundColor = "black";
    document.getElementById('calc').style.color = "white";
}