import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
state = {};
render() {
return (
<Html>
<Head>
<title>My App</title>
<link
href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/simplex/bootstrap.min.css"
rel="stylesheet"
/>
</Head>
<body>
<Main />
<NextScript />
</body>
</Html>
);
}
}

export default MyDocument;