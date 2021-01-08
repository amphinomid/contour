chrome.runtime.onInstalled.addListener(function () {
    chrome.windows.getCurrent(function (win) {
        chrome.storage.local.set({ toggle: '●' })
    })
})

chrome.storage.onChanged.addListener(function (changes) {
    for (var key in changes) {
        if (key == 'new_tab' && changes[key].newValue) {
            chrome.tabs.create({"url": chrome.extension.getURL('index.html')})
        }
    }
})