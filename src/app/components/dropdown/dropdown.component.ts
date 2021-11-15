import { Component, OnInit } from '@angular/core';
interface Table {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
 
  tables: Table[] = [
    {value: 'table-1', viewValue: 'Table 1'},
    {value: 'table-2', viewValue: 'Table 2'},
    {value: 'table-3', viewValue: 'Table 3'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
