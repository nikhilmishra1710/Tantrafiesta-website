var selector=document.querySelector(".text")
var words=["code","innovate","design","create","solve"]
var num=0
function typewriter(){ 
    if(num==words.length)
        num=num%words.length
    var word=words[num],index=0
    let start=setInterval(()=>{
        selector.innerHTML=word.slice(0,index)+'_'
        index++;
        if(index===word.length+1){
            clearInterval(start)
            setTimeout(()=>{
                start=setInterval(()=>{
                    selector.innerHTML=word.slice(0,index)+'_'
                    index--;
                    if(index===-1){
                        num++
                        clearInterval(start)
                        typewriter()
                    }
                },100)
            },1000)
        }
    },200)
    
} 

window.onload=()=>{
    document.querySelector(".intro_box").style.display='none'
    selector=document.querySelector(".text")
    words=["code","innovate","design","create","solve"]
    typewriter()
}