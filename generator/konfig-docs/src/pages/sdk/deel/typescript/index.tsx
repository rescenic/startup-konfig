import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function DeelTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="deel-typescript-sdk"
      metaDescription={`Deel is the all-in-one Global People Platform that simplifies and streamlines every aspect of managing an international workforce—from culture and onboarding, to local payroll and compliance. Our industry-leading suite of HR tools, payroll solutions, mobility services, and compliance expertise makes it possible for companies of all sizes to scale globally with unmatched speed and flexibility.

Today, Deel serves over 25,000+ companies worldwide—from small teams to publicly traded enterprise businesses.`}
      company="Deel"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/deel/logo.png"
      companyKebabCase="deel"
      clientNameCamelCase="deel"
      homepage="deel.com"
      lastUpdated={new Date("2024-03-25T23:56:49.147Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/deel/favicon.png"
      // Missing contactUrl
      contactEmail="apiteam@deel.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/deel/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","payroll","compliance","global_payments","multinational","talent_acquisition_analytics","payment_services","independent_contractors","remote_hiring","remote_work","hris"]}
      methods={[
  {
    "url": "/invoices",
    "method": "getPaidInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieve invoices",
    "parameters": [
      {
        "name": "issuedFromDate",
        "schema": "string",
        "description": "to get records created after given issue date"
      },
      {
        "name": "issuedToDate",
        "schema": "string",
        "description": "to get records created before given issued date"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Return a page of results with given number of records; NOTE: technically ALL query parameters are strings or array of strings",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Return a page of results after given index of row; NOTE: technically ALL query parameters are strings or array of strings",
        "default": 0
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
    "url": "/invoices/deel",
    "method": "getDeelInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieve Deel invoices",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "description": "Return a page of results with given number of records; NOTE: technically ALL query parameters are strings or array of strings",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Return a page of results after given index of row; NOTE: technically ALL query parameters are strings or array of strings",
        "default": 0
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
    "url": "/invoices/{invoice_id}/download",
    "method": "getInvoicePdfDownloadLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Download invoice PDF",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "ID of an existing invoice",
        "example": "INVOICE_ID"
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
    "url": "/managers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Managers",
    "typeScriptTag": "managers",
    "description": "List of managers",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Maximum number of records to return.",
        "default": "50"
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "Offset/index of record for the next page of records to return.",
        "default": "0"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": "A matching profile already exists."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/managers",
    "method": "createNewManager",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Managers",
    "typeScriptTag": "managers",
    "description": "Create a manager",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "required": true,
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "409",
        "description": "A matching profile already exists."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/hris/direct-employees",
    "method": "createDirectEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Create a new Hris direct employee",
    "parameters": [
      {
        "name": "employee_details",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "team_information",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "job_information",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "compensation",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "contract",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "vacation_info",
        "schema": "object",
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
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "409",
        "description": "A matching profile already exists"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/eor/validations/{country_code}",
    "method": "getCountryGuide",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EOR",
    "typeScriptTag": "eor",
    "description": "Retrieve country guide",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "required": true,
        "description": "Country code.",
        "example": "US"
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
    "url": "/eor/workers/{worker_id}/payslips",
    "method": "getEmployeePayslips",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EOR",
    "typeScriptTag": "eor",
    "description": "Retrieve employee payslips",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
    "url": "/eor/workers/{worker_id}/payslips/{payslip_id}/download",
    "method": "getPayslipDownload",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EOR",
    "typeScriptTag": "eor",
    "description": "Download payslip PDF",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "payslipId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a payslip.",
        "example": "ApdZbLvq0r0E"
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
    "url": "/eor/employment_cost",
    "method": "calculateEmployeeCosts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EOR",
    "typeScriptTag": "eor",
    "description": "Employee Cost Calculator",
    "parameters": [
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/eor/{contract_id}/benefits",
    "method": "getContractBenefits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EOR",
    "typeScriptTag": "eor",
    "description": "Get EOR contract benefits",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
    "url": "/eor",
    "method": "createContractQuote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EOR",
    "typeScriptTag": "eor",
    "description": "Create an EOR contract",
    "parameters": [
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
        "statusCode": "401",
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
    "url": "/contracts/gp",
    "method": "createContractGp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "Create a contract",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
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
    "url": "/contracts/time-based",
    "method": "createNewTimeBasedContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Create a new contract (time-based)",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
        "required": true,
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/gp/workers/{worker_id}/payslips",
    "method": "getPayslips",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "Retrieve employee payslips",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
    "url": "/gp/workers/{worker_id}/address",
    "method": "updateWorkerAddress",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "Update address",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "401",
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
    "url": "/gp/workers/{worker_id}/banks",
    "method": "getBankAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "Retrieve bank accounts",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
    "url": "/gp/workers/{worker_id}/banks",
    "method": "addBankAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "Add bank account",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/gp/workers/{worker_id}/banks/{bank_id}",
    "method": "modifyBankAccount",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "Modify bank account",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "bankId",
        "schema": "string",
        "required": true,
        "description": "Bank Account id.",
        "example": "dcc7b587-2246-4909-853e-12056e90c451"
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/gp/workers/{worker_id}/banks/guide",
    "method": "getBankGuide",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "Retrieve bank guide",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
    "url": "/gp/workers/{worker_id}/compensation",
    "method": "updateCompensationHistory",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "Update compensation",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "401",
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
    "url": "/gp/workers/{worker_id}/pto-policy",
    "method": "updatePtoPolicy",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "Update PTO policy",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "401",
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
    "url": "/gp/workers/{worker_id}/employee-information",
    "method": "updateEmployeeInformation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "Update employee information",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "401",
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
    "url": "/gp/workers/{worker_id}/payslips/{payslip_id}/download",
    "method": "getPayslipDownloadUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "Download payslip PDF",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "payslipId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a payslip.",
        "example": "ApdZbLvq0r0E"
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
    "url": "/gp/legal-entities/{legal_entity_id}/reports",
    "method": "listPayrollEventsByLegalEntity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "List payroll events by legal entity",
    "parameters": [
      {
        "name": "legalEntityId",
        "schema": "string",
        "required": true,
        "description": "Id of an legal entity.",
        "example": "LEGAL_ENTITY_ID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Start date of payroll report.",
        "example": "1999-12-31T00:00:00.000Z"
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
    "url": "/gp/reports/{gp_report_id}/gross_to_net",
    "method": "getGrossToNetGpReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "List gross-to-net report",
    "parameters": [
      {
        "name": "gpReportId",
        "schema": "string",
        "required": true,
        "description": "Id of gp report.",
        "example": "GP_REPORT_ID"
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
    "url": "/gp/reports/{gp_report_id}/gross_to_net/csv",
    "method": "downloadGrossToNetGpReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "Download gross-to-net report",
    "parameters": [
      {
        "name": "gpReportId",
        "schema": "string",
        "required": true,
        "description": "Id of gp report.",
        "example": "GP_REPORT_ID"
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
    "url": "/gp/workers/{worker_id}/terminations",
    "method": "requestTerminationProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Global Payroll",
    "typeScriptTag": "globalPayroll",
    "description": "Request termination",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/adjustments",
    "method": "createNewAdjustment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Adjustments",
    "typeScriptTag": "adjustments",
    "description": "Create a new adjustment",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
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
    "url": "/adjustments/{adjustment_id}",
    "method": "removeAdjustment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Adjustments",
    "typeScriptTag": "adjustments",
    "description": "Delete an adjustment",
    "parameters": [
      {
        "name": "adjustmentId",
        "schema": "string",
        "required": true,
        "description": "Adjustment id.",
        "example": "ADJUSTMENT_ID"
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
    "url": "/adjustments/{adjustment_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Adjustments",
    "typeScriptTag": "adjustments",
    "description": "Retrieve an adjustment",
    "parameters": [
      {
        "name": "adjustmentId",
        "schema": "string",
        "required": true,
        "description": "Adjustment id.",
        "example": "ADJUSTMENT_ID"
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
    "url": "/adjustments/{adjustment_id}",
    "method": "updateAdjustment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Adjustments",
    "typeScriptTag": "adjustments",
    "description": "Update an adjustment",
    "parameters": [
      {
        "name": "adjustmentId",
        "schema": "string",
        "required": true,
        "description": "Adjustment id.",
        "example": "ADJUSTMENT_ID"
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
        "statusCode": "401",
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
    "url": "/adjustments/categories",
    "method": "getCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Adjustments",
    "typeScriptTag": "adjustments",
    "description": "Retrieve categories",
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
    "url": "/candidates",
    "method": "addCandidateToDeel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Add Candidate",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "required": true,
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/candidates/{candidate_id}",
    "method": "updateCandidateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Update Candidate",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "Candidate id.",
        "example": "37nex2x"
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/contracts/{contract_id}/additional-information",
    "method": "addAdditionalInformationForEorEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "Add additional information",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "data",
        "schema": "undefined",
        "required": true,
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/contracts/{contract_id}/signatures",
    "method": "signContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "Sign a contract",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/contracts/{contract_id}/custom-verification-letter",
    "method": "requestCustomVerificationLetter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "Request custom verification letter",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/contracts/{contract_id}/hr-documents",
    "method": "listHrVerificationLettersAndDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "List HR verification letters and documents",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/contracts/{contract_id}/hr-documents/{document_id}/download",
    "method": "downloadHrVerificationLettersAndDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "Download HR verification letters and documents",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "documentId",
        "schema": "number",
        "required": true,
        "description": "Unique identifier for a compliance document in Deel.",
        "example": 1234
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/contracts/{contract_id}/offer-letter",
    "method": "previewJobOfferLetter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "Preview job offer letter",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/contracts/{contract_id}/employee-agreement",
    "method": "getEmployeeAgreementHtml",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "Preview employee agreement",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/contracts/{contract_id}/employee-agreement/download",
    "method": "downloadEmployeeAgreementPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "Download employee agreement PDF",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/banks/guide",
    "method": "getBankGuideForEorEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "Bank account form",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/banks",
    "method": "addBankAccountForEorEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "Add bank account",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "data",
        "schema": "array",
        "required": true,
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/banks/{bank_id}",
    "method": "modifyBankAccountForEorEmployee",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "Modify bank account for an EOR employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "bankId",
        "schema": "string",
        "required": true,
        "description": "Bank Account id.",
        "example": "dcc7b587-2246-4909-853e-12056e90c451"
      },
      {
        "name": "data",
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
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/payslips",
    "method": "listPayslipsForEorEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "Get list of payslips for an EOR employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/compliance-documents",
    "method": "listEmployeeComplianceDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "List of employee compliance documents",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/compliance-documents/{document_id}",
    "method": "uploadComplianceDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "Upload employee compliance document",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "documentId",
        "schema": "number",
        "required": true,
        "description": "Unique identifier for a compliance document in Deel.",
        "example": 1234
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/compliance-documents/{document_id}/templates/download",
    "method": "downloadComplianceDocumentTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "Download employee compliance document template",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "documentId",
        "schema": "number",
        "required": true,
        "description": "Unique identifier for a compliance document in Deel.",
        "example": 1234
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/partner-managed/employees/{employee_id}/tax-documents",
    "method": "listTaxDocumentsForEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Managed",
    "typeScriptTag": "partnerManaged",
    "description": "List of tax documents for an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for an employee in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/task-based",
    "method": "createNewTaskBasedContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Create a new contract (task-based)",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
        "required": true,
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/contracts/milestone-based",
    "method": "createNewMilestoneContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Create a new contract (milestone-based)",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
        "required": true,
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/contracts/fixed-rate",
    "method": "createNewFixedRateContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Create a new contract (fixed-rate)",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
        "required": true,
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/contracts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "List of contracts",
    "parameters": [
      {
        "name": "afterCursor",
        "schema": "string",
        "description": "Return next page of results after given cursor."
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Return a page of results with given number of records; NOTE: technically ALL query parameters are strings or array of strings",
        "default": 10
      },
      {
        "name": "orderDirection",
        "schema": "string",
        "description": "Order direction of results; ascending or descending."
      },
      {
        "name": "types",
        "schema": "array",
        "description": "You can filter contracts by type, a contract is included in results if its type is in this list."
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": "You can filter contracts by current status, a contract is included in results if its status is in this list."
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": "Filter contracts for given team ID; NOTE: technically ALL query parameters are strings or array of strings"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "Filter contracts for given external ID"
      },
      {
        "name": "countries",
        "schema": "array",
        "description": "Country codes of contracts to filter."
      },
      {
        "name": "currencies",
        "schema": "undefined",
        "description": "Currency codes of contracts to filter."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Include a contract if by name or contractor name contains given search term."
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Sort contracts by given field name."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts",
    "method": "createNewDeelContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Create a new contract",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
        "required": true,
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}",
    "method": "getSingleContract",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Retrieve a single contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}",
    "method": "addExternalId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "External Id",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/documents",
    "method": "attachFileToDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Attach a file to contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "file",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/documents",
    "method": "editFileAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Edit the file attached to contract document.",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "file",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/preview",
    "method": "getContractPreview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Preview a contract agreement",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": false,
        "description": "ID of an existing contract template."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/tasks",
    "method": "getContractTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "List of tasks",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/tasks",
    "method": "createNewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Create new task",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/alternate_emails",
    "method": "findEmailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Find contract emails by ID",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of alternate email addresses."
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
    "url": "/contracts/{contract_id}/tasks/many/reviews",
    "method": "reviewManyTasks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Review multiple tasks",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/tasks/{task_id}/reviews",
    "method": "submitTaskReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Review a single task",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "ID of task entity.",
        "example": "TASK_ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/tasks/{task_id}",
    "method": "deleteFromContract",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Delete task",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "ID of task entity.",
        "example": "TASK_ID"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": "Reason for deleting an existing task"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/amendments",
    "method": "amendContractDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Amend contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/terminations",
    "method": "terminateContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Terminate contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/signatures",
    "method": "clientSignContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Sign a contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/archive",
    "method": "archiveContract",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Archive a contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/contracts/{contract_id}/invitations",
    "method": "removeInvite",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Remove invite",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/invitations",
    "method": "inviteWorkerToSign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Send contract to worker",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/timesheets",
    "method": "listByContract",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "List of timesheets by contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "contractTypes",
        "schema": "array",
        "description": "Types of contracts to filter."
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": "Statuses of timesheets to filter."
      },
      {
        "name": "reporterId",
        "schema": "number",
        "description": "ID of an existing profile; NOTE: technically ALL query parameters are strings or array of strings"
      },
      {
        "name": "dateFrom",
        "schema": "string",
        "description": "Filtered results will include records created on or after the provided date.",
        "example": "2022-01-01T00:00:00.000Z"
      },
      {
        "name": "dateTo",
        "schema": "string",
        "description": "Filtered results will include records created before the provided date.",
        "example": "2022-12-01T00:00:00.000Z"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Return a page of results with given number of records; NOTE: technically ALL query parameters are strings or array of strings",
        "default": 99
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Return a page of results after given index of row",
        "default": 0
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/milestones",
    "method": "listByContract",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "List of milestones by contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/milestones",
    "method": "createNewMilestone",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Create a milestone",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/milestones/{milestone_id}",
    "method": "deleteSingleMilestone",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Delete a milestone",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "milestoneId",
        "schema": "string",
        "required": true,
        "description": "ID of milestone to return",
        "example": "MILESTONE_ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/milestones/{milestone_id}",
    "method": "getSingleMilestone",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Retrieve a single milestone",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "milestoneId",
        "schema": "string",
        "required": true,
        "description": "ID of milestone to return",
        "example": "MILESTONE_ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/milestones/{milestone_id}/reviews",
    "method": "createReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Review a single milestone",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "milestoneId",
        "schema": "string",
        "required": true,
        "description": "ID of milestone to return",
        "example": "MILESTONE_ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/milestones/many/reviews",
    "method": "reviewMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Review multiple milestones",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/off-cycle-payments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Off-cycle Payments",
    "typeScriptTag": "offCyclePayments",
    "description": "List of off-cycle payments",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/off-cycle-payments",
    "method": "addPaymentInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Off-cycle Payments",
    "typeScriptTag": "offCyclePayments",
    "description": "Add off-cycle payment",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/off-cycle-payments/{offcycle_payment_id}",
    "method": "getSinglePayment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Off-cycle Payments",
    "typeScriptTag": "offCyclePayments",
    "description": "Retrieve a single off-cycle payment",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "offcyclePaymentId",
        "schema": "string",
        "required": true,
        "description": "ID of off-cycle payment to return",
        "example": "OFFCYCLE_PAYMENT_ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/premium",
    "method": "removePremium",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Downgrade from Premium",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": "Reason for deleting an existing Deel Premium from a contract."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/premium",
    "method": "upgradeToPremium",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Upgrade to Premium",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/contracts/{contract_id}/final-payments",
    "method": "calculateFinalPaymentAmount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Calculate final payment",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The day to end the contract.",
        "example": "1999-12-31T00:00:00.000Z"
      },
      {
        "name": "calculationType",
        "schema": "string",
        "required": false,
        "description": "The days to calculate."
      },
      {
        "name": "workweekStart",
        "schema": "string",
        "required": false,
        "description": "The day the work week starts, 0 to 6"
      },
      {
        "name": "workweekEnd",
        "schema": "string",
        "required": false,
        "description": "The day the work week ends, 0 to 6"
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
    "url": "/contracts/estimate",
    "method": "calculateFirstPaymentAmount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Calculate first payment amount",
    "parameters": [
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
        "statusCode": "401",
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
    "url": "/contracts/{contract_id}/time-offs",
    "method": "listByContract",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "List time off by contract (obsolete)",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
    "url": "/contracts/{contract_id}/time-offs",
    "method": "addRequestObsolete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Add a time off request (obsolete)",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/contracts/{contract_id}/time-offs/{timeoff_id}",
    "method": "cancelRequestObsolete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Cancel a time off request (obsolete)",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "timeoffId",
        "schema": "string",
        "required": true,
        "description": "Time off Id",
        "example": "12345"
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
    "url": "/contracts/{contract_id}/time-offs/{timeoff_id}",
    "method": "editRequestObsolete",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Edit a time off request (obsolete)",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "timeoffId",
        "schema": "string",
        "required": true,
        "description": "Time off Id",
        "example": "12345"
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/timesheets",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "List of timesheets",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "description": "Id of a Deel contract."
      },
      {
        "name": "contractTypes",
        "schema": "array",
        "description": "Types of contracts to filter."
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": "Statuses of timesheets to filter."
      },
      {
        "name": "reporterId",
        "schema": "number",
        "description": "ID of an existing profile; NOTE: technically ALL query parameters are strings or array of strings"
      },
      {
        "name": "dateFrom",
        "schema": "string",
        "description": "Filtered results will include records created on or after the provided date.",
        "example": "2022-01-01T00:00:00.000Z"
      },
      {
        "name": "dateTo",
        "schema": "string",
        "description": "Filtered results will include records created before the provided date.",
        "example": "2022-12-01T00:00:00.000Z"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Return a page of results with given number of records; NOTE: technically ALL query parameters are strings or array of strings",
        "default": 99
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Return a page of results after given index of row",
        "default": 0
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/timesheets",
    "method": "submitWorkForContractor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Create a timesheet entry",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "required": true,
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/timesheets/{timesheet_id}",
    "method": "deleteEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Delete a timesheet entry",
    "parameters": [
      {
        "name": "timesheetId",
        "schema": "number",
        "required": true,
        "description": "ID of an existing timesheet",
        "example": 0
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": "Reason for deleting an existing timesheet"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/timesheets/{timesheet_id}",
    "method": "getSingleEntry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Retrieve a single timesheet entry",
    "parameters": [
      {
        "name": "timesheetId",
        "schema": "number",
        "required": true,
        "description": "ID of an existing timesheet",
        "example": 0
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/timesheets/{timesheet_id}",
    "method": "updateEntry",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Update a timesheet entry",
    "parameters": [
      {
        "name": "timesheetId",
        "schema": "number",
        "required": true,
        "description": "ID of an existing timesheet",
        "example": 0
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/timesheets/{timesheet_id}/reviews",
    "method": "reviewSingleTimesheet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Review a single timesheet",
    "parameters": [
      {
        "name": "timesheetId",
        "schema": "number",
        "required": true,
        "description": "ID of an existing timesheet",
        "example": 0
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/timesheets/many/reviews",
    "method": "reviewMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Review multiple timesheets",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "required": true,
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/invoice-adjustments",
    "method": "getLineItemsByContract",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Invoice line items by contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "contractTypes",
        "schema": "array",
        "description": "types of contracts to filter"
      },
      {
        "name": "types",
        "schema": "array",
        "description": "types of invoice adjustments to filter"
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": "statuses of invoice adjustment to filter"
      },
      {
        "name": "invoiceId",
        "schema": "number",
        "description": "ID of an existing invoice; NOTE: technically ALL query parameters are strings or array of strings"
      },
      {
        "name": "reporterId",
        "schema": "number",
        "description": "ID of an existing profile; NOTE: technically ALL query parameters are strings or array of strings"
      },
      {
        "name": "dateFrom",
        "schema": "string",
        "description": "to get invoice adjustments submitted on or after given start date (inclusive)",
        "example": "1999-12-31T00:00:00.000Z"
      },
      {
        "name": "dateTo",
        "schema": "string",
        "description": "to get invoice adjustments submitted before given end date (excludes records submitted on this date)",
        "example": "1999-12-31T00:00:00.000Z"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Return a page of results with given number of records; NOTE: technically ALL query parameters are strings or array of strings",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Return a page of results after given index of row; NOTE: technically ALL query parameters are strings or array of strings",
        "default": 0
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/invoice-adjustments",
    "method": "listInvoiceAdjustments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "List invoice adjustments",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "description": "Id of an Deel contract."
      },
      {
        "name": "contractTypes",
        "schema": "array",
        "description": "types of contracts to filter"
      },
      {
        "name": "types",
        "schema": "array",
        "description": "types of invoice adjustments to filter"
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": "statuses of invoice adjustment to filter"
      },
      {
        "name": "invoiceId",
        "schema": "number",
        "description": "ID of an existing invoice; NOTE: technically ALL query parameters are strings or array of strings"
      },
      {
        "name": "reporterId",
        "schema": "number",
        "description": "ID of an existing profile; NOTE: technically ALL query parameters are strings or array of strings"
      },
      {
        "name": "dateFrom",
        "schema": "string",
        "description": "to get invoice adjustments submitted on or after given start date (inclusive)",
        "example": "1999-12-31T00:00:00.000Z"
      },
      {
        "name": "dateTo",
        "schema": "string",
        "description": "to get invoice adjustments submitted before given end date (excludes records submitted on this date)",
        "example": "1999-12-31T00:00:00.000Z"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Return a page of results with given number of records; NOTE: technically ALL query parameters are strings or array of strings",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Return a page of results after given index of row; NOTE: technically ALL query parameters are strings or array of strings",
        "default": 0
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/invoice-adjustments",
    "method": "createAdjustment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Create an invoice adjustment",
    "parameters": [
      {
        "name": "recurring",
        "schema": "boolean",
        "required": false,
        "description": "Add this invoice adjustment as recurring"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/invoice-adjustments/{invoice_adjustment_id}",
    "method": "deleteAdjustment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Delete an invoice adjustment",
    "parameters": [
      {
        "name": "invoiceAdjustmentId",
        "schema": "number",
        "required": true,
        "description": "ID of an existing invoice adjustment",
        "example": 0
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": "Reason for deleting an existing invoice adjustment"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/invoice-adjustments/{invoice_adjustment_id}",
    "method": "updateAdjustmentById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Update an invoice adjustment",
    "parameters": [
      {
        "name": "invoiceAdjustmentId",
        "schema": "number",
        "required": true,
        "description": "ID of an existing invoice adjustment",
        "example": 0
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/invoice-adjustments/{invoice_adjustment_id}/reviews",
    "method": "submitAdjustmentReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Review an invoice adjustment",
    "parameters": [
      {
        "name": "invoiceAdjustmentId",
        "schema": "number",
        "required": true,
        "description": "ID of an existing invoice adjustment",
        "example": 0
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/invoice-adjustments/many/reviews",
    "method": "reviewMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Bulk review invoice adjustments",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "required": true,
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/invoice-adjustments/{invoice_adjustment_id}/attachment",
    "method": "getAttachmentFileUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve Attachment file url.",
    "parameters": [
      {
        "name": "invoiceAdjustmentId",
        "schema": "number",
        "required": true,
        "description": "ID of an existing invoice adjustment",
        "example": 0
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/legal-entities",
    "method": "getLegalEntitiesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "List of legal entities",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Return list of global payroll legal entities if provided"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/lookups/countries",
    "method": "getCountryList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lookups",
    "typeScriptTag": "lookups",
    "description": "Country list",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/lookups/currencies",
    "method": "getCurrenciesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lookups",
    "typeScriptTag": "lookups",
    "description": "Currency list",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/lookups/job-titles",
    "method": "getJobTitlesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lookups",
    "typeScriptTag": "lookups",
    "description": "Job titles list",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Return a page of results with given number of records; NOTE: technically ALL query parameters are strings or array of strings",
        "default": 99
      },
      {
        "name": "afterCursor",
        "schema": "string",
        "required": false,
        "description": "Return next page of results after given cursor"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/lookups/seniorities",
    "method": "getSeniorityLevels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lookups",
    "typeScriptTag": "lookups",
    "description": "Seniority levels",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Return a page of results with given number of records; NOTE: technically ALL query parameters are strings or array of strings",
        "default": 50
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/lookups/time-off-types",
    "method": "getTimeOffTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lookups",
    "typeScriptTag": "lookups",
    "description": "Time-off types",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/organizations",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Get current organization",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/teams",
    "method": "getTeamList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Get team list",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/attachments",
    "method": "uploadDeelFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Upload file to Deel",
    "parameters": [
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
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/agreements",
    "method": "listAgreementsWithDeel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Get agreements with Deel.",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": false,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Maximum number of records to return.",
        "default": "50"
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "Offset/index of record for the next page of records to return.",
        "default": "0"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contract-templates",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Get contract templates",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/contracts/{contract_id}/entitlements",
    "method": "listEntitlements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "List time off entitlements (obsolete)",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
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
    "url": "/contracts/{contract_id}/adjustments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Adjustments",
    "typeScriptTag": "adjustments",
    "description": "Retrieve adjustments",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Deel contract id.",
        "example": "37nex2x"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Filter adjustments by start date."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Filter adjustments by end date."
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
    "url": "/time-offs/{timeoff_id}/review",
    "method": "manageRequest",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Review a time off request (obsolete)",
    "parameters": [
      {
        "name": "timeoffId",
        "schema": "string",
        "required": true,
        "description": "Time off Id",
        "example": "12345"
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/payments",
    "method": "getPaymentReceipts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieve payment reciepts",
    "parameters": [
      {
        "name": "dateFrom",
        "schema": "string",
        "description": "Filtered results will include records created on or after the provided date.",
        "example": "2022-01-01T00:00:00.000Z"
      },
      {
        "name": "dateTo",
        "schema": "string",
        "description": "Filtered results will include records created before the provided date.",
        "example": "2022-12-01T00:00:00.000Z"
      },
      {
        "name": "currencies",
        "schema": "undefined",
        "description": "Currency codes of contracts to filter."
      },
      {
        "name": "entities",
        "schema": "undefined",
        "required": false,
        "description": "Filter by legal entity type; company, or individual"
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
    "url": "/internal/people",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Get internal people list",
    "parameters": [
      {
        "name": "offset",
        "schema": "number",
        "description": "Return a page of results with given number of records.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Return a page of results with given number of records."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/people",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "List of people",
    "parameters": [
      {
        "name": "offset",
        "schema": "number",
        "description": "Return a page of results with given number of records.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Return a page of results with given number of records."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Include a contract if by name or contractor name contains given search term."
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Sort people by given field name."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order direction of results; ascending or descending."
      },
      {
        "name": "hiringStatuses[]",
        "schema": "string",
        "description": "Employee's current hiring status."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/people/{worker_id}",
    "method": "getPerson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Retrieve a single person",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/people/{worker_id}/department",
    "method": "updateDepartment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Update department",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/people/{worker_id}/working-location",
    "method": "updateWorkingLocation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Update working location",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/people/me",
    "method": "getCurrentProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Get my current profile",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "People object representing a Deel"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/people/{worker_id}/time-offs",
    "method": "listTimeOffsByWorkerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "List of time off entries",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
    "url": "/people/{worker_id}/time-offs",
    "method": "addTimeOffRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Add a time off request",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VACATION"
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-09-03T00:00:00.000Z"
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2022-09-05T00:00:00.000Z"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Holiday"
      },
      {
        "name": "attachments",
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
    "url": "/people/{worker_id}/time-offs/entitlements",
    "method": "listTimeOffEntitlements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "List of time off entitlements",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
    "url": "/people/{worker_id}/time-offs/{timeoff_id}",
    "method": "deleteTimeOffRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Delete a time off request",
    "parameters": [
      {
        "name": "timeoffId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a time-off in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/people/{worker_id}/time-offs/{timeoff_id}",
    "method": "editTimeOffRequest",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Edit a time off request",
    "parameters": [
      {
        "name": "timeoffId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a time-off in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "VACATION"
      },
      {
        "name": "start_date",
        "schema": "string",
        "description": "",
        "example": "2022-09-03T00:00:00.000Z"
      },
      {
        "name": "end_date",
        "schema": "string",
        "description": "",
        "example": "2022-09-05T00:00:00.000Z"
      },
      {
        "name": "reason",
        "schema": "string",
        "description": "",
        "example": "Holiday"
      },
      {
        "name": "attachments",
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
        "statusCode": "401",
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
    "url": "/people/{worker_id}/time-offs/{timeoff_id}/review",
    "method": "reviewTimeOff",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Review a time off request",
    "parameters": [
      {
        "name": "timeoffId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a time-off in Deel.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
      },
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
        "statusCode": "401",
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
    "url": "/people/{worker_id}/time-offs/policies",
    "method": "listTimeOffPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "List of time off policies",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for a worker.",
        "example": "0123abcd-e031-4f1e-93d4-6bc66e8c4727"
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
    "url": "/webhooks",
    "method": "listWebhookSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List of webhooks",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/webhooks",
    "method": "createSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a webhook",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "I like it very much."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My first webhook."
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "enabled"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://mywebhook.com"
      },
      {
        "name": "signing_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": null
      },
      {
        "name": "api_version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "v2",
        "default": "v2"
      },
      {
        "name": "events",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "contract.created"
        ]
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/webhooks/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "successful operation"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/webhooks/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Retrieve a single webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
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
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
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
    "url": "/webhooks/{id}",
    "method": "editById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Edit a webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My first webhook"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Demo webhook"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "enabled"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://mywebhook.com/listening"
      },
      {
        "name": "signing_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": null
      },
      {
        "name": "api_version",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "v2",
        "default": "v2"
      },
      {
        "name": "events",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "contract.created"
        ]
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/webhooks/events/types",
    "method": "listEventTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List of webhook event types",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/payments/{payment_id}/breakdown",
    "method": "getPaymentBreakdown",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Retrieve a payment breakdown",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT_ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/departments",
    "method": "getDepartmentList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Retrieve departments",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/working-locations",
    "method": "getWorkingLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Retrieve working locations",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
    "url": "/public-tokens",
    "method": "createPublicToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Token",
    "typeScriptTag": "token",
    "description": "Create a public token",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
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
    "url": "/ServiceProviderConfig",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ServiceProviderConfig",
    "typeScriptTag": "serviceProviderConfig",
    "description": "Get service provider config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Users",
    "method": "listDeelUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "List users",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "Filter results by a given value. For now, only supports equal (eq) expression for \"email\" filter.",
        "example": "email eq \"john.doe@example.com\""
      },
      {
        "name": "startIndex",
        "schema": "integer",
        "description": "Start index. (1-based)",
        "example": 1,
        "default": 1
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "Page size.",
        "example": 50,
        "default": 50
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
        "statusCode": "403",
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
    "url": "/Users",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Create a user",
    "parameters": [
      {
        "name": "schemas",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "urn:ietf:params:scim:schemas:core:2.0:User"
        ]
      },
      {
        "name": "userName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "work@email.com"
      },
      {
        "name": "name",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "userType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "client"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
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
    "url": "/Users/.search",
    "method": "searchOrList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Search or list users",
    "parameters": [
      {
        "name": "count",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schemas",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startIndex",
        "schema": "integer",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
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
    "url": "/Users/{id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Delete a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "user id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/Users/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Retrieve a single User",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Retrieve a single user by id.",
        "example": "ID"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
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
    "url": "/Users/{id}",
    "method": "partiallyUpdateUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Partially update/patch a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "user id",
        "example": "ID"
      },
      {
        "name": "Operations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "schemas",
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
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "409",
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
    "url": "/Users/{id}",
    "method": "updateUserById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Fully update/replace a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "user id",
        "example": "ID"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Software Engineer"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "emails",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "userType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "employee"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "97b727b8-bdb5-11ed-afa1-0242ac120002"
      },
      {
        "name": "name",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "schemas",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "urn:ietf:params:scim:schemas:extension:2.0:User",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "userName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "work.email@example.com"
      },
      {
        "name": "meta",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "409",
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
    "url": "/time-offs",
    "method": "getAllObsolete",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "List of time offs (obsolete)",
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
  }
]
    }
      language="TypeScript"
      apiTitle="Deel REST API"
      apiBaseUrl="https://api.letsdeel.com/rest/v2"
      apiVersion="1.25.0"
      endpoints={124}
      sdkMethods={154}
      schemas={508}
      parameters={326}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/deel/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/deel/openapi.yaml"
      developerDocumentation="developer.deel.com/docs/welcome"
    />
  );
}
  