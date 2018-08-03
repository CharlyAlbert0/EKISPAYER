import {UserModel} from '../model/user.model';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod,Response } from '@angular/http';
import {LogsComponent} from '../../../infraestructure/logs/component/logs.component';
import { EnumLogType,EnumLogPriority } from '../../../infraestructure/enums/enumlog';
declare var swal: any;

@Injectable()
export class UserService {
  private urlApi = 'ReeplaceByConfigFile'
  constructor(private http: Http
              ,private logsComponent:LogsComponent) {


  }

  GetUrlLocalStorage(){
    if(localStorage.getItem('APIURL')){
        this.urlApi = localStorage.getItem('APIURL')
    }
  }
  InitInfo(): Observable<string>{
    this.GetUrlLocalStorage();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    // headers.append('authorization', 'bearer ' + localStorage.getItem('token'))
    headers.append('Accept', 'application/json')
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    // let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    return this.http.post(this.urlApi+'LimitRules/InitInfo?version=1', options)
    .map(res =>  {console.log(res.json()); return res.json() as string }).catch(this.handleError);

  }

  Login(user:UserModel): Observable<string>{
    this.GetUrlLocalStorage();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    // headers.append('authorization', 'bearer ' + localStorage.getItem('token'))
    headers.append('Accept', 'application/json')
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    // let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    return this.http.post(this.urlApi+'LimitRules/Login?version=1',user, options)
    .map(res =>  {

      console.log(res.json());
      return res.json() as UserModel
    }).catch(this.handleError);

  }

  GetUsers(): Observable<UserModel[]>{

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    // headers.append('authorization', 'bearer ' + localStorage.getItem('token'))
    headers.append('Accept', 'application/json')
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    // let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    return this.http.post(this.urlApi+'LimitRules/GetUsers?version=1', options)
    .map(res =>  {

      console.log(res.json());
      return res.json() as UserModel[]
    }).catch(this.handleError);

  }

  // private handleError(error: any): Promise<any> {
  //   debugger
  //
  //
  //   //swal("UserService handleError", 'Ok: '+error.ok+', tipo: '+error.type+', status: '+error.status+', statusText:'+error.statusText+', ErrorBody: '+error._body, "error");
  //   //alert('Ok: '+error.ok+', ErrorBody: '+error._body+', tipo: '+error.type+', status: '+error.status+', statusText:'+error.statusText); // for demo purposes only
  //   if(error.status == 401)
  //   return //Promise.reject(error || error);
  //   Observable.throw(error);
  //
  //
  // }


  protected handleError (error: Response | any) {
    
      // In a real world app, you might use a remote logging infrastructure
      let errMsg: any;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        //errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        errMsg =error
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      //console.clear();
      console.error(errMsg);
      return Observable.throw(errMsg);
    }








}
