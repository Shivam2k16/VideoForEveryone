import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-audio-edit',
  templateUrl: './audio-edit.component.html',
  styleUrls: ['./audio-edit.component.css']
})
export class AudioEditComponent implements OnInit {
ids;
 info: any = {};
  angForm: FormGroup;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private is: InfoService,
    private fb: FormBuilder) {
    	console.log("editit");
     this.createForm();

    }

    createForm() {
    this.angForm = this.fb.group({
      song_name: ['', Validators.required ],
      description: ['', Validators.required ],
      size: ['', Validators.required ],
      image_url: ['', Validators.required ],
      song_url: ['', Validators.required ],
      extra: ['', Validators.required ]
    });
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.is.editInfo(params['id']).subscribe(res => {
          this.info = res;
      });
    });
  }

  updateInfo(song_name, description, size,image_url,song_url,extra) {
 
   this.route.params.subscribe(params => {
      this.is.updateInfo(song_name, description, size,image_url,song_url,extra, params['id']);
      setTimeout(()=>{ this.router.navigate(['info']); }, 10); 

  });
  }

}
