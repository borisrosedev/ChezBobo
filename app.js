import router from "./router.js";

const app = function(){
    console.log('application démarre en appelant le router')
    // vous n'êtes en rien obligé de retourner le router l'appeller suffit
    return router()
}

app()