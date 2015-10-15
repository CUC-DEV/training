//这道题没看明白题目要求……
var obj={};
var obj1={
	a:1,
	b:2,
	c:""
	};
var obj2={
	a:2,
	b:8,
	c:'4'
	};
 function isNumber(val)	
{
   return typeof val === 'number';
}
 function isString(val)	
{
   return typeof val === 'string';
}
if(isNumber(obj1.a)&&isNumber(obj2.a))
{
	obj.a=obj1.a+obj2.a;
}
else if(isString(obj1.a)&&isString(obj2.a))
{
	obj.a=obj1.a+obj2.a;
}
else obj.a="类型有误!";

if(isNumber(obj1.b)&&isNumber(obj2.b))
{
	obj.b=obj1.b+obj2.b;
}
else if(isString(obj1.b)&&isString(obj2.b))
{
	obj.b=obj1.b+obj2.b;
}
else obj.b="类型有误!";

if(isNumber(obj1.c)&&isNumber(obj2.c))
{
	obj.c=obj1.c+obj2.c;
}
else if(isString(obj1.c)&&isString(obj2.c))
{
	obj.c=obj1.c+obj2.c;
}
else obj.c="类型有误!";
obj;