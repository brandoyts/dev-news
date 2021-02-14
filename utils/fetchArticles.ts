import axios from "axios";
import { ArticleInterface } from "../interfaces";

export default async function fetchArticles(URL: string) {
	const res = await axios.get(URL);

	const {
		data: { results },
	} = res;

	const articles = results.map((result: ArticleInterface) => ({
		title: result.title,
		abstract: result.abstract,
		url: result.url,
		source: result.source,
		published_date: result.published_date,
		multimedia: result.multimedia,
	}));

	return articles;
}
