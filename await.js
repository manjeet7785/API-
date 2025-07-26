//---------

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 10)
      console.log("The Suggested Number Here", num);
      resolve("Num");
    }, 1000)
  })


}

async function Checker() {
  await getNum()
  await getNum()
  await getNum()
  await getNum()
}
Checker();
