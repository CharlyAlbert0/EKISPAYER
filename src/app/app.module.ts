// poner los modules aqui
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatStepperModule,MdTableModule,MdPaginatorModule,} from '@angular/material';
import { RouterModule } from '@angular/router';
import {MdDialogModule, MdTooltipModule,} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {CdkTableModule} from '@angular/cdk/table';

// Ng2Table
// INSTALL
// npm i ng2-table --save
// npm install ng2-bootstrap --save
//
// IMPORT
// import { Ng2TableModule } from 'ng2-table/ng2-table';
// import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap'; array
// import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
// and add this elements to imports array
import {Ng2TableModule} from 'ng2-table/ng2-table';
import { PaginationModule,PaginationConfig } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

//end modeules

//poner los componentes aqui
import { AppComponent } from './app.component';
import { HomeComponent } from './ekis/home/component/home.component';
import { NavbarComponent } from './ekis/shared/navbar/component/navbar.component';
import { FooterComponent } from './ekis/shared/footer/component/footer.component';
import { IntroComponent } from './ekis/home/sections/intro/component/intro.component';
import { FbaComponent } from './ekis/shared/fba/component/fba.component';
import {MoreDevComponent} from './ekis/home/sections/intro/component/moredev.component';
import {LoginComponent} from './ekis/login/component/login.component';

import {UserComponent} from './ekis/users/component/user.component';
import {AuthGuard} from './guards/authguard';
import {LogsComponent} from './infraestructure/logs/component/logs.component';
import {SystemContext} from './infraestructure/context/model/systemcontext';
import 'hammerjs';
//end componentes


//poner aqui los servicios
import { DialogsService,DIALOGS_COMPONENTS } from './infraestructure/dialogs/service/dialogs.service';
import {AlertService} from './ekis/login/services/alert.service';
import {AuthenticationService} from './ekis/login/services/authentication.service';
import {UserService} from './ekis/login/services/user.service';
import {LogsService} from './infraestructure/logs/service/logs.service';
//end servicios

//poner aqui los routing
import {MODULE_COMPONENTS,app_routing} from './app.routing';
//end routing

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    IntroComponent,
    FbaComponent,
    MoreDevComponent,
    DIALOGS_COMPONENTS,
    MODULE_COMPONENTS,
    LoginComponent,
    UserComponent

  ],
  exports:[DIALOGS_COMPONENTS,MdTooltipModule],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdDialogModule,MdTableModule,
    CdkTableModule,
    MdPaginatorModule,
    Ng2TableModule,
    PaginationModule,
    TabsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    app_routing,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [DialogsService,AuthGuard,AlertService,AuthenticationService,UserService,LogsComponent,LogsService,SystemContext,PaginationConfig],
  entryComponents:[DIALOGS_COMPONENTS],
  bootstrap: [AppComponent]
})
export class AppModule { }
