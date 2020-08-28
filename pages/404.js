import React from 'react';
import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';

export default function Custom404() {
  return (
    <>
      <header id="header" className="header" />

      <div className="error-page">
        <h1>
          <span>404 not found</span>
        </h1>
        <section className="hero">
          <p>
            <span>The page </span>
            <span>you're looking for </span>
            <span>doesn't exists...</span>
          </p>
        </section>
        <nav>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </nav>
      </div>
      <SiteFooter />
    </>
  );
}
