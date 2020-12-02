import { NgModule } from '@angular/core';

import { FormlyPlainFormFieldModule } from '@beeman/formly-plain/form-field';
import { FormlyPlainInputModule } from '@beeman/formly-plain/input';
import { FormlyPlainTextAreaModule } from '@beeman/formly-plain/textarea';
import { FormlyPlainRadioModule } from '@beeman/formly-plain/radio';
import { FormlyPlainCheckboxModule } from '@beeman/formly-plain/checkbox';
import { FormlyPlainMultiCheckboxModule } from '@beeman/formly-plain/multicheckbox';
import { FormlyPlainSelectModule } from '@beeman/formly-plain/select';
import { FormlyPlainAddonsModule } from '@beeman/formly-plain/addons';

@NgModule({
  imports: [
    FormlyPlainFormFieldModule,
    FormlyPlainInputModule,
    FormlyPlainTextAreaModule,
    FormlyPlainRadioModule,
    FormlyPlainCheckboxModule,
    FormlyPlainMultiCheckboxModule,
    FormlyPlainSelectModule,
    FormlyPlainAddonsModule,
  ],
})
export class FormlyPlainModule {}
