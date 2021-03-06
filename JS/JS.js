const menu = document.querySelector('#mobile-menu');
const menulink = document.querySelector('.nav_menu');
const skillsSection = document.querySelector('.skillsbar');
const progressbar = document.querySelectorAll('.progressbar');


const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menulink.classList.toggle('active')
}

menu.addEventListener('click',mobileMenu);


$(document).ready(function() {
    $(".morebtn-1").click(function() {
        $(".work-detail-1").toggle("slow");
    });
});


$(document).ready(function() {
    $(".morebtn-2").click(function() {
        $(".work-detail-2").toggle("slow");
    });
});




/* Skills Bar*/
    function showProgress(){
     progressbar.forEach(progressbar=> {
         const value = progressbar.dataset.progress;
         
         progressbar.style.opacity = 1;
         progressbar.style.width = `${value}%`;
     });   
    }


    function hideProgress(){
        progressbarforEach(p=>{
            p.style.opacity = 0;
            p.style.width = 0;
        })
    }


    window.addEventListener('scroll',()=>{
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight /2;

    if(sectionPos<screenPos){
        showProgress();
    }
    else{
        hideProgress();
    }
});

/*Sticky Nav Bar*/
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0);
})

/* Smooth Scroll*/
$(document).ready(function(){
    var linkScroll = $('.nav_link');
    linkScroll.click(function(e){
        e.preventDefault();
        $('body, html').animate({
           scrollTop: $(this.hash).offset().top
        }, 500);
    });
});


function Circlle(el){
    $(el).circleProgress({fill: {color:'rgba(40, 4, 170, 0.788)'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%'
        );
    });
};


Circlle('.round');




$(document).ready(function() {
    $('#btn-resume').click(function(e) {
        e.preventDefault();
        window.location.href = 'ChunKit_Keung.doc';
    });
});


$(document).ready(function() {
    $('#btn-resume1').click(function(e) {
        e.preventDefault();
        window.location.href = 'resume1.xlsx';
    });
});


$(document).ready(function() {
    $('#btn-resume???').click(function(e) {
        e.preventDefault();
        window.location.href = 'resume2.doc';
    });
});