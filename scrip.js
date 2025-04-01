document.addEventListener(DOMcontentLoaded ,function(){
    const aumentarFonteBotao=document.getElementByld(aumentarFonte);

    let tamanhoatualFonte=1;

aumentarFonteBotao.addEventListener('clik,function'(){
    tamanhoatualFonte+=0.1;
    document.body.style.fontSize =`${tamanhoAtualFonte}rem`;
});
});
