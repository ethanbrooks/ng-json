import {NgModule} from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import {APP_BASE_HREF} from '@angular/common';
import {AppModule} from './app.module';
import {JsonComponent} from './json.component';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    NgJsonEditorModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    { provide: 'isBrowser', useValue: true }
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [JsonComponent],
})
export class AppServerModule {}
