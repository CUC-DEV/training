/**
 * Created by QQQ on 2015/10/7.
 */
function sumobject(){

    var shuzu=[{a:1, b:2},{a:2, b:8, c:'4'}];
    var result={};
    var i= 0,j=0;
    var sumobname=new Array();
    var obname=new Array();
    var oldname;
    var newobname=[];
    //�������ж������ԵĲ���
    for(i=0;i<shuzu.length;i++){
        j=0;
        for(attribute in shuzu[i]){
            //alert(attribute);
            obname[j]=attribute;
            j++;
        }
        newobname=hebing_array(newobname,obname);
      }
    //�������ж������ԵĲ���end
    //��ÿ�������ж�Ӧ���Եĺͣ����û����Ӧ�������򲻼�
    for(j=0;j<newobname.length;j++){
        result[newobname[j]]=0;
    }
    for(i=0;i<shuzu.length;i++){
        for(j=0;j<newobname.length;j++){
            if (shuzu[i][newobname[j]]!= null) {
                result[newobname[j]]=Number(shuzu[i][newobname[j]]);
            }
            else{
                result[newobname[j]] =  result[newobname[j]];
            }

        }

    }
    //��ÿ�������ж�Ӧ���Եĺ�end
    document.getElementById("result2").innerHTML=obj2string(result);
}

//�Զ�����������ȡ��������
function hebing_array(a,b) {
    for (var i = 0, j = 0, ci, r = {}, c = []; ci = a[i++] || b[j++]; ) {
        if (r[ci]) continue;
        r[ci] = 1;
        c.push(ci);
    }
    return c;
}
//�������е����ԺͶ�Ӧ�����ݴ�ӡ����
function obj2string(o){
    var r=[];
    if(typeof o=="string"){
        return "\""+o.replace(/([\'\"\\])/g,"\\$1").replace(/(\n)/g,"\\n").replace(/(\r)/g,"\\r").replace(/(\t)/g,"\\t")+"\"";
    }
    if(typeof o=="object"){
        if(!o.sort){
            for(var i in o){
                r.push(i+":"+obj2string(o[i]));
            }
            if(!!document.all&&!/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)){
                r.push("toString:"+o.toString.toString());
            }
            r="{"+r.join()+"}";
        }else{
            for(var i=0;i<o.length;i++){
                r.push(obj2string(o[i]))
            }
            r="["+r.join()+"]";
        }
        return r;
    }
    return o.toString();
}