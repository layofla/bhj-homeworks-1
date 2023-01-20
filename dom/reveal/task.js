const element = document.querySelector('.reveal');

window.addEventListener('scroll', () =>{
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < viewportHeight){
        element.classlist.add('reveal_active');
    }
    if (elementTop < 0 && elementBottom < 0){
        element.classlist.remove('reveal_active'); 
    }
    console.log(element.classlist);
})