import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { MatDialog } from '@angular/material/dialog';
import { VideoDialogComponent } from './video-dialog/video-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  videos$ = this.appService.getVideos();

  constructor(private appService: AppService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(url: string) {
    this.dialog.closeAll();
    this.dialog.open(VideoDialogComponent, {
      data: {
        url,
      },
      panelClass: 'no-padding-dialog',
    });
  }
}
