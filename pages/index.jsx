import Layout from '../components/Layout';

export default function Home() {
  return (
    /* Hier die Layout-Komponente einsetzen und ihr den
    Inhalt der Seite als Kindelement übergeben. Dazu den title-Prop.  */
    <Layout title="Start">
      <p>Websites mit NextJS</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis
        similique iste, voluptatum maxime dolor pariatur quasi mollitia veniam
        atque! Sequi error esse, maiores ad quo suscipit. Similique laboriosam
        provident fugit sapiente sit, eveniet nesciunt modi non fuga. Quod
        adipisci distinctio reiciendis dolores a pariatur earum mollitia, harum
        facere delectus.
      </p>
    </Layout>
  );
}
