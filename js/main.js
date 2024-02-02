var cyber=document.querySelector(".cybr-btn")

cyber.addEventListener('mouseenter',()=>{
    document.querySelector(".robot_img").style.opacity='1'
})

cyber.addEventListener('mouseleave',()=>{
    document.querySelector(".robot_img").style.opacity='0'
})

var cont=document.querySelector(".container_old")
var cards=document.querySelectorAll(".card")

cards.forEach((card)=>{    
    card.addEventListener('mouseenter',()=>{
        document.addEventListener('mousemove',movediv)
    })
    card.addEventListener('mouseleave',()=>{
        document.removeEventListener('mousemove',movediv)
        card.style.transform=''
        card.style.background=''
    })
})

function movediv(event){
    const X=event.clientX
    const Y=event.clientY
    const left=X-event.target.getBoundingClientRect().x
    const top=Y-event.target.getBoundingClientRect().y
    const center={
        x: left-event.target.getBoundingClientRect().width/2,
        y: top-event.target.getBoundingClientRect().height/2
    }
    const distance=Math.sqrt(center.x**2+center.y**2)
    event.target.style.transform='scale3d(1.07,1.07,1.07) rotate3d('+
    center.y/100+','+center.x/100+',0,'+Math.log(distance)*2+'deg)'
    event.target.style.background=' radial-gradient(circle at '+
    (center.x * 2 + event.target.getBoundingClientRect().width/2)+'px '+(center.y+ event.target.getBoundingClientRect().height/2)+
    'px,rgb(255, 255, 255,0.2),rgba(255, 255, 255, 0.11))'
    
}

function move(){
    var robo=document.querySelector(".robot_vid")
    robo.style.display='block'
    var btn=document.querySelector(".t__checkbox")
    btn.disabled=true
    setTimeout(()=>{
        btn.checked=false
        btn.disabled=false
        robo.style.display='none'
    },3000)
    var div=document.querySelector(".cont")
    var top=div.style.top,temp=0
    if(top==='0px' || top==='' || top==='0'){
        temp='-32vh'
    }else if(top==='-32vh'){
        temp='-64vh'
    }else if(top==='-64vh'){
        temp='-96vh'
    }else if(top=='-96vh'){
        temp='-128vh'
    }else{
        temp='0'
    }
    div.style.top=temp
}
