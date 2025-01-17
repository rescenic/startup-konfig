# coding: utf-8
"""
    python-pydantic-list-in-union API

    A simple API based for testing python-pydantic-list-in-union.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from python_pydantic_list_in_union.paths.simple_endpoint.get import Fetch
from python_pydantic_list_in_union.apis.tags.test_api_raw import TestApiRaw


class TestApiGenerated(
    Fetch,
):
    """NOTE:
    This class is auto generated by Konfig (https://konfigthis.com)
    """
    raw: TestApiRaw

    def __init__(self, api_client=None):
        super().__init__(api_client)
        self.raw = TestApiRaw(api_client)
