/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

window.onload = function() {
    const template          = document.getElementById("template");
    const template_modals   = document.getElementById("template_modals");
    const template_about    = document.getElementById("template_about");
    const template_service  = document.getElementById("template_service");
    const page              = document.getElementById("page-top");
    const portfolios        = document.getElementById("portfolios");
    const about             = document.getElementById("about_list");
    const services          = document.getElementById("services_list");

    // 作品集
    $.each(portfolio_data,function(index, value){
        let i = index+1;
        // 作品集
        let t = template.content.cloneNode(true);
        t.querySelector(".portfolio-link").href = "#portfolioModal"+i;
        t.querySelector("img").src = "assets/img/portfolio/"+value.img;
        t.querySelector("div.title").innerHTML = value.title;
        t.querySelector("div.subtitle").innerHTML = value.content;
        portfolios.appendChild(t);

        // 作品集 Model
        let tm = template_modals.content.cloneNode(true);
        tm.querySelector(".portfolio-modal").id = "portfolioModal"+i;
        tm.querySelector("h2.title").innerHTML = value.title;
        tm.querySelector("p.subtitle").innerHTML = value.content;
        tm.querySelector(".portfolio_img").src = "assets/img/portfolio/"+value.img;
        tm.querySelector("p.description").innerHTML = value.description;
        tm.querySelector("p.skill").innerHTML = value.skill.join("、");
        tm.querySelector(".portfolio_url").href = value.url;
        page.appendChild(tm);
    });

    // 關於
    $.each(experience_data,function(index, value){
        let i = index+1;
        let ta = template_about.content.cloneNode(true);
        if(i%2 == 0)
            ta.querySelector("li").classList.add("timeline-inverted");
        ta.querySelector("h4.interval").innerHTML = value.interval;
        ta.querySelector("h4.company").innerHTML = value.company;
        ta.querySelector("p").innerHTML = value.description;
        ta.querySelector("img").src = "assets/img/about/"+i+".jpg";
        about.appendChild(ta);
    });

    // 服務項目
    $.each(service_data,function(index, value){
        let ts = template_service.content.cloneNode(true);
        ts.querySelector("h4").innerHTML = value.service;
        ts.querySelector("p").innerHTML = value.description;
        ts.querySelector(".service_icon").classList.add(value.icon);
        services.appendChild(ts);
    });
};
