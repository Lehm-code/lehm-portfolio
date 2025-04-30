import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100">
      <h1 className="text-4xl font-bold">
        <Link href="/">Lehm Portfolio</Link>
      </h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/about">自己紹介</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
