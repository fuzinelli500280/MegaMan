const megaman = document.querySelector(".megaman");
const enemy = document.querySelector(".enemy");
const jogo = document.querySelector(".jogo");

const jump = () =>{
  megaman.classList.add("jump");
  megaman.src = "img/megamanshoot.gif";
  megaman.style.width = "125px";
  megaman.style.height = "auto";

  setTimeout(() => {
    megaman.classList.remove("jump");
    megaman.src = "img/megaman.gif";
    megaman.style.width = "";
    megaman.style.height = "";

  }, 900);
};

const loop = setInterval(() => {
  const enemyPosition = enemy.offsetLeft;
  const megamanPosition = +window.getComputedStyle(megaman).bottom.replace("px", "");

  if (enemyPosition < 110 && enemyPosition > 50 && megamanPosition < 220) {
    enemy.style.animation = "none";
    enemy.style.left = `${enemyPosition}px`;

    megaman.style.animation = "none";
    megaman.src = "img/megamandeath.gif";
    megaman.style.width = "120px";
    megaman.style.height = "auto";

    jogo.src ="img/gameover.png"
  }
}, 10);

document.addEventListener("click", jump);
