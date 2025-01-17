//
// EmbeddingGeneratorsNullable.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public enum EmbeddingGeneratorsNullable: String, Codable, CaseIterable {
    case openai = "OPENAI"
    case azureOpenai = "AZURE_OPENAI"
    case azureAdaLarge256 = "AZURE_ADA_LARGE_256"
    case azureAdaLarge1024 = "AZURE_ADA_LARGE_1024"
    case azureAdaLarge3072 = "AZURE_ADA_LARGE_3072"
    case azureAdaSmall512 = "AZURE_ADA_SMALL_512"
    case azureAdaSmall1536 = "AZURE_ADA_SMALL_1536"
    case cohereMultilingualV3 = "COHERE_MULTILINGUAL_V3"
    case vertexMultimodal = "VERTEX_MULTIMODAL"
    case openaiAdaLarge256 = "OPENAI_ADA_LARGE_256"
    case openaiAdaLarge1024 = "OPENAI_ADA_LARGE_1024"
    case openaiAdaLarge3072 = "OPENAI_ADA_LARGE_3072"
    case openaiAdaSmall512 = "OPENAI_ADA_SMALL_512"
    case openaiAdaSmall1536 = "OPENAI_ADA_SMALL_1536"
}
