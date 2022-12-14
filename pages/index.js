import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen w-screen bg-sky-500 font-poiret overflow-x-hidden">
      <Head>
        <title>stakeh◎use</title>
        <meta name="description" content="yum." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-full w-full items-center justify-center">
        <a href="//twitter.com/solstakehouse" target="_blank" rel="noreferrer">
          <div className="border-[1.3em] border-pink-400 pt-1 bg-pink-400 shadow-deep-float rounded mb-6 mx-4 md:mx-0">
            <Image
              objectPosition="center"
              objectFit="stretch"
              src="/images/mini-steak-sol.png"
              height="500"
              width="500"
              alt="steak"
            />
          </div>
        </a>

        <h1 className="text-7xl sm:text-8xl font-bold text-center text-yellow-500 tracking-[1em] -mr-20 sm:-mr-28">
          yum.
        </h1>
      </main>
    </div>
  );
}
