import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import Date from "../components/date";

import { getSortedPostData } from "../lib/posts";

export async function getStaticProps() {
  const allPostData = getSortedPostData();
  return {
    props: {
      allPostData,
    },
  };
}

export default function home({ allPostData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className="text-blue-400">Hello, i'm faza. i'm a web developer freelancer. You can Contant me at linkedin</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '} <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingMd}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map(({ id, date, title }) => (
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
  );
}
