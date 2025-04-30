import SvgSlider from "../components/svgslider"; // ここを追加！

export default function Home() {
  return (
    <main>
      <h1>私のポートフォリオ</h1>
      <p>Next.js App Routerで作成中です！</p>
      {/* <!-- News --> */}
      <section>
        <h2>News</h2>
        <dl className="flex">
          <dt>2022/10/29</dt>
          <dd>本サイトをリリース</dd>
          <dt>2022/10/29</dt>
          <dd>プログラミングチュートリアルの運営を開始しました。</dd>
          <dt>2022/10/29</dt>
          <dd>【チャンネル登録】よろしくお願いいたします。</dd>
          <dt>2022/10/29</dt>
          <dd>ShinCodeが鬱病を発症しました。動画投稿が遅れます。</dd>
          <dt>2022/10/29</dt>
          <dd>ShinCodeの鬱病が少し改善しました。再発予防が大事です。</dd>
        </dl>
      </section>
      <SvgSlider />
    </main>
  );
}
