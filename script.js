const body = document.body
const buttons = document.querySelectorAll(".button")

buttons.forEach((button)=>{
button.addEventListener("click",(e)=>{
    // console.log(e.target)
    // console.log(e)
    if(e.target.id === "grey"){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white"){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue"){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow"){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "orange"){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "green"){
        body.style.backgroundColor = e.target.id
    }
})
})