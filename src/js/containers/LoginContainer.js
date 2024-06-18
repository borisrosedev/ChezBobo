import AuthService from "../services/AuthService"

class LoginContainer {

    // je donne un constructeur à cette classe afin de l'instancier si besoin. Toutefois ce n'est pas une obligation en l'état. 
    constructor(){

    }



    onSubmit(){
        // Je sais que j'aurai l'événement submit à gérer lié au formulaire qui se trouvera sur la page donc je définis la méthode qui s'occupera d'appeler le service qui va lui-même appeler la classe d'envoi de requêtes API
        const emailInput = document.getElementById('email')
        const passwordInput  = document.getElementById('password')

        AuthService.login({ email: emailInput, password: passwordInput})
    }





}


export default LoginContainer


