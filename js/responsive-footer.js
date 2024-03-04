let footerElements = document.getElementById('footerElements')
for (let index = 0; index < footerElements.children.length; index++) {
    footerElements.children[index].children[0].children[1].addEventListener('click', ()=>{
        for (let i = 0; i < footerElements.children.length; i++) {
            if(!footerElements.children[i].children[1].classList.contains('hidden') && index!==i){
                footerElements.children[i].children[1].classList.add('hidden')
                footerElements.children[i].children[0].children[1].classList.remove('rotate-45');
                footerElements.children[i].children[1].classList.add('-translate-y-6')
                footerElements.children[i].children[1].classList.remove('-translate-y-0')
            }
            
        }
        if(footerElements.children[index].children[1].classList.contains('hidden')){
            footerElements.children[index].children[1].classList.remove('hidden')
            footerElements.children[index].children[0].children[1].classList.add('rotate-45');
            setTimeout(() => {
                footerElements.children[index].children[1].classList.remove('-translate-y-6')
                footerElements.children[index].children[1].classList.add('-translate-y-0')
            }, 100);
        }else{
            footerElements.children[index].children[1].classList.add('hidden')
            footerElements.children[index].children[0].children[1].classList.remove('rotate-45');
            footerElements.children[index].children[1].classList.add('-translate-y-6')
            footerElements.children[index].children[1].classList.remove('-translate-y-0')

        }
    })
}