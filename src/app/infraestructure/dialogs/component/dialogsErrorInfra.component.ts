import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
declare var swal: any;
@Component({
    selector: 'confirm-dialog',
    templateUrl: '../view/dialogsErrorInfra.component.html',
    styleUrls: ['../view/dialogsErrorInfra.component.css']
})
export class DialogErrorInfraComponent {

    public title: string;
      public section: string;
    public message: string;
    public type:number;
    public size:number;
    public isQuestion:boolean;
    public icon:number;
      public jsonObj:any;

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;





    constructor(public dialogRef: MdDialogRef<DialogErrorInfraComponent>,private _FormBuilder:FormBuilder) {

      this.firstFormGroup = this._FormBuilder.group({
       firstCtrl: ['', Validators.required]
     });
     this.secondFormGroup = this._FormBuilder.group({
       secondCtrl: ['', Validators.required]
     });
    }

    Ok(){
      debugger
        this.dialogRef.close(true)
    }

    Cancel(){
      debugger
      this.dialogRef.close();
    }
    openDetail(){
    //   swal({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     type: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    //   }).then(function() {
    //     swal(
    //       'Deleted!',
    //       'Your file has been deleted.',
    //       'success'
    //     );
    //   })
    swal({
  title: "Detail",
  text: this.jsonObj.toString(),
  icon: "info",
  className: "sweetback",
  button: "Done!",
});
    }

}
