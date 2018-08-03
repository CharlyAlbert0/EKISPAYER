import { Component, OnInit } from '@angular/core';
import {DialogsService} from '../../../../infraestructure/dialogs/service/dialogs.service';
import {EnumCategoryD,EnumIconD,EnumSizeD,EnumTypeD,EnumTypeLoading} from '../../../../infraestructure/enums/enumdialog';
import {SystemContext} from '../../../../infraestructure/context/model/systemcontext';

declare var swal: any;
@Component({
  selector: 'app-fba',
  templateUrl: '../view/fba.component.html',
  styleUrls: ['../view/fba.component.css']
})
export class FbaComponent implements OnInit {
  constructor(private dialogsService:DialogsService, private systemContext:SystemContext) {  }

  ngOnInit() {}

  openBitacora(){
    this.dialogsService.ShowDialogBitacora();
  
  }

  openContact(){
    this.dialogsService.inputSimple('Contact','Please report',EnumTypeD.info,EnumCategoryD.notification,EnumSizeD.medium,EnumIconD.warningblue)
    .subscribe(response=>{
          if(response){

          }
    });
  }

  openConfig(){
    this.dialogsService.ShowDialogInfo('Info','URL API: '+localStorage.getItem('APIURL')+'URL SSO: '+localStorage.getItem('SSOURL'));
  }
}
