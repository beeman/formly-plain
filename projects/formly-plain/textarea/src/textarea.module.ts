import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormlyModule } from '@ngx-formly/core'
import { ReactiveFormsModule } from '@angular/forms'

import { FormlyPlainFormFieldModule } from '@beeman/formly-plain/form-field'
import { FormlyFieldTextArea } from './textarea.type'

@NgModule({
  declarations: [FormlyFieldTextArea],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    FormlyPlainFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'textarea',
          component: FormlyFieldTextArea,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyPlainTextAreaModule {}
