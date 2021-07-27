

export const PaypalErrorsConstants = {
  "INVALID_CREDENTIALS": {
    code: "invalid_credentials",
    message: "Could not authorize request with provided api key"
  },
  "INITIATE_ORDER_FAILED": {
    code: "initiate_order_failed",
    message: 'Could not initiate order'
  },
  "UPDATE_ORDER_FAILED": {
    code: "update_order_failed",
    message: 'Could not update order'
  },
  "GET_ORDER_FAILED": {
    code: "get_order_failed",
    message: 'Could not get order'
  },
  "AUTHORIZE_ORDER_FAILED": {
    code: "authorize_order_failed",
    message: 'Could not authorize order'
  },
  "CAPTURE_ORDER_FAILED": {
    code: "capture_order_failed",
    message: 'Could not capture order'
  },
  "ADD_CARD_INFORMATION_FAILED": {
    code: "add_card_information_failed",
    message: 'Could not supply your card, kindly check if you entered correct information'
  },
  "CREATE_INVOICE_FAILED": {
    code: "create_invoice_failed",
    message: 'Could not create an invoice, check payload and credentials'
  }
}