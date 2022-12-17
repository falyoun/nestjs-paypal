# PayPal Payment

### Usage

## Installation

```
npm i @z9fr/paypal-payment
yarn add @z9fr/paypal-payment
```

## Initialization

```
import { Module } from '@nestjs/common';
import { PaypalPaymentModule } from '@z9fr/paypal-payment';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from './configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [configurations],
    }),
    // Sync
    PaypalPaymentModule.register({
      clientId: process.env.PAYPAL_CLIENT_ID,
      clientSecret: process.env.PAYPAL_CLIENT_SECRET,
      environment: process.env.PAYPAL_ENVIRONMENT as ("sandbox" | "live")
    }),
    // Async
    PaypalPaymentModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          ...configService.get('paypalModuleInterface'),
        };
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}

```

## Inject & Use service

```
constructor(@InjectScandiniaviaPaypal() private paymentService: PaypalPaymentService) {}
```

## Initiate order

```
import {
  CreatePaypalOrderDto,
  InjectScandiniaviaPaypal,
  PaypalPaymentService,
} from '@z9fr/paypal-payment';


const orderPayload: CreatePaypalOrderDto = {
  intent: 'CAPTURE',
  purchase_units: [
    {
      amount: {
        currency_code: 'USD',
        value: '10.00',
      },
    },
  ],
  application_context: {
    brand_name: 'EXAMPLE INC',
    locale: 'en-US',
    landing_page: 'BILLING',
    user_action: 'PAY_NOW',
    payment_method: {
      payee_preferred: 'IMMEDIATE_PAYMENT_REQUIRED',
      payer_selected: 'PAYPAL',
      standard_entry_class_code: 'WEB',
    },
    return_url: 'https://example.com/returnUrl',
    cancel_url: 'https://example.com/cancelUrl',
  },
};

const order = await this.paymentService.initiateOrder(orderPayload);
```

Second param of `initiateOrder` is custom headers to control the response of initiating order

> Available headers:
> The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager.
>
> - 'PayPal-Request-Id'?: string;

- 'PayPal-Partner-Attribution-Id'?: string;
- 'PayPal-Client-Metadata-Id'?: string;

> The preferred server response upon successful completion of the request. Value is:
> return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, status and HATEOAS links.
> return=representation. The server returns a complete resource representation, including the current state of the resource.
>
> - Prefer?: 'return=minimal' | 'return=representation';

## Get order

```
    const order = await paymentService.getOrderDetails(orderId);
```

## Update order

```
const order = // PayPal created order
paymentService.updateOrder(order.id, [
        {
          op: 'add',
          path: `/purchase_units/@reference_id=='${order.purchase_units[0].reference_id}'/shipping/address`,
          value: {
            "address_line_1": "123 Townsend St",
            "address_line_2": "Floor 6",
            "admin_area_2": "San Francisco",
            "admin_area_1": "CA",
            "postal_code": "94107",
            "country_code": "US"
          }
        }
      ]);
    })


```
