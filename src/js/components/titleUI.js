const titleUI = function(data){
    // lorsque vous voyez ${} à l'intérieur de backticks cela est une interpolation de chaîne de caractères. Autrement dit vous voyez un mot écrit ici en l'occurrence data mais ce n'est PAS celui qui a termes apparaître dans votre application
    return(
        `
            <header class="header title"> 
                <h1>${data}</h1>
            </header>
        
        
        `
    )
}

export default titleUI;