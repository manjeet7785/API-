
var url = "http://universities.hipolabs.com/search?name=";

var country = "nepal"
console.log(country);

async function getCollage() {
  console.log("NEPAL");

  try {
    let res = await axios.get(url + country);
    console.log(res);
    console.log("NEPAL");
    return res;
  }
  catch (e) {
    lo
    console.log("Error : :", e);

  }
}
getCollage();