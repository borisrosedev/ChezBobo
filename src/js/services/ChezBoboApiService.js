import ApiDateSource from "../data_sources/ApiDateSource.js";

class ChezBoboApiService {
    // cette classe va gérer les relations avec l'API distance 

    constructor(){
        // je lui donne un constructeur au cas où l'envie me vient d'en créer des instances ce qui n'est en rien en l'occurrence une nécessité 
    }

    async getProducts(){
        // la méthode getProducts porte bien son nom elle doit me permettre de récupérer les produits d'API
        return await ApiDateSource.get('https://chezbobo.onrender.com/products')
        
    }

}

export default ChezBoboApiService