
console.log('app.js');


//변수는 var 사용 권장
var name = '김지연';
var Name = '김지연';


console.log(name);
console.log(Name);


//주석
console.log(1);
console.log(2);

/*

*/


// 숫자형
var count = 1;
console.log(count);


var isMan = true;  //bool
var isMan = "true"; //String

console.log(isMan);


//함수도 데이터 타입이다
function log(str) {
    console.log(str);
};


var log = function(str) {
    console.log(str);
};


//객체
var image = {
    width: 100,
    height: 100,
    name:'1.png'
};

var image1 = [1,2,3,4,5,6,'a',{}];
image1[0] = 'a';


var date = null; // 값이 없음
var data1 = '';
var date2; //undefined

console.log(data, data1, data2);

// 이렇게 쓸수도 있는데 복잡함

var imageWidth = 100;
var imageHeight = 100;
console.log(image, image1);


console.log(1+2); //3
console.log('a' + 'b'); //ab
console.log(1+'4'); //14


var count = 1;
var number ='2';


console.log(count + number); // 12
console.log(1 == 1); // 동등, true
console.log(1 == 2); // fales
console.log('' == '0'); // fales
console.log(0 == '') // true, 값들이 자동으로 bool형변환이 되서 fales = fales

var isHero = true;
if (isHero && isHulk) {
    console.log('hero')
}

console.log(typeof(1)); // 어떤 타입인지 알려줌