window.onload = async function main() {
    // function to inject css into visting page
    function injectCSS(tabId, cssFile) {
        chrome.tabs.insertCSS(tabId, {
            file: cssFile,
            runAt: 'document_start'
        }, function () {
            console.log('new CSS injected into page, sheet: ' + cssFile);
        });
    }

    // get data from chrome storage
    const getStorage = async function (key) {
        return new Promise((resolve, reject) => {
            try {
                chrome.storage.sync.get(key, function (value) {
                    resolve(value[key]);
                });
            } catch (ex) {
                reject(ex);
            }
        });
    };

    // on a new page load, set classes and inject css
    chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
        if (changeInfo.status === 'complete') {
            var option = await getStorage('colorOption');
            if (option === 'deuteranopia') {
                chrome.tabs.sendMessage(tabId, { message: 'TAB_ACTIVATED_D' });
                injectCSS(tabId, 'styles/deuteranopia.css');
            } else if (option === 'protanopia') {
                chrome.tabs.sendMessage(tabId, { message: 'TAB_ACTIVATED_P' });
                injectCSS(tabId, 'styles/protanopia.css');
            } else if (option === 'tritanopia') {
                chrome.tabs.sendMessage(tabId, { message: 'TAB_ACTIVATED_T' });
                injectCSS(tabId, 'styles/tritanopia.css');
            } else if (option === 'monochromatic') {
                chrome.tabs.sendMessage(tabId, { message: 'TAB_ACTIVATED_M' });
                injectCSS(tabId, 'styles/monochromatic.css');
            } else {
                chrome.tabs.sendMessage(tabId, { message: 'TAB_ACTIVATED_N' });
            }
        }
    });

    // on storage data change, set classes and inject css
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
                    chrome.tabs.sendMessage(tabId, { message: 'TAB_ACTIVATED_D' });
                    injectCSS(tabId, 'styles/deuteranopia.css');
                } else if (newColorblindValue === 'protanopia') {
                    chrome.tabs.sendMessage(tabId, { message: 'TAB_ACTIVATED_P' });
                    injectCSS(tabId, 'styles/protanopia.css');
                } else if (newColorblindValue === 'tritanopia') {
                    chrome.tabs.sendMessage(tabId, { message: 'TAB_ACTIVATED_T' });
                    injectCSS(tabId, 'styles/tritanopia.css');
                } else if (newColorblindValue === 'monochromatic') {
                    chrome.tabs.sendMessage(tabId, { message: 'TAB_ACTIVATED_M' });
                    injectCSS(tabId, 'styles/monochromatic.css');
                } else {
                    chrome.tabs.sendMessage(tabId, { message: 'TAB_ACTIVATED_N' });
                }
            });
        }
    });
}