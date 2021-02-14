import Head from "next/head";

type componentProps = {
	title?: string;
	children: JSX.Element;
};

export default function Layout({ title, children }: componentProps) {
	return (
		<>
			<Head>
				<title>{title ? title : "DevNews | Tech"}</title>
			</Head>

			<main className="appContainer">{children}</main>
		</>
	);
}
