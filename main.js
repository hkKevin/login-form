const inputs = document.querySelectorAll('input');

function focusFunc() {
  // Add a class to the grand-parent's node
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}

function blurFunc() {
  let parent = this.parentNode.parentNode;
  // if the value of input field is null...
  if ( this.value == '' ) {
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});

function loginSubmit(event) {
  event.preventDefault();
  location.reload();
}