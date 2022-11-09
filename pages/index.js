import Head from 'next/head'
import Image from 'next/image'
import Upload from '../components/Upload';

const index = () => {
  return (
    <div className="flex min-h-screen bg-blue-500/10 flex-col items-center justify-center  ">
      <Head>
        <title>CDN Convertor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen items-center justify-center max-w-3xl w-full" >
        <Upload/>
      </div>

    </div>
  )
}

export default index
