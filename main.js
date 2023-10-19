document.querySelector(".alterna").addEventListener( "click", ()=>{ 
    let selecao = document.querySelector("body"); 
    selecao.classList.toggle("dark"); 
    document.body.style.backgroundColor = document.body.style.backgroundColor == "black" ? "white" : "black"; 
})