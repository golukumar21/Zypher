import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable() 

export class GeneralService {
    private url = 'https://newprod.zypher.co/admin/themes/getAllThemes';
    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get(this.url);
    }
}