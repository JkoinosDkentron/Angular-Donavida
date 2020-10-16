import {Component} from '@angular/core';

@Component({
    selector: 'app-chartcircle',
    templateUrl: './chartcircle.component.html',
    styleUrls: ['./chartcircle.component.scss']
})
export class ChartcircleComponent {
    barChartOptions = {
        scale: {
            pointLabels: {
                fontSize: 12,
            }
        },
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        legend: {
            labels: {
                fontSize: 14,
                fontColor: 'rgba(0,0,0)'
            }
        },
        scales: {
            yAxes: [
                {
                    display: false,
                }
            ],
            xAxes: [
                {
                    display: false,
                }
            ]
        }
    };
    barChartLabels = ['2006', '2007', '2008'];
    barChartType = 'polarArea';
    barChartLegend = true;
    barChartData = [
        {data: [34, 48, 39]}
    ];
}
