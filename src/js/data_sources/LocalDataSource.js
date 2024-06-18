class LocalDataSource {

    // méthode getUsers est une méthode de classe autrement dit pour l'utiliser vous allez écrire 
    //LocalDataSource.getUsers() et NON new LocalDataSource().getUsers()
    static getUsers(){

        // cette méthode(fonction) retourne un tableau de deux objets qui correspondront fictivement à une collection ou une table dans la base de données
        return [

            {
                email: 'susi@gmail.com',
                password: 'bababobobibi',
                firstname: 'susi',
                lastname : 'dupont',
                wallet : 100
            },
            {
                email: 'john@gmail.com',
                password: 'bababobobubu',
                firstname: 'john',
                lastname : 'dupuis',
                wallet : 300
            }


        ]
    }

}

export default LocalDataSource