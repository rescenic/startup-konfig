import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AppwriteConsoleTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="appwrite-console-typescript-sdk"
      metaDescription={`Appwrite's open-source development platform lets you build any application at any scale, own your data, and use your preferred coding languages and tools.

Build like a team of hundreds.`}
      company="Appwrite"
      serviceName="Console"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/console/logo.png"
      clientNameCamelCase="appwriteConsole"
      homepage="appwrite.io"
      lastUpdated={new Date("2024-03-13T02:25:22.175Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/console/favicon.png"
      contactUrl="https://appwrite.io/support"
      contactEmail="team@appwrite.io"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/console/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["developer_tools","open_source","storage","platform","data_ownership","db","database","auth","functions"]}
      methods={[
  {
    "url": "/account",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Delete account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/account",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Get account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create account",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/email",
    "method": "updateEmailAddress",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update email",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/identities",
    "method": "listIdentities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "List Identities",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Identities List"
      }
    ]
  },
  {
    "url": "/account/identities/{identityId}",
    "method": "deleteIdentityById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Delete identity",
    "parameters": [
      {
        "name": "identityId",
        "schema": "string",
        "required": true,
        "description": "Identity ID.",
        "example": "IDENTITYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/account/jwt",
    "method": "createJwt",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create JWT",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "JWT"
      }
    ]
  },
  {
    "url": "/account/logs",
    "method": "listUserLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "List logs",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/account/mfa",
    "method": "updateMfaStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update MFA",
    "parameters": [
      {
        "name": "mfa",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/mfa/authenticators/{type}",
    "method": "deleteAuthenticatorById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Delete Authenticator",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of authenticator.",
        "example": "TYPE"
      },
      {
        "name": "otp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OTP"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/mfa/authenticators/{type}",
    "method": "addAuthenticatorApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Add Authenticator",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of authenticator. Must be `totp`",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFAType"
      }
    ]
  },
  {
    "url": "/account/mfa/authenticators/{type}",
    "method": "verifyAuthenticator",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Verify Authenticator",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of authenticator.",
        "example": "TYPE"
      },
      {
        "name": "otp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OTP"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/mfa/challenge",
    "method": "createMfaChallenge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create 2FA Challenge",
    "parameters": [
      {
        "name": "factor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FACTOR"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "MFA Challenge"
      }
    ]
  },
  {
    "url": "/account/mfa/challenge",
    "method": "completeMfaChallenge",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create MFA Challenge (confirmation)",
    "parameters": [
      {
        "name": "challengeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHALLENGEID"
      },
      {
        "name": "otp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OTP"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/mfa/factors",
    "method": "listMfaFactors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "List Factors",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFAFactors"
      }
    ]
  },
  {
    "url": "/account/mfa/recovery-codes",
    "method": "getMfaRecoveryCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Get MFA Recovery Codes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFA Recovery Codes"
      }
    ]
  },
  {
    "url": "/account/mfa/recovery-codes",
    "method": "regenerateMfaRecoveryCodes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Regenerate MFA Recovery Codes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFA Recovery Codes"
      }
    ]
  },
  {
    "url": "/account/mfa/recovery-codes",
    "method": "generateRecoveryCodes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create MFA Recovery Codes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "MFA Recovery Codes"
      }
    ]
  },
  {
    "url": "/account/name",
    "method": "updateName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update name",
    "parameters": [
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
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/password",
    "method": "updatePassword",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update password",
    "parameters": [
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "oldPassword",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/phone",
    "method": "updatePhone",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update phone",
    "parameters": [
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/prefs",
    "method": "getPrefsOperation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Get account preferences",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Preferences"
      }
    ]
  },
  {
    "url": "/account/prefs",
    "method": "updatePrefsOperation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update preferences",
    "parameters": [
      {
        "name": "prefs",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/recovery",
    "method": "createPasswordRecovery",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create password recovery",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/recovery",
    "method": "completePasswordRecovery",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create password recovery (confirmation)",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/sessions",
    "method": "deleteSessions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Delete sessions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/account/sessions",
    "method": "listSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "List sessions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sessions List"
      }
    ]
  },
  {
    "url": "/account/sessions/anonymous",
    "method": "createAnonymousSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create anonymous session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/sessions/email",
    "method": "createEmailPasswordSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create email password session",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/sessions/magic-url",
    "method": "updateMagicUrlSession",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update magic URL session",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/sessions/oauth2/{provider}",
    "method": "createOAuth2Session",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create OAuth2 session",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.",
        "example": "PROVIDER"
      },
      {
        "name": "success",
        "schema": "string",
        "required": false,
        "description": "URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.",
        "default": ""
      },
      {
        "name": "failure",
        "schema": "string",
        "required": false,
        "description": "URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.",
        "default": ""
      },
      {
        "name": "scopes",
        "schema": "array",
        "required": false,
        "description": "A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "File"
      }
    ]
  },
  {
    "url": "/account/sessions/phone",
    "method": "updatePhoneSession",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update phone session",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/sessions/token",
    "method": "createSessionFromToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create session",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/sessions/{sessionId}",
    "method": "logoutSession",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Delete session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Session ID. Use the string 'current' to delete the current device session.",
        "example": "SESSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/account/sessions/{sessionId}",
    "method": "getSession",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Get session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Session ID. Use the string 'current' to get the current device session.",
        "example": "SESSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/sessions/{sessionId}",
    "method": "extendSessionLength",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Session ID. Use the string 'current' to update the current device session.",
        "example": "SESSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/status",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update status",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/targets/push",
    "method": "createPushTarget",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create push target",
    "parameters": [
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETID"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      },
      {
        "name": "providerId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Target"
      }
    ]
  },
  {
    "url": "/account/targets/{targetId}/push",
    "method": "deletePushTarget",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Delete push target",
    "parameters": [
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "Target ID.",
        "example": "TARGETID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Target"
      }
    ]
  },
  {
    "url": "/account/targets/{targetId}/push",
    "method": "updatePushTarget",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update push target",
    "parameters": [
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "Target ID.",
        "example": "TARGETID"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Target"
      }
    ]
  },
  {
    "url": "/account/tokens/email",
    "method": "createEmailToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create email token (OTP)",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "phrase",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/tokens/magic-url",
    "method": "createMagicUrlToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create magic URL token",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phrase",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/tokens/oauth2/{provider}",
    "method": "createOAuth2Token",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create OAuth2 token",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.",
        "example": "PROVIDER"
      },
      {
        "name": "success",
        "schema": "string",
        "required": false,
        "description": "URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.",
        "default": ""
      },
      {
        "name": "failure",
        "schema": "string",
        "required": false,
        "description": "URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.",
        "default": ""
      },
      {
        "name": "scopes",
        "schema": "array",
        "required": false,
        "description": "A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "File"
      }
    ]
  },
  {
    "url": "/account/tokens/phone",
    "method": "createPhoneToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create phone token",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/verification",
    "method": "createEmailVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create email verification",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/verification",
    "method": "completeEmailVerification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create email verification (confirmation)",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/verification/phone",
    "method": "sendVerificationSms",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create phone verification",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/verification/phone",
    "method": "confirmPhoneVerification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create phone verification (confirmation)",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/avatars/browsers/{code}",
    "method": "getBrowserIcon",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get browser icon",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Browser Code.",
        "example": "CODE"
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Image width. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 100
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Image height. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 100
      },
      {
        "name": "quality",
        "schema": "integer",
        "required": false,
        "description": "Image quality. Pass an integer between 0 to 100. Defaults to 100.",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/avatars/credit-cards/{code}",
    "method": "getCreditCardIcon",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get credit card icon",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Credit Card Code. Possible values: amex, argencard, cabal, censosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, union-china-pay, visa, mir, maestro.",
        "example": "CODE"
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Image width. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 100
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Image height. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 100
      },
      {
        "name": "quality",
        "schema": "integer",
        "required": false,
        "description": "Image quality. Pass an integer between 0 to 100. Defaults to 100.",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/avatars/favicon",
    "method": "getFavicon",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get favicon",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "Website URL which you want to fetch the favicon from.",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/avatars/flags/{code}",
    "method": "getFlagByCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get country flag",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Country Code. ISO Alpha-2 country code format.",
        "example": "CODE"
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Image width. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 100
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Image height. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 100
      },
      {
        "name": "quality",
        "schema": "integer",
        "required": false,
        "description": "Image quality. Pass an integer between 0 to 100. Defaults to 100.",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/avatars/image",
    "method": "getImageUrlAndCrop",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get image from URL",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "Image URL which you want to crop.",
        "example": "URL"
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Resize preview image width, Pass an integer between 0 to 2000. Defaults to 400.",
        "default": 400
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Resize preview image height, Pass an integer between 0 to 2000. Defaults to 400.",
        "default": 400
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/avatars/initials",
    "method": "getUserInitials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get user initials",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Full Name. When empty, current user name or email will be used. Max length: 128 chars.",
        "default": ""
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Image width. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 500
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Image height. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 500
      },
      {
        "name": "background",
        "schema": "string",
        "required": false,
        "description": "Changes background color. By default a random color will be picked and stay will persistent to the given name.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/avatars/qr",
    "method": "generateQrCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get QR code",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "Plain text to be converted to QR code image.",
        "example": "TEXT"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "QR code size. Pass an integer between 1 to 1000. Defaults to 400.",
        "default": 400
      },
      {
        "name": "margin",
        "schema": "integer",
        "required": false,
        "description": "Margin from edge. Pass an integer between 0 to 10. Defaults to 1.",
        "default": 1
      },
      {
        "name": "download",
        "schema": "boolean",
        "required": false,
        "description": "Return resulting image with 'Content-Disposition: attachment ' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/console/assistant",
    "method": "askQuery",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assistant",
    "typeScriptTag": "assistant",
    "description": "Ask Query",
    "parameters": [
      {
        "name": "prompt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROMPT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File"
      }
    ]
  },
  {
    "url": "/console/variables",
    "method": "listVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "console",
    "typeScriptTag": "console",
    "description": "Get variables",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Console Variables"
      }
    ]
  },
  {
    "url": "/databases",
    "method": "listAllDatabases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List databases",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Databases List"
      }
    ]
  },
  {
    "url": "/databases",
    "method": "createNewDatabase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create database",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATABASEID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Database"
      }
    ]
  },
  {
    "url": "/databases/usage",
    "method": "getUsageStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Get databases usage stats",
    "parameters": [
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "`Date range.",
        "default": "30d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "UsageDatabases"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Delete database",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Get database",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Database"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update database",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Database"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections",
    "method": "listCollections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List collections",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Collections List"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections",
    "method": "createCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create collection",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "documentSecurity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Collection"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}",
    "method": "deleteCollectionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Delete collection",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID.",
        "example": "COLLECTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}",
    "method": "getCollectionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Get collection",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID.",
        "example": "COLLECTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Collection"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}",
    "method": "updateCollectionById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update collection",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID.",
        "example": "COLLECTIONID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "documentSecurity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Collection"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes",
    "method": "listAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List attributes",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, size, required, array, status, error",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Attributes List"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/boolean",
    "method": "createBooleanAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create boolean attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeBoolean"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/boolean/{key}",
    "method": "updateBooleanAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update boolean attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key.",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeBoolean"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/datetime",
    "method": "createDatetimeAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create datetime attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeDatetime"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/datetime/{key}",
    "method": "patchDateTimeAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update dateTime attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key.",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEFAULT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeDatetime"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/email",
    "method": "createEmailAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create email attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeEmail"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/email/{key}",
    "method": "updateEmailAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update email attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key.",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEFAULT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeEmail"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/enum",
    "method": "createEnumAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create enum attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "elements",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeEnum"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/enum/{key}",
    "method": "updateEnumAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update enum attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key.",
        "example": "KEY"
      },
      {
        "name": "elements",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEFAULT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeEnum"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/float",
    "method": "createFloatAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create float attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "min",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "max",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "default",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeFloat"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/float/{key}",
    "method": "updateFloatAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update float attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key.",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "min",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "max",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "default",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeFloat"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/integer",
    "method": "createIntegerAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create integer attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "min",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "max",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "default",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeInteger"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/integer/{key}",
    "method": "updateIntegerAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update integer attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key.",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "min",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "max",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "default",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeInteger"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/ip",
    "method": "createIpAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create IP address attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeIP"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/ip/{key}",
    "method": "updateIpAddressAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update IP address attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key.",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEFAULT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeIP"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/relationship",
    "method": "createRelationshipAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create relationship attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "relatedCollectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RELATEDCOLLECTIONID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "twoWay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "twoWayKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "onDelete",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeRelationship"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/string",
    "method": "createStringAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create string attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "encrypt",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeString"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/string/{key}",
    "method": "updateStringAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update string attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key.",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEFAULT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeString"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/url",
    "method": "createUrlAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create URL attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeURL"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/url/{key}",
    "method": "updateUrlAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update URL attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key.",
        "example": "KEY"
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "default",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEFAULT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeURL"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/{key}",
    "method": "deleteAttributeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Delete attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key.",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/{key}",
    "method": "getAttributeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Get attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key.",
        "example": "KEY"
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
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/{key}/relationship",
    "method": "updateRelationshipAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update relationship attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key.",
        "example": "KEY"
      },
      {
        "name": "onDelete",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeRelationship"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/documents",
    "method": "getDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List documents",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Documents List"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/documents",
    "method": "createDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create document",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.",
        "example": "COLLECTIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENTID"
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Document"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}",
    "method": "deleteDocumentById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Delete document",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "Document ID.",
        "example": "DOCUMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}",
    "method": "getDocumentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Get document",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "Document ID.",
        "example": "DOCUMENTID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Document"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}",
    "method": "updateDocumentById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update document",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID.",
        "example": "COLLECTIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "Document ID.",
        "example": "DOCUMENTID"
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Document"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/logs",
    "method": "listDocumentLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List document logs",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID.",
        "example": "COLLECTIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "Document ID.",
        "example": "DOCUMENTID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/indexes",
    "method": "listCollectionIndexes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List indexes",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Indexes List"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/indexes",
    "method": "createIndexOnAttributes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create index",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "attributes",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "orders",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Index"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/indexes/{key}",
    "method": "deleteIndexByKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Delete index",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Index Key.",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/indexes/{key}",
    "method": "getIndexById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Get index",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Index Key.",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Index"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/logs",
    "method": "listCollectionLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List collection logs",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID.",
        "example": "COLLECTIONID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/usage",
    "method": "getCollectionUsageStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Get collection usage stats",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "Date range.",
        "default": "30d"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID.",
        "example": "COLLECTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "UsageCollection"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/logs",
    "method": "listLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List database logs",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/usage",
    "method": "getUsageStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Get database usage stats",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "`Date range.",
        "default": "30d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "UsageDatabase"
      }
    ]
  },
  {
    "url": "/functions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "List functions",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deployment, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Functions List"
      }
    ]
  },
  {
    "url": "/functions",
    "method": "createFunction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Create function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FUNCTIONID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "runtime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RUNTIME"
      },
      {
        "name": "execute",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timeout",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "logging",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "entrypoint",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "commands",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "installationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerRepositoryId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerBranch",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerSilentMode",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "providerRootDirectory",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "templateRepository",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "templateOwner",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "templateRootDirectory",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "templateBranch",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Function"
      }
    ]
  },
  {
    "url": "/functions/runtimes",
    "method": "listRuntimes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "List runtimes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Runtimes List"
      }
    ]
  },
  {
    "url": "/functions/usage",
    "method": "getUsageStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Get functions usage",
    "parameters": [
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "Date range.",
        "default": "30d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "UsageFunctions"
      }
    ]
  },
  {
    "url": "/functions/{functionId}",
    "method": "deleteFunctionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Delete function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/functions/{functionId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Get function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Function"
      }
    ]
  },
  {
    "url": "/functions/{functionId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Update function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "runtime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "execute",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timeout",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "logging",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "entrypoint",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "commands",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "installationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerRepositoryId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerBranch",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerSilentMode",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "providerRootDirectory",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Function"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments",
    "method": "listDeployments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "List deployments",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: size, buildId, activate, entrypoint, commands",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Deployments List"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments",
    "method": "createDeployment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Create deployment",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "entrypoint",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "commands",
        "schema": "string",
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
        "name": "activate",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Deployment"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments/{deploymentId}",
    "method": "deleteDeployment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Delete deployment",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "Deployment ID.",
        "example": "DEPLOYMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments/{deploymentId}",
    "method": "getDeploymentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Get deployment",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "Deployment ID.",
        "example": "DEPLOYMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Deployment"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments/{deploymentId}",
    "method": "updateDeploymentByFunctionAndId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Update function deployment",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "Deployment ID.",
        "example": "DEPLOYMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Function"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments/{deploymentId}/builds/{buildId}",
    "method": "retryBuild",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Create build",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "Deployment ID.",
        "example": "DEPLOYMENTID"
      },
      {
        "name": "buildId",
        "schema": "string",
        "required": true,
        "description": "Build unique ID.",
        "example": "BUILDID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments/{deploymentId}/download",
    "method": "downloadDeploymentContents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Download Deployment",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "Deployment ID.",
        "example": "DEPLOYMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/executions",
    "method": "listExecutions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "List executions",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Executions List"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/executions",
    "method": "triggerExecution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Create execution",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "async",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "path",
        "schema": "string",
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headers",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Execution"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/executions/{executionId}",
    "method": "getExecutionLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Get execution",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "executionId",
        "schema": "string",
        "required": true,
        "description": "Execution ID.",
        "example": "EXECUTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Execution"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/usage",
    "method": "getFunctionUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Get function usage",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "Date range.",
        "default": "30d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "UsageFunction"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/variables",
    "method": "listVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "List variables",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function unique ID.",
        "example": "FUNCTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Variables List"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/variables",
    "method": "createVariable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Create variable",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function unique ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Variable"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/variables/{variableId}",
    "method": "deleteVariableById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Delete variable",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function unique ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "variableId",
        "schema": "string",
        "required": true,
        "description": "Variable unique ID.",
        "example": "VARIABLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/variables/{variableId}",
    "method": "getVariableById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Get variable",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function unique ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "variableId",
        "schema": "string",
        "required": true,
        "description": "Variable unique ID.",
        "example": "VARIABLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Variable"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/variables/{variableId}",
    "method": "updateVariableById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Update variable",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function unique ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "variableId",
        "schema": "string",
        "required": true,
        "description": "Variable unique ID.",
        "example": "VARIABLEID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Variable"
      }
    ]
  },
  {
    "url": "/graphql",
    "method": "executeMutation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "graphql",
    "typeScriptTag": "graphql",
    "description": "GraphQL endpoint",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Any"
      }
    ]
  },
  {
    "url": "/graphql/mutation",
    "method": "executeMutation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "graphql",
    "typeScriptTag": "graphql",
    "description": "GraphQL endpoint",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Any"
      }
    ]
  },
  {
    "url": "/health",
    "method": "checkAppwriteHttpServer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get HTTP",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/anti-virus",
    "method": "checkAvStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get antivirus",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Antivirus"
      }
    ]
  },
  {
    "url": "/health/cache",
    "method": "checkCacheStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get cache",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/certificate",
    "method": "getSslCertificate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get the SSL certificate for a domain",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": false,
        "description": "string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Certificate"
      }
    ]
  },
  {
    "url": "/health/db",
    "method": "checkDatabaseStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get DB",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/pubsub",
    "method": "pubsubGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get pubsub",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/queue",
    "method": "checkQueueStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get queue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/queue/builds",
    "method": "getBuildsQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get builds queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.",
        "default": 5000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/certificates",
    "method": "certificatesQueueCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get certificates queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.",
        "default": 5000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/databases",
    "method": "getDatabasesQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get databases queue",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Queue name for which to check the queue size",
        "default": "database_db_main"
      },
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.",
        "default": 5000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/deletes",
    "method": "getQueueDeletes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get deletes queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.",
        "default": 5000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/failed/{name}",
    "method": "getFailedJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get number of failed queue jobs",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The name of the queue",
        "example": "NAME"
      },
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.",
        "default": 5000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/functions",
    "method": "functionsQueueCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get functions queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.",
        "default": 5000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/logs",
    "method": "getQueueLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get logs queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.",
        "default": 5000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/mails",
    "method": "getMailsQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get mails queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.",
        "default": 5000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/messaging",
    "method": "getMessagingQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get messaging queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.",
        "default": 5000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/migrations",
    "method": "getMigrationsQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get migrations queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.",
        "default": 5000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/usage",
    "method": "getQueueUsageMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get usage queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.",
        "default": 5000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/usage-dump",
    "method": "getUsageDumpQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get usage dump queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.",
        "default": 5000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/webhooks",
    "method": "webhooksQueueCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get webhooks queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.",
        "default": 5000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/storage",
    "method": "checkStorageDevice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get storage",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/storage/local",
    "method": "checkLocalStorage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get local storage",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/time",
    "method": "syncTimeWithNtp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get time",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Time"
      }
    ]
  },
  {
    "url": "/locale",
    "method": "getUserLocaleDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "Get user locale",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Locale"
      }
    ]
  },
  {
    "url": "/locale/codes",
    "method": "listCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List Locale Codes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Locale codes list"
      }
    ]
  },
  {
    "url": "/locale/continents",
    "method": "listContinents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List continents",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Continents List"
      }
    ]
  },
  {
    "url": "/locale/countries",
    "method": "listCountries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List countries",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Countries List"
      }
    ]
  },
  {
    "url": "/locale/countries/eu",
    "method": "listEuCountries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List EU countries",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Countries List"
      }
    ]
  },
  {
    "url": "/locale/countries/phones",
    "method": "listCountriesPhones",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List countries phone codes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Phones List"
      }
    ]
  },
  {
    "url": "/locale/currencies",
    "method": "listCurrencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List currencies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Currencies List"
      }
    ]
  },
  {
    "url": "/locale/languages",
    "method": "listLanguages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List languages",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Languages List"
      }
    ]
  },
  {
    "url": "/messaging/messages",
    "method": "listAllMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List messages",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: scheduledAt, deliveredAt, deliveredTotal, status, description, providerType",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Message list"
      }
    ]
  },
  {
    "url": "/messaging/messages/email",
    "method": "createEmailMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create email",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGEID"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "topics",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "targets",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bcc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "html",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/email/{messageId}",
    "method": "updateEmailById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update email",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID.",
        "example": "MESSAGEID"
      },
      {
        "name": "topics",
        "schema": "array",
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "description": ""
      },
      {
        "name": "targets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "html",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "cc",
        "schema": "array",
        "description": ""
      },
      {
        "name": "bcc",
        "schema": "array",
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/push",
    "method": "createPushNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create push notification",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGEID"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "topics",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "targets",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "image",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sound",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "badge",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/push/{messageId}",
    "method": "updatePushMessage",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update push notification",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID.",
        "example": "MESSAGEID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "topics",
        "schema": "array",
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "description": ""
      },
      {
        "name": "targets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "image",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sound",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "badge",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/sms",
    "method": "createSmsMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create SMS",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGEID"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "topics",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "targets",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/sms/{messageId}",
    "method": "updateSmsMessageById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update SMS",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID.",
        "example": "MESSAGEID"
      },
      {
        "name": "topics",
        "schema": "array",
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "description": ""
      },
      {
        "name": "targets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/{messageId}",
    "method": "deleteMessage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Delete message",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID.",
        "example": "MESSAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/messaging/messages/{messageId}",
    "method": "getMessageById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Get message",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID.",
        "example": "MESSAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/{messageId}/logs",
    "method": "listMessageLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List message logs",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID.",
        "example": "MESSAGEID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/messaging/messages/{messageId}/targets",
    "method": "listTargets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List message targets",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID.",
        "example": "MESSAGEID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Target list"
      }
    ]
  },
  {
    "url": "/messaging/providers",
    "method": "listProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List providers",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider list"
      }
    ]
  },
  {
    "url": "/messaging/providers/apns",
    "method": "createApnsProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create APNS provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "authKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "authKeyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "teamId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bundleId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sandbox",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/apns/{providerId}",
    "method": "updateApnsProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update APNS provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID.",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "authKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authKeyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bundleId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sandbox",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/fcm",
    "method": "createFcmProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create FCM provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "serviceAccountJSON",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/fcm/{providerId}",
    "method": "updateFcmProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update FCM provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID.",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "serviceAccountJSON",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/mailgun",
    "method": "createMailgunProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Mailgun provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isEuRegion",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fromName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyToName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyToEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/mailgun/{providerId}",
    "method": "updateMailgunProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Mailgun provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID.",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isEuRegion",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "fromName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyToEmail",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/msg91",
    "method": "createMsgProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Msg91 provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "senderId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "authKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/msg91/{providerId}",
    "method": "updateProviderById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Msg91 provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID.",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "senderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/sendgrid",
    "method": "createSendgridProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Sendgrid provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyToName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyToEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/sendgrid/{providerId}",
    "method": "updateSendgridProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Sendgrid provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID.",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyToEmail",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/smtp",
    "method": "createSmtpProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create SMTP provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "host",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HOST"
      },
      {
        "name": "port",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "encryption",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "autoTLS",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "mailer",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyToName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyToEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/smtp/{providerId}",
    "method": "updateSmtpProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update SMTP provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID.",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "host",
        "schema": "string",
        "description": ""
      },
      {
        "name": "port",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "encryption",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoTLS",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "mailer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyToEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/telesign",
    "method": "createTelesignProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Telesign provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/telesign/{providerId}",
    "method": "updateTelesignProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Telesign provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID.",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/textmagic",
    "method": "createTextmagicProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Textmagic provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/textmagic/{providerId}",
    "method": "updateTextmagicProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Textmagic provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID.",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/twilio",
    "method": "createTwilioProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Twilio provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountSid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "authToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/twilio/{providerId}",
    "method": "updateTwilioProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Twilio provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID.",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "accountSid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authToken",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/vonage",
    "method": "createVonageProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Vonage provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiSecret",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/vonage/{providerId}",
    "method": "updateVonageProviderById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Vonage provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID.",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiSecret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/{providerId}",
    "method": "deleteProviderById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Delete provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID.",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/messaging/providers/{providerId}",
    "method": "getProviderById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Get provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID.",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/{providerId}/logs",
    "method": "listProviderLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List provider logs",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID.",
        "example": "PROVIDERID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/messaging/subscribers/{subscriberId}/logs",
    "method": "listSubscriberLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List subscriber logs",
    "parameters": [
      {
        "name": "subscriberId",
        "schema": "string",
        "required": true,
        "description": "Subscriber ID.",
        "example": "SUBSCRIBERID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/messaging/topics",
    "method": "listTopics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List topics",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, description, emailTotal, smsTotal, pushTotal",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Topic list"
      }
    ]
  },
  {
    "url": "/messaging/topics",
    "method": "createNewTopic",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create topic",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOPICID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "subscribe",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Topic"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}",
    "method": "deleteTopicById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Delete topic",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID.",
        "example": "TOPICID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}",
    "method": "getTopicById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Get topic",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID.",
        "example": "TOPICID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Topic"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}",
    "method": "updateTopicById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update topic",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID.",
        "example": "TOPICID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribe",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Topic"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}/logs",
    "method": "listTopicLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List topic logs",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID.",
        "example": "TOPICID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}/subscribers",
    "method": "listSubscribers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List subscribers",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID. The topic ID subscribed to.",
        "example": "TOPICID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Subscriber list"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}/subscribers",
    "method": "createSubscriber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create subscriber",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID. The topic ID to subscribe to.",
        "example": "TOPICID"
      },
      {
        "name": "subscriberId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBSCRIBERID"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Subscriber"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}/subscribers/{subscriberId}",
    "method": "deleteSubscriberById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Delete subscriber",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID. The topic ID subscribed to.",
        "example": "TOPICID"
      },
      {
        "name": "subscriberId",
        "schema": "string",
        "required": true,
        "description": "Subscriber ID.",
        "example": "SUBSCRIBERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}/subscribers/{subscriberId}",
    "method": "getSubscriberById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Get subscriber",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID. The topic ID subscribed to.",
        "example": "TOPICID"
      },
      {
        "name": "subscriberId",
        "schema": "string",
        "required": true,
        "description": "Subscriber ID.",
        "example": "SUBSCRIBERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Subscriber"
      }
    ]
  },
  {
    "url": "/migrations",
    "method": "listMigrations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "List Migrations",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: status, stage, source, resources, statusCounters, resourceData, errors",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Migrations List"
      }
    ]
  },
  {
    "url": "/migrations/appwrite",
    "method": "createAppwriteMigration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Migrate Appwrite Data",
    "parameters": [
      {
        "name": "resources",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "endpoint",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDPOINT"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APIKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Migration"
      }
    ]
  },
  {
    "url": "/migrations/appwrite/report",
    "method": "generateReportOnAppwriteData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Generate a report on Appwrite Data",
    "parameters": [
      {
        "name": "resources",
        "schema": "array",
        "required": true,
        "description": "List of resources to migrate"
      },
      {
        "name": "endpoint",
        "schema": "string",
        "required": true,
        "description": "Source's Appwrite Endpoint",
        "example": "ENDPOINT"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Source's Project ID",
        "example": "PROJECTID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Source's API Key",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Migration Report"
      }
    ]
  },
  {
    "url": "/migrations/firebase",
    "method": "firebaseDataMigration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Migrate Firebase Data (Service Account)",
    "parameters": [
      {
        "name": "resources",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "serviceAccount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICEACCOUNT"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Migration"
      }
    ]
  },
  {
    "url": "/migrations/firebase/deauthorize",
    "method": "revokeFirebaseAuthorization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Revoke Appwrite's authorization to access Firebase Projects",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "File"
      }
    ]
  },
  {
    "url": "/migrations/firebase/oauth",
    "method": "firebaseOAuthMigrate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Migrate Firebase Data (OAuth)",
    "parameters": [
      {
        "name": "resources",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Migration"
      }
    ]
  },
  {
    "url": "/migrations/firebase/projects",
    "method": "listFirebaseProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "List Firebase Projects",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Migrations Firebase Projects List"
      }
    ]
  },
  {
    "url": "/migrations/firebase/report",
    "method": "generateFirebaseReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Generate a report on Firebase Data",
    "parameters": [
      {
        "name": "resources",
        "schema": "array",
        "required": true,
        "description": "List of resources to migrate"
      },
      {
        "name": "serviceAccount",
        "schema": "string",
        "required": true,
        "description": "JSON of the Firebase service account credentials",
        "example": "SERVICEACCOUNT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Migration Report"
      }
    ]
  },
  {
    "url": "/migrations/firebase/report/oauth",
    "method": "generateFirebaseReportOAuth",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Generate a report on Firebase Data using OAuth",
    "parameters": [
      {
        "name": "resources",
        "schema": "array",
        "required": true,
        "description": "List of resources to migrate"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID",
        "example": "PROJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Migration Report"
      }
    ]
  },
  {
    "url": "/migrations/nhost",
    "method": "createNHostMigration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Migrate NHost Data",
    "parameters": [
      {
        "name": "resources",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBDOMAIN"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      },
      {
        "name": "adminSecret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADMINSECRET"
      },
      {
        "name": "database",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATABASE"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "port",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Migration"
      }
    ]
  },
  {
    "url": "/migrations/nhost/report",
    "method": "generateNhostReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Generate a report on NHost Data",
    "parameters": [
      {
        "name": "resources",
        "schema": "array",
        "required": true,
        "description": "List of resources to migrate."
      },
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "Source's Subdomain.",
        "example": "SUBDOMAIN"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "Source's Region.",
        "example": "REGION"
      },
      {
        "name": "adminSecret",
        "schema": "string",
        "required": true,
        "description": "Source's Admin Secret.",
        "example": "ADMINSECRET"
      },
      {
        "name": "database",
        "schema": "string",
        "required": true,
        "description": "Source's Database Name.",
        "example": "DATABASE"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "Source's Database Username.",
        "example": "USERNAME"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "Source's Database Password.",
        "example": "PASSWORD"
      },
      {
        "name": "port",
        "schema": "integer",
        "required": false,
        "description": "Source's Database Port.",
        "default": 5432
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Migration Report"
      }
    ]
  },
  {
    "url": "/migrations/supabase",
    "method": "migrateSupabaseData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Migrate Supabase Data",
    "parameters": [
      {
        "name": "resources",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "endpoint",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDPOINT"
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APIKEY"
      },
      {
        "name": "databaseHost",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATABASEHOST"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "port",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Migration"
      }
    ]
  },
  {
    "url": "/migrations/supabase/report",
    "method": "generateSupabaseReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Generate a report on Supabase Data",
    "parameters": [
      {
        "name": "resources",
        "schema": "array",
        "required": true,
        "description": "List of resources to migrate"
      },
      {
        "name": "endpoint",
        "schema": "string",
        "required": true,
        "description": "Source's Supabase Endpoint.",
        "example": "ENDPOINT"
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "Source's API Key.",
        "example": "APIKEY"
      },
      {
        "name": "databaseHost",
        "schema": "string",
        "required": true,
        "description": "Source's Database Host.",
        "example": "DATABASEHOST"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "Source's Database Username.",
        "example": "USERNAME"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "Source's Database Password.",
        "example": "PASSWORD"
      },
      {
        "name": "port",
        "schema": "integer",
        "required": false,
        "description": "Source's Database Port.",
        "default": 5432
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Migration Report"
      }
    ]
  },
  {
    "url": "/migrations/{migrationId}",
    "method": "deleteMigration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Delete Migration",
    "parameters": [
      {
        "name": "migrationId",
        "schema": "string",
        "required": true,
        "description": "Migration ID.",
        "example": "MIGRATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/migrations/{migrationId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Get Migration",
    "parameters": [
      {
        "name": "migrationId",
        "schema": "string",
        "required": true,
        "description": "Migration unique ID.",
        "example": "MIGRATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Migration"
      }
    ]
  },
  {
    "url": "/migrations/{migrationId}",
    "method": "retryMigration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "migrations",
    "typeScriptTag": "migrations",
    "description": "Retry Migration",
    "parameters": [
      {
        "name": "migrationId",
        "schema": "string",
        "required": true,
        "description": "Migration unique ID.",
        "example": "MIGRATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Migration"
      }
    ]
  },
  {
    "url": "/project/usage",
    "method": "getUsageStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "Get project usage stats",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Starting date for the usage",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "End date for the usage",
        "example": "ENDDATE"
      },
      {
        "name": "period",
        "schema": "string",
        "required": false,
        "description": "Period used",
        "default": "1d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "UsageProject"
      }
    ]
  },
  {
    "url": "/project/variables",
    "method": "listVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "List Variables",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Variables List"
      }
    ]
  },
  {
    "url": "/project/variables",
    "method": "createVariable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "Create Variable",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Variable"
      }
    ]
  },
  {
    "url": "/project/variables/{variableId}",
    "method": "deleteVariableById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "Delete Variable",
    "parameters": [
      {
        "name": "variableId",
        "schema": "string",
        "required": true,
        "description": "Variable unique ID.",
        "example": "VARIABLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/project/variables/{variableId}",
    "method": "variableDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "Get Variable",
    "parameters": [
      {
        "name": "variableId",
        "schema": "string",
        "required": true,
        "description": "Variable unique ID.",
        "example": "VARIABLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Variable"
      }
    ]
  },
  {
    "url": "/project/variables/{variableId}",
    "method": "updateVariableById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "Update Variable",
    "parameters": [
      {
        "name": "variableId",
        "schema": "string",
        "required": true,
        "description": "Variable unique ID.",
        "example": "VARIABLEID"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Variable"
      }
    ]
  },
  {
    "url": "/projects",
    "method": "listProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "List projects",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, teamId",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Projects List"
      }
    ]
  },
  {
    "url": "/projects",
    "method": "createNewProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Create project",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAMID"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "logo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalState",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalCity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalTaxId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Delete project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/projects/{projectId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}",
    "method": "updateDetail",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
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
      },
      {
        "name": "logo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalState",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalCity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalTaxId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/api",
    "method": "updateApiStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update API status",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "api",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API"
      },
      {
        "name": "status",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/api/all",
    "method": "updateAllApiStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update all API status",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "status",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/auth/duration",
    "method": "updateAuthDuration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update project authentication duration",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "duration",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/auth/limit",
    "method": "updateUserLimit",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update project users limit",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/auth/max-sessions",
    "method": "updateMaxSessionsLimit",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update project user sessions limit",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/auth/password-dictionary",
    "method": "updateAuthPasswordDictionary",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update authentication password dictionary status. Use this endpoint to enable or disable the dicitonary check for user password",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/auth/password-history",
    "method": "updateAuthPasswordHistory",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update authentication password history. Use this endpoint to set the number of password history to save and 0 to disable password history.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/auth/personal-data",
    "method": "enablePersonalDataCheck",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Enable or disable checking user passwords for similarity with their personal data.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/auth/{method}",
    "method": "updateAuthMethodStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update project auth method status. Use this endpoint to enable or disable a given auth method for this project.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "method",
        "schema": "string",
        "required": true,
        "description": "Auth Method. Possible values: email-password,magic-url,email-otp,anonymous,invites,jwt,phone",
        "example": "METHOD"
      },
      {
        "name": "status",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/keys",
    "method": "listKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "List keys",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API Keys List"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/keys",
    "method": "createKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Create key",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "scopes",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "expire",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Key"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/keys/{keyId}",
    "method": "deleteKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Delete key",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "Key unique ID.",
        "example": "KEYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/keys/{keyId}",
    "method": "getKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get key",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "Key unique ID.",
        "example": "KEYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Key"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/keys/{keyId}",
    "method": "updateKey",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update key",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "Key unique ID.",
        "example": "KEYID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "scopes",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "expire",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Key"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/oauth2",
    "method": "updateOAuth",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update project OAuth2",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDER"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secret",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/platforms",
    "method": "listPlatforms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "List platforms",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Platforms List"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/platforms",
    "method": "createPlatform",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Create platform",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "store",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hostname",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Platform"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/platforms/{platformId}",
    "method": "deletePlatform",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Delete platform",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "platformId",
        "schema": "string",
        "required": true,
        "description": "Platform unique ID.",
        "example": "PLATFORMID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/platforms/{platformId}",
    "method": "getPlatformById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get platform",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "platformId",
        "schema": "string",
        "required": true,
        "description": "Platform unique ID.",
        "example": "PLATFORMID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Platform"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/platforms/{platformId}",
    "method": "updatePlatformById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update platform",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "platformId",
        "schema": "string",
        "required": true,
        "description": "Platform unique ID.",
        "example": "PLATFORMID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "store",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hostname",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Platform"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/service",
    "method": "updateServiceStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update service status",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "service",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICE"
      },
      {
        "name": "status",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/service/all",
    "method": "updateAllServiceStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update all service status",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "status",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/smtp",
    "method": "updateSmtp",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update SMTP",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "senderName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "senderEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "host",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "port",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secure",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/smtp/tests",
    "method": "createSmtpTest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Create SMTP test",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "emails",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "senderName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SENDERNAME"
      },
      {
        "name": "senderEmail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SENDEREMAIL"
      },
      {
        "name": "replyTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "host",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HOST"
      },
      {
        "name": "port",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secure",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/team",
    "method": "updateTeam",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update Project Team",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAMID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/templates/email/{type}/{locale}",
    "method": "resetEmailTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Reset custom email template",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Template type",
        "example": "TYPE"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "Template locale",
        "example": "LOCALE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "EmailTemplate"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/templates/email/{type}/{locale}",
    "method": "getEmailTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get custom email template",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Template type",
        "example": "TYPE"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "Template locale",
        "example": "LOCALE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "EmailTemplate"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/templates/email/{type}/{locale}",
    "method": "updateCustomEmailTemplates",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update custom email templates",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Template type",
        "example": "TYPE"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "Template locale",
        "example": "LOCALE"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      },
      {
        "name": "senderName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "senderEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyTo",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/templates/sms/{type}/{locale}",
    "method": "resetSmsTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Reset custom SMS template",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Template type",
        "example": "TYPE"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "Template locale",
        "example": "LOCALE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SmsTemplate"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/templates/sms/{type}/{locale}",
    "method": "getSmsTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get custom SMS template",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Template type",
        "example": "TYPE"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "Template locale",
        "example": "LOCALE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SmsTemplate"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/templates/sms/{type}/{locale}",
    "method": "updateSmsTemplate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update custom SMS template",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Template type",
        "example": "TYPE"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "Template locale",
        "example": "LOCALE"
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SmsTemplate"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/webhooks",
    "method": "listWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "List webhooks",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webhooks List"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/webhooks",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Create webhook",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "security",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "httpUser",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "httpPass",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Webhook"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/webhooks/{webhookId}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Delete webhook",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "Webhook unique ID.",
        "example": "WEBHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/webhooks/{webhookId}",
    "method": "getWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get webhook",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "Webhook unique ID.",
        "example": "WEBHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webhook"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/webhooks/{webhookId}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update webhook",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "Webhook unique ID.",
        "example": "WEBHOOKID"
      },
      {
        "name": "security",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "httpUser",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "httpPass",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webhook"
      }
    ]
  },
  {
    "url": "/projects/{projectId}/webhooks/{webhookId}/signature",
    "method": "updateWebhookSignature",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update webhook signature key",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project unique ID.",
        "example": "PROJECTID"
      },
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "Webhook unique ID.",
        "example": "WEBHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webhook"
      }
    ]
  },
  {
    "url": "/proxy/rules",
    "method": "listRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "proxy",
    "typeScriptTag": "proxy",
    "description": "List Rules",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: domain, resourceType, resourceId, url",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Rule List"
      }
    ]
  },
  {
    "url": "/proxy/rules",
    "method": "createNewRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "proxy",
    "typeScriptTag": "proxy",
    "description": "Create Rule",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "resourceType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESOURCETYPE"
      },
      {
        "name": "resourceId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Rule"
      }
    ]
  },
  {
    "url": "/proxy/rules/{ruleId}",
    "method": "deleteRuleById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "proxy",
    "typeScriptTag": "proxy",
    "description": "Delete Rule",
    "parameters": [
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "Rule ID.",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/proxy/rules/{ruleId}",
    "method": "getRuleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "proxy",
    "typeScriptTag": "proxy",
    "description": "Get Rule",
    "parameters": [
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "Rule ID.",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Rule"
      }
    ]
  },
  {
    "url": "/proxy/rules/{ruleId}/verification",
    "method": "updateRuleVerificationStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "proxy",
    "typeScriptTag": "proxy",
    "description": "Update Rule Verification Status",
    "parameters": [
      {
        "name": "ruleId",
        "schema": "string",
        "required": true,
        "description": "Rule ID.",
        "example": "RULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Rule"
      }
    ]
  },
  {
    "url": "/storage/buckets",
    "method": "listBuckets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "List buckets",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: enabled, name, fileSecurity, maximumFileSize, encryption, antivirus",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Buckets List"
      }
    ]
  },
  {
    "url": "/storage/buckets",
    "method": "createBucket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Create bucket",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUCKETID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fileSecurity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "maximumFileSize",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "allowedFileExtensions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "compression",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "encryption",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "antivirus",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Bucket"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}",
    "method": "deleteBucketById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Delete bucket",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Bucket unique ID.",
        "example": "BUCKETID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}",
    "method": "getBucket",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Get bucket",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Bucket unique ID.",
        "example": "BUCKETID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Bucket"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}",
    "method": "updateBucketById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Update bucket",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Bucket unique ID.",
        "example": "BUCKETID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fileSecurity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "maximumFileSize",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "allowedFileExtensions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "compression",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "encryption",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "antivirus",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Bucket"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files",
    "method": "listFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "List files",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Files List"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files",
    "method": "createFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Create file",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEID"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "File"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files/{fileId}",
    "method": "deleteFileById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Delete File",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID.",
        "example": "FILEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files/{fileId}",
    "method": "getFileById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Get file",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID.",
        "example": "FILEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files/{fileId}",
    "method": "updateFileById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Update file",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File unique ID.",
        "example": "FILEID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files/{fileId}/download",
    "method": "getDownloadFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Get file for download",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID.",
        "example": "FILEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files/{fileId}/preview",
    "method": "getFilePreviewImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Get file preview",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID",
        "example": "FILEID"
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Resize preview image width, Pass an integer between 0 to 4000.",
        "default": 0
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Resize preview image height, Pass an integer between 0 to 4000.",
        "default": 0
      },
      {
        "name": "gravity",
        "schema": "string",
        "required": false,
        "description": "Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right",
        "default": "center"
      },
      {
        "name": "quality",
        "schema": "integer",
        "required": false,
        "description": "Preview image quality. Pass an integer between 0 to 100. Defaults to 100.",
        "default": 100
      },
      {
        "name": "borderWidth",
        "schema": "integer",
        "required": false,
        "description": "Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.",
        "default": 0
      },
      {
        "name": "borderColor",
        "schema": "string",
        "required": false,
        "description": "Preview image border color. Use a valid HEX color, no # is needed for prefix.",
        "default": ""
      },
      {
        "name": "borderRadius",
        "schema": "integer",
        "required": false,
        "description": "Preview image border radius in pixels. Pass an integer between 0 to 4000.",
        "default": 0
      },
      {
        "name": "opacity",
        "schema": "number",
        "required": false,
        "description": "Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.",
        "default": 1
      },
      {
        "name": "rotation",
        "schema": "integer",
        "required": false,
        "description": "Preview image rotation in degrees. Pass an integer between -360 and 360.",
        "default": 0
      },
      {
        "name": "background",
        "schema": "string",
        "required": false,
        "description": "Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.",
        "default": ""
      },
      {
        "name": "output",
        "schema": "string",
        "required": false,
        "description": "Output format type (jpeg, jpg, png, gif and webp).",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files/{fileId}/view",
    "method": "getFileView",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Get file for view",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID.",
        "example": "FILEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File"
      }
    ]
  },
  {
    "url": "/storage/usage",
    "method": "getUsageStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Get storage usage stats",
    "parameters": [
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "Date range.",
        "default": "30d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "StorageUsage"
      }
    ]
  },
  {
    "url": "/storage/{bucketId}/usage",
    "method": "getBucketUsageStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Get bucket usage stats",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Bucket ID.",
        "example": "BUCKETID"
      },
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "Date range.",
        "default": "30d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "UsageBuckets"
      }
    ]
  },
  {
    "url": "/teams",
    "method": "getFilteredTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "List teams",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Teams List"
      }
    ]
  },
  {
    "url": "/teams",
    "method": "createTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Create team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAMID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "roles",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Team"
      }
    ]
  },
  {
    "url": "/teams/{teamId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Delete team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/teams/{teamId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Get team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Team"
      }
    ]
  },
  {
    "url": "/teams/{teamId}",
    "method": "updateNameById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Update name",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
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
        "statusCode": "200",
        "description": "Team"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/logs",
    "method": "listLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "List team logs",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/memberships",
    "method": "listMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "List team memberships",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Memberships List"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/memberships",
    "method": "createMembership",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Create team membership",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
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
        "statusCode": "201",
        "description": "Membership"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/memberships/{membershipId}",
    "method": "removeMembership",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Delete team membership",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "Membership ID.",
        "example": "MEMBERSHIPID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/memberships/{membershipId}",
    "method": "getMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Get team membership",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "Membership ID.",
        "example": "MEMBERSHIPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Membership"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/memberships/{membershipId}",
    "method": "updateMembershipRoles",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Update membership",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "Membership ID.",
        "example": "MEMBERSHIPID"
      },
      {
        "name": "roles",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Membership"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/memberships/{membershipId}/status",
    "method": "updateMembershipStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Update team membership status",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "Membership ID.",
        "example": "MEMBERSHIPID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Membership"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/prefs",
    "method": "getPrefs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Get team preferences",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Preferences"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/prefs",
    "method": "updatePrefsById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Update preferences",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "prefs",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Preferences"
      }
    ]
  },
  {
    "url": "/users",
    "method": "listFilteredUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List users",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Users List"
      }
    ]
  },
  {
    "url": "/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
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
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/argon2",
    "method": "createArgonUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with Argon2 password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/bcrypt",
    "method": "createBcryptPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with bcrypt password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/identities",
    "method": "listIdentities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List Identities",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Identities List"
      }
    ]
  },
  {
    "url": "/users/identities/{identityId}",
    "method": "deleteIdentityById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete identity",
    "parameters": [
      {
        "name": "identityId",
        "schema": "string",
        "required": true,
        "description": "Identity ID.",
        "example": "IDENTITYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/users/md5",
    "method": "createMd5User",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with MD5 password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/phpass",
    "method": "createWithPhPass",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with PHPass password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/scrypt",
    "method": "createScryptUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with Scrypt password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "passwordSalt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORDSALT"
      },
      {
        "name": "passwordCpu",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "passwordMemory",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "passwordParallel",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "passwordLength",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/scrypt-modified",
    "method": "createScryptModifiedUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with Scrypt modified password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "passwordSalt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORDSALT"
      },
      {
        "name": "passwordSaltSeparator",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORDSALTSEPARATOR"
      },
      {
        "name": "passwordSignerKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORDSIGNERKEY"
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
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/sha",
    "method": "createWithShaPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with SHA password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "passwordVersion",
        "schema": "string",
        "required": false,
        "description": ""
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
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/usage",
    "method": "getUsageStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get users usage stats",
    "parameters": [
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "Date range.",
        "default": "30d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "UsageUsers"
      }
    ]
  },
  {
    "url": "/users/{userId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/users/{userId}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/email",
    "method": "updateEmailById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update email",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/labels",
    "method": "updateLabelsByUserId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update user labels",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "labels",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/logs",
    "method": "getLogsByUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List user logs",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/users/{userId}/memberships",
    "method": "getMembershipsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List user memberships",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Memberships List"
      }
    ]
  },
  {
    "url": "/users/{userId}/mfa",
    "method": "updateMfaStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update MFA",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "mfa",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/mfa/authenticators/{type}",
    "method": "deleteAuthenticator",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete Authenticator",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of authenticator.",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/mfa/factors",
    "method": "listMfaFactors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List Factors",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFAFactors"
      }
    ]
  },
  {
    "url": "/users/{userId}/mfa/recovery-codes",
    "method": "getMfaRecoveryCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get MFA Recovery Codes",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFA Recovery Codes"
      }
    ]
  },
  {
    "url": "/users/{userId}/mfa/recovery-codes",
    "method": "createMfaRecoveryCodes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create MFA Recovery Codes",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "MFA Recovery Codes"
      }
    ]
  },
  {
    "url": "/users/{userId}/mfa/recovery-codes",
    "method": "regenerateMfaRecoveryCodesByUserId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Regenerate MFA Recovery Codes",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFA Recovery Codes"
      }
    ]
  },
  {
    "url": "/users/{userId}/name",
    "method": "updateNameById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update name",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
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
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/password",
    "method": "updatePasswordByUserId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/phone",
    "method": "updatePhoneByUserId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update phone",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NUMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/prefs",
    "method": "getUserPrefsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get user preferences",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Preferences"
      }
    ]
  },
  {
    "url": "/users/{userId}/prefs",
    "method": "updatePrefsById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update user preferences",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "prefs",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Preferences"
      }
    ]
  },
  {
    "url": "/users/{userId}/sessions",
    "method": "deleteSessionsById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete user sessions",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/users/{userId}/sessions",
    "method": "listSessionsByUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List user sessions",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sessions List"
      }
    ]
  },
  {
    "url": "/users/{userId}/sessions",
    "method": "createSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create session",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/users/{userId}/sessions/{sessionId}",
    "method": "deleteSessionByUserIdAndSessionId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete user session",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Session ID.",
        "example": "SESSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/users/{userId}/status",
    "method": "updateStatusByUserId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update user status",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "status",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/targets",
    "method": "listTargets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List User Targets",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Target list"
      }
    ]
  },
  {
    "url": "/users/{userId}/targets",
    "method": "createMessagingTarget",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create User Target",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETID"
      },
      {
        "name": "providerType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERTYPE"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      },
      {
        "name": "providerId",
        "schema": "string",
        "required": false,
        "description": ""
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
        "statusCode": "201",
        "description": "Target"
      }
    ]
  },
  {
    "url": "/users/{userId}/targets/{targetId}",
    "method": "deleteTargetMessaging",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete user target",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "Target ID.",
        "example": "TARGETID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/users/{userId}/targets/{targetId}",
    "method": "getTarget",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get User Target",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "Target ID.",
        "example": "TARGETID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Target"
      }
    ]
  },
  {
    "url": "/users/{userId}/targets/{targetId}",
    "method": "updateMessagingTarget",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update User target",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "Target ID.",
        "example": "TARGETID"
      },
      {
        "name": "identifier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "providerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Target"
      }
    ]
  },
  {
    "url": "/users/{userId}/tokens",
    "method": "generateToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create token",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "length",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "expire",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/users/{userId}/verification",
    "method": "updateEmailVerificationStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update email verification",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "emailVerification",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/verification/phone",
    "method": "updatePhoneVerification",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update phone verification",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID.",
        "example": "USERID"
      },
      {
        "name": "phoneVerification",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/vcs/github/installations/{installationId}/providerRepositories",
    "method": "listProviderRepositories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "vcs",
    "typeScriptTag": "vcs",
    "description": "List Repositories",
    "parameters": [
      {
        "name": "installationId",
        "schema": "string",
        "required": true,
        "description": "Installation Id",
        "example": "INSTALLATIONID"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider Repositories List"
      }
    ]
  },
  {
    "url": "/vcs/github/installations/{installationId}/providerRepositories",
    "method": "createProviderRepository",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "vcs",
    "typeScriptTag": "vcs",
    "description": "Create repository",
    "parameters": [
      {
        "name": "installationId",
        "schema": "string",
        "required": true,
        "description": "Installation Id",
        "example": "INSTALLATIONID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "private",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ProviderRepository"
      }
    ]
  },
  {
    "url": "/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}",
    "method": "getRepository",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "vcs",
    "typeScriptTag": "vcs",
    "description": "Get repository",
    "parameters": [
      {
        "name": "installationId",
        "schema": "string",
        "required": true,
        "description": "Installation Id",
        "example": "INSTALLATIONID"
      },
      {
        "name": "providerRepositoryId",
        "schema": "string",
        "required": true,
        "description": "Repository Id",
        "example": "PROVIDERREPOSITORYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ProviderRepository"
      }
    ]
  },
  {
    "url": "/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}/branches",
    "method": "listRepositoryBranches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "vcs",
    "typeScriptTag": "vcs",
    "description": "List Repository Branches",
    "parameters": [
      {
        "name": "installationId",
        "schema": "string",
        "required": true,
        "description": "Installation Id",
        "example": "INSTALLATIONID"
      },
      {
        "name": "providerRepositoryId",
        "schema": "string",
        "required": true,
        "description": "Repository Id",
        "example": "PROVIDERREPOSITORYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Branches List"
      }
    ]
  },
  {
    "url": "/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}/detection",
    "method": "detectRuntimeSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "vcs",
    "typeScriptTag": "vcs",
    "description": "Detect runtime settings from source code",
    "parameters": [
      {
        "name": "installationId",
        "schema": "string",
        "required": true,
        "description": "Installation Id",
        "example": "INSTALLATIONID"
      },
      {
        "name": "providerRepositoryId",
        "schema": "string",
        "required": true,
        "description": "Repository Id",
        "example": "PROVIDERREPOSITORYID"
      },
      {
        "name": "providerRootDirectory",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Detection"
      }
    ]
  },
  {
    "url": "/vcs/github/installations/{installationId}/repositories/{repositoryId}",
    "method": "authorizeExternalDeployment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "vcs",
    "typeScriptTag": "vcs",
    "description": "Authorize external deployment",
    "parameters": [
      {
        "name": "installationId",
        "schema": "string",
        "required": true,
        "description": "Installation Id",
        "example": "INSTALLATIONID"
      },
      {
        "name": "repositoryId",
        "schema": "string",
        "required": true,
        "description": "VCS Repository Id",
        "example": "REPOSITORYID"
      },
      {
        "name": "providerPullRequestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERPULLREQUESTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/vcs/installations",
    "method": "listInstallations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "vcs",
    "typeScriptTag": "vcs",
    "description": "List installations",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: provider, organization",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Installations List"
      }
    ]
  },
  {
    "url": "/vcs/installations/{installationId}",
    "method": "deleteInstallation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "vcs",
    "typeScriptTag": "vcs",
    "description": "Delete Installation",
    "parameters": [
      {
        "name": "installationId",
        "schema": "string",
        "required": true,
        "description": "Installation Id",
        "example": "INSTALLATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/vcs/installations/{installationId}",
    "method": "getInstallationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "vcs",
    "typeScriptTag": "vcs",
    "description": "Get installation",
    "parameters": [
      {
        "name": "installationId",
        "schema": "string",
        "required": true,
        "description": "Installation Id",
        "example": "INSTALLATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Installation"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Appwrite"
      apiBaseUrl="https://cloud.appwrite.io/v1"
      apiVersion="1.5.0"
      endpoints={264}
      sdkMethods={356}
      schemas={283}
      parameters={1106}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/console/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/appwrite/console/openapi.yaml"
      developerDocumentation="appwrite.io/docs/references#api"
    />
  );
}
  