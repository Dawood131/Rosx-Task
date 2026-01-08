import bg from "../../public/backgorund img.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-[70vh] bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content */}
      <div className="h-200">
      </div>
    </section>
  );
}
