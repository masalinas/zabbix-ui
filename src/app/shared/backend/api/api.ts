export * from './zabbixApiCore.service';
import { ZabbixApiCoreService } from './zabbixApiCore.service';
export * from './zabbixWebhook.service';
import { ZabbixWebhookService } from './zabbixWebhook.service';
export const APIS = [ZabbixApiCoreService, ZabbixWebhookService];
