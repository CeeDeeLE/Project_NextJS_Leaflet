import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
// import { useRouter } from 'next/dist/client/router';

// slug ist dynamischer Platzhalter
const apiPath = 'https://react.webworker.berlin/wp-json/wp/v2/';

// Abholen der Blogdaten vom Server erfolgt in Vorbereitung des nächsten Schrittes
/* 
Wenn man einen dynamischen Pfad hat, muss man Next mitteilen,
welche Pfade das System statisch generieren soll, hier also
eine Liste der vorhanden Blog-Slugs übergeben. 
*/
export async function getStaticPaths() {
  // da es nicht genutzt wurde, muss es fürs Compilieren auskommentiert werden
  // let paths = [];

  try {
    // da es nicht genutzt wurde, muss es fürs Compilieren auskommentiert werden
    // const response = await fetch(`${apiPath}posts`);
    //
    // da es nicht genutzt wurde, muss es fürs Compilieren auskommentiert werden
    // const posts = await response.json();
    //
    /*	
    Die Einträge im paths-Array müssen den params entsprechen,
  	die getStaticProps erhält. 
    Bild-Daten sind in einer Unterseite enthalten -> media + id -> und müssen in einer extra function ausgelesen werden
      */
    // da es nicht genutzt wurde, muss es fürs Compilieren auskommentiert werden
    // paths = posts.map(({ slug }) => ({ params: { slug } }));
  } catch (e) {
    console.log(e);
  }

  /* 
  fallback legt fest, dass ein neuer und noch nicht in paths
  enthaltene Slug frisch von WordPress geholt werden soll.
  Wenn man für paths einen leeren Array zurückgibt, werden
  also alle Blogbeiträge erst statisch generiert, wenn sie
  zum ersten Mal angefordert werden. Man könnte in paths
  auch nur z.B. die 20 neuesten Blogbeiträge übergeben. 
  */

  return { paths: [], fallback: true };
}

// aus getStaticPaths werden params an getStaticProps übergeben
// id des Blogs ist nicht bekannt, stattdessen der slug (mit Kopplung und klein geschriebener Titel)
export async function getStaticProps({ params }) {
  console.log(params);

  // für Abfragen
  let post = {};

  try {
    const response = await fetch(`${apiPath}posts?slug=${params.slug}`);

    const postsArray = await response.json();
    post = postsArray[0];

    // prüfen, ob in featured media (Bildeintrag) eine id eingetragen ist
    // die Bild-Daten benötigen eine zweite Anfrage
    if (post.featured_media) {
      post.titleImage = await getTitleImage(post.featured_media);
    }
  } catch (error) {
    console.log('Problem bei Blog-Daten-Abfrage aufgetreten.');
  }
  return {
    props: { post },
    revalidate: 3600,
  };
}

async function getTitleImage(imageId) {
  try {
    const response = await fetch(`${apiPath}media/${imageId}`);
    const imageData = await response.json();

    return {
      src: imageData.guid.rendered,
      width: imageData.media_details.width,
      height: imageData.media_details.height,
      alt: imageData.alt_text,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default function BlogPost({ post }) {
  // https://nextjs.org/docs/basic-features/data-fetching#fallback-pages
  // wenn eine url aufgerufen wird, die noch nicht bekannt ist, dann Laden... anzeigen
  const router = useRouter();
  if (router.isFallback) {
    return <strong>Laden...</strong>;
  }

  const { title, content, titleImage } = post;
  return (
    <Layout title={title.rendered}>
      {titleImage && (
        <Image
          {...titleImage}
          layout="responsive"
          sizes="(max-width: 50rem) 100vw, 50rem"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      <Link href="../blog">zurück</Link>
    </Layout>
  );
}
