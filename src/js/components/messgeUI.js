const messageUI = function(data){

    return(
        `
            <section class="message">
                <header>
                    <figure>
                        <img src="${data.imageUrl}" alt="${data.imageAlt}" />
                    </figure>
                    <p>
                        ${data.headerContent}
                    </p>
                </header>
             
                <footer>
                    <p>
                        ${data.footerContent}
                    </p>
                </footer>
            </section>
        
        `
    )
}

export default messageUI