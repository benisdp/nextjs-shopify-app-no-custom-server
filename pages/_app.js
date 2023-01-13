import { useRouter } from "next/router";
import EmbeddedApp from "@components/EmbeddedApp";
import "../styles/globals.css";

import "@shopify/polaris/build/esm/styles.css";
import { Suspense } from "react";
import Loading from "@components/loading";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isEmbedded = pathname.startsWith("/embedded");
  console.log("od");

  return (
    <>
      {isEmbedded ? (
        <EmbeddedApp>
          <Component {...pageProps} />
        </EmbeddedApp>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
