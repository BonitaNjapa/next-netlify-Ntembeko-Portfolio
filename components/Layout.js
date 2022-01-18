import Head from "next/head";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <Head>
          <title>Hi there I am happy you came to visit me!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
