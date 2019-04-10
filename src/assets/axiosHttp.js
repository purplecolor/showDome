import axios from "axios";


let instance=axios.create({
  timeout: 10000,
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer" + "dbf357cef684390b2a6ada7715e3266b_M"
  }
});
const GET = (url, params) => {
    return new Promise((resolve, reject) => {
      if (params) {
        let query = "";
        for (let key in params) {
          if (!query) {
            query += `${key}=${params[key]}`;
          } else {
            query += `&${key}=${params[key]}`;
          }
        }
        url = `${url}?${query}`;
      }
      instance.get(url, params)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
  export {
      GET
  }