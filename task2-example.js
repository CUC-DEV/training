function sumobject(shuzu){

    //var shuzu=[{a:1, b:2},{a:2, b:8, c:'4'}];
    var result=undefined;
    var i= 0,j=0;
    var sumobname=new Array();
    var obname=new Array();
    var oldname;
    var newobname=[];
    if(shuzu!=null){
        result={};
        for(i=0;i<shuzu.length;i++){
            j=0;
            for(attribute in shuzu[i]){
                //alert(attribute);
                obname[j]=attribute;
                j++;
            }
            newobname=hebing_array(newobname,obname);
        }
    
        for(j=0;j<newobname.length;j++){
            result[newobname[j]]=0;
        }
        for(i=0;i<shuzu.length;i++){
            for(j=0;j<newobname.length;j++){
                if (shuzu[i][newobname[j]]!= null) {
                    result[newobname[j]]+=Number(shuzu[i][newobname[j]]);
                }
                else{
                    result[newobname[j]] =  result[newobname[j]];
                }
    
            }
    
        }
    }
    //求每个对象中对应属性的和end
    //document.getElementById("result2").innerHTML=obj2string(result);
    return result;
}

//对对象属性名称取并集函数
function hebing_array(a,b) {
    for (var i = 0, j = 0, ci, r = {}, c = []; ci = a[i++] || b[j++]; ) {
        if (r[ci]) continue;
        r[ci] = 1;
        c.push(ci);
    }
    return c;
}

exports.sumobject = sumobject;