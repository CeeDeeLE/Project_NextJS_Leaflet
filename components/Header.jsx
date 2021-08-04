import Navigation from './Navigation';

export default function Header({ title }) {
  return (
    <header className="site-header">
      <div className="inner-width">
        <Navigation />
        <h1>{title}</h1>
      </div>
    </header>
  );
}
