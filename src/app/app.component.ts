import { Component, HostListener, ViewChild } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { BackThisProjectComponent } from './back-this-project/back-this-project.component';
import { GotItComponent } from './got-it/got-it.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './mobile.component.css'],
})
export class AppComponent {
  width!: number;
  mobileView!: boolean;
  menu = false;
  bookmark = false;
  bookmarkLabel = 'Bookmark';
  widthCss = '50%';
  finalWidth = '30%';
  constructor(private dialog: MatDialog) {}
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = screen.width;
    this.mobileView = this.width < 679 || window.innerWidth < 679;
    if (this.mobileView) {
      this.widthCss = '95%';
      this.finalWidth = '95%';
    } else {
      this.widthCss = '50%';
      this.finalWidth = '30%';
    }
  }
  ngOnInit(): void {
    this.onResize();
  }
  backThisProject() {
    const dialogRef = this.dialog.open(BackThisProjectComponent, {
      width: this.widthCss,
      data: { mobileView: this.mobileView },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dialog.open(GotItComponent, {
          width: this.finalWidth,
          data: { mobileView: this.mobileView },
        });
      }
    });
  }
  onClickMenu = () => {
    this.menu = !this.menu;
  };
  onBookmark = () => {
    this.bookmark = !this.bookmark;
    if (this.bookmark) this.bookmarkLabel = 'Bookmarked';
    else this.bookmarkLabel = 'Bookmark';
  };
}
