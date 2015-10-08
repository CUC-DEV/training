var input;
var sum;
var a=[0,0,0,0,0,0,0,0,0,0,0,0];
input=prompt("请输入几个数字并以逗号隔开：","0");
function sumInt(str)
{
	var num=0;
	for(var i=0,j=1;i<input.length;i++)
	{
		if(str[i]==',')
		{
			a[j]=i;
			j++;
		}
		if(i==input.length-1)
		a[j]=i+1;
	}
	
	for(var i=0,j=1;i<9;i++,j++)
	{
		if(a[j]==0)
		{
			return num;
		}
		if(i==0)
		{
			num+=parseInt(str.substr(0,a[1]))	
		}
		if(i>0)
		{
			num+=parseInt(str.substr(a[j-1]+1,a[j]-a[j-1]-1));
		}
	}
	return num;
}
sum=sumInt(input)