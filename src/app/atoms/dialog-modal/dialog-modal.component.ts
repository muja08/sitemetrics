import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent implements OnInit {


  @Input() dialogProperties: any;
  @Output() close = new EventEmitter();
  @Output() submitDialog = new EventEmitter();

  form: FormGroup;
  subDomainList: any = [{
    name: ''
  }, {
    name: ''
  }];

  error = '';
  addMoreBtn: any = {
    name: 'Add More',
    style: {
      'border': '1px solid var(--eleven)',
      'font-weight': 500,
      'cursor': 'pointer'
    }
  };

  closeBtn: any = {
    name: 'Close',
    style: {
      'border': '1px solid var(--eleven)',
      'cursor': 'pointer'
    }
  };

  saveBtn: any = {
    name: 'Save Changes',
    style: {
      'border': '1px solid var(--one)',
      'cursor': 'pointer'
    }
  };

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      domainName: [null, [Validators.required]],
      storage: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      monthlyVisitor: [null, [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  addSubdomain(event) {
    if (this.subDomainList[this.subDomainList.length - 1].name.length) {
      this.subDomainList.push({
        name: ''
      });
    }
  }

  removeSubdomain(index) {
    this.subDomainList.splice(index, 1);
  }

  submit(value) {
    if (this.form.valid) {
      const siteDetail: any = { ...value };
      siteDetail.subDomainList = this.subDomainList.filter((f) => f.name && f.name.length);
      this.submitDialog.emit(siteDetail);
      this.closeDialog(this.dialogProperties.id);
    } else {
      this.error = 'Please Enter Valid Details!!!';
      setTimeout(() => {
        this.error = '';
      }, 2000);
    }
  }

  closeDialog(id) {
    this.close.emit(id);
  }

}
