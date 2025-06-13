import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Fuente Space Grotesk con pesos 300 y 700 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap"
          rel="stylesheet"
        />
        {/* Meta adicionales si lo deseas */}
        <meta charSet="utf-8" />
        <meta name="description" content="Portafolio de SebRVV" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
