import { Inject, Injectable } from '@nestjs/common';
import {
  PAYPAL_AUTHORIZATION_SERVICE_INSTANCE_TOKEN,
  PAYPAL_AXIOS_INSTANCE_TOKEN,
  PAYPAL_MODULE_OPTIONS,
  PAYPAL_UTILS_SERVICE_INSTANCE_TOKEN,
} from '@app/constants';
import { AxiosInstance } from 'axios';
import { PaypalModuleOptions } from '@app/interfaces';
import { PaypalUtilsService, PaypalAuthorizationService } from '@app/services';
import { PaypalErrorsConstants } from '@app/errors';
import {
  PaypalOrderDto,
  InitiateOrderHeadersDto,
  CreatePaypalOrderDto,
  AuthorizeOrderHeadersDto,
} from '@app/dtos';
import { UpdatePaypalOrderDto } from '@app/dtos/order/update-paypal-order.dto';
import { PaymentSourceResponseDto } from '@app/dtos/payment-source-response.dto';

@Injectable()
export class PaypalPaymentService {
  constructor(
    @Inject(PAYPAL_AXIOS_INSTANCE_TOKEN)
    private readonly axiosInstance: AxiosInstance,
    @Inject(PAYPAL_MODULE_OPTIONS)
    private readonly options: PaypalModuleOptions,
    @Inject(PAYPAL_AUTHORIZATION_SERVICE_INSTANCE_TOKEN)
    private paypalAuthorizationService: PaypalAuthorizationService,
    @Inject(PAYPAL_UTILS_SERVICE_INSTANCE_TOKEN)
    private paypalUtilsService: PaypalUtilsService,
  ) {}

  async _preparePaypalRequestHeaders(customHeaders?: any) {
    const initiateTokenResponse =
      await this.paypalAuthorizationService.getAccessToken();
    const { access_token } = initiateTokenResponse;
    return {
      'Content-Type': 'application/json',
      Authorization: access_token
        ? `Bearer ${access_token}`
        : `Basic ${this.paypalAuthorizationService.getBasicKey()}`,
      ...customHeaders,
    };
  }

  async initiateOrder(
    orderPayload: CreatePaypalOrderDto,
    headers?: InitiateOrderHeadersDto,
  ): Promise<PaypalOrderDto> {
    const _headers = await this._preparePaypalRequestHeaders(headers);
    const apiUrl = this.paypalUtilsService.getApiUrl(this.options.environment);
    return this.axiosInstance
      .post(`${apiUrl}/v2/checkout/orders`, orderPayload, {
        headers: _headers,
      })
      .then((r) => r.data)
      .catch((e) => {
        console.log(e);
        throw {
          ...PaypalErrorsConstants.INITIATE_ORDER_FAILED,
          nativeError: e?.response?.data || e,
        };
      });
  }

  async updateOrder(
    orderId: string,
    updateOrderDto: UpdatePaypalOrderDto[],
  ): Promise<{ message: string }> {
    const _headers = await this._preparePaypalRequestHeaders();
    const apiUrl = this.paypalUtilsService.getApiUrl(this.options.environment);
    return this.axiosInstance
      .patch(`${apiUrl}/v2/checkout/orders/${orderId}`, updateOrderDto, {
        headers: _headers,
      })
      .then((r) => {
        if (r.status === 204) {
          return {
            message: `Order updated successfully.!`,
          };
        }
        return r.data;
      })
      .catch((e) => {
        throw {
          ...PaypalErrorsConstants.UPDATE_ORDER_FAILED,
          nativeError: e?.response?.data || e,
        };
      });
  }

  async getOrderDetails(orderId: string): Promise<PaypalOrderDto> {
    const headers = await this._preparePaypalRequestHeaders();
    const apiUrl = this.paypalUtilsService.getApiUrl(this.options.environment);
    return this.axiosInstance
      .get(`${apiUrl}/v2/checkout/orders/${orderId}`, {
        headers,
      })
      .then((r) => {
        if (r.status === 200) {
          return r.data;
        }
        throw {
          message: 'Un-expected error',
          data: r.data,
        };
      })
      .catch((e) => {
        throw {
          ...PaypalErrorsConstants.GET_ORDER_FAILED,
          nativeError: e?.response?.data || e,
        };
      });
  }

  async authorizePaymentForOrder(
    orderId: string,
    payload: PaymentSourceResponseDto,
    headers?: AuthorizeOrderHeadersDto,
  ): Promise<PaypalOrderDto> {
    const _headers = await this._preparePaypalRequestHeaders(headers);
    const apiUrl = this.paypalUtilsService.getApiUrl(this.options.environment);

    return this.axiosInstance
      .post(`${apiUrl}/v2/checkout/orders/${orderId}/authorize`, payload, {
        headers: _headers,
      })
      .then((r) => r.data)
      .catch((e) => {
        throw {
          ...PaypalErrorsConstants.AUTHORIZE_ORDER_FAILED,
          nativeError: e?.response?.data || e,
        };
      });
  }

  async capturePaymentForOrder(
    orderId: string,
    payload: PaymentSourceResponseDto,
    headers?: AuthorizeOrderHeadersDto,
  ): Promise<PaypalOrderDto> {
    const _headers = await this._preparePaypalRequestHeaders(headers);
    const apiUrl = this.paypalUtilsService.getApiUrl(this.options.environment);
    return this.axiosInstance
      .post(`${apiUrl}/v2/checkout/orders/${orderId}/capture`, payload, {
        headers: _headers,
      })
      .then((r) => r.data)
      .catch((e) => {
        throw {
          ...PaypalErrorsConstants.CAPTURE_ORDER_FAILED,
          nativeError: e?.response?.data || e,
        };
      });
  }
}
