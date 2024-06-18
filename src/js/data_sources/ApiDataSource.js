class ApiDateSource {
    // Cette classe va être l'endroit où j'effectue mes call API 
    // Elle n'est donc pas allouée à la communication vers une API particulière contrairement à la classe ChezBoboApiService qui est liée vu ce que j'ai écrit en tout cas à un service particulier le serveur web de ChezBobo

    // le mot clé static signifie que la méthode en l'occurrence est une méthode non pas liée à une instance de  classe mais à la classe elle-même 
    // vous pourrez l'appeler ainsi ApiDateSource.get() et NON new ApiDateSource().get() 
    // lorsque vous voyez le mot clé async cela signigie que la fonction est asynchrone autrement dit qu'elle permet une latence avant d'obtenir le résultat escompté. Il s'agit d'une grande habitude lors de communique entre différentes machines
    static async get(url){
        // fetch est une API Web qui permet d'effectuer des requêtes HTTP(S)
        return fetch(url)
            .then((res) => {
                return res.json()
            })     
    }

    static async ajax(url){
        xhr.responseType = "json";

        //On envoie la requête
        xhr.send();

        //Dès que la réponse est reçue...
        xhr.onload = function(){
            //Si le statut HTTP n'est pas 200...
            if (xhr.status != 200){ 
                //...On affiche le statut et le message correspondant
                console.error("Erreur " + xhr.status + " : " + xhr.statusText);
            //Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
            }else{ 
                console.log(xhr.response.length + " octets  téléchargés\n" + JSON.stringify(xhr.response));
            }
        };

        //Si la requête n'a pas pu aboutir...
        xhr.onerror = function(){
            console.log("La requête a échoué");
        };

        //Pendant le téléchargement...
        xhr.onprogress = function(event){
            //lengthComputable = booléen; true si la requête a une length calculable
            if (event.lengthComputable){
                //loaded = contient le nombre d'octets téléchargés
                //total = contient le nombre total d'octets à télécharger
                console.log(event.loaded + " octets reçus sur un total de " + event.total);
            }
        };

    }

}

export default ApiDateSource
// de cette façon je vais pouvoir utiliser cette classe à l'extérieur de ce fichier