export const environment = {
	name: import.meta.env.VITE_ENV_NAME,
	launchURL: import.meta.env.VITE_BASE_URL,

	apiUrls: {
		IN_MEMORY: import.meta.VITE_API_IN_MEMORY,
		GITHUB: import.meta.VITE_API_GITHUB
	},
	realmConfig: {
		APP_ID: import.meta.env.VITE_REALM_APP_ID,
		MONGO_URI: import.meta.env.VITE_MONGO_URI,
		API_URL: import.meta.env.VITE_API_URL,
		API_KEY: import.meta.VITE_REALM_API_KEY
	},

	twitterConfig: {
		TWITTER_API_KEY: import.meta.env.VITE_TWITTER_API_KEY,
		TWITTER_TWEETS_ENDPOINT: import.meta.env.VITE_TWITTER_TWEETS_ENDPOINT,
		TWITTER_SEARCH_URL: import.meta.env.VITE_TWITTER_SEARCH_URL
	},
	gitHubConfig: {
		GITHUB_API_URL: import.meta.env.VITE_GITHUB_API_URL
	}
};
