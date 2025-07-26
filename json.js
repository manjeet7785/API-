var jsonData = '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';
let validRes = JSON.parse(jsonData);
console.log(validRes.fact);


var ApnaApi = {
  name: "Manjeet",
  age: "21",
  school: "Manjeet Kumar "
}

var newApi = JSON.stringify(ApnaApi);
console.log(ApnaApi);
console.log(newApi);


