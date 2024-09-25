// imports
import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notANumber, IMC } from './utils.js '
// vars
const form = document.querySelector('form')
const inputPeso = document.querySelector('#weight')
const inputAltura = document.querySelector('#height')
//verificador de input
inputAltura.oninput = () => (!notANumber(inputAltura.value)) ? AlertError.close() : AlertError.open()
inputPeso.oninput = () => (!notANumber(inputPeso.value)) ? AlertError.close() : AlertError.open()
// codigo em si

form.onsubmit = e => {
    e.preventDefault()
    
    const peso = inputPeso.value    
    const altura = inputAltura.value    
    
    const resultado = IMC(peso, altura)
    const message =  `Seu ImC é ${resultado}`
    Modal.message.innerText = message

    Modal.open()
    
}
