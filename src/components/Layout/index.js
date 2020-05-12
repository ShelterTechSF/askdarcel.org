import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import favicon from '../../images/favicon.ico';
import '../../stylesheets/app.scss';

export default (props) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    // eslint-disable-next-line react/jsx-props-no-spreading
    render={(data) => <Layout data={data} {...props} />}
  />
);


const Layout = (props) => {
  // Define the meta title and description
  const { data } = props;
  const { title } = data.site.siteMetadata;
  const { description } = data.site.siteMetadata;
  const { children } = props;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>

        <title>{ title }</title>
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className="app">
        <Header />
        { children }
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
};
