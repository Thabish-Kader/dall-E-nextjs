declare global {
	namespace NodeJS {
		interface ProcessEnv {
			OPENAI_API_KEY: string;
			NEXT_PUBLIC_URL: string;
		}
	}
}
export {};
