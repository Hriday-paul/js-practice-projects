var ary = ["Frontend developer    ", "Backend developer     ", "Js developer      "];        
var index = 1;
var showTxt = document.querySelector("h1");
var last = false;
var count = 0;

setInterval(()=>{
    var txt = ary[count];
    if(index<=txt.length && last == false){
        showTxt.innerHTML = "I'm a " + txt.slice(0, index)
        index++;
        if(index>txt.length){
            last = txt.length-1;
        }
    }
    else{
        showTxt.innerHTML = "I'm a " + txt.slice(0, last)
        last--;
        if(last<0){
            count++;
            index = 1;
            last = false;
            if(count>=ary.length){
                count = 0;
            }
            
        }
    }  
}, 150)