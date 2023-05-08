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
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pcmag.com%2Fhow-to%2Fhidden-facebook-features-only-power-users-know&psig=AOvVaw1cxIi4baKY_W7ntrJ8Vl7b&ust=1683619079501000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKD4zPmf5f4CFQAAAAAdAAAAABAI"
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
            content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pcmag.com%2Fhow-to%2Fhidden-facebook-features-only-power-users-know&psig=AOvVaw1cxIi4baKY_W7ntrJ8Vl7b&ust=1683619079501000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKD4zPmf5f4CFQAAAAAdAAAAABAI"
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
