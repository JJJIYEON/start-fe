// ECMA 스크립트

var a = 'aaa';
let b = 'aa';
const c = "bb";
console.log(a,b,c);  


// 요새는 모든 변수를 선언할 때 const를 사용하여 작성을 함 --> 패러다임 변화, let은 for구문이나 기타 등등에 사용한다



var str = 'aaaaaaa \
dsfdf';

const s = `aaaaaaaa
cccccvcvcvscs`

console.log(str,s);



function sum(x,y = 1) {
    return x + y; 
}

console.log(sum(1));



const arr = [1,2,3];
const newArr = arr.map(function(item){
    return item + 1;
});

console.log(newArr); // 모든 배열 요소를 돌면서 +1 한값



const newArr = arr.map(item => item + 1); // 인자가 1개일 때는 괄호 빼도됨
console.log(newArr); // 간단하게
document.getElementById('box').addEventListener('click', event =>console.log(1));

