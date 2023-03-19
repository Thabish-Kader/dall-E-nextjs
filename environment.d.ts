declare global {
	namespace NodeJS {
		interface ProcessEnv {
			OPENAI_API_KEY: string;
			NEXT_PUBLIC_URL: string;
			NEXTAUTH_SECRET: string;
			GOOGLE_CLIENT_ID: string;
			GOOGLE_CLIENT_SECRET: string;
		}
	}
}
export {};
