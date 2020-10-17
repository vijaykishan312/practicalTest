import { Linking, Alert } from 'react-native'
import axios from 'axios';

const BASEURL = "http://demo.ciaoworks.com";

//POST request api 
export function postRequest(requestUrl, body) {
    return Linking.canOpenURL(BASEURL).then((url) => {
        console.log('base url is ' + JSON.stringify(url))
        if (!url) {

        } else {
            console.log("request url is " + BASEURL + requestUrl + " body is " + JSON.stringify(body))
            const CancelToken = axios.CancelToken;
            let source = CancelToken.source();
            axios.defaults.timeout = 300000;
            return axios({
                method: 'post',
                url: BASEURL + requestUrl,
                responseType: 'text',
                data: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                timeout: 300000,
                validateStatus: function (status) {
                    return status; // default
                },
            }, {
                cancelToken: source.token
            }).then(function (response) {
                console.log("response data " + JSON.stringify(response.data))
                console.log("response success " + response.data.success);
                console.log("response imessages " + response.data.message)
                return JSON.stringify(response.data);

            }).catch((error) => {
                if (!error.status) {
                    // network error
                } else {
                    console.log("error is catch " + JSON.stringify(error))
                    source.Cancel()
                }
            });
        }
    }).catch(err => console.log("Could not reach to server ", +err));
}