import { Prisma } from '@prisma/client';

declare module '@prisma/client' {
	interface Prisma {
		cacheStrategy?: {
			swr: number;
			ttl: number;
		};
	}
}