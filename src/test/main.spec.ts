import { Test } from "@nestjs/testing";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configurations from "../configurations";
import { PaypalPaymentModule } from "@app/paypal-payment.module";
import { PaypalPaymentService } from "@app/services";
import { PAYPAL_PAYMENT_SERVICE_INSTANCE_TOKEN } from "@app/constants";
import { CreatePaypalOrderDto } from "@app/dtos";

describe("Suitcase to test PayPal integration methods", () => {
  let spyService: PaypalPaymentService;
  beforeEach(async () => {
    const app = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          expandVariables: true,
          load: [configurations]
        }),
        // PaypalPaymentModule.register({
        //   clientId: process.env.PAYPAL_CLIENT_ID,
        //   clientSecret: process.env.PAYPAL_CLIENT_SECRET,
        //   environment: process.env.PAYPAL_ENVIRONMENT as ("sandbox" | "live")
        // }),

        PaypalPaymentModule.registerAsync({
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => {
            return {
              ...configService.get("paypalModuleInterface")
            };
          }
        })
      ],
      controllers: [],
      providers: []
    }).compile();
    spyService = app.get(PAYPAL_PAYMENT_SERVICE_INSTANCE_TOKEN);
  });
  it("create paypal order", async () => {
    const payload: CreatePaypalOrderDto = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            "currency_code": "USD",
            "value": "100.00"
          },
          reference_id: "monitor"
        }
      ]
    };

    const order = await spyService.initiateOrder(payload, {
      Prefer: "return=representation"
    });
    expect(order.id).toBeDefined();
    expect(order).not.toBe(null);
  });
});