import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyPlainFormFieldModule } from '@beeman/formly-plain/form-field';

import { FormlyFieldCheckbox } from './checkbox.type';

@NgModule({
  declarations: [FormlyFieldCheckbox],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyPlainFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'checkbox',
          component: FormlyFieldCheckbox,
          wrappers: ['form-field'],
        },
        {
          name: 'boolean',
          extends: 'checkbox',
        },
      ],
    }),
  ],
})
export class FormlyPlainCheckboxModule {}
