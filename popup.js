window.onload = async function main() {

    // add any event listeners to buttons
    document.getElementById("close-button").addEventListener("click", () => { window.close(); return; })
    // end of event listeners

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

// set chrome storage data
function setStorage(key, value) {
    var storage = chrome.storage.sync;
    var obj = {};
    obj[key] = value;
    storage.set(obj);
    console.log("Status saved");
}