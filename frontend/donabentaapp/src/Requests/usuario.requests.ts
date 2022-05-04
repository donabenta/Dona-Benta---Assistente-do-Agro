import axios from 'axios';

let usuarioRequests = {
    login: (data: { email: any; password: any; }) => {
        let requestBody = {
            "email": data.email,
            "password": data.password
        }

        axios.post("https://donabentaapi.herokuapp.com/login", requestBody)
        .then((res => {
            console.log("Deu certo");
        }))
        .catch((err) => {
            console.log("Algo deu errado!")
            console.log(err);
            
        })
    },
    signup: (data: any) => {

    }
}
export default usuarioRequests;