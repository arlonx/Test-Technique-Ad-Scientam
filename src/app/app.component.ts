import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testTechnique';
  treatment = [];
  treatments = [["Traitement de fond", "Aucun"],["Traitement de fond", "Aucun"],["Traitement de fond", "Aucun"]];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '600px',
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'app.modal.html',
  styleUrls: ['./app.modal.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {}

  displayedColumns=["sport", "1", "2", "3", "4", "5"]
  displayedColumnsMin=["sport", "1 à 5"]
  sports=[["footbal", ''],["boxe", ''],["pêche", ''],["chasse", ''],["tennis", '']]

  onBackClick(): void {
    console.log("data : ", this.sports)
    this.dialogRef.close();
  }

  send(){
    console.log("data : ", this.sports)
    this.dialogRef.close();
  }
}
