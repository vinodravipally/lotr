const lotr = (string) => {
  if (typeof string !== "string") throw new TypeError("lotr wants a string!");
  return string.replace(/\s/g, "");
};

const lotrBooks = () => {
  var result;
  fetch("https://the-one-api.dev/v2/book", {
    method: "GET",
    headers: {
      "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  })
    .then((response) => response.json())
    .then(function(json){
      result = json;
    });
    return json;
};

exports.lotr = lotr;
exports.lotrBooks = lotr;
