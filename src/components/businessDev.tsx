import Image from "next/image";
import Link from "next/link";

const devData = [
  {
    tech: "Python",
    logo: "/svg_logo/python.svg",
    libs: [
      { label: "Selenium", url: "https://www.selenium.dev/" },
      {
        label: "Beautiful Soup",
        url: "https://www.crummy.com/software/BeautifulSoup/",
      },
    ],
    projects: [
      {
        label: "求人サイトスクレイピング",
        url: "/businessDev/Python/recruitScraping",
      },
    ],
  },
];

const BusinessDev = () => {
  return (
    <div className="px-4 text-center max-w-4xl mx-auto">
      <h2 className="text-2xl mb-6 font-semibold">業務実績</h2>

      {/* テーブルヘッダー */}
      <div className="grid grid-cols-[200px_1fr_1fr] bg-gray-100 font-semibold text-gray-700 rounded-t-lg py-3 border-b">
        <div>言語 & フレームワーク</div>
        <div>ライブラリ</div>
        <div>概要</div>
      </div>

      {/* 各項目 */}
      {devData.map(({ tech, logo, libs, projects }) => (
        <div
          key={tech}
          className="grid grid-cols-[200px_1fr_1fr] gap-4 items-center border-b py-4"
        >
          <div className="flex flex-col items-center justify-center">
            <Image
              src={logo}
              alt={`技術ロゴ ${tech}`}
              width={80}
              height={80}
              className="object-contain mb-2"
            />
            <p className="text-sm font-medium">{tech}</p>
          </div>
          <ul className="space-y-1 items-center">
            {libs.map(({ label, url }, index) => (
              <li key={index}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-1 items-center">
            {projects.map(({ label, url }, index) => (
              <li key={index}>
                <Link
                  href={url}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BusinessDev;
