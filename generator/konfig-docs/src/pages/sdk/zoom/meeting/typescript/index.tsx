import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function ZoomMeetingTypeScriptSdk() {
  return (
    <Sdk
      sdkName="zoom-meeting-typescript-sdk"
      metaDescription="Zoom is a video conferencing platform that allows users to connect remotely for virtual meetings, webinars, online events, and collaborative work sessions. With features like screen sharing, virtual backgrounds, and chat functionality, Zoom has become a popular tool for individuals and businesses to communicate and collaborate in real-time, fostering productivity and connectivity across distances."
      company="Zoom"
      serviceName="Meeting"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zoom/meeting/logo.png"
      clientNameCamelCase="zoomMeeting"
      homepage="zoom.us/"
      lastUpdated={new Date("2024-03-04T06:39:15.459Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zoom/meeting/favicon.png"
      contactUrl="https://developer.zoom.us/"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zoom/meeting/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/archive_files",
    "method": "meetingFilesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Archiving",
    "typeScriptTag": "archiving",
    "description": "List archived files",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The query start date, in `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `to` query parameter value cannot exceed seven days."
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The query end date, in `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `from` query parameter value cannot exceed seven days."
      },
      {
        "name": "queryDateType",
        "schema": "string",
        "required": false,
        "description": "The type of query date.\n* `meeting_start_time` \n* `archive_complete_time` \n\n This value defaults to `meeting_start_time`."
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": "The group ID. To get a group ID, use the [List groups](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/groups) API."
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
    "url": "/archive_files/statistics",
    "method": "getStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Archiving",
    "typeScriptTag": "archiving",
    "description": "Get archived file statistics",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The query start date, `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `to` query parameter value cannot exceed seven days."
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The query end date, in `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `from` query parameter value cannot exceed seven days."
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
    "url": "/archive_files/{fileId}",
    "method": "updateAutoDeleteStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Archiving",
    "typeScriptTag": "archiving",
    "description": "Update an archived file's auto-delete status",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_delete",
        "schema": "boolean",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/past_meetings/{meetingUUID}/archive_files",
    "method": "meetingFilesDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Archiving",
    "typeScriptTag": "archiving",
    "description": "Delete a meeting's archived files",
    "parameters": [
      {
        "name": "meetingUuid",
        "schema": "string",
        "required": true,
        "description": "The meeting's universally unique identifier (UUID). Each meeting instance generates a UUID. For example, after a meeting ends, a new UUID is generated for the next meeting instance.\n\nIf the meeting UUID begins with a `/` character or contains a `//` character, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID when using the meeting UUID for other API calls."
      }
    ],
    "responses": []
  },
  {
    "url": "/past_meetings/{meetingUUID}/archive_files",
    "method": "meetingFilesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Archiving",
    "typeScriptTag": "archiving",
    "description": "Get a meeting's archived files",
    "parameters": [
      {
        "name": "meetingUuid",
        "schema": "string",
        "required": true,
        "description": "The meeting's universally unique identifier (UUID). Each meeting instance generates a UUID. After a meeting ends, a new UUID is generated for the next meeting instance.\n\nIf the meeting UUID begins with a `/` character or contains a `//` character, you **must** [double encode](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID when using the meeting UUID for other API calls."
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
    "url": "/meetings/{meetingId}/recordings",
    "method": "deleteMeetingRecordings",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Delete meeting recordings",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. "
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": "The recording delete actions:  \n `trash` - Move recording to trash.  \n `delete` - Delete recording permanently."
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/recordings",
    "method": "getMeetingRecordings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Get meeting recordings",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get a meeting's cloud recordings, provide the meeting ID or UUID. If providing the meeting ID instead of UUID, the response will be for the latest meeting instance. \n\nTo get a webinar's cloud recordings, provide the webinar's ID or UUID. If providing the webinar ID instead of UUID, the response will be for the latest webinar instance. \n\nIf a UUID starts with `/` or contains `//` (example: `/ajXp112QmuoKj4854875==`), **[double encode](https://developers.zoom.us) the UUID** before making an API request. "
      },
      {
        "name": "includeFields",
        "schema": "string",
        "required": false,
        "description": "The `download_access_token` value for downloading the meeting's recordings."
      },
      {
        "name": "ttl",
        "schema": "integer",
        "required": false,
        "description": "The `download_access_token` Time to Live (TTL) value. This parameter is only valid if the `include_fields` query parameter contains the `download_access_token` value."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This field returns a list of recording files for each participant. The API only returns this response when the **Record a separate audio file of each participant** setting is enabled."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/analytics_details",
    "method": "details",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Get Meeting Recording's Analytics Details",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. "
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The start date for the monthly range to query. The maximum range can be a month. If you do not provide this value, this defaults to the current date."
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The end date for the monthly range to query. The maximum range can be a month."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of analytics details: \n* `by_view` &mdash; by_view. \n* `by_download` &mdash; by_download."
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
    "url": "/meetings/{meetingId}/recordings/analytics_summary",
    "method": "summary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Get Meeting Recording's Analytics Summary",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. "
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The start date for the monthly range to query. The maximum range can be a month. If you do not provide this value, this defaults to the current date."
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The end date for the monthly range to query. The maximum range can be a month."
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
    "url": "/meetings/{meetingId}/recordings/registrants",
    "method": "listRegistrants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "List recording registrants",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Query by the registrant's status: \n* `pending` &mdash; The registration is pending. \n* `approved` &mdash; The registrant is approved. \n* `denied` &mdash; The registration is denied."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "**Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting cloud recording registrant."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/registrants",
    "method": "createRegistrant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Create a recording registrant",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "comments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_questions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "industry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "job_title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "no_of_employees",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "org",
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
        "name": "purchasing_time_frame",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role_in_purchase_process",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
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
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/registrants/questions",
    "method": "listRegistrationQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Get registration questions",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. "
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Recording Registrant Questions"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/registrants/questions",
    "method": "updateRegistrationQuestions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Update registration questions",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. "
      },
      {
        "name": "custom_questions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/recordings/registrants/status",
    "method": "updateRegistrantStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Update registrant's status",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "registrants",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/recordings/settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Get meeting recording settings",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "The meeting ID enables you to get cloud recording of a:\n- Meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\n- Webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **double encode** the UUID before making an API request. "
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
    "url": "/meetings/{meetingId}/recordings/settings",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Update meeting recording settings",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **double encode** the UUID before making an API request. "
      },
      {
        "name": "approval_type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "authentication_domains",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authentication_option",
        "schema": "string",
        "description": ""
      },
      {
        "name": "on_demand",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recording_authentication",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "send_email_to_host",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "share_recording",
        "schema": "string",
        "description": ""
      },
      {
        "name": "show_social_share_buttons",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "topic",
        "schema": "string",
        "description": ""
      },
      {
        "name": "viewer_download",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/recordings/{recordingId}",
    "method": "deleteRecording",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Delete a meeting recording file",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. "
      },
      {
        "name": "recordingId",
        "schema": "string",
        "required": true,
        "description": "The recording ID."
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": "The recording delete actions:  \n `trash` - Move recording to trash.  \n `delete` - Delete recording permanently."
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/recordings/{recordingId}/status",
    "method": "recoverStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Recover a single recording",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. "
      },
      {
        "name": "recordingId",
        "schema": "string",
        "required": true,
        "description": "The recording ID."
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingUUID}/recordings/status",
    "method": "recoverRecordingStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Recover meeting recordings",
    "parameters": [
      {
        "name": "meetingUuid",
        "schema": "string",
        "required": true,
        "description": "The meeting's universally unique identifier (UUID). Each meeting instance generates a UUID. For example, after a meeting ends, a new UUID is generated for the next meeting instance.\n\nIf the meeting UUID begins with a `/` character or contains a `//` character, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID when using the meeting UUID for other API calls."
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{userId}/recordings",
    "method": "listRecordings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "List all recordings",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user's ID or email address. For user-level apps, pass the `me` value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The next page token paginates through a large set of results. A next page token returns whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes."
      },
      {
        "name": "mc",
        "schema": "string",
        "required": false,
        "description": "The query metadata of the recording if using an on-premise meeting connector for the meeting."
      },
      {
        "name": "trash",
        "schema": "boolean",
        "required": false,
        "description": "The query trash.\n* `true` - List recordings from trash.  \n* `false` - Do not list recordings from the trash.  \n\nThe default value is `false`. If you set it to `true`, you can use the `trash_type` property to indicate the type of Cloud recording that you need to retrieve. "
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The start date in 'yyyy-mm-dd' UTC format for the date range where you would like to retrieve recordings. The maximum range can be a month. If no value is provided for this field, the default will be current date. \n\nFor example, if you make the API request on June 30, 2020, without providing the `from` and `to` parameters, by default the value of 'from' field will be `2020-06-30` and the value of the 'to' field will be `2020-07-01`. \n\n**Note**: The `trash` files cannot be filtered by date range and thus, the `from` and `to` fields should not be used for trash files."
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The end date in 'yyyy-mm-dd' 'yyyy-mm-dd' UTC format. "
      },
      {
        "name": "trashType",
        "schema": "string",
        "required": false,
        "description": "The type of cloud recording to retrieve from the trash. \n \n *   `meeting_recordings`: List all meeting recordings from the trash.  \n *  `recording_file`: List all individual recording files from the trash. "
      },
      {
        "name": "meetingId",
        "schema": "integer",
        "required": false,
        "description": "The meeting ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The pagination object."
      }
    ]
  },
  {
    "url": "/devices",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "List devices",
    "parameters": [
      {
        "name": "searchText",
        "schema": "string",
        "required": false,
        "description": "Filter devices by name or serial number."
      },
      {
        "name": "platformOs",
        "schema": "string",
        "required": false,
        "description": "Filter devices by platform operating system."
      },
      {
        "name": "isEnrolledInZdm",
        "schema": "boolean",
        "required": false,
        "description": "Filter devices by enrollment of ZDM (Zoom Device Management)."
      },
      {
        "name": "deviceType",
        "schema": "integer",
        "required": false,
        "description": "Filter devices by device type.  \n  Device Type:  \n `-1` - All Zoom Room device(0,1,2,3,4,6).  \n `0` - Zoom Rooms Computer.  \n `1` - Zoom Rooms Controller.  \n `2` - Zoom Rooms Scheduling Display.  \n `3` - Zoom Rooms Control System.  \n `4` -  Zoom Rooms Whiteboard.  \n `5` - Zoom Phone Appliance.  \n `6` - Zoom Rooms Computer (with Controller)."
      },
      {
        "name": "deviceVendor",
        "schema": "string",
        "required": false,
        "description": "Filter devices by vendor."
      },
      {
        "name": "deviceModel",
        "schema": "string",
        "required": false,
        "description": "Filter devices by model."
      },
      {
        "name": "deviceStatus",
        "schema": "integer",
        "required": false,
        "description": "Filter devices by status.   \n  Device Status:  \n `0` - offline.  \n `1` - online.  \n `-1` - unlink"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
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
    "url": "/devices",
    "method": "createNewDevice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "Add new device",
    "parameters": [
      {
        "name": "device_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "mac_address",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "serial_number",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "vendor",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "model",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "room_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "device_type",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/devices/{deviceId}",
    "method": "removeDeviceZmd",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "Delete device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the device."
      }
    ],
    "responses": []
  },
  {
    "url": "/devices/{deviceId}",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "Get device detail",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "The device's unique identifier."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the device."
      }
    ]
  },
  {
    "url": "/devices/{deviceId}",
    "method": "updateDeviceName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "Change device ",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the device."
      },
      {
        "name": "device_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "room_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "device_type",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/devices/{deviceId}/assignment",
    "method": "changeDeviceAssociation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "Change device association",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the device."
      },
      {
        "name": "room_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "app_type",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/h323/devices",
    "method": "listDevices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "H323 Devices",
    "typeScriptTag": "h323Devices",
    "description": "List H.323/SIP devices",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "**Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of H.323/SIP Devices."
      }
    ]
  },
  {
    "url": "/h323/devices",
    "method": "createDevice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "H323 Devices",
    "typeScriptTag": "h323Devices",
    "description": "Create a H.323/SIP device",
    "parameters": [
      {
        "name": "encryption",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ip",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "protocol",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The H.323/SIP device object."
      }
    ]
  },
  {
    "url": "/h323/devices/{deviceId}",
    "method": "deleteDevice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "H323 Devices",
    "typeScriptTag": "h323Devices",
    "description": "Delete a H.323/SIP device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "The device ID."
      }
    ],
    "responses": []
  },
  {
    "url": "/h323/devices/{deviceId}",
    "method": "updateDeviceInfo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "H323 Devices",
    "typeScriptTag": "h323Devices",
    "description": "Update a H.323/SIP device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "The device ID."
      },
      {
        "name": "encryption",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ip",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "protocol",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/live_meetings/{meetingId}/chat/messages/{messageId}",
    "method": "deleteMeetingChatMessage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Delete a live meeting message",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, store it as a long-format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "The live meeting chat message's unique identifier (UUID), in base64-encoded format."
      },
      {
        "name": "fileIds",
        "schema": "string",
        "required": false,
        "description": "The live webinar chat file's universally unique identifier (UUID), in base64-encoded format. Separate multiple values with commas."
      }
    ],
    "responses": []
  },
  {
    "url": "/live_meetings/{meetingId}/chat/messages/{messageId}",
    "method": "updateMessage",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update a live meeting message",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, store it as a long-format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "The live meeting chat message's unique identifier (UUID), in base64-encoded format."
      },
      {
        "name": "message_content",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/live_meetings/{meetingId}/events",
    "method": "controlInMeetingFeatures",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Use in-meeting controls",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "The live meeting's ID."
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "params",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/meeting_summaries",
    "method": "listMeetingSummaries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List meeting summaries of an account",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The next page token paginates through a large set of results. A next page token returns whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes."
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The start date in `yyyy-MM-dd'T'HH:mm:ss'Z'` UTC format used to retrieve the creation date range of the meeting summaries."
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The end date in `yyyy-MM-dd'T'HH:mm:ss'Z'` UTC format used to retrieve the creation date range of the meeting summaries."
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
    "url": "/meetings/{meetingId}",
    "method": "removeMeeting",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Delete a meeting",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID."
      },
      {
        "name": "scheduleForReminder",
        "schema": "boolean",
        "required": false,
        "description": "`true`: Notify host and alternative host about the meeting cancellation via email.\n`false`: Do not send any email notification."
      },
      {
        "name": "cancelMeetingReminder",
        "schema": "boolean",
        "required": false,
        "description": "`true`: Notify registrants about the meeting cancellation via email. \n\n`false`: Do not send any email notification to meeting registrants. \n\nThe default value of this field is `false`."
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, store it as a long format integer and **not** an integer. Meeting IDs can be more than 10 digits."
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "Meeting occurrence ID. Provide this field to view meeting details of a particular occurrence of the [recurring meeting](https://support.zoom.us/hc/en-us/articles/214973206-Scheduling-Recurring-Meetings)."
      },
      {
        "name": "showPreviousOccurrences",
        "schema": "boolean",
        "required": false,
        "description": "Set this field's value to `true` to view meeting details of all previous occurrences of a [recurring meeting](https://support.zoom.us/hc/en-us/articles/214973206-Scheduling-Recurring-Meetings). "
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Meeting object."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update a meeting",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, store it as a long format integer and **not** an integer. Meeting IDs can be greater than 10 digits."
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "Meeting occurrence ID. Support change of agenda, `start_time`, duration, or settings {`host_video`, `participant_video`, `join_before_host`, `mute_upon_entry`, `waiting_room`, `watermark`, `auto_recording`}."
      },
      {
        "name": "agenda",
        "schema": "string",
        "description": ""
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pre_schedule",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "schedule_for",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recurrence",
        "schema": "object",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "string",
        "description": ""
      },
      {
        "name": "template_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "topic",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tracking_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/batch_polls",
    "method": "createBatchPolls",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Perform batch poll creation",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "polls",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/batch_registrants",
    "method": "batchRegistrantsCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Perform batch registration",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the meeting (Meeting Number)."
      },
      {
        "name": "auto_approve",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "registrants_confirmation_email",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "registrants",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/invitation",
    "method": "getInvitationNote",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get meeting invitation",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Meeting invitation details."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/invite_links",
    "method": "createInviteLinks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Create meeting's invite links",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "attendees",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Invite links response."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/jointoken/live_streaming",
    "method": "getJoinToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting's join token for live streaming",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting's join token."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/jointoken/local_archiving",
    "method": "getMeetingArchiveTokenForLocalArchiving",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting's archive token for local archiving",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting's local archive token."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/jointoken/local_recording",
    "method": "getJoinTokenLocalRecording",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting's join token for local recording",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting's local recorder join token."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/livestream",
    "method": "getLivestreamDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get livestream details",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the meeting."
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
    "url": "/meetings/{meetingId}/livestream",
    "method": "updateLivestream",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update a livestream",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "page_url",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "stream_key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "stream_url",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "resolution",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/livestream/status",
    "method": "livestreamStatusUpdate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update Live Stream Status",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/meeting_summary",
    "method": "getMeetingSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting summary",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": false,
        "description": "The meeting's universally unique ID (UUID). When you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request."
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
    "url": "/meetings/{meetingId}/polls",
    "method": "listMeetingPolls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List meeting polls",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "anonymous",
        "schema": "boolean",
        "required": false,
        "description": "Whether to query for polls with the **Anonymous** option enabled: \n* `true` &mdash; Query for polls with the **Anonymous** option enabled. \n* `false` &mdash; Do not query for polls with the **Anonymous** option enabled."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Poll List"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/polls",
    "method": "createPoll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Create a meeting poll",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anonymous",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "poll_type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Information about meeting and webinar polling."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/polls/{pollId}",
    "method": "pollDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Delete a meeting poll",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "pollId",
        "schema": "string",
        "required": true,
        "description": "The poll ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/polls/{pollId}",
    "method": "getPoll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting poll",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "pollId",
        "schema": "string",
        "required": true,
        "description": "The poll ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about meeting and webinar polling."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/polls/{pollId}",
    "method": "updateMeetingPoll",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update a meeting poll",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "pollId",
        "schema": "string",
        "required": true,
        "description": "The poll ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anonymous",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "poll_type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/registrants",
    "method": "listRegistrants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List meeting registrants",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Query by the registrant's status. \n* `pending` - The registration is pending. \n* `approved` - The registrant is approved. \n* `denied` - The registration is denied."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "**Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of users."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/registrants",
    "method": "addRegistrant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Add a meeting registrant",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "occurrenceIds",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of meeting occurrence IDs. You can get this value with the [Get a meeting](https://developers.zoom.us) API."
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
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
        "name": "comments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_questions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "industry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "job_title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "no_of_employees",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "org",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "purchasing_time_frame",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role_in_purchase_process",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_approve",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/registrants/questions",
    "method": "listRegistrationQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List registration questions ",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Meeting Registrant Questions"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/registrants/questions",
    "method": "updateRegistrationQuestions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update registration questions",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "custom_questions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/registrants/status",
    "method": "updateRegistrantStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update registrant's status",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID."
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "registrants",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/registrants/{registrantId}",
    "method": "deleteRegistrant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Delete a meeting registrant",
    "parameters": [
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting occurrence ID."
      },
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting ID."
      },
      {
        "name": "registrantId",
        "schema": "string",
        "required": true,
        "description": "The meeting registrant ID."
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/registrants/{registrantId}",
    "method": "getRegistrantDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting registrant",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "registrantId",
        "schema": "string",
        "required": true,
        "description": "The registrant ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": " Registrant."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/sip_dialing",
    "method": "getSipUriWithPasscode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting SIP URI with Passcode",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "passcode",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting's encoded SIP URI."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/status",
    "method": "updateMeetingStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update meeting status",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/survey",
    "method": "deleteMeetingSurvey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Delete a meeting survey",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/survey",
    "method": "getMeetingSurvey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting survey",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, store it as a long-format integer and **not** a simple integer. Meeting IDs can be more than 10 digits."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting survey."
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/survey",
    "method": "updateSurvey",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update a meeting survey",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, store it as a long-format integer and **not** a simple integer. Meeting IDs can be over 10 digits."
      },
      {
        "name": "custom_survey",
        "schema": "object",
        "description": ""
      },
      {
        "name": "show_in_the_browser",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "third_party_survey",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/meetings/{meetingId}/token",
    "method": "getMeetingToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get meeting's token",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The meeting token type: \n* `closed_caption_token` &mdash; The third-party closed caption API token. \n\nThis defaults to `closed_caption_token`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting token."
      }
    ]
  },
  {
    "url": "/past_meetings/{meetingId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get past meeting details",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "undefined",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID before making an API request."
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
    "url": "/past_meetings/{meetingId}/instances",
    "method": "listPastMeetingInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List past meeting instances",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The past meeting's ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of Meetings"
      }
    ]
  },
  {
    "url": "/past_meetings/{meetingId}/participants",
    "method": "getPastMeetingParticipants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get past meeting participants",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pagination object."
      }
    ]
  },
  {
    "url": "/past_meetings/{meetingId}/polls",
    "method": "listPastMeetingPolls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List past meeting's poll results",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request."
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
    "url": "/past_meetings/{meetingId}/qa",
    "method": "listPastMeetingQa",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List past meetings' Q&A",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request."
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
    "url": "/users/{userId}/meeting_templates",
    "method": "listMeetingTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List meeting templates",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user ID retrievable from the [List users](https://developers.zoom.us) API."
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
    "url": "/users/{userId}/meeting_templates",
    "method": "createTemplateFromMeeting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Create a meeting template from an existing meeting",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user ID retrievable from the [List users](https://developers.zoom.us) API."
      },
      {
        "name": "meeting_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "save_recurrence",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "overwrite",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{userId}/meetings",
    "method": "listHostScheduled",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List meetings",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user's user ID or email address. For user-level apps, pass the `me` value."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of meeting. \n* `scheduled` - All valid previous (unexpired) meetings, live meetings, and upcoming scheduled meetings. \n* `live` - All the ongoing meetings. \n* `upcoming` - All upcoming meetings, including live meetings. \n* `upcoming_meetings` - All upcoming meetings, including live meetings. \n* `previous_meetings` - All the previous meetings."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "The page number of the current page in the returned records."
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The start date."
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The end data."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pagination Object."
      }
    ]
  },
  {
    "url": "/users/{userId}/meetings",
    "method": "createMeeting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Create a meeting",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user's user ID or email address. For user-level apps, pass the `me` value."
      },
      {
        "name": "agenda",
        "schema": "string",
        "description": ""
      },
      {
        "name": "default_password",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pre_schedule",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "recurrence",
        "schema": "object",
        "description": ""
      },
      {
        "name": "schedule_for",
        "schema": "string",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "string",
        "description": ""
      },
      {
        "name": "template_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "topic",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tracking_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Meeting object."
      }
    ]
  },
  {
    "url": "/users/{userId}/pac",
    "method": "listAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PAC",
    "typeScriptTag": "pac",
    "description": "List a user's PAC accounts",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user's user ID or email address. For user-level apps, pass the `me` value."
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
    "url": "/report/activities",
    "method": "listSignInSignOutActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get sign In / sign out activity report",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Start date for which you would like to view the activity logs report. Using the `from` and `to` parameters, specify a monthly date range for the report as the API only provides one month worth of data in one request. The specified date range should fall within the last six months."
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "End date up to which you would like to view the activity logs report."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records to be returned within a single API call"
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Next page token is used to paginate through large result sets"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Report object"
      }
    ]
  },
  {
    "url": "/report/billing",
    "method": "getBillingDepartmentReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get billing reports",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/report/billing/invoices",
    "method": "getBillingInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get billing invoice reports",
    "parameters": [
      {
        "name": "billingId",
        "schema": "string",
        "required": true,
        "description": "Unique Identifier of the Billing Report. Retrieve this ID from the response of **Get Billing Reports** API request. \n\n"
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
    "url": "/report/cloud_recording",
    "method": "getCloudRecordingUsageReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get cloud recording usage report",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once."
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End date."
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": "The group ID. To get a group ID, use the [**List groups**](https://developers.zoom.us) API. \n\n **Note:** The API response will only contain users who are members of the queried group ID."
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
    "url": "/report/daily",
    "method": "getDailyUsageReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get daily usage report",
    "parameters": [
      {
        "name": "year",
        "schema": "integer",
        "required": false,
        "description": "Year for this report"
      },
      {
        "name": "month",
        "schema": "integer",
        "required": false,
        "description": "Month for this report"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": "The group ID. To get a group ID, use the [**List groups**](https://developers.zoom.us) API. \n\n **Note:** The API response will only contain users who are members of the queried group ID."
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
    "url": "/report/meetings/{meetingId}",
    "method": "getMeetingDetailReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get meeting detail reports",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "undefined",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID before making an API request."
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
    "url": "/report/meetings/{meetingId}/participants",
    "method": "getMeetingParticipantReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get meeting participant reports",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      },
      {
        "name": "includeFields",
        "schema": "string",
        "required": false,
        "description": "Provide `registrant_id` as the value for this field if you would like to see the registrant ID attribute in the response of this API call. A registrant ID is a unique identifier of a [meeting registrant](https://developers.zoom.us)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pagination object."
      }
    ]
  },
  {
    "url": "/report/meetings/{meetingId}/polls",
    "method": "getMeetingPollReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get meeting poll reports",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "undefined",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID before making an API request."
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
    "url": "/report/meetings/{meetingId}/qa",
    "method": "getMeetingQaReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get meeting Q&A report",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "undefined",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID before making an API request."
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
    "url": "/report/operationlogs",
    "method": "getOperationLogsReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get operation logs report",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once."
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End date."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      },
      {
        "name": "categoryType",
        "schema": "string",
        "required": false,
        "description": "**Optional**  \n \nFilter your response by a category type to see reports for a specific category.\nThe value for this field can be one of the following:  \n  `all`  \n `user`  \n `user_settings`  \n `account`  \n `billing`  \n `im`  \n `recording`  \n `phone_contacts`  \n `webinar`  \n `sub_account`  \n `role`  \n `zoom_rooms`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pagination object."
      }
    ]
  },
  {
    "url": "/report/telephone",
    "method": "getTelephoneReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get telephone reports",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Audio types:  \n `1` - Toll-free Call-in &amp; Call-out.  \n `2` - Toll   \n \n`3` - SIP Connected Audio"
      },
      {
        "name": "queryDateType",
        "schema": "string",
        "required": false,
        "description": "The type of date to query. \n* `start_time` &mdash; Query by call start time. \n* `end_time` &mdash; Query by call end time. \n* `meeting_start_time` &mdash; Query by meeting start time. \n* `meeting_end_time` &mdash; Query by meeting end time. \n\nThis value defaults to `start_time`."
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once."
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End date."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "The page number of the current page in the returned records. This field is **not** available if the `query_date_type` parameter is the `meeting_start_time` or `meeting_end_time` value. \n\nThis field is deprecated. Use the `next_page_token` query parameter for pagination."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes."
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
    "url": "/report/upcoming_events",
    "method": "listUpcomingEventsReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get upcoming events report",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once."
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End date."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of event to query. \n* `meeting` &mdash; A meeting event. \n* `webinar` &mdash; A webinar event. \n* `all` &mdash; Both meeting and webinar events.\n\nThis value defaults to `all`."
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": "The group ID. To get a group ID, use the [**List groups**](https://developers.zoom.us) API. \n\n **Note:** The API response will only contain meetings where the host is a member of the queried group ID."
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
    "url": "/report/users",
    "method": "getActiveInactiveHostReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get active/inactive host reports",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Active or inactive hosts.  \n `active` - Active hosts.   \n `inactive` - Inactive hosts."
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start date in 'yyyy-mm-dd' format. The date range defined by the `from` and `to` parameters should only be one month as the report includes only one month worth of data at once."
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End date."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "The page number of the current page in the returned records."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes."
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": "The group ID. To get a group ID, use the [**List groups**](https://developers.zoom.us) API. \n\n **Note:** The API response will only contain users who are members of the queried group ID."
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
    "url": "/report/users/{userId}/meetings",
    "method": "getMeetingReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get meeting reports",
    "parameters": [
      {
        "name": "userId",
        "schema": "undefined",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value."
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once."
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End date."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The meeting type to query for: \n* `past` &mdash; All past meetings. \n* `pastOne` &mdash; A single past user meeting. \n* `pastJoined` &mdash; All past meetings the account's users hosted or joined."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pagination Object."
      }
    ]
  },
  {
    "url": "/report/webinars/{webinarId}",
    "method": "getWebinarDetailsReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get webinar detail reports",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API will return a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the webinar UUID before making an API request."
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
    "url": "/report/webinars/{webinarId}/participants",
    "method": "webinarParticipantsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get webinar participant reports",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API will return a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      },
      {
        "name": "includeFields",
        "schema": "string",
        "required": false,
        "description": "The additional query parameters to include. \n* `registrant_id` - Include the registrant's ID in the API response. The registrant ID is the webinar participant's unique ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pagination object."
      }
    ]
  },
  {
    "url": "/report/webinars/{webinarId}/polls",
    "method": "getWebinarPollReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get webinar poll reports",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API will return a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request."
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
    "url": "/report/webinars/{webinarId}/qa",
    "method": "getWebinarQaReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get webinar Q&A report",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API will return a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the webinar UUID before making an API request."
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
    "url": "/sip_phones",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SIP Phone",
    "typeScriptTag": "sipPhone",
    "description": "List SIP phones",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "**Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination."
      },
      {
        "name": "searchKey",
        "schema": "string",
        "required": false,
        "description": "User name or email address of a user. If this parameter is provided, only the SIP phone system integration enabled for that specific user will be returned. Otherwise, all SIP phones on an account will be returned."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes."
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
    "url": "/sip_phones",
    "method": "enableUserSipPhone",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SIP Phone",
    "typeScriptTag": "sipPhone",
    "description": "Enable SIP phone",
    "parameters": [
      {
        "name": "authorization_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "proxy_server",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "proxy_server2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "proxy_server3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "register_server",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "register_server2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "register_server3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "registration_expire_time",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "transport_protocol",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transport_protocol2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transport_protocol3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "user_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "voice_mail",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/sip_phones/{phoneId}",
    "method": "deletePhone",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SIP Phone",
    "typeScriptTag": "sipPhone",
    "description": "Delete SIP phone",
    "parameters": [
      {
        "name": "phoneId",
        "schema": "string",
        "required": true,
        "description": "The SIP phone ID. It can be retrieved from the List SIP Phones API."
      }
    ],
    "responses": []
  },
  {
    "url": "/sip_phones/{phoneId}",
    "method": "updateSpecificPhone",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "SIP Phone",
    "typeScriptTag": "sipPhone",
    "description": "Update SIP phone",
    "parameters": [
      {
        "name": "phoneId",
        "schema": "string",
        "required": true,
        "description": "The SIP phone ID. This can be retrieved from the List SIP Phones API."
      },
      {
        "name": "authorization_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "proxy_server",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "proxy_server2",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "proxy_server3",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "register_server",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "register_server2",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "register_server3",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "registration_expire_time",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "transport_protocol",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transport_protocol2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transport_protocol3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "voice_mail",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/tsp",
    "method": "getAccountInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Get account's TSP information",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tsp",
    "method": "updateAccountTspInformation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Update account's TSP information",
    "parameters": [
      {
        "name": "dial_in_number_unrestricted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "enable",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "master_account_setting_extended",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "modify_credential_forbidden",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "tsp_bridge",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tsp_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "tsp_provider",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{userId}/tsp",
    "method": "listUserTspAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "List user's TSP accounts",
    "parameters": [
      {
        "name": "userId",
        "schema": "undefined",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value."
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
    "url": "/users/{userId}/tsp",
    "method": "addUserTspAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Add a user's TSP account",
    "parameters": [
      {
        "name": "userId",
        "schema": "undefined",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value."
      },
      {
        "name": "conference_code",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "dial_in_numbers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "leader_pin",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "tsp_bridge",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "List of TSP accounts."
      }
    ]
  },
  {
    "url": "/users/{userId}/tsp/settings",
    "method": "setGlobalDialInUrl",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Set global dial-in URL for a TSP user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The userId or email address of the user."
      },
      {
        "name": "audio_url",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{userId}/tsp/{tspId}",
    "method": "deleteUserTspAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Delete a user's TSP account",
    "parameters": [
      {
        "name": "userId",
        "schema": "undefined",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value."
      },
      {
        "name": "tspId",
        "schema": "string",
        "required": true,
        "description": "TSP account ID."
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{userId}/tsp/{tspId}",
    "method": "getUserTspAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Get a user's TSP account",
    "parameters": [
      {
        "name": "userId",
        "schema": "undefined",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value."
      },
      {
        "name": "tspId",
        "schema": "string",
        "required": true,
        "description": "TSP account ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TSP account of the user."
      }
    ]
  },
  {
    "url": "/users/{userId}/tsp/{tspId}",
    "method": "updateUserTspAccount",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Update a TSP account",
    "parameters": [
      {
        "name": "userId",
        "schema": "undefined",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value."
      },
      {
        "name": "tspId",
        "schema": "string",
        "required": true,
        "description": "TSP account ID."
      },
      {
        "name": "conference_code",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "dial_in_numbers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "leader_pin",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "tsp_bridge",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/tracking_fields",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracking Field",
    "typeScriptTag": "trackingField",
    "description": "List tracking fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tracking Field List"
      }
    ]
  },
  {
    "url": "/tracking_fields",
    "method": "createField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tracking Field",
    "typeScriptTag": "trackingField",
    "description": "Create a tracking field",
    "parameters": [
      {
        "name": "field",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recommended_values",
        "schema": "array",
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "visible",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Tracking Field"
      }
    ]
  },
  {
    "url": "/tracking_fields/{fieldId}",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tracking Field",
    "typeScriptTag": "trackingField",
    "description": "Delete a tracking field",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The Tracking Field ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/tracking_fields/{fieldId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracking Field",
    "typeScriptTag": "trackingField",
    "description": "Get a tracking field",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The Tracking Field ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tracking Field"
      }
    ]
  },
  {
    "url": "/tracking_fields/{fieldId}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tracking Field",
    "typeScriptTag": "trackingField",
    "description": "Update a tracking field",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The Tracking Field ID"
      },
      {
        "name": "field",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recommended_values",
        "schema": "array",
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "visible",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/live_webinars/{webinarId}/chat/messages/{messageId}",
    "method": "deleteMessageById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a live webinar message",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "The live webinar chat message's unique identifier (UUID), in base64-encoded format."
      },
      {
        "name": "fileIds",
        "schema": "string",
        "required": false,
        "description": "The live webinar chat file's universally unique identifier (UUID), in base64-encoded format. Separate multiple values with commas."
      }
    ],
    "responses": []
  },
  {
    "url": "/past_webinars/{webinarId}/absentees",
    "method": "listAbsentees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get webinar absentees",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API will return a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) the webinar UUID before making an API request."
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of users."
      }
    ]
  },
  {
    "url": "/past_webinars/{webinarId}/instances",
    "method": "listPastInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List past webinar instances",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of webinars."
      }
    ]
  },
  {
    "url": "/past_webinars/{webinarId}/participants",
    "method": "listParticipants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List webinar participants",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API returns a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) the webinar UUID before making an API request."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
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
    "url": "/past_webinars/{webinarId}/polls",
    "method": "listPollResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List past webinar poll results",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API returns a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) the webinar UUID before making an API request."
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
    "url": "/past_webinars/{webinarId}/qa",
    "method": "listPastWebinarQa",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List Q&As of a past webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API returns a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) the webinar UUID before making an API request."
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
    "url": "/users/{userId}/webinar_templates",
    "method": "listWebinarTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List webinar templates",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user's ID. To get a user's ID, use the [**List users**](https://developers.zoom.us) API. For user-level apps, pass the `me` value instead of the user ID value."
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
    "url": "/users/{userId}/webinar_templates",
    "method": "createWebinarTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Create a webinar template",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user ID retrievable from the [List users](https://developers.zoom.us) API."
      },
      {
        "name": "webinar_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "save_recurrence",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "overwrite",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{userId}/webinars",
    "method": "listWebinars",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List webinars",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user's user ID or email address. For user-level apps, pass the `me` value."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of webinar. \n* `scheduled` - All valid previous (unexpired) webinars, live webinars, and upcoming scheduled webinars. \n* `upcoming` - All upcoming webinars, including live webinars."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "**Deprecated** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of webinars."
      }
    ]
  },
  {
    "url": "/users/{userId}/webinars",
    "method": "createWebinar",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Create a webinar",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value."
      },
      {
        "name": "agenda",
        "schema": "string",
        "description": ""
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recurrence",
        "schema": "object",
        "description": ""
      },
      {
        "name": "schedule_for",
        "schema": "string",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "string",
        "description": ""
      },
      {
        "name": "template_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "topic",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tracking_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "is_simulive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "record_file_id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Webinar object."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}",
    "method": "removeWebinar",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID."
      },
      {
        "name": "cancelWebinarReminder",
        "schema": "boolean",
        "required": false,
        "description": "`true` - Notify panelists and registrants about the webinar cancellation via email. \n\n`false` - Do not send any email notification to webinar registrants and panelists. \n\nThe default value of this field is `false`."
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID)."
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "Unique identifier for an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences. When you create a recurring Webinar using [**Create a webinar**](https://developers.zoom.us) API, you can retrieve the Occurrence ID from the response of the API call."
      },
      {
        "name": "showPreviousOccurrences",
        "schema": "boolean",
        "required": false,
        "description": "Set the value of this field to `true` if you would like to view Webinar details of all previous occurrences of a recurring Webinar."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webinar object."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}",
    "method": "updateScheduledWebinar",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update a webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "Webinar occurrence ID. Support change of agenda, start time, duration, and settings `host_video`, `panelist_video`, `hd_video, watermark`, `auto_recording`."
      },
      {
        "name": "agenda",
        "schema": "string",
        "description": ""
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schedule_for",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recurrence",
        "schema": "object",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "topic",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tracking_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "is_simulive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "record_file_id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/batch_registrants",
    "method": "createBatchRegistrants",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Perform batch registration",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's unique identifier."
      },
      {
        "name": "auto_approve",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "registrants",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/branding",
    "method": "getSessionBranding",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get webinar's session branding",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the webinar's sessions branding."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/branding/name_tags",
    "method": "deleteBrandingNameTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar's branding name tag",
    "parameters": [
      {
        "name": "nameTagIds",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of the name tag IDs to delete."
      },
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/branding/name_tags",
    "method": "createBrandingNameTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Create a webinar's branding name tag",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "text_color",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "accent_color",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "background_color",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "is_default",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "set_default_for_all_panelists",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/branding/name_tags/{nameTagId}",
    "method": "updateBrandingNameTag",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update a webinar's branding name tag",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "nameTagId",
        "schema": "string",
        "required": true,
        "description": "The name tag's ID."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "text_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accent_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "background_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_default",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "set_default_for_all_panelists",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/branding/virtual_backgrounds",
    "method": "deleteBrandingVirtualBackground",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar's branding Virtual Backgrounds",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of the Virtual Background file IDs to delete."
      },
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/branding/virtual_backgrounds",
    "method": "setDefaultBrandingVirtualBackground",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Set webinar's default branding Virtual Background",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "The Virtual Background file ID to update."
      },
      {
        "name": "setDefaultForAllPanelists",
        "schema": "boolean",
        "required": false,
        "description": "Whether to set the Virtual Background file as the new default for all panelists. This includes panelists not currently assigned a default Virtual Background."
      },
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/branding/virtual_backgrounds",
    "method": "uploadBrandingVirtualBackground",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Upload a webinar's branding Virtual Background",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "set_default_for_all_panelists",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/branding/wallpaper",
    "method": "deleteBrandingWallpaper",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar's branding wallpaper",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/branding/wallpaper",
    "method": "uploadBrandingWallpaper",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Upload a webinar's branding wallpaper",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/invite_links",
    "method": "createInviteLinks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Create webinar's invite links",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "attendees",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Invite links response."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/jointoken/live_streaming",
    "method": "joinTokenLiveStreaming",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar's join token for live streaming",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the webinar's join token."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/jointoken/local_archiving",
    "method": "getMeetingArchiveTokenForLocalArchiving",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar's archive token for local archiving",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the webinar's local archive token."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/jointoken/local_recording",
    "method": "getJoinTokenLocalRecording",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar's join token for local recording",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the webinar's local recorder join token."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/livestream",
    "method": "getLiveStreamDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get live stream details",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's unique ID."
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
    "url": "/webinars/{webinarId}/livestream",
    "method": "updateLiveStream",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update a live stream",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "page_url",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "stream_key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "stream_url",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "resolution",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/livestream/status",
    "method": "updateLiveStreamStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update live stream status",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/panelists",
    "method": "removePanelists",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Remove webinar panelists",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/panelists",
    "method": "listPanelists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List panelists",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webinar panelist."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/panelists",
    "method": "addPanelists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Add panelists",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "panelists",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/panelists/{panelistId}",
    "method": "removePanelist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Remove a panelist",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "panelistId",
        "schema": "string",
        "required": true,
        "description": "The panelist's ID or email."
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/polls",
    "method": "listPolls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List a webinar's polls ",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "anonymous",
        "schema": "boolean",
        "required": false,
        "description": "Whether to query for polls with the **Anonymous** option enabled: \n* `true` &mdash; Query for polls with the **Anonymous** option enabled. \n* `false` &mdash; Do not query for polls with the **Anonymous** option enabled."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Poll List"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/polls",
    "method": "createPoll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Create a webinar's poll",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anonymous",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "poll_type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Information about meeting and webinar polling."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/polls/{pollId}",
    "method": "deletePoll",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar poll",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "pollId",
        "schema": "string",
        "required": true,
        "description": "The poll ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/polls/{pollId}",
    "method": "getPollDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar poll",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "pollId",
        "schema": "string",
        "required": true,
        "description": "The poll ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about meeting and webinar polling."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/polls/{pollId}",
    "method": "updatePoll",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update a webinar poll",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "pollId",
        "schema": "string",
        "required": true,
        "description": "The poll ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anonymous",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "poll_type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/registrants",
    "method": "listRegistrants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List webinar registrants",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Query by the registrant's status. \n* `pending` - The registration is pending. \n* `approved` - The registrant is approved. \n* `denied` - The registration is denied."
      },
      {
        "name": "trackingSourceId",
        "schema": "string",
        "required": false,
        "description": "The tracking source ID for the registrants. Useful if you share the webinar registration page in multiple locations. See [Creating source tracking links for webinar registration](https://support.zoom.us/hc/en-us/articles/360000315683-Creating-source-tracking-links-for-webinar-registration) for details."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "**Deprecated** This field will be deprecated. We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination."
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of users."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/registrants",
    "method": "addRegistrant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Add a webinar registrant",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "occurrenceIds",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of webinar occurrence IDs. Get this value with the [Get a webinar](https://developers.zoom.us) API. Make sure the `registration_type` is 3 if updating multiple occurrences with this API."
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
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
        "name": "comments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_questions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "industry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "job_title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "no_of_employees",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "org",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "purchasing_time_frame",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role_in_purchase_process",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source_id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/registrants/questions",
    "method": "listRegistrationQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List registration questions",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webinar Registrant Questions"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/registrants/questions",
    "method": "updateRegistrationQuestions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update registration questions",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "custom_questions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/registrants/status",
    "method": "updateRegistrantStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update registrant's status",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID."
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "registrants",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/registrants/{registrantId}",
    "method": "deleteRegistrant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar registrant",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar ID."
      },
      {
        "name": "registrantId",
        "schema": "string",
        "required": true,
        "description": "The registrant ID."
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The webinar occurrence ID."
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/registrants/{registrantId}",
    "method": "registrantDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar registrant",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "registrantId",
        "schema": "string",
        "required": true,
        "description": "The registrant ID."
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webinar registrant."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/sip_dialing",
    "method": "getSipUriWithPasscode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar SIP URI with Passcode",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID. \n\n When storing this value in your database, store it as a long format integer and **not** an integer. Webinar IDs can exceed 10 digits."
      },
      {
        "name": "passcode",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Information about the webinar's encoded SIP URI."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/status",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update webinar status",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
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
    "url": "/webinars/{webinarId}/survey",
    "method": "deleteSurvey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar survey",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/survey",
    "method": "getSurvey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar survey",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the webinar survey."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/survey",
    "method": "updateSurvey",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update a webinar survey",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "custom_survey",
        "schema": "object",
        "description": ""
      },
      {
        "name": "show_in_the_browser",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "show_in_the_follow_up_email",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "third_party_survey",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webinars/{webinarId}/token",
    "method": "getWebinarToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get webinar's token",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The webinar token type: \n* `closed_caption_token` &mdash; The third-party closed caption API token. \n\nThis defaults to `closed_caption_token`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the webinar token."
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/tracking_sources",
    "method": "listTrackingSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get webinar tracking sources",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID."
      }
    ],
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
      apiTitle="Zoom Meeting API"
      apiBaseUrl="https://api.zoom.us/v2"
      apiVersion="2"
      endpoints={112}
      sdkMethods={164}
      schemas={0}
      parameters={606}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zoom/meeting/openapi.yaml"
    />
  );
}
  