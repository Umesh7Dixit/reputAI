export default function ScheduleBanner() {
  return (
    <div
      className="bg-[#0B1D3B] text-center py-16 relative w-full"
      style={{
        backgroundImage: `url('/letsGet.jpg'), url('/letsGet.jpg')`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'left center, right center',
      }}
    >
      <h2 className="text-gray-300 text-xl md:text-2xl font-medium mb-6">
        Only 6% Of Organizations Have Full Visibility<br className="hidden md:block" /> Over Their Supply Chains
      </h2>

      <button className="bg-white text-[#0B1D3B] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
        Schedule a Call
      </button>
    </div>
  );
}
