import { Component, OnInit } from '@angular/core';

import Info from '../Info';
import { InfoService } from '../info.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
infor: Info[];
key1=["Song Name","Description","Size","Image Url","Song Url","Extra"];
key2=["song_name","description","size","image_url","song_url","extra"];
  constructor(private is: InfoService,private router: Router) { }

  ngOnInit() {
    this.is
      .getInfor()
      .subscribe((data: Info[]) => {
        this.infor = data;
    });
  }

}
