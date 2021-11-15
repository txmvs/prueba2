import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from './logo/logo.component';




@NgModule({
  declarations: [LogoComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports: [LogoComponent]
})
export class ComponentsModule { }
