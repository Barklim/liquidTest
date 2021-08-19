import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />

        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.onload = function() {
              var resource = document.createElement('script');
              resource.async = 1;
              resource["data-cfasync"] = "false";
              resource.src = "https://client.crisp.chat/l.js";
              var script = document.getElementsByTagName('script')[0];
              script.parentNode.insertBefore(resource, script);
            }
          `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
