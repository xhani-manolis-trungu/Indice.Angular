import { Component, Inject, Input, OnInit, Optional, TemplateRef } from '@angular/core';

import { IShellConfig } from '../../../types';
import { UserSettingsService } from '../../../services/user-settings.service';

@Component({
  selector: 'lib-shell-sidebar-layout',
  templateUrl: './shell-sidebar-layout.component.html'
})
export class ShellSidebarLayoutComponent implements OnInit {
  @Input() config: IShellConfig | undefined;
  @Input() public sidebarFooterTemplate?: TemplateRef<any>;
  @Input() busy: boolean = false;
  
  constructor(private _userSettings: UserSettingsService) {
    this.showMobileSidebar = this._userSettings.get('MobileSideBar');
  }

  public showMobileSidebar: boolean;

  public ngOnInit(): void { }

  public toggleMobileSidebar(): void {
    this.showMobileSidebar = !this.showMobileSidebar;
    this._userSettings.set('MobileSideBar', this.showMobileSidebar);
  }
}
