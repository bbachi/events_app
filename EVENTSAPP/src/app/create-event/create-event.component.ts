import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private router: Router) { }

  eventForm = this.fb.group({
    name: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    host: ['', Validators.required],
    inviteNumber: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required]
    }),
  });

  ngOnInit() {
  }

  onContinue(){
     console.log(this.eventForm.value)
     if(this.eventForm.valid){
        this.router.navigateByUrl('/event/verify');
     }
  }

}
