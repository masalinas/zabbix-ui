import { Injectable } from '@angular/core';

// microsoft signalR
import * as signalR from "@aspnet/signalr";

// app event bus
import { NgEventBus } from 'ng-event-bus';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data: any[];
  public bradcastedData: any[];

  private hubConnection: signalR.HubConnection

  constructor(private eventBus: NgEventBus) {}

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://localhost:5001/zabbixhub')
                            .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('zabbixdata', (data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  public broadcastChartData = () => {
    this.hubConnection.invoke('zabbixdata', this.data)
    .catch(err => console.error(err));
  }

  public addBroadcastChartDataListener = () => {
    this.hubConnection.on('zabbixdata', (data) => {
      this.bradcastedData = JSON.parse(data);
      console.log(data);

      this.eventBus.cast("zabbix-data", this.bradcastedData);
    })
  }
}
