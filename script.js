const form = document.querySelector('form');
const gridContent = document.querySelector('.grid-content');
const content2 = document.querySelector('.content-2');
const dismissBtn = document.querySelector('#dismiss');
const emailInput = document.querySelector('#email')
form.addEventListener("submit", function(event){
    event.preventDefault();
        gridContent.classList.add('hide');
        content2.classList.remove('hide');
})
dismissBtn.addEventListener("click", function(){
    gridContent.classList.remove('hide');
    content2.classList.add('hide');
});