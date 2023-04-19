// function to inject css into visting page
function injectCSS(tabId, cssFile) {
    chrome.tabs.insertCSS(tabId, {
        file: cssFile,
        runAt: 'document_start'
    }, function () {
        console.log('new CSS injected into page, sheet: ' + cssFile);
    });
}

chrome.tabs.onActivated.addListener((info) => {
    chrome.tabs.sendMessage(info.tabId, { message: 'TAB_ACTIVATED' });
});

// // add classes to elements on page

// // if deut
// // document . get elemenet by type . add class ( duet )
// //      in duet.css
// //       primary-
// // background-color: xxx
// // text-color: xxx

// listen for changes to storage data
chrome.storage.onChanged.addListener(function (changes, namespace) {
    console.log('detected change in storage');
    // check if key changed
    if ('colorOption' in changes) {
        // get new value
        const newColorblindValue = changes.colorOption.newValue;
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tabId = tabs[0].id;
            console.log('attempting to inject into ' + tabId);
            if (newColorblindValue === 'deuteranopia') {
                injectCSS(tabId, 'styles/deuteranopia.css');
                // add classes to elements
                document.querySelectorAll("h1").forEach(item => { item.classList.add("duet-primary"); console.log("added class") });
            } else if (newColorblindValue === 'protanopia') {
                injectCSS(tabId, 'styles/protanopia.css');
            } else if (newColorblindValue === 'tritanopia') {
                injectCSS(tabId, 'styles/tritanopia.css');
            }
            else if (newColorblindValue === 'monochromatic') {
                injectCSS(tabId, 'styles/monochromatic.css');
            }
        });
    }
});