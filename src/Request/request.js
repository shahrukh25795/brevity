import axios from "axios"

export const getApi = (url) => {
    return axios({
        method: 'GET',
        url: url,
        responseType: 'json'
    })
        .then(res => {

            //code for handle error
            console.log(res)
            return res;
        })
        .catch(err => {
            
            //code for handle error
            console.log(err)
            return err.response
        });
}