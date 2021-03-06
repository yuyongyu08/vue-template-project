import axios from 'axios'
let jsonp = require('jsonp');

export default class RequestHelper {
    static get(url: string, config?: Object){
        return axios.get(url, config)
            .then(res => res.data)
            .catch(err => {
                this.handleError(err);
                return err
            })
    }

    static post(url: string, data?: Object, config?: Object){
        return axios.post(url, data, config)
            .then(res => res.data)
            .catch(err => {
                this.handleError(err);
                return err
            })
    }

    static jsonp(url: string, config?: Object){
        return new Promise((resolve, reject) => {

            let _config = Object.assign({
                prefix: 'jp',
                param: 'jsoncallback',
                timeout: 3000
            }, config);

            jsonp(url, _config, (err: any, data: Object) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    static handleError(error: any){
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    }
}