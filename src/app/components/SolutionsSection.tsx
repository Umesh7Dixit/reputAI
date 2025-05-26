export default function SolutionsSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white min-h-screen flex items-center"
      style={{ backgroundImage: "url('/thread.jpg')" }}
    >
      <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ultimate suite for your sustainability needs
        </h2>

        <p className="text-sm uppercase font-semibold bg-white/20 inline-block px-4 py-1 rounded-full mt-2 mb-6 tracking-widest">
          TRACING A GREENER PATH
        </p>

        <p className="text-lg md:text-xl max-w-3xl mb-12">
          In the ever-evolving tapestry of supply chain management, staying ahead means embracing the needs of tomorrow. We&apos;re committed to designing the future of supply chain management for you.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "TraceChain",
              points: [
                "Traceability up to the nth tier",
                "Tamper-proof with blockchain technology",
                "Real-time predictive and prescriptive analytics",
              ],
            },
            {
              title: "Zero Carbon",
              points: [
                "Real-time carbon footprint visualizations",
                "Scope 1, Scope 2, and Scope 3 emissions analysis",
                "70K+ custom emission factor database",
              ],
            },
            {
              title: "Circle",
              points: [
                "Vast network of verified and trustworthy recyclers",
                "Efficient online price discovery mechanism",
                "Modular platform with increased agility and flexibility",
              ],
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <ul className="text-sm space-y-2">
                {card.points.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-white hover:text-yellow-400 transition"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
