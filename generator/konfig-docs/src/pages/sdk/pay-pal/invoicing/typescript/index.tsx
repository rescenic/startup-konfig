import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PayPalInvoicingTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="pay-pal-invoicing-typescript-sdk"
      metaDescription={`We're championing possibilities for all by making money fast, easy, and more enjoyable. Our hope is unlock opportunities for people in their everyday lives and empower the millions of people and businesses around the world who trust, rely, and use PayPal every day. 

For support, visit the PayPal Help Center. https://payp.al/help

For employment opportunities, check out our job openings in the 'Jobs' tab. We're an equal opportunity employer that welcomes diversity, and offer generous benefits to help you thrive at work and in your free time.`}
      company="PayPal"
      serviceName="Invoicing"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/invoicing/logo.png"
      companyKebabCase="pay-pal"
      clientNameCamelCase="payPalInvoicing"
      homepage="www.paypal.com/"
      lastUpdated={new Date("2024-03-27T17:21:24.299Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/invoicing/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/invoicing/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payments","financial_technology","fintech","online_payments","financial_services"]}
      methods={[
  {
    "url": "/v2/invoicing/invoices",
    "method": "getInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "List invoices",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number to be retrieved, for the list of templates. So, a combination of `page=1` and `page_size=20` returns the first 20 templates. A combination of `page=2` and `page_size=20` returns the next 20 templates.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The maximum number of templates to return in the response.",
        "default": 20
      },
      {
        "name": "totalRequired",
        "schema": "boolean",
        "description": "Indicates whether the to show <code>total_pages</code> and <code>total_items</code> in the response.",
        "default": false
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "The fields to return in the response. Value is `all` or `none`. To return only the template name, ID, and default attributes, specify `none`.",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of merchant invoices. Includes the total invoices count and [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links) for navigation."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "The client is not authorized to access this resource, although it may have valid credentials. "
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/invoices",
    "method": "createDraftInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "Create draft invoice",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "detail",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "invoicer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "primary_recipients",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "additional_recipients",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "items",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "configuration",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "due_amount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "gratuity",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "payments",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "refunds",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The invoice details which includes all information of the invoice like items, billing information."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "The client is not authorized to access this resource, although it may have valid credentials. "
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/invoices/{invoice_id}/send",
    "method": "sendInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "Send invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the draft invoice to delete.",
        "example": "INVOICE_ID"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "send_to_invoicer",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "send_to_recipient",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "additional_recipients",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request-related [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links) information."
      },
      {
        "statusCode": "202",
        "description": "The HTTP `202 Accepted` response."
      },
      {
        "statusCode": "400",
        "description": "Request is not well-formed, syntactically incorrect, or violates schema."
      },
      {
        "statusCode": "403",
        "description": "The client is not authorized to access this resource, although it may have valid credentials. "
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "422",
        "description": "The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/invoices/{invoice_id}/remind",
    "method": "sendReminder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "Send invoice reminder",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the draft invoice to delete.",
        "example": "INVOICE_ID"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "send_to_invoicer",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "send_to_recipient",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "additional_recipients",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A successful request returns the HTTP `204 No Content` status code with no JSON response body."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/invoices/{invoice_id}/cancel",
    "method": "cancelSentInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "Cancel sent invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the draft invoice to delete.",
        "example": "INVOICE_ID"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "send_to_invoicer",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "send_to_recipient",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "additional_recipients",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A successful request returns the HTTP `204 No Content` status code with no JSON response body."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/invoices/{invoice_id}/payments",
    "method": "recordPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "Record payment for invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the draft invoice to delete.",
        "example": "INVOICE_ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "METHOD"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_info",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The reference to the payment detail."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/invoices/{invoice_id}/payments/{transaction_id}",
    "method": "deleteExternalPayment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "Delete external payment",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the draft invoice to delete.",
        "example": "INVOICE_ID"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the external refund transaction to delete.",
        "example": "TRANSACTION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A successful request returns the HTTP `204 No Content` status code with no JSON response body."
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/invoices/{invoice_id}/refunds",
    "method": "recordRefund",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "Record refund for invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the draft invoice to delete.",
        "example": "INVOICE_ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "refund_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "refund_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "METHOD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The reference to the refund payment detail."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/invoices/{invoice_id}/refunds/{transaction_id}",
    "method": "deleteExternalRefund",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "Delete external refund",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the draft invoice to delete.",
        "example": "INVOICE_ID"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the external refund transaction to delete.",
        "example": "TRANSACTION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A successful request returns the HTTP `204 No Content` status code with no JSON response body."
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/invoices/{invoice_id}/generate-qr-code",
    "method": "generateQrCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "Generate QR code",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the draft invoice to delete.",
        "example": "INVOICE_ID"
      },
      {
        "name": "width",
        "schema": "integer",
        "description": "",
        "default": 500
      },
      {
        "name": "height",
        "schema": "integer",
        "description": "",
        "default": 500
      },
      {
        "name": "action",
        "schema": "string",
        "description": "",
        "default": "pay"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns the HTTP `200 OK` status code and a JSON response body that shows the QR code as a PNG image."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/generate-next-invoice-number",
    "method": "generateNextInvoiceNumber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "Generate invoice number",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The invoice number."
      },
      {
        "statusCode": "403",
        "description": "The client is not authorized to access this resource, although it may have valid credentials. "
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/invoices/{invoice_id}",
    "method": "deleteDraftOrScheduledInvoice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "Delete invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the draft invoice to delete.",
        "example": "INVOICE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A successful request returns the HTTP `204 No Content` status code with no JSON response body."
      },
      {
        "statusCode": "400",
        "description": "Request is not well-formed, syntactically incorrect, or violates schema."
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/invoices/{invoice_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "Show invoice details",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the draft invoice to delete.",
        "example": "INVOICE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The invoice details which includes all information of the invoice like items, billing information."
      },
      {
        "statusCode": "400",
        "description": "Request is not well-formed, syntactically incorrect, or violates schema."
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "422",
        "description": "The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/invoices/{invoice_id}",
    "method": "updateFullInvoice",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "invoices",
    "typeScriptTag": "invoices",
    "description": "Fully update invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the draft invoice to delete.",
        "example": "INVOICE_ID"
      },
      {
        "name": "sendToRecipient",
        "schema": "boolean",
        "description": "Indicates whether to send the invoice update notification to the recipient.",
        "default": true
      },
      {
        "name": "sendToInvoicer",
        "schema": "boolean",
        "description": "Indicates whether to send the invoice update notification to the merchant.",
        "default": true
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "detail",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "invoicer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "primary_recipients",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "additional_recipients",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "items",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "configuration",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "due_amount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "gratuity",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "payments",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "refunds",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The invoice details which includes all information of the invoice like items, billing information."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/search-invoices",
    "method": "list",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "search-invoices",
    "typeScriptTag": "searchInvoices",
    "description": "Search for invoices",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number to be retrieved, for the list of templates. So, a combination of `page=1` and `page_size=20` returns the first 20 templates. A combination of `page=2` and `page_size=20` returns the next 20 templates.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The maximum number of templates to return in the response.",
        "default": 20
      },
      {
        "name": "totalRequired",
        "schema": "boolean",
        "description": "Indicates whether the to show <code>total_pages</code> and <code>total_items</code> in the response.",
        "default": false
      },
      {
        "name": "recipient_email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipient_first_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipient_last_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipient_business_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoice_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "array",
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency_code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "memo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "total_amount_range",
        "schema": "object",
        "description": ""
      },
      {
        "name": "invoice_date_range",
        "schema": "object",
        "description": ""
      },
      {
        "name": "due_date_range",
        "schema": "object",
        "description": ""
      },
      {
        "name": "payment_date_range",
        "schema": "object",
        "description": ""
      },
      {
        "name": "creation_date_range",
        "schema": "object",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of merchant invoices. Includes the total invoices count and [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links) for navigation."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "The client is not authorized to access this resource, although it may have valid credentials. "
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/templates",
    "method": "listDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "templates",
    "typeScriptTag": "templates",
    "description": "List templates",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "description": "The fields to return in the response. Value is `all` or `none`. To return only the template name, ID, and default attributes, specify `none`.",
        "default": "all"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number to be retrieved, for the list of templates. So, a combination of `page=1` and `page_size=20` returns the first 20 templates. A combination of `page=2` and `page_size=20` returns the next 20 templates.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The maximum number of templates to return in the response.",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An array of merchant-created templates with associated details that include the emails, addresses, and phone numbers from the user's PayPal profile."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "The client is not authorized to access this resource, although it may have valid credentials. "
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/templates",
    "method": "createTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "templates",
    "typeScriptTag": "templates",
    "description": "Create template",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "default_template",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "template_info",
        "schema": "object",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unit_of_measure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "standard_template",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The template with invoice details to load with all captured fields."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/templates/{template_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "templates",
    "typeScriptTag": "templates",
    "description": "Delete template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template to delete.",
        "example": "TEMPLATE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A successful request returns the HTTP `204 No Content` status code with no JSON response body."
      },
      {
        "statusCode": "400",
        "description": "Request is not well-formed, syntactically incorrect, or violates schema."
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "422",
        "description": "The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/templates/{template_id}",
    "method": "showDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "templates",
    "typeScriptTag": "templates",
    "description": "Show template details",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template to delete.",
        "example": "TEMPLATE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The template with invoice details to load with all captured fields."
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  },
  {
    "url": "/v2/invoicing/templates/{template_id}",
    "method": "updateFullTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "templates",
    "typeScriptTag": "templates",
    "description": "Fully update template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template to delete.",
        "example": "TEMPLATE_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "default_template",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "template_info",
        "schema": "object",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unit_of_measure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "standard_template",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The template with invoice details to load with all captured fields."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The default error response."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Invoices"
      apiBaseUrl="https://api-m.sandbox.paypal.com"
      apiVersion="2.3"
      endpoints={14}
      sdkMethods={20}
      schemas={149}
      parameters={120}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/invoicing/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paypal/invoicing/openapi.yaml"
      developerDocumentation="developer.paypal.com/"
    />
  );
}
  