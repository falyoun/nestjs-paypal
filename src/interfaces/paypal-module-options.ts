import { ModuleMetadata, Provider, Type } from '@nestjs/common';

export type PaypalModuleOptions = {
  clientId: string;
  clientSecret: string;
  environment: 'sandbox' | 'live';
};

export interface PaypalModuleOptionsFactory {
  createPaypalModuleOptions():
    | Promise<PaypalModuleOptions>
    | PaypalModuleOptions;
}

export interface PaypalModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<PaypalModuleOptionsFactory>;
  useClass?: Type<PaypalModuleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<PaypalModuleOptions> | PaypalModuleOptions;
  inject?: any[];
  extraProviders?: Provider[];
}
