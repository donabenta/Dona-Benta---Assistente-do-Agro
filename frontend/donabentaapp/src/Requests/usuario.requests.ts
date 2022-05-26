import axios from 'axios';

let usuarioRequests = {
    login: async function (data: { email: any; password: any; }):Promise<boolean> {
        let requestBody = {
            "email": data.email,
            "password": data.password
        }
        let isLoginRight: boolean = false;
        await axios.post("https://donabentaapi.herokuapp.com/login", requestBody)
        .then(res => {
            isLoginRight = true;
        })
        .catch((err) => {
            isLoginRight = false;
        });

        return isLoginRight;
    },
    signup: (data: any) => {

    }
}
export default usuarioRequests;