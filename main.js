const button = document.querySelector('#my-button');
button.addEventListener('click', () => {

  const firstTextInput = document.querySelector('#first-text-input');
  console.log(firstTextInput.value);

  const numberInput = document.querySelector('#number-input');
  console.log(numberInput.value);

  const colorInput = document.querySelector('#color-input');
  const body = document.querySelector('form');
  document.body.style.backgroundColor = colorInput.value;

  const checkboxesElement = document.querySelector('#checkboxes');
  const checkboxes = checkboxesElement.querySelectorAll('input');
  
  for (const checkbox of checkboxes) {
    console.log(checkbox.checked);
  }
});

// disable form from refreshing the page when you press enter
const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', (event) => {
  event.preventDefault();
});