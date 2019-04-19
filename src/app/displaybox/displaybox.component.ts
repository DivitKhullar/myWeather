import { Component, OnInit,Input } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-displaybox',
  templateUrl: './displaybox.component.html',
  styleUrls: ['./displaybox.component.css']
})
export class DisplayboxComponent implements OnInit {

  @Input() item:any;
  constructor() { }

  ngOnInit() {
  }

}
