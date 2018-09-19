import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './user/user.service';
import { TableFormatterPipe } from './pipes/table-formatter.pipe';

import { CustomTableComponent } from './components/custom-table/custom-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CustomTableComponent,
    TableFormatterPipe
  ],
  exports: [
    CustomTableComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        UserService
      ],
    };
  }
}
