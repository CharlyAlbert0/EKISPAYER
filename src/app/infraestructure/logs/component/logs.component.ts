import { Component, OnInit,Inject,Input, Output, EventEmitter } from '@angular/core';
import { LogsModel} from '../model/logsmodel';
import { LogsService } from '../service/logs.service';
// import {MD_DIALOG_DATA} from '@angular/material';
import { MdDialog,MdDialogRef } from '@angular/material';
import {EnumLogPriority,EnumLogType} from '../../enums/enumlog';
import { ClientErrorModel } from '../model/clienterror';
import { DialogsService } from '../../../infraestructure/dialogs/service/dialogs.service';
import { EnumTypeD,EnumSizeD,EnumCategoryD,EnumIconD } from '../../../infraestructure/enums/enumdialog';
import {errorSubscribeModel} from '../../../infraestructure/logs/model/errorSubscribe';
import {errorSubscribeBodyModel} from '../../../infraestructure/logs/model/errorSubscribeBody';
import { Headers, Http, RequestOptions, RequestMethod,Response } from '@angular/http';
import { SystemContext } from '../../../infraestructure/context/model/systemcontext';

@Component({
  selector: 'logs-app',
  templateUrl: '../view/logs.component.html',
})
export class LogsComponent implements OnInit {
  //ListLogs: LogsModel[] = new Array<LogsModel>();

  //emisores de listas
  @Input() ListLogs: LogsModel[]= new Array<LogsModel>();
  @Output() ListLogsEmisor: EventEmitter<LogsModel[]> = new EventEmitter();

  // LogPriorityFilter:SelectItem[];
  // LogTypeFilter:SelectItem[];

  constructor(private _LogsService: LogsService, public dialog: MdDialog,private dialogsService: DialogsService,
              private systemContext:SystemContext) {  }

  getGlobalAttributes(): void {
    this._LogsService.getLogs().subscribe(result => {
      this.ListLogs = result;
    });
  }

  ngOnInit() {
    this.getGlobalAttributes();
    this.GetFilterList();

  }

  GetFilterList(){
    // this.LogPriorityFilter=[];
    // this.LogTypeFilter=[];
    // for (let enumValue in EnumLogPriority) {
    //   if (isNaN(Number(enumValue))) {
    //        this.LogPriorityFilter.push({label:enumValue,value:EnumLogPriority[enumValue]})
    //    }
    // }
    // for (let enumValue in EnumLogType) {
    //   if (isNaN(Number(enumValue))) {
    //        this.LogTypeFilter.push({label:enumValue,value:EnumLogType[enumValue]})
    //    }
    // }


  }

  Update(lga:LogsModel[]){
    this.ListLogs = null;
  }

  Refresh(){
      this.getGlobalAttributes();
  }

  SaveLog(title: string,section:string,errorSubscribe:errorSubscribeModel | any,type:number,Priority:number,IsAlert:boolean,IsOpenBitacora?:boolean){

    if(localStorage.getItem('ISDEVQA'))
    {
      let xs= localStorage.getItem('ISDEVQA')
      if( xs == '1' && IsOpenBitacora == true){
          this.systemContext.openBitacora = true;
      }

    }
    if (localStorage.getItem('LogStorage'))
    {
        this.ListLogs= JSON.parse(localStorage.getItem('LogStorage'));
        let objLog:LogsModel = new LogsModel();
        objLog.Message=errorSubscribe != null ? errorSubscribe.toString():'';
        objLog.Priority= Priority;
        objLog.Type=type;
        objLog.Proyect = section;
        this.ListLogs.push(objLog);
        this.ListLogsEmisor.emit(this.ListLogs);
        localStorage.setItem('LogStorage',JSON.stringify(this.ListLogs))
    }
    else{
      let objLog:LogsModel = new LogsModel();
      objLog.Message=errorSubscribe != null ? errorSubscribe.toString():'';
      objLog.Priority= Priority;
      objLog.Type=type;
      objLog.Proyect = section;
      this.ListLogs.push(objLog);
      this.ListLogsEmisor.emit(this.ListLogs);
      localStorage.setItem('LogStorage',JSON.stringify(this.ListLogs))
    }
    let errMsg:any;
    let err
    let isResponseError:boolean=false;
    if (errorSubscribe instanceof Response) {
      const body = errorSubscribe.json() || '';
      err = body.error || JSON.stringify(body);
      //errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      errMsg =errorSubscribe;
      isResponseError = true;
    } else {
      errMsg = errorSubscribe.message ? errorSubscribe.message : errorSubscribe.toString();
    }

if (IsAlert) {
  // this.dialogsService.ShowErrorInfra(title,isResponseError == false ? errMsg:err,section,isResponseError == true ?errMsg:'').subscribe(data => {
  //   if(data){
  //
  //   }
  // });
}

  }

  InsertError(error: string,section:string,errorSubscribe:errorSubscribeModel,willShowUser:boolean = false){
    debugger
    try{


      let errorClientErrorModel = new ClientErrorModel(error,section);
      errorClientErrorModel.error=error+"/"+errorSubscribe._body;
      errorClientErrorModel.section=section;

      this._LogsService.clientLogError(errorClientErrorModel);

      if(willShowUser){
        var jsonObj=JSON.parse(errorSubscribe._body);
        if(jsonObj.error_description == null)
           jsonObj.error_description=jsonObj.error;
        if(jsonObj.message != null && jsonObj.error_description == null)
           jsonObj.error_description=jsonObj.message;

        this.dialogsService.showErrors(jsonObj.error,section,errorSubscribe, jsonObj.error_description, EnumTypeD.error,
        EnumCategoryD.notification, EnumSizeD.small, EnumIconD.warningred ).subscribe(data => {
          if(data){

          }
        });
      }
    }
    catch(error){
      this.dialogsService.showErrors("ERROR", "InsertError","","", EnumTypeD.error,
      EnumCategoryD.notification, EnumSizeD.small, EnumIconD.warningred ).subscribe(data => {
        if(data){

        }
      });
    }


  }

}
