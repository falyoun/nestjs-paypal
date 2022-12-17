export interface PaypalModuleInterface {
  clientId: string;
  clientSecret: string;
  environment: 'sandbox' | 'live';
}

export interface EnvironmentVariables {
  port: number;
  paypalModuleInterface: PaypalModuleInterface;
}

export default (): EnvironmentVariables => ({
  port: +process.env.PORT,
  paypalModuleInterface: {
    clientId: process.env.PAYPAL_CLIENT_ID,
    clientSecret: process.env.PAYPAL_CLIENT_SECRET,
    environment: process.env.PAYPAL_ENVIRONMENT as 'sandbox' | 'live',
  },
});
