let message = ''


let index = 0;

function log(event) {
    let array = message.split("");
  if (array[index] === undefined) {
    index = 0;
    (event.target.value += " "), array[index];
  }
  event.preventDefault();
  event.target.value += array[index];

  index++;
}

function change(event){
    event.preventDefault()
    message = document.getElementById("secret").value

}
