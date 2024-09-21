function toggleMode() {
    //Função usada para substituição do fundo
    const html = document.documentElement
    html.classList.toggle("light")

    //encontrando um seletor (no exemplo usando o seletor para imagem)
    const img = document.querySelector("#profile img")

    //Seletor da imagem
    if (html.classList.contains("light")) {
        //modo claro
        img.setAttribute("src", "./assets/profile-picture.png")
        img.setAttribute("alt", "texto alternativo 1")
        //modo escuro
    } else {
        img.setAttribute("src", "./assets/profile-picture-dark.png")
        img.setAttribute("alt", "texto alternativo 2")
    }
    
}
