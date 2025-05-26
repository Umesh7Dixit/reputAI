export default function TextileChallenges() {
  const stats = [
    {
      value: '90%',
      description: 'Garments ending up in landfills',
    },
    {
      value: '20%',
      description: 'Textiles contribution to global waste water',
    },
    {
      value: '50%',
      description: 'Textile industry emissions increase by 2030',
    },
  ];

  return (
    <div className="bg-white py-12 px-4">
      <div className="bg-[#0f9ed2] rounded-2xl max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-10">
          Textile Industry Challenges
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 text-center px-4 relative"
            >
              <p className="text-white text-3xl font-extrabold mb-2">{item.value}</p>
              <p className="text-white text-sm md:text-base leading-relaxed">
                {item.description}
              </p>

              {/* Divider */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 w-px bg-yellow-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
