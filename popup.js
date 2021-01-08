document.addEventListener('DOMContentLoaded', function () {
    let toggle = document.getElementById('toggle')
    chrome.storage.sync.get('toggle', function (result) {
        toggle.innerHTML = result.toggle
    })
    
    toggle.addEventListener('click', function () {
        if (toggle.innerHTML == '●') {
            chrome.storage.sync.set({ toggle: '■' }, function () {
                toggle.innerHTML = '■'
            })
        } else if (toggle.innerHTML == '■') {
            chrome.storage.sync.set({ toggle: '↗️' }, function () {
                toggle.innerHTML = '↗️'
            })
        } else {
            chrome.storage.sync.set({ toggle: '●' }, function () {
                toggle.innerHTML = '●'
            })
        }
    })
})