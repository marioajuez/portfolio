let head = document.querySelector(".sidebar")
        let menu = document.querySelector(".menu-sticky")
        let main = document.querySelector("main")



        let width = window.innerWidth
        let offset = 0;
        let lastScroll = 0;



        for (let event of ["load", "resize", "scroll"]) {
            window.addEventListener(event, function () {

                let scrollY = document['documentElement' || 'body'].scrollTop;
                let headHeight = head.clientHeight;

                if (window.innerWidth < 730) {


                    main.style.top = (menu.clientHeight + head.clientHeight) + "px"

                    diff = scrollY - lastScroll;

                    if (offset >= headHeight)
                        menu.style.top = 0

                    if (offset + diff > headHeight) offset = headHeight
                    else if (scrollY < 0) offset = 0
                    else offset = offset + diff

                    if (offset < 0) offset = 0

                    menu.style.top = headHeight + (-offset) + 'px';
                    head.style.top = (-offset) + 'px';
                    lastScroll = scrollY;
                }
                else
                    head.style.top = '40px';
            })
        }