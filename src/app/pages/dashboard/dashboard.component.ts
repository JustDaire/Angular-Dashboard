import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartData, ChartOptions} from "chart.js";

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
    responsive: false,
  };

  constructor(
    private coreS: CoreService
  ) { }

  ngOnInit(): void {
  }

}
