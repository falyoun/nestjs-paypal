import { Inject, Injectable } from '@nestjs/common';
import {
  PAYPAL_AUTHORIZATION_HEADERS,
  PAYPAL_AXIOS_INSTANCE_TOKEN,
  PAYPAL_MODULE_OPTIONS,
} from '@app/constants';
import { AxiosInstance } from 'axios';
import { PaypalModuleOptions } from '@app/interfaces';
import { PaypalErrorsConstants } from '@app/errors';
import { InitiateTokenResponseDto } from '@app/dtos';

@Injectable()
export class PaypalAuthorizationService {
  constructor(
    @Inject(PAYPAL_AXIOS_INSTANCE_TOKEN)
    private readonly axiosInstance: AxiosInstance,
    @Inject(PAYPAL_MODULE_OPTIONS)
    private readonly options: PaypalModuleOptions,
  ) {}

  getBasicKey() {
    return Buffer.from(
      this.options.clientId + ':' + this.options.clientSecret,
    ).toString('base64');
  }
  async getAccessToken(): Promise<InitiateTokenResponseDto> {
    const apiUrl = this.getApiUrl(this.options.environment);
    const url = `${apiUrl}/v1/oauth2/token`;
    const basicKey = this.getBasicKey();
    const data = new URLSearchParams();

    data.append('grant_type', 'client_credentials');

    return this.axiosInstance
      .post(url, data, {
        headers: {
          ...PAYPAL_AUTHORIZATION_HEADERS,
          Authorization: `Basic ${basicKey}`,
        },
      })
      .then((r) => r.data)
      .catch((e) => {
        throw {
          ...PaypalErrorsConstants.INVALID_CREDENTIALS,
          nativeError: e?.response?.data || e,
        };
      });
  }

  getApiUrl(environment: 'live' | 'sandbox') {
    return environment === 'sandbox'
      ? 'https://api-m.sandbox.paypal.com'
      : 'https://api-m.paypal.com';
  }
}
