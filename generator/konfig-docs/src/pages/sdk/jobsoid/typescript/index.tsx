import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function JobsoidTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="jobsoid-typescript-sdk"
      metaDescription={`Jobsoid is an Online Applicant Tracking System (ATS) which simplifies every step of the recruitment process in organizations, streamlining everything from sourcing potential candidates to hiring the right one. Jobsoid is the only recruitment software with the ability to help save your precious time, by automatically screening candidate applications and suggesting the best fit candidates for a certain job profile in your company. Instead of manually navigating through innumerable resumes, job applications and responses, and then trying to track and manage them with spreadsheets or emails, let Jobsoid take on the workload for you.
Our software is designed to make your life and work simpler, by automating most of the work involved in recruitment and candidate shortlisting, thereby freeing up your time for the actual selection and hiring process. Based on your organization's hiring needs, you can opt for a free plan that offers all the basics, or use one of our premium plans that are customized for a variety of different recruitment and hiring requirements. Jobsoid acts as your recruitment helper right from start to finish.
Post a job opening, send automated responses and bulk emails, filter through applications, schedule interviews, set up automated backups, and much more!`}
      company="Jobsoid"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobsoid/logo.png"
      companyKebabCase="jobsoid"
      clientNameCamelCase="jobsoid"
      homepage="jobsoid.com"
      lastUpdated={new Date("2024-03-28T00:10:52.272Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobsoid/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobsoid/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["applicant_tracking","recruitment","automation"]}
      methods={[
  {
    "url": "/api/v1/jobs",
    "method": "listPublished",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Get a list of published jobs on your account\n",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "Search by Job Title (https://apidocs.jobsoid.com/"
      },
      {
        "name": "loc",
        "schema": "integer",
        "description": "Search by Location (https://apidocs.jobsoid.com/"
      },
      {
        "name": "dept",
        "schema": "integer",
        "description": "Search by Department (https://apidocs.jobsoid.com/"
      },
      {
        "name": "div",
        "schema": "integer",
        "description": "Search by Division (https://apidocs.jobsoid.com/"
      },
      {
        "name": "fun",
        "schema": "integer",
        "description": "Search by Job Function (https://apidocs.jobsoid.com/"
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
    "url": "/api/v1/jobs/{jobId}",
    "method": "detailsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Get details of a Published Job\n",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/locations",
    "method": "locationList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lookups",
    "typeScriptTag": "lookups",
    "description": "Get a list of Locations on your account\n",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/departments",
    "method": "getDepartmentsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lookups",
    "typeScriptTag": "lookups",
    "description": "Get a list of Departments on your account\n",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/divisions",
    "method": "getDivisions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lookups",
    "typeScriptTag": "lookups",
    "description": "Get a list of Divisions on your account. Please contact support if you wish to enable this property on your account.\n",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/functions",
    "method": "listJobFunctions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lookups",
    "typeScriptTag": "lookups",
    "description": "Get a list of Job Functions on your account\n",
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
      apiTitle="Jobsoid API"
      apiBaseUrl="https://demo.jobsoid.com"
      apiVersion="1.0"
      endpoints={6}
      sdkMethods={7}
      schemas={11}
      parameters={5}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobsoid/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jobsoid/openapi.yaml"
      developerDocumentation="apidocs.jobsoid.com/"
    />
  );
}
  