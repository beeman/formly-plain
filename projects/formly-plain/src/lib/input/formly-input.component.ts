import { Component, OnInit } from '@angular/core'
import { FieldType } from '@ngx-formly/core'
import { FormControl } from '@angular/forms'

@Component({
  template: `
    <input
      [type]="type"
      [formControl]="formControl"
      class="form-control"
      [formlyAttributes]="field"
      [class.is-invalid]="showError"
    />
  `,
})
export class FormlyInputComponent extends FieldType {
  formControl: FormControl
  get type() {
    return this.to.type || 'text'
  }
}
