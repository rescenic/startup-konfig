import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function GoodyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="goody-typescript-sdk"
      metaDescription={`Goody is a new way to send personal and business gifts as easily as a text message. 

Our business gifting platform, Goody for Business, powers employee engagement, client appreciation, and sales prospecting gifts at more than 12,000 leading companies. Goody integrates with 30 leading HR platforms, allowing companies to automatically gift employees on birthdays and work anniversaries.

Choose from a curated gift collection of 250+ brands. Send a gift with only an email or phone number — no address required. Let gift recipients swap your gift for equal or lower-priced options, with no pricing shown.`}
      company="Goody"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/goody/logo.png"
      companyKebabCase="goody"
      clientNameCamelCase="goody"
      homepage="www.ongoody.com/"
      lastUpdated={new Date("2024-03-29T22:43:40.620Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/goody/favicon.png"
      // Missing contactUrl
      contactEmail="support@ongoody.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/goody/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","employee_engagement","gifts","sales","client_appreciation","platform"]}
      methods={[
  {
    "url": "/v1/me",
    "method": "getCurrentUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Me",
    "typeScriptTag": "me",
    "description": "Retrieve current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/order_batches",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order Batches",
    "typeScriptTag": "orderBatches",
    "description": "List order batches",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page for pagination, starting at 1",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Items per page for pagination",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/order_batches",
    "method": "createBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order Batches",
    "typeScriptTag": "orderBatches",
    "description": "Create an order batch",
    "parameters": [
      {
        "name": "from_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM_NAME"
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "cart",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "send_method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SEND_METHOD"
      },
      {
        "name": "card_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workspace_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduled_send_on",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expires_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reserved_options",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An order batch is the primary resource created by the API. Order batches contain an array of orders."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/order_batches/{id}/orders",
    "method": "getOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order Batches",
    "typeScriptTag": "orderBatches",
    "description": "Retrieve orders for an order batch",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Order batch ID",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page for pagination, starting at 1",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Items per page for pagination",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/order_batches/{id}/recipients",
    "method": "getRecipients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order Batches",
    "typeScriptTag": "orderBatches",
    "description": "Retrieve recipients for an order batch",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Order batch ID",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page for pagination, starting at 1",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Items per page for pagination",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/order_batches/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order Batches",
    "typeScriptTag": "orderBatches",
    "description": "Retrieve an order batch",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Order batch ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An order batch is the primary resource created by the API. Order batches contain an array of orders."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/orders/{id}/cancel",
    "method": "cancelOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Cancel an order",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An individual order contains the gift link to be sent to the recipient (if applicable) and other information about the order."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/orders",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "List orders",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page for pagination, starting at 1",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Items per page for pagination",
        "default": 20
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/orders/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Retrieve an order",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An individual order contains the gift link to be sent to the recipient (if applicable) and other information about the order."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/orders/{id}/update_expiration",
    "method": "updateExpiration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Update expiration for an order",
    "parameters": [
      {
        "name": "expiration",
        "schema": "string",
        "description": "",
        "example": "2022-02-01T00:00:00+0000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An individual order contains the gift link to be sent to the recipient (if applicable) and other information about the order."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payment_methods",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment Methods",
    "typeScriptTag": "paymentMethods",
    "description": "List all payment methods",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/products",
    "method": "listActiveProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "List all active products",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page for pagination, starting at 1",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Items per page for pagination",
        "default": 20
      },
      {
        "name": "useCustomCatalog",
        "schema": "boolean",
        "required": false,
        "description": "Limit to custom catalog only (for approved API partners)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks",
    "method": "createEndpoint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a webhook endpoint",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks/{id}",
    "method": "deleteEndpoint",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a webhook endpoint",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Webhook endpoint deleted"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/workspaces",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List all workspaces",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Goody API"
      apiBaseUrl="https://api.ongoody.com"
      apiVersion="1.0.0"
      endpoints={14}
      sdkMethods={19}
      schemas={37}
      parameters={30}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/goody/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/goody/openapi.yaml"
      developerDocumentation="developer.ongoody.com/introduction/overview"
    />
  );
}
  