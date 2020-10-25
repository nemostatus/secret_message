let message = "hi there person how are you doing today ";
let array = message.split("");
let index = 0;

function log(event) {
  if (array[index] === undefined) {
    index = 0;
    (event.target.value += " "), array[index];
  }
  event.preventDefault();
  event.target.value += array[index];

  index++;
}
