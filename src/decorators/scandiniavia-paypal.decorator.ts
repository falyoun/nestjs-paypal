import { Inject } from '@nestjs/common';
import { PAYPAL_PAYMENT_SERVICE_INSTANCE_TOKEN } from '@app/constants';

export interface ScandiniaviaPaypalDecorator {
  (
    target: Record<string, unknown>,
    key: string | symbol,
    index?: number | undefined,
  ): void;
}

export function InjectScandiniaviaPaypal(): ScandiniaviaPaypalDecorator {
  return Inject(PAYPAL_PAYMENT_SERVICE_INSTANCE_TOKEN);
}
