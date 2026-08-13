export function CookiesClient() {
  return (
    <div>
      <header className="site-wrap pt-14 pb-10 lg:pt-20">
        <p className="site-kicker">Legal</p>
        <h1 className="site-display mt-4">Cookie policy</h1>
        <p className="site-lead mt-5">
          How we use cookies and similar technologies when you visit this website.
        </p>
      </header>
      <section className="site-wrap max-w-3xl space-y-8 pb-20 text-sm leading-relaxed text-[var(--text-muted)]">
        <div>
          <h2 className="text-lg font-semibold text-[var(--text)]">What cookies are</h2>
          <p className="mt-2">
            Cookies are small files stored on your device. Sites use them to work correctly, remember preferences, and
            understand traffic.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[var(--text)]">Why we use them</h2>
          <p className="mt-2">
            Some cookies are required for the site to function. Others help us see which pages are useful. We do not
            use cookies to sell your data.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[var(--text)]">Types we use</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Essential — sign-in, security, and theme preference</li>
            <li>Analytics — anonymous page views so we can improve the site</li>
            <li>Functional — remembered settings such as light or dark mode</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[var(--text)]">How to control them</h2>
          <p className="mt-2">
            You can block or delete cookies in your browser. Essential cookies may be required for sign-in and the
            theme toggle to work.
          </p>
        </div>
      </section>
    </div>
  );
}
