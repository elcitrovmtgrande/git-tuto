document.addEventListener('DOMContentLoaded', function() {

  let inputVal = '';

  const Button = document.getElementById('btn');
  const Input = document.getElementById('input');

  Input.addEventListener('keydown', function(e) {
    inputVal = e.target.value;
  });
  
});