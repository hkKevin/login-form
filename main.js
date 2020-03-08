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


function pwToggle() {
  let toggle = document.getElementById('passwordToggle');
  let pw = document.getElementById('pw');
  if ( toggle.innerHTML == 'visibility' && pw.type == 'password' ) {
    // if password is hidden, show it
    pw.type = 'text';
    toggle.innerHTML = 'visibility_off';
  } else if ( toggle.innerHTML == 'visibility_off' && pw.type == 'text' ) {
    // if password is shown, hide it
    pw.type = 'password';
    toggle.innerHTML = 'visibility';
  }
  
}