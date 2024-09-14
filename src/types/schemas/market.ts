import { z } from 'zod';

export const marketSchema = z.object({
	isInOperating: z.boolean(),
	closestArea: z.nullable(z.string()),
	appSettings: z.object({
		version: z.object({
			iosMinVersion: z.number(),
			androidMinVersion: z.number(),
		}),
		customerServicePhone: z.string(),
		imageServer: z.string(),
		currency: z.object({
			currencyId: z.number(),
			name: z.string(),
			symbol: z.string(),
		}),
		appUpdateSettings: z.object({
			forceUpdateSettings: z.object({
				messageTitle: z.string(),
				messageBody: z.string(),
				androidVersion: z.number(),
				iosVersion: z.number(),
			}),
			regularUpdateSettings: z.object({
				messageTitle: z.string(),
				messageBody: z.string(),
				androidVersion: z.number(),
				iosVersion: z.number(),
			}),
		})

	})
})