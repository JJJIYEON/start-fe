console.log('app');

// create
var todos = ['운동']
var todo = '게임';
todos.push(todo);
console.log(todos);

// Read
todos.forEach(function(todo){
    console.log()
});

// Update 
var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

// Delete 1
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);

// if
var isMan = false;
if(isMan) {
    console.log('1');
} 
else if(!isMan && isHero){

}
else {
    console.log('2');
}

alert('안녕하세요'); // 모든 실행을 멈추고 창을 띄움
var who = propmpt('당신은 누구세요?');
console.log(who);

var isDelete = confirm('정말 삭제하시겠습니까?'); 
conlose.log(isDelete);


parseInt('12'); // 문자열 12를 숫자형으로 바꾼다

var id = setTimeout(test, 1000); //1초후 1번실행
var id = setInterval(test, 1000); //1초마다 계속 실행

var nick = 'aji'; //전역변수

function test() {
  var age = 30; //지역변수
  console.log(nick, age);
}

test();
console.log(age); // function 안에서 지정한 변수는 밖에서 불러올 수 없다

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 3));

var car = {
  year: '2014',
  starting: function() {
    console.log('starting..');
  },
};

car.starting();

(function() {
    var a = 'a';
    console.log
})(); // 즉시실행함수

function sum(x, y) {
  if (!y) y = 1;
  console.log(x + y);
}
console.log(sum(3)); // 생략 가능한 전달 인자


