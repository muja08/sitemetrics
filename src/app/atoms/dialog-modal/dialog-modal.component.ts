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

  form : FormGroup;
  subDomainList: any = [{
    name: ''
  }, {
    name: ''
  }];

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
      domainName: ['', [Validators.required]],
      storage: ['', [Validators.required]],
      monthlyVisitor: ['', [Validators.required]]
    });
  }

  addSubdomain(event) {
    console.log(this.subDomainList)
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
    this.submitDialog.emit(value);
  }

  closeDialog(id) {
    this.close.emit(id)
  }

}
