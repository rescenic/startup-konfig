import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ApaleoTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="apaleo-typescript-sdk"
      metaDescription={`More than a PMS, Apaleo is the API-first property management platform empowering hotel & apartment groups to create the ultimate experience for guests & staff. Gain back control and scale your hospitality business with native multi-property management, process automation and unlimited data access.`}
      company="Apaleo"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/apaleo/logo.png"
      companyKebabCase="apaleo"
      clientNameCamelCase="apaleo"
      homepage="apaleo.com"
      lastUpdated={new Date("2024-03-29T20:34:56.573Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/apaleo/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/apaleo/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hotel","property_management","hospitality"]}
      methods={[
  {
    "url": "/inventory/v1/properties",
    "method": "listGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Property",
    "typeScriptTag": "property",
    "description": "Get a properties list",
    "parameters": [
      {
        "name": "status",
        "schema": "array",
        "description": "Filter result by property status"
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "Include archived properties in the result. If not set, or set to false, it only returns non-archived properties"
      },
      {
        "name": "countryCode",
        "schema": "array",
        "description": "Filter result by country code"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned."
      },
      {
        "name": "expand",
        "schema": "array",
        "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "There are no properties found."
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/properties",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Property",
    "typeScriptTag": "property",
    "description": "Creates a property",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours."
      },
      {
        "name": "description",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "name",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "companyName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYNAME"
      },
      {
        "name": "managingDirectors",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "commercialRegisterEntry",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMMERCIALREGISTERENTRY"
      },
      {
        "name": "taxId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAXID"
      },
      {
        "name": "location",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "bankAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentTerms",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "timeZone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "defaultCheckInTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEFAULTCHECKINTIME"
      },
      {
        "name": "defaultCheckOutTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEFAULTCHECKOUTTIME"
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCYCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "415",
        "description": "Unsupported media type."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/properties/$count",
    "method": "getTotalCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Property",
    "typeScriptTag": "property",
    "description": "Return total count of properties",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/properties/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Property",
    "typeScriptTag": "property",
    "description": "Get a property",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the property.",
        "example": "ID"
      },
      {
        "name": "languages",
        "schema": "array",
        "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)"
      },
      {
        "name": "expand",
        "schema": "array",
        "description": "List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "With this request you can create a new property"
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/properties/{id}",
    "method": "existsByIdHead",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "Property",
    "typeScriptTag": "property",
    "description": "Check if a property exists",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the property.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The property exists."
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/properties/{id}",
    "method": "modifyDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Property",
    "typeScriptTag": "property",
    "description": "Allows to modify property",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the property.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "415",
        "description": "Unsupported media type."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/property-actions/{id}/clone",
    "method": "cloneProperty",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PropertyActions",
    "typeScriptTag": "propertyActions",
    "description": "Clones a property",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the property.",
        "example": "ID"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours."
      },
      {
        "name": "description",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "name",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "companyName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYNAME"
      },
      {
        "name": "managingDirectors",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "commercialRegisterEntry",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMMERCIALREGISTERENTRY"
      },
      {
        "name": "taxId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAXID"
      },
      {
        "name": "location",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "bankAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentTerms",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "timeZone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "defaultCheckInTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEFAULTCHECKINTIME"
      },
      {
        "name": "defaultCheckOutTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEFAULTCHECKOUTTIME"
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCYCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "415",
        "description": "Unsupported media type."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/property-actions/{id}/archive",
    "method": "archiveProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PropertyActions",
    "typeScriptTag": "propertyActions",
    "description": "Archive a property",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the property",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/property-actions/{id}/set-live",
    "method": "moveToLive",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PropertyActions",
    "typeScriptTag": "propertyActions",
    "description": "Move property to live",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the property",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/property-actions/{id}/reset",
    "method": "resetPropertyData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PropertyActions",
    "typeScriptTag": "propertyActions",
    "description": "Reset a test property and delete all transactional data",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the property",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/types/countries",
    "method": "supportedCountriesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Types",
    "typeScriptTag": "types",
    "description": "Returns a list of supported countries.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/units/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "Delete a unit",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the unit.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Deletion of the unit was successful."
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/units/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "Get a unit",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the unit.",
        "example": "ID"
      },
      {
        "name": "languages",
        "schema": "array",
        "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)"
      },
      {
        "name": "expand",
        "schema": "array",
        "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/units/{id}",
    "method": "existsByIdHead",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "Check if a unit exists",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the unit.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The unit exists."
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/units/{id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "Allows to patch unit",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the unit.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "204",
        "description": "The unit was successfully modified."
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "415",
        "description": "Unsupported media type."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/units",
    "method": "listUnits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "Get a units list",
    "parameters": [
      {
        "name": "propertyId",
        "schema": "string",
        "description": "Return units for specific property"
      },
      {
        "name": "unitGroupId",
        "schema": "string",
        "description": "Return units for the specific unit group - <b>DEPRECATED: This property will be removed 20.04.2022. Use `UnitGroupIds` instead</b>"
      },
      {
        "name": "unitGroupIds",
        "schema": "array",
        "description": "Return units with the specific unit groups"
      },
      {
        "name": "unitAttributeIds",
        "schema": "array",
        "description": "Return units with the specific unit attributes"
      },
      {
        "name": "isOccupied",
        "schema": "boolean",
        "description": "Return only occupied or vacant units"
      },
      {
        "name": "maintenanceType",
        "schema": "string",
        "description": "Return units with the specific maintenance type"
      },
      {
        "name": "condition",
        "schema": "string",
        "description": "Return units with a specific condition"
      },
      {
        "name": "textSearch",
        "schema": "string",
        "description": "This will filter all units where the provided text is contained in the unit name. The search is case insensitive."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned."
      },
      {
        "name": "expand",
        "schema": "array",
        "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No units were found."
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/units",
    "method": "updateUnitsAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "Allows to patch one or more units",
    "parameters": [
      {
        "name": "unitIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Units were successfully modified."
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "415",
        "description": "Unsupported media type."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/units",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "Create a unit",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours."
      },
      {
        "name": "description",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "propertyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROPERTYID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "unitGroupId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "maxPersons",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "condition",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "connectedUnits",
        "schema": "array",
        "required": false,
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
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "415",
        "description": "Unsupported media type."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/units/$count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "Returns number of units",
    "parameters": [
      {
        "name": "propertyId",
        "schema": "string",
        "description": "Return units for specific property"
      },
      {
        "name": "unitGroupId",
        "schema": "string",
        "description": "Return units for the specific unit group - <b>DEPRECATED: This property will be removed 20.04.2022. Use `UnitGroupIds` instead</b>"
      },
      {
        "name": "unitGroupIds",
        "schema": "array",
        "description": "Return units with the specific unit groups"
      },
      {
        "name": "unitAttributeIds",
        "schema": "array",
        "description": "Return units with the specific unit attributes"
      },
      {
        "name": "isOccupied",
        "schema": "boolean",
        "description": "Return only occupied or vacant units"
      },
      {
        "name": "maintenanceType",
        "schema": "string",
        "description": "Return units with the specific maintenance type"
      },
      {
        "name": "condition",
        "schema": "string",
        "description": "Return units with a specific condition"
      },
      {
        "name": "textSearch",
        "schema": "string",
        "description": "This will filter all units where the provided text is contained in the unit name. The search is case insensitive."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/units/bulk",
    "method": "bulkCreateUnits",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Unit",
    "typeScriptTag": "unit",
    "description": "Create multiple units",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours."
      },
      {
        "name": "units",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "415",
        "description": "Unsupported media type."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/unit-attributes/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UnitAttribute",
    "typeScriptTag": "unitAttribute",
    "description": "Deletes unit attribute",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of unit attribute",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/unit-attributes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UnitAttribute",
    "typeScriptTag": "unitAttribute",
    "description": "Get unit attribute by id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the unit attribute",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/unit-attributes/{id}",
    "method": "checkExistsHead",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "UnitAttribute",
    "typeScriptTag": "unitAttribute",
    "description": "Check if a unit attribute exists",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the unit attribute.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The unit attribute exists."
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/unit-attributes/{id}",
    "method": "modifyDescription",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "UnitAttribute",
    "typeScriptTag": "unitAttribute",
    "description": "Allows to modify unit attribute",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of unit attribute",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "415",
        "description": "Unsupported media type."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/unit-attributes",
    "method": "listAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UnitAttribute",
    "typeScriptTag": "unitAttribute",
    "description": "Get unit attribute list",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No unit attributes present for given account"
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/unit-attributes",
    "method": "createNewAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UnitAttribute",
    "typeScriptTag": "unitAttribute",
    "description": "Create a unit attribute",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "415",
        "description": "Unsupported media type."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/unit-groups",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UnitGroup",
    "typeScriptTag": "unitGroup",
    "description": "Get all unit groups, or all unit groups for a property",
    "parameters": [
      {
        "name": "propertyId",
        "schema": "string",
        "description": "Return unit groups for specific property"
      },
      {
        "name": "unitGroupTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned."
      },
      {
        "name": "expand",
        "schema": "array",
        "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "There are no unit groups found."
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/unit-groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UnitGroup",
    "typeScriptTag": "unitGroup",
    "description": "Create a unit group",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "Unique key for safely retrying requests without accidentally performing the same operation twice. \nWe'll always send back the same response for requests made with the same key, \nand keys can't be reused with different request parameters. Keys expire after 24 hours."
      },
      {
        "name": "description",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "propertyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROPERTYID"
      },
      {
        "name": "name",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "maxPersons",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "rank",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "connectedUnitGroups",
        "schema": "array",
        "required": false,
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
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "415",
        "description": "Unsupported media type."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/unit-groups/$count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UnitGroup",
    "typeScriptTag": "unitGroup",
    "description": "Returns number of unit groups",
    "parameters": [
      {
        "name": "propertyId",
        "schema": "string",
        "description": "Return unit groups for specific property"
      },
      {
        "name": "unitGroupTypes",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/unit-groups/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UnitGroup",
    "typeScriptTag": "unitGroup",
    "description": "Delete a unit group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the unit group.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Deletion of the unit group was successful."
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/unit-groups/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UnitGroup",
    "typeScriptTag": "unitGroup",
    "description": "Get a unit group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the unit group.",
        "example": "ID"
      },
      {
        "name": "languages",
        "schema": "array",
        "description": "'all' or comma separated list of two-letter language codes (ISO Alpha-2)"
      },
      {
        "name": "expand",
        "schema": "array",
        "description": "List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/unit-groups/{id}",
    "method": "checkExistsByIdHead",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "UnitGroup",
    "typeScriptTag": "unitGroup",
    "description": "Check if a unit group exists",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the unit group.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The unit group exists."
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  },
  {
    "url": "/inventory/v1/unit-groups/{id}",
    "method": "updateGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "UnitGroup",
    "typeScriptTag": "unitGroup",
    "description": "Replace a unit group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the unit group.",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "maxPersons",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "rank",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "connectedUnitGroups",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "204",
        "description": "Replace of the unit group was successful."
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "401",
        "description": "You are unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Forbidden."
      },
      {
        "statusCode": "404",
        "description": "The Request-URI could not be found."
      },
      {
        "statusCode": "415",
        "description": "Unsupported media type."
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An unexpected error occurred."
      },
      {
        "statusCode": "503",
        "description": "The server is currently unavailable. Please try later."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="apaleo Inventory API"
      apiBaseUrl="api.apaleo.com"
      apiVersion="v1"
      endpoints={17}
      sdkMethods={33}
      schemas={46}
      parameters={118}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/apaleo/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/apaleo/openapi.yaml"
      developerDocumentation="apaleo.dev"
    />
  );
}
  