import { Inject, Injectable } from '@nestjs/common';
import {
  PAYPAL_AUTHORIZATION_SERVICE_INSTANCE_TOKEN,
  PAYPAL_AXIOS_INSTANCE_TOKEN,
  PAYPAL_MODULE_OPTIONS, PAYPAL_UTILS_SERVICE_INSTANCE_TOKEN
} from "@app/constants";
import { AxiosInstance } from 'axios';
import { PaypalModuleOptions } from '@app/interfaces';;
import { PaypalUtilsService, PaypalAuthorizationService } from '@app/services';
import { PaypalErrorsConstants } from '@app/errors';
import { PaypalOrderDto, InitiateOrderHeadersDto, CreatePaypalOrderDto } from '@app/dtos';

@Injectable()
export class PaypalPaymentService {


  constructor(
    @Inject(PAYPAL_AXIOS_INSTANCE_TOKEN) private readonly axiosInstance: AxiosInstance,
    @Inject(PAYPAL_MODULE_OPTIONS) private readonly options: PaypalModuleOptions,
    @Inject(PAYPAL_AUTHORIZATION_SERVICE_INSTANCE_TOKEN) private paypalAuthorizationService: PaypalAuthorizationService,
    @Inject(PAYPAL_UTILS_SERVICE_INSTANCE_TOKEN) private paypalUtilsService: PaypalUtilsService
  ) {

  }



  async initiateOrder(orderPayload: CreatePaypalOrderDto, headers?: InitiateOrderHeadersDto): Promise<PaypalOrderDto> {

    const initiateTokenResponse = await this.paypalAuthorizationService.getAccessToken();
    const { access_token } = initiateTokenResponse;
    const _headers = {
      'Content-Type': 'application/json',
      'Authorization': access_token ? `Bearer ${access_token}` : `Basic ${this.paypalAuthorizationService.getBasicKey()}`,
      ...headers
    };
    const apiUrl = this.paypalUtilsService.getApiUrl(this.options.environment);
    return this.axiosInstance.post(`${apiUrl}/v2/checkout/orders`, orderPayload, {
      headers: _headers
    })
      .then(r => r.data)
      .catch(e => {
        throw {
          ...PaypalErrorsConstants.INITIATE_ORDER_FAILED,
          nativeError: e?.response?.data || e
        }
      });
  }
}
