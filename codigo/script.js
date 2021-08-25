const scissors = document.getElementById("scissors");
const papper = document.getElementById("papper");
const rock = document.getElementById("rock");
const puntuacion = document.getElementById("score");
const menu = document.querySelector(".menu");
const A = ["rock", "papper", "scissors"];
const rules = document.querySelector(".rules");

puntuacion.textContent = 0;

rules.addEventListener("mouseover", () => {
  rules.style.cursor = "pointer";
});

scissors.addEventListener("mouseover", () => {
  scissors.style.cursor = "pointer";
});
papper.addEventListener("mouseover", () => {
  papper.style.cursor = "pointer";
});
rock.addEventListener("mouseover", () => {
  rock.style.cursor = "pointer";
});

const generador = () => {
  let num = Math.random() * 3;
  num = Math.floor(num);

  return num;
};

const container = document.querySelector(".container-game");
const container_play = document.querySelector(".container-play");
const user = document.querySelector(".container-1");
const computer = document.querySelector(".container-2");
const texto = document.getElementById("ganador");
const btn_try = document.getElementById("try-again");
let ganados = 0;

const escuchar = (boton) => {
  boton.addEventListener("click", () => {
    const numero = generador();

    container.classList.add("hidden");
    user.classList.add(boton.id);

    container_play.toggleAttribute("hidden", false);
    container_play.style.position = "relative";
    menu.classList.remove("hidden");
    btn_try.classList.remove("hidden");
    computer.classList.remove("hidden");

    setTimeout(() => {
      computer.classList.add(A[numero]);
      computer.classList.remove("container-compu");
      if (boton.id == "papper") {
        if (A[numero] == "papper") {
          texto.textContent = "Tie";
        } else if (A[numero] == "rock") {
          texto.textContent = "You Win";
          ganados++;
        } else {
          texto.textContent = "You Lose";
          ganados--;
        }
      } else if (boton.id == "rock") {
        if (A[numero] == "rock") {
          texto.textContent = "Tie";
        } else if (A[numero] == "scissors") {
          texto.textContent = "You Win";
          ganados++;
        } else {
          texto.textContent = "You Lose";
          ganados--;
        }
      }
      if (boton.id == "scissors") {
        if (A[numero] == "scissors") {
          texto.textContent = "Tie";
        } else if (A[numero] == "rock") {
          texto.textContent = "You Lose";
          ganados--;
        } else {
          texto.textContent = "You Win";
          ganados++;
        }
      }

      if (ganados < 0) ganados = 0;

      puntuacion.textContent = ganados;
    }, 500);
  });
};

btn_try.addEventListener("click", () => {
  if (user.classList.contains("papper")) user.classList.remove("papper");
  else if (user.classList.contains("rock")) user.classList.remove("rock");
  if (user.classList.contains("scissors")) user.classList.remove("scissors");

  if (computer.classList.contains("papper"))
    computer.classList.remove("papper");
  else if (computer.classList.contains("rock"))
    computer.classList.remove("rock");
  if (computer.classList.contains("scissors"))
    computer.classList.remove("scissors");

  texto.textContent = " ";
  container_play.style.position = "absolute";
  computer.classList.add("container-compu");
  computer.classList.add("hidden");
  container.classList.remove("hidden");
  container_play.toggleAttribute("hidden", true);
  menu.classList.add("hidden");
  btn_try.classList.add("hidden");
});

escuchar(papper);
escuchar(rock);
escuchar(scissors);

const modal = document.querySelector(".modal");

rules.addEventListener("click", () => {
  if (!container.classList.contains("hidden")) {
    container.classList.add("hidden");
  } else {
    container_play.style.display = "none";
  }
  rules.classList.add("hidden");
  modal.style.display = "flex";
  //document.body.style.background = "rgb(0, 0, 0, 0.1)";
});

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
  modal.style.display = "none";

  if (container_play.style.display != "none")
    container.classList.remove("hidden");
  else container_play.style.display = "flex";
  rules.classList.remove("hidden");
});
