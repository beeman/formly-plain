import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'

import { FormlyInputComponent } from './formly-input.component'

@NgModule({
  declarations: [FormlyInputComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormlyModule.forChild({
      types: [{ name: 'input', component: FormlyInputComponent }],
    }),
  ],
})
export class FormlyInputModule {}
