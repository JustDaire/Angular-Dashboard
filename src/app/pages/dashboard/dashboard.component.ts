import {Component, OnInit, ViewChild} from '@angular/core';
import * as moment from "moment";
import {BaseChartDirective} from "ng2-charts";
import {ChartData, ChartOptions} from "chart.js";
import {CoreService} from "../../core/services/core.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  loading = false;
  dates = [];
  pageIndex = 0; // Active page number
  pageSize = 20;
  resultsLength = 0;
  data: any = [];

  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Dangerous', 'Safe'],
    datasets: [{data: []}]
  };

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartPlugins = [];

  multiChartData: ChartData<'bar', number[], string | string[]> = {
    labels: ["FirstPlaceholder", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "LastPlaceholder"],
    datasets: [
      { data: [0, 30, 20, 40, 35, 45, 33, 0, 0], label: "Bar 1" },
      { data: [0, 50, 60, 55, 59, 30, 40, 0, 0], label: "Bar 2" },
      { data: [45, 45, 45, 45, 45, 45, 45, 45, 45], label: "Line" }
    ]
  };

  public multiChartOptions: ChartOptions<'bar'> = {
    responsive: false,
  };


  public multiChart = {
    "datasets": [
      { "data": [0, 30, 20, 40, 35, 45, 33, 0, 0], "label": "Bar 1" },
      { "data": [0, 50, 60, 55, 59, 30, 40, 0, 0], "label": "Bar 2" },
      { "data": [45, 45, 45, 45, 45, 45, 45, 45, 45], "label": "Line", "type": "line" }
    ],
    "labels": ["FirstPlaceholder", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "LastPlaceholder"],
    options: {
      "legend": {
        "text": "You awesome chart with average line",
        "display": true,
      },
      "scales": {
        "yAxes": [{
          "ticks": {
            "beginAtZero": true
          }
        }],
        "xAxes": [{
          "ticks": {
            "min": "Monday",
            "max": "Sunday",
          }
        }],
      }
    }
  };

  constructor(
    private coreS: CoreService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;
    const startDate = moment(this.dates[0]).format('YYYY-MM-DD');
    const endDate = moment(this.dates[1]).format('YYYY-MM-DD');
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    const nasa_api_key = 'l21R3mPg1asgWk2fihrYOMWVRXmwdcT7BmgUw6T9';

    const index = this.pageIndex;
    let optionalParams = `page=${index}&size=${this.pageSize}`;
    optionalParams += `&api_key=${nasa_api_key}`;
    this.coreS.getNeos(optionalParams).subscribe(
      (data: any) => {

        this.resultsLength = data.page.total_pages;
        console.log(data.page.total_elements + ' rows found');
        console.log(this.resultsLength + ' pages found');
        // this.dataSource.paginator = this.paginator;

        console.log('Loading item data:', data);
        console.log('pieChartDatasets:', this.pieChartData.datasets[0].data);
        console.log('Loading item data:', data.near_earth_objects);
        this.data = data.near_earth_objects;
        const countSafe = data.near_earth_objects.filter((a: { [x: string]: boolean; }) => !a["is_potentially_hazardous_asteroid"]).length
        const countDanger = data.near_earth_objects.filter((a: { [x: string]: boolean; }) => a["is_potentially_hazardous_asteroid"]).length
        // @ts-ignore
        console.log('Risk:', this.data.filter(a => a["is_potentially_hazardous_asteroid"]));
        this.pieChartData.datasets[0].data.push(countDanger, countSafe);
        // this.pieChartData.datasets[0].data.push(countDanger);
        // this.pieChartData.datasets[0].data.push(countSafe);
        console.log('pieChartDatasets:', this.pieChartData.datasets[0].data);
        this.loading = false; // disable loading spinner
        this.chart?.update();
      },
      err => {
        console.error('Received error:', err);
      },
      () => {
        console.info('Process complete, closing request!');
      }
    );
  }

}
