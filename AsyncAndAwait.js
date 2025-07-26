const h1 = document.querySelector("h1")


function ColorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1

      if (num > 5) {
        reject("PRomise Reject")
      }
      console.log(num);

      h1.style.color = color;

      console.log(`Color Changed to ${color}!`);
      resolve("Color Changed");
    }, delay)
  })
}

async function demo() {
  await ColorChange("Red", 1000);
  await ColorChange("Orange", 1000)
  await ColorChange("gold", 1000)
  await ColorChange("lawngreen", 1000)
  await ColorChange("lightcoral", 1000)
  await ColorChange("lightblue", 1000)
  const num = 5;
  console.log("New Number" + num + 5)
}
demo();