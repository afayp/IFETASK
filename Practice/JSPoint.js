console.log("hello");
NaN === NaN; //false
isNaN(NaN);//true
1/3 === (1-2/3)//false

[1,2,3]
var arr = new Array(2);
arr[0] = 1;
var arr = new Array(1,2,3);

var person = {
	name:xiaoming,
	age:12
}
person.name;
person.age = 12;

'use strict'
模板字符串
"$(name),$(age)"

arr.length = 4;
arr.indexOf(a);
arr.slice();
arr.slice(3);
arr.slice(0,4);
arr.push(a,b);
arr.pop();
arr.unshift(1,2);
arr.shift();
arr.sort();
arr.reverse();
arr.splice(0,2,a,b);
arr.splice(0,2);
arr.concat(1,2,[3,4]);
arr.join("-");

var xiaoming = {
	name:'xiaoming',
	age:11
}
xiaoming.name = "xiaoming";
xiaoming[age] = 11;
delete xiaoming.age;
'name' in xiaoming; // true
xiaoming.hasOwnProperty('age');//true

false: null undefined 0 "" NaN
遍历对象属性：
for(var key in o){
	if(o.hasOwnProperty(key)){
		alert(o[key]);
	}
} 
数组：
for(var index in a){
	alert(index);//'0','1'
	alert(a[index]);
}

var m = new Map([['a',1],['b',2],['c',3]]);
var m = new Map();
m.set('a',1);
m.set('b',2);
m.has('c')//true
m.get('a');//1
m.delete('a');

var s = new Set([1,2,3,3]);
var s = new Set();
s.add(4);
s.delete(4);

遍历：
iterable:Array,Map,Set

for...of:
for(var x of arr){
	alert(x);
}

for(var x of s){
	alert(x);
}

for(var x of m){
	alert(x[0]);
	alert(x[1]);
}

forEach():
arr.forEach(function (element,index,arr) {
	
});

s.forEach(function(element,sameElement,set){

});

m.forEach(function(value,key,map){

});

函数
function abs(x){

}

var abs = function(x){

};

arguments[0]
function(a,b,c){
	if (arguments.length == 0) {
		c = b;
		b = null;
	}
}

rest
function foo(a,b,...rest){

}

var 
	x = 1,
	y = 2,
	z,i;

var MYAPP = {};
MYAPP.name = 'myapp';
MYAPP.version = 1.0;
MYAPP.foo = function(){
	return 'foo';
}

'use strict'
function foo(){
	var sum = 0;
	for(let i=0;i<100;i++){
		sum += 1;
	}
}

var PI = 3.14;
const PI = 3.14;

foo.apply(obj,[1,2]);
foo.call(obj,1,2);
Math.max.apply(null,[1.2,3]);
Math.max.call(null,1,2,3);

var count = 0;
var newParseInt = parseInt;
window.parseInt = function(){
	count += 1;
	return newParseInt.apply(null,arguments);
}

高阶函数
function add(x,y,f) {
	return f(x) + f(y);
}

function pow(x){//一个参数
	return x*x;
}
arr.map(pow);

arr.reduce(function(x,y){
	return x + y;//求和
});

arr.filter(function(x){
	return x%2 === 0;
});

arr.sort(function(x,y){
	if (x <y) {
		return -1;
	}
	if (x > y) {
		return 1;
	}
	return 0;
});

function sum(arr){
	return arr.reduce(function(x,y){
		return x + y;
	});
}
function lazy_sum(arr){
	var sum = function(){
		return arr.reduce(function(x,y){
			return x+y;
		});
	}
	return sum;
}
var f = lazy_sum([1,2,3]);
f();

x => x * x ;
(x,y) => {

};
x => ({foo:x});

var d = new Date(2016,11,18,11,,30);
var ds = Date.parse('2015-06-24T19:49:22.875+08:00');
var d = new Date(ds);
Date.now() === new Date().getTime();

序列化：
JSON.stringify(xiaoming,null,' ');
JSON.stringify(xiaoming,['name','age'],' ');

function convert(key,value){
	if(typeof value === 'string'){
		return value.toUpperCase();
	}
	return value;
}
JSON.stringify(xiaoming,convert,' ');
var xiaoming = {
	toJSON:function (){
		return {
			'Name:':this.name,
			'Age':this.age
		}
	}
}
JSON.stringify(xiaoming);
反序列化：
JSON.parse([1,2,3]);
JSON.parse('{"name":"xiaoming","age":13}',function(key,value){
	if (key === 'name') {
		return value +'tongxue';
	}
	return value;
});

