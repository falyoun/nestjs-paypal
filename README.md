# PayPal Payment

### Usage

## Initialization
```
import { Module } from '@nestjs/common';
import { PaypalPaymentModule } from './paypal-payment.module';
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
    const orderPayload: CreatePaypalOrderDto = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            "currency_code": "USD",
            "value": "100.00"
          }
        }
      ]
    }
    const order = await initiateOrder(orderPayload, {
      Prefer: 'return=representation'
    });
```
Second param of `initiateOrder` is custom headers to control the response of initiating order
> Available headers: 
> The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager.
> * 'PayPal-Request-Id'?: string;
* 'PayPal-Partner-Attribution-Id'?: string;
* 'PayPal-Client-Metadata-Id'?: string;

> The preferred server response upon successful completion of the request. Value is:
 return=minimal. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the id, status and HATEOAS links.
 return=representation. The server returns a complete resource representation, including the current state of the resource.
> * Prefer?: 'return=minimal' | 'return=representation';


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