const options = ["😃", "😄", "😁", "😆", "😅"];
const counters = new Array(options.length).fill(0);
const app = document.getElementById("root");
const btnShow = document.querySelector(".btn-show");
const alert = document.querySelector(".alert");

const updateResults = () => {
  app.innerHTML = "";

  options.forEach((option, index) => {
    const count = counters[index];
    const optionElement = document.createElement("div");
    optionElement.innerHTML = `${option}`;
    optionElement.classList.add("smiley");
    optionElement.dataset.index = index; // Зберігаємо індекс у dataset
    app.appendChild(optionElement);
  });
};

updateResults();

app.addEventListener("click", (event) => {
  if (event.target.classList.contains("smiley")) {
    const index = event.target.dataset.index;
    counters[index]++;
    alert.classList.remove("hidden_alert");
    setTimeout(() => {
      alert.classList.add("hidden_alert");
    }, 1000);
    updateResults();
  }
});

btnShow.addEventListener("click", () => {
  app.innerHTML = ""; // Очищаємо вміст перед показом результатів
  options.forEach((option, index) => {
    const count = counters[index];
    const optionElement = document.createElement("div");
    const countElement = document.createElement("div");
    optionElement.innerHTML = `${option}`;
    optionElement.classList.add("smiley");
    countElement.classList.add("counter");
    countElement.innerHTML = `${count}`;
    app.appendChild(optionElement);
    optionElement.appendChild(countElement);
  });
});
