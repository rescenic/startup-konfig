//
// ModelAssetClassDetails.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct ModelAssetClassDetails: Codable, JSONEncodable, Hashable {

    public var modelAssetClass: ModelAssetClass?
    public var modelAssetClassTarget: [ModelAssetClassTarget]?

    public init(modelAssetClass: ModelAssetClass? = nil, modelAssetClassTarget: [ModelAssetClassTarget]? = nil) {
        self.modelAssetClass = modelAssetClass
        self.modelAssetClassTarget = modelAssetClassTarget
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case modelAssetClass = "model_asset_class"
        case modelAssetClassTarget = "model_asset_class_target"
    }

    public var additionalProperties: [String: AnyCodable] = [:]

    public subscript(key: String) -> AnyCodable? {
        get {
            if let value = additionalProperties[key] {
                return value
            }
            return nil
        }

        set {
            additionalProperties[key] = newValue
        }
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(modelAssetClass, forKey: .modelAssetClass)
        try container.encodeIfPresent(modelAssetClassTarget, forKey: .modelAssetClassTarget)
        var additionalPropertiesContainer = encoder.container(keyedBy: String.self)
        try additionalPropertiesContainer.encodeMap(additionalProperties)
    }

    // Decodable protocol methods

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        modelAssetClass = try container.decodeIfPresent(ModelAssetClass.self, forKey: .modelAssetClass)
        modelAssetClassTarget = try container.decodeIfPresent([ModelAssetClassTarget].self, forKey: .modelAssetClassTarget)
        var nonAdditionalPropertyKeys = Set<String>()
        nonAdditionalPropertyKeys.insert("model_asset_class")
        nonAdditionalPropertyKeys.insert("model_asset_class_target")
        let additionalPropertiesContainer = try decoder.container(keyedBy: String.self)
        additionalProperties = try additionalPropertiesContainer.decodeMap(AnyCodable.self, excludedKeys: nonAdditionalPropertyKeys)
    }
}
