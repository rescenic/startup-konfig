# coding: utf-8

"""
    python-circular-reference API

    A simple API based for testing python-circular-reference.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel, ConfigDict

if TYPE_CHECKING:
    from python_circular_reference_2.pydantic.has_optional_var import HasOptionalVar

class HasRequiredVar(BaseModel):
    required: 'HasOptionalVar' = Field(alias='required')

    model_config = ConfigDict(
        protected_namespaces=(),
        arbitrary_types_allowed=True
    )