import type { AppProps } from "next/app";
import { globalCss } from "@cabindao/topo";
import Layout from "../components/Layout";

const globalStyles = globalCss({
  "html, body": {
    padding: 0,
    margin: 0,
    fontFamily: "$sans",
    background: "$sand",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "*": {
    boxSizing: "border-box",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
