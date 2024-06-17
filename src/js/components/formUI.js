const formUI = (data) => {

    // tôt ou tard j'aurai besoin de contrôler le comportement du formulaire en cas de reset ou de soumission donc directement je créer une fonction qui va avoir comme paramètre un objet qui contiendra une propriété formId


    //ici je pense à créer un objet ainsi fait : 
    /*{
            const data = {
                    isLoginForm: true | false,
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
    }*/
    return(
        `
            <form id="${data.formId}">
                <section>
                    <input type="${data.formInputs.email.type}" placeholder="${data.formInputs.email.placeholder}" id="${data.formInputs.email.id}" />
                    <input type="${data.formInputs.password.type}" placeholder="${data.formInputs.password.placeholder}" id="${data.formInputs.password.id}" />
                    ${ !data.isLoginForm ?  <input type="${data.formInputs.confirmedPassword.type}" placeholder="${data.formInputs.confirmedPassword.placeholder}" id="${data.formInputs.conformedPassword.id}" />  : ""}
                </section>
                <section>

                </section>
            </form>
          
        `
    )


}

// Nous avons déjà vu les ternaires . Il s'agit ligne 30 (ou dans ces eaux-là ) de se dire que si la valeur de data.isLoginForm est false cela va afficher de confirmer le mot de passe et si c'est true absolument rien
export default formUI