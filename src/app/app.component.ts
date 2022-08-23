import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-dashboard';
  isExpanded = true;
  opened = true;
  element: HTMLElement | undefined;

  menuItems = [
    {icon: 'home', name: "Home", link: "/home"},
    {icon: 'person', name: "Profile", link: "/profile"},
    {icon: 'bar_chart', name: "Dashboard", link: "/dashboard"},
    {icon: 'table_views', name: "Table", link: "/table"},
    {icon: 'info', name: "About", link: "/about"}
  ];

  toggleActive(event: any) {
    // debugger;
    event.preventDefault();
    // if (this.element !== undefined) {
    //   this.element.style.backgroundColor = "white";
    // }
    // const target = event.currentTarget;
    // target.style.backgroundColor = "#e51282";
    // target.style.borderBottomColor = "#e51282";
    // target.style.borderStyle = "1px solid";
    // this.element = target;
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
