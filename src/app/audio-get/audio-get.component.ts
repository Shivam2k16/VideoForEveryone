import { Component, OnInit } from '@angular/core';
import Info from '../Info';
import { InfoService } from '../info.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-audio-get',
  templateUrl: './audio-get.component.html',
  styleUrls: ['./audio-get.component.css']
})
export class AudioGetComponent implements OnInit {

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

  deleteInfo(id) {

    this.is.deleteInfo(id).subscribe(res => {
      console.log('Deleted');
    });

    this.is
      .getInfor()
      .subscribe((data: Info[]) => {
        this.infor = data;
    });
    

  }

}
