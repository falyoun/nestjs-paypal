import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from './configurations';
import { PaypalPaymentModule } from "@app/paypal-payment.module";

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
      environment: process.env.PAYPAL_ENVIRONMENT as ("sandbox" | "live")
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
export class AppModule {

}
