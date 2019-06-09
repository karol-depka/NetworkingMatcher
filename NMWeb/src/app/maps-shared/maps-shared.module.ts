import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import {AgmCoreModule} from '@agm/core'
import { UserProfilePopupComponent } from './user-profile-popup/user-profile-popup.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule,
  ],
  declarations: [
    UserProfilePopupComponent,
  ],
  exports: [
    SharedModule,
    AgmCoreModule,
    UserProfilePopupComponent,
  ]
})
export class MapsSharedModule { }
