/**
 * Zabbix API COM
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CustomAttributeData } from './customAttributeData';
import { Assembly } from './assembly';
import { ModuleHandle } from './moduleHandle';


export interface Module { 
    assembly?: Assembly;
    readonly fullyQualifiedName?: string | null;
    readonly name?: string | null;
    readonly mdStreamVersion?: number;
    readonly moduleVersionId?: string;
    readonly scopeName?: string | null;
    moduleHandle?: ModuleHandle;
    readonly customAttributes?: Array<CustomAttributeData> | null;
    readonly metadataToken?: number;
}

