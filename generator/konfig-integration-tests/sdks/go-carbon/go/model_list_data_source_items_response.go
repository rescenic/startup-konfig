/*
Carbon

Connect external data to LLMs, no matter the source.

API version: 1.0.0
*/

// Code generated by Konfig (https://konfigthis.com); DO NOT EDIT.

package carbon

import (
	"encoding/json"
)

// ListDataSourceItemsResponse struct for ListDataSourceItemsResponse
type ListDataSourceItemsResponse struct {
	Items []ExternalSourceItem `json:"items"`
	Count int32 `json:"count"`
}

// NewListDataSourceItemsResponse instantiates a new ListDataSourceItemsResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewListDataSourceItemsResponse(items []ExternalSourceItem, count int32) *ListDataSourceItemsResponse {
	this := ListDataSourceItemsResponse{}
	this.Items = items
	this.Count = count
	return &this
}

// NewListDataSourceItemsResponseWithDefaults instantiates a new ListDataSourceItemsResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewListDataSourceItemsResponseWithDefaults() *ListDataSourceItemsResponse {
	this := ListDataSourceItemsResponse{}
	return &this
}

// GetItems returns the Items field value
func (o *ListDataSourceItemsResponse) GetItems() []ExternalSourceItem {
	if o == nil {
		var ret []ExternalSourceItem
		return ret
	}

	return o.Items
}

// GetItemsOk returns a tuple with the Items field value
// and a boolean to check if the value has been set.
func (o *ListDataSourceItemsResponse) GetItemsOk() ([]ExternalSourceItem, bool) {
	if o == nil {
    return nil, false
	}
	return o.Items, true
}

// SetItems sets field value
func (o *ListDataSourceItemsResponse) SetItems(v []ExternalSourceItem) {
	o.Items = v
}

// GetCount returns the Count field value
func (o *ListDataSourceItemsResponse) GetCount() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Count
}

// GetCountOk returns a tuple with the Count field value
// and a boolean to check if the value has been set.
func (o *ListDataSourceItemsResponse) GetCountOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Count, true
}

// SetCount sets field value
func (o *ListDataSourceItemsResponse) SetCount(v int32) {
	o.Count = v
}

func (o ListDataSourceItemsResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["items"] = o.Items
	}
	if true {
		toSerialize["count"] = o.Count
	}
	return json.Marshal(toSerialize)
}

type NullableListDataSourceItemsResponse struct {
	value *ListDataSourceItemsResponse
	isSet bool
}

func (v NullableListDataSourceItemsResponse) Get() *ListDataSourceItemsResponse {
	return v.value
}

func (v *NullableListDataSourceItemsResponse) Set(val *ListDataSourceItemsResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableListDataSourceItemsResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableListDataSourceItemsResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableListDataSourceItemsResponse(val *ListDataSourceItemsResponse) *NullableListDataSourceItemsResponse {
	return &NullableListDataSourceItemsResponse{value: val, isSet: true}
}

func (v NullableListDataSourceItemsResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableListDataSourceItemsResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

