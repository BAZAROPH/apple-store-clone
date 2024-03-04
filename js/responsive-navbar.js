let menuButton = document.getElementById('menuButton');
let toggle = false;
let bagImage = document.getElementById('bag');
let navDiv = document.getElementById('navDiv');
let menuMore = document.getElementById('menuMore');
let list = document.getElementById('list');

function noScroll() {
    window.scrollTo(0, 0)
}
  
menuButton.addEventListener('click', ()=>{
    let barOne = menuButton.children[0].children[0];
    let barTwo = menuButton.children[0].children[1];

    if(!toggle){
        // window.onscroll = () => { window.scroll(0, 0); };
        window.addEventListener('scroll', noScroll);
        barOne.classList.remove('translate-y-0.5')
        barTwo.classList.remove('-translate-y-1.5')
        list.classList.remove('hidden');
    
        setTimeout(() => {
            barOne.classList.add('rotate-45');
            barTwo.classList.add('-rotate-45');
        }, 100);

        bagImage.classList.add('invisible');

        navDiv.classList.remove('bg-black/[.8]')
        navDiv.classList.add('bg-black')

        menuMore.classList.remove('hidden');
        menuMore.classList.remove('h-0');
        menuMore.classList.add('h-screen');
        
        toggle = true;
    }else{
        window.removeEventListener('scroll', noScroll);
        barOne.classList.remove('rotate-45');
        barTwo.classList.remove('-rotate-45');
        
        setTimeout(() => {
            barOne.classList.add('translate-y-0.5')
            barTwo.classList.add('-translate-y-1.5')
            list.classList.add('hidden');
        }, 100);

        bagImage.classList.remove('invisible');

        navDiv.classList.remove('bg-black')
        navDiv.classList.add('bg-black/[.8]')

        menuMore.classList.remove('h-screen');
        menuMore.classList.add('h-0');

        setTimeout(() => {
            menuMore.classList.add('hidden');
        }, 300);
        toggle = false;
    }


})