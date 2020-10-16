import {Component} from '@angular/core';

@Component({
    selector: 'app-chartbar',
    templateUrl: './chartbar.component.html',
    styleUrls: ['./chartbar.component.scss']
})
export class ChartbarComponent {
    barChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 4,
        legend: {
            labels: {
                fontSize: 14,
                fontColor: 'rgba(0,0,0)'
            }
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        fontSize: 14
                    }
                }
            ],
            xAxes: [
                {
                    ticks: {
                        fontSize: 14
                    }
                }
            ]
        }
    };
    barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    barChartType = 'bar';
    barChartLegend = true;
    barChartData = [
        {data: [34, 48, 80, 46, 64, 75, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 50, 27, 15], label: 'Series B'}
    ];

    toogle(): void {

    }
}
