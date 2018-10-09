import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-event-verify',
  templateUrl: './create-event-verify.component.html',
  styleUrls: ['./create-event-verify.component.css']
})
export class CreateEventVerifyComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onConfirm(){
     this.router.navigateByUrl('/event/confirm');
  }

}
