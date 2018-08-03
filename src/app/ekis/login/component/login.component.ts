import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import {UserService} from '../services/user.service';
import {UserModel} from '../model/user.model';
import {  HttpModule,Http } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';
import { DialogsService } from '../../../infraestructure/dialogs/service/dialogs.service';
import { EnumTypeD,EnumSizeD,EnumCategoryD,EnumIconD } from '../../../infraestructure/enums/enumdialog';
import {LogsComponent} from '../../../infraestructure/logs/component/logs.component';
import { EnumLogType,EnumLogPriority } from '../../../infraestructure/enums/enumlog';
import { Observable } from 'rxjs/Rx';
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Subscription} from "rxjs";

declare var swal: any;
@Component({
  moduleId: module.id,
  templateUrl: '../view/login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  version:string;
  userlogin:UserModel = new UserModel();
  canloggin:boolean=false;
  ambiente:string;
  configs:Array<any>;
  errorConfig:boolean;
  UrlErrorImage:string;
  cntErrorImage:string;
  private subscriptionTimer: Subscription;

  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true}

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService,
      private userService:UserService,
      private notificationsService: NotificationsService,
      private dialogsService:DialogsService,
      private logsComponent:LogsComponent,
      private http:Http) {
        this.cntErrorImage =localStorage.getItem('UrlErrorImage');


      }



      ngOnInit() {
        this.RandomErrorGif()
        this.LoadingConfigAndDataAccess();

      }

      showAlert() {
        swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(function() {
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        })
      }

      StartIntenterLogin(){

        // subscribing to a observable returns a subscription object
        let timer = TimerObservable.create(25000,25000);

         this.subscriptionTimer = timer.subscribe(t => {

           if(this.canloggin == false)
           {
             this.logsComponent.SaveLog('StartIntenterLogin','LoginComponent','StartIntenterLogin',EnumLogType.Info,EnumLogPriority.Low,false,true)
             const toast = this.notificationsService.info('Info', 'trying Getting Version API', {
               timeOut: 6000,
               showProgressBar: false,
               pauseOnHover: true,
               clickToClose: true
             });

             this.userService.InitInfo().subscribe(Response => {
               this.version = Response;
             }, error => {
               const toast = this.notificationsService.error('Error', 'No InitInfo', {
                 timeOut: 6000,
                 showProgressBar: false,
                 pauseOnHover: true,
                 clickToClose: true
               });
               this.errorConfig=true;
               this.ambiente='No InitInfo';
               toast.id

             }, () => {
               this.canloggin=true;
               const toast = this.notificationsService.success('Info', this.version, {
                 timeOut: 6000,
                 showProgressBar: false,
                 pauseOnHover: true,
                 clickToClose: true
               });
             });
           }





        });

        const toast = this.notificationsService.error('Error Login', 'An error avoid the session start!', {
          timeOut: 6000,
          showProgressBar: false,
          pauseOnHover: true,
          clickToClose: true
        });
      }

      RandomErrorGif(){

        if(this.cntErrorImage == null  || this.cntErrorImage == '1'){
          this.UrlErrorImage = '/assets/images/error.gif'
          this.cntErrorImage='2';
          localStorage.setItem('UrlErrorImage', this.cntErrorImage.toString());
        }
        else if(this.cntErrorImage =='2'){
          this.UrlErrorImage = '/assets/images/error2.gif'
          this.cntErrorImage='3';
          localStorage.setItem('UrlErrorImage', this.cntErrorImage.toString());
        }
        else if(this.cntErrorImage == '3'){
          this.UrlErrorImage = '/assets/images/error3.gif'
          this.cntErrorImage = '1';
          localStorage.setItem('UrlErrorImage', this.cntErrorImage.toString());
        }
      }

      LoadingConfigAndDataAccess(){

        this.http.request('assets/config/webconfig.json').toPromise()
        .then(response =>{

          try{
            this.configs = response.json();
            localStorage.setItem('APIURL', this.configs["APIURL"]);
            localStorage.setItem('SSOURL', this.configs["SSOURL"]);
            localStorage.setItem('ISDEVQA', this.configs["ISDEVQA"]);
            this.ambiente=localStorage.getItem('APIURL');

            this.userService.InitInfo().subscribe(Response => {
              this.version = Response;
            }, error => {

              this.errorConfig=true;
              this.ambiente='No InitInfo';
              this.logsComponent.SaveLog('Error','LoginComponent-LoadingConfigAndDataAccess',error,EnumLogType.Error,EnumLogPriority.Hight,true);
              //this.ErrorInfraesctructure('Error en LoadingConfigAndDataAccess',error.toString())
              this.StartIntenterLogin()
              //alert(error);
            }, () => {
              this.canloggin=true;
            });


          }
          catch(error){
            this.errorConfig=true;
            this.ambiente='No one';
            alert(error);
          }

        }).catch(error => {
          this.errorConfig=true;
          this.ambiente='No one';
          this.logsComponent.SaveLog('Error','LoginComponent-LoadingConfigAndDataAccess','Configuration file not found ',EnumLogType.Error,EnumLogPriority.Hight,true);

          //alert(error);
        });



      }


      login() {

        if(this.canloggin){

          this.loading = true;
          // setTimeout(()=> this.loading=false,3000);

          // setTimeout(() => {
          this.loading=false;
          this.userlogin.user=this.model.username;
          this.userlogin.password=this.model.password;

          this.userService.Login(this.userlogin)
          .subscribe(
            data => {
              if(data !=null){
                localStorage.setItem('currentUser', data);
                this.router.navigate(['/home']);
              }
              else{
                alert('no se puedron validar cedenciales');
              }

            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            });


            // }, 3000);
            //   localStorage.setItem('currentUser', 'this.token.access_token');
            //  this.router.navigate(['/home']);

            // this.authenticationService.login(this.model.username, this.model.password)
            //     .subscribe(
            //         data => {
            //             this.router.navigate([this.returnUrl]);
            //         },
            //         error => {
            //             this.alertService.error(error);
            //             this.loading = false;
            //         });
          }
          else{
            alert('No hay App.Config, no puedes iniciar sesión');
          }


        }

        ErrorInfraesctructure(title:string,message:string){
          // this.dialogsService.ShowErrorInfra(title,message).subscribe(data => {
          //   if(data){
          //
          //   }
          // });
        }


        ejecutar(){
          this.loading =true;

          setTimeout(()=> this.loading=false,3000);

        }
      }
