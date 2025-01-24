import { ModuleWithProviders, NgModule } from '@angular/core';
import { SettingsFacadeService } from './settings-facade.service';
import { SettingsDataService } from './settings.service';

@NgModule({
  declarations: [],
})
export class IndiceConfModule {
  static forRoot(): ModuleWithProviders<IndiceConfModule> {
    return {
      ngModule: IndiceConfModule,
      providers: [
        SettingsDataService,
        SettingsFacadeService,
      ]
    }
  }
}
