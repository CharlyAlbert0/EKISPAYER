import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';


@Component({
    selector: 'info-dialog',
    templateUrl: '../view/dialogsinfo.component.html',
    styleUrls: ['../view/dialogsinfo.component.css']
})
export class DialogInfo {

    public title: string;
    public message: string;
    public type:number;
    public size:number;
    public isQuestion:boolean;
    public icon:number;
    public TextInput:string;
      public jsonObj:any;
    constructor(public dialogRef: MdDialogRef<DialogInfo>) {

    }

    Ok(){

        this.dialogRef.close();
    }

    Cancel(){
      this.dialogRef.close();
    }

}
