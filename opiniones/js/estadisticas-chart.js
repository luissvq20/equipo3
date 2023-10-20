Highcharts.chart('estadisticas-charts', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Marcas mas vendidas',
        align: 'center'
    },
    subtitle: {
        text:
            'Source: <a target="_blank" ' +
            'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Renault', 'Bmw', 'Mercedes', 'Nissan', 'Ford'],
        crosshair: true,
        accessibility: {
            description: 'Marcas que mas venden'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '1000 metric tons (MT)'
        }
    },
    tooltip: {
        valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Marcas',
            data: [51086, 136000, 5500, 141000, 107180, 77000]
        }
    ]
});