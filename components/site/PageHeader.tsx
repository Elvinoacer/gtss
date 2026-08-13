export function PageHeader({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="site-wrap pt-14 pb-10 lg:pt-20 lg:pb-14">
      <p className="site-kicker">{kicker}</p>
      <h1 className="site-display mt-4 max-w-3xl">{title}</h1>
      {description ? <p className="site-lead mt-5">{description}</p> : null}
    </header>
  );
}
