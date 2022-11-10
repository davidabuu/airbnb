import Head from "next/head";
const UserWebLayout = ({ webtitle, children }) => {
  return (
    <>
      <Head>
        <title>{webtitle} | BNB</title>
      </Head>
      {children}
    </>
  );
};

export default UserWebLayout;