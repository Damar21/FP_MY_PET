function axiosGet(url) {
    // create a promise for the axios request
    const promise = axios.get(url,httpHeaderConfig);

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data);

    // return it
    return dataPromise;
}
function axiosPost(url, formObj) {
    // create a promise for the axios request
    const promise = axios.post(url, formObj, httpHeaderConfig);

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data);

    // return it
    return dataPromise;
}