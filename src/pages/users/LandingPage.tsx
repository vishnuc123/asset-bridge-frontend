import { useNavigate } from "react-router-dom";
import { Roles } from "../../constants/Roles";
import UserNavbar from "../../components/navbars/userNavbar";

export default function UserLandingPage() {
  const navigate = useNavigate()
  return (
    <div className="bg-background text-white min-h-screen font-sans">

      {/* Navbar */}
      <UserNavbar role={Roles.user_role} isAuthenticated={false}/>

      {/* Hero Section */}
      <div className="relative px-4 md:px-10 pt-6 md:pt-10">
        <div className="relative rounded-xl overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            loading="lazy"
            decoding="async"
            alt="hero-image"
            className="w-full h-[300px] md:h-[420px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
            
            <h1 className="text-2xl md:text-4xl font-bold mb-3">
              FIND & BOOK
              <br /> LUXURY HOTELS
            </h1>

            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Discover premium stays in your favorite destinations
            </p>

            {/* Search */}
            <div className="bg-white text-black rounded-full flex items-center px-3 py-2 w-full max-w-md">
              <input
                placeholder="Search location..."
                className="flex-1 outline-none px-2 text-sm"
              />
              <button className="bg-black text-white px-3 py-1 rounded-full text-sm">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Floating Info */}
        <div className="mt-6 md:absolute md:bottom-[-30px] md:left-1/2 md:-translate-x-1/2 bg-[#141414] px-4 md:px-6 py-3 md:py-4 rounded-xl border border-gray-800 flex flex-wrap justify-center gap-6 md:gap-10 text-xs md:text-sm">
          
          <div>
            <p className="text-gray-400">Cities</p>
            <p className="font-semibold">50+</p>
          </div>

          <div>
            <p className="text-gray-400">Hotels</p>
            <p className="font-semibold">500+</p>
          </div>

          <div>
            <p className="text-gray-400">Happy Guests</p>
            <p className="font-semibold">20K+</p>
          </div>
        </div>
      </div>

      <div className="h-10 md:h-20"></div>

      {/* Featured Hotels */}
      <div className="px-4 md:px-10 py-10 md:py-16">
        <h2 className="text-center text-lg md:text-xl font-semibold mb-8 md:mb-10">
          FEATURED HOTELS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-[#141414] rounded-xl overflow-hidden border border-gray-800"
            >
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                className="h-40 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">
                  Luxury Hotel #{item}
                </h3>

                <p className="text-xs text-gray-400 mb-2">
                  ⭐ 4.8 • $120/night
                </p>

                <button className="w-full bg-white text-black py-1 rounded text-sm">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#e8e3dc] text-black text-center py-10 md:py-16 px-4">
        <p className="text-xs md:text-sm tracking-widest mb-2">
          WHY CHOOSE US
        </p>

        <h2 className="text-lg md:text-2xl font-semibold mb-6">
          EXPERIENCE PREMIUM STAYS
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <div className="border px-3 md:px-4 py-1 md:py-2 rounded-full text-sm">
            Best Prices
          </div>
          <div className="border px-3 md:px-4 py-1 md:py-2 rounded-full text-sm">
            Verified Hotels
          </div>
          <div className="border px-3 md:px-4 py-1 md:py-2 rounded-full text-sm">
            24/7 Support
          </div>
        </div>
      </div>  

      {/* Footer CTA */}
      <div className="text-center py-10 md:py-16 px-4">
        <h2 className="text-lg md:text-2xl font-semibold mb-4">
          Ready for your next stay?
        </h2>

        <button className="bg-orange-500 px-5 py-2 rounded-full text-sm md:text-base">
          Explore Hotels
        </button>
      </div>

    </div>
  );
}