import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {JsonComponent} from './json.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { NgJsonEditorModule } from 'ang-jsoneditor';

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
    NgJsonEditorModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    { provide: 'isBrowser', useValue: true }
  ],
  bootstrap: [JsonComponent]
})
export class AppModule { }
