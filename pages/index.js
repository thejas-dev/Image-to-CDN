import Head from 'next/head'
import Image from 'next/image'
import Upload from '../components/Upload'

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
      <div className="mt-10 mb-5">
        <p className="text-sm text-gray-600 font-semibold">Made with ❤️ by <a href="https://www.instagram.com/nuthejashari/" className="text-sky-500" >Thejas hari</a></p>
      </div>
    </div>
  )
}

export default index
