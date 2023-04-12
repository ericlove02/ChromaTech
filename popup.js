window.onload = async function main() {

    async function init() {
        const colorblind = await getStorage('colorOption');
        if (colorblind) {
            document.getElementById('coloroption-select').value = colorblind;
        }
    }

    init();


    // get the logo and button group elements
    const logo = document.getElementById('logo');
    const buttonGroup = document.getElementById('button-group');
    // get the buttons
    const buttons = buttonGroup.querySelectorAll('.btn');

    // function to toggle the active state of the buttons
    function toggleButton(button) {
        buttons.forEach((btn) => {
            if (btn !== button) {
                btn.classList.remove('active');
            }
        });
        button.classList.toggle('active');

        // if no active button, set source to logo
        const activeButton = buttonGroup.querySelector('.active');
        if (!activeButton) {
            logo.src = 'img/logo.png';
        }
    }

    // add any event listeners to buttons

    // add a click event listener to each button
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            // set img source
            if (filter === 'deuteranopia') {
                logo.src = 'img/deu.png';
            } else if (filter === 'protanopia') {
                logo.src = 'img/pro.png';
            } else if (filter === 'tritanopia') {
                logo.src = 'img/tri.png';
            } else {
                logo.src == 'img/logo.png';
            }
            toggleButton(button);
        });
    });

    const selectOption = document.getElementById('coloroption-select');
    const savedText = document.getElementById('saved-text');

    selectOption.addEventListener('change', () => {
        const option = selectOption.value;
        setStorage('colorOption', option);
        savedText.style.display = 'block';
        setTimeout(() => {
            savedText.style.display = 'none';
        }, 3000);
    });

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