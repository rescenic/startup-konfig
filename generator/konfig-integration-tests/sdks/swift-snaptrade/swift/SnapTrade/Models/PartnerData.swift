//
// PartnerData.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** SnapTrade Partner metadata */
public struct PartnerData: Codable, JSONEncodable, Hashable {

    /** URI to redirect user back to after user is done adding brokerage connections */
    public var redirectUri: String?
    /** Brokerages that can be accessed by partners */
    public var allowedBrokerages: [Brokerage]?
    /** Name of Snaptrade Partner */
    public var name: String?
    /** Slug of Snaptrade Partner */
    public var slug: String?
    /** URL to partner's logo */
    public var logoUrl: String?
    /** Shows if pin is required by users to access connection page */
    public var pinRequired: Bool?
    /** Shows if users of Snaptrade partners can access trade endpoints */
    public var canAccessTrades: Bool?
    /** Shows if Snaptrade partners can get user holdings data */
    public var canAccessHoldings: Bool?
    /** Shows if Snaptrade partners can get users account history data */
    public var canAccessAccountHistory: Bool?
    /** Shows if Snaptrade partners can get users holdings data */
    public var canAccessReferenceData: Bool?
    /** Shows if users Snaptrade partners can access portfolio group management features */
    public var canAccessPortfolioManagement: Bool?
    /** Shows if Snaptrade partners can get users account order history */
    public var canAccessOrders: Bool?

    public init(redirectUri: String? = nil, allowedBrokerages: [Brokerage]? = nil, name: String? = nil, slug: String? = nil, logoUrl: String? = nil, pinRequired: Bool? = nil, canAccessTrades: Bool? = nil, canAccessHoldings: Bool? = nil, canAccessAccountHistory: Bool? = nil, canAccessReferenceData: Bool? = nil, canAccessPortfolioManagement: Bool? = nil, canAccessOrders: Bool? = nil) {
        self.redirectUri = redirectUri
        self.allowedBrokerages = allowedBrokerages
        self.name = name
        self.slug = slug
        self.logoUrl = logoUrl
        self.pinRequired = pinRequired
        self.canAccessTrades = canAccessTrades
        self.canAccessHoldings = canAccessHoldings
        self.canAccessAccountHistory = canAccessAccountHistory
        self.canAccessReferenceData = canAccessReferenceData
        self.canAccessPortfolioManagement = canAccessPortfolioManagement
        self.canAccessOrders = canAccessOrders
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case redirectUri = "redirect_uri"
        case allowedBrokerages = "allowed_brokerages"
        case name
        case slug
        case logoUrl = "logo_url"
        case pinRequired = "pin_required"
        case canAccessTrades = "can_access_trades"
        case canAccessHoldings = "can_access_holdings"
        case canAccessAccountHistory = "can_access_account_history"
        case canAccessReferenceData = "can_access_reference_data"
        case canAccessPortfolioManagement = "can_access_portfolio_management"
        case canAccessOrders = "can_access_orders"
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
        try container.encodeIfPresent(redirectUri, forKey: .redirectUri)
        try container.encodeIfPresent(allowedBrokerages, forKey: .allowedBrokerages)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(slug, forKey: .slug)
        try container.encodeIfPresent(logoUrl, forKey: .logoUrl)
        try container.encodeIfPresent(pinRequired, forKey: .pinRequired)
        try container.encodeIfPresent(canAccessTrades, forKey: .canAccessTrades)
        try container.encodeIfPresent(canAccessHoldings, forKey: .canAccessHoldings)
        try container.encodeIfPresent(canAccessAccountHistory, forKey: .canAccessAccountHistory)
        try container.encodeIfPresent(canAccessReferenceData, forKey: .canAccessReferenceData)
        try container.encodeIfPresent(canAccessPortfolioManagement, forKey: .canAccessPortfolioManagement)
        try container.encodeIfPresent(canAccessOrders, forKey: .canAccessOrders)
        var additionalPropertiesContainer = encoder.container(keyedBy: String.self)
        try additionalPropertiesContainer.encodeMap(additionalProperties)
    }

    // Decodable protocol methods

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        redirectUri = try container.decodeIfPresent(String.self, forKey: .redirectUri)
        allowedBrokerages = try container.decodeIfPresent([Brokerage].self, forKey: .allowedBrokerages)
        name = try container.decodeIfPresent(String.self, forKey: .name)
        slug = try container.decodeIfPresent(String.self, forKey: .slug)
        logoUrl = try container.decodeIfPresent(String.self, forKey: .logoUrl)
        pinRequired = try container.decodeIfPresent(Bool.self, forKey: .pinRequired)
        canAccessTrades = try container.decodeIfPresent(Bool.self, forKey: .canAccessTrades)
        canAccessHoldings = try container.decodeIfPresent(Bool.self, forKey: .canAccessHoldings)
        canAccessAccountHistory = try container.decodeIfPresent(Bool.self, forKey: .canAccessAccountHistory)
        canAccessReferenceData = try container.decodeIfPresent(Bool.self, forKey: .canAccessReferenceData)
        canAccessPortfolioManagement = try container.decodeIfPresent(Bool.self, forKey: .canAccessPortfolioManagement)
        canAccessOrders = try container.decodeIfPresent(Bool.self, forKey: .canAccessOrders)
        var nonAdditionalPropertyKeys = Set<String>()
        nonAdditionalPropertyKeys.insert("redirect_uri")
        nonAdditionalPropertyKeys.insert("allowed_brokerages")
        nonAdditionalPropertyKeys.insert("name")
        nonAdditionalPropertyKeys.insert("slug")
        nonAdditionalPropertyKeys.insert("logo_url")
        nonAdditionalPropertyKeys.insert("pin_required")
        nonAdditionalPropertyKeys.insert("can_access_trades")
        nonAdditionalPropertyKeys.insert("can_access_holdings")
        nonAdditionalPropertyKeys.insert("can_access_account_history")
        nonAdditionalPropertyKeys.insert("can_access_reference_data")
        nonAdditionalPropertyKeys.insert("can_access_portfolio_management")
        nonAdditionalPropertyKeys.insert("can_access_orders")
        let additionalPropertiesContainer = try decoder.container(keyedBy: String.self)
        additionalProperties = try additionalPropertiesContainer.decodeMap(AnyCodable.self, excludedKeys: nonAdditionalPropertyKeys)
    }
}
