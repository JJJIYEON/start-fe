console.log('app');

// task
var count = [10,20,30,40,50,60,70,100];
function average(array){
    var sum=0;
    for(var a=0;i<array.length;i++)
    {
      sum = sum + array[i];
    }
    return sum/array.length;
  }
console.log(average(count));


for(var i=2; i<10; i++) {
    for(var j=1; j<10; j++) {
        console.log( i + "*" + j + "=" + i * j)
    }
}

function gugudan(i){
    for(var i =a; i<10; i++) {
        for(var j = 1; j < 10; j++) {
            console.log(i + "*" + j + "=" + i * j);
             }
        }
    }
    
    var a = 2;
    console.log(gugudan(a));


    var ab={};
    ab.a=1;
    ab.b=2;
    ab.sum=function() {console.log(ab.a+ab.b);};
    ab.sum();



var result = 0;
var i = 1;
while (true) {
    var value = window.prompt("더할 숫자를 입력해주세요!" + " ");
    if (value == null) {
        alert("숫자의 총 합은:" + result);
        break;
    }

    result += parseInt(value);
    
}
*/