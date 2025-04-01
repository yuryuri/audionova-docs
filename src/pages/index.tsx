import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import type { JSX } from 'react';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="AudioNova Docs">
      <header className={styles.heroBanner}>
        <div className="container">
          <img
            src="/img/AudioNovaLogo_bgRemoved.png"
            alt="AudioNova Logo"
            style={{ maxWidth: '280px', marginBottom: '1rem' }}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <Link
            className="button button--primary button--lg"
            to="/docs/creating-and-mixing-a-track"
            style={{ marginTop: '1.5rem' }}
          >
            📖 Start Reading Docs
          </Link>
        </div>
      </header>
    </Layout>
  );
}
