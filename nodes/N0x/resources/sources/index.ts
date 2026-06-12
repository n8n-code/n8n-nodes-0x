import type { INodeProperties } from 'n8n-workflow';

export const sourcesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sources"
					]
				}
			},
			"options": [
				{
					"name": "Sources Get Sources",
					"value": "Sources Get Sources",
					"action": "getSources",
					"description": "Get the list of supported sources",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sources"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sources"
					],
					"operation": [
						"Sources Get Sources"
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
						"Sources"
					],
					"operation": [
						"Sources Get Sources"
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
						"Sources"
					],
					"operation": [
						"Sources Get Sources"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"required": true,
			"description": "Chain ID. See [here](https://docs.0x.org/docs/introduction/supported-chains) for the list of supported chains",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "chainId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sources"
					],
					"operation": [
						"Sources Get Sources"
					]
				}
			}
		},
];
