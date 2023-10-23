const options = ["😃", "😄", "😁", "😆", "😅"];
const counters = new Array(options.length).fill(0);
const btnShow = document.querySelector(".btn-show");
const alert = document.querySelector(".alert");

const updateResults = () => {
  const app = document.getElementById("root");

  app.innerHTML = "";

  options.forEach((option, index) => {
    const count = counters[index];
    const optionElement = document.createElement("div");
    const countElement = document.createElement("div");
    optionElement.innerHTML = `${option}`;
    optionElement.classList.add("smiley");
    countElement.classList.add("counter");
    countElement.classList.add("hidden");
    countElement.innerHTML = `${count}`;
    optionElement.addEventListener("click", () => {
      counters[index]++;
      alert.classList.remove("hidden_alert");
      setTimeout(() => {
        alert.classList.add("hidden_alert");
      }, 1000);
      updateResults();
    });
    btnShow.addEventListener("click", () => {
      countElement.classList.remove("hidden");
    });
    app.appendChild(optionElement);
    optionElement.appendChild(countElement);
  });
};

updateResults();
