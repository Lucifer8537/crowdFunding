import { Component, Inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UsersData {
  service: string;
  cost?: number;
}

@Component({
  selector: 'app-back-this-project',
  templateUrl: './back-this-project.component.html',
  styleUrls: [
    './back-this-project.component.css',
    './back-this-project-mob.component.css',
  ],
})
export class BackThisProjectComponent implements OnInit {
  pledge!: string;
  returnData!: UsersData;
  norewardpledge = 0;
  bambooStand = 25;
  blackEditionStand = 75;
  noBool!: boolean;
  bambooBool!: boolean;
  blackBool!: boolean;
  norewardValid = false;
  bambooValid = true;
  blackValid = true;
  mobileView!: boolean;
  continue = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BackThisProjectComponent>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.mobileView = this.data.mobileView;
  }

  onChange = (newValue: string) => {
    console.log('new value : ', newValue);
    this.pledge = newValue;
    if (this.pledge === 'no-reward') {
      this.noBool = true;
      this.bambooBool = false;
      this.blackBool = false;
    } else if (this.pledge === 'bamboo-stand') {
      this.noBool = false;
      this.bambooBool = true;
      this.blackBool = false;
    } else if (this.pledge === 'black-edition-stand') {
      this.noBool = false;
      this.bambooBool = false;
      this.blackBool = true;
    }
    this.norewardpledge = 0;
    this.bambooStand = 25;
    this.blackEditionStand = 75;
    this.norewardValid = false;
    this.bambooValid = true;
    this.blackValid = true;
  };

  onChangePledge = (newValue: number) => {
    console.log('called : ', newValue);
    console.log('pledge : ', this.pledge);
    if (this.pledge === 'no-reward') {
      if (newValue > 0) this.norewardValid = true;
      else this.norewardValid = false;
    } else if (this.pledge === 'bamboo-stand') {
      if (newValue > 24) this.bambooValid = true;
      else this.bambooValid = false;
    } else if (this.pledge === 'black-edition-stand') {
      if (newValue > 74) this.blackValid = true;
      else this.blackValid = false;
    }
    console.log('norewardValid : ', this.norewardValid);
    console.log('bambooValid : ', this.bambooValid);
    console.log('blackValid : ', this.blackValid);
  };

  onContinue = () => {
    this.continue = true;
  };

  onClickContinue = () => {
    if (this.pledge === 'no-reward') {
      this.dialogRef.close({
        service: this.pledge,
        price: this.norewardpledge,
      });
    } else if (this.pledge === 'bamboo-stand') {
      this.dialogRef.close({
        service: this.pledge,
        price: this.bambooStand,
      });
    } else if (this.pledge === 'black-edition-stand') {
      this.dialogRef.close({
        service: this.pledge,
        price: this.blackEditionStand,
      });
    }
  };
}
