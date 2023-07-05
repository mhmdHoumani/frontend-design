import Axios from "axios";
import constants from "helper/constants";

export const getHomePage = async () => {
	try {
		const result = await Axios.get(
			`${constants.BACKEND_STRAPI_URL}/api/home?populate[Hero][populate]=*&populate[HowItWorks][populate]=*&populate[HowItWorksRightList][populate]=*&populate[Experience][populate]=*&populate[UseCases][populate]=*`
		);
		return result.data;
	} catch (e) {
		console.log(e);
	}
};

export const getHighlightedPage = async () => {
	try {
		const result = await Axios.get(
			`${constants.BACKEND_STRAPI_URL}/api/highlight?populate[Hero][populate]=*&populate[Banner][populate]=*&populate[HighlightedUseCases][populate]=*`
		);
		return result.data;
	} catch (e) {
		console.log(e);
	}
};

export const getAboutPage = async () => {
	try {
		const result = await Axios.get(
			`${constants.BACKEND_STRAPI_URL}/api/about?populate[Hero][populate]=*&populate[Banner][populate]=*&populate[Content][populate]=*`
		);
		return result.data;
	} catch (e) {
		console.log(e);
	}
};

export const getHowItWorksPage = async () => {
	try {
		const result = await Axios.get(
			`${constants.BACKEND_STRAPI_URL}/api/how-it-works?populate[Hero][populate]=*&populate[WorksList][populate]=*&populate[Commands][populate]=*&populate[Feature][populate]=*&populate[FeatureList][populate]=*&populate[Banner][populate]=*`
		);
		return result.data;
	} catch (e) {
		console.log(e);
	}
};

export const getBlogPage = async () => {
	try {
		/* const result = await Axios.get(
			`${constants.BACKEND_STRAPI_URL}/api/blog?populate[Blog][populate]=*`
		); 
		return result.data;*/
		return {};
	} catch (e) {
		console.log(e);
	}
};

export const getFAQ = async () => {
	try {
		const result = await Axios.get(
			`${constants.BACKEND_STRAPI_URL}/api/faq?populate[Questions][populate]=*`
		);
		return result.data;
	} catch (e) {
		console.log(e);
	}
};

export const getUseCases = async () => {
	try {
		const result = await Axios.get(
			`${constants.BACKEND_STRAPI_URL}/api/use-case?populate[Hero][populate]=*&populate[UseCases][populate]=*`
		);
		return result.data;
	} catch (e) {
		console.log(e);
	}
};
