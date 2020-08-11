import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { GlobalService } from 'src/app/services/global.service';
import { CryptService } from 'src/app/services/crypt.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit {


  oboardForm: FormGroup;
  signinShow: any = false;
  signupShow1: any = false;
  signupShow2: any = false;
  activeForm: any;


  signupLoader: any = false;
  submitTrigger: any = false;

  constructor(
    private router: Router,
    public userService: UserService,
    public globalservice: GlobalService,
    public cryptservice: CryptService
    ) { }

  ngOnInit() {
    this.generateForm('sign-up');
  }

  generateForm(from) {
    if (from === 'sign-in') {
      this.activeForm = from;
      this.signinShow = false;
      this.oboardForm = undefined;
      this.oboardForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$')]),
        'password': new FormControl(null, [Validators.required, Validators.min(1)]),
      });
    } else if (from === 'sign-up') {
      this.activeForm = from;
      this.signupShow1 = false;
      this.signupShow2 = false;
      this.oboardForm = undefined;
      this.oboardForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$')]),
        'userName': new FormControl(null, [Validators.required, Validators.min(1), Validators.pattern('^[a-zA-Z0-9_]*$')]),
        'password': new FormControl(null, [Validators.required, Validators.min(1)]),
        'cpassword': new FormControl(null, [Validators.required, Validators.min(1)]),
      });
    } else if (from === 'forget') {
      this.metadataFormMarkTouched('signin-forget');
      if (this.oboardForm.get('email').value && this.oboardForm.get('email').status === 'VALID') {
        this.activeForm = from;
        this.oboardForm = new FormGroup({
          'otp1': new FormControl(null, [Validators.required, Validators.maxLength(1)]),
          'otp2': new FormControl(null, [Validators.required, Validators.maxLength(1)]),
          'otp3': new FormControl(null, [Validators.required, Validators.maxLength(1)]),
          'otp4': new FormControl(null, [Validators.required, Validators.maxLength(1)]),
        });
      }
    } else if (from === 'setpassword') {
      this.activeForm = from;
      this.signupShow1 = false;
      this.signupShow2 = false;
      this.oboardForm = undefined;
      this.oboardForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$')]),
        'password': new FormControl(null, [Validators.required, Validators.min(1)]),
        'cpassword': new FormControl(null, [Validators.required, Validators.min(1)]),
      });
      this.oboardForm.get('email').setValue('mujatom@gmail.com');
    }
  }

  async onboard(from) {
    if (from === 'sign-in') {
      console.log(this.oboardForm.get('email'))
      this.metadataFormMarkTouched(from);


      const payload: any = {
        email: this.oboardForm.get('email').value,
        password: this.oboardForm.get('password').value
      };

      const CryptoJS = await this.cryptservice.getCryptoJS();
      const encryptPay = {
        event: CryptoJS.AES.encrypt(
          JSON.stringify(payload),
          environment.onboardEncryptKey
        ).toString()
      };

        console.log(encryptPay, 'encryptPay')

      this.userService.signIn(encryptPay).subscribe((response: any) => {
        console.log('response', response)

        if (response && response.success) {
          localStorage.setItem('userData', JSON.stringify(response.userData));
          this.globalservice.userData.next(response.userData);
          this.router.navigateByUrl('home');
        } else {

        }

      }, error => {
      });




    } else if (from === 'sign-up') {
      this.metadataFormMarkTouched(from);
      this.signupLoader = true;
      this.submitTrigger = true;

      console.log('this.oboardForm', this.oboardForm)

      console.log('222222222', this.oboardForm.get('cpassword').value === this.oboardForm.get('password').value)

      if (this.oboardForm.valid && this.oboardForm.get('cpassword').value === this.oboardForm.get('password').value) {
        this.signupLoader = false;
        const payload: any = {
          email: this.oboardForm.get('email').value,
          userName: this.oboardForm.get('userName').value,
          password: this.oboardForm.get('password').value
        };
        const CryptoJS = await this.cryptservice.getCryptoJS();
        const encryptPay = {
          event: CryptoJS.AES.encrypt(
            JSON.stringify(payload),
            environment.onboardEncryptKey
          ).toString()
        };

        console.log(encryptPay, 'encryptPay')

        this.userService.signUp(encryptPay).subscribe((response: any) => {
          console.log('response', response)
        }, error => {
          this.signupLoader = false;
        });
      } else {
        this.signupLoader = false;
      }
    }  else if (from === 'otpsubmit') {
      this.metadataFormMarkTouched(from);

      this.generateForm('setpassword');

      console.log(this.oboardForm.get('email'))
    } else if (from === 'setpassword') {
      this.metadataFormMarkTouched(from);
      this.generateForm('sign-in');


      console.log(this.oboardForm.get('email'))
    }
  }


  metadataFormMarkTouched(from) {

    if (from === 'sign-in') {
      console.log(this.oboardForm.get('email'))
      this.oboardForm.controls['email'].markAsTouched();
      this.oboardForm.controls['password'].markAsTouched();
    } else if (from === 'sign-up') {
      console.log(this.oboardForm.get('email'))
      this.oboardForm.controls['email'].markAsTouched();
      this.oboardForm.controls['userName'].markAsTouched();
      this.oboardForm.controls['password'].markAsTouched();
      this.oboardForm.controls['cpassword'].markAsTouched();
    } else if (from === 'signin-forget') {
      console.log(this.oboardForm.get('email'))
      this.oboardForm.controls['email'].markAsTouched();
    }

  }


  checkOTP(name) {
    name.value = name.value.match(/^[0-9]$/) ? name.value : null;
  }


  otpNumberCheck(index, name, event) {
    const KeyID: any = event.keyCode;
    if (KeyID !== 9) {
      if (name.value && index !== 6 && KeyID !== 8) {
        index = index + 1;
        this.oboardForm.get('otp' + index).setValue(null);
        const a: any = document.getElementById('otp' + index);
        a.focus();
      } else if (KeyID === 8 && index !== 1) {
        setTimeout(() => {
          index = index - 1;
          const a: any = document.getElementById('otp' + index);
          a.focus();
        }, 100);
      }
    }
  }




}
