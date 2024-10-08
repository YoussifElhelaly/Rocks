import getProjects from './features/getProjects.js';
import getServices from './features/getServices.js';
let serviceContainer = document.getElementById("serviceContainer")
let projectsContainer = document.getElementById("projectsContainer")


async function showProducts() {
    let services = await getServices()
    .then(res => res.json())
    console.log(serviceContainer)
    services.data.forEach(element => {
        serviceContainer.innerHTML += `
        <div class="col-lg-4 mb-5 mb-lg-0">
        <a href="#" class="service-card wow fadeInUp" data-wow-delay="0.2s">
        <div class="icon">
        <i class="far fa-hard-hat"></i>
        </div>
        
        <div class="logo">
            <img src="assets/img/rocks/w-a.png" data-src="assets/img/rocks/w-a.png" alt="">
            <h5 class="fsz-24 mb-20 d-none"> Rocks Brilliance </h5>
        </div>
        <div class="text color-666 mb-50">
            ${element.description}
        </div>
        <div class="img">
        <img data-src="${element.image}" src="${element.image}" alt="" class="img-cover">
        </div>
        
        <span class="arrow"> See More </span>
        </a>
        </div>
        `
    });
    console.log(serviceContainer)
}
async function showProjects() {
    let services = await getProjects()
    .then(res => res.json())
    services.data.forEach(element => {
        console.log(element)
        let date = element.date.split(" ")
        projectsContainer.innerHTML += `
       <div class="swiper-slide">
            <div class="blog-card">
                <div class="img">
                    <img data-src="${element.image}" src="${element.image}" class="img-cover">
                </div>
                <div class="info">
                    <div class="date">
                        <div class="num fsz-45 mb-2"> ${date[0]} </div>
                        <small class="fsz-12 text-uppercase color-666"> ${date[1]} <br> ${date[2]} </small>
                    </div>
                    <div class="cont">
                        <a href="#" class="title d-block fsz-20 hover-orange1 mb-15 fw-600"> ${element.title} </a>
                        <small class="fsz-12 color-orange1"> ${element.tag} </small>
                    </div>
                </div>
            </div>
        </div>
        `
    });
    console.log(serviceContainer)
}
showProducts() 
showProjects()

$( function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();

    // ---------- background change -----------
    var pageSection = $(".bg-img");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    

    // ---------- to top -----------

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $("#to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });

    $('#to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    });

    // -------- counter --------
    $('.counter').countUp({
        delay: 10,
        time: 2000
    });


     /* ==  float_box_container button  == */
    $( ".float_box_container" ).mousemove(function(e) {
        var parentOffset = $(this).offset(); 
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(".float_box").css({"left": relX, "top": relY });
        $(".float_box").addClass("show");
    });
    $( ".float_box_container" ).mouseleave(function(e) {
        $(".float_box").removeClass("show");
    });

    // -------- fav-btn --------
    $(".fav-btn").on("click", function(){
        $(this).toggleClass("active");
    })

    // -------- cls --------
    $(".cls").on("click", function(){
        $(this).parent().fadeOut();
    })

    // ------------ working in desktop -----------
    if ($(window).width() > 991) {
        $('.parallaxie').parallaxie({
        });
    }

    // ---------- tooltip -----------
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // ---------- to top -----------
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $(".to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });
        
});



// ------------ Preloader -----------
$( function() {
    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont , .loader-wrap-heading .logo", {
        delay: 1.5,
        y: -100,
        opacity: 0,
    });
    tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
    }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
        y: -1500,
    });
    tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
    });
    tl.from(
        "header , .header",
        {
            y: 200,
        },
        "-=1.5"
    );
    tl.from(
        "header .container , .header .container",
        {
            y: 40,
            opacity: 0,
            delay: 0.3,
        },
        "-=1.5"
    );
});


$(window).on("load", function () {

    // ------------ Preloader -----------
    var body = $('body');
    body.addClass('loaded');
    setTimeout(function () {
        body.removeClass('loaded');
    }, 1500);

});
