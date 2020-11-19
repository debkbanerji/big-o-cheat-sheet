import { Component, Inject } from '@angular/core';
// import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-about-dialog',
    templateUrl: './about-dialog.component.html',
    styleUrls: ['./about-dialog.component.css']
})
export class AboutDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<AboutDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
