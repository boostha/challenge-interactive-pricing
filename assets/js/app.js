const inputSlider = document.getElementById('slider')
const valuePrice = document.querySelector('.price-value')
const checkBox = document.getElementById('checkbox')

inputSlider.addEventListener('input', () => {
  if (checkBox.checked) {
    valuePrice.innerHTML = `$${(((inputSlider.value * 0.25) * 0.25) * 12)} <span>/year</span>`
  } else {
    valuePrice.innerHTML = `$${(inputSlider.value * 0.25)} <span>/month</span>`
  }
})