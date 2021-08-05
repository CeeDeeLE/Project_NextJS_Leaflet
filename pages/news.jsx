// Quelle: https://newsapi.org/
import Layout from '@/components/Layout';

export async function getStaticProps() {
  // code, der nur auf dem Server läuft zund im Browser nicht zu sehen ist
  return {
    props: {
      test: 'Hallo vom Server: 😛',
      time: new Date().toLocaleTimeString(),
    },
  };
}

export default function news({ test, time }) {
  return (
    <Layout title="News">
      {test} - es ist {time}
    </Layout>
  );
}
