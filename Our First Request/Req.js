
let url = "https://catfact.ninja/fact";

fetch(url).then((res) => {
  return res.json();
})
  .then((data) => {
    console.log("data 1 = ", data.fact);
    return fetch(url);
  }).then((res) => {
    return res.json();
  })
  .then((data2) => {
    console.log("data2 = ", data2.fact);
  })
  .then((data3) => {
    console.log("data3 = ", data3.fact);
  })
  .then((data4) => {
    console.log("data4 = ", data4.fact);
  })
  .catch((err) => {
    console.log("Error =>", err);

  })

























// let URL = "https://dog.ceo/api/breeds/image/random"
// var a = fetch(URL);
// a.then((Res) => {
//   console.log(Res);
//   return Res.json();

// })
//   .then((data) => {
//     console.log("RETURN URL=>", data.url);
//     return fetch(URL)
//   }).catch((err) => {
//     console.log("Error : ", err);

//   })

// console.log(URL);
// console.log(a);
