import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
//import Imgsscroll from '@site/src/imgsscroll';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            to="/docs/installation">
              <button
                className="button button--secondary button--lg"
                /*style={{backgroundColor: "#ffffff"}}*/>
                Download Now
              </button>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="https://discord.gg/fTtcufxyHQ">
            Join our Discord Server
          </Link>
        </div>
      </div>
    </header>
  );
}

import { Banner } from "@site/src/imgsscroll/Banner";
import "@site/src/imgsscroll/style.css";

const images = [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
].map((image) => ({
  id: crypto.randomUUID(),
  image
}));

/*
function App() {
  return (
    <div className="br">
      <div className="App">
        <Banner images={images} speed={50000} />
      </div>
    </div>
  );
}*/


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      //title={`Home of ${siteConfig.title}`}
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      
      <main>
        <Banner images={images} speed={50000} />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
