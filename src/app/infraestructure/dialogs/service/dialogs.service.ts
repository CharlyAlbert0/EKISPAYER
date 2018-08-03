import { Observable } from 'rxjs/Rx';
import { Dialog } from '../component/dialogs.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import {EnumTypeD,EnumSizeD,EnumCategoryD,EnumTypeLoading} from '../../enums/enumdialog';
import { LoadingDialog } from '../component/loadingdialog.component';
import {InputSimpleModel} from '../model/inputsimplemodel';
import { DialogInput } from '../component/dialogsinput.component';
import { DialogError } from '../component/dialogserror.component';
import {DialogErrorInfraComponent } from '../component/dialogsErrorInfra.component';
import {DialogInfo } from '../component/dialogsinfo.component';
import {DialogLogs } from '../component/dialogslogs.component';

export const DIALOGS_COMPONENTS = [
    Dialog,
    LoadingDialog,
    DialogInput,
    DialogError,
    DialogErrorInfraComponent,
    DialogInfo,
    DialogLogs

]

@Injectable()
export class DialogsService {

    dialogRef: MdDialogRef<Dialog>;
    loadingdialog:MdDialogRef<LoadingDialog>;
    dialoginputRef:MdDialogRef<DialogInput>;
    dialogErrorRef:MdDialogRef<DialogError>;
    dialogErrorInfraRef:MdDialogRef<DialogErrorInfraComponent>;
    dialogInfoRef:MdDialogRef<DialogInfo>;
    dialogLogsRef:MdDialogRef<DialogLogs>;


    constructor(private dialog: MdDialog,private loading:MdDialog,private DialoginputSimple:MdDialog,private DialogErrorMD:MdDialog,
                private DialogDevelopMD:MdDialog,
                private DialogInfoMD:MdDialog,
              private DialogLogsMD:MdDialog) { }





    public confirm(title: string, message: string, type:number,category:number,size:number,icon:number,width?:string,height?:string): Observable<boolean> {


        let heightdialog:string='280px';
        let widthdialog:string='500px';
        let isQuestion:boolean=true;

        if (category==EnumCategoryD.notification) {
          isQuestion=false;
        }
        else {
          isQuestion=true
        }

        if (size==EnumSizeD.medium) {
            heightdialog='480px';
            widthdialog ='800px'
        }

        if (size==EnumSizeD.large) {
            heightdialog='680px';
            widthdialog ='1000px'
        }

        if (size==EnumSizeD.xl) {
            heightdialog='880px';
            widthdialog ='1200px'
        }

        if (width!=undefined) {

            widthdialog =width
        }

        if (height!=undefined) {

          heightdialog=height;
        }

        this.dialogRef = this.dialog.open(Dialog, {
          height: heightdialog,
          width: widthdialog,
        });
        this.dialogRef.componentInstance.title = title;
        this.dialogRef.componentInstance.message = message;
        this.dialogRef.componentInstance.type = type;
        this.dialogRef.componentInstance.isQuestion = isQuestion;
        this.dialogRef.componentInstance.icon=icon;

        return this.dialogRef.afterClosed();
    }

    public ShowLoading(title?: string, message?: string,extrainfo?:string, type?:number,size?:number): Observable<boolean> {

        if (title == undefined) {
            title='LOADING';
        }

        if (message == undefined) {
            message = 'Please Wait,Processing data';
        }

        if (extrainfo == undefined) {
            extrainfo = '';
        }


        let heightdialog:string='260px';
        let widthdialog:string='1920px';
        let isQuestion:boolean=true;

        if (size==EnumSizeD.medium) {
            heightdialog='480px';
            widthdialog ='800px'
        }

        if (size==EnumSizeD.large) {
            heightdialog='680px';
            widthdialog ='1000px'
        }

        if (size==EnumSizeD.xl) {
            heightdialog='880px';
            widthdialog ='1200px'
        }

        if(type == undefined){
          type=1;
        }

        if(type == 2){
          heightdialog='310px';
        }
        // const config = new MdDialogConfig();
        //
        // config.data = [
        //   '200',
        //   '100',
        //   'loadingCSS'
        // ];

        this.loadingdialog = this.loading.open(LoadingDialog, {
          height: heightdialog,
          width: widthdialog,
          disableClose:true
        });

        this.loadingdialog.componentInstance.title = title;
        this.loadingdialog.componentInstance.message = message;
        this.loadingdialog.componentInstance.extrainfo = extrainfo;
        this.loadingdialog.componentInstance.type = type;

        return this.loadingdialog.afterClosed();
    }

    public HideLoading(): Observable<boolean> {

       this.loadingdialog.close(true);
       return this.loadingdialog.afterClosed();
   }


