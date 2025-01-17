# coding: utf-8

"""
    decentro-in-collections

    Collections

    The version of the OpenAPI document: 1.0.0
    Contact: admin@decentro.tech
    Created by: https://decentro.tech
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel, ConfigDict

from decentro_in_collections_client.pydantic.generate_payment_link_response_data_psp_uri import GeneratePaymentLinkResponseDataPspUri

class GeneratePaymentLinkResponseData(BaseModel):
    generated_link: typing.Optional[str] = Field(None, alias='generatedLink')

    transaction_id: typing.Optional[str] = Field(None, alias='transactionId')

    transaction_status: typing.Optional[str] = Field(None, alias='transactionStatus')

    encoded_dynamic_qr_code: typing.Optional[str] = Field(None, alias='encodedDynamicQrCode')

    upi_uri: typing.Optional[str] = Field(None, alias='upiUri')

    psp_uri: typing.Optional[GeneratePaymentLinkResponseDataPspUri] = Field(None, alias='pspUri')

    model_config = ConfigDict(
        protected_namespaces=(),
        arbitrary_types_allowed=True
    )
