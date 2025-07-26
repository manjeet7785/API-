async function greet() {
  throw ("Weak Connection")
  return "Hello"

}
greet().then((result) => {
  console.log("Result Here", result);

}).catch((error) => {
  console.log("Error Here :", error);
})

