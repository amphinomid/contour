let plot = document.getElementById('plot')
let recording = false
let x = []
let y = []
let z = []
// let dx = [-1, 1, -1, 1, /*-1, 1, 0, 0*/]
// let dy = [1, -1, -1, 1, /*0, 0, -1, 1*/]

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
    let click_x = e.clientX
    let click_y = e.clientY
    // console.log(click_x + ', ' + click_y)
    // console.log('--')
    if (recording) {
        let range = 50
        let step_size = 10
        for (let i = 0; i <= range; i += step_size) {
            for (let dx = -i; dx <= i; dx++) {
                for (let dy = -i; dy <= i; dy++) {
                    let new_x = click_x + dx
                    let new_y = click_y + dy
                    // console.log(new_x + ', ' + new_y)
                    if (new_x >= 0 && new_x < window.innerWidth + 70 && new_y >= 0 && new_y < window.innerHeight) {
                        z[new_x * window.innerHeight + new_y] += 10
                        // console.log(z[new_x * window.innerHeight + new_y])
                        // console.log('--')
                    }
                }
            }
        }
    }
};

// drag

// scroll

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