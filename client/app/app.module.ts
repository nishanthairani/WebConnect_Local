import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AlertComponent } from './directives/index';
import { AlertService, AuthenticationService} from './services/index';

import { HomeComponent } from './components/home/index';
import { LoginComponent } from './components/login/index';


import { MaterialModule }        from '@angular/material';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        routing,
		MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent
    ],
    providers: [
        AlertService,
        AuthenticationService
    ],
    entryComponents: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }