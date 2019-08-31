import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TempleHundiFormSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TempleHundiFormSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TempleHundiFormSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TempleHundiFormSharedModule {
  static forRoot() {
    return {
      ngModule: TempleHundiFormSharedModule
    };
  }
}
