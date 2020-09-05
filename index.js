const checkbox = document.getElementsByClassName('accept');
const body = document.querySelector('body');

checkbox.addEventListener('click', () => {
    console.log('123442');
    if (this.checked) {
        setInterval(() => {
            console.log('test');
        }, 500);
    } else {
        console.log('oops');
    }
})