# Familist
our project- manage family list



//service component
service(url,method,data,callback,callbackerr){
//const baseUrl = 'http://4004/';
const baseUrl = 'https://family.heroku.com/';

axios[method](baseUrl + url, body)
  .then(function (response) {
      callback(response);
      //callback(response.body);
      console.log(response);
  })
  .catch(function (error) {
      callbackerr(error);
      console.log(error);
  });

}




//example for service component usuge
service('users/view', 'get', function(data) {
    console.log(data);
    }, function(error) {
        console.error(error);
        })
