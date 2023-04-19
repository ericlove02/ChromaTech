// alert("here1");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'TAB_ACTIVATED_D') {
        alert("TAB_ACTIVATED_D");
        document.querySelectorAll("h1").forEach(item => { item.classList.add("duet-primary") });
    } else if (request.message === 'TAB_ACTIVATED_P') {
        alert("TAB_ACTIVATED_P");
        document.querySelectorAll("h1").forEach(item => { item.classList.add("pro-primary") });
    } else if (request.message === 'TAB_ACTIVATED_T') {
        alert("TAB_ACTIVATED_T");
        document.querySelectorAll("h1").forEach(item => { item.classList.add("tri-primary") });
    } else if (request.message === 'TAB_ACTIVATED_M') {
        alert("TAB_ACTIVATED_M");
    } else if (request.message === 'TAB_ACTIVATED_N') {
        alert("TAB_ACTIVATED_N");
        document.querySelectorAll("h1").forEach(item => { item.classList.remove("duet-primary", "pro-primary", "tri-primary") });
    }
});