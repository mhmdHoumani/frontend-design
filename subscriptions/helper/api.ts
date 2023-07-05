import axios from "axios";
import constants from "../helper/constants";

const api = axios.create({
	baseURL: constants.baseAPIURL,
	headers: {
		Accept: "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Credentials": true,
		"Content-Type": "application/json",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
});

export default api;
