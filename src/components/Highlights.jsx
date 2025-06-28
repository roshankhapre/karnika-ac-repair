const Highlights = () => {
  const highlights = [
    { icon: "🧰", text: "15+ Years of Experience" },
    { icon: "🌟", text: "5-Star Rated Services" },
    { icon: "👨‍👩‍👧‍👦", text: "Thousands of Happy Clients" },
    { icon: "🛡", text: "Guaranteed Work – Lifetime Guarantee" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {highlights.map((highlight, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl mb-3">{highlight.icon}</div>
              <p className="font-medium">{highlight.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
