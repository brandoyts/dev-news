import { useState } from "react";
import { GetStaticProps } from "next";
import { ArticleInterface } from "../interfaces";
import useLoadOnScroll from "../hooks/useLoadOnScroll";
import Layout from "../components/Layout";
import ArticleList from "../components/ArticleList";
import styles from "../styles/Home.module.scss";
import fetchArticles from "../utils/fetchArticles";
import Loader from "../components/Loader";

interface PageProps {
	articles: ArticleInterface[];
}

export default function index({ articles }: PageProps) {
	const [initArticles, setInitArticles] = useState(articles);
	const { isFetching, setIsFetching } = useLoadOnScroll(loadMore);
	const [offset, setOffset] = useState(11);

	async function loadMore() {
		const res = await fetchArticles(
			`${process.env.NEXT_PUBLIC_API_URL}&offset=${offset}`
		);
		setInitArticles((prev) => [...prev, ...res]);
		setOffset(offset + 11);
		setIsFetching(false);
	}

	return (
		<Layout>
			<div className={styles.home}>
				<h1 className={styles.home__title}>
					Dev<span>Tech</span> News
				</h1>

				<ArticleList articles={initArticles} />

				{isFetching && <Loader />}
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	// get initial articles
	const articles = await fetchArticles(
		`${process.env.NEXT_PUBLIC_API_URL}&offset=0`
	);

	return {
		props: {
			articles,
		},
	};
};
