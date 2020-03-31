
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';


import {JsonComponent} from './json.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { NgJsonEditorModule } from 'ang-jsoneditor';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    JsonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: JsonComponent, pathMatch: 'full'},
    ]),
    TransferHttpCacheModule,
    NgJsonEditorModule,
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  entryComponents: [JsonComponent],
//  bootstrap: [JsonComponent]
})

export class AppElementModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(JsonComponent, { injector });
    customElements.define('app-json', myElement);
  }
  ngDoBootstrap() {}
}


