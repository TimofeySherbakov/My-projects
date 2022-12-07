let btnRight=document.querySelector(".arrow1");
let btnRight2=document.querySelector(".arrow11");
let btnRight3=document.querySelector(".arrow111");
let slides=document.querySelectorAll(".pcts");
let slides2=document.querySelectorAll(".pcts2");
let slides3=document.querySelectorAll(".pcts3");
let i=0;
btnRight.addEventListener("click",function(){
    i++;
    if(i>=slides.length){
        slides[i-1].classList.remove("show");
        i=0;
        slides[i].classList.add("show");
    }
    else{
        slides[i-1].classList.remove("show");
        slides[i].classList.add("show"); 
    }
});
btnRight2.addEventListener("click",function(){
    i++;
    if(i>=slides2.length){
        slides2[i-1].classList.remove("show");
        i=0;
        slides2[i].classList.add("show");
    }
    else{
        slides2[i-1].classList.remove("show");
        slides2[i].classList.add("show"); 
    }
});
btnRight3.addEventListener("click",function(){
    i++;
    if(i>=slides3.length){
        slides3[i-1].classList.remove("show");
        i=0;
        slides3[i].classList.add("show");
    }
    else{
        slides3[i-1].classList.remove("show");
        slides3[i].classList.add("show"); 
    }
});
let btnleft=document.querySelector(".arrow2");
btnleft.addEventListener("click",function(){
    i--;
    if(i<0){
        slides[i+1].classList.remove("show");
        i=4;
        slides[i].classList.add("show");
    }
    else{
        slides[i+1].classList.remove("show");
        slides[i].classList.add("show");
    }
}
);
let btnleft2=document.querySelector(".arrow22");
btnleft2.addEventListener("click",function(){
    i--;
    if(i<0){
        slides2[i+1].classList.remove("show");
        i=3;
        slides2[i].classList.add("show");
    }
    else{
        slides2[i+1].classList.remove("show");
        slides2[i].classList.add("show");
    }
}
);
let btnleft3=document.querySelector(".arrow222");
btnleft3.addEventListener("click",function(){
    i--;
    if(i<0){
        slides3[i+1].classList.remove("show");
        i=3;
        slides3[i].classList.add("show");
    }
    else{
        slides3[i+1].classList.remove("show");
        slides3[i].classList.add("show");
    }
}
);
    const headTxt2=document.querySelector(".bigTxt");
    const content2=document.querySelector(".row");
    const pct3=document.querySelector(".aboutMe");
    const headTxt3=document.querySelector(".headTxtBl3");
    const smallTxt3=document.querySelector(".smallTxtBl3");
    const headTxt4=document.querySelector(".headTxtBl4");
    const btn4=document.querySelector(".btnBl4");
    const pcts4=document.querySelector(".container4");
    function animation(element,animMoment){
    window.addEventListener("scroll",()=>{
        let scrollTop=window.scrollY;
        if(scrollTop>=animMoment){
            element.classList.add("Show");
        }
    })
};
    animation(headTxt2,350);
    animation(content2,520);
    animation(pct3,950);
    animation(headTxt3,1000);
    animation(smallTxt3,1000);
    animation(headTxt4,1700);
    animation(btn4,1700);
    animation(pcts4,1800);

    


