

# GetEmbeddingDocumentsBody


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**tags** | **Map&lt;String, Object&gt;** | A set of tags to limit the search to. Deprecated and may be removed in the future. |  [optional] |
|**query** | **String** | Query for which to get related chunks and embeddings. |  |
|**queryVector** | **List&lt;Double&gt;** | Optional query vector for which to get related chunks and embeddings. It must have been         generated by the same model used to generate the embeddings across which the search is being conducted. Cannot         provide both &#x60;query&#x60; and &#x60;query_vector&#x60;. |  [optional] |
|**k** | **Integer** | Number of related chunks to return. |  |
|**fileIds** | **List&lt;Integer&gt;** | Optional list of file IDs to limit the search to |  [optional] |
|**parentFileIds** | **List&lt;Integer&gt;** | Optional list of parent file IDs to limit the search to. A parent file describes a file to which         another file belongs (e.g. a folder) |  [optional] |
|**includeAllChildren** | **Boolean** | Flag to control whether or not to include all children of filtered files in the embedding search. |  [optional] |
|**tagsV2** | **Object** | A set of tags to limit the search to. Use this instead of &#x60;tags&#x60;, which is deprecated. |  [optional] |
|**includeTags** | **Boolean** | Flag to control whether or not to include tags for each chunk in the response. |  [optional] |
|**includeVectors** | **Boolean** | Flag to control whether or not to include embedding vectors in the response. |  [optional] |
|**includeRawFile** | **Boolean** | Flag to control whether or not to include a signed URL to the raw file containing each chunk         in the response. |  [optional] |
|**hybridSearch** | **Boolean** | Flag to control whether or not to perform hybrid search. |  [optional] |
|**hybridSearchTuningParameters** | [**HybridSearchTuningParamsNullable**](HybridSearchTuningParamsNullable.md) |  |  [optional] |
|**mediaType** | **FileContentTypesNullable** |  |  [optional] |
|**embeddingModel** | **EmbeddingGeneratorsNullable** |  |  [optional] |


