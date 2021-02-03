import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

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
