/*
NewsCatcher-V3 Production API

<img src='https://uploads-ssl.webflow.com/6429857b17973b636c2195c5/646c6f1eb774ff2f2997bec5_newscatcher_.svg' width='286' height='35' /> <br>  <br>Visit our website  <a href='https://newscatcherapi.com'>https://newscatcherapi.com</a>

API version: Beta-3.0.0
Contact: maksym@newscatcherapi.com
*/

// Code generated by Konfig (https://konfigthis.com); DO NOT EDIT.

package newscatcherapi

import (
	"encoding/json"
)

// SimilarDocument1 struct for SimilarDocument1
type SimilarDocument1 struct {
	Title string `json:"title"`
	Id string `json:"id"`
	Score float32 `json:"score"`
	Link string `json:"link"`
}

// NewSimilarDocument1 instantiates a new SimilarDocument1 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSimilarDocument1(title string, id string, score float32, link string) *SimilarDocument1 {
	this := SimilarDocument1{}
	this.Title = title
	this.Id = id
	this.Score = score
	this.Link = link
	return &this
}

// NewSimilarDocument1WithDefaults instantiates a new SimilarDocument1 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSimilarDocument1WithDefaults() *SimilarDocument1 {
	this := SimilarDocument1{}
	return &this
}

// GetTitle returns the Title field value
func (o *SimilarDocument1) GetTitle() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Title
}

// GetTitleOk returns a tuple with the Title field value
// and a boolean to check if the value has been set.
func (o *SimilarDocument1) GetTitleOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Title, true
}

// SetTitle sets field value
func (o *SimilarDocument1) SetTitle(v string) {
	o.Title = v
}

// GetId returns the Id field value
func (o *SimilarDocument1) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *SimilarDocument1) GetIdOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *SimilarDocument1) SetId(v string) {
	o.Id = v
}

// GetScore returns the Score field value
func (o *SimilarDocument1) GetScore() float32 {
	if o == nil {
		var ret float32
		return ret
	}

	return o.Score
}

// GetScoreOk returns a tuple with the Score field value
// and a boolean to check if the value has been set.
func (o *SimilarDocument1) GetScoreOk() (*float32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Score, true
}

// SetScore sets field value
func (o *SimilarDocument1) SetScore(v float32) {
	o.Score = v
}

// GetLink returns the Link field value
func (o *SimilarDocument1) GetLink() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Link
}

// GetLinkOk returns a tuple with the Link field value
// and a boolean to check if the value has been set.
func (o *SimilarDocument1) GetLinkOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Link, true
}

// SetLink sets field value
func (o *SimilarDocument1) SetLink(v string) {
	o.Link = v
}

func (o SimilarDocument1) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["title"] = o.Title
	}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["score"] = o.Score
	}
	if true {
		toSerialize["link"] = o.Link
	}
	return json.Marshal(toSerialize)
}

type NullableSimilarDocument1 struct {
	value *SimilarDocument1
	isSet bool
}

func (v NullableSimilarDocument1) Get() *SimilarDocument1 {
	return v.value
}

func (v *NullableSimilarDocument1) Set(val *SimilarDocument1) {
	v.value = val
	v.isSet = true
}

func (v NullableSimilarDocument1) IsSet() bool {
	return v.isSet
}

func (v *NullableSimilarDocument1) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSimilarDocument1(val *SimilarDocument1) *NullableSimilarDocument1 {
	return &NullableSimilarDocument1{value: val, isSet: true}
}

func (v NullableSimilarDocument1) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSimilarDocument1) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

