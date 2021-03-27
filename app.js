var arr=[];
var count=0;
function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = ""
}

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value)
}
function sqRoot(){
    var result = document.getElementById("result");
    var rt=Math.sqrt(eval(result.value))
    result.value=rt
}
function BckSpace(){

}