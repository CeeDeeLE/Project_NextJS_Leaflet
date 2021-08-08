import NewsItem from './BadItem';

export default function BadList({ baederWeb, title = '' }) {
  return (
    <section className="news-list">
      {title && <h2 className="news-list__title">{title}</h2>}
      {baederWeb.map((feature) => (
        // <NewsItem key={item.url} {...item} />
        <NewsItem key={feature.properties.id} {...feature} />
      ))}
    </section>
  );
}
