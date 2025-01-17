//
// ListDataSourceItemsRequest.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct ListDataSourceItemsRequest: Codable, JSONEncodable, Hashable {

    public var dataSourceId: Int
    public var parentId: String?
    public var filters: ListItemsFiltersNullable?
    public var pagination: Pagination?

    public init(dataSourceId: Int, parentId: String? = nil, filters: ListItemsFiltersNullable? = nil, pagination: Pagination? = nil) {
        self.dataSourceId = dataSourceId
        self.parentId = parentId
        self.filters = filters
        self.pagination = pagination
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case dataSourceId = "data_source_id"
        case parentId = "parent_id"
        case filters
        case pagination
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(dataSourceId, forKey: .dataSourceId)
        try container.encodeIfPresent(parentId, forKey: .parentId)
        try container.encodeIfPresent(filters, forKey: .filters)
        try container.encodeIfPresent(pagination, forKey: .pagination)
    }
}

