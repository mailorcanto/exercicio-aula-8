document.querySelector(".alterna").addEventListener( "click", ()=>{ 
    let selecao = document.querySelector("body"); 
    let areaTexto = document.querySelector("textArea");
    areaTexto.style.backgroundColor = areaTexto.style.backgroundColor == "white" ? "darkgray" : "white"; 
    selecao.classList.toggle("dark"); 
    document.body.style.backgroundColor = document.body.style.backgroundColor == "black" ? "white" : "black"; 
})
