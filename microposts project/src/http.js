class EasyHttp {

  // Make an Http get request
   async get(url) {
    const respone = await fetch(url);
    const resData = await respone.json();
    return resData;
  }

  // Make an Http post request
  async post(url, data) {

    const respone = await fetch(url, {
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(data)
      });

    const resData = await respone.json();
    return resData;  
  }

  // Make an http put request
  async put(url, data) {

      const respone = await fetch(url, {
        method : 'PUT',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      
      const resData = await respone.json();
      return resData;  
  }

  // Make a http delete request
  async delete(url) {

      const respone = await fetch(url, {
        method : 'DELETE',
        headers : {
          'content-type' : 'application/json'
        },
      })
      
      const resData = await 'Resource Deleted..';
      return resData;  
  }
}

export const http =   new EasyHttp();

