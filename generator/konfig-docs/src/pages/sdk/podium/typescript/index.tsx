import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PodiumTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="podium-typescript-sdk"
      metaDescription={`A few years back, Eric (Co-Founder and CEO) got a frustrated call from his dad. His dad's tire shop had plenty of happy customers, but only a handful of angry ones were leaving reviews. So we built a product that made getting more reviews as easy as sending a text.

Launching in 2014, we set out to solve the same problem for local businesses everywhere, but we realized that messaging with customers wasn't just the better way to get reviews—it's the better way to do business. We've since built a multi-product platform that's modernizing the way local business gets done. 

We are here to provide local businesses with everything they need to win. Get more reviews, collect payments, send text marketing campaigns, and centralize your communications—all from one easy-to-use platform.

#Podium #PodiumLove #LocalBusiness #TheFutureIsLocal`}
      company="Podium"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/podium/logo.png"
      companyKebabCase="podium"
      clientNameCamelCase="podium"
      homepage="podium.com"
      lastUpdated={new Date("2024-03-28T23:15:08.809Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/podium/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/podium/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["messaging","reviews","customer_communication","reviews_recommendations","online_reviews","reputation_management","review_analytics","customer_reviews","customer_interactions","customer_engagement","collect_payments","text_marketing","sms_marketing"]}
      methods={[
  {
    "url": "/v4/locations",
    "method": "listAllLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "List all locations.",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "String you would like to search for in the `searchFields` parameter."
      },
      {
        "name": "searchFields",
        "schema": "array",
        "required": false,
        "description": "A list of the fields where you want to search for the `search` parameters. e.g. ?searchFields[]=name&searchFields[]=displayname",
        "default": [
          "name"
        ]
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of items to return per request. Defaults to `10`.",
        "example": 10,
        "default": 10
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Retrieves the page of items that comes after the `cursor`.",
        "example": "MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAw"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/locations/{uid}",
    "method": "getByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "Get a location.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for location.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/locations/{uid}",
    "method": "updateByUid",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "Update a location.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for location.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "addressDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": "",
        "example": "Podium US"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Podium"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": "",
        "example": "+18884441234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/organizations/{uid}",
    "method": "getByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Get an organization.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for organization.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/users",
    "method": "listAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "List all users.",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "String you would like to search for in the `searchFields` parameter."
      },
      {
        "name": "createdAt",
        "schema": "object",
        "required": false,
        "description": "Filter on the `createdAt` date."
      },
      {
        "name": "searchFields",
        "schema": "array",
        "required": false,
        "description": "A list of the fields where you want to search for the `search` parameters. e.g. ?searchFields[]=name&searchFields[]=displayname",
        "default": [
          "fullName"
        ]
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of items to return per request. Defaults to `10`.",
        "example": 10,
        "default": 10
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Retrieves the page of items that comes after the `cursor`.",
        "example": "MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAw"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/users/{uid}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get a user.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for user.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/appointments",
    "method": "createNewAppointment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Appointment",
    "typeScriptTag": "appointment",
    "description": "Create an appointment.",
    "parameters": [
      {
        "name": "assignedUserUid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contactName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "John Doe"
      },
      {
        "name": "contactPhoneNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "+17626765098"
      },
      {
        "name": "datetime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2015-01-23T23:50:07Z"
      },
      {
        "name": "durationMin",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Note for the appointment."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "unconfirmed"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "in_person"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/campaign_interactions",
    "method": "listInteractions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign Interaction",
    "typeScriptTag": "campaignInteraction",
    "description": "List campaign interactions",
    "parameters": [
      {
        "name": "campaignUid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "contactUid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAw"
      },
      {
        "name": "interactionType",
        "schema": "array",
        "required": false,
        "description": "The type of interaction this record represents"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of items to return per request. Defaults to `10`.",
        "example": 10,
        "default": 10
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/campaigns",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "List all campaigns.",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status of the campaign"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/campaigns",
    "method": "createNewCampaign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Create a campaign.",
    "parameters": [
      {
        "name": "includeActiveConversations",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "locations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Get 50% off this memorial day weekend!"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Memorial Day sale"
      },
      {
        "name": "recentlySentSubscriberOverride",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/campaigns/{uid}",
    "method": "removeCampaign",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Delete a campaign.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "UID of the campaign",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/campaigns/{uid}",
    "method": "getByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Get a campaign.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "UID of the campaign",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/campaigns/{uid}",
    "method": "updateCampaign",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Update a campaign.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for a campaign.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "includeActiveConversations",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "locations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Get 50% off this memorial day weekend!"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Memorial Day sale"
      },
      {
        "name": "recentlySentSubscriberOverride",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/campaigns/{uid}/messages",
    "method": "createForCampaign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Create a message for a given campaign",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for campaign.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "channelIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "email@email.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contact_attributes",
    "method": "listAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact Attribute",
    "typeScriptTag": "contactAttribute",
    "description": "List contact attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contact_attributes",
    "method": "createNewAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact Attribute",
    "typeScriptTag": "contactAttribute",
    "description": "Create a contact attribute",
    "parameters": [
      {
        "name": "dataType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATATYPE"
      },
      {
        "name": "isEncrypted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Internal Contact ID"
      },
      {
        "name": "ownerResourceType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OWNERRESOURCETYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contact_attributes/{uid}",
    "method": "deleteByUid",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact Attribute",
    "typeScriptTag": "contactAttribute",
    "description": "Delete a contact attribute",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for attribute.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contact_attributes/{uid}",
    "method": "getAttributeByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact Attribute",
    "typeScriptTag": "contactAttribute",
    "description": "Gets a contact attribute by uid",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Contacts attribute uid",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contact_attributes/{uid}",
    "method": "updateAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contact Attribute",
    "typeScriptTag": "contactAttribute",
    "description": "Update a contact attribute",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for attribute.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "dataType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isEncrypted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Internal Contact ID"
      },
      {
        "name": "ownerResourceType",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contact_tags",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact Tag",
    "typeScriptTag": "contactTag",
    "description": "List all tags for the organization",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contact_tags",
    "method": "createOrganizationLevelTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact Tag",
    "typeScriptTag": "contactTag",
    "description": "Create a contact tag for an organization",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "High priority contacts"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "priority"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contact_tags/{uid}",
    "method": "getByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact Tag",
    "typeScriptTag": "contactTag",
    "description": "Get a contact tag for an organization given an uid",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Contacts tags uid",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contact_tags/{uid}",
    "method": "updateOrganizationLevelTag",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contact Tag",
    "typeScriptTag": "contactTag",
    "description": "Update a contact tag",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for tag.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "High priority contacts"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "priority"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contacts",
    "method": "listAllContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "List all contacts",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Retrieves the page of items that comes after the `cursor`.",
        "example": "MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAw"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of items to return per request. Defaults to `10`.",
        "example": 10,
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contacts",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Create a contact",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
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
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "john.doe@podium.com"
      },
      {
        "name": "locations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "John Doe"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+18884441234"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contacts/campaigns/opt_in",
    "method": "optInContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Opt in a contact",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "channel",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contacts/campaigns/opt_out",
    "method": "optOutContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Opt out a contact",
    "parameters": [
      {
        "name": "channel",
        "schema": "object",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contacts/{identifier}",
    "method": "deleteByIdentifier",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Delete a contact",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "Conversation uid, phone number, or email to identify the contact. Phone number should be formatted as '+15555555555'",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contacts/{identifier}",
    "method": "getByIdentifier",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve a contact",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "Conversation uid, phone number, or email to identify the contact. Phone number should be formatted as '+15555555555'",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contacts/{identifier}",
    "method": "updateWithUid",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Update a contact",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "Conversation uid, phone number, or email to identify the contact. Phone number should be formatted as '+15555555555'",
        "example": "IDENTIFIER"
      },
      {
        "name": "conversationUid",
        "schema": "string",
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "john.doe@podium.com"
      },
      {
        "name": "locations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "John Doe"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": "",
        "example": "+18884441234"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contacts/{identifier}/attributes/{uid}",
    "method": "removeAttribute",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Remove an attribute from a contact",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "Contact identifier",
        "example": "john.doe@podium.com"
      },
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for attribute.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contacts/{identifier}/attributes/{uid}",
    "method": "updateAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Update a contact attribute inside a contact",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "Contact identifier",
        "example": "john.doe@podium.com"
      },
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for attribute.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Internal Contact ID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contacts/{identifier}/attributes/{uid}",
    "method": "addAttributeToContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Add a contact attribute to a contact",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "Contact identifier",
        "example": "john.doe@podium.com"
      },
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for attribute.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Internal Contact ID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contacts/{identifier}/tags/{uid}",
    "method": "removeTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Remove an existing tag from an existing contact",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "Contact identifier",
        "example": "john.doe@podium.com"
      },
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for tag.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/contacts/{identifier}/tags/{uid}",
    "method": "addExistingTagToContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Add an existing tag to an existing contact",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "Contact identifier",
        "example": "john.doe@podium.com"
      },
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for tag.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/conversations",
    "method": "listConversations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversation",
    "typeScriptTag": "conversation",
    "description": "List conversations.",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Retrieves the page of items that comes after the `cursor`.",
        "example": "MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAw"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of items to return per request. Defaults to `10`.",
        "example": 10,
        "default": 10
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": false,
        "description": "Podium unique identifier for location.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/conversations/{uid}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversation",
    "typeScriptTag": "conversation",
    "description": "Get a conversation.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for conversation.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/conversations/{uid}",
    "method": "updateByUid",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversation",
    "typeScriptTag": "conversation",
    "description": "Update a conversation.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for conversation.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "assignedUserUid",
        "schema": "string",
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "closed",
        "schema": "boolean",
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/conversations/{uid}/lead_writeback",
    "method": "writeLead",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversation",
    "typeScriptTag": "conversation",
    "description": "Writeback lead",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Conversation uid of the lead.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/conversations/{uid}/notes",
    "method": "createNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversation",
    "typeScriptTag": "conversation",
    "description": "Create a note for given conversation.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for conversation.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "This is a note"
      },
      {
        "name": "senderName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "John Doe"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/feedback",
    "method": "listSurveys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feedback",
    "typeScriptTag": "feedback",
    "description": "List all feedback surveys.",
    "parameters": [
      {
        "name": "createdAt",
        "schema": "object",
        "required": false,
        "description": "Filter on the `createdAt` date."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of items to return per request. Defaults to `10`.",
        "example": 10,
        "default": 10
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Retrieves the page of items that comes after the `cursor`.",
        "example": "MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAw"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/feedback",
    "method": "createSurvey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Feedback",
    "typeScriptTag": "feedback",
    "description": "Create a feedback survey.",
    "parameters": [
      {
        "name": "customerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMERNAME"
      },
      {
        "name": "flowUid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONENUMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/conversations/{conversation_uid}/messages/{uid}",
    "method": "getFromConversation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Retreive a message from a conversation",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for message.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "conversationUid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for conversation.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/import/messages",
    "method": "importFromExternalSystem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Import a message.",
    "parameters": [
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Just a reminder that your appointment is today!"
      },
      {
        "name": "channel",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "contactName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Joe Orange"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "inbound"
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "publishedAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2015-01-23T23:50:07Z"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Appointment reminder"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/messages",
    "method": "sendWithAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Send a message.",
    "parameters": [
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Just a reminder that your appointment is today!"
      },
      {
        "name": "channel",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "contactName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Joe Orange"
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "senderName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Bot1234"
      },
      {
        "name": "setOpenInbox",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Appointment reminder"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/messages/attachment",
    "method": "sendWithAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Send a message with attachment.",
    "parameters": [
      {
        "name": "attachment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/templates",
    "method": "listAllTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "List all templates",
    "parameters": [
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "Filter by types: \"custom\", \"review_invite\", or \"review_invite_backup\", defaults to \"custom\"\n"
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": false,
        "description": "Podium unique identifier for location.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/templates",
    "method": "createMessageTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Create a message template.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "accessLevel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "location"
      },
      {
        "name": "attachmentUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://www.podium.com/"
      },
      {
        "name": "locationUids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "nonDeletable",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/templates/{uid}",
    "method": "removeByUid",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Delete a template",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for templates.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/templates/{uid}",
    "method": "updateMessageTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Update a message template.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Template uid",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "accessLevel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "location"
      },
      {
        "name": "attachmentUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://www.podium.com/"
      },
      {
        "name": "locationUids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "nonDeletable",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "uid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/invoices",
    "method": "listAllInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Get all invoices.",
    "parameters": [
      {
        "name": "locationUid",
        "schema": "string",
        "required": false,
        "description": "Podium unique identifier for location.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "datePaid",
        "schema": "string",
        "required": false,
        "description": "Return invoices with a payment whose `createdAt` is greater or equal to this date.",
        "example": "2015-01-23T23:50:07Z"
      },
      {
        "name": "dateRefunded",
        "schema": "string",
        "required": false,
        "description": "Return invoices with a refund whose `createdAt` is greater or equal to this date.",
        "example": "2015-01-23T23:50:07Z"
      },
      {
        "name": "dateCreated",
        "schema": "string",
        "required": false,
        "description": "Return invoices whose `createdAt` is greater or equal to this date.",
        "example": "2015-01-23T23:50:07Z"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of items to return per request. Defaults to `10`.",
        "example": 10,
        "default": 10
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Retrieves the page of items that comes after or before the `cursor`.",
        "example": "MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAw"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/invoices",
    "method": "createCardInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Create an invoice.",
    "parameters": [
      {
        "name": "accountUid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "allowedPaymentOptions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "channelIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "email@email.com"
      },
      {
        "name": "customerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Barry Grape"
      },
      {
        "name": "invoiceNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "abc-12345-def"
      },
      {
        "name": "lineItems",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "readerUid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/invoices/{uid}",
    "method": "getByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Get an invoice.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for invoice.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for location.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/invoices/{uid}/cancel",
    "method": "cancelInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Cancel an invoice.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for invoice.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "note",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Voided invoice."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/invoices/{uid}/refund",
    "method": "refundById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Refund an invoice",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for invoice.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4186
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "incorrect amount"
      },
      {
        "name": "paymentUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/payments/{uid}",
    "method": "getByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Get a payment.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for payment.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/readers/{uid}",
    "method": "getByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reader",
    "typeScriptTag": "reader",
    "description": "Get a card reader.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for reader.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/refunds",
    "method": "createUnlinked",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Refund",
    "typeScriptTag": "refund",
    "description": "Create a refund.",
    "parameters": [
      {
        "name": "accountUid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4186
      },
      {
        "name": "channelIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "email@email.com"
      },
      {
        "name": "customerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Barry Grape"
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "readerUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/refunds/{uid}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refund",
    "typeScriptTag": "refund",
    "description": "Get a refund.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for refund.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for location.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/reviews",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Review",
    "typeScriptTag": "review",
    "description": "List all reviews.",
    "parameters": [
      {
        "name": "createdAt",
        "schema": "object",
        "required": false,
        "description": "Filter on the `createdAt` date."
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Retrieves the page of items that comes after the `cursor`.",
        "example": "MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAw"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of items to return per request. Defaults to `10`.",
        "example": 10,
        "default": 10
      },
      {
        "name": "updatedAt",
        "schema": "object",
        "required": false,
        "description": "Filter on the `updatedAt` date."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/reviews/invites",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Review Invite",
    "typeScriptTag": "reviewInvite",
    "description": "List all review invites.",
    "parameters": [
      {
        "name": "createdAt",
        "schema": "object",
        "required": false,
        "description": "Filter on the `createdAt` date."
      },
      {
        "name": "senderUid",
        "schema": "string",
        "required": false,
        "description": "Filter by the senderUid",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Max number of items to return per request. Defaults to `10`.",
        "example": 10,
        "default": 10
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Retrieves the page of items that comes after the `cursor`.",
        "example": "MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAw"
      },
      {
        "name": "updatedAt",
        "schema": "object",
        "required": false,
        "description": "Filter on the `updatedAt` date."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/reviews/invites",
    "method": "createLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Review Invite",
    "typeScriptTag": "reviewInvite",
    "description": "Create a review invite link.",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "john.doe@podium.com"
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+17626765098"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/reviews/invites/{uid}",
    "method": "getByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Review Invite",
    "typeScriptTag": "reviewInvite",
    "description": "Get a review invite.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for review invite.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/reviews/sites/summary",
    "method": "getGroupedReviews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Review Sites Summary",
    "typeScriptTag": "reviewSitesSummary",
    "description": "Summary of all connected review sites.",
    "parameters": [
      {
        "name": "createdAt",
        "schema": "object",
        "required": false,
        "description": "Filter on the `createdAt` date."
      },
      {
        "name": "locationUids",
        "schema": "array",
        "required": false,
        "description": "List of locations to filter the results by."
      },
      {
        "name": "userUid",
        "schema": "string",
        "required": false,
        "description": "Filter on the user uid that the reviews are attributed to.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/reviews/summary",
    "method": "getAllReviewsSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Review Summary",
    "typeScriptTag": "reviewSummary",
    "description": "Summary of all reviews",
    "parameters": [
      {
        "name": "createdAt",
        "schema": "object",
        "required": false,
        "description": "Filter on the `createdAt` date."
      },
      {
        "name": "locationUids",
        "schema": "array",
        "required": false,
        "description": "List of locations to filter the results by."
      },
      {
        "name": "userUid",
        "schema": "string",
        "required": false,
        "description": "Filter on the user uid that the reviews are attributed to.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/reviews/{review_uid}/responses/{uid}",
    "method": "updateForReview",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Review Response",
    "typeScriptTag": "reviewResponse",
    "description": "Update response for a given review",
    "parameters": [
      {
        "name": "reviewUid",
        "schema": "string",
        "required": true,
        "description": "Review UID you are updating the response for.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Review response UID you are updating the response with.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Body for test"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/reviews/{uid}",
    "method": "getByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Review",
    "typeScriptTag": "review",
    "description": "Get a review.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for review.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/reviews/{uid}/attributions",
    "method": "removeUserAttribution",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Review Attribution",
    "typeScriptTag": "reviewAttribution",
    "description": "Remove a user attribution for a given review",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for review.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "userUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/reviews/{uid}/attributions",
    "method": "assignUserToReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Review Attribution",
    "typeScriptTag": "reviewAttribution",
    "description": "Attribute a user to a review",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for review.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "userUid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/reviews/{uid}/responses",
    "method": "listByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Review Response",
    "typeScriptTag": "reviewResponse",
    "description": "List Responses of a given review",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Review UID you are requesting the responses of.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/reviews/{uid}/responses",
    "method": "createForReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Review Response",
    "typeScriptTag": "reviewResponse",
    "description": "Create response for a given review",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Review UID you are creating the response for",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Body for test"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/webhooks",
    "method": "listWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "List webhooks.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/webhooks",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Create a webhook.",
    "parameters": [
      {
        "name": "eventTypes",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "locationUid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "organizationUid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "something-no-one-will-know"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://www.podium.com/"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/webhooks/{uid}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Delete a webhook.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for webhook.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/webhooks/{uid}",
    "method": "getByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Get a webhook.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for webhook.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/webhooks/{uid}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Update a webhook.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for webhook.",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "eventTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "secret",
        "schema": "string",
        "description": "",
        "example": "something-no-one-will-know"
      },
      {
        "name": "url",
        "schema": "string",
        "description": "",
        "example": "https://www.podium.com/"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/dataFeeds/{uid}/events",
    "method": "processEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Feed Event",
    "typeScriptTag": "dataFeedEvent",
    "description": "Process an event through a data feed.",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Podium unique identifier for data feed.",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v4/data_stream/{location_uid}/{integration_uid}/{data_mapping_name}",
    "method": "sendIntegrationPayload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Stream",
    "typeScriptTag": "dataStream",
    "description": "Send integration payload.",
    "parameters": [
      {
        "name": "locationUid",
        "schema": "string",
        "required": true,
        "description": "Location UID",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "integrationUid",
        "schema": "string",
        "required": true,
        "description": "Integration UID",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "dataMappingName",
        "schema": "string",
        "required": true,
        "description": "Data Mapping Name",
        "example": "DATA_MAPPING_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Workflows"
      apiBaseUrl="https://api.podium.com"
      apiVersion="2021.04.01"
      endpoints={52}
      sdkMethods={78}
      schemas={224}
      parameters={240}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/podium/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/podium/openapi.yaml"
      developerDocumentation="docs.podium.com/reference"
    />
  );
}
  