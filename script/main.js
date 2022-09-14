const resultField = document.querySelector('.result-main__out');
const bitcoinPrice = document.querySelector('.form-main__price-input');
const dollarChange = document.querySelector('.form-main__change-input');

document.querySelector('.result-main__btn').addEventListener('click', () => {
  resultField.innerHTML = dollarChange.value / bitcoinPrice.value;
});