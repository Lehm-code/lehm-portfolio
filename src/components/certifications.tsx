import Image from "next/image";
import Link from "next/link";

const certifications = [
  {
    tech: "国家資格",
    logo: "/svg_logo/license.svg",
    projects: [
      {
        label: "ITパスポート",
        url: "https://www.ipa.go.jp/shiken/kubun/ip.html",
      },
      {
        label: "基本情報技術者",
        url: "https://www.ipa.go.jp/shiken/kubun/fe.html",
      },
    ],
  },
  {
    tech: "Python",
    logo: "/svg_logo/python.svg",
    projects: [
      {
        label: "Python3 エンジニア認定基礎試験",
        url: "https://www.pythonic-exam.com/exam/basic",
      },
      {
        label: "Python3 エンジニア認定実践試験",
        url: "https://www.pythonic-exam.com/exam/jissen",
      },
      {
        label: "Python3 エンジニア認定データ分析試験",
        url: "https://www.pythonic-exam.com/exam/analyist",
      },
      {
        label: "Python3 エンジニア認定データ分析実践試験",
        url: "https://www.pythonic-exam.com/exam/cpda",
      },
    ],
  },
  {
    tech: "AWS",
    logo: "/svg_logo/aws.svg",
    projects: [
      {
        label: "AWS 認定クラウドプラクティショナー",
        url: "https://aws.amazon.com/jp/certification/certified-cloud-practitioner/?ch=sec&sec=rmg&d=1",
      },
      {
        label: "AWS 認定AIプラクティショナー",
        url: "https://aws.amazon.com/jp/certification/certified-ai-practitioner/?ch=sec&sec=rmg&d=1",
      },
    ],
  },
  {
    tech: "GCP",
    logo: "/svg_logo/google-cloud.svg",
    projects: [
      {
        label: "Cloud Digital Leader",
        url: "https://cloud.google.com/learn/certification/cloud-digital-leader?hl=ja",
      },
    ],
  },
];

const CertificationsList = () => {
  return (
    <div className="flex justify-center">
      <div className="px-4 text-center max-w-4xl w-full">
        <h2 className="text-2xl mb-6 font-semibold">保有資格</h2>

        {/* テーブルヘッダー */}
        <div className="grid grid-cols-[200px_1fr] bg-gray-100 font-semibold text-gray-700 rounded-t-lg py-3 border-b">
          <div>資格</div>
          <div>概要</div>
        </div>

        {/* 各項目 */}
        {certifications.map(({ tech, logo, projects }) => (
          <div
            key={tech}
            className="grid grid-cols-[200px_1fr] gap-4 items-center border-b py-4"
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
    </div>
  );
};

export default CertificationsList;
