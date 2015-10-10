function sumInt() {
    var sum=0;
    var a=[123,23,21,51,231,12];
    for(var i=0;i<a.length;i++){
        sum +=a[i];
    };
    var x=document.getElementById("demo1");
    x.innerHTML=sum;  }
