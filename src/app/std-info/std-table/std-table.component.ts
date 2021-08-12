import { Component, Input, OnInit } from '@angular/core';
type IstdInfo = { fname: string, lname: string, email: string }
@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  @Input()  getInfoForTable : IstdInfo[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
