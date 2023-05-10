import axios from 'axios'

// var baseURL = "http://localhost:5000"
var baseURL = "http://46.4.60.198"

function apiCall(url, method, data, successCallback, errorCallback){
    axios({
        method: method,
        url: url,
        data: data,
        headers: {},
        baseURL: baseURL
    })
    .then(successCallback)
    .catch(errorCallback)
}
export default apiCall