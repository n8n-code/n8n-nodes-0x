import type { INodeProperties } from 'n8n-workflow';

export const swapDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					]
				}
			},
			"options": [
				{
					"name": "Swap Allowance Holder Get Price",
					"value": "Swap Allowance Holder Get Price",
					"action": "getPrice (Allowance Holder)",
					"description": "Get the indicative price for a swap using Allowance Holder to set allowances",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/swap/allowance-holder/price"
						}
					}
				},
				{
					"name": "Swap Allowance Holder Get Quote",
					"value": "Swap Allowance Holder Get Quote",
					"action": "getQuote (Allowance Holder)",
					"description": "Get the firm quote for a swap using Allowance Holder to set allowances",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/swap/allowance-holder/quote"
						}
					}
				},
				{
					"name": "Swap Permit 2 Get Price",
					"value": "Swap Permit 2 Get Price",
					"action": "getPrice (Permit2)",
					"description": "Get the indicative price for a swap using Permit2 to set allowances",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/swap/permit2/price"
						}
					}
				},
				{
					"name": "Swap Permit 2 Get Quote",
					"value": "Swap Permit 2 Get Quote",
					"action": "getQuote (Permit2)",
					"description": "Get the firm quote for a swap using Permit2 to set allowances",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/swap/permit2/quote"
						}
					}
				},
				{
					"name": "Swap Chains",
					"value": "Swap Chains",
					"action": "getChains",
					"description": "Get list of supported chains for swap",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/swap/chains"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /swap/allowance-holder/price",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
					]
				}
			}
		},
		{
			"displayName": "0 X Api Key",
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
					]
				}
			}
		},
		{
			"displayName": "Sell Token",
			"name": "sellToken",
			"required": true,
			"description": "The contract address of the token to sell",
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
					]
				}
			}
		},
		{
			"displayName": "Sell Amount",
			"name": "sellAmount",
			"description": "The amount of `sellToken` in `sellToken` base units to sell",
			"default": "100000000",
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
					]
				}
			}
		},
		{
			"displayName": "Buy Amount",
			"name": "buyAmount",
			"description": "The exact amount of `buyToken` in `buyToken` base units to buy",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "buyAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
					]
				}
			}
		},
		{
			"displayName": "Tx Origin",
			"name": "txOrigin",
			"description": "The address of the external account that started the transaction. This is only needed if `taker` is a smart contract.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "txOrigin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
					]
				}
			}
		},
		{
			"displayName": "Gas Price",
			"name": "gasPrice",
			"description": "The target gas price (in wei) for the swap transaction. If not provided, the default value is based on the 0x gas price oracle",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "gasPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
					]
				}
			}
		},
		{
			"displayName": "Slippage Bps",
			"name": "slippageBps",
			"description": "The maximum acceptable slippage of the `buyToken` in Bps. If this parameter is set to 0, no slippage will be tolerated. If not provided, the default slippage tolerance is 100Bps",
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
					]
				}
			}
		},
		{
			"displayName": "Excluded Sources",
			"name": "excludedSources",
			"description": "Liquidity sources e.g. Uniswap_V3, SushiSwap, 0x_RFQ to exclude from the provided quote. See https://api.0x.org/sources?chainId=<chain_id> with the desired chain's ID for a full list of sources. Separate multiple sources with a comma",
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
					]
				}
			}
		},
		{
			"displayName": "Sell Entire Balance",
			"name": "sellEntireBalance",
			"description": "If set to `true`, the taker's entire `sellToken` balance will be sold during trade execution. The `sellAmount` should be the maximum estimated value, as close as possible to the actual taker's balance to ensure the best routing. Selling more than the `sellAmount` may cause the trade to revert. This feature is designed for cases where the precise sell amount is determined during execution. Learn more [here](https://docs.0x.org/docs/0x-swap-api/additional-topics/sell-entire-balance).",
			"default": "false",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sellEntireBalance",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
					]
				}
			}
		},
		{
			"displayName": "Wrap Unwrap Mode",
			"name": "wrapUnwrapMode",
			"description": "Controls how native wrap/unwrap trades are executed. `direct` calls the wrapped-native token contract directly. `settler` routes wrap/unwrap through Settler or Allowance Holder for compatibility. Ignored for non-wrap/unwrap swaps. If omitted, `direct` mode is used.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "wrapUnwrapMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Price"
					]
				}
			}
		},
		{
			"displayName": "GET /swap/allowance-holder/quote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
					]
				}
			}
		},
		{
			"displayName": "0 X Api Key",
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Sell Token",
			"name": "sellToken",
			"required": true,
			"description": "The contract address of the token to sell",
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Sell Amount",
			"name": "sellAmount",
			"description": "The amount of `sellToken` in `sellToken` base units to sell",
			"default": "100000000",
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Buy Amount",
			"name": "buyAmount",
			"description": "The exact amount of `buyToken` in `buyToken` base units to buy",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "buyAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Tx Origin",
			"name": "txOrigin",
			"description": "The address of the external account that started the transaction. This is only needed if `taker` is a smart contract.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "txOrigin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Gas Price",
			"name": "gasPrice",
			"description": "The target gas price (in wei) for the swap transaction. If not provided, the default value is based on the 0x gas price oracle",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "gasPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Slippage Bps",
			"name": "slippageBps",
			"description": "The maximum acceptable slippage of the `buyToken` in Bps. If this parameter is set to 0, no slippage will be tolerated. If not provided, the default slippage tolerance is 100Bps",
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Sell Entire Balance",
			"name": "sellEntireBalance",
			"description": "If set to `true`, the taker's entire `sellToken` balance will be sold during trade execution. The `sellAmount` should be the maximum estimated value, as close as possible to the actual taker's balance to ensure the best routing. Selling more than the `sellAmount` may cause the trade to revert. This feature is designed for cases where the precise sell amount is determined during execution. Learn more [here](https://docs.0x.org/docs/0x-swap-api/additional-topics/sell-entire-balance).",
			"default": "false",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sellEntireBalance",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Wrap Unwrap Mode",
			"name": "wrapUnwrapMode",
			"description": "Controls how native wrap/unwrap trades are executed. `direct` calls the wrapped-native token contract directly. `settler` routes wrap/unwrap through Settler or Allowance Holder for compatibility. Ignored for non-wrap/unwrap swaps. If omitted, `direct` mode is used.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "wrapUnwrapMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Allowance Holder Get Quote"
					]
				}
			}
		},
		{
			"displayName": "GET /swap/permit2/price",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
					]
				}
			}
		},
		{
			"displayName": "0 X Api Key",
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
					]
				}
			}
		},
		{
			"displayName": "Sell Token",
			"name": "sellToken",
			"required": true,
			"description": "The contract address of the token to sell",
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
					]
				}
			}
		},
		{
			"displayName": "Sell Amount",
			"name": "sellAmount",
			"description": "The amount of `sellToken` in `sellToken` base units to sell",
			"default": "100000000",
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
					]
				}
			}
		},
		{
			"displayName": "Buy Amount",
			"name": "buyAmount",
			"description": "The exact amount of `buyToken` in `buyToken` base units to buy",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "buyAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
					]
				}
			}
		},
		{
			"displayName": "Tx Origin",
			"name": "txOrigin",
			"description": "The address of the external account that started the transaction. This is only needed if `taker` is a smart contract.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "txOrigin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
					]
				}
			}
		},
		{
			"displayName": "Gas Price",
			"name": "gasPrice",
			"description": "The target gas price (in wei) for the swap transaction. If not provided, the default value is based on the 0x gas price oracle",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "gasPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
					]
				}
			}
		},
		{
			"displayName": "Slippage Bps",
			"name": "slippageBps",
			"description": "The maximum acceptable slippage of the `buyToken` in Bps. If this parameter is set to 0, no slippage will be tolerated. If not provided, the default slippage tolerance is 100Bps",
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
					]
				}
			}
		},
		{
			"displayName": "Excluded Sources",
			"name": "excludedSources",
			"description": "Liquidity sources e.g. Uniswap_V3, SushiSwap, 0x_RFQ to exclude from the provided quote. See https://api.0x.org/sources?chainId=<chain_id> with the desired chain's ID for a full list of sources. Separate multiple sources with a comma",
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
					]
				}
			}
		},
		{
			"displayName": "Sell Entire Balance",
			"name": "sellEntireBalance",
			"description": "If set to `true`, the taker's entire `sellToken` balance will be sold during trade execution. The `sellAmount` should be the maximum estimated value, as close as possible to the actual taker's balance to ensure the best routing. Selling more than the `sellAmount` may cause the trade to revert. This feature is designed for cases where the precise sell amount is determined during execution. Learn more [here](https://docs.0x.org/docs/0x-swap-api/additional-topics/sell-entire-balance).",
			"default": "false",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sellEntireBalance",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
					]
				}
			}
		},
		{
			"displayName": "Wrap Unwrap Mode",
			"name": "wrapUnwrapMode",
			"description": "Controls how native wrap/unwrap trades are executed. `direct` calls the wrapped-native token contract directly. `settler` routes wrap/unwrap through Settler or Allowance Holder for compatibility. Ignored for non-wrap/unwrap swaps. If omitted, `direct` mode is used.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "wrapUnwrapMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Price"
					]
				}
			}
		},
		{
			"displayName": "GET /swap/permit2/quote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
					]
				}
			}
		},
		{
			"displayName": "0 X Api Key",
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Sell Token",
			"name": "sellToken",
			"required": true,
			"description": "The contract address of the token to sell",
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Sell Amount",
			"name": "sellAmount",
			"description": "The amount of `sellToken` in `sellToken` base units to sell",
			"default": "100000000",
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Buy Amount",
			"name": "buyAmount",
			"description": "The exact amount of `buyToken` in `buyToken` base units to buy",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "buyAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Tx Origin",
			"name": "txOrigin",
			"description": "The address of the external account that started the transaction. This is only needed if `taker` is a smart contract.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "txOrigin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Gas Price",
			"name": "gasPrice",
			"description": "The target gas price (in wei) for the swap transaction. If not provided, the default value is based on the 0x gas price oracle",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "gasPrice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Slippage Bps",
			"name": "slippageBps",
			"description": "The maximum acceptable slippage of the `buyToken` in Bps. If this parameter is set to 0, no slippage will be tolerated. If not provided, the default slippage tolerance is 100Bps",
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
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
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Sell Entire Balance",
			"name": "sellEntireBalance",
			"description": "If set to `true`, the taker's entire `sellToken` balance will be sold during trade execution. The `sellAmount` should be the maximum estimated value, as close as possible to the actual taker's balance to ensure the best routing. Selling more than the `sellAmount` may cause the trade to revert. This feature is designed for cases where the precise sell amount is determined during execution. Learn more [here](https://docs.0x.org/docs/0x-swap-api/additional-topics/sell-entire-balance).",
			"default": "false",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sellEntireBalance",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
					]
				}
			}
		},
		{
			"displayName": "Wrap Unwrap Mode",
			"name": "wrapUnwrapMode",
			"description": "Controls how native wrap/unwrap trades are executed. `direct` calls the wrapped-native token contract directly. `settler` routes wrap/unwrap through Settler or Allowance Holder for compatibility. Ignored for non-wrap/unwrap swaps. If omitted, `direct` mode is used.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "wrapUnwrapMode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Permit 2 Get Quote"
					]
				}
			}
		},
		{
			"displayName": "GET /swap/chains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Swap"
					],
					"operation": [
						"Swap Chains"
					]
				}
			}
		},
		{
			"displayName": "0 X Api Key",
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
						"Swap"
					],
					"operation": [
						"Swap Chains"
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
						"Swap"
					],
					"operation": [
						"Swap Chains"
					]
				}
			}
		},
];
