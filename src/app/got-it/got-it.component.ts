import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-got-it',
  templateUrl: './got-it.component.html',
  styleUrls: ['./got-it.component.css'],
})
export class GotItComponent {
  constructor(private dialogRef: MatDialogRef<GotItComponent>) {}
  onClikcGotIt = () => {
    this.dialogRef.close();
  };
}
