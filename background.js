let width, height
let z
let scroll_dist = 0

chrome.runtime.onInstalled.addListener(function () {
    chrome.windows.getCurrent(function (win) {
        chrome.storage.local.set({ toggle: '●' })
        width = win.width
        height = win.height
        init()
    })
})

chrome.storage.onChanged.addListener(function (changes) {
    for (var key in changes) {
        if (key == 'toggle') {
            if (changes[key].newValue == '●') {
                init()
            } else if (changes[key].newValue == '↗️') {
                console.log(z)
                chrome.storage.local.set({ data: z })
            }
        }
    }
})

// initialize flat plane
function init() {
    z = []
    for (let i = 0; i < width + 70; i++) {
        for (let j = 0; j < height; j++) {
            z.push(0)
        }
    }
}