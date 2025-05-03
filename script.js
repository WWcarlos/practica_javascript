
function operar (){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let Tipo = parseInt(document.getElementById("type").value)
    
    switch (Tipo){
        case 1:
            alert(num1+num2)
            break;
        case 2:
            alert(num1-num2)
            break;       
        case 3:
            alert(num1*num2)
            break;
        case 4:
            alert(num1/num2)
            break;    
    }
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
