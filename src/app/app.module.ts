import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgChartsModule} from 'ng2-charts';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {OverlayModule} from "@angular/cdk/overlay";
import {MatMenuModule} from "@angular/material/menu";
import {MatTableModule} from "@angular/material/table";
import {CdkStepperModule} from "@angular/cdk/stepper";
import {A11yModule} from "@angular/cdk/a11y";
import {PortalModule} from "@angular/cdk/portal";
import {CdkTableModule} from "@angular/cdk/table";
import {CdkTreeModule} from "@angular/cdk/tree";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatDividerModule} from "@angular/material/divider";
import {SidebarComponent} from './parts/sidebar/sidebar.component';
import {ToolbarComponent} from './parts/toolbar/toolbar.component';
import {RouterModule} from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { TableComponent } from './pages/table/table.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatRippleModule} from "@angular/material/core";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    DashboardComponent,
    UserProfileComponent,
    TableComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot([
      // {path: 'autocomplete', component: AutocompleteComponent},
      {path: '', component: HomeComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'profile', component: UserProfileComponent},
      {path: 'table', component: TableComponent},
      // {path: 'd3', component: D3Component},
      // {path: 'alerts', component: AlertsComponent},
      // {path: 'table', component: TableComponent},
      // {path: 'testing', component: TestingComponent},
      // {path: 'login', component: LoginComponent},
      // {path: 'logout', component: LoginComponent},
    ]),
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatRippleModule,
    MatProgressBarModule,
    MatCardModule,
    MatGridListModule,
  ],
  exports: [
    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    OverlayModule,
    PortalModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
