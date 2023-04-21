// alert("here1");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'TAB_ACTIVATED_D') {

        document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span").forEach(item => { item.classList.add("duet-primary") });
        document.querySelectorAll("em, b").forEach(item => { item.classList.add("duet-secondary") });
        document.querySelectorAll("div:not(:has(div))").forEach(item => { item.classList.add("duet-div") });
        document.querySelectorAll("a").forEach(item => { item.classList.add("duet-link") });
        document.querySelectorAll("body").forEach(item => { item.classList.add("duet-body") });

    } else if (request.message === 'TAB_ACTIVATED_P') {

        document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span").forEach(item => { item.classList.add("pro-primary") });
        document.querySelectorAll("em, b").forEach(item => { item.classList.add("pro-secondary") });
        document.querySelectorAll("div:not(:has(div))").forEach(item => { item.classList.add("pro-div") });
        document.querySelectorAll("a").forEach(item => { item.classList.add("pro-link") });
        document.querySelectorAll("body").forEach(item => { item.classList.add("pro-body") });

    } else if (request.message === 'TAB_ACTIVATED_T') {

        document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span").forEach(item => { item.classList.add("tri-primary") });
        document.querySelectorAll("em, b").forEach(item => { item.classList.add("tri-secondary") });
        document.querySelectorAll("div:not(:has(div))").forEach(item => { item.classList.add("tri-div") });
        document.querySelectorAll("a").forEach(item => { item.classList.add("tri-link") });
        document.querySelectorAll("body").forEach(item => { item.classList.add("tri-body") });

    } else if (request.message === 'TAB_ACTIVATED_M' || request.message === 'TAB_ACTIVATED_N') {

        document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span").forEach(item => { item.classList.remove("duet-primary", "pro-primary", "tri-primary") });
        document.querySelectorAll("em, b").forEach(item => { item.classList.remove("duet-secondary", "pro-secondary", "tri-secondary") });
        document.querySelectorAll("div:not(:has(div))").forEach(item => { item.classList.remove("duet-div", "pro-div", "tri-div") });
        document.querySelectorAll("a").forEach(item => { item.classList.remove("duet-link", "pro-link", "tri-link") });
        document.querySelectorAll("body").forEach(item => { item.classList.remove("duet-body", "pro-body", "tri-body") });

    }
});