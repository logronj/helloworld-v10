import { Injectable } from "@angular/core";
import { DataService } from '../common/data.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class FollowerService extends DataService{
    constructor(http : HttpClient){
        super("https://api.github.com/users/mosh-hamedani/followers",http);
    }
}