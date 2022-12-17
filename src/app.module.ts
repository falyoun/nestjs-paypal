import { ConfigModule, ConfigService } from '@nestjs/config';
import { PaypalPaymentModule } from '@app/paypal-payment.module';
import { Module } from '@nestjs/common';
import configurations from '@app/configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [configurations],
    }),
    PaypalPaymentModule.register({
      clientId: process.env.PAYPAL_CLIENT_ID,
      clientSecret: process.env.PAYPAL_CLIENT_SECRET,
      environment: process.env.PAYPAL_ENVIRONMENT as 'sandbox' | 'live',
    }),
    PaypalPaymentModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          ...configService.get('paypalModuleInterface'),
        };
      },
    }),
  ],
})
export class AppModule {}
// export class AppModule implements OnModuleInit {
//
//   constructor(@InjectScandiniaviaPaypal() private paymentService: PaypalPaymentService) {
//   }
//   onModuleInit(): any {
//     const order: CreatePaypalOrderDto = {
//       intent: 'CAPTURE',
//       purchase_units: [
//         {
//           amount: {
//             "currency_code": "USD",
//             "value": "100.00"
//           },
//           reference_id: 'monitor'
//         }
//       ]
//     };
//     this.paymentService.initiateOrder(order, {
//       Prefer: 'return=representation'
//     }).then(r => {
//       console.log(r);
//       console.log('Refe: ', r.purchase_units[0].reference_id);
//       return this.paymentService.updateOrder(r.id, [
//         {
//           op: 'add',
//           path: `/purchase_units/@reference_id=='${r.purchase_units[0].reference_id}'/shipping/address`,
//           value: {
//             "address_line_1": "123 Townsend St",
//             "address_line_2": "Floor 6",
//             "admin_area_2": "San Francisco",
//             "admin_area_1": "CA",
//             "postal_code": "94107",
//             "country_code": "US"
//           }
//         }
//       ]);
//     })
//       .then(r => {
//         console.log('update: ', r);
//         return this.paymentService.getOrderDetails(r.id)
//       })
//       .then(r => {
//         console.log('r: ', r);
//       })
//       .catch(e => {
//         console.log(e.nativeError)
//       });
//
//
//   }
// }
