import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function OxfordDictionariesTypeScriptSdk() {
  return (
    <Sdk
      sdkName="oxford-dictionaries-typescript-sdk"
      metaDescription="Explore Oxford Languages, the home of world-renowned language data."
      company="Oxford Dictionaries"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oxford-dictionaries/logo.png"
      clientNameCamelCase="oxfordDictionaries"
      homepage="developer.oxforddictionaries.com"
      lastUpdated={new Date("2024-02-03T00:19:54.817Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oxford-dictionaries/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oxford-dictionaries/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/domains/{source_domains_language}/{target_domains_language}",
    "method": "listAvailableDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available domains in a bilingual dataset",
    "parameters": [
      {
        "name": "sourceDomainsLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "targetDomainsLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexicalcategories, registers utility endpoints."
      }
    ]
  },
  {
    "url": "/domains/{source_language}",
    "method": "listMonolingualDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available domains in a monolingual dataset",
    "parameters": [
      {
        "name": "sourceLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexicalcategories, registers utility endpoints."
      }
    ]
  },
  {
    "url": "/entries/{source_language}/{word_id}/sentences",
    "method": "getCorpusSentences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "The Sentence Dictionary",
    "typeScriptTag": "theSentenceDictionary",
    "description": "Retrieve corpus sentences for a given word",
    "parameters": [
      {
        "name": "sourceLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the 'sentences' endpoint"
      }
    ]
  },
  {
    "url": "/entries/{source_lang}/{word_id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dictionary entries",
    "typeScriptTag": "dictionaryEntries",
    "description": "Retrieve dictionary information for a given word",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the 'entries' endpoints"
      }
    ]
  },
  {
    "url": "/entries/{source_lang}/{word_id}/antonyms",
    "method": "getAntonyms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Thesaurus",
    "typeScriptTag": "thesaurus",
    "description": "Retrieve words that mean the opposite",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for thesaurus endpoint"
      }
    ]
  },
  {
    "url": "/entries/{source_lang}/{word_id}/regions={region}",
    "method": "specifyDictionaryRegion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dictionary entries",
    "typeScriptTag": "dictionaryEntries",
    "description": "Specify GB or US dictionary for English entry search",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive."
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "Region filter parameter. gb = Oxford Dictionary of English. us = New Oxford American Dictionary."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the 'entries' endpoints"
      }
    ]
  },
  {
    "url": "/entries/{source_lang}/{word_id}/synonyms",
    "method": "getSimilarWords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Thesaurus",
    "typeScriptTag": "thesaurus",
    "description": "Retrieve words that are similar",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for thesaurus endpoint"
      }
    ]
  },
  {
    "url": "/entries/{source_lang}/{word_id}/synonyms;antonyms",
    "method": "getSynonymsAntonyms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Thesaurus",
    "typeScriptTag": "thesaurus",
    "description": "Retrieve synonyms and antonyms for a given word",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for thesaurus endpoint"
      }
    ]
  },
  {
    "url": "/entries/{source_lang}/{word_id}/{filters}",
    "method": "applyFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dictionary entries",
    "typeScriptTag": "dictionaryEntries",
    "description": "Apply filters to response",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "An Entry identifier. Case-sensitive."
      },
      {
        "name": "filters",
        "schema": "string",
        "required": true,
        "description": "Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the 'entries' endpoints"
      }
    ]
  },
  {
    "url": "/entries/{source_translation_language}/{word_id}/translations={target_translation_language}",
    "method": "getWordTranslation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Translation",
    "typeScriptTag": "translation",
    "description": "Retrieve translation for a given word",
    "parameters": [
      {
        "name": "sourceTranslationLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "The source word"
      },
      {
        "name": "targetTranslationLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the 'entries' endpoints"
      }
    ]
  },
  {
    "url": "/filters",
    "method": "listAvailableFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available filters",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the Filters endpoint."
      }
    ]
  },
  {
    "url": "/filters/{endpoint}",
    "method": "listEndpointFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available filters for specific endpoint",
    "parameters": [
      {
        "name": "endpoint",
        "schema": "string",
        "required": true,
        "description": "Name of the endpoint."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the Filters endpoint."
      }
    ]
  },
  {
    "url": "/grammaticalFeatures/{source_language}",
    "method": "getGrammaticalFeatures",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available grammatical features in a dataset",
    "parameters": [
      {
        "name": "sourceLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code. If provided output will be filtered by sourceLanguage."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexicalcategories, registers utility endpoints."
      }
    ]
  },
  {
    "url": "/inflections/{source_lang}/{word_id}/{filters}",
    "method": "checkAndRetrieveRootForm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lemmatron",
    "typeScriptTag": "lemmatron",
    "description": "Check a word exists in the dictionary and retrieve its root form",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "filters",
        "schema": "string",
        "required": true,
        "description": "Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma."
      },
      {
        "name": "wordId",
        "schema": "string",
        "required": true,
        "description": "The input word"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the inflections endpoint."
      }
    ]
  },
  {
    "url": "/languages",
    "method": "listAvailableLanguages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available dictionaries",
    "parameters": [
      {
        "name": "sourceLanguage",
        "schema": "string",
        "required": false,
        "description": "IANA language code. If provided output will be filtered by sourceLanguage."
      },
      {
        "name": "targetLanguage",
        "schema": "string",
        "required": false,
        "description": "IANA language code. If provided output will be filtered by sourceLanguage."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for the languages endpoint."
      }
    ]
  },
  {
    "url": "/lexicalcategories/{language}",
    "method": "getLexicalCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available lexical categories in a dataset",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexicalcategories, registers utility endpoints."
      }
    ]
  },
  {
    "url": "/regions/{source_language}",
    "method": "listMonolingualRegions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available regions in a monolingual dataset",
    "parameters": [
      {
        "name": "sourceLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for region endpoint."
      }
    ]
  },
  {
    "url": "/registers/{source_language}",
    "method": "listMonolingualRegisters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available registers in a  monolingual dataset",
    "parameters": [
      {
        "name": "sourceLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexicalcategories, registers utility endpoints."
      }
    ]
  },
  {
    "url": "/registers/{source_register_language}/{target_register_language}",
    "method": "listBilingualRegisters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Lists available registers in a bilingual dataset",
    "parameters": [
      {
        "name": "sourceRegisterLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "targetRegisterLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexicalcategories, registers utility endpoints."
      }
    ]
  },
  {
    "url": "/search/{source_lang}",
    "method": "getMatches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Retrieve possible matches to input",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Search string"
      },
      {
        "name": "prefix",
        "schema": "boolean",
        "required": false,
        "description": "Set prefix to true if you'd like to get results only starting with search string."
      },
      {
        "name": "regions",
        "schema": "string",
        "required": false,
        "description": "If searching in English, filter words with specific region(s) either 'us' or 'gb'."
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limit the number of results per response. Default and maximum limit is 5000."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "Offset the start number of the result."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for wordlist endpoint."
      }
    ]
  },
  {
    "url": "/search/{source_search_language}/translations={target_search_language}",
    "method": "possibleTranslations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Retrieve possible translation matches to input",
    "parameters": [
      {
        "name": "sourceSearchLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "targetSearchLanguage",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Search string."
      },
      {
        "name": "prefix",
        "schema": "boolean",
        "required": false,
        "description": "Set prefix to true if you'd like to get results only starting with search string."
      },
      {
        "name": "regions",
        "schema": "string",
        "required": false,
        "description": "Filter words with specific region(s) E.g., regions=us. For now gb, us are available for en language."
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limit the number of results per response. Default and maximum limit is 5000."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "Offset the start number of the result."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for wordlist endpoint."
      }
    ]
  },
  {
    "url": "/wordlist/{source_lang}/{filters_advanced}",
    "method": "getAdvancedWords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wordlist",
    "typeScriptTag": "wordlist",
    "description": "Retrieve list of words for category with advanced options",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "filtersAdvanced",
        "schema": "string",
        "required": true,
        "description": "Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5."
      },
      {
        "name": "exclude",
        "schema": "string",
        "required": false,
        "description": "Semicolon separated list of parameters-value pairs (same as filters). Excludes headwords that have any senses in specified exclusion attributes (lexical categories, domains, etc.) from results."
      },
      {
        "name": "excludeSenses",
        "schema": "string",
        "required": false,
        "description": "Semicolon separated list of parameters-value pairs (same as filters). Excludes only those senses of a particular headword that match specified exclusion attributes (lexical categories, domains, etc.) from results but includes the headword if it has other permitted senses."
      },
      {
        "name": "excludePrimeSenses",
        "schema": "string",
        "required": false,
        "description": "Semicolon separated list of parameters-value pairs (same as filters). Excludes a headword only if the primary sense matches the specified exclusion attributes (registers, domains only)."
      },
      {
        "name": "wordLength",
        "schema": "string",
        "required": false,
        "description": "Parameter to speficy the minimum (>), exact or maximum (<) length of the words required. E.g., >5 - more than 5 chars; <4 - less than 4 chars; >5<10 - from 5 to 10 chars; 3 - exactly 3 chars."
      },
      {
        "name": "prefix",
        "schema": "string",
        "required": false,
        "description": "Filter words that start with prefix parameter"
      },
      {
        "name": "exact",
        "schema": "boolean",
        "required": false,
        "description": "If exact=true wordlist returns a list of entries that exactly matches the search string. Otherwise wordlist lists entries that start with prefix string."
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limit the number of results per response. Default and maximum limit is 5000."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "Offset the start number of the result."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for wordlist endpoint."
      }
    ]
  },
  {
    "url": "/wordlist/{source_lang}/{filters_basic}",
    "method": "getCategoryWords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wordlist",
    "typeScriptTag": "wordlist",
    "description": "Retrieve a list of words in a category",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "filtersBasic",
        "schema": "string",
        "required": true,
        "description": "Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5."
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limit the number of results per response. Default and maximum limit is 5000."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "Offset the start number of the result"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for wordlist endpoint."
      }
    ]
  },
  {
    "url": "/stats/frequency/ngrams/{source_lang}/{corpus}/{ngram-size}",
    "method": "getNgramFrequencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LexiStats",
    "typeScriptTag": "lexiStats",
    "description": "Retrieve the frequency of ngrams (1-4) derived from a corpus",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "corpus",
        "schema": "string",
        "required": true,
        "description": "For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com"
      },
      {
        "name": "ngramSize",
        "schema": "string",
        "required": true,
        "description": "the size of ngrams requested (1-4)"
      },
      {
        "name": "tokens",
        "schema": "string",
        "required": false,
        "description": "List of tokens to filter. The tokens are separated by spaces, the list items are separated by comma (e.g., for bigrams (n=2) tokens=this is,this was, this will)"
      },
      {
        "name": "contains",
        "schema": "string",
        "required": false,
        "description": "Find ngrams containing the given token(s). Use comma or space as token separators; the order of tokens is irrelevant."
      },
      {
        "name": "punctuation",
        "schema": "string",
        "required": false,
        "description": "Flag specifying whether to lookup ngrams that include punctuation or not (possible values are \"true\" and \"false\"; default is \"false\")"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Option specifying whether tokens should be returned as a single string (option \"google\") or as a list of strings (option \"oup\")"
      },
      {
        "name": "minFrequency",
        "schema": "integer",
        "required": false,
        "description": "Restrict the query to entries with frequency of at least `minFrequency`"
      },
      {
        "name": "maxFrequency",
        "schema": "integer",
        "required": false,
        "description": "Restrict the query to entries with frequency of at most `maxFrequency`"
      },
      {
        "name": "minDocumentFrequency",
        "schema": "integer",
        "required": false,
        "description": "Restrict the query to entries that appear in at least `minDocumentFrequency` documents"
      },
      {
        "name": "maxDocumentFrequency",
        "schema": "integer",
        "required": false,
        "description": "Restrict the query to entries that appera in at most `maxDocumentFrequency` documents"
      },
      {
        "name": "collate",
        "schema": "string",
        "required": false,
        "description": "collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory)."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign ('-'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "pagination - results offset"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "pagination - results limit"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for corpus ngrams."
      }
    ]
  },
  {
    "url": "/stats/frequency/word/{source_lang}",
    "method": "getWordFrequency",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LexiStats",
    "typeScriptTag": "lexiStats",
    "description": "Retrieve the frequency of a word derived from a corpus.",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "corpus",
        "schema": "string",
        "required": false,
        "description": "For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com"
      },
      {
        "name": "wordform",
        "schema": "string",
        "required": false,
        "description": "The written form of the word to look up (preserving case e.g., Books vs books)"
      },
      {
        "name": "trueCase",
        "schema": "string",
        "required": false,
        "description": "The written form of the word to look up with normalised case (Books --> books)"
      },
      {
        "name": "lemma",
        "schema": "string",
        "required": false,
        "description": "The lemma of the word to look up (e.g., Book, booked, books all have the lemma \"book\")"
      },
      {
        "name": "lexicalCategory",
        "schema": "string",
        "required": false,
        "description": "The lexical category of the word(s) to look up (e.g., noun or verb)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a frequency"
      }
    ]
  },
  {
    "url": "/stats/frequency/words/{source_lang}",
    "method": "getWordFrequencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LexiStats",
    "typeScriptTag": "lexiStats",
    "description": "Retrieve a list of frequencies of a word/words derived from a corpus.",
    "parameters": [
      {
        "name": "sourceLang",
        "schema": "string",
        "required": true,
        "description": "IANA language code"
      },
      {
        "name": "corpus",
        "schema": "string",
        "required": false,
        "description": "For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com"
      },
      {
        "name": "wordform",
        "schema": "string",
        "required": false,
        "description": "The written form of the word to look up (preserving case e.g., Book vs book)"
      },
      {
        "name": "trueCase",
        "schema": "string",
        "required": false,
        "description": "The written form of the word to look up with normalised case (Books --> books)"
      },
      {
        "name": "lemma",
        "schema": "string",
        "required": false,
        "description": "The lemma of the word to look up (e.g., Book, booked, books all have the lemma \"book\")"
      },
      {
        "name": "lexicalCategory",
        "schema": "string",
        "required": false,
        "description": "The lexical category of the word(s) to look up (e.g., adjective or noun)"
      },
      {
        "name": "grammaticalFeatures",
        "schema": "string",
        "required": false,
        "description": "The grammatical features of the word(s) to look up entered as a list of k:v (e.g., degree_type:comparative)"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign ('-'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)"
      },
      {
        "name": "collate",
        "schema": "string",
        "required": false,
        "description": "collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory)."
      },
      {
        "name": "minFrequency",
        "schema": "integer",
        "required": false,
        "description": "Restrict the query to entries with frequency of at least `minFrequency`"
      },
      {
        "name": "maxFrequency",
        "schema": "integer",
        "required": false,
        "description": "Restrict the query to entries with frequency of at most `maxFrequency`"
      },
      {
        "name": "minNormalizedFrequency",
        "schema": "number",
        "required": false,
        "description": "Restrict the query to entries with frequency of at least `minNormalizedFrequency`"
      },
      {
        "name": "maxNormalizedFrequency",
        "schema": "number",
        "required": false,
        "description": "Restrict the query to entries with frequency of at most `maxNormalizedFrequency`"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "pagination - results offset"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "pagination - results limit"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a list of frequencies per wordform-trueCase-lemma-lexicalCategory entry."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Oxford Dictionaries"
      apiBaseUrl="https://od-api-demo.oxforddictionaries.com:443/api/v1"
      apiVersion="1.11.0"
      endpoints={26}
      sdkMethods={26}
      schemas={36}
      parameters={149}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oxford-dictionaries/openapi.yaml"
    />
  );
}
  