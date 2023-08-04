var themechange = document.getElementById("themechange")

themechange.addEventListener("click", function(){
    var body = document.getElementById("body")
    var container = document.getElementById("container")
    var btn = document.getElementsByClassName("btn")

    body.style.backgroundColor = "lightblue"
    container.style.backgroundColor = "rgba(93, 93, 249, 0.767)"

    btn.forEach(element => {
        btn.style.backgroundColor = "white"
        btn.style.color = "rgba(93, 93, 249, 0.767)"
    });

})

var switchTheme = document.getElementById("switch")

switchTheme.addEventListener("click", function(){
    var body = document.getElementById("body")
    var container = document.getElementById("container")
    var btn = document.getElementsByClassName("btn")

    body.style.backgroundColor = "lightblue"
    container.style.backgroundColor = "white"

    btn.forEach(element => {
        btn.style.backgroundColor = "rgba(71, 71, 245, 0.767)"
        btn.style.color = "rgba(71, 71, 245, 0.767)"
    });

})

function writeValue(param){
    var input = document.getElementById("input")
    var newInput = input.value + param
    input.value = newInput;
}

var calc = document.getElementById("calc")

calc.addEventListener("click", function(){
    var input = document.getElementById("input")

    var result = eval(input.value)
    var answer = document.getElementById("answer")
    answer.innerHTML = (input.value + " = " + result)
})

var deleteValues = document.getElementById("delete")

deleteValues.addEventListener("click", function(){
    document.getElementById("input").value = ""
})