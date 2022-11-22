let input = document.querySelector("#inp");
let output = document.querySelector("#out");
let btn = document.querySelector("button");

input.addEventListener("change", () => {
  let res = Number(input.value);
  console.log(res);
  output.innerText = Math.floor(res / 2.204)
});
btn.addEventListener("click", () => {
  input.value = "";
  output.innerText = "";
});
