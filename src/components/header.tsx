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
            <Link href="/personalDev">個人開発</Link>
          </li>
          <li>
            <Link href="/businessDev">業務実績</Link>
          </li>
          <li>
            <Link href="/certification">保有資格</Link>
          </li>
          <li>
            <Link href="/techStack">技術スタック</Link>
          </li>
          <li>
            <Link href="/contact">お問い合せ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
