import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import 'rxjs/add/operator/debounceTime';

 import { MyValidators } from './../validators';

@Component({
  selector: 'app-form-sku',
  templateUrl: './form-sku.component.html',
  styleUrls: ['./form-sku.component.css']
})
export class FormSkuComponent implements OnInit {

  skuForm: FormGroup;
  skuField: FormControl;
  skuNameField: FormControl;

  constructor() {
    this.makeSkuForm();
  }

  ngOnInit() {
  }

  private makeSkuForm(): void {

    this.skuField = new FormControl('', [Validators.required, MyValidators.skuValidate]);
    this.skuNameField = new FormControl();

    this.skuForm = new FormGroup({
      sku: this.skuField,
      name: this.skuNameField
    });
    /*     this.skuField = new FormControl('',
          [Validators.required, MyValidators.skuValidator]
        );
    
        this.nameField = new FormControl('',
          [Validators.required, MyValidators.skuValidator]
        );
    
        this.skuField.valueChanges
        .debounceTime(300)
        .subscribe(data =>{
          console.log(data);
        })
    
        this.skuForm = new FormGroup({
          sku: this.skuField,
          name: this.nameField
        });
      } */
    }
  }
