import Navigation from './Navigation';
import Head from 'next/head';

const Container = (props) => {
  return (
    <>
      <Head>
        <title>{props.title ?? 'NextJS'}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/flatly/bootstrap.min.css"/>
      </Head>
      <Navigation className="navbar navbar-dark bg-dark"/>
      <div className="container p-4">
        {props.children}
      </div>
    </>
  );
};

export default Container;