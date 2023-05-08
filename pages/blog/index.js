import Head from "next/head";
import Link from "next/link";
import React from "react";

const index = () => {
  const facebookhandleClick = () => {
    const postUrl = encodeURIComponent("www.dummy.com");
    const postTitle = encodeURIComponent("hellooo");
    const postDescription = encodeURIComponent(
      "hello check with share facebbok"
    );
    const postImage = encodeURIComponent(
      "https://dummyimage.com/600x400/000/fff"
    );

    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}&title=${postTitle}&description=${postDescription}&picture=${postImage}`;

    window.open(shareUrl, "pop", "width=600, height=400, scrollbars=no");
  };
  return (
    <div>
      Blog
      <Link href="blog2/innerblog">
        <Head>
          <title>
            first क्रिकेट समाचार आज, नवीनतम क्रिकेट अपडेट, फैंटेसी क्रिकेट
          </title>

          <meta
            name="description"
            itemprop="description"
            content=" first....क्रिकेट समाचार आज: नवीनतम क्रिकेट समाचार अपडेट, क्रिकेट शेड्यूल, क्रिकेट आंकड़े, लाइव स्कोर, फंतासी क्रिकेट टिप्स और आईसीसी रैंकिंग प्राप्त करें"
          />
          <title>hellooo</title>
          <meta name="description" content="hello check with share facebbok" />

          <meta property="og:title" content="hellooo" />
          <meta
            property="og:description"
            content="hello check with share facebbok"
          />
          <meta
            property="og:image"
            content="https://dummyimage.com/600x400/000/fff"
          />
          <meta property="og:url" content="www.dummy.com" />
        </Head>

        <h1>check facebook share</h1>
        <button onClick={facebookhandleClick}>share withfacebook</button>
      </Link>
    </div>
  );
};

export default index;
