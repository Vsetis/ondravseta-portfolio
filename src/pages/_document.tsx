import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        {/* <link rel="shortcut icon" href={favicon} /> */}
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <body className="dark:bg-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
