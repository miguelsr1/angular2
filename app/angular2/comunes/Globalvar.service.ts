/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';

interface ShareObj {
    [id: string]: any;
}

@Injectable()
export class GlobalvarService{
    shareObj: ShareObj = {};
}