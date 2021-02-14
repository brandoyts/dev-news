import { ArticleInterface } from "../interfaces";
import styles from "../styles/Article.module.scss";

interface ComponentProps {
	info: ArticleInterface;
}

export default function Article({ info }: ComponentProps) {
	return (
		<article className={styles.article}>
			<h4 className={styles.article__title}>{info.title}</h4>
			<p className={styles.article__abstract}>{info.abstract}</p>
			<p className={styles.article__source}>
				{info.source} - {info.published_date}
			</p>

			<a href={info.url} className={styles.article__cta} target="_blank">
				Read More
			</a>
		</article>
	);
}
