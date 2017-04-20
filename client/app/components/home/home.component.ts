import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, AuthenticationService } from '../../services/index';
declare function pageReady() : any;
declare function start(isCaller) : any;

@Component({
    templateUrl: './app/components/home/home.component.html'
})

export class HomeComponent implements AfterViewInit  {
    constructor(private authenticationService: AuthenticationService) { }
    imageurl;
    ngAfterViewInit () {
        this.imageurl="app/images/phone102.png";
        pageReady();
    }

    startVideo(bool) {
        start(bool);
    }
}