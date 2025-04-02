//----------------------------------2-------------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  let specialDivs = document.querySelectorAll(".special");
  let overallCount = 1;

  for (let divIndex = 0; divIndex < specialDivs.length; divIndex++) {
    let paragraphs = specialDivs[divIndex].querySelectorAll("p");
    for (let pIndex = 0; pIndex < paragraphs.length; pIndex++) {
      paragraphs[pIndex].textContent = `Div ${divIndex + 1}, Paragraf ${
        pIndex + 1
      }: ${paragraphs[pIndex].textContent}`;
      overallCount++;
    }
  }
});
