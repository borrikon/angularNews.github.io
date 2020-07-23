import {NgModule} from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule  } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
//import { MatCardActionsModule } from '@angular/material/';
//import { MatCardHeaderModule } from '@angular/material';
// import {  } from '@angular/material/card';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: false
    }
  ],
})
export class MaterialModule {}