chrome.runtime.onInstalled.addListener(function () {
    chrome.windows.getCurrent(function (win) {
        chrome.storage.local.set({ toggle: '●' })
    })
})