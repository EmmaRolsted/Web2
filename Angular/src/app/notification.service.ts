import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig} from '@angular/material'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  config: MatSnackBarConfig={
    duration: 4000,
    horizontalPosition: 'left',
    verticalPosition: 'bottom'
  }

  success(msg){
    this.config['panelClass']=['notification', 'success']
    this.config.panelClass = ['background-green'];
    this.snackBar.open(msg, '', this.config)

  }

  error(msg){
    this.config['panelClass']=['notification', 'error']
    this.config.panelClass = ['background-red'];
    this.snackBar.open(msg, '', this.config)

  }

  warning(msg){
    this.config['panelClass']=['notification', 'warning']
    this.config.panelClass = ['background-yellow'];
    this.snackBar.open(msg, '', this.config)

  }
}
