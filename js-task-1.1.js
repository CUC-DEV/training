

function sumInt(str)
{	
	var a=[0,0,0,0,0,0,0,0,0,0,0,0];
	var num=0
		for(var i=0,j=1;i<str.length;i++)
		{
			if(str[i]==',')
			{
				a[j]=i;
				j++;
			}
			if(i==str.length-1)
			a[j]=i+1;
		}
	
		for(var i=0,j=1;i<9;i++,j++)
		{
			if(parseInt(str)!=NaN)
			{return NaN;}
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
exports.sumInt = sumInt;
