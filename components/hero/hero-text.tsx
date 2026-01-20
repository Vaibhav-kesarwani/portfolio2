export default function HeroText() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div
        style={{
          fontFamily: "var(--font-cabinet)",
          fontSize: "200px",
          fontWeight: 900,
        }}
        className="tracking-normal"
      >
        Vaibhav
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "25px",
        }}
        className="uppercase -mt-10 tracking-widest font-normal opacity-40"
      >
        i dessign and build products that
      </div>
      <div
        style={{
          fontFamily: "cursive",
          fontSize: "70px",
        }}
        className="tracking-tighter font-medium"
      >
        deliver real impact.
      </div>
    </section>
  );
}
