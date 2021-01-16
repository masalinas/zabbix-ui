import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';

// event bus service
import { NgEventBus } from 'ng-event-bus';

// json editor
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

import { ZabbixApiCoreService } from './shared/backend/api/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public editorOptions: JsonEditorOptions;

  public method: string;
  public parameters: object;
  public result: object;

  public subscriptionMessage: any;
  public data: any = {};

  constructor(private eventBus: NgEventBus,
              public signalRService: SignalRService,
              private zabbixApiCoreService: ZabbixApiCoreService) {
     this.editorOptions = new JsonEditorOptions()
     this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
  }

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addBroadcastChartDataListener();

    this.subscriptionMessage = this.eventBus.on("zabbix-data").subscribe((event: any)=>{
      this.data = event._data;
    });
  }

  public onSummit(event: any) {
    console.log(this.method);

    this.zabbixApiCoreService.getJsonPost(this.method, this.parameters)
      .subscribe((result: any) => {
        console.log(result);
        this.result = JSON.parse(result);
      },
      err => {
        console.log(err);
      });
  }

  ngOnDestroy(): void {
    if(this.subscriptionMessage)
      this.subscriptionMessage.unsubscribe();
  }
}
