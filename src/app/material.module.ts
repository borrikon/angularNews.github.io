import {NgModule} from '@angular/core';

import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field/label';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatIcon,
  ],
  exports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatIcon,
  ]
})
export class MaterialModule {}