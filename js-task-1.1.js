/**
 * Created by QQQ on 2015/10/7.
 */
function sumInt() {
    var x=0;
    var a=[123,23,21,51,231,12];
    for(var i=0;i<a.length;i++){
        x +=a[i];
    };
   document.getElementById("result1").innerHTML=x;
}