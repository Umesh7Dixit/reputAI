import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0B1D3B] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          {/* Logo & Company Info */}
          {/* <img src="/logo.png" alt="RePut Logo" className="h-10 mb-4" /> Replace with actual logo path */}
          <h3 className="text-lg font-bold">RePut</h3>
          <p className="text-sm text-gray-300 mt-1 leading-relaxed">
            Office No. 399/3241/1/B, P No.5-M,<br />
            Jigani Industrial Area, Jigani, Anekal,<br />
            Bangalore - 560105, Karnataka
          </p>

          {/* LinkedIn Icon */}
          <a
            // href="https://www.linkedin.com/company/reput-ai/posts/?feedView=all" // update if needed
            href="https://www.linkedin.com/company/reput-ai" // update if needed
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[#0A66C2] bg-white p-2 rounded hover:bg-gray-200 transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-[#4E677C] text-sm text-white text-center py-3">
        © Reput.ai 2024
      </div>
    </footer>
  );
}