   public inputSimple(title: string, message: string, type:number,category:number,size:number,icon:number,width?:string,height?:string): Observable<InputSimpleModel> {


     let heightdialog:string='410px';
     let widthdialog:string='50%';
      //  let isQuestion:boolean=true;
       //
      //  if (category==EnumCategoryD.notification) {
      //    isQuestion=false;
      //  }
      //  else {
      //    isQuestion=true
      //  }
       //
      //  if (size==EnumSizeD.medium) {
      //      heightdialog='580px';
      //      widthdialog ='800px'
      //  }
       //
      //  if (size==EnumSizeD.large) {
      //      heightdialog='780px';
      //      widthdialog ='1000px'
      //  }
       //
      //  if (size==EnumSizeD.xl) {
      //      heightdialog='980px';
      //      widthdialog ='1200px'
      //  }

       if (width!=undefined) {

           widthdialog =width
       }

       if (height!=undefined) {

         heightdialog=height;
       }

       this.dialoginputRef = this.DialoginputSimple.open(DialogInput, {
         height: heightdialog,
         width: widthdialog,
       });
       this.dialoginputRef.componentInstance.title = title;
       this.dialoginputRef.componentInstance.message = message;
       this.dialoginputRef.componentInstance.type = type;
      //  this.dialoginputRef.componentInstance.isQuestion = isQuestion;
       this.dialoginputRef.componentInstance.icon=icon;

       return this.dialoginputRef.afterClosed();
   }


   public showErrors(title: string,section:string,jsonObj:any, message: string, type:number,category:number,size:number,icon:number,width?:string,height?:string): Observable<InputSimpleModel> {


      if(title == null){
          title="ERROR"
      }


       let heightdialog:string='430px';
       let widthdialog:string='500px';
       let isQuestion:boolean=true;



       if(message.length >100){
         heightdialog='450px';
         widthdialog='500px'
       }
       if(message.length >500){
         heightdialog='650px';
         widthdialog='700px'
       }

       if (category==EnumCategoryD.notification) {
         isQuestion=false;
       }
       else {
         isQuestion=true
       }

       if (size==EnumSizeD.medium) {
           heightdialog='580px';
           widthdialog ='800px'
       }

       if (size==EnumSizeD.large) {
           heightdialog='780px';
           widthdialog ='1000px'
       }

       if (size==EnumSizeD.xl) {
           heightdialog='980px';
           widthdialog ='1200px'
       }

       if (width!=undefined) {

           widthdialog =width
       }

       if (height!=undefined) {

         heightdialog=height;
       }

       this.dialogErrorRef = this.DialogErrorMD.open(DialogError, {
         height: heightdialog,
         width: widthdialog,

       });
       this.dialogErrorRef.componentInstance.title = title;
       this.dialogErrorRef.componentInstance.message = message;
       this.dialogErrorRef.componentInstance.type = type;
       this.dialogErrorRef.componentInstance.isQuestion = isQuestion;
       this.dialogErrorRef.componentInstance.icon=icon;
       this.dialogErrorRef.componentInstance.section=section;
       this.dialogErrorRef.componentInstance.jsonObj=jsonObj;


       return this.dialogErrorRef.afterClosed();
   }


   public ShowErrorInfra(title: string,message:string,section?: string,jsonObj?:any): Observable<boolean> {


       let heightdialog:string='350px';
       let widthdialog:string='50%';
       let isQuestion:boolean=true;

       this.dialogErrorInfraRef = this.DialogDevelopMD.open(DialogErrorInfraComponent, {
         height: heightdialog,
         width: widthdialog,
            panelClass:'nox'
       });
       this.dialogErrorInfraRef.componentInstance.title = title;
       this.dialogErrorInfraRef.componentInstance.message = message;
       this.dialogErrorInfraRef.componentInstance.jsonObj=jsonObj;
        this.dialogErrorInfraRef.componentInstance.section=section;
      //  this.dialogDevelopRef.componentInstance.isQuestion = isQuestion;
      //  this.dialogDevelopRef.componentInstance.icon=icon;

       return this.dialogErrorInfraRef.afterClosed();
   }

   public ShowDialogInfo(title: string,message:string,anyObj?:any): Observable<boolean> {


       let heightdialog:string='350px';
       let widthdialog:string='50%';
       let isQuestion:boolean=true;

       this.dialogInfoRef = this.DialogInfoMD.open(DialogInfo, {
         height: heightdialog,
         width: widthdialog,
            panelClass:'nox'
       });
       this.dialogInfoRef.componentInstance.title = title;
       this.dialogInfoRef.componentInstance.message = message;
       this.dialogInfoRef.componentInstance.jsonObj=anyObj;
      //  this.dialogDevelopRef.componentInstance.isQuestion = isQuestion;
      //  this.dialogDevelopRef.componentInstance.icon=icon;

       return this.dialogInfoRef.afterClosed();
   }

   public ShowDialogBitacora(): Observable<boolean> {


       let heightdialog:string='auto';
       let widthdialog:string='70%';
       let isQuestion:boolean=true;

       this.dialogLogsRef = this.DialogLogsMD.open(DialogLogs, {
         height: heightdialog,
         width: widthdialog,
            panelClass:'nox'
       });
      //  this.dialogInfoRef.componentInstance.title = title;
      //  this.dialogInfoRef.componentInstance.message = message;
      //  this.dialogInfoRef.componentInstance.jsonObj=anyObj;
      //  this.dialogDevelopRef.componentInstance.isQuestion = isQuestion;
      //  this.dialogDevelopRef.componentInstance.icon=icon;

       return this.dialogLogsRef.afterClosed();
   }


    // public close(): Observable<boolean> {

       //let dialogRef: MdDialogRef<Dialog>;
      //  this.dialogRef.close();
      //  return this.dialogRef.afterClosed();
  //  }
}
