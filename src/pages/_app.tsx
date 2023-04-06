import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { DefaultSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Ondřej Všetička"
        description="Jmenuji se Ondřej Všetička, jsem front-end developer a designér webových stránek. Váš web proměním v moderní a přehlednou vizitku Vaši společnosti nebo osoby."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.ondrejvseticka.cz/",
          siteName: "Ondřej Všetička",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <ThemeProvider attribute="class" enableSystem={false}>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
