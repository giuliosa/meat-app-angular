import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-list-options',
  templateUrl: './list-options.component.html',
  styleUrls: ['./list-options.component.scss']
})
export class ListOptionsComponent implements OnInit {

  public menuItem = [
    { icon: 'slice-of-pizza', name: 'Pizza' },
    { icon: 'baked-bun', name: 'Burguers' },
    { icon: 'bowl-of-noodles', name: 'Salads' },
    { icon: 'nachos-and-dish', name: 'Tacos' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
