import { PaypalAuthenticationStatusDto } from '@app/dtos';
import { PaypalEnrollmentStatusDto } from '@app/dtos/common/paypal-enrollment-status.dto';

export class ThreeDSecureAuthenticationResponseDto {
  // The outcome of the issuer's authentication.
  authentication_status: PaypalAuthenticationStatusDto;
  // Status of authentication eligibility.
  enrollment_status: PaypalEnrollmentStatusDto;
}
