import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Arwa Ali'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
        <meta
          name="image"
          property="og:image"
          content="https://live.staticflickr.com/65535/51699220486_25ea4cc467_c.jpg"
        />
      </Helmet>
      <App />
    </>
  );
};
