function regExp(){
    let regText = document.getElementById("inputExpression").value;
    let firstExp = document.getElementById("input1").value;
    let secondExp = document.getElementById("input2").value;

    if (regText === "") {
        input1.style.backgroundColor = "";
        input2.style.backgroundColor = "";
        return;
    }

    const regex = new RegExp(regText);

    if(regex.test(firstExp)){
        document.getElementById("input1").style.backgroundColor="lightgreen";
    }
    else{
        document.getElementById("input1").style.backgroundColor="lightcoral";
    }

    if (regex.test(input2.value)) {
            input2.style.backgroundColor = "lightgreen";
        } else {
            input2.style.backgroundColor = "lightcoral";
        }
}