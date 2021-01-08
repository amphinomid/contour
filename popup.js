document.addEventListener('DOMContentLoaded', function () {
    let toggle = document.getElementById('toggle')
    chrome.storage.local.get('toggle', function (result) {
        toggle.innerHTML = result.toggle
    })

    toggle.addEventListener('click', function () {
        if (toggle.innerHTML == '●') {
            chrome.storage.local.set({ toggle: '■' }, function () {
                toggle.innerHTML = '■'
            })
        } else if (toggle.innerHTML == '■') {
            chrome.storage.local.set({ toggle: '↗️' }, function () {
                toggle.innerHTML = '↗️'
            })
        } else {
            chrome.storage.local.set({ toggle: '●' }, function () {
                toggle.innerHTML = '●'
            })
        }
    })
})