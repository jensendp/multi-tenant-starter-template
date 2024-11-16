export function Hero(props: { title: string; subtitle: string }) {
  return (
    <section className="space-y-6 pt-32 lg:pt-24 pb-8">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl">
          {props.title}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {props.subtitle}
        </p>
      </div>
    </section>
  );
}
