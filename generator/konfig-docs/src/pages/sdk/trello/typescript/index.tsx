import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function TrelloTypeScriptSdk() {
  return (
    <Sdk
      sdkName="trello-typescript-sdk"
      metaDescription="Trello is a collaboration tool that organizes your projects into boards. In one glance, Trello tells you what's being worked on, who's working on what, and where something is in a process."
      company="Trello"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/logo.png"
      clientNameCamelCase="trello"
      homepage="developer.atlassian.com/cloud/trello"
      lastUpdated={new Date("2024-02-02T23:02:23.295Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/favicon.ico"
      contactUrl="https://trello.com/home"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/actions/{idAction}",
    "method": "removeByIdAction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "deleteActionsByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}",
    "method": "updateByIdAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "updateActionsByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/board",
    "method": "getBoardByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsBoardByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/board/{field}",
    "method": "getBoardByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsBoardByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/card",
    "method": "getCardByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsCardByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/card/{field}",
    "method": "getCardByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsCardByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/display",
    "method": "getDisplayByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsDisplayByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/entities",
    "method": "getEntitiesByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsEntitiesByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/list",
    "method": "getListByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsListByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/list/{field}",
    "method": "getListByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsListByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/member",
    "method": "getMemberByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsMemberByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/member/{field}",
    "method": "getMemberByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsMemberByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/memberCreator",
    "method": "getMemberCreatorByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsMemberCreatorByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/memberCreator/{field}",
    "method": "getMemberByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsMemberCreatorByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/organization",
    "method": "getOrganizationByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsOrganizationByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/organization/{field}",
    "method": "getOrgByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsOrganizationByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/text",
    "method": "updateTextByIdAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "updateActionsTextByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/actions/{idAction}/{field}",
    "method": "getByIdActionField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/batch",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batch",
    "typeScriptTag": "batch",
    "description": "getBatch()",
    "parameters": [
      {
        "name": "urls",
        "schema": "string",
        "required": true,
        "description": "list of API v1 GET routes, not including the version prefix"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards",
    "method": "createBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoards()",
    "parameters": [
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoardSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idOrganization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "keepFromSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/blue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/green",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/orange",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/purple",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/red",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/yellow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerUps",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/background",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/calendarFeedEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/cardAging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/cardCovers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/invitations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/selfJoin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/voting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_background",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_cardAging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_cardCovers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_invitations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_selfJoin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_voting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "actionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "actionMember",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionMemberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "actionMemberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionMemberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "cardAttachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "cardAttachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "cardChecklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "cardStickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardStars",
        "schema": "string",
        "required": false,
        "description": "One of: mine or none"
      },
      {
        "name": "labels",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "labelFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: color, idBoard, name or uses"
      },
      {
        "name": "labelsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "lists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "listFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      },
      {
        "name": "memberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "membershipsMember",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "membershipsMemberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "membersInvited",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners"
      },
      {
        "name": "membersInvitedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "checklistFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "organizationMemberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "myPrefs",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoardSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idOrganization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "keepFromSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/blue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/green",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/orange",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/purple",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/red",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/yellow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerUps",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/background",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/calendarFeedEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/cardAging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/cardCovers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/invitations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/selfJoin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/voting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_background",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_cardAging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_cardCovers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_invitations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_selfJoin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_voting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/actions",
    "method": "listActionsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsActionsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/boardStars",
    "method": "getBoardStarsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsBoardStarsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: mine or none"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/calendarKey/generate",
    "method": "generateCalendarKeyById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsCalendarKeyGenerateByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/cards",
    "method": "getCardsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsCardsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/cards/{filter}",
    "method": "filterCardsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsCardsByIdBoardByFilter()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/cards/{idCard}",
    "method": "getCardsByIdBoardByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsCardsByIdBoardByIdCard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "idCard"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "actionMemberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checkItemStateFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idCheckItem or state"
      },
      {
        "name": "labels",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "checklistFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/checklists",
    "method": "getChecklistsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsChecklistsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "checkItems",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "checkItemFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/checklists",
    "method": "addChecklists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsChecklistsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/closed",
    "method": "updateClosedById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsClosedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/deltas",
    "method": "getDeltasByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsDeltasByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "A valid tag for subscribing"
      },
      {
        "name": "ixLastUpdate",
        "schema": "string",
        "required": true,
        "description": "a number from -1 to Infinity"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/desc",
    "method": "updateDescriptionByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsDescByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/emailKey/generate",
    "method": "generateEmailKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsEmailKeyGenerateByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/idOrganization",
    "method": "updateOrganizationByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsIdOrganizationByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labelNames/blue",
    "method": "updateLabelNamesBlueById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesBlueByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labelNames/green",
    "method": "updateLabelNamesGreenByIdBoardPut",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesGreenByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labelNames/orange",
    "method": "updateLabelNamesOrangeByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesOrangeByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labelNames/purple",
    "method": "updateLabelNamesPurpleByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesPurpleByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labelNames/red",
    "method": "updateLabelNamesRed",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesRedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labelNames/yellow",
    "method": "updateLabelNamesYellowByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesYellowByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labels",
    "method": "listLabelsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsLabelsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: color, idBoard, name or uses"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labels",
    "method": "addLabelsByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsLabelsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/labels/{idLabel}",
    "method": "getLabelsByIdBoardByIdLabel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsLabelsByIdBoardByIdLabel()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: color, idBoard, name or uses"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/lists",
    "method": "getListsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsListsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/lists",
    "method": "createListsByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsListsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/lists/{filter}",
    "method": "getListsByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsListsByIdBoardByFilter()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/markAsViewed",
    "method": "markAsViewedByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsMarkAsViewedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/members",
    "method": "getMembersByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "activity",
        "schema": "string",
        "required": false,
        "description": "true or false ; works for premium organizations only."
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/members",
    "method": "updateMembersByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMembersByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/members/{filter}",
    "method": "getMembersByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersByIdBoardByFilter()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/members/{idMember}",
    "method": "removeMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "deleteBoardsMembersByIdBoardByIdMember()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/members/{idMember}",
    "method": "updateMembersByIdBoardByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMembersByIdBoardByIdMember()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/members/{idMember}/cards",
    "method": "getMembersCardsByIdBoardByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersCardsByIdBoardByIdMember()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "list",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "listFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/membersInvited",
    "method": "getMembersInvitedByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersInvitedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/membersInvited/{field}",
    "method": "getMembersInvitedByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersInvitedByIdBoardByField()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/memberships",
    "method": "getMembershipsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembershipsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/memberships/{idMembership}",
    "method": "getMembershipsByIdBoardByIdMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembershipsByIdBoardByIdMembership()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idMembership",
        "schema": "string",
        "required": true,
        "description": "idMembership"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/memberships/{idMembership}",
    "method": "updateMembershipsByIdBoardByIdMembership",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMembershipsByIdBoardByIdMembership()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "idMembership",
        "schema": "string",
        "required": true,
        "description": "idMembership"
      },
      {
        "name": "member_fields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs",
    "method": "getMyPrefsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMyPrefsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/emailPosition",
    "method": "updateMyPrefsEmailPositionByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsEmailPositionByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/idEmailList",
    "method": "updateMyPrefsEmailListByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsIdEmailListByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showListGuide",
    "method": "updateMyPrefsShowListGuideByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowListGuideByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showSidebar",
    "method": "updateMyPrefsShowSidebar",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowSidebarByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showSidebarActivity",
    "method": "updateMyPrefsShowSidebarActivityByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowSidebarActivityByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showSidebarBoardActions",
    "method": "updateMyPrefsShowSidebarActionsByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showSidebarMembers",
    "method": "updatePrefsShowSidebarMembersById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowSidebarMembersByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/name",
    "method": "updateNameById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsNameByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/organization",
    "method": "getOrganizationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsOrganizationByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/organization/{field}",
    "method": "getOrganizationByIdBoardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsOrganizationByIdBoardByField()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/powerUps",
    "method": "addPowerUpsByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsPowerUpsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/powerUps/{powerUp}",
    "method": "removePowerUp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "deleteBoardsPowerUpsByIdBoardByPowerUp()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "powerUp",
        "schema": "string",
        "required": true,
        "description": "powerUp"
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/background",
    "method": "updatePrefsBackgroundByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsBackgroundByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/calendarFeedEnabled",
    "method": "updatePrefsCalendarFeedEnabledById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsCalendarFeedEnabledByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/cardAging",
    "method": "updatePrefsCardAgingByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsCardAgingByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/cardCovers",
    "method": "updatePrefsCardCoversByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsCardCoversByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/comments",
    "method": "updatePrefsCommentsByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsCommentsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/invitations",
    "method": "updatePrefsInvitationsByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsInvitationsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/permissionLevel",
    "method": "updatePrefsPermissionLevelById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsPermissionLevelByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/selfJoin",
    "method": "updatePrefsSelfJoinByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsSelfJoinByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/prefs/voting",
    "method": "updateVotingPrefsById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsVotingByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/subscribed",
    "method": "updateSubscribedById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsSubscribedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/boards/{idBoard}/{field}",
    "method": "getByIdField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsByIdBoardByField()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards",
    "method": "createAndUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCards()",
    "parameters": [
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "due",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idAttachmentCover",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCardSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idLabels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idList",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idMembers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "keepFromSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "urlSource",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}",
    "method": "removeByIdCard",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "actionMemberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "membersVoted",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberVotedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checkItemStateFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idCheckItem or state"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "checklistFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "list",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "listFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "stickerFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}",
    "method": "updateByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "due",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idAttachmentCover",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCardSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idLabels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idList",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idMembers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "keepFromSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "urlSource",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/actions",
    "method": "listCardActionsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsActionsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/actions/comments",
    "method": "addActionsCommentsByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsActionsCommentsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/actions/{idAction}/comments",
    "method": "removeActionCommentByIdCardByIdAction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsActionsCommentsByIdCardByIdAction()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/actions/{idAction}/comments",
    "method": "updateActionCommentByIdCardByIdAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsActionsCommentsByIdCardByIdAction()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction"
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/attachments",
    "method": "getAttachmentsByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsAttachmentsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/attachments",
    "method": "addAttachmentsByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsAttachmentsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mimeType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/attachments/{idAttachment}",
    "method": "deleteAttachmentsByIdCardByIdAttachment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsAttachmentsByIdCardByIdAttachment()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idAttachment",
        "schema": "string",
        "required": true,
        "description": "idAttachment"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/attachments/{idAttachment}",
    "method": "getAttachmentsByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsAttachmentsByIdCardByIdAttachment()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idAttachment",
        "schema": "string",
        "required": true,
        "description": "idAttachment"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/board",
    "method": "getBoardById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsBoardByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/board/{field}",
    "method": "getBoardByIdCardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsBoardByIdCardByField()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checkItemStates",
    "method": "getCheckItemStatesById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsCheckItemStatesByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idCheckItem or state"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklistCurrent}/checkItem/{idCheckItem}",
    "method": "updateChecklistCheckItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklistCurrent",
        "schema": "string",
        "required": true,
        "description": "idChecklistCurrent"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem",
    "method": "addChecklistCheckItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsChecklistCheckItemByIdCardByIdChecklist()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}",
    "method": "removeChecklistCheckItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/convertToCard",
    "method": "convertCheckItemToCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/name",
    "method": "updateChecklistCheckItemNameById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/pos",
    "method": "updateCheckItemPosById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/state",
    "method": "updateChecklistCheckItemState",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklists",
    "method": "getChecklistsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsChecklistsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "checkItems",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "checkItemFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklists",
    "method": "addChecklists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsChecklistsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklistSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/checklists/{idChecklist}",
    "method": "deleteChecklistByIdCardByIdChecklist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsChecklistsByIdCardByIdChecklist()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/closed",
    "method": "updateClosedById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsClosedByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/desc",
    "method": "updateDescriptionByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsDescByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/due",
    "method": "updateDueById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsDueByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idAttachmentCover",
    "method": "updateAttachmentCoverByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsIdAttachmentCoverByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idBoard",
    "method": "updateBoardByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsIdBoardByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idList",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idLabels",
    "method": "addIdLabelsToCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsIdLabelsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idLabels/{idLabel}",
    "method": "removeLabelByIdCardByIdLabel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsIdLabelsByIdCardByIdLabel()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idList",
    "method": "updateIdListByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsIdListByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idMembers",
    "method": "addMembers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsIdMembersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idMembers",
    "method": "updateIdMembers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsIdMembersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/idMembers/{idMember}",
    "method": "removeMemberByIdMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsIdMembersByIdCardByIdMember()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/labels",
    "method": "addLabels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsLabelsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/labels",
    "method": "updateLabels",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsLabelsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/labels/{color}",
    "method": "removeLabelsByIdCardByColor",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsLabelsByIdCardByColor()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "color"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/list",
    "method": "getListById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsListByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/list/{field}",
    "method": "getCardsListByIdCardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsListByIdCardByField()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/markAssociatedNotificationsRead",
    "method": "markAssociatedNotificationsRead",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsMarkAssociatedNotificationsReadByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/members",
    "method": "listMembersByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsMembersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/membersVoted",
    "method": "getMembersVotedByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsMembersVotedByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/membersVoted",
    "method": "addMembersVoted",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsMembersVotedByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/membersVoted/{idMember}",
    "method": "removeMembersVotedByIdCardByIdMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsMembersVotedByIdCardByIdMember()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/name",
    "method": "updateNameById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsNameByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/pos",
    "method": "updatePosByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsPosByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/stickers",
    "method": "getStickersByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsStickersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/stickers",
    "method": "addStickersByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsStickersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "image",
        "schema": "string",
        "description": ""
      },
      {
        "name": "left",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rotate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "top",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zIndex",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/stickers/{idSticker}",
    "method": "removeStickerByIds",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsStickersByIdCardByIdSticker()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idSticker",
        "schema": "string",
        "required": true,
        "description": "idSticker"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/stickers/{idSticker}",
    "method": "getStickerByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsStickersByIdCardByIdSticker()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idSticker",
        "schema": "string",
        "required": true,
        "description": "idSticker"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex"
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/stickers/{idSticker}",
    "method": "updateStickersByIdCardByIdSticker",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsStickersByIdCardByIdSticker()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "idSticker",
        "schema": "string",
        "required": true,
        "description": "idSticker"
      },
      {
        "name": "image",
        "schema": "string",
        "description": ""
      },
      {
        "name": "left",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rotate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "top",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zIndex",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/subscribed",
    "method": "updateSubscribedByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsSubscribedByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/cards/{idCard}/{field}",
    "method": "getByIdField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsByIdCardByField()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "addChecklists()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idChecklistSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "deleteChecklistsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "checkItems",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "checkItemFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}",
    "method": "updateByIdChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "updateChecklistsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idChecklistSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/board",
    "method": "getBoardByIdChecklist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsBoardByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/board/{field}",
    "method": "getBoardByIdChecklistByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsBoardByIdChecklistByField()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/cards",
    "method": "listCardsByIdChecklist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsCardsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/cards/{filter}",
    "method": "getCardsByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsCardsByIdChecklistByFilter()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/checkItems",
    "method": "getCheckItemsByIdChecklist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsCheckItemsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/checkItems",
    "method": "addCheckItemsByIdChecklist",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "addChecklistsCheckItemsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "checked",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/checkItems/{idCheckItem}",
    "method": "removeByIdCheckItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "deleteChecklistsCheckItemsByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/checkItems/{idCheckItem}",
    "method": "getCheckItemsByIdChecklistByIdCheckItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsCheckItemsByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type"
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/idCard",
    "method": "updateIdCardByIdChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "updateChecklistsIdCardByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/name",
    "method": "updateNameByIdChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "updateChecklistsNameByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/pos",
    "method": "updatePosByIdChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "updateChecklistsPosByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/checklists/{idChecklist}/{field}",
    "method": "getByIdField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsByIdChecklistByField()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/labels",
    "method": "createLabels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "addLabels()",
    "parameters": [
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}",
    "method": "removeByIdLabel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "deleteLabelsByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}",
    "method": "getByIdLabel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "getLabelsByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: color, idBoard, name or uses"
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}",
    "method": "updateByIdLabel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "updateLabelsByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}/board",
    "method": "getBoardByIdLabel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "getLabelsBoardByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}/board/{field}",
    "method": "getBoardByIdLabelByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "getLabelsBoardByIdLabelByField()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}/color",
    "method": "updateColorByIdLabel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "updateLabelsColorByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/labels/{idLabel}/name",
    "method": "updateNameByIdLabel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "updateLabelsNameByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists",
    "method": "createList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "addLists()",
    "parameters": [
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idListSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}",
    "method": "getByIdList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}",
    "method": "updateByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idListSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/actions",
    "method": "getActionsByIdList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsActionsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/archiveAllCards",
    "method": "archiveAllCardsByIdList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "addListsArchiveAllCardsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/board",
    "method": "idBoardGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsBoardByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/board/{field}",
    "method": "getBoardByIdListByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsBoardByIdListByField()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/cards",
    "method": "getCardsByIdList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsCardsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/cards",
    "method": "createCardsByIdList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "addListsCardsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "due",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idMembers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/cards/{filter}",
    "method": "getCardsByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsCardsByIdListByFilter()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/closed",
    "method": "updateClosedByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsClosedByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/idBoard",
    "method": "updateIdBoardByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsIdBoardByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/moveAllCards",
    "method": "moveAllCardsByIdList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "addListsMoveAllCardsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/name",
    "method": "updateNameByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsNameByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/pos",
    "method": "updatePosByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsPosByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/subscribed",
    "method": "updateSubscribedByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsSubscribedByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/lists/{idList}/{field}",
    "method": "getByIdListByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsByIdListByField()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "actionSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "actionBefore",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "cardMembers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardMemberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "cardAttachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "cardAttachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "cardStickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boards",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "boardActions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "boardActionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardActionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardActionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "boardActionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "boardActionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "boardActionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "boardLists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "boardMemberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "boardOrganization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardOrganizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "boardsInvited",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
      },
      {
        "name": "boardsInvitedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "boardStars",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "savedSearches",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizations",
        "schema": "string",
        "required": false,
        "description": "One of: all, members, none or public"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "organizationPaidAccount",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationsInvited",
        "schema": "string",
        "required": false,
        "description": "One of: all, members, none or public"
      },
      {
        "name": "organizationsInvitedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "notifications",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard"
      },
      {
        "name": "notificationsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "notificationsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "notificationsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "notificationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator, type or unread"
      },
      {
        "name": "notificationMemberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "notificationMemberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "notificationBefore",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "notificationSince",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "tokens",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "paidAccount",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardBackgrounds",
        "schema": "string",
        "required": false,
        "description": "One of: all, custom, default, none or premium"
      },
      {
        "name": "customBoardBackgrounds",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "customStickers",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "customEmoji",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}",
    "method": "updateByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "avatarSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bio",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initials",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/colorBlind",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/minutesBetweenSummaries",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/actions",
    "method": "listActionsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersActionsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/avatar",
    "method": "uploadAvatarById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersAvatarByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/avatarSource",
    "method": "updateAvatarSource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersAvatarSourceByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/bio",
    "method": "updateBioById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBioByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardBackgrounds",
    "method": "getBoardBackgroundsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardBackgroundsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, custom, default, none or premium"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardBackgrounds",
    "method": "addBoardBackgrounds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersBoardBackgroundsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "brightness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tile",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardBackgrounds/{idBoardBackground}",
    "method": "deleteBoardBackground",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardBackgrounds/{idBoardBackground}",
    "method": "getBoardBackgroundByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardBackgrounds/{idBoardBackground}",
    "method": "updateBoardBackgroundsById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground"
      },
      {
        "name": "brightness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tile",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars",
    "method": "getBoardStarsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardStarsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars",
    "method": "addBoardStarsByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersBoardStarsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}",
    "method": "removeBoardStarByIdMemberByIdBoardStar",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersBoardStarsByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}",
    "method": "getBoardStarByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardStarsByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}",
    "method": "updateBoardStar",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBoardStarsByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}/idBoard",
    "method": "updateBoardStarsIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}/pos",
    "method": "updateBoardStarPosByIdMemberByIdBoardStar",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBoardStarsPosByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boards",
    "method": "getBoardsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "actionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "memberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "lists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boards/{filter}",
    "method": "getBoards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardsByIdMemberByFilter()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardsInvited",
    "method": "getInvitedBoards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardsInvitedByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/boardsInvited/{field}",
    "method": "getBoardsInvitedByIdMemberByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardsInvitedByIdMemberByField()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/cards",
    "method": "getCardsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCardsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/cards/{filter}",
    "method": "getCardsByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCardsByIdMemberByFilter()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds",
    "method": "getCustomBoardBackgroundsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomBoardBackgroundsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds",
    "method": "addCustomBoardBackgrounds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersCustomBoardBackgroundsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "brightness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tile",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds/{idBoardBackground}",
    "method": "removeCustomBoardBackgroundById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds/{idBoardBackground}",
    "method": "getCustomBoardBackgroundByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds/{idBoardBackground}",
    "method": "updateCustomBoardBackgrounds",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground"
      },
      {
        "name": "brightness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tile",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customEmoji",
    "method": "listCustomEmojiByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomEmojiByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customEmoji",
    "method": "addCustomEmojiByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersCustomEmojiByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customEmoji/{idCustomEmoji}",
    "method": "getCustomEmojiByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomEmojiByIdMemberByIdCustomEmoji()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idCustomEmoji",
        "schema": "string",
        "required": true,
        "description": "idCustomEmoji"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customStickers",
    "method": "getCustomStickersByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomStickersByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customStickers",
    "method": "addCustomStickers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersCustomStickersByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customStickers/{idCustomSticker}",
    "method": "removeCustomStickerByIds",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersCustomStickersByIdMemberByIdCustomSticker()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idCustomSticker",
        "schema": "string",
        "required": true,
        "description": "idCustomSticker"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/customStickers/{idCustomSticker}",
    "method": "getCustomStickerByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomStickersByIdMemberByIdCustomSticker()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idCustomSticker",
        "schema": "string",
        "required": true,
        "description": "idCustomSticker"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: scaled or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/deltas",
    "method": "getDeltasByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersDeltasByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "A valid tag for subscribing"
      },
      {
        "name": "ixLastUpdate",
        "schema": "string",
        "required": true,
        "description": "a number from -1 to Infinity"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/fullName",
    "method": "updateFullName",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersFullNameByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/initials",
    "method": "updateInitialsByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersInitialsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/notifications",
    "method": "getNotificationsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersNotificationsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard"
      },
      {
        "name": "readFilter",
        "schema": "string",
        "required": false,
        "description": "One of: all, read or unread"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator, type or unread"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 100"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/notifications/{filter}",
    "method": "getNotificationsByIdMemberByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersNotificationsByIdMemberByFilter()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/oneTimeMessagesDismissed",
    "method": "addOneTimeMessagesDismissedByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersOneTimeMessagesDismissedByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/organizations",
    "method": "listOrganizationsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersOrganizationsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, members, none or public"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "paidAccount",
        "schema": "string",
        "required": false,
        "description": " true or false"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/organizations/{filter}",
    "method": "getOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersOrganizationsByIdMemberByFilter()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/organizationsInvited",
    "method": "listInvitedOrganizationsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersOrganizationsInvitedByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/organizationsInvited/{field}",
    "method": "listOrganizationsInvitedByIdMemberByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersOrganizationsInvitedByIdMemberByField()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/prefs/colorBlind",
    "method": "updatePrefsColorBlindByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersPrefsColorBlindByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/prefs/locale",
    "method": "updatePrefsLocaleByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersPrefsLocaleByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/prefs/minutesBetweenSummaries",
    "method": "updatePrefsMinutesBetweenSummariesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersPrefsMinutesBetweenSummariesByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches",
    "method": "getSavedSearchesByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersSavedSearchesByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches",
    "method": "createSavedSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersSavedSearchesByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "query",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}",
    "method": "removeSavedSearchByIds",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersSavedSearchesByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}",
    "method": "getSavedSearchByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersSavedSearchesByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}",
    "method": "updateSavedSearchesByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersSavedSearchesByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "query",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}/name",
    "method": "updateSavedSearchesNameByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}/pos",
    "method": "updateSavedSearchesPosByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}/query",
    "method": "updateSavedSearchQueryByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/tokens",
    "method": "getTokensByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersTokensByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/username",
    "method": "updateUsernameById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersUsernameByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/members/{idMember}/{field}",
    "method": "getByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersByIdMemberByField()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/all/read",
    "method": "markAllAsRead",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "addNotificationsAllRead()",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator, type or unread"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "list",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "card",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}",
    "method": "updateByIdNotification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "updateNotificationsByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "unread",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/board",
    "method": "getBoardById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsBoardByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/board/{field}",
    "method": "getBoardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsBoardByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/card",
    "method": "getCardById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsCardByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/card/{field}",
    "method": "getCardByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsCardByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/display",
    "method": "getDisplayByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsDisplayByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/entities",
    "method": "getEntitiesByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsEntitiesByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/list",
    "method": "getListByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsListByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/list/{field}",
    "method": "getListByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsListByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/member",
    "method": "getMemberByNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsMemberByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/member/{field}",
    "method": "getMemberByIdField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsMemberByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/memberCreator",
    "method": "getMemberCreatorById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsMemberCreatorByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/memberCreator/{field}",
    "method": "getMemberByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsMemberCreatorByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/organization",
    "method": "getOrganizationByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsOrganizationByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/organization/{field}",
    "method": "getOrganizationByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsOrganizationByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/unread",
    "method": "updateUnreadByIdNotification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "updateNotificationsUnreadByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/notifications/{idNotification}/{field}",
    "method": "getByIdField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "addOrganizations()",
    "parameters": [
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/associatedDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/org",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/private",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/public",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/externalMembersDisabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/googleAppsVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/orgInviteRestrict",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}",
    "method": "removeByIdOrg",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}",
    "method": "getByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "memberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "membershipsMember",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "membershipsMemberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberActivity",
        "schema": "string",
        "required": false,
        "description": "true or false ; works for premium organizations only."
      },
      {
        "name": "membersInvited",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners"
      },
      {
        "name": "membersInvitedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "boards",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "boardActions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "boardActionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardActionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardActionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "boardActionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "boardActionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "boardActionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "boardLists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      },
      {
        "name": "paidAccount",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}",
    "method": "updateByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/associatedDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/org",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/private",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/public",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/externalMembersDisabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/googleAppsVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/orgInviteRestrict",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/actions",
    "method": "getActionsByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsActionsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/boards",
    "method": "getBoardsByOrgId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsBoardsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000"
      },
      {
        "name": "actionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal"
      },
      {
        "name": "actionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type"
      },
      {
        "name": "memberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "lists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/boards/{filter}",
    "method": "getBoardsByIdOrgByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsBoardsByIdOrgByFilter()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/deltas",
    "method": "getOrganizationDeltas",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsDeltasByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "A valid tag for subscribing"
      },
      {
        "name": "ixLastUpdate",
        "schema": "string",
        "required": true,
        "description": "a number from -1 to Infinity"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/desc",
    "method": "updateDescriptionByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsDescByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/displayName",
    "method": "updateDisplayNameByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsDisplayNameByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/logo",
    "method": "removeLogoByIdOrg",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsLogoByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/logo",
    "method": "uploadLogoByIdOrg",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "addOrganizationsLogoByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members",
    "method": "getMembersByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "activity",
        "schema": "string",
        "required": false,
        "description": "true or false ; works for premium organizations only."
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members",
    "method": "updateMembersByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsMembersByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members/{filter}",
    "method": "listMembersByIdOrgByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersByIdOrgByFilter()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}",
    "method": "removeMemberByIdOrgByIdMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsMembersByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}",
    "method": "updateMembersByIdOrgByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsMembersByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}/all",
    "method": "removeMemberAll",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsMembersAllByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}/cards",
    "method": "listMembersCardsByIdOrgByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersCardsByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "list",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "listFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}/deactivated",
    "method": "updateMembersDeactivatedByIdOrgByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsMembersDeactivatedByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/membersInvited",
    "method": "getMembersInvitedByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersInvitedByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/membersInvited/{field}",
    "method": "getMembersInvitedByIdOrgByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersInvitedByIdOrgByField()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/memberships",
    "method": "listMembershipsByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembershipsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/memberships/{idMembership}",
    "method": "getMembershipsByIdOrgByIdMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembershipsByIdOrgByIdMembership()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMembership",
        "schema": "string",
        "required": true,
        "description": "idMembership"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/memberships/{idMembership}",
    "method": "updateMembershipByIdOrgByIdMembership",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsMembershipsByIdOrgByIdMembership()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "idMembership",
        "schema": "string",
        "required": true,
        "description": "idMembership"
      },
      {
        "name": "member_fields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/name",
    "method": "updateNameByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsNameByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/associatedDomain",
    "method": "deletePrefsAssociatedDomainByIdOrg",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsPrefsAssociatedDomainByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/associatedDomain",
    "method": "updatePrefsAssociatedDomainByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsAssociatedDomainByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/boardVisibilityRestrict/org",
    "method": "updatePrefsBoardVisibilityRestrictByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/boardVisibilityRestrict/private",
    "method": "updatePrefsVisibilityByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/boardVisibilityRestrict/public",
    "method": "updatePrefsBoardVisibilityRestrictPublicByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/externalMembersDisabled",
    "method": "updatePrefsExternalMembersDisabledByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsExternalMembersDisabledByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/googleAppsVersion",
    "method": "updatePrefsGoogleAppsVersionByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsGoogleAppsVersionByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/orgInviteRestrict",
    "method": "removeInviteRestrictByIdOrg",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsPrefsOrgInviteRestrictByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "An email address with optional expansion tokens"
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/orgInviteRestrict",
    "method": "updatePrefsOrgInviteRestrictByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsOrgInviteRestrictByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/prefs/permissionLevel",
    "method": "updatePrefsPermissionLevelByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsPermissionLevelByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/website",
    "method": "updateWebsiteByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsWebsiteByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/organizations/{idOrg}/{field}",
    "method": "getByIdAndField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsByIdOrgByField()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/search",
    "method": "getResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "getSearch()",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "a string with a length from 1 to 16384"
      },
      {
        "name": "idBoards",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of objectIds, 24-character hex strings"
      },
      {
        "name": "idOrganizations",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of objectIds, 24-character hex strings"
      },
      {
        "name": "idCards",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of objectIds, 24-character hex strings"
      },
      {
        "name": "modelTypes",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: actions, boards, cards, members or organizations"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url"
      },
      {
        "name": "boardsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url"
      },
      {
        "name": "cardsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "cardsPage",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 100"
      },
      {
        "name": "cardBoard",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardList",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardMembers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardStickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardAttachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website"
      },
      {
        "name": "organizationsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username"
      },
      {
        "name": "membersLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "partial",
        "schema": "string",
        "required": false,
        "description": " true or false"
      }
    ],
    "responses": []
  },
  {
    "url": "/search/members",
    "method": "findMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "getSearchMembers()",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "a string with a length from 1 to 16384"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 20"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "idOrganization",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "onlyOrgMembers",
        "schema": "string",
        "required": false,
        "description": "A boolean"
      }
    ],
    "responses": []
  },
  {
    "url": "/sessions",
    "method": "createAndUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "session",
    "typeScriptTag": "session",
    "description": "addSessions()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/sessions/socket",
    "method": "getSocketSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session",
    "typeScriptTag": "session",
    "description": "getSessionsSocket()",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/sessions/{idSession}",
    "method": "updateStatusByIdSession",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "session",
    "typeScriptTag": "session",
    "description": "updateSessionsByIdSession()",
    "parameters": [
      {
        "name": "idSession",
        "schema": "string",
        "required": true,
        "description": "idSession"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/sessions/{idSession}/status",
    "method": "updateStatusByIdSession",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "session",
    "typeScriptTag": "session",
    "description": "updateSessionsStatusByIdSession()",
    "parameters": [
      {
        "name": "idSession",
        "schema": "string",
        "required": true,
        "description": "idSession"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}",
    "method": "deleteByToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "deleteTokensByToken()",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/tokens/{token}",
    "method": "getByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensByToken()",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: dateCreated, dateExpires, idMember, identifier or permissions"
      },
      {
        "name": "webhooks",
        "schema": "string",
        "required": false,
        "description": " true or false"
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/member",
    "method": "getMemberByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensMemberByToken()",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username"
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/member/{field}",
    "method": "getMemberByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensMemberByTokenByField()",
    "parameters": [
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/webhooks",
    "method": "getWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensWebhooksByToken()",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/tokens/{token}/webhooks",
    "method": "registerWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "addTokensWebhooksByToken()",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callbackURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idModel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/webhooks",
    "method": "updateWebhooksByToken",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "updateTokensWebhooksByToken()",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callbackURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idModel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/webhooks/{idWebhook}",
    "method": "removeByTokenByIdWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "deleteTokensWebhooksByTokenByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/webhooks/{idWebhook}",
    "method": "getWebhookById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensWebhooksByTokenByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens/{token}/{field}",
    "method": "getByTokenByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensByTokenByField()",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "token"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  },
  {
    "url": "/types/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "type",
    "typeScriptTag": "type",
    "description": "getTypesById()",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id"
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooks()",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callbackURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idModel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "deleteWebhooksByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "getWebhooksByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}",
    "method": "updateByIdWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callbackURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idModel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}/active",
    "method": "updateActiveById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksActiveByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}/callbackURL",
    "method": "updateCallbackUrlById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksCallbackURLByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}/description",
    "method": "updateDescriptionByIdWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksDescriptionByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}/idModel",
    "method": "updateModelById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksIdModelByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/webhooks/{idWebhook}/{field}",
    "method": "getByIdField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "getWebhooksByIdWebhookByField()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field"
      }
    ],
    "responses": []
  }
]
    }
      language="TypeScript"
      apiTitle="Trello"
      apiBaseUrl="https://trello.com/1"
      apiVersion="1.0"
      endpoints={264}
      sdkMethods={324}
      schemas={122}
      parameters={1907}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/openapi.yaml"
    />
  );
}
  