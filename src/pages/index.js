import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import UltimateFeatures from 'sections/ultimate-feature';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Auto Recover-  Recover your stolen cars"
          description="Car recovery system using the web3"
        />
        <Banner />
        <Services />
        <UltimateFeatures />
        <Faq />
{/**
 *      <PremiumFeature />
        <CustomerSupport />
        <Pricing />
        <Testimonials />
        <Blog />
        <Support />
   */}
      </Layout>
    </ThemeProvider>
  );
}
