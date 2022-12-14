const lotr = (string) => {
  if (typeof string !== "string") throw new TypeError("lotr wants a string!");
  return string.replace(/\s/g, "");
};

const lotrBooks = () => {
  // var result;
  // fetch("https://the-one-api.dev/v2/book", {
  //   method: "GET",
  //   headers: {
  //     "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then(function(json){
  //     result = json;
  //   });
  //   return json;
  var result;
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "https://the-one-api.dev/v2/book")
  xhr.setRequestHeader("Authorization", "Bearer AxoX8sb7aJLhtwQd1Nbn");
  //send the Http request
  xhr.send()

  //EVENT HANDLERS

  //triggered when the response is completed
  xhr.onload = function() {
    if (xhr.status === 200) {
      data = JSON.parse(xhr.responseText)
      result = data;
    } else if (xhr.status === 404) {
      console.log("No records found")
    }
  }

  xhr.onerror = function() {
    console.log("Network error occurred")
  }
  return result;
};

exports.lotr = lotr;
exports.lotrBooks = lotrBooks;
