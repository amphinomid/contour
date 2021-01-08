let plot = document.getElementById('plot')

chrome.storage.local.get('data', function (result) {
    draw_plot(result.data)
})

function draw_plot(z) {
    let x = []
    let y = []
    for (let i = 0; i < window.innerWidth + 70; i++) {
        for (let j = 0; j < window.innerHeight; j++) {
            x.push(i)
            y.push(-j)
        }
    }
    let data = [{
        x: x,
        y: y,
        z: z,
        type: 'contour',
        contours: {
            coloring: 'lines'
        },
        colorscale: [
            ['0', '#ffffff'],
            ['1', '#ffffff']
        ],
        colorbar: {
            thickness: 0
        }
    }]

    let layout = {
        width: window.innerWidth + 70,
        height: window.innerHeight,
        xaxis: {
            visible: false
        },
        yaxis: {
            visible: false
        },
        coloraxis_showScale: false,
        margin: {
            t: 0,
            r: 0,
            b: 0,
            l: 0
        },
        paper_bgcolor: '#000000',
        plot_bgcolor: '#000000'
    }

    Plotly.newPlot('plot', data, layout, {
        displayModeBar: false
    })
}