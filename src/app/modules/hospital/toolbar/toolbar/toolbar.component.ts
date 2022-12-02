import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public userFullName:any;

  constructor() { }

  ngOnInit(): void {
    this.userFullName=localStorage.getItem('userFullName');
  }

}
