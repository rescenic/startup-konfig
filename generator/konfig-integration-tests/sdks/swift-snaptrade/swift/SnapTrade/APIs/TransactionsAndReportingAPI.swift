//
// TransactionsAndReportingAPI.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class TransactionsAndReportingAPI {

    let client: SnapTradeClient

    public init(client: SnapTradeClient) {
        self.client = client
    }

    /**
     Get transaction history for a user
     
     - parameter userId: (query)  
     - parameter userSecret: (query)  
     - parameter startDate: (query)  (optional)
     - parameter endDate: (query)  (optional)
     - parameter accounts: (query) Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
     - parameter brokerageAuthorizations: (query) Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations (optional)
     - parameter type: (query) Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getActivitiesSync(userId: String, userSecret: String, startDate: String? = nil, endDate: String? = nil, accounts: String? = nil, brokerageAuthorizations: String? = nil, type: String? = nil, apiResponseQueue: DispatchQueue = SnapTradeAPI.apiResponseQueue, completion: @escaping ((_ data: [UniversalActivity]?, _ error: Error?) -> Void)) -> RequestTask {
        return getActivitiesWithRequestBuilder(userId: userId, userSecret: userSecret, startDate: startDate, endDate: endDate, accounts: accounts, brokerageAuthorizations: brokerageAuthorizations, type: type).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get transaction history for a user
     
     - parameter userId: (query)  
     - parameter userSecret: (query)  
     - parameter startDate: (query)  (optional)
     - parameter endDate: (query)  (optional)
     - parameter accounts: (query) Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
     - parameter brokerageAuthorizations: (query) Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations (optional)
     - parameter type: (query) Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    private class func getActivitiesAsyncMappedParams(userId: String, userSecret: String, startDate: String? = nil, endDate: String? = nil, accounts: String? = nil, brokerageAuthorizations: String? = nil, type: String? = nil) async throws -> [UniversalActivity] {
        return try await withCheckedThrowingContinuation { continuation in
            getActivitiesWithRequestBuilder(userId: userId, userSecret: userSecret, startDate: startDate, endDate: endDate, accounts: accounts, brokerageAuthorizations: brokerageAuthorizations, type: type).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }

    /**
     Get transaction history for a user
     
     - parameter userId: (query)  
     - parameter userSecret: (query)  
     - parameter startDate: (query)  (optional)
     - parameter endDate: (query)  (optional)
     - parameter accounts: (query) Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
     - parameter brokerageAuthorizations: (query) Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations (optional)
     - parameter type: (query) Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open class func getActivities(
        userId: String,
        userSecret: String,
        startDate: String? = nil, 
        endDate: String? = nil, 
        accounts: String? = nil, 
        brokerageAuthorizations: String? = nil, 
        type: String? = nil
    ) async throws -> [UniversalActivity] {
        return try await withCheckedThrowingContinuation { continuation in
            getActivitiesWithRequestBuilder(userId: userId, userSecret: userSecret, startDate: startDate, endDate: endDate, accounts: accounts, brokerageAuthorizations: brokerageAuthorizations, type: type).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }


    /**
     Get transaction history for a user
     
     - parameter userId: (query)  
     - parameter userSecret: (query)  
     - parameter startDate: (query)  (optional)
     - parameter endDate: (query)  (optional)
     - parameter accounts: (query) Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
     - parameter brokerageAuthorizations: (query) Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations (optional)
     - parameter type: (query) Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open func getActivities(
        userId: String,
        userSecret: String,
        startDate: String? = nil, 
        endDate: String? = nil, 
        accounts: String? = nil, 
        brokerageAuthorizations: String? = nil, 
        type: String? = nil
    ) async throws -> [UniversalActivity] {
        return try await withCheckedThrowingContinuation { continuation in
            getActivitiesWithRequestBuilder(userId: userId, userSecret: userSecret, startDate: startDate, endDate: endDate, accounts: accounts, brokerageAuthorizations: brokerageAuthorizations, type: type).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }



    /**
     Get transaction history for a user
     - GET /activities
     - Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance
     - API Key:
       - type: apiKey clientId (QUERY)
       - name: PartnerClientId
     - API Key:
       - type: apiKey Signature 
       - name: PartnerSignature
     - API Key:
       - type: apiKey timestamp (QUERY)
       - name: PartnerTimestamp
     - parameter userId: (query)  
     - parameter userSecret: (query)  
     - parameter startDate: (query)  (optional)
     - parameter endDate: (query)  (optional)
     - parameter accounts: (query) Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
     - parameter brokerageAuthorizations: (query) Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations (optional)
     - parameter type: (query) Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT (optional)
     - returns: RequestBuilder<[UniversalActivity]> 
     */
    open class func getActivitiesWithRequestBuilder(
            userId: String,
            userSecret: String,
            startDate: String? = nil,
            endDate: String? = nil,
            accounts: String? = nil,
            brokerageAuthorizations: String? = nil,
            type: String? = nil
    ) -> RequestBuilder<[UniversalActivity]> {
        let basePath = SnapTradeAPI.basePath;
        let localVariablePath = "/activities"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "startDate": (wrappedValue: startDate?.encodeToJSON(), isExplode: true),
            "endDate": (wrappedValue: endDate?.encodeToJSON(), isExplode: true),
            "accounts": (wrappedValue: accounts?.encodeToJSON(), isExplode: true),
            "brokerageAuthorizations": (wrappedValue: brokerageAuthorizations?.encodeToJSON(), isExplode: true),
            "type": (wrappedValue: type?.encodeToJSON(), isExplode: true),
            "userId": (wrappedValue: userId.encodeToJSON(), isExplode: true),
            "userSecret": (wrappedValue: userSecret.encodeToJSON(), isExplode: true),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "query", name: "clientId", value: SnapTradeAPI.partnerClientId)
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "Signature", value: SnapTradeAPI.partnerSignature)
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "query", name: "timestamp", value: SnapTradeAPI.partnerTimestamp)
            let localVariableRequestBuilder: RequestBuilder<[UniversalActivity]>.Type = SnapTradeAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "GET", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to GET /activities")
    }

    /**
     Get transaction history for a user
     - GET /activities
     - Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance
     - API Key:
       - type: apiKey clientId (QUERY)
       - name: PartnerClientId
     - API Key:
       - type: apiKey Signature 
       - name: PartnerSignature
     - API Key:
       - type: apiKey timestamp (QUERY)
       - name: PartnerTimestamp
     - parameter userId: (query)  
     - parameter userSecret: (query)  
     - parameter startDate: (query)  (optional)
     - parameter endDate: (query)  (optional)
     - parameter accounts: (query) Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
     - parameter brokerageAuthorizations: (query) Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations (optional)
     - parameter type: (query) Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT (optional)
     - returns: RequestBuilder<[UniversalActivity]> 
     */
    open func getActivitiesWithRequestBuilder(
            userId: String,
            userSecret: String,
            startDate: String? = nil,
            endDate: String? = nil,
            accounts: String? = nil,
            brokerageAuthorizations: String? = nil,
            type: String? = nil
    ) -> RequestBuilder<[UniversalActivity]> {
        let basePath = self.client.basePath;
        let localVariablePath = "/activities"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "startDate": (wrappedValue: startDate?.encodeToJSON(), isExplode: true),
            "endDate": (wrappedValue: endDate?.encodeToJSON(), isExplode: true),
            "accounts": (wrappedValue: accounts?.encodeToJSON(), isExplode: true),
            "brokerageAuthorizations": (wrappedValue: brokerageAuthorizations?.encodeToJSON(), isExplode: true),
            "type": (wrappedValue: type?.encodeToJSON(), isExplode: true),
            "userId": (wrappedValue: userId.encodeToJSON(), isExplode: true),
            "userSecret": (wrappedValue: userSecret.encodeToJSON(), isExplode: true),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "query", name: "clientId", value: self.client.partnerClientId)
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "Signature", value: self.client.partnerSignature)
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "query", name: "timestamp", value: self.client.partnerTimestamp)
            let localVariableRequestBuilder: RequestBuilder<[UniversalActivity]>.Type = SnapTradeAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "GET", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to GET /activities")
    }


    /**
     Get performance information for a specific timeframe
     
     - parameter startDate: (query)  
     - parameter endDate: (query)  
     - parameter userId: (query)  
     - parameter userSecret: (query)  
     - parameter accounts: (query) Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
     - parameter detailed: (query) Optional, increases frequency of data points for the total value and contribution charts if set to true (optional)
     - parameter frequency: (query) Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly. (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(*, deprecated, message: "This operation is deprecated.")
    @discardableResult
    open class func getReportingCustomRangeSync(startDate: String, endDate: String, userId: String, userSecret: String, accounts: String? = nil, detailed: Bool? = nil, frequency: String? = nil, apiResponseQueue: DispatchQueue = SnapTradeAPI.apiResponseQueue, completion: @escaping ((_ data: PerformanceCustom?, _ error: Error?) -> Void)) -> RequestTask {
        return getReportingCustomRangeWithRequestBuilder(startDate: startDate, endDate: endDate, userId: userId, userSecret: userSecret, accounts: accounts, detailed: detailed, frequency: frequency).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get performance information for a specific timeframe
     
     - parameter startDate: (query)  
     - parameter endDate: (query)  
     - parameter userId: (query)  
     - parameter userSecret: (query)  
     - parameter accounts: (query) Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
     - parameter detailed: (query) Optional, increases frequency of data points for the total value and contribution charts if set to true (optional)
     - parameter frequency: (query) Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly. (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(*, deprecated, message: "This operation is deprecated.")
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    private class func getReportingCustomRangeAsyncMappedParams(startDate: String, endDate: String, userId: String, userSecret: String, accounts: String? = nil, detailed: Bool? = nil, frequency: String? = nil) async throws -> PerformanceCustom {
        return try await withCheckedThrowingContinuation { continuation in
            getReportingCustomRangeWithRequestBuilder(startDate: startDate, endDate: endDate, userId: userId, userSecret: userSecret, accounts: accounts, detailed: detailed, frequency: frequency).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }

    /**
     Get performance information for a specific timeframe
     
     - parameter startDate: (query)  
     - parameter endDate: (query)  
     - parameter userId: (query)  
     - parameter userSecret: (query)  
     - parameter accounts: (query) Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
     - parameter detailed: (query) Optional, increases frequency of data points for the total value and contribution charts if set to true (optional)
     - parameter frequency: (query) Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly. (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(*, deprecated, message: "This operation is deprecated.")
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open class func getReportingCustomRange(
        startDate: String,
        endDate: String,
        userId: String,
        userSecret: String,
        accounts: String? = nil, 
        detailed: Bool? = nil, 
        frequency: String? = nil
    ) async throws -> PerformanceCustom {
        return try await withCheckedThrowingContinuation { continuation in
            getReportingCustomRangeWithRequestBuilder(startDate: startDate, endDate: endDate, userId: userId, userSecret: userSecret, accounts: accounts, detailed: detailed, frequency: frequency).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }


    /**
     Get performance information for a specific timeframe
     
     - parameter startDate: (query)  
     - parameter endDate: (query)  
     - parameter userId: (query)  
     - parameter userSecret: (query)  
     - parameter accounts: (query) Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
     - parameter detailed: (query) Optional, increases frequency of data points for the total value and contribution charts if set to true (optional)
     - parameter frequency: (query) Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly. (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(*, deprecated, message: "This operation is deprecated.")
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open func getReportingCustomRange(
        startDate: String,
        endDate: String,
        userId: String,
        userSecret: String,
        accounts: String? = nil, 
        detailed: Bool? = nil, 
        frequency: String? = nil
    ) async throws -> PerformanceCustom {
        return try await withCheckedThrowingContinuation { continuation in
            getReportingCustomRangeWithRequestBuilder(startDate: startDate, endDate: endDate, userId: userId, userSecret: userSecret, accounts: accounts, detailed: detailed, frequency: frequency).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }



    /**
     Get performance information for a specific timeframe
     - GET /performance/custom
     - Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.
     - API Key:
       - type: apiKey clientId (QUERY)
       - name: PartnerClientId
     - API Key:
       - type: apiKey Signature 
       - name: PartnerSignature
     - API Key:
       - type: apiKey timestamp (QUERY)
       - name: PartnerTimestamp
     - parameter startDate: (query)  
     - parameter endDate: (query)  
     - parameter userId: (query)  
     - parameter userSecret: (query)  
     - parameter accounts: (query) Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
     - parameter detailed: (query) Optional, increases frequency of data points for the total value and contribution charts if set to true (optional)
     - parameter frequency: (query) Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly. (optional)
     - returns: RequestBuilder<PerformanceCustom> 
     */
    @available(*, deprecated, message: "This operation is deprecated.")
    open class func getReportingCustomRangeWithRequestBuilder(
            startDate: String,
            endDate: String,
            userId: String,
            userSecret: String,
            accounts: String? = nil,
            detailed: Bool? = nil,
            frequency: String? = nil
    ) -> RequestBuilder<PerformanceCustom> {
        let basePath = SnapTradeAPI.basePath;
        let localVariablePath = "/performance/custom"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "startDate": (wrappedValue: startDate.encodeToJSON(), isExplode: true),
            "endDate": (wrappedValue: endDate.encodeToJSON(), isExplode: true),
            "accounts": (wrappedValue: accounts?.encodeToJSON(), isExplode: true),
            "detailed": (wrappedValue: detailed?.encodeToJSON(), isExplode: true),
            "frequency": (wrappedValue: frequency?.encodeToJSON(), isExplode: true),
            "userId": (wrappedValue: userId.encodeToJSON(), isExplode: true),
            "userSecret": (wrappedValue: userSecret.encodeToJSON(), isExplode: true),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "query", name: "clientId", value: SnapTradeAPI.partnerClientId)
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "Signature", value: SnapTradeAPI.partnerSignature)
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "query", name: "timestamp", value: SnapTradeAPI.partnerTimestamp)
            let localVariableRequestBuilder: RequestBuilder<PerformanceCustom>.Type = SnapTradeAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "GET", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to GET /performance/custom")
    }

    /**
     Get performance information for a specific timeframe
     - GET /performance/custom
     - Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.
     - API Key:
       - type: apiKey clientId (QUERY)
       - name: PartnerClientId
     - API Key:
       - type: apiKey Signature 
       - name: PartnerSignature
     - API Key:
       - type: apiKey timestamp (QUERY)
       - name: PartnerTimestamp
     - parameter startDate: (query)  
     - parameter endDate: (query)  
     - parameter userId: (query)  
     - parameter userSecret: (query)  
     - parameter accounts: (query) Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
     - parameter detailed: (query) Optional, increases frequency of data points for the total value and contribution charts if set to true (optional)
     - parameter frequency: (query) Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly. (optional)
     - returns: RequestBuilder<PerformanceCustom> 
     */
    @available(*, deprecated, message: "This operation is deprecated.")
    open func getReportingCustomRangeWithRequestBuilder(
            startDate: String,
            endDate: String,
            userId: String,
            userSecret: String,
            accounts: String? = nil,
            detailed: Bool? = nil,
            frequency: String? = nil
    ) -> RequestBuilder<PerformanceCustom> {
        let basePath = self.client.basePath;
        let localVariablePath = "/performance/custom"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "startDate": (wrappedValue: startDate.encodeToJSON(), isExplode: true),
            "endDate": (wrappedValue: endDate.encodeToJSON(), isExplode: true),
            "accounts": (wrappedValue: accounts?.encodeToJSON(), isExplode: true),
            "detailed": (wrappedValue: detailed?.encodeToJSON(), isExplode: true),
            "frequency": (wrappedValue: frequency?.encodeToJSON(), isExplode: true),
            "userId": (wrappedValue: userId.encodeToJSON(), isExplode: true),
            "userSecret": (wrappedValue: userSecret.encodeToJSON(), isExplode: true),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "query", name: "clientId", value: self.client.partnerClientId)
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "Signature", value: self.client.partnerSignature)
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "query", name: "timestamp", value: self.client.partnerTimestamp)
            let localVariableRequestBuilder: RequestBuilder<PerformanceCustom>.Type = SnapTradeAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "GET", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to GET /performance/custom")
    }

}