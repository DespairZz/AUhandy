const form = document.querySelector('.form')
const validateBtn = form.querySelector('.validateBtn')
let yourName = form.querySelector('.form-name')
let email = form.querySelector('.form-email')
let phone = form.querySelector('.form-phone')
let fields = form.querySelectorAll('.form__input')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/
    let reg2 = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    let reg3 = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/


        if (!validate(reg, email.value)) {
            email.classList.add('_error');
        }else{
            email.classList.add('_good');
        }

        if (!validate(reg2, phone.value)) {
            phone.classList.add('_error');
        }else{
            phone.classList.add('_good');
        }

        if (!validate(reg3, yourName.value)) {
            yourName.classList.add('_error');
        }else{
            yourName.classList.add('_good');
        }


    function validate(regex, fields) {
        return regex.test(fields);
    }

})