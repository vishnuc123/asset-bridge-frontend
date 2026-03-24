import React from "react";
import InvestorNavbar from "../../components/navbars/InvestorNavbar";

const Investor_landing_page:React.FC = () => {
  return (
    <div className="w-full">

<InvestorNavbar isAuthenticated={false} />
      {/* 🔹 HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 py-16 max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fund Properties,
            <br />
            Share Revenue,
            <br />
            Built on Trust
          </h1>

          <button className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">
            Start Investing
          </button>
        </div>

        <div className="flex justify-center">
          <div className="w-72 h-72 bg-card border border-border rounded-xl shadow-md flex items-center justify-center">
            <span className="text-muted-foreground">3D Building</span>
          </div>
        </div>
      </section>

      {/* 🔹 REPUTATION */}
      <section className="text-center py-12">
        <h2 className="text-xl font-semibold mb-8">Our Reputation</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {["Best Services", "Best Teams", "Best Designs", "Best Support"].map(
            (item, i) => (
              <div key={i} className="p-6 border border-border rounded-lg">
                <p className="font-semibold">{item}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Trusted and reliable solutions
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* 🔹 ABOUT SECTION */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 py-16 max-w-7xl mx-auto">
        <div className="w-full h-80 bg-card border border-border rounded-xl"></div>

        <div className="bg-primary text-primary-foreground p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-sm">
            We help investors fund real-world properties and earn returns with
            full transparency and trust.
          </p>

          <button className="mt-4 bg-black text-white px-4 py-2 rounded-md">
            Learn More
          </button>
        </div>
      </section>

      {/* 🔹 SERVICES */}
      <section className="py-16 text-center">
        <h2 className="text-xl font-semibold mb-10">Services</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            "Property Funding",
            "Revenue Sharing",
            "Secure Investment",
            "Easy Access",
            "Verified Deals",
            "Smart Tracking",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 STATS */}
      <section className="grid md:grid-cols-4 text-center py-12 bg-card">
        {[
          { num: "123", label: "Projects" },
          { num: "84", label: "Clients" },
          { num: "30", label: "Years Experience" },
          { num: "37", label: "Awards" },
        ].map((item, i) => (
          <div key={i}>
            <h3 className="text-2xl font-bold">{item.num}</h3>
            <p className="text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </section>

      {/* 🔹 PROPERTIES */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-10">Properties</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="border border-border rounded-lg overflow-hidden"
            >
              <div className="h-40 bg-muted-foreground/20"></div>

              <div className="p-4">
                <h3 className="font-semibold">Luxury Apartment</h3>
                <p className="text-sm text-muted-foreground">
                  High return property investment
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 CTA */}
      <section className="bg-primary text-primary-foreground text-center py-16">
        <h2 className="text-2xl font-bold mb-4">
          What can we do for you?
        </h2>

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Contact Us
        </button>
      </section>

      {/* 🔹 FOOTER */}
      <footer className="py-8 text-center text-sm text-muted-foreground">
        © 2026 Asset Bridge. All rights reserved.
      </footer>
    </div>
  );
};

export default Investor_landing_page;