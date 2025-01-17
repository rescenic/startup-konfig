//
// CashRestriction.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Cash restriction rules that apply to this account when undergoing portfolio rebalance calculations. */
public struct CashRestriction: Codable, JSONEncodable, Hashable {

    public enum ModelType: String, Codable, CaseIterable {
        case allocateMax = "ALLOCATE_MAX"
        case retainMin = "RETAIN_MIN"
    }
    public var id: String?
    public var account: String?
    public var currency: String?
    public var type: ModelType?
    public var amount: Double?

    public init(id: String? = nil, account: String? = nil, currency: String? = nil, type: ModelType? = nil, amount: Double? = nil) {
        self.id = id
        self.account = account
        self.currency = currency
        self.type = type
        self.amount = amount
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case account
        case currency
        case type
        case amount
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
        try container.encodeIfPresent(id, forKey: .id)
        try container.encodeIfPresent(account, forKey: .account)
        try container.encodeIfPresent(currency, forKey: .currency)
        try container.encodeIfPresent(type, forKey: .type)
        try container.encodeIfPresent(amount, forKey: .amount)
        var additionalPropertiesContainer = encoder.container(keyedBy: String.self)
        try additionalPropertiesContainer.encodeMap(additionalProperties)
    }

    // Decodable protocol methods

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        id = try container.decodeIfPresent(String.self, forKey: .id)
        account = try container.decodeIfPresent(String.self, forKey: .account)
        currency = try container.decodeIfPresent(String.self, forKey: .currency)
        type = try container.decodeIfPresent(ModelType.self, forKey: .type)
        amount = try container.decodeIfPresent(Double.self, forKey: .amount)
        var nonAdditionalPropertyKeys = Set<String>()
        nonAdditionalPropertyKeys.insert("id")
        nonAdditionalPropertyKeys.insert("account")
        nonAdditionalPropertyKeys.insert("currency")
        nonAdditionalPropertyKeys.insert("type")
        nonAdditionalPropertyKeys.insert("amount")
        let additionalPropertiesContainer = try decoder.container(keyedBy: String.self)
        additionalProperties = try additionalPropertiesContainer.decodeMap(AnyCodable.self, excludedKeys: nonAdditionalPropertyKeys)
    }
}

