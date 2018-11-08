import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuComponent } from './form-sku.component';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

describe('FormSkuComponent', () => {
  let component: FormSkuComponent;
  let fixture: ComponentFixture<FormSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSkuComponent ],
      imports: [
        ReactiveFormsModule, 
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('skuForm should be created', () => {
    expect(component.skuForm).toBeTruthy();
  });

  it('skuField should be created', () => {
    expect(component.skuField).toBeTruthy();
  });

  it('skuName should be created', () => {
    expect(component.skuNameField).toBeTruthy();
  });

  describe('Test for skuField', () => {

/*     it('Should not have an error: required', () => {
      component.skuField.setValue('sfgsdffwrt123');
      expect(component.skuField.valid).toBeTruthy();
    }) */ // Sin el custom validador

    it('Should not have an error: invalidSku', () => {
      component.skuField.setValue('12312341234');
      expect(component.skuField.valid).toBeTruthy();
    })

    it('Should have an error: invalidSku', () => {
      component.skuField.setValue('sfgsdffwrt123');
      expect(component.skuField.invalid).toBeTruthy();
      expect(component.skuField.getError('invalidSku')).toBeTruthy();
    })

    it('Should have an error: required', () => {
      component.skuField.setValue('');
      expect(component.skuField.invalid).toBeTruthy();
      expect(component.skuField.getError('required')).toBeTruthy();
    })
  })
});
