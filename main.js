document.querySelector('#txtPAN').maxLength = 19;
document.querySelector('#txtPAN').addEventListener('keyup', formatCreditCard);
document.querySelector('#validityPAN').placeholder = 'mm/yy';
document.querySelector('#validityPAN').maxLength = 5;

function formatCreditCard() {
    let input = document.querySelector('#txtPAN');
    if (input.value.length < 19) {
        input.value = input.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}
