document.addEventListener('DOMContentLoaded', function () {
    let toggle = document.getElementById('toggle')
    chrome.storage.local.get('toggle', function (result) {
        toggle.innerHTML = result.toggle
        if (toggle.innerHTML == '●') {
            toggle.style.color = 'red'
        } else {
            toggle.style.color = 'black'
        }
    })

    toggle.addEventListener('click', function () {
        if (toggle.innerHTML == '●') {
            chrome.storage.local.set({ new_tab: false })
            chrome.storage.local.set({ toggle: '■' }, function () {
                toggle.innerHTML = '■'
                toggle.style.color = 'black'
            })
        } else if (toggle.innerHTML == '■') {
            chrome.storage.local.set({ toggle: '↗️' }, function () {
                toggle.innerHTML = '↗️'
                toggle.style.color = 'black'
            })
        } else {
            chrome.storage.local.set({ new_tab: true })
            chrome.storage.local.set({ toggle: '●' }, function () {
                toggle.innerHTML = '●'
                toggle.style.color = 'red'
            })
        }
    })
})