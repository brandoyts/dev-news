import styles from "../styles/ArticleList.module.scss";
import Article from "./Article";
import { ArticleInterface } from "../interfaces";

interface ComponentProps {
	articles: ArticleInterface[];
}

export default function ArticleList({ articles }: ComponentProps) {
	const renderArticles = () => {
		return articles.map((article) => (
			<Article key={article.title} info={article} />
		));
	};

	return <div className={styles.ariticleList}>{renderArticles()}</div>;
}
