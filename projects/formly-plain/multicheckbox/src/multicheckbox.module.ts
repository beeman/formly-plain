import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyPlainFormFieldModule } from '@beeman/formly-plain/form-field';

import { FormlyFieldMultiCheckbox } from './multicheckbox.type';

@NgModule({
  declarations: [FormlyFieldMultiCheckbox],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    FormlyPlainFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'multicheckbox',
          component: FormlyFieldMultiCheckbox,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyPlainMultiCheckboxModule {}
