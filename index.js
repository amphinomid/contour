let plot = document.getElementById('plot')
let x, y, z

chrome.storage.local.get('x', function (result) {
    x = result.x
    chrome.storage.local.get('y', function (result) {
        y = result.y
        chrome.storage.local.get('z', function (result) {
            z = result.z
            draw_plot(x, y, z)
        })
    })
})

function draw_plot(x, y, z) {
    console.log(x)
    console.log(y)
    console.log(z)
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