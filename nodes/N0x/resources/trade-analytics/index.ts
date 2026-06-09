import type { INodeProperties } from 'n8n-workflow';

export const tradeAnalyticsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Trade Analytics"
					]
				}
			},
			"options": [
				{
					"name": "Trade Analytics Swap",
					"value": "Trade Analytics Swap",
					"action": "getSwapTrades",
					"description": "Get the list of completed swap trades. Returns a maximum of 200 trades per request. Visit [here](https://docs.0x.org/docs/trade-analytics-api/introduction) for more details about how the API works.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/trade-analytics/swap"
						}
					}
				},
				{
					"name": "Trade Analytics Gasless",
					"value": "Trade Analytics Gasless",
					"action": "getGaslessTrades",
					"description": "Get the list of completed gasless trades. Returns a maximum of 200 trades per request. Visit [here](https://docs.0x.org/docs/trade-analytics-api/introduction) for more details about how the API works.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/trade-analytics/gasless"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /trade-analytics/swap",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade Analytics"
					],
					"operation": [
						"Trade Analytics Swap"
					]
				}
			}
		},
		{
			"displayName": "0 X API Key",
			"name": "0x-api-key",
			"required": true,
			"description": "Visit dashboard.0x.org to get your API Key",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"0x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade Analytics"
					],
					"operation": [
						"Trade Analytics Swap"
					]
				}
			}
		},
		{
			"displayName": "0 X Version",
			"name": "0x-version",
			"required": true,
			"description": "API version",
			"default": "v2",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"0x-version": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade Analytics"
					],
					"operation": [
						"Trade Analytics Swap"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"description": "A pagination cursor used to fetch the next page of trades. It should be set to `null` for the initial request; otherwise, it should be the value of `nextCursor` that is returned from `getSwapTrades` or `getGaslessTrades` calls.",
			"default": "eyJ0aW1lc3RhbXAiOjE3MjkwMzIyMTAsInppZCI6IjB4N2FjM2NlMzExNjA2NzU5MGY5M2U3MWVmIn0=",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cursor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade Analytics"
					],
					"operation": [
						"Trade Analytics Swap"
					]
				}
			}
		},
		{
			"displayName": "Start Timestamp",
			"name": "startTimestamp",
			"description": "Unix timestamp in seconds, specifying the starting point of the time range filter. Only trades completed on or after this timestamp will be included in the response.",
			"default": 1729032210,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "startTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade Analytics"
					],
					"operation": [
						"Trade Analytics Swap"
					]
				}
			}
		},
		{
			"displayName": "End Timestamp",
			"name": "endTimestamp",
			"description": "Unix timestamp in seconds, specifying the end point of the time range filter. Only trades completed on or before this timestamp will be included in the response.",
			"default": 1729032211,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "endTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade Analytics"
					],
					"operation": [
						"Trade Analytics Swap"
					]
				}
			}
		},
		{
			"displayName": "GET /trade-analytics/gasless",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trade Analytics"
					],
					"operation": [
						"Trade Analytics Gasless"
					]
				}
			}
		},
		{
			"displayName": "0 X API Key",
			"name": "0x-api-key",
			"required": true,
			"description": "Visit dashboard.0x.org to get your API Key",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"0x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade Analytics"
					],
					"operation": [
						"Trade Analytics Gasless"
					]
				}
			}
		},
		{
			"displayName": "0 X Version",
			"name": "0x-version",
			"required": true,
			"description": "API version",
			"default": "v2",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"0x-version": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade Analytics"
					],
					"operation": [
						"Trade Analytics Gasless"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"description": "A pagination cursor used to fetch the next page of trades. It should be set to `null` for the initial request; otherwise, it should be the value of `nextCursor` that is returned from `getSwapTrades` or `getGaslessTrades` calls.",
			"default": "eyJ0aW1lc3RhbXAiOjE3MjkwMzIyMTAsInppZCI6IjB4N2FjM2NlMzExNjA2NzU5MGY5M2U3MWVmIn0=",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cursor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade Analytics"
					],
					"operation": [
						"Trade Analytics Gasless"
					]
				}
			}
		},
		{
			"displayName": "Start Timestamp",
			"name": "startTimestamp",
			"description": "Unix timestamp in seconds, specifying the starting point of the time range filter. Only trades completed on or after this timestamp will be included in the response.",
			"default": 1729032210,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "startTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade Analytics"
					],
					"operation": [
						"Trade Analytics Gasless"
					]
				}
			}
		},
		{
			"displayName": "End Timestamp",
			"name": "endTimestamp",
			"description": "Unix timestamp in seconds, specifying the end point of the time range filter. Only trades completed on or before this timestamp will be included in the response.",
			"default": 1729032211,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "endTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trade Analytics"
					],
					"operation": [
						"Trade Analytics Gasless"
					]
				}
			}
		},
];
