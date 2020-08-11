import { GlobalService } from './global.service';
import { Injectable } from '@angular/core';

declare var CryptoJS: any;
@Injectable({
  providedIn: 'root'
})
export class CryptService {

  private crypt: any;

  constructor(public globalservice: GlobalService) { }

  public decrypt(encryptedString, key) {
    return new Promise((result, reject) => {
      const bytes = CryptoJS.AES.decrypt(encryptedString, key);
      result(bytes.toString(CryptoJS.enc.Utf8));
    });
  }

  public encrypt(payload, key) {
    return CryptoJS.AES.encrypt(payload, key).toString();
  }



  // get CryptoJS
  public async getCryptoJS() {
    if (!this.crypt) {
      const script = {
        element: 'script',
        url: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js',
        type: 'text/javascript',
        rel: '',
        id: 'cryptojs'
      };
      await this.globalservice.loadScript(script.element, script.url, script.type, script.rel, script.id);
      this.crypt = CryptoJS;
    }
    return this.crypt;
  }



}
