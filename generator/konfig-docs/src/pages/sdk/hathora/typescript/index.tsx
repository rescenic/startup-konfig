import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function HathoraTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="hathora-typescript-sdk"
      metaDescription={`A venture-backed start-up building a modern cloud optimized for multiplayer games.`}
      company="Hathora"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hathora/logo.png"
      companyKebabCase="hathora"
      clientNameCamelCase="hathora"
      homepage="hathora.dev/"
      lastUpdated={new Date("2024-03-29T17:44:58.773Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hathora/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hathora/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["gaming","multiplayer_games","infrastructure","server_orchestration"]}
      methods={[
  {
    "url": "/apps/v1/list",
    "method": "getAppList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AppV1",
    "typeScriptTag": "appV1",
    "description": "Returns an unsorted list of your organization’s [applications](https://hathora.dev/docs/concepts/hathora-entities#application). An application is uniquely identified by an `appId`.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/apps/v1/create",
    "method": "createNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AppV1",
    "typeScriptTag": "appV1",
    "description": "Create a new [application](https://hathora.dev/docs/concepts/hathora-entities#application).",
    "parameters": [
      {
        "name": "authConfiguration",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "minecraft"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An application object is the top level namespace for the game server."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/apps/v1/update/{appId}",
    "method": "updateApplicationData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AppV1",
    "typeScriptTag": "appV1",
    "description": "Update data for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "authConfiguration",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "minecraft"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An application object is the top level namespace for the game server."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/apps/v1/info/{appId}",
    "method": "getAppInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AppV1",
    "typeScriptTag": "appV1",
    "description": "Get details for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An application object is the top level namespace for the game server."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/apps/v1/delete/{appId}",
    "method": "deleteApplicationById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AppV1",
    "typeScriptTag": "appV1",
    "description": "Delete an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Your organization will lose access to this application.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/v1/{appId}/login/anonymous",
    "method": "generatePlayerToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthV1",
    "typeScriptTag": "authV1",
    "description": "Returns a unique player token for an anonymous user.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/v1/{appId}/login/nickname",
    "method": "generateUniquePlayerToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthV1",
    "typeScriptTag": "authV1",
    "description": "Returns a unique player token with a specified nickname for a user.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "nickname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "squiddytwoshoes"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/v1/{appId}/login/google",
    "method": "getUniquePlayerToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuthV1",
    "typeScriptTag": "authV1",
    "description": "Returns a unique player token using a Google-signed OIDC `idToken`.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "idToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkNDhhNzUxMzhkOWQ0OGYwYWE2MzVlZjU2OWM0ZTE5NmY3YWU4ZDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODQ4NDEyODI2Nzg4LW00bXNyYjZxNDRkbTJ1ZTNrZ3Z1aTBmcTdrZGE1NWxzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODQ4NDEyODI2Nzg4LW00bXNyYjZxNDRkbTJ1ZTNrZ3Z1aTBmcTdrZGE1NWxzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0NTQyMzMwNzI3MTU2MTMzNzc2IiwiZW1haWwiOiJocGFdkeivmeuzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoidno1NGhhdTNxbnVR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing/v1/balance",
    "method": "getBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BillingV1",
    "typeScriptTag": "billingV1",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing/v1/paymentmethod",
    "method": "getPaymentMethod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BillingV1",
    "typeScriptTag": "billingV1",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Make all properties in T optional"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing/v1/customerportalurl",
    "method": "createCustomerPortalUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BillingV1",
    "typeScriptTag": "billingV1",
    "description": "",
    "parameters": [
      {
        "name": "returnUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RETURNURL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/billing/v1/invoices",
    "method": "listInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BillingV1",
    "typeScriptTag": "billingV1",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/builds/v1/{appId}/list",
    "method": "getApplicationBuilds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BuildV1",
    "typeScriptTag": "buildV1",
    "description": "Returns an array of [builds](https://hathora.dev/docs/concepts/hathora-entities#build) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/builds/v1/{appId}/info/{buildId}",
    "method": "getApplicationInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BuildV1",
    "typeScriptTag": "buildV1",
    "description": "Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build).",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "buildId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A build represents a game server artifact and its associated metadata."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/builds/v1/{appId}/create",
    "method": "createBuild",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BuildV1",
    "typeScriptTag": "buildV1",
    "description": "Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build). Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "buildTag",
        "schema": "string",
        "description": "",
        "example": "0.1.14-14c793"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A build represents a game server artifact and its associated metadata."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/builds/v1/{appId}/run/{buildId}",
    "method": "buildServerArtifact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BuildV1",
    "typeScriptTag": "buildV1",
    "description": "Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild).",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "buildId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/builds/v1/{appId}/delete/{buildId}",
    "method": "deleteBuildById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "BuildV1",
    "typeScriptTag": "buildV1",
    "description": "Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "buildId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/deployments/v1/{appId}/list",
    "method": "listDeploymentsByAppId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DeploymentV1",
    "typeScriptTag": "deploymentV1",
    "description": "Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/deployments/v1/{appId}/latest",
    "method": "getLatestDeploymentByAppId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DeploymentV1",
    "typeScriptTag": "deploymentV1",
    "description": "Get the latest [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Deployment is a versioned configuration for a build that describes runtime behavior."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/deployments/v1/{appId}/info/{deploymentId}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DeploymentV1",
    "typeScriptTag": "deploymentV1",
    "description": "Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment).",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "deploymentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Deployment is a versioned configuration for a build that describes runtime behavior."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/deployments/v1/{appId}/create/{buildId}",
    "method": "createNewDeployment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DeploymentV1",
    "typeScriptTag": "deploymentV1",
    "description": "Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "buildId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "idleTimeoutEnabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": "true"
      },
      {
        "name": "env",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "roomsPerProcess",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 3
      },
      {
        "name": "planName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "tiny"
      },
      {
        "name": "additionalContainerPorts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "transportType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSPORTTYPE"
      },
      {
        "name": "containerPort",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4000
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Deployment is a versioned configuration for a build that describes runtime behavior."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/discovery/v1/ping",
    "method": "getEndpoints",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DiscoveryV1",
    "typeScriptTag": "discoveryV1",
    "description": "Returns an array of all regions with a host and port that a client can directly ping. Open a websocket connection to `wss://<host>:<port>/ws` and send a packet. To calculate ping, measure the time it takes to get an echo packet back.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/lobby/v1/{appId}/create/private",
    "method": "createPrivateLobby",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LobbyV1",
    "typeScriptTag": "lobbyV1",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "local",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.\nNote: error will be returned if `roomId` is not globally unique."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/lobby/v1/{appId}/create/public",
    "method": "createPublicLobby",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LobbyV1",
    "typeScriptTag": "lobbyV1",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "local",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.\nNote: error will be returned if `roomId` is not globally unique."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/lobby/v1/{appId}/list",
    "method": "listLobbiesByAppId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LobbyV1",
    "typeScriptTag": "lobbyV1",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "local",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "region",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/lobby/v2/{appId}/create/private",
    "method": "createPrivateLobby",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LobbyV2",
    "typeScriptTag": "lobbyV2",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2swovpy1fnunu"
      },
      {
        "name": "initialConfig",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A lobby object allows you to store and manage metadata for your rooms."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/lobby/v2/{appId}/create/public",
    "method": "createPublicLobby",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LobbyV2",
    "typeScriptTag": "lobbyV2",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2swovpy1fnunu"
      },
      {
        "name": "initialConfig",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A lobby object allows you to store and manage metadata for your rooms."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/lobby/v2/{appId}/create/local",
    "method": "createLocalLobby",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LobbyV2",
    "typeScriptTag": "lobbyV2",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2swovpy1fnunu"
      },
      {
        "name": "initialConfig",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A lobby object allows you to store and manage metadata for your rooms."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/lobby/v2/{appId}/create",
    "method": "createLobby",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LobbyV2",
    "typeScriptTag": "lobbyV2",
    "description": "Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2swovpy1fnunu"
      },
      {
        "name": "visibility",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "private"
      },
      {
        "name": "initialConfig",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A lobby object allows you to store and manage metadata for your rooms."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/lobby/v2/{appId}/list/public",
    "method": "listPublicLobbies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LobbyV2",
    "typeScriptTag": "lobbyV2",
    "description": "Get all active lobbies for a an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "Region to filter by. If omitted, active public lobbies in all regions will be returned."
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
    "url": "/lobby/v2/{appId}/info/{roomId}",
    "method": "getLobbyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LobbyV2",
    "typeScriptTag": "lobbyV2",
    "description": "Get details for a lobby.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2swovpy1fnunu"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A lobby object allows you to store and manage metadata for your rooms."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/lobby/v2/{appId}/setState/{roomId}",
    "method": "setLobbyState",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LobbyV2",
    "typeScriptTag": "lobbyV2",
    "description": "Set the state of a lobby. State is intended to be set by the server and must be smaller than 1MB. Use this endpoint to store match data like live player count to enforce max number of clients or persist end-game data (i.e. winner or final scores).",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2swovpy1fnunu"
      },
      {
        "name": "state",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A lobby object allows you to store and manage metadata for your rooms."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/lobby/v3/{appId}/create",
    "method": "createNewLobby",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LobbyV3",
    "typeScriptTag": "lobbyV3",
    "description": "Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "shortCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LFG4"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2swovpy1fnunu"
      },
      {
        "name": "visibility",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "private"
      },
      {
        "name": "roomConfig",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "{\"name\":\"my-room\"}"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A lobby object allows you to store and manage metadata for your rooms."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/lobby/v3/{appId}/list/public",
    "method": "listPublicLobbies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LobbyV3",
    "typeScriptTag": "lobbyV3",
    "description": "Get all active lobbies for a given [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "If omitted, active public lobbies in all regions will be returned."
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
    "url": "/lobby/v3/{appId}/info/roomid/{roomId}",
    "method": "getLobbyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LobbyV3",
    "typeScriptTag": "lobbyV3",
    "description": "Get details for a lobby.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2swovpy1fnunu"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A lobby object allows you to store and manage metadata for your rooms."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/lobby/v3/{appId}/info/shortcode/{shortCode}",
    "method": "getInfoByShortCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LobbyV3",
    "typeScriptTag": "lobbyV3",
    "description": "Get details for a lobby. If 2 or more lobbies have the same `shortCode`, then the most recently created lobby will be returned.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "shortCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LFG4"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A lobby object allows you to store and manage metadata for your rooms."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/logs/v1/{appId}/all",
    "method": "getAllLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LogV1",
    "typeScriptTag": "logV1",
    "description": "Returns a stream of logs for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "follow",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": "false"
      },
      {
        "name": "tailLines",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 100,
        "default": "100"
      },
      {
        "name": "region",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/logs/v1/{appId}/process/{processId}",
    "method": "streamLogsForProcess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LogV1",
    "typeScriptTag": "logV1",
    "description": "Returns a stream of logs for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cbfcddd2-0006-43ae-996c-995fff7bed2e"
      },
      {
        "name": "follow",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": "false"
      },
      {
        "name": "tailLines",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 100,
        "default": "100"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "410",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/logs/v1/{appId}/process/{processId}/download",
    "method": "downloadLogForProcess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LogV1",
    "typeScriptTag": "logV1",
    "description": "Download entire log file for a stopped process.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cbfcddd2-0006-43ae-996c-995fff7bed2e"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "410",
        "description": ""
      }
    ]
  },
  {
    "url": "/logs/v1/{appId}/deployment/{deploymentId}",
    "method": "getLogStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LogV1",
    "typeScriptTag": "logV1",
    "description": "Returns a stream of logs for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) using `appId` and `deploymentId`.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "deploymentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "follow",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": "false"
      },
      {
        "name": "tailLines",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 100,
        "default": "100"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/management/v1/sendverificationemail",
    "method": "sendVerificationEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ManagementV1",
    "typeScriptTag": "managementV1",
    "description": "",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/v1/{appId}/process/{processId}",
    "method": "getProcessMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "MetricsV1",
    "typeScriptTag": "metricsV1",
    "description": "Get metrics for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cbfcddd2-0006-43ae-996c-995fff7bed2e"
      },
      {
        "name": "metrics",
        "schema": "array",
        "required": false,
        "description": "Available metrics to query over time.",
        "default": [
          "cpu",
          "memory",
          "rate_egress"
        ]
      },
      {
        "name": "end",
        "schema": "number",
        "required": false,
        "description": "Unix timestamp. Default is current time."
      },
      {
        "name": "start",
        "schema": "number",
        "required": false,
        "description": "Unix timestamp. Default is -1 hour from `end`."
      },
      {
        "name": "step",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "60"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Construct a type with a set of properties K of type T"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/processes/v1/{appId}/list/running",
    "method": "listRunningProcesses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProcessesV1",
    "typeScriptTag": "processesV1",
    "description": "Retrieve 10 most recently started [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "region",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/processes/v1/{appId}/list/stopped",
    "method": "getRecentlyStoppedProcesses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProcessesV1",
    "typeScriptTag": "processesV1",
    "description": "Retrieve 10 most recently stopped [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "region",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/processes/v1/{appId}/info/{processId}",
    "method": "getProcessInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProcessesV1",
    "typeScriptTag": "processesV1",
    "description": "Get details for a [process](https://hathora.dev/docs/concepts/hathora-entities#process).",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cbfcddd2-0006-43ae-996c-995fff7bed2e"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A process object represents a runtime instance of your game server and its metadata."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/processes/v2/{appId}/info/{processId}",
    "method": "getProcessInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProcessesV2",
    "typeScriptTag": "processesV2",
    "description": "Get details for a [process](https://hathora.dev/docs/concepts/hathora-entities#process).",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cbfcddd2-0006-43ae-996c-995fff7bed2e"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/processes/v2/{appId}/list/latest",
    "method": "getLatestProcessesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProcessesV2",
    "typeScriptTag": "processesV2",
    "description": "Retrieve the 10 most recent [processes](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `status` or `region`.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "region",
        "schema": "array",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/processes/v2/{appId}/stop/{processId}",
    "method": "stopProcessById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProcessesV2",
    "typeScriptTag": "processesV2",
    "description": "Stops a [process](https://hathora.dev/docs/concepts/hathora-entities#process) immediately.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cbfcddd2-0006-43ae-996c-995fff7bed2e"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/processes/v2/{appId}/create/{region}",
    "method": "createProcessWithoutRoom",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProcessesV2",
    "typeScriptTag": "processesV2",
    "description": "Creates a [process](https://hathora.dev/docs/concepts/hathora-entities#process) without a room. Use this to pre-allocate processes ahead of time so that subsequent room assignment via [CreateRoom()](https://hathora.dev/api#tag/RoomV2/operation/CreateRoom) can be instant.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v1/{appId}/create",
    "method": "createRoom",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RoomV1",
    "typeScriptTag": "roomV1",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2swovpy1fnunu"
      },
      {
        "name": "roomConfig",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "{\"name\":\"my-room\"}"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.\nNote: error will be returned if `roomId` is not globally unique."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v1/{appId}/info/{roomId}",
    "method": "getRoomInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RoomV1",
    "typeScriptTag": "roomV1",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2swovpy1fnunu"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A room object represents a game session or match."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v1/{appId}/list/{processId}/active",
    "method": "getActiveRooms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RoomV1",
    "typeScriptTag": "roomV1",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cbfcddd2-0006-43ae-996c-995fff7bed2e"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v1/{appId}/list/{processId}/inactive",
    "method": "getInactiveRooms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RoomV1",
    "typeScriptTag": "roomV1",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cbfcddd2-0006-43ae-996c-995fff7bed2e"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v1/{appId}/destroy/{roomId}",
    "method": "destroyRoom",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RoomV1",
    "typeScriptTag": "roomV1",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2swovpy1fnunu"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v1/{appId}/suspend/{roomId}",
    "method": "suspendRoom",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RoomV1",
    "typeScriptTag": "roomV1",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2swovpy1fnunu"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v1/{appId}/connectioninfo/{roomId}",
    "method": "getConnectionInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RoomV1",
    "typeScriptTag": "roomV1",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2swovpy1fnunu"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Connection information to the default port."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v2/{appId}/create",
    "method": "createRoom",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RoomV2",
    "typeScriptTag": "roomV2",
    "description": "Create a new [room](https://hathora.dev/docs/concepts/hathora-entities#room) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application). Poll the [`GetConnectionInfo()`](https://hathora.dev/api#tag/RoomV2/operation/GetConnectionInfo) endpoint to get connection details for an active room.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2swovpy1fnunu"
      },
      {
        "name": "roomConfig",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "{\"name\":\"my-room\"}"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v2/{appId}/info/{roomId}",
    "method": "getAllocationData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RoomV2",
    "typeScriptTag": "roomV2",
    "description": "Retreive current and historical allocation data for a [room](https://hathora.dev/docs/concepts/hathora-entities#room).",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2swovpy1fnunu"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A room object represents a game session or match."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v2/{appId}/list/{processId}/active",
    "method": "listActiveRooms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RoomV2",
    "typeScriptTag": "roomV2",
    "description": "Get all active [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process).",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cbfcddd2-0006-43ae-996c-995fff7bed2e"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v2/{appId}/list/{processId}/inactive",
    "method": "listInactiveRooms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RoomV2",
    "typeScriptTag": "roomV2",
    "description": "Get all inactive [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process).",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cbfcddd2-0006-43ae-996c-995fff7bed2e"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v2/{appId}/destroy/{roomId}",
    "method": "destroyRoomAllocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RoomV2",
    "typeScriptTag": "roomV2",
    "description": "Destroy a [room](https://hathora.dev/docs/concepts/hathora-entities#room). All associated metadata is deleted.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2swovpy1fnunu"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v2/{appId}/suspend/{roomId}",
    "method": "suspendRoomAllocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RoomV2",
    "typeScriptTag": "roomV2",
    "description": "Suspend a [room](https://hathora.dev/docs/concepts/hathora-entities#room). The room is unallocated from the process but can be rescheduled later using the same `roomId`.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2swovpy1fnunu"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v2/{appId}/connectioninfo/{roomId}",
    "method": "getConnectionInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RoomV2",
    "typeScriptTag": "roomV2",
    "description": "Poll this endpoint to get connection details to a [room](https://hathora.dev/docs/concepts/hathora-entities#room). Clients can call this endpoint without authentication.",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2swovpy1fnunu"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Connection information for the default and additional ports."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/rooms/v2/{appId}/update/{roomId}",
    "method": "updateRoomAllocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RoomV2",
    "typeScriptTag": "roomV2",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "app-af469a92-5b45-4565-b3c4-b79878de67d2"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2swovpy1fnunu"
      },
      {
        "name": "roomConfig",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "{\"name\":\"my-room\"}"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tokens/v1/orgs/{orgId}",
    "method": "listOrgTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrgTokensV1",
    "typeScriptTag": "orgTokensV1",
    "description": "List all organization tokens for a given org.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tokens/v1/orgs/{orgId}/create",
    "method": "createNewOrgToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OrgTokensV1",
    "typeScriptTag": "orgTokensV1",
    "description": "Create a new organization token.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ci-token"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/tokens/v1/orgs/{orgId}/tokens/{orgTokenId}/revoke",
    "method": "revokeOrgToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OrgTokensV1",
    "typeScriptTag": "orgTokensV1",
    "description": "Revoke an organization token.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39"
      },
      {
        "name": "orgTokenId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Hathora Cloud API"
      apiBaseUrl="https://api.hathora.dev"
      apiVersion="0.0.1"
      endpoints={67}
      sdkMethods={67}
      schemas={104}
      parameters={157}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hathora/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hathora/openapi.yaml"
      developerDocumentation="hathora.dev/api"
    />
  );
}
  