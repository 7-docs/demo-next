import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>KB: react (powered by 7-docs)</title>
      </Head>
      <body className="bg-darker-gray text-off-white max-w-prose text-base mx-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
