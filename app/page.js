"use client";
import Head from "next/head";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hedi Fourati Portfolio</title>
        <meta name="description" content="Portfolio of Hedi Fourati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <br />
        <br />
        <section id="about">
          <About />
        </section>
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
