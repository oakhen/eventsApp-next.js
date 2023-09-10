import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* ye head document ka head hai  */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

/* apna application component ke outside agar kuch html humko add
krna hai. toh hm yaha se kr sakte hai*/
/*  */
/* av tak hum head and html ko hi edit kiye hai. may be yaha se hum control kar sakte hai ki html overall kaise generate hoga */
/* what is _document.js in next.js explain in detail */
/* document.js is a special file in next.js that is used to customize the html that is generated for each page.
 */

/* may be pehle ye ek class based  */