xiaoming._proto_ = Student;
function createStudent(name) {
	// body...
	var s = Object.create(Student);
	s.name = name;
	return s;
}

xiaoming.constructor === Student.prototype.constructor;
Student.prototype.constructor === Student;
xiaoming._proto_ === Student.prototype;???
Object.getPrototypeOf(xiaoming) === Student.prototype;
xiaoming instanceof Student;//true

function Student(props){
	this.name = props.name || 'niming';
	this.grade = props.grade || 1;
}
Student.prototype.hello = function(){
	alert('hello');
}
function createStudent(props){
	return new Student(props || {});
}

Class Student {
	constructor(name){
		this.name = name;
	}
	hello(){
		alert('hello');
	}
}

Class PrimaryStudent extends Student {
	constructor(name,grade){
		super(name);
		this.grade = grade;
	}
}

window.innerWidth;
window.innerHeight;
navigator.appName;
navigator.appVersion;
navigator.userAgent;
screen.width;
location.href;
location.protocol;
location.host;
location.assign();
location.reload();
docuemnt
history

表单：
提交的两种方式：
1. 点击btn =>form.submit();
2. 点击type=submit,form的onSubmit()
没有name属性的input不会被提交

function ajax(method,url,data) {
	var request = new XMLHttpRequest();
	return new Pormise(function(resolve,reject){
		request.onreadystatecahnge = function(){
			if (request.readyState === 4) {
				if (request.status === 200) {
					resolve(request.responseText);
				}else{
					reject(request.status);
				}
			}
		}
	});
}

var p = ajax('GET','/api/categories');
p.then(function(text){

}).catch(function(status){

});


typeof val
"undefined"
"string"
"number"
"boolean"
"object"
"function"
typeof null => "object"

未声明，已声明但未初始化的typeof都返回"undefined"

isNaN(null)//0
isNaN(undefined);//NaN
isNaN(false);//0

String(true)//'true'
String(null);//'null'
String(value);//'undefined'

Object:
constructor
hasOwnProperty()
propertyIsEnumerable();
isPrototypeOf();
toString();
valueOf();

var value = "25";
var number = Number(value);
typeof number // "number"
var number2 = new Number(value);
typeof number2// "object"

delete obj.x;
delete f;//false

switch
debugger;

创建对象的几种方法；
1.对象字面量
2.new
3.Object.create();

访问一个对象不存在的属性返回undefined
访问一个不存在的对象则会报错。
var name = pserson && person.name;

不能删除继承属性
检测属性：
	in
	hasOwnProperty();//自有属性
	propertyIsEnumerable();//自由属性 + 可枚举
for(var p in obj){
	if(!obj.hasOwnProperty(p)) continue;
	if(typeof o[p] === 'function') continue;
}
obj.keys();//自有属性
obj.getOwnPropertyNames();//所有自有属性，无论是否可枚举

encodeURI(uri);
encodeURIComponent(uri);
decodeURI(uri);
decodeURIComponent(uri);

Math.min();
Math.max();
Math.ceil();
Math.floor();
Math.round();

var num = Math.floor(Math.random() * 10 + 1);

window对象
window.open('http://www.baidu.com',"newwindow");
var win = window.open('http://www.baidu.com',"newwindow",
	"height=400,width=400,top=10,left=10,resizable=yes",false);
win.resizeTo(500,500);
win.moveTo(100,100);
win.close();
win.opener === window;//true

var blocked = false;
try{
	var win = window.open('...',"_blank");
	if(win === null){
		blocked = true;//内置屏蔽程序
	}
}catch(ex){
	blocked = true;//扩展程序阻止的
}
if (blocked) {

}

setTimeOut("console.log('hello')",1000);
var timeoutId = setTimeOut(function(){
	console.log('hello');
},1000);
clearTimeout(timeoutId);

setInterval();
celarInterval();

function incrementNumber(){
	num++;
	if(num == max){
		celarInterval(intervalId);
	}
}
intervalId = setInterval(incrementNumber,500);

function incrementNumber(){
	num ++;
	if (num < max) {
		setTimeout(incrementNumber,500);
	}else{
		console.log('Done');
	}
}
setTimeout(incrementNumber,500);

警告框 alert('xxx');
确认框 var b = confim('xxx');
提示框 prompt('xxx','xxxx');//返回填写的文本或者null

location对象
window.location === docuemnt.location;
location.href;
location.host;
location.port;
...
location.assign();
location.href = "http://...";
location.replace("http://...");
location.reload();
location.reload(true);

history对象
history.go(-1);
history.back();
history.forward();
history.go("http://...");
history.length == 0