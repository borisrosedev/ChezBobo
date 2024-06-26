class LandingContainer {
    // une classe est un environnement comme l'est une fonction 

    // dans cette classe ci je mets la logique métier de la page Landing, logique sans laquelle cette page n'a pas lieu d'être 

    // pour être instanciée une classe doit avoir une fonction spéciale qui est appelé un constructeur

    constructor(onNavigate){

        // il s'agit du corps du constructeur

        // pour associer des valeurs à une instance instance particulière de la classe il nous faut assigner à ses propriétés des valeurs ici 

        this.onNavigate = onNavigate 

        // la ligne ci-dessus signifique que ce qu'on passe quand on appelle le constructeur de la classe lors d'une instanciation de celle-ci est un argument qui va être stocké dans la propriété onNavigate de cette classe.

        // Or comme vous pouvez le voir je n'ai absolument pas déclaré au préalable la propriété onNavigate de la classe je fais d'une pierre deux coups en lui assignant dans le constructeur la valeur onNavigate 
        // tout ce qui appartient à l'environnement de la classe commence par this. 

        // Autrement dit une classe est un objet qui possède un prototype propre

        // Je pars du principe que si ce constructeur est appelé cela veut dire que j'ai déjà appelé la fonction qui crée l'interface autrement dit que les boutons et leurs identifiants existent à ce moment-là. 

        // Donc je peux faire référence à quelque chose qui existe déjà sans craindre que la valeur de landingLoginButton et de landingRegisterButton soit nulle.

        const landingLoginButton = document.getElementById('landing-login-button')

        // comme vous pouvez le voir j'associe un gestionnaire d'évnement que j'ai défini dans cette classe à un élément html qui existe en-dehors de cette classe puisque je vais le stocker dans une variable ici pour ensuite pouvoir brancher sur lui un gestionnaire de son évenement click
        landingLoginButton.onclick = (e) => this.onClick('landing-login-button')

        const landingRegisterButton = document.getElementById('landing-register-button')
        landingRegisterButton.onclick = (e) => this.onClick('landing-register-button')

    }

    // certaines comportements sur la page d'accueil sont essentiels à son utilité notamment le clic sur le bouton de connexion pour les nouveaux arrivants ou d'inscription. Il s'agit donc de les gérer ici car ils font partie de la logique métier de la page

    onClick(buttonId){
        // comme vous pouvez le voir j'utilise les alternatives un contrôle de flux qui me permet en fonction d'une condition de déclencher ou non l'exéction des inscriptions qui sont comprises dans le bloc conditionnel
        if(buttonId == "landing-login-button"){
            // 1er bloc conditionnel
            console.log('Vous avez cliqué sur le bouton de connexion')
        } else {
            // 2ième bloc conditionnel
            console.log('Vous avez cliqué sur le bouton d\'inscription');
        }
    }


}
export default LandingContainer
// l'export default permet d'exporter LandingContainer et donc de l'importer dans d'autres fichiers
// vous auriez pu utiliser export mais à ce moment là il faut préciser importer la bonne classe du fichier. 