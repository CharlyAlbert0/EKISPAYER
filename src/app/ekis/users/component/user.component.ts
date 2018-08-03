import {Component, ViewChild,OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {UserModel} from '../model/user.model';
import {UserService} from '../../login/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: '../view/user.component.html',
})
export class UserComponent implements OnInit {
  ListUser:UserModel[];
  constructor(private userService:UserService) {

    }

  ngOnInit() {
     this.loadScript('assets/js/main.js');
     this.GetUsers();
  }

  GetUsers(){
    this.userService.GetUsers().subscribe(data =>
          {
          //to doo
          debugger
            this.ListUser=data;
          });;
  }

  public loadScript(url) {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
 }
}
