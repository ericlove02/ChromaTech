chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'DO_SOMETHING_MESSAGE') {
        // Perform desired action here
    }
});