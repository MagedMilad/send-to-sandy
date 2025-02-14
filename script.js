const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = `Maged: Let's go on a date. 
  Sandy: hmmmmmm it's a boiler.`;
  gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHdma3gxdGJzaG5uZjF1ZXk4YjlsZ3Nyemc4eWhuc2wwM2FtbTB6cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41JWw65TcBGjPpRK/giphy.gif";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
