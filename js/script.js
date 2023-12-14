// ============Typing Animation============
var typed = new Typed('.typing',{
    strings:[' ', 'You Tuber', 'Video Editor', 'Content Creator'],
    typeSpeed:100,
    backSpeed:70,
    loop:true
})

const asideAn = document.querySelectorAll(".aside-a");

asideAn.forEach(asideA=>{
    asideA.addEventListener('click', function () {
        asideAn.forEach(asideA => asideA.classList.remove('active'));
        this.classList.add('active'); 
    });
});
