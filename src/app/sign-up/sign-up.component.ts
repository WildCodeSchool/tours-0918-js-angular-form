import { Component, OnInit } from '@angular/core';
import { User } from '../common/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // declare user model
  model: User;

  constructor() { }

  ngOnInit() {
    // init property model
    this.model = new User();
  }

  /**
   * submit form
   */
  onSubmit() {
    console.log(this.model);
  }

}
