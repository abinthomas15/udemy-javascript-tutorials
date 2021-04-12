class EasyHttp {

  // Make an Http get request
  get(url) {
    return new Promise((resolve,reject) => {
      fetch(url)
      .then(respone => respone.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }

  // Make an Http post request
  post(url, data) {
    return new Promise((resolve,reject) => {
      fetch(url, {
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      .then(respone => respone.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    })
  }

  // Make an http put request
  put(url, data) {
    return new Promise((resolve,reject) => {
      fetch(url, {
        method : 'PUT',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      .then(respone => respone.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    })
  }

  // Make a http delete request
  delete(url) {
    return new Promise((resolve,reject) => {
      fetch(url, {
        method : 'DELETE',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      .then(respone => respone.json())
      .then(() => resolve('Resource deleted...'))
      .catch(error => reject(error));
    })
  }
}



