import fetch from 'node-fetch';

export function lotr(string){
  if (typeof string !== "string") throw new TypeError("lotr wants a string!");
  return string.replace(/\s/g, "");
};

export function lotrBooks(){
  var result;
  fetch("https://the-one-api.dev/v2/book", {
    method: "GET",
    headers: {
      "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  }).then(function(response){
    response.json()
    console.log('response', response);
  }).then(function(json){
      result = JSON.stringify(json);
    }).catch(function() {
        console.log("error");
    });
    return result;
};
