import LocalDataSource from "../data_sources/LocalDataSource";
import LocalStorageService from "./LocalStorageService";

class AuthService {

    constructor(){

    }

    login(data){
        if(!data.email || !data.password) {
            return 
        }

        const existingUser = LocalDataSource.getUsers().find((user) => user == data.user)

        if(existingUser){
            if(existingUser.password !== data.password){
                return 
            }
            LocalStorageService.setSpecificItem('token', { username: existingUser.email})
        }
    }

    logout(){
        const token = LocalStorageService.getSpecificItem('token')
        if(token.username){
            LocalStorageService.removeSpecificItem('token')
        }
    }


}

export default AuthService