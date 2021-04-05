let $window = $(window),
    $document = $(document),
    Nav = $("nav"),
    menuLinks = $("nav .nav-list .nav-item .nav-link"),
    Body = $("body"),
    Html = $("html"),
    ScrollToTop = $("#Scroll-To-Top"),
    testimonialsSlider = $(".testimonials .testimonials-content .slider"),
    htmlBody = $("html, body");

$window.on("load", function () {
    "use strict";
    // Preloader
    $(".preloader")
        .delay(400)
        .fadeOut(600, function () {
            $(this).remove();
        });
});

$(function () {
    "use strict";
    // Nav Fixed on Scroll
    if ($window.scrollTop() > 0) {
        Nav.addClass("fixed");
    } else {
        Nav.removeClass("fixed");
    }

    $window.on("scroll", function () {
        if ($window.scrollTop() > 0) {
            Nav.addClass("fixed");
        } else {
            Nav.removeClass("fixed");
        }
    });

    menuLinks.on("click", function (e) {
        e.preventDefault();
        $(".nav-item").removeClass("active");
        $(this).parent(".nav-item").addClass("active");
        $("html, body").animate(
            {
                scrollTop: $($(this).data("link")).offset().top,
            },
            1000
        );
    });

    // Scroll to Top Button
    function scrolltopbtn() {
        if ($window.scrollTop() >= 600) {
            ScrollToTop.css("display", "block");
        } else {
            ScrollToTop.css("display", "none");
        }
    }

    scrolltopbtn();

    $window.on("scroll", function () {
        scrolltopbtn();
    });

    ScrollToTop.on("click", function () {
        $("body ,html").animate(
            {
                scrollTop: 0,
            },
            1000
        );
    });
    $(".nav-btn").on("click", function (e) {
        $(".nav-list").toggleClass("active");
        $(this).toggleClass("active");
    });
    function calcMargin() {
        if ($(".teachers__cards").height()) {
            if ($(".teachers__cards").height() <= 308) {
                $(".section-schoolLife").css("margin-top", "10rem");
            } else if ($(".teachers__cards").height() === 616) {
                $(".section-schoolLife").css("margin-top", "35rem");
            } else if ($(".teachers__cards").height() === 1232) {
                $(".section-schoolLife").css("margin-top", "75rem");
            }
        }
    }
    calcMargin();
    function calcHeight() {
        var heightImg, heightbody, height;
        $(".card__img").each(function () {
            heightImg = $(".card__img").height();
        });

        $(".card__body").each(function () {
            heightbody = $(this).height();
        });
        height = heightImg + heightbody;

        $(".card").css("height", height);
    }
    calcHeight();
    $window.on("resize", () => {
        calcMargin();
        calcHeight();
    });
    //owl carousel
    if ($(".testimonials").length) {
        // Fire Owl Carousel Slider Plugin in Testimonials Section
        testimonialsSlider.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 600,
            dragEndSpeed: 600,
            dotsSpeed: 600,
            rtl: false,
            responsive: {
                0: {
                    center: false,
                    autoWidth: false,
                    items: 1,
                },
                768: {
                    center: true,
                    autoWidth: true,
                    items: 3,
                },
            },
        });
    }
    // Smooth Scroll
    if (menuLinks.attr("data-value")) {
        menuLinks.on("click", function (e) {
            e.preventDefault();
            console.log(e);
            htmlBody.animate(
                {
                    scrollTop: $($(this).data("value")).offset().top,
                },
                600
            );
        });
    }

    // Fire Magnific Popup Plugin in about Section
    if ($(".about .composition").length) {
        $(".composition a").each(function () {
            if (!$(this).attr("href") || $(this).attr("href") === "#") {
                $(this).attr("href", $(this).children("img").attr("src"));
            }
        });

        $(".composition").magnificPopup({
            delegate: ".item:not(.hidden)",
            type: "image",
            gallery: {
                enabled: true,
            },
            titleSrc: function (item) {
                return item.el.attr("title") + "<small>by hoda salah</small>";
            },
        });
    }
    // Fire Magnific Popup Plugin in Portfolio Section
    if ($(".items").length) {
        $(".items .item ").each(function () {
            if (!$(this).attr("href") || $(this).attr("href") === "#") {
                $(this).attr("href", $(this).children("img").attr("src"));
            }
        });

        $(".items").magnificPopup({
            delegate: ".item",
            type: "image",
            gallery: {
                enabled: true,
            },
            titleSrc: function (item) {
                return item.el.attr("title") + "<small>by hoda salah</small>";
            },
        });
    }

    // Nice Scroll Plugin
    Html.niceScroll({
        cursorcolor: "#ed3f27",
        background: "#f9f9f9",
        cursorborder: "none",
        cursorwidth: "4px",
        cursorborderradius: "0",
        cursorminheight: 130,
        hidecursordelay: 1000,
        horizrailenabled: false,
        zindex: "5000",
    });

    // Fix NiceScroll Plugin After Loading
    $window.on("scroll", function () {
        Html.getNiceScroll().resize();
    });
});
