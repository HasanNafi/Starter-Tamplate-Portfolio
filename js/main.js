// ============about section tabs=================

(() => {
    const aboutSection = document.querySelector(".about-section");
    const tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        // if event.target.classlist.conatains "tab-item" class and not contains active class
        if (event.target.classList.contains("tab-item") && !event.target.classList.contains("active")) {
            const target = event.target.getAttribute("data-target");
            // deactivate existing tab-item 
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            // activate new tab item
            event.target.classList.add("active", "outer-shadow");
            // deactivate existing active "tab-content"
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // activate new "tab-content"
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();