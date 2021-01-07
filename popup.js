let z = []
let scroll_dist = 0

document.addEventListener('DOMContentLoaded', function () {
    // start / stop recording with button
    let toggle = document.getElementById('toggle')
    toggle.addEventListener('click', function () {
        if (toggle.innerHTML == 'start') {
            console.log('start')
            init()
            toggle.innerHTML = 'end'
        } else if (toggle.innerHTML == 'end') {
            console.log('end')
            // draw_plot()
            console.log(z)
            toggle.innerHTML = 'open'
        } else {
            // open in new tab
            toggle.innerHTML = 'start'
        }
    });
});

// initialize flat plane
function init() {
    for (let i = 0; i < window.innerWidth + 70; i++) {
        for (let j = 0; j < window.innerHeight; j++) {
            z.push(0)
        }
    }
}

// click
window.onclick = function (e) {
    if (toggle.innerHTML == 'end' && e.target.id != 'toggle') {
        let mouse_x = e.clientX
        let mouse_y = e.clientY
        // console.log(mouse_x + ', ' + mouse_y)
        let radius = 75
        for (let dx = -radius; dx <= radius; dx++) {
            for (let dy = -radius; dy <= radius; dy++) {
                let new_x = mouse_x + dx
                let new_y = mouse_y + dy
                if (new_x >= 0 && new_x < window.innerWidth + 70 && new_y >= 0 && new_y < window.innerHeight) {
                    let dist = Math.sqrt((new_x - mouse_x) * (new_x - mouse_x) + (new_y - mouse_y) * (new_y - mouse_y))
                    if (dist <= radius) {
                        z[new_x * window.innerHeight + new_y] += radius - dist
                        // console.log(new_x + ', ' + new_y + ', ' + z[new_x * window.innerHeight + new_y])
                    }
                }
            }
        }
    }
};

// move
window.onmousemove = function (e) {
    if (toggle.innerHTML == 'end') {
        let mouse_x = e.clientX
        let mouse_y = e.clientY
        // console.log(mouse_x + ', ' + mouse_y)
        let radius = 50
        for (let dx = -radius; dx <= radius; dx++) {
            for (let dy = -radius; dy <= radius; dy++) {
                let new_x = mouse_x + dx
                let new_y = mouse_y + dy
                if (new_x >= 0 && new_x < window.innerWidth + 70 && new_y >= 0 && new_y < window.innerHeight) {
                    let dist = Math.sqrt((new_x - mouse_x) * (new_x - mouse_x) + (new_y - mouse_y) * (new_y - mouse_y))
                    if (dist <= radius) {
                        z[new_x * window.innerHeight + new_y] += radius - dist
                        // console.log(new_x + ', ' + new_y + ', ' + z[new_x * window.innerHeight + new_y])
                    }
                }
            }
        }
    }
};

// scroll
window.onscroll = function () {
    if (toggle.innerHTML == 'end') {
        scroll_dist += window.scrollY // later: modify to include change (for scrolling up)
        // console.log(scroll_dist)
        let added = 0
        let interval = (window.innerWidth + 70 - scroll_dist) / 5
        for (let i = 0; i < window.innerWidth + 70; i++) {
            if (i % Math.max(interval, 1) == 0) {
                added += 10
                // console.log(i + ': ' + added)
            }
            for (let j = 0; j < window.innerHeight; j++) {
                z[i * window.innerHeight + j] += added
            }
        }
    }
}