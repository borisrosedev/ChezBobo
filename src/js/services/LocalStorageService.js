class LocalStorageService {

  static getSpecificItem(item){
        // cette fonction opère un traitement sur l'information qui est dans la mémoire locale du navigateur  puisqu'elle parse le JSON en JavaScript en utilisant la méthode JSON.parse()
        return JSON.parse(localStorage.getItem(item))
  }

  static setSpecificItem(item, data){
        // Cette fois-ci c'est la méthode inverse je transforme le JS en JSON en utilisant JSON.stringify()
        localStorage.setItem(item, JSON.stringify(data))
  }

  static removeSpecificItem(item){
    localStorage.removeItem(item)
  }



}

export default LocalStorageService