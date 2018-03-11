import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-filter-demo',
  templateUrl: './key-filter-demo.component.html',
  styleUrls: ['./key-filter-demo.component.css']
})
export class KeyFilterDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blockSpecial: RegExp = /^[^<>*!]+$/

  blockSpace: RegExp = /[^\s]/;

  ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;


}
