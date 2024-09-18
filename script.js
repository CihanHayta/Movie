const arrows = document.querySelectorAll(".arrow");


arrows.forEach((arrow)=>{
    arrow.addEventListener("click,",function(){
        arrow.style.background = "red"
    })
})
