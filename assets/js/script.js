// 'load' event of the window MEANS THE CODE inside the callback function will run when the web page finishes loading.
window.addEventListener('load', () => {

    let searchForm = document.querySelector('.search-form');
    let searchBtn = document.querySelector('#search-btn');

    searchBtn.onclick = () => {
        searchForm.classList.toggle('active');
    }

    window.onscroll = () => {
        searchForm.classList.remove('active');
    }

    let menubar = document.querySelector('#menu');
    let bxMenu = document.querySelector('.bx-menu')
    let menuRight = document.querySelector('.menu-right');

    menubar.onclick = () => {
        menuRight.classList.toggle('active');
        if (menuRight.classList.contains('active')) {
            bxMenu.classList.remove('bx-menu', 'bx')
            bxMenu.classList.add('bx', 'bx-x')
                // console.log(bxMenu)
        } else {
            bxMenu.classList.remove('bx-x', 'bx')
            bxMenu.classList.add('bx', 'bx-menu')
                // console.log(bxMenu)
        }
    }

    window.onscroll = () => {
        menuRight.classList.remove('active');
        bxMenu.classList.remove('bx-x', 'bx')
        bxMenu.classList.add('bx', 'bx-menu')
    }

    // Copyright year
    document.getElementById("year").innerHTML = new Date().getFullYear();

    $(document).ready(function() {

        $(window).scroll(function() {
            //Navbar-bottom scrolling
            if (this.scrollY > 5) {
                $('.navbar-bottom').addClass("sticky");
                $('.showcase .navbar-bottom .menu-right').css("top", "3.1rem");
            } else {
                $('.navbar-bottom').removeClass("sticky");
                $('.showcase .navbar-bottom .menu-right').css("top", "4.7rem");
            }

            //Scrolling Button Btn
            if (this.scrollY > 500) {
                $('.scroll-up-btn').addClass("show");
            } else {
                $('.scroll-up-btn').removeClass("show");
            }
        });

        //slide up script
        $('.scroll-up-btn').click(function() {
            $('html').animate({ scrollTop: 0 });
        });

        //owl owlCarousel
        $('.owl-carousel').owlCarousel({
            margin: 5,
            mavigation: true,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,

            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });
    });

})