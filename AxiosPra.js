let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let fact = await getApi();
  console.log("Hello");
  console.log(fact);

  let p = document.querySelector("#result")
  p.innerText = fact;
});


let url = "https://catfact.ninja/fact";

async function getApi() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (error) {
    console.log("ERROR", error);
    return "Not A Fact";
  }
}

