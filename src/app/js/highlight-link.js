const sections = document.querySelectorAll("section[id]");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    
    let scrollY = window.pageYOffset;
    let detectSection = (scrollDetect()) ? 20 : 500;

    for (let i = 0; i < sections.length; i++) {


        let sectionHeight = sections[i].offsetHeight;
        let sectionTop = sections[i].offsetTop - detectSection;
        let sectionId = sections[i].getAttribute("id");
        let selector = document.querySelector(
            ".navigation a[href*=" + sectionId + "]"
        );

        switch (true) {
            case scrollY < sections[0].offsetTop:
                document
                    .querySelector(".navigation a[href*= 'about']")
                    .classList.add("active");
                break;
            case scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight &&
                sectionId == sections[i].id:
                selector.classList.add("active");
                break;
            default:
                selector.classList.remove("active");
                break;
        }
    }
});

let scrollDetect = () => {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
     // Get Current Scroll Value
    if (currentScroll > 0 && lastScroll <= currentScroll) {
        lastScroll = currentScroll;
        return true;
    } else {
        lastScroll = currentScroll;
        return false;
    }
}
