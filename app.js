let plot = document.getElementById('plot')
let recording = false
let x = []
let y = []
let z = []
let scroll_dist = 0

// start / stop recording with button (temporary)
document.getElementById('toggle_button').onclick = function () {
    recording = !recording
    if (recording) {
        console.log('start')
        init()
    } else {
        console.log('end')
        draw_plot()
    }
};

// click
plot.onclick = function (e) {
    let mouse_x = e.clientX
    let mouse_y = e.clientY
    // console.log(mouse_x + ', ' + mouse_y)
    if (recording) {
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

// drag
plot.onmousemove = function (e) {
    let mouse_x = e.clientX
    let mouse_y = e.clientY
    // console.log(mouse_x + ', ' + mouse_y)
    if (recording) {
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

// scroll
window.onscroll = function () {
    scroll_dist += window.scrollY // later: modify to include change (for scrolling up)
    console.log(scroll_dist)
    let added = 1
    for (let i = 0; i < window.innerWidth + 70; i++) {
        if (i % Math.max(window.innerWidth + 70 - scroll_dist, 1) == 0) {
            added++
        }
        for (let j = 0; j < window.innerHeight; j++) {
            z[i * window.innerHeight + j] += added
        }
    }
}

function init() {
    recording = true

    // initialize flat plane
    for (let i = 0; i < window.innerWidth + 70; i++) {
        for (let j = 0; j < window.innerHeight; j++) {
            x.push(i)
            y.push(j)
            z.push(0)
        }
    }
}

function draw_plot() {
    let data = [{
        x: x,
        y: y,
        z: z,
        type: 'contour',
        contours: {
            coloring: 'lines',
        },
        colorscale: [
            ['0', '#ffffff'],
            ['1', '#ffffff'],
        ],
        colorbar: {
            thickness: 0,
        }
    }];

    let layout = {
        width: window.innerWidth + 70,
        height: window.innerHeight,
        xaxis: {
            visible: false,
        },
        yaxis: {
            visible: false,
        },
        coloraxis_showScale: false,
        margin: {
            t: 0,
            r: 0,
            b: 0,
            l: 0,
        },
        paper_bgcolor: '#000000',
        plot_bgcolor: '#000000',
    };

    Plotly.newPlot('plot', data, layout, {
        displayModeBar: false,
    });
}