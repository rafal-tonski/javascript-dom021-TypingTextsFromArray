const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = [
  "Hello!",
  "It's me.",
  "I was wondering if after all these years you’d like to meet...",
];

let activeLetter = -30;
let activeText = 0;

const addSentence = () => {
  if (activeLetter >= 0) {
    spnText.textContent += txt[activeText][activeLetter];
  }
  activeLetter++;
  if (activeLetter === txt[activeText].length) {
    activeText++;
    if (activeText === txt.length) return;
    return setTimeout(() => {
      activeLetter = 0;
      spnText.textContent = "";
      addSentence();
    }, 2000);
  }

  setTimeout(addSentence, 100);
};

addSentence();
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
