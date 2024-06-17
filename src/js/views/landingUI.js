import buttonUI from "../components/buttonUI.js"
import messageUI from "../components/messgeUI.js"
import titleUI from "../components/titleUI.js"
// ne surtout pas oublier d'écrire les extensions .js

const landingUI = function(){

    const messageData = {

        imageUrl: 'https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587_1280.jpg',
        imageAlt: 'Image générée par AI',
        footerContent: 'N\'hésitez surtout pas à découvrir nos plats',
        headerContent: 'Bienvenue sur ce fabuleux site gastronomique'

    }


    return(
        `
            <main class="main landing__main">
                ${titleUI('Chez Bobo | Accueil')}
                <section>
                    ${messageUI(messageData)}
                </section>
                <footer>
                    ${buttonUI({id: 'landing-login-button', content: 'Connectez-vous', type: 'button'})}
                    ${buttonUI({id: 'landing-register-button', content: 'Inscrivez-vous', type: 'button'})}
                </footer>
            </main>
        
        `
    )

}

export default landingUI
// comme vous pouvez le voir j'ai appelé dans une interpollation la fonction titleUI() elle retorune une chaîne de caractères. Je lui passe un argument la valeur que je donne à son paramètre data.