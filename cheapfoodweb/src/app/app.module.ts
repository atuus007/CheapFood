import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.router';
import { AppComponent }  from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { keszitokComponent } from './keszitok/app.keszitokComponent';
import { etelekComponent } from './etelek/app.etelekComponent';
import { etelek1Component } from './etelek/app.etelek1Component';
import { foodlist200Component } from './etelek/foodlist200/app.foodlist200Component';
import { foodlist400Component } from './etelek/foodlist400/app.foodlist400Component';
import { foodlist600Component } from './etelek/foodlist600/app.foodlist600Component';
import { foodlist800Component } from './etelek/foodlist800/app.foodlist800Component';
import { foodsubmitComponent } from './foodsubmit/app.foodsubmitComponent';

@NgModule({
  imports:      [ BrowserModule,routes ],
  declarations: [ AppComponent,
                  headerComponent,
                  navComponent,
                  contentAreaComponent,
                  footerComponent,
                  keszitokComponent,
                  etelekComponent,
                  etelek1Component,
                  foodlist200Component,
                  foodlist400Component,
                  foodlist600Component,
                  foodlist800Component,
                  foodsubmitComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }