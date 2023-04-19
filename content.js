chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("test");
    alert("here");
    if (request.message === 'TAB_ACTIVATED') {
        console.log("test2");
        // Perform desired action here
        alert("here2");
    }
});