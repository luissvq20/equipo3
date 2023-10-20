Highcharts.chart('circulo-estadisticas_chart', {
    chart: {
        type: 'variablepie'
    },
    title: {
        text: 'Ciudades donde mas vendemos',
        align: 'center'
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'Area (square km): <b>{point.y}</b><br/>' +
            'Population density (people per square km): <b>{point.z}</b><br/>'
    },
    series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'ciudades',
        borderRadius: 5,
        data: [{
            name: 'Madrid',
            y: 505992,
            z: 92
        }, {
            name: 'Sevilla',
            y: 551695,
            z: 119
        }, {
            name: 'Barcelona',
            y: 312679,
            z: 121
        }, {
            name: 'Valencia',
            y: 78865,
            z: 136
        }, {
            name: 'Bilbao',
            y: 301336,
            z: 200
        }, {
            name: 'Castilla la Mancha',
            y: 41284,
            z: 213
        }, {
            name: 'Granada',
            y: 357114,
            z: 235
        }],
        colors: [
            '#FE8A78',
            '#FF5035',
            '#FC2200',
            '#E1922C',
            '#E4B476',
            '#E1D2BD',
            '#FCFCFC'
        ]
    }]
});