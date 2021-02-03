import { HeaderService } from './../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Home Page',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

  showOKMessage(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 1000,
      panelClass: ['msg-ok']
    });
  }

  showCancelMessage(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 1000,
      panelClass: ['msg-cancel']
    });
  }

}
