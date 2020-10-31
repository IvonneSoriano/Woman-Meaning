import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OperationalButtonsComponent } from './operational-buttons/operational-buttons.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, OperationalButtonsComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, OperationalButtonsComponent]
})
export class SharedModule { }
