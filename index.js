var img1 = document.querySelector("#profile");
var inp = document.querySelector("#input-file");

inp.onchange = function () {
  img1.src = URL.createObjectURL(inp.files[0]);
  console.log(inp.files[0]);
};

