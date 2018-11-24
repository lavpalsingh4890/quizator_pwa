import { Injectable } from "@angular/core";

@Injectable()
export class Context{
    private static  contextObject = new Map();
    public static set(key:string,val:any){
        Context.contextObject.set(key,val);
   }
    public static get(key:string){
        Context.contextObject.get(key);
    }
}