import { ISeoInfo } from '@interface';
import Head from 'next/head';

interface IProps {
  metaData: ISeoInfo;
}

const MetaTags = ({ metaData: { title, description } }: IProps) => {
  const defaultMetaData = {
    shareImage: ''
  };

  const mainMetaData = {
    ...defaultMetaData,
    title: title,
    description: description
  };

  return (
    <Head>
      {mainMetaData.title && (
        <>
          <title>{mainMetaData.title}</title>
          <meta property="og:title" content={mainMetaData.title} />
          <meta name="twitter:title" content={mainMetaData.title} />
        </>
      )}
      {mainMetaData.description && (
        <>
          <meta name="description" content={mainMetaData.description} />
          <meta property="og:description" content={mainMetaData.description} />
          <meta name="twitter:description" content={mainMetaData.description} />
        </>
      )}
      {mainMetaData.shareImage && (
        <>
          <meta property="og:image" content={mainMetaData.shareImage} />
          <meta name="twitter:image" content={mainMetaData.shareImage} />
          <meta name="image" content={mainMetaData.shareImage} />
        </>
      )}
    </Head>
  );
};

export default MetaTags;
