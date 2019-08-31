import { NgModule } from '@angular/core';

import { TempleHundiFormSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TempleHundiFormSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TempleHundiFormSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TempleHundiFormSharedCommonModule {}
