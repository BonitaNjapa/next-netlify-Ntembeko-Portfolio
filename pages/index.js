import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hi there I am happy you came to visit me!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi there I am happy you came to visit me!" />
        <p className="description">
          Sorry but I am still under construction, please do come visit me again
          soon :)
        </p>
      </main>

      <Footer />
    </div>
  );
}
