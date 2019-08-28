import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-her',
  templateUrl: './her.page.html',
  styleUrls: ['./her.page.scss'],
})
export class HerPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('her');
  }

}
