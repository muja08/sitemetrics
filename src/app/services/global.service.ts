import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  showNav = new BehaviorSubject<any>(false);
  userData = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {

  }



  // re-usable script loader
  public loadScript(element: string, url: string, type: string, rel: string, id: string, child?: any[], defer?: any, onload?: any, onerror?: any): Promise<any> {
    return new Promise(async (resolved, rejected) => {
      if (document.getElementById(id)) {
        resolved(true);
      } else {
        const node: any = document.createElement(element);
        if (element === 'link') {
          node.href = url;
          node.rel = 'stylesheet';
        } else if (element === 'script') {
          node.src = url;
        }

        if (defer) {
          node.defer = defer;
        }

        if (onload) {
          node.onload = resolved(onload);
        }

        if (onerror) {
          node.onerror = resolved(onerror);
        }

        node.type = type;
        document.getElementsByTagName('head')[0].appendChild(node);
        node.onload = () => {
          node.id = id;
          if (child && child.length) {
            const promiseArray: any[] = [];
            child.forEach((script: any) => {
              promiseArray.push(
                this.loadScript(script.element, script.url, script.type, script.rel, script.id, script.child)
              );
            });
            Promise.all(promiseArray).then(() => {
              resolved(true);
            });
          } else {
            resolved(true);
          }
        };
        node.onerror = () => {
          rejected(false);
        };
      }
    });
  }

}
