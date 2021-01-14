import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';

// event bus service
import { NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public subscriptionMessage: any;
  public data: any = {};

  constructor(private eventBus: NgEventBus,
              public signalRService: SignalRService) {
  }

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addBroadcastChartDataListener();

    this.subscriptionMessage = this.eventBus.on("zabbix-data").subscribe((event: any)=>{
      this.data = event._data;
    });
  }

  ngOnDestroy(): void {
    if(this.subscriptionMessage)
      this.subscriptionMessage.unsubscribe();
  }
}
