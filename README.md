# PayPal Payment

### Usage

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
export class AppModule implements OnModuleInit {

  constructor(@InjectScandiniaviaPaypal() private paymentService: PaypalPaymentService) {
  }
  onModuleInit(): any {
    const order: CreatePaypalOrderDto = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            "currency_code": "USD",
            "value": "100.00"
          }
        }
      ]
    };
    this.paymentService.initiateOrder(order).then(console.log);
  }
}

```