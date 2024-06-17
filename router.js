import LandingContainer from "./src/js/containers/LandingContainer.js";
import landingUI from "./src/js/views/landingUI.js";

// Il s'agit d'une propriété que je crée de toute pièce sur l'objet window (sur la page sur le DOM si vous préférez)
window.onNavigate = function(hash){
    routerPush(hash)

}


const routerPush = function(hash){
    // il faut mettre à jour l'historique des pages visitées
    history.pushState({}, "", location.origin + hash)
    console.log('value de hash in routerPush', hash)
    const container = document.getElementById('container')
    // la route change en fonction de la valeur donnée à hash
    switch(hash){
        case "":
            // je vous invite à voir comment landingUI() est construite pour mieux comprendre cette partie. Du rest c'est la même utilisation de innerHTML vue aujourd'hui
            container.innerHTML +=  landingUI();
            new LandingContainer(window.onNavigate)
            break;
    }
}


export default function(){
    console.log('démarrage de l\'application')
    routerPush(window.location.hash)
}


