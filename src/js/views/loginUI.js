import formUI from "../components/formUI.js"
import titleUI from "../components/titleUI.js"

const loginUI = function(){

    // Ce n'est pas dans les habitudes mais vu que la façon de faire se rapproche fortement de celle utiliser en jsx pour React je vais directement déclarer la variable dans la fonction d'interface UI et la passer  en argument de la fonction formUI()


    // Il s'agit d'un objet imbriqué car vous pouvez voir plusieurs objets en lui
    // Les objets sont repérables par leurs accolades
    const data = {
        isLoginForm: true,
        formInputs : {
            email: {
                placeholder: 'Entrez votre email',
                type: 'email',
                id: 'email'
            },
            password : {
                placeholder: 'Entrez votre mot de passe',
                type: 'password',
                id: 'password'
            }
        }
    }


    return(
        `
            <main class="main landing__main">
                ${titleUI('Chez Bobo | Accueil')}
                <section>
                    ${formUI(data)} 
                </section>
            </main>
        
        `
    )

}

export default loginUI
// comme vous pouvez le voir j'ai appelé dans une interpollation la fonction titleUI() elle retorune une chaîne de caractères. Je lui passe un argument la valeur que je donne à son paramètre data.