import { Component, ViewChild, Inject } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { Service } from './json.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-json',
  providers: [Service],
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})

export class JsonComponent {
  public editorOptions: JsonEditorOptions;
  public data: any;
  public isBrowser: boolean;
  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;

  constructor(service: Service, @Inject(PLATFORM_ID) platformId: Object) { 
    this.isBrowser = isPlatformBrowser(platformId);
    this.editorOptions = new JsonEditorOptions()
    this.data = service.getData();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    //this.options.mode = 'code'; //set only one mode
    }  
}
