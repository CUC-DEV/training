function sumInt(str)
{	
	var a=[0,0,0,0,0,0,0,0,0,0,0,0];
	var num=0;
	if(str == null)
	{
		return undefined;
	}
	/*if(!(str.match(/\d+/g)))
	{
		return NaN;
	}*/
	
		for(var i=0,j=1;i<str.length;i++)
		{
			if(((str[i]>'a')&&(str[i]<'z'))||(str[i]>'A')&&((str[i]<'Z')))
			return NaN;
			if(str[i]==',')
			{
				a[j]=i;
				j++;
			}
			if(i===(str.length-1))
			a[j]=str.length;
		}
	
		for(var i=0,j=1;i<9;i++,j++)
		{
			
			
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
		}
	 return num;
}
exports.sumInt = sumInt;
