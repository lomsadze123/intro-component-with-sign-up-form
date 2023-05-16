const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');
const img = document.querySelectorAll('img');
const p = document.querySelectorAll('.p');

function register(event) {
    event.preventDefault();
    let check = false;
    inputs.forEach((input,index) => {
        if(!input.value) {
            input.style.border = '2px solid #FF7979'
            check = true;
            img[index].style.display = 'inline-block';
            input.placeholder = '';
            p[index].style.display = 'block';
        }
    });

    if(!check) {
        form.submit();
    }
};


form.addEventListener('submit', register);
