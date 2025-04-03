//----------------------------------2-------------------------------------//

let specialDivs = document.querySelectorAll(".special");
let globalIndex = 1;

specialDivs.forEach((div, divIndex) => {
  let paragraphs = div.querySelectorAll("p");
  paragraphs.forEach((p, pIndex) => {
    let divNumber = divIndex + 1;
    let paraNumber = pIndex + 1;
    p.textContent = `Div ${divNumber}, Paragraf ${paraNumber}: ${p.textContent}`;
  });
  globalIndex += paragraphs.length;
});
