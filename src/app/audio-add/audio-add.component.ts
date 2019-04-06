import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { InfoService } from '../info.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-audio-add',
  templateUrl: './audio-add.component.html',
  styleUrls: ['./audio-add.component.css']
})
export class AudioAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private is:InfoService,private router: Router) {
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

   addInfo(song_name, description, size,image_url,song_url,extra) {
    this.is.addInfo(song_name, description, size,image_url,song_url,extra);
    setTimeout(()=>{ this.router.navigate(['info']); }, 30); 
    
  }

  ngOnInit() {
  }

}
