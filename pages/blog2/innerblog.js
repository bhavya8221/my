import React from "react";
import Setup from "../../component/setupblog";
import Head from "next/head";
import { useRouter } from "next/router";

const Blog2 = () => {
  const router = useRouter();
  console.log(router.asPath,"pathname"); 
  return (
    <div>
      <Head>
        <title >
          second क्रिकेट समाचार आज, नवीनतम क्रिकेट अपडेट, फैंटेसी क्रिकेट
        </title>

        <meta
          name="description"
          itemprop="description"
          content=" second....क्रिकेट समाचार आज: नवीनतम क्रिकेट समाचार अपडेट, क्रिकेट शेड्यूल, क्रिकेट आंकड़े, लाइव स्कोर, फंतासी क्रिकेट टिप्स और आईसीसी रैंकिंग प्राप्त करें"
        />
      </Head>
      innerblog2
      
    </div>
  );
};

export default Blog2;
