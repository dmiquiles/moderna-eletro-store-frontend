import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,

    RouterModule,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ]

})
export class SharedModule { }
