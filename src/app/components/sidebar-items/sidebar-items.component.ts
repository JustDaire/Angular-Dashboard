import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListItemMeta, MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-items',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './sidebar-items.component.html',
  styleUrl: './sidebar-items.component.sass'
})
export class SidebarItemsComponent {
  @Input() menuItems: Array<MenuItem> = [];
  @Input() isExpanded: Boolean = true;

}

declare type MenuItem = {
  icon: string;
  name: string;
  link: string;
};
