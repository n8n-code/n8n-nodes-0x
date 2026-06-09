import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { swapDescription } from './resources/swap';
import { gaslessDescription } from './resources/gasless';
import { sourcesDescription } from './resources/sources';
import { tradeAnalyticsDescription } from './resources/trade-analytics';

export class N0x implements INodeType {
	description: INodeTypeDescription = {
		displayName: '0x',
		name: 'N8nDevN0x',
		icon: { light: 'file:./0x.png', dark: 'file:./0x.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: '0x DEX aggregator unifies liquidity, token swaps, pricing, and onchain trading across EVM, Solana, and cross-chain.',
		defaults: { name: '0x' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevN0xApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Swap",
					"value": "Swap",
					"description": "Swap API endpoints"
				},
				{
					"name": "Gasless",
					"value": "Gasless",
					"description": "Gasless API endpoints"
				},
				{
					"name": "Sources",
					"value": "Sources",
					"description": "Sources API endpoints"
				},
				{
					"name": "Trade Analytics",
					"value": "Trade Analytics",
					"description": "Trade Analytics API endpoints"
				}
			],
			"default": ""
		},
		...swapDescription,
		...gaslessDescription,
		...sourcesDescription,
		...tradeAnalyticsDescription
		],
	};
}
