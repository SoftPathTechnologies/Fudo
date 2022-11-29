import Head from "next/head";

export default function Title(params) {
    return (
      <div>
        <Head>
          <title>FUDO</title>
          <meta
            name="description"
            content="A Single Page Application for e-Commerce Pizza sales"
          />
          <link rel="icon" href="/Logo.png" />
        </Head>
      </div>
    );
};
