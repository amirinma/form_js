
elemGenerator(document.getElementById('main-div'), 1, 'form', 'class', 'main-form' )
elemGenerator(document.getElementsByClassName('main-form')[0], 1, 'label', 'id', 'main-f-lb')
let formSelect = document.getElementById('main-f-lb0')
formSelect.textContent = 'Slect Food'
elemGenerator(document.getElementById('main-f-lb0'), 1, 'select', 'id', 'form-select')
elemGenerator(document.getElementById('form-select0'), 4, 'option', 'id', 'main-select-op')
document.getElementById('main-select-op0'). textContent = 'Select Food'
document.getElementById('main-select-op1'). textContent = 'Model 1'
document.getElementById('main-select-op2'). textContent = 'Model 2'
document.getElementById('main-select-op3'). textContent = 'Model 3'

function elemGenerator(parEl, quanEl, typeEl, attrName, attrVal) {
  for (let i = 0; i < quanEl; i++) {
    let elem = parEl.appendChild(document.createElement(`${typeEl}`)).setAttribute(`${attrName}`, `${attrName === "id" ? attrVal + [i] : attrVal}`)
    console.log('hi')
  }
}
