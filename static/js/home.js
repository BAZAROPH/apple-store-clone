let backButton  = document.getElementById('back');
let nextButton = document.getElementById('next');
let slideOne = document.getElementById('slideOne');
let slideStep = 0

backButton.addEventListener('click', ()=>{
    if(slideStep !== 0){
        slideStep -= 162
        slideOne.scrollLeft = slideStep;
    }
})
nextButton.addEventListener('click', ()=>{
    if(slideStep < 238.5){
        slideStep += 162
        slideOne.scrollLeft = slideStep;
    }
})

setInterval(() => {
    console.log( slideOne.scrollLeft);
    if(slideOne.scrollLeft === 0 ){
        backButton.style.display = 'none';
    }else{
        backButton.style.display = 'block';
    }

    if(slideOne.scrollLeft >= 238.5 ){
        nextButton.style.display = 'none';
    }else{
        nextButton.style.display = 'block';
    }
}, 300);