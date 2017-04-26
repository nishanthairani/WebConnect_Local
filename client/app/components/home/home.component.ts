import { Component, OnInit,Input, AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, AuthenticationService, MediaService } from '../../services/index';
declare function pageReady() : any;
declare function start(isCaller) : any;

@Component({
    templateUrl: './app/components/home/home.component.html',
})

export class HomeComponent implements AfterViewInit  {

    constructor(private authenticationService: AuthenticationService,
                private mediaService: MediaService) { }
    imageurl;
    ngAfterViewInit () {
        this.imageurl="app/images/phone102.png";
    }
    private hideElement: boolean = false;
    startVideo(bool) {
        this.mediaService.showPhoneIcon = false;
        //TODO, check how can handle event for this i.e. observable
        setTimeout(function() { pageReady(); }, 1000);  
    }

    remoteVideo(bool) {
        start(bool);
    }

    get showPhoneIcon() {
        return this.mediaService.showPhoneIcon;
    }

    // closeChatDiv() {
    //     if (this.hideElement) {
    //         this.hideElement = false;
    //     } else {
    //         this.hideElement = true;
    //     }
    // }
}