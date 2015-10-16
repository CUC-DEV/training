// JavaScript Document

function sumInt(str)
{
	var a=str//"123,23,21,23,12";
var sum=0;
var i=0;
	var n=0;
	var k=[0,0,0,0];
	if(str==" ")
	{
		return sum=0;
	}
	if(str==undefined)
	{
		return undefined;
	}
	for(i=0;i<a.length;i++)
	{
		if(a[i]===',')
		{	k[n]=i;
			n=n+1;
		}
		if((a[i]>'9')||(a[i]<'0')&&(a[i]!=','))
		{
			return NaN;
		}
	}
	var b=a.substring(0,k[0])
		sum=sum+parseInt(b);
	for(i=0;i<3;i++)
	{	
		var b=a.substring(k[i]+1,k[i+1])
		sum=sum+parseInt(b);
	}
	var b=a.substring(k[3]+1);
		sum=sum+parseInt(b);
		return sum;
}
//alert('数字字符串为“123,23,21,23,12”');
//sumInt(a);
//sum

exports.sumInt = sumInt;