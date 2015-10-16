function sumobj(objarr)
{
	var newobj={};
	var newobjname=new Array();
	var bufobjname=new Array();
	if(objarr==="")
		return true;
	else if(objarr==undefined)
		return undefined;
	else
	{
		for(var i=0;i<objarr.length;i++)
		{
			var j=0;
			for(unit in objarr[i])
			{
				bufobjname[j]=unit;
				j++;
			}
			newobjname=or(newobjname,bufobjname);
		}
		for(var i=0;i<newobjname.length;i++)
		{
			newobj[newobjname[i]]=0;
		}
		for(var i=0;i<objarr.length;i++)
		{
			var j=0;
			for(unit in objarr[i])
			{
				newobj[unit]+=Number(objarr[i][unit]);
			}
		}
		return newobj;
	}
}

function or(a,b) {
    for (var i = 0, j = 0, ci, r = {}, c = []; ci = a[i++] || b[j++]; ) {
        if (r[ci]) continue;
        r[ci] = 1;
        c.push(ci);
    }
    return c;
}

exports.sumobj = sumobj;



