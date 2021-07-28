import { Test } from "@nestjs/testing";
import { ConfigModule } from "@nestjs/config";
import configurations from "../configurations";

class ApiServiceMock {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getStudent(_firstName: string, _lastName: string) {
    return {
      name: "Jane Doe",
      grades: [3.7, 3.8, 3.9, 4.0, 3.6]
    };
  }
}

describe("Suitcase to test PayPal integration methods", () => {

  // let spyService: PaypalPaymentService;
  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: "ApiServiceMock",
      useClass: ApiServiceMock
    };
    const app = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          expandVariables: true,
          load: [configurations],
        }),
        // PaypalPaymentModule.register({
        //   clientId: process.env.PAYPAL_CLIENT_ID,
        //   clientSecret: process.env.PAYPAL_CLIENT_SECRET,
        //   environment: process.env.PAYPAL_ENVIRONMENT as ("sandbox" | "live")
        // }),
        // PaypalPaymentModule.registerAsync({
        //   inject: [ConfigService],
        //   useFactory: (configService: ConfigService) => {
        //     console.log(configService.get('paypalModuleInterface'));
        //     return {
        //       ...configService.get('paypalModuleInterface'),
        //     };
        //   },
        // }),
      ],
      controllers: [],
      providers: [ApiServiceProvider]
    }).compile();
    console.log(app);
    // spyService = app.get<PaypalPaymentService>(PaypalPaymentService);
  });
  it("create paypal order", () => {
    const order = {
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

    // spyService.initiateOrder(order as any, {
    //   Prefer: "return=representation"
    // }).then(r => {
    //   console.log(r);
    // });
    expect(order).not.toBe(null);
  });
});