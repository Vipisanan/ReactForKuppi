import axios from "axios/index";

export function getDataService() {
    return new Promise(((resolve, reject) => {
        axios({
            method: 'GET',
            url: `http://aathiagathiar.com/api/news/`,
            timeout: 60000
        }).then((res) => {
            resolve(res);
            console.log("success", res);
        }).catch((error) => {
            reject(error);
        });
    }));
}

export function getBooksService() {
    return new Promise(((resolve, reject) => {
        axios({
            method: 'GET',
            url: `http://localhost:8080/api/book`,
            timeout: 60000
        }).then((res) => {
            resolve(res);
            console.log("success", res);
        }).catch((error) => {
            reject(error);
        });
    }))

}
export function addBooksService(book) {
    return new Promise(((resolve, reject) => {
        axios({
            method: 'POST',
            url: `http://localhost:8080/api/book`,
            data:book,
            timeout: 60000
        }).then((res) => {
            resolve(res);
            console.log("success", res);
        }).catch((error) => {
            reject(error);
        });
    }))

}
