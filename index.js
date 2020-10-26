let message = 'Enter a secret message below and then hand off the computer to reveal the secret to someone!'



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
    document.getElementById("prompt").value = ''
    message = document.getElementById("secret").value

}
