import {Component} from '@angular/core';

@Component({
    selector: 'app-chartradar',
    templateUrl: './chartradar.component.html',
    styleUrls: ['./chartradar.component.scss']
})
export class ChartradarComponent {
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
    barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    barChartType = 'radar';
    barChartLegend = true;
    barChartData = [
        {data: [34, 48, 80, 46, 64, 75, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 50, 27, 15], label: 'Series B'}
    ];
}
