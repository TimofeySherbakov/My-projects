

 const Block2=document.querySelector(".BLOCK2");

    function animation(element,animMoment){
      window.addEventListener("scroll",()=>{
          let scrollTop=window.scrollY;
  
          if(scrollTop>=animMoment){
              element.classList.add("show");
          }
      })
  };
  animation(Block2,260);