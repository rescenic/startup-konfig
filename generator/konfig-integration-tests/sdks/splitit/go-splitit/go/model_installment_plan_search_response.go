/*
splitit-web-api-v3

Splitit's Web API

API version: 1.0.0
*/

// Code generated by Konfig (https://konfigthis.com); DO NOT EDIT.

package splitit

import (
	"encoding/json"
)

// InstallmentPlanSearchResponse struct for InstallmentPlanSearchResponse
type InstallmentPlanSearchResponse struct {
	PlanList []SearchInstallmentPlanResponseItem `json:"PlanList,omitempty"`
}

// NewInstallmentPlanSearchResponse instantiates a new InstallmentPlanSearchResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInstallmentPlanSearchResponse() *InstallmentPlanSearchResponse {
	this := InstallmentPlanSearchResponse{}
	return &this
}

// NewInstallmentPlanSearchResponseWithDefaults instantiates a new InstallmentPlanSearchResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInstallmentPlanSearchResponseWithDefaults() *InstallmentPlanSearchResponse {
	this := InstallmentPlanSearchResponse{}
	return &this
}

// GetPlanList returns the PlanList field value if set, zero value otherwise.
func (o *InstallmentPlanSearchResponse) GetPlanList() []SearchInstallmentPlanResponseItem {
	if o == nil || isNil(o.PlanList) {
		var ret []SearchInstallmentPlanResponseItem
		return ret
	}
	return o.PlanList
}

// GetPlanListOk returns a tuple with the PlanList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanSearchResponse) GetPlanListOk() ([]SearchInstallmentPlanResponseItem, bool) {
	if o == nil || isNil(o.PlanList) {
    return nil, false
	}
	return o.PlanList, true
}

// HasPlanList returns a boolean if a field has been set.
func (o *InstallmentPlanSearchResponse) HasPlanList() bool {
	if o != nil && !isNil(o.PlanList) {
		return true
	}

	return false
}

// SetPlanList gets a reference to the given []SearchInstallmentPlanResponseItem and assigns it to the PlanList field.
func (o *InstallmentPlanSearchResponse) SetPlanList(v []SearchInstallmentPlanResponseItem) {
	o.PlanList = v
}

func (o InstallmentPlanSearchResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.PlanList) {
		toSerialize["PlanList"] = o.PlanList
	}
	return json.Marshal(toSerialize)
}

type NullableInstallmentPlanSearchResponse struct {
	value *InstallmentPlanSearchResponse
	isSet bool
}

func (v NullableInstallmentPlanSearchResponse) Get() *InstallmentPlanSearchResponse {
	return v.value
}

func (v *NullableInstallmentPlanSearchResponse) Set(val *InstallmentPlanSearchResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableInstallmentPlanSearchResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableInstallmentPlanSearchResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInstallmentPlanSearchResponse(val *InstallmentPlanSearchResponse) *NullableInstallmentPlanSearchResponse {
	return &NullableInstallmentPlanSearchResponse{value: val, isSet: true}
}

func (v NullableInstallmentPlanSearchResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInstallmentPlanSearchResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

