document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.banner-details, .expertise, .resume-heading, .job-experience, .brand-design, .Proskills, .project, .works-heading, .testimonial1, .pricing-container, .blog1, .contact-info, .contact-form, .contact-available');

    var observer = new IntersectionObserver( (entries)=> {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(function (element) {
        observer.observe(element);
    });
});
$('.testimonials-details').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: $('.test-next'),
    prevArrow: $('.test-prev'),
    centerMode: false,
    autoplay: true,
});
document.addEventListener('DOMContentLoaded', function () {
    var migratingButton = document.getElementById('migratingButton');
    var scrollTrigger = 1400; // Scroll position (in pixels) to trigger migration

    function handleScroll() {
        var scrollY = window.scrollY || window.pageYOffset;

        if (scrollY > scrollTrigger) {
            migratingButton.classList.add('contact-available');
        } else {
            migratingButton.classList.remove('contact-available');
        }
    }

    // Initial check on page load
    handleScroll();

    // Scroll event listener
    window.addEventListener('scroll', handleScroll);
});
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#FFFFFF ${scrollValue}%, #000000 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    // Initial check on page load
    handleScroll();

    window.addEventListener('scroll', handleScroll);
});
document.addEventListener("DOMContentLoaded", function () {
    const filterList = document.getElementById('filter-list');
    const items = document.querySelectorAll('#filter-items .project');
    const filterItems = filterList.querySelectorAll('li');

    function filterItemsByCategory(filter) {
        let itemCount = 0;
        items.forEach(function (item) {
            if (filter === 'all') {
                item.style.display = 'block';
                item.style.order = itemCount; // Ensures grid layout without empty spaces
                itemCount++;
            } else {
                if (item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    }

    filterList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            // Remove 'active' class from all filter items
            filterItems.forEach(function (filterItem) {
                filterItem.classList.remove('active-work');
            });
            // Add 'active' class to the clicked item
            e.target.classList.add('active-work');

            const filter = e.target.getAttribute('data-filter');
            filterItemsByCategory(filter);
        }
    });

    // Initially display all items
    filterItemsByCategory('all');
});