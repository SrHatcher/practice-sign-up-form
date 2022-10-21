const inputs = document.querySelectorAll('.form__text_input');
const button = document.querySelector('.form__button')
const errors = document.querySelectorAll('.form__error_message')

//regular expresion from: http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=email
const emailExpresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

button.addEventListener('click', (event)=>{
    inputs.forEach((element, index)=>{
        if(element.id != "email_input"){
            if(element.value.trimStart()==''){
                element.classList.add('form__text_input--error')
                element.placeholder=''
                errors[index].classList.add('form__error_message--active')
                event.preventDefault()
            }else{
                element.classList.remove('form__text_input--error')
                errors[index].classList.remove('form__error_message--active')
            }
        }else{
            if(element.value.trimStart()==''){
                element.classList.add('form__text_input--error')
                element.placeholder='email@example/com'
                errors[index].classList.add('form__error_message--active')
                event.preventDefault()
            }else if(!emailExpresion.test(element.value)){
                element.classList.add('form__text_input--error')
                element.placeholder='email@example/com'
                errors[index].classList.add('form__error_message--active')
                event.preventDefault()
            }else{
                element.classList.remove('form__text_input--error')
                errors[index].classList.remove('form__error_message--active')
            }
        }
    })
})
