import Head from 'next/head';
import Header from '../src/components/Header';
import Dashboard from '../src/components/Dashboard';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Your App</title>
        <meta name="description" content="Your app description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Dashboard />
    </div>
  );
};

export default Home;
