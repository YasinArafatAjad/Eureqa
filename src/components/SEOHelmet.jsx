import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHelmet = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  author = 'Eureqa',
  siteName = 'Eureqa - অনলাইন কোর্স প্ল্যাটফর্ম'
}) => {
  const defaultTitle = 'Eureqa - বাংলাদেশের সেরা অনলাইন কোর্স প্ল্যাটফর্ম';
  const defaultDescription = 'বিশেষজ্ঞ প্রশিক্ষকদের কাছ থেকে শিখুন। ওয়েব ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং, গ্রাফিক্স ডিজাইন এবং আরও অনেক কোর্স।';
  const defaultKeywords = 'অনলাইন কোর্স, শিক্ষা, প্রশিক্ষণ, স্কিল ডেভেলপমেন্ট, ওয়েব ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং, গ্রাফিক্স ডিজাইন, প্রোগ্রামিং, বাংলাদেশ';
  const defaultImage = 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1200';
  const baseUrl = 'https://eureqa.com';

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Bengali" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:alt" content={title || 'Eureqa Online Course Platform'} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="bn_BD" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:image:alt" content={title || 'Eureqa Online Course Platform'} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#16a34a" />
      <meta name="msapplication-TileColor" content="#16a34a" />
      <meta name="application-name" content="Eureqa" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Eureqa",
          "description": description || defaultDescription,
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "sameAs": [
            "https://facebook.com/eureqa",
            "https://twitter.com/eureqa",
            "https://linkedin.com/company/eureqa"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BD",
            "addressLocality": "Dhaka"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;