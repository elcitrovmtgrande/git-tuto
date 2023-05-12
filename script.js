document.addEventListener('DOMContentLoaded', function() {

  let name = '';

  const Button = document.getElementById('btn');
  const Input = document.getElementById('input');

  Input.addEventListener('keydown', function(e) {
    name = e.target.value;
  });
  
  Button.addEventListener('click', ()=> {
    alert(`Hello ${name}`)
  })
});