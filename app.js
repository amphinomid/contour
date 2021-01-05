// var size = 100, x = new Array(size), y = new Array(size), z = new Array(size), i, j;

// for(var i = 0; i < size; i++) {
// 	x[i] = y[i] = -2 * Math.PI + 4 * Math.PI * i / size;
//   	z[i] = new Array(size);
// }

// for(var i = 0; i < size; i++) {
//   	for(j = 0; j < size; j++) {
//     	var r2 = x[i]*x[i] + y[j]*y[j];
//     	z[i][j] = Math.sin(x[i]) * Math.cos(y[j]) * Math.sin(r2) / Math.log(r2+1);
//  	}
// }

var data = [{
    x: [0, 1, 2, 3, 4, 5, 6, 7],
    y: [0, 1, 2, 3, 4, 5, 6, 7],
    z: [0, 1, 2, 3, 4, 5, 6, 7],
    type: 'contour',
    contours: {
        coloring: 'lines',
    },
    colorscale: [
        ['0', '#000000'],
        ['1', '#000000'],
    ],
    colorbar: {
        thickness: 0,
    }
}];

var layout = {
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
    paper_bgcolor: '#ffffff',
    plot_bgcolor: '#ffffff',
};

Plotly.newPlot('plot', data, layout, {
    displayModeBar: false,
});