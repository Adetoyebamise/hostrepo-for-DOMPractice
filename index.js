const arrayColors = [
  "blue",
  "green",
  "yellow",
  "red",
  "brown",
  "black",
  "white",
  "violet",
  "purple",
  "pink",
  "maroon",
  "teal",
];

const formInput = document.querySelector("input");
const gridParent = document.querySelector(".parentdiv");
let gridBoxColors = document.querySelectorAll(".gridbox");
const parentList = document.getElementById("allgrid");
const listChildren = parentList.children;

gridBoxColors.forEach((element) => {
  formInput.addEventListener("keyup", (text) => {
    const selectedColorText = text.target.value.toLowerCase().trim();
    for (let index = 0; index < arrayColors.length; index++) {
      const keyUpElement = arrayColors[index];
      if (selectedColorText === keyUpElement) {
        function changeColor(color) {
          parentList.style.background = color;
          element.style.border = "none";
        }
        changeColor(selectedColorText);
      } else {
        listChildren[index].style.background = "none";
        gridParent.style.border = "2px solid rgba(51, 51, 51, 0.452)";
      }
    }
  });
});
