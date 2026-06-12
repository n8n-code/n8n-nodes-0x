import type { INodeProperties } from 'n8n-workflow';

export const gaslessDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					]
				}
			},
			"options": [
				{
					"name": "Gasless Get Price",
					"value": "Gasless Get Price",
					"action": "getPrice",
					"description": "Get the indicative price for a gasless swap",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/gasless/price"
						}
					}
				},
				{
					"name": "Gasless Get Quote",
					"value": "Gasless Get Quote",
					"action": "getQuote",
					"description": "Get the firm quote for a gasless swap",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/gasless/quote"
						}
					}
				},
				{
					"name": "Gasless Submit",
					"value": "Gasless Submit",
					"action": "submit",
					"description": "Submit a gasless swap",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/gasless/submit"
						}
					}
				},
				{
					"name": "Gasless Get Status",
					"value": "Gasless Get Status",
					"action": "getStatus",
					"description": "Get the status of a gasless swap",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/gasless/status/{{$parameter[\"tradeHash\"]}}"
						}
					}
				},
				{
					"name": "Gasless Get Gasless Approval Tokens",
					"value": "Gasless Get Gasless Approval Tokens",
					"action": "getGaslessApprovalTokens",
					"description": "Get token addresses that support gasless approvals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/gasless/gasless-approval-tokens"
						}
					}
				},
				{
					"name": "Gasless Chains",
					"value": "Gasless Chains",
					"action": "getChains",
					"description": "Get list of supported chains for gasless",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/gasless/chains"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /gasless/price",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
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
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
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
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
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
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "Buy Token",
			"name": "buyToken",
			"required": true,
			"description": "The contract address of the token to buy",
			"default": "0xdac17f958d2ee523a2206206994597c13d831ec7",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "buyToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "Sell Token",
			"name": "sellToken",
			"required": true,
			"description": "The contract address of the token to sell. Native token is not supported",
			"default": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sellToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "Sell Amount",
			"name": "sellAmount",
			"required": true,
			"description": "The amount of `sellToken` in `sellToken` base units to sell",
			"default": "300000000",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sellAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "Taker",
			"name": "taker",
			"description": "The address which holds the `sellToken` balance and has the allowance set for the swap",
			"default": "0x70a9f34f9b34c64957b9c401a97bfed35b95049e",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "taker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "Recipient",
			"name": "recipient",
			"description": "The address to receive the `buyToken`. If not provided, defaults to the taker address. Not supported for wrap/unwrap operations.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "recipient",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "Swap Fee Recipient",
			"name": "swapFeeRecipient",
			"description": "The wallet address to receive the specified trading fees (supports single or multiple comma-separated values). You must also specify the `swapFeeBps` in the request to use this feature. When multiple values are provided, must match length of `swapFeeBps`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "swapFeeRecipient",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "Swap Fee Bps",
			"name": "swapFeeBps",
			"description": "The amount in Bps of the `swapFeeToken` to charge and deliver to the `swapFeeRecipient` (supports single or multiple comma-separated values). You must also specify the `swapFeeRecipient` in the request to use this feature. For security, this field has a default limit of 1000 Bps. If your application requires a higher value, please reach out to us.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "swapFeeBps",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "Swap Fee Token",
			"name": "swapFeeToken",
			"description": "The contract address of the token to receive trading fees in (supports single or multiple comma-separated values). Each token must be set to the value of either the `buyToken` or the `sellToken`. If omitted, the fee token will be determined by 0x with preference to stablecoins and highly liquid assets. You must also specify the `swapFeeRecipient` and `swapFeeBps` to charge integrator fees. When multiple values are provided, must match length of `swapFeeBps`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "swapFeeToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "Trade Surplus Recipient",
			"name": "tradeSurplusRecipient",
			"description": "The address to receive any trade surplus. If specified, this address will receive trade surplus when applicable. Otherwise, the taker will receive the surplus. This feature is only available to selected integrators on a custom pricing plan. In other cases, the surplus will be collected by 0x. For assistance with a custom plan, please contact support.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tradeSurplusRecipient",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "Trade Surplus Max Bps",
			"name": "tradeSurplusMaxBps",
			"description": "The maximum trade surplus (positive slippage) that can be collected in Bps of the buy amount. If not provided, defaults to 10000 (100%). Must be used together with `tradeSurplusRecipient`.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "tradeSurplusMaxBps",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "Slippage Bps",
			"name": "slippageBps",
			"description": "The maximum acceptable slippage of the `buyToken` in Bps. 0x sets the optimal slippage tolerance per trade by default. To mitigate the risk of MEV attacks, we recommend adjusting this value only when trading low-liquidity tokens.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "slippageBps",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "Slippage Ppm",
			"name": "slippagePpm",
			"description": "The maximum acceptable slippage of the `buyToken` in parts-per-million (PPM). Mutually exclusive with `slippageBps`. e.g. 3000 PPM = 30 BPS = 0.30%.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "slippagePpm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "Excluded Sources",
			"name": "excludedSources",
			"description": "Liquidity sources e.g. Uniswap_V3, SushiSwap, 0x_RFQ to exclude from the provided quote. `See https://api.0x.org/sources?chainId=<chain_id>` with the desired chain's ID for a full list of sources. Separate multiple sources with a comma",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "excludedSources",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Price"
					]
				}
			}
		},
		{
			"displayName": "GET /gasless/quote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
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
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
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
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
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
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Buy Token",
			"name": "buyToken",
			"required": true,
			"description": "The contract address of the token to buy",
			"default": "0xdac17f958d2ee523a2206206994597c13d831ec7",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "buyToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Sell Token",
			"name": "sellToken",
			"required": true,
			"description": "The contract address of the token to sell. Native token is not supported",
			"default": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sellToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Sell Amount",
			"name": "sellAmount",
			"required": true,
			"description": "The amount of `sellToken` in `sellToken` base units to sell",
			"default": "300000000",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sellAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Taker",
			"name": "taker",
			"required": true,
			"description": "The address which holds the `sellToken` balance and has the allowance set for the swap",
			"default": "0x70a9f34f9b34c64957b9c401a97bfed35b95049e",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "taker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Recipient",
			"name": "recipient",
			"description": "The address to receive the `buyToken`. If not provided, defaults to the taker address. Not supported for wrap/unwrap operations.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "recipient",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Swap Fee Recipient",
			"name": "swapFeeRecipient",
			"description": "The wallet address to receive the specified trading fees (supports single or multiple comma-separated values). You must also specify the `swapFeeBps` in the request to use this feature. When multiple values are provided, must match length of `swapFeeBps`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "swapFeeRecipient",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Swap Fee Bps",
			"name": "swapFeeBps",
			"description": "The amount in Bps of the `swapFeeToken` to charge and deliver to the `swapFeeRecipient` (supports single or multiple comma-separated values). You must also specify the `swapFeeRecipient` in the request to use this feature. For security, this field has a default limit of 1000 Bps. If your application requires a higher value, please reach out to us.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "swapFeeBps",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Swap Fee Token",
			"name": "swapFeeToken",
			"description": "The contract address of the token to receive trading fees in (supports single or multiple comma-separated values). Each token must be set to the value of either the `buyToken` or the `sellToken`. If omitted, the fee token will be determined by 0x with preference to stablecoins and highly liquid assets. You must also specify the `swapFeeRecipient` and `swapFeeBps` to charge integrator fees. When multiple values are provided, must match length of `swapFeeBps`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "swapFeeToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Trade Surplus Recipient",
			"name": "tradeSurplusRecipient",
			"description": "The address to receive any trade surplus. If specified, this address will receive trade surplus when applicable. Otherwise, the taker will receive the surplus. This feature is only available to selected integrators on a custom pricing plan. In other cases, the surplus will be collected by 0x. For assistance with a custom plan, please contact support.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tradeSurplusRecipient",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Trade Surplus Max Bps",
			"name": "tradeSurplusMaxBps",
			"description": "The maximum trade surplus (positive slippage) that can be collected in Bps of the buy amount. If not provided, defaults to 10000 (100%). Must be used together with `tradeSurplusRecipient`.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "tradeSurplusMaxBps",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Slippage Bps",
			"name": "slippageBps",
			"description": "The maximum acceptable slippage of the `buyToken` in Bps. 0x sets the optimal slippage tolerance per trade by default. To mitigate the risk of MEV attacks, we recommend adjusting this value only when trading low-liquidity tokens.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "slippageBps",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Slippage Ppm",
			"name": "slippagePpm",
			"description": "The maximum acceptable slippage of the `buyToken` in parts-per-million (PPM). Mutually exclusive with `slippageBps`. e.g. 3000 PPM = 30 BPS = 0.30%.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "slippagePpm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Excluded Sources",
			"name": "excludedSources",
			"description": "Liquidity sources e.g. Uniswap_V3, SushiSwap, 0x_RFQ to exclude from the provided quote. See `https://api.0x.org/sources?chainId=<chain_id>` with the desired chain's ID for a full list of sources. Separate multiple sources with a comma",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "excludedSources",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Quote"
					]
				}
			}
		},
		{
			"displayName": "POST /gasless/submit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Submit"
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
						"Gasless"
					],
					"operation": [
						"Gasless Submit"
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
						"Gasless"
					],
					"operation": [
						"Gasless Submit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain ID",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"description": "Chain ID. See [here](https://docs.0x.org/docs/introduction/supported-chains) for the list of supported chains",
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Submit"
					]
				}
			}
		},
		{
			"displayName": "Approval",
			"name": "approval",
			"type": "json",
			"default": "{\n  \"eip712\": {\n    \"types\": {\n      \"EIP712Domain\": [\n        {}\n      ],\n      \"Permit\": [\n        {}\n      ]\n    },\n    \"domain\": {},\n    \"message\": {}\n  },\n  \"signature\": {}\n}",
			"description": "The gasless approval object from the quote endpoint including its signature",
			"routing": {
				"send": {
					"property": "approval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Submit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Trade",
			"name": "trade",
			"type": "json",
			"default": "{\n  \"eip712\": {\n    \"domain\": {},\n    \"message\": {\n      \"permitted\": {},\n      \"slippageAndActions\": {\n        \"actions\": [\n          null\n        ]\n      }\n    }\n  },\n  \"signature\": {}\n}",
			"description": "The trade object from the quote endpoint including its signature",
			"routing": {
				"send": {
					"property": "trade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Submit"
					]
				}
			}
		},
		{
			"displayName": "GET /gasless/status/{tradeHash}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Status"
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
						"Gasless"
					],
					"operation": [
						"Gasless Get Status"
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
						"Gasless"
					],
					"operation": [
						"Gasless Get Status"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"required": true,
			"description": " [here](https://docs.0x.org/docs/introduction/supported-chains) for the list of supported chains",
			"default": 8453,
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
						"Gasless"
					],
					"operation": [
						"Gasless Get Status"
					]
				}
			}
		},
		{
			"displayName": "Trade Hash",
			"name": "tradeHash",
			"required": true,
			"description": "The hash for the trade according to [EIP-712](https://eips.ethereum.org/EIPS/eip-712)",
			"default": "0x6c89e4ac46b246ab72cba02a9fb4f3525b9f8a11ea74262d5dd8ff0e024daf60",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Status"
					]
				}
			}
		},
		{
			"displayName": "GET /gasless/gasless-approval-tokens",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Get Gasless Approval Tokens"
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
						"Gasless"
					],
					"operation": [
						"Gasless Get Gasless Approval Tokens"
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
						"Gasless"
					],
					"operation": [
						"Gasless Get Gasless Approval Tokens"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"required": true,
			"description": "Chain ID. See [here](https://docs.0x.org/docs/introduction/supported-chains) for the list of supported chains",
			"default": 8453,
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
						"Gasless"
					],
					"operation": [
						"Gasless Get Gasless Approval Tokens"
					]
				}
			}
		},
		{
			"displayName": "GET /gasless/chains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gasless"
					],
					"operation": [
						"Gasless Chains"
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
						"Gasless"
					],
					"operation": [
						"Gasless Chains"
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
						"Gasless"
					],
					"operation": [
						"Gasless Chains"
					]
				}
			}
		},
];
