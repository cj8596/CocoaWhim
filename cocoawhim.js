const items = ["🤎","🍫","✨","🤍"];

function createFloating(){

  const el = document.createElement("div");

  el.classList.add("floating");

  el.innerHTML =
  items[Math.floor(Math.random()*items.length)];

  el.style.left =
  Math.random()*100 + "vw";

  el.style.animationDuration =
  (4 + Math.random()*5) + "s";

  document.body.appendChild(el);

  setTimeout(()=>{
    el.remove();
  },9000);

}

/* SPLASH SCREEN */

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  const video =
  document.getElementById("logoVideo");

  video.onended = () => {

    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none";
    },1000);

  };

});

setInterval(createFloating,700);