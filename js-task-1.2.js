// JavaScript Document
function obsum(str2,str1){
var i=0;
if(str2==undefined)
{
	return undefined;
}
if(str1==undefined)
{return undefined;}
var s=("");
var q=("");
s=str2;
q=str1;
function shuzu(str)
{var k=[];var a=[];var n=0;
	for(i=0;i<str.length;i++)
	{
		if(str[i]===',')
		{	k[n]=i;
			n=n+1;
		}
	}
	a[0]=str.substring(0,k[0]);
	for(i=0;i<n-1;i++)
	{
		a[i+1]=str.substring(k[i]+1,k[i+1]);
	}
	a[n]=str.substring(k[n-1]+1);
	for(i=0;i<n+1;i++)
	{
		if(a[i].substring(0,1)==="'")
		{
			a[i]=a[i].substring(1,a[i].length-1)
		}
		a[i]=parseInt(a[i]);
	}
return a;
}
var b=shuzu(s);
var c=shuzu(q);
var d=[];
var maxlength=0;
if(b.length>=c.length)
{
	maxlength=b.length;
	for(i=c.length;i<b.length;i++)
	{c[i]=0;}
}
else
{maxlength=c.length;
for(i=b.length;i<c.length;i++)
	{b[i]=0;}
}
for(i=0;i<maxlength;i++)
{
	d[i]=b[i]+c[i];
}
return d;
}
exports.obsum =obsum;