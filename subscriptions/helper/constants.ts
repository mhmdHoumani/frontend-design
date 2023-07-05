const DEV_CONSTANTS = {
	MAIN_WEBSITE_URL: "http://localhost:3000",
	APP_WEBSITE_URL: "http://localhost:3001",
	baseAPIURL: "http://127.0.0.1:5000/samplebrainstorm/us-central1",
	COOKIE_DOMAIN: "",
	// BACKEND_STRAPI_URL: "http://localhost:1337",
	BACKEND_STRAPI_URL: "https://backend.brainstormai.net",
};

const PROD_CONSTANTS = {
	MAIN_WEBSITE_URL: "https://brainstormai.net",
	APP_WEBSITE_URL: "http://app.brainstormai.net",
	baseAPIURL: "https://us-central1-brainstorm-feb81.cloudfunctions.net",
	// COOKIE_DOMAIN: "domain=.brainstormai.net;",
	COOKIE_DOMAIN: ".brainstormai.net;",
	BACKEND_STRAPI_URL: "https://backend.brainstormai.net",
};

const CONSTANTS =
	process.env.NODE_ENV === "production" ? PROD_CONSTANTS : DEV_CONSTANTS;
export default {
	...CONSTANTS,
	COOKIE_TOKEN: "brainstormai_auth_token",
	LOCAL_USER_SUBSCRIBED: "brainstorm_user_subscribed", // used by the extension
	LOCAL_TOKEN: "brainstormai_token",
	REFRESH_TOKEN: "brainstormai_refresh_token",
	SESSION_COOKIE: "brainstormai_session_cookie",
	LINKEDIN_ACCOUNT: "https://www.linkedin.com/company/brainstrm/",
	YOUTUBE_VID_LINK: "https://www.youtube.com/watch?v=TpwEAvuG6wk",
};
