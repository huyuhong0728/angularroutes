import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-you-component',
  templateUrl: './you-component.component.html',
  styleUrls: ['./you-component.component.css']
})
export class YouComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('you');
  }

}
