import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      
      <div className='embed-container'><iframe src='https://www.youtube.com/embed/wK2CtZQ-8TI?amp;autoplay=2' frameBorder='0' allowFullScreen></iframe></div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><b>Hi, I'm WJSN's vitamin Eunseo!</b></p>
        <li>Birth Name: Son Ju Yeon (손주연)</li>
        <li>Position: Lead Rapper, Lead Dancer, Sub Vocalist</li>
        <li>Birthday: May 27, 1998</li>
        <li>Zodiac Sign: Gemini</li>
        <li>Height: 168 cm (5’6″)</li>
        <li>Blood Type: B</li>
        <li>Instagram: <a href="https://www.instagram.com/eeunseo._.v/">eeunseo._.v</a></li>
      </section>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

