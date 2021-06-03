import { v4 as uuid } from 'uuid'


interface SignInRequestData{
    email: string;
    password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData){
    await delay();

    return{
        token: uuid(),
        user:{
            name: 'Italo Faria Doria',
            email: 'italo.faria0@gmail.com',
            avatar_url: 'https://github.com/VonDoria.png'
        }
    }
}


export async function recoverUserInformation(){
    await delay();

    return{
        user:{
            name: 'Italo Faria Doria',
            email: 'italo.faria0@gmail.com',
            avatar_url: 'https://github.com/VonDoria.png'
        }
    }
}