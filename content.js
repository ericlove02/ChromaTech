// alert("here1");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'TAB_ACTIVATED_D') {

        document.querySelectorAll("h1").forEach(item => { item.classList.add("duet-primary") });
        document.querySelectorAll("h2").forEach(item => { item.classList.add("duet-primary") });
        document.querySelectorAll("h3").forEach(item => { item.classList.add("duet-primary") });
        document.querySelectorAll("h4").forEach(item => { item.classList.add("duet-primary") });
        document.querySelectorAll("h5").forEach(item => { item.classList.add("duet-primary") });
        document.querySelectorAll("h6").forEach(item => { item.classList.add("duet-primary") });
        document.querySelectorAll("p").forEach(item => { item.classList.add("duet-primary") });
        document.querySelectorAll("span").forEach(item => { item.classList.add("duet-primary") });
        document.querySelectorAll("div:not(:has(div))").forEach(item => { item.classList.add("duet-div") });
        document.querySelectorAll("a").forEach(item => { item.classList.add("duet-link") });
        document.querySelectorAll("body").forEach(item => { item.classList.add("duet-body") });

    } else if (request.message === 'TAB_ACTIVATED_P') {

        document.querySelectorAll("h1").forEach(item => { item.classList.add("pro-primary") });
        document.querySelectorAll("h2").forEach(item => { item.classList.add("pro-primary") });
        document.querySelectorAll("h3").forEach(item => { item.classList.add("pro-primary") });
        document.querySelectorAll("h4").forEach(item => { item.classList.add("pro-primary") });
        document.querySelectorAll("h5").forEach(item => { item.classList.add("pro-primary") });
        document.querySelectorAll("h6").forEach(item => { item.classList.add("pro-primary") });
        document.querySelectorAll("p").forEach(item => { item.classList.add("pro-primary") });
        document.querySelectorAll("span").forEach(item => { item.classList.add("pro-primary") });
        document.querySelectorAll("div:not(:has(div))").forEach(item => { item.classList.add("pro-div") });
        document.querySelectorAll("a").forEach(item => { item.classList.add("pro-link") });
        document.querySelectorAll("body").forEach(item => { item.classList.add("pro-body") });

    } else if (request.message === 'TAB_ACTIVATED_T') {

        document.querySelectorAll("h1").forEach(item => { item.classList.add("tri-primary") });
        document.querySelectorAll("h2").forEach(item => { item.classList.add("tri-primary") });
        document.querySelectorAll("h3").forEach(item => { item.classList.add("tri-primary") });
        document.querySelectorAll("h4").forEach(item => { item.classList.add("tri-primary") });
        document.querySelectorAll("h5").forEach(item => { item.classList.add("tri-primary") });
        document.querySelectorAll("h6").forEach(item => { item.classList.add("tri-primary") });
        document.querySelectorAll("p").forEach(item => { item.classList.add("tri-primary") });
        document.querySelectorAll("span").forEach(item => { item.classList.add("tri-primary") });
        document.querySelectorAll("div:not(:has(div))").forEach(item => { item.classList.add("tri-div") });
        document.querySelectorAll("a").forEach(item => { item.classList.add("tri-link") });
        document.querySelectorAll("body").forEach(item => { item.classList.add("tri-body") });

    } else if (request.message === 'TAB_ACTIVATED_M' || request.message === 'TAB_ACTIVATED_N') {

        document.querySelectorAll("h1").forEach(item => { item.classList.remove("duet-primary", "pro-primary", "tri-primary") });
        document.querySelectorAll("h2").forEach(item => { item.classList.remove("duet-primary", "pro-primary", "tri-primary") });
        document.querySelectorAll("h3").forEach(item => { item.classList.remove("duet-primary", "pro-primary", "tri-primary") });
        document.querySelectorAll("h4").forEach(item => { item.classList.remove("duet-primary", "pro-primary", "tri-primary") });
        document.querySelectorAll("h5").forEach(item => { item.classList.remove("duet-primary", "pro-primary", "tri-primary") });
        document.querySelectorAll("h6").forEach(item => { item.classList.remove("duet-primary", "pro-primary", "tri-primary") });
        document.querySelectorAll("p").forEach(item => { item.classList.remove("duet-primary", "pro-primary", "tri-primary") });
        document.querySelectorAll("span").forEach(item => { item.classList.remove("duet-primary", "pro-primary", "tri-primary") });
        document.querySelectorAll("div:not(:has(div))").forEach(item => { item.classList.remove("duet-div", "pro-div", "tri-div") });
        document.querySelectorAll("a").forEach(item => { item.classList.remove("duet-link", "pro-link", "tri-link") });
        document.querySelectorAll("body").forEach(item => { item.classList.remove("duet-body", "pro-body", "tri-body") });

    }
});