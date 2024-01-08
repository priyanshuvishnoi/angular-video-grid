import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.css'],
})
export class VideoDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { url: string }) {}

  ngOnInit(): void {}
}
