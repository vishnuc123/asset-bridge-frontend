import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/navbars/userNavbar";
import { Roles } from "../../constants/Roles";
import OwnerNavbar from "../../components/navbars/OwnerNavbar";

export default function OwnerLandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">

      {/* Navbar */}
      <OwnerNavbar  isAuthenticated={false} />

      {/* Hero Section */}
      <div className="px-4 md:px-10 pt-6 md:pt-10">
        <div className="relative rounded-2xl overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
            loading="lazy"
            decoding="async"
            alt="host-home"
            className="w-full h-[320px] md:h-[480px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6 md:px-16">

            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight">
              Start earning with your property
            </h1>

            <p className="text-gray-200 mb-6 text-sm md:text-lg max-w-md">
              List your space, connect with guests, and build passive income.
            </p>

            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm md:text-base font-medium w-fit hover:opacity-90 transition">
              Become a Host
            </button>

          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="px-4 md:px-10 py-10 md:py-16 grid md:grid-cols-3 gap-6">

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-2">
            Earn Money
          </h3>
          <p className="text-sm text-muted-foreground">
            Turn your property into a consistent income source.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-2">
            Easy Management
          </h3>
          <p className="text-sm text-muted-foreground">
            Manage bookings, pricing, and availability easily.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-2">
            Verified Guests
          </h3>
          <p className="text-sm text-muted-foreground">
            Connect with trusted and verified travelers.
          </p>
        </div>

      </div>

      {/* Property Showcase */}
      <div className="px-4 md:px-10 pb-10 md:pb-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Inspiration for your listing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-xl overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                className="h-56 w-full object-cover rounded-xl"
              />

              <p className="mt-2 text-sm font-medium">
                Modern Stay #{item}
              </p>

            </div>
          ))}
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-card border-y border-border py-10 md:py-16 px-4 md:px-10 text-center">

        <h2 className="text-xl md:text-2xl font-semibold mb-10">
          Start hosting in 3 simple steps
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <div className="text-primary text-2xl font-bold mb-2">1</div>
            <p className="font-medium mb-1">List your property</p>
            <p className="text-sm text-muted-foreground">
              Add photos, details, and pricing.
            </p>
          </div>

          <div>
            <div className="text-primary text-2xl font-bold mb-2">2</div>
            <p className="font-medium mb-1">Get verified (KYC)</p>
            <p className="text-sm text-muted-foreground">
              Complete identity verification.
            </p>
          </div>

          <div>
            <div className="text-primary text-2xl font-bold mb-2">3</div>
            <p className="font-medium mb-1">Start earning</p>
            <p className="text-sm text-muted-foreground">
              Accept bookings and earn money.
            </p>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12 md:py-16 px-4">

        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Ready to list your property?
        </h2>

        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm md:text-base font-medium hover:opacity-90 transition">
          Get Started
        </button>

      </div>

    </div>
  );
}