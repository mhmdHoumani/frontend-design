import Axios from "axios";
import constants from "helper/constants";

/* export const getProducts = async () => {
	let res = null;
	try {
		res = await Axios.get(
			`${process.env.NEXT_PUBLIC_WOO_API}?consumer_key=${process.env.NEXT_PUBLIC_CONSUMER_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_CONSUMER_SECRET}`
		);
	} catch (e) {
		console.log(e);
	}
	const data = res !== null && res.data ? res.data.products : [];
	return data;
}; */

export const getSubscriptions = async () => {
  try {
    const result = await Axios.get(`${constants.BACKEND_STRAPI_URL}/api/subscriptions?populate=*`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

// unified function to set cookies for all the site
export const setCookie = (
  name: string,
  value: string,
  // days?: number | null,
  maxAge?: number | null
) => {
  let expires = "";
  const date = new Date();
  date.setTime(maxAge ?? 60 * 60);
  expires = `; expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value || ""}${expires};${constants.COOKIE_DOMAIN}`;
};
