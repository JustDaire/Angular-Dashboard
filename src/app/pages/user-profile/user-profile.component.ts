import { Component, OnInit } from '@angular/core';
import {MatLegacyTableDataSource as MatTableDataSource} from "@angular/material/legacy-table";
import {CoreService} from "../../core/services/core.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

  // profilePhoto = null;
  profilePhoto = 'https://avatars.dicebear.com/api/human/john.svg';

  constructor(private coreS: CoreService) { }

  ngOnInit(): void {
    // this.getProfilePhoto();
  }

  getProfilePhoto() {

    this.coreS.getUserPhoto().subscribe(
      (data: any) => {
        this.profilePhoto = data;
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
