const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {
    event.preventDefault();

    const fields= [...document.querySelectorAll(".input-block input")]

    fields.forEach(field=>{
        if (field.value==""){
            form.classList.add("validate-error");
        }
    })
    
    const formError =document.querySelector(".validate-error");
    if (formError){
        formError.addEventListener("animationend", event=>{
            if(event.animationName=="nono"){
                formError.classList.remove("validate-error")
            }
        })
    }else{
        form.classList.add("form-hide");
    }
});


form.addEventListener("animationstart", event =>{
    if(event.animationName == "down"){
        document.querySelector("body").style.overflow="hidden";
    }
});


form.addEventListener("animationend",()=> {
    if(event.animationName == "down"){
        form.style.display="none";
        document.querySelector("body").style.overflow="hidden";
    }
    
});



// squares 


const ulSquares= document.querySelector("ul.esqures");

for (let i = 0; i < 24; i++) {

    const li= document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 120));
    const position =Math.floor(random(1,98)) ;
    const delay = Math.floor(random(1,98)) ;
    const Duration = Math.floor(random(24,12)) ;


    li.style.width=`${size}px`;
    li.style.height=`${size}px`;
    li.style.bottom= -`-${size}px`
    li.style.left=`${position}%`
    li.style.AnimationDelay= `${delay}s`
    li.style.animationDuration=`${Duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
    ulSquares.appendChild(li);
    
}