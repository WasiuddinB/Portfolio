import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Head from "next/head";
export default function Home() {
  return (
   <div>
    <Head>
      <title>PORTFOLIO | ReactJS - TS</title>
    </Head>
    <Navbar />
    <Main />
   </div>
  );
}
