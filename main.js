document.querySelector(".alterna").addEventListener( "click", ()=>{ 
    let selecao = document.querySelector("body"); 
    selecao.classList.toggle("dark"); 
    let areaTexto = document.querySelector("textArea");
    areaTexto.style.backgroundColor = areaTexto.style.backgroundColor == "white" ? "darkgray" : "white"; 
    document.body.style.backgroundColor = document.body.style.backgroundColor == "black" ? "white" : "black"; 
})
