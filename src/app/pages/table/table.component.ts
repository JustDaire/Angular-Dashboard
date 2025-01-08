import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {CoreService} from "../../core/services/core.service";
import * as moment from "moment";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  dates = [];
  /** Material Table */
  data = [];
  loading = false;
  tableColumns: string[] = ['name', 'severity', 'ed_min', 'ed_max'];
  dataSource = new MatTableDataSource(this.data);
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  /** Pagination **/
  resultsLength = 0;
  pageSize = 20;
  pageSizeOptions = [10, 20, 50];
  pageIndex = 0; // Active page number
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Selection
  selection = new SelectionModel(false, []);
  selectedCustomer = null;
  selectedItems = [];
  selected = null;

  constructor(private coreS: CoreService) { }

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
        console.log('Loading item data:', data.near_earth_objects);
        this.data = data.near_earth_objects;
        this.dataSource = new MatTableDataSource(this.data); // Add data to datasource
        // this.dataSource.paginator = this.paginator; // Link the data to the paginator
        this.loading = false; // disable loading spinner
      },
      err => {
        console.error('Received error:', err);
      },
      () => {
        console.info('Process complete, closing request!');
      }
    );
  }

  selectedRow(row: any) {
    this.selectedItems = this.selection.selected;
    this.selected = row.id;
    console.log('Selected Row', this.selectedItems);
    console.log('Selected Row ID', this.selected);
  }

  handlePageEvent(event: PageEvent) {
    this.loading = true;
    console.log(event);
    console.log(event.pageIndex);
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    console.log('Page ' + this.pageIndex);
    this.getData();
  }

  getUsers() {
    this.loading = true;
    const optionalParams = 'select=id,name';
    this.coreS.getUsers(optionalParams).subscribe(
      (data: any) => {
        console.log('Loading item data:', data);
        this.data = data; // Add the data to an object
        this.dataSource = new MatTableDataSource(this.data); // Add data to datasource

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
