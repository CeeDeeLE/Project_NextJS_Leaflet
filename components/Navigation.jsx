import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <Link href="/">
        <a>Start</a>
      </Link>
      <Link href="/impressum">
        <a>Impressum</a>
      </Link>
      <a href="https://cimdata.de">Cimdata</a>
    </nav>
  );
}
