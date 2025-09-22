const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const topicBody1 = document.getElementById("first-topic-body");
const topicBody2 = document.getElementById("second-topic-body");
const topicBody3 = document.getElementById("third-topic-body");

const topicTitle1 = document.getElementById("first-topic-title-div");
const topicTitle2 = document.getElementById("second-topic-title-div");
const topicTitle3 = document.getElementById("third-topic-title-div");

button1.addEventListener("click", () => {
  button1.classList.toggle("ativo");
  topicBody1.classList.toggle("visible1");
  topicTitle1.classList.toggle("showDiv1");
});

button2.addEventListener("click", () => {
  button2.classList.toggle("ativo");
  topicBody2.classList.toggle("visible2");
  topicTitle2.classList.toggle("showDiv2");
});

button3.addEventListener("click", () => {
  button3.classList.toggle("ativo");
  topicBody3.classList.toggle("visible3");
  topicTitle3.classList.toggle("showDiv3");
});
