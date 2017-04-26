import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {
    isRemoteCall: boolean =false;
    showPhoneIcon: boolean = true;
    isVideoCall: boolean = false;
    constructor(private http: Http) { }
}