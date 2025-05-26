"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContact } from "./ContactContext";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Technology", href: "/technology" },
  { label: "Regulation", href: "/regulation" },
  { label: "News", href: "/news" },
  { label: "About RePut", href: "/about" },
  { label: "Platform", href: "/platform" },
  { label: "Policies", href: "/policie" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollToContact } = useContact();

  return (
    <header className="bg-[#0a2941] text-white">
      <div className="w-full mx-auto px-4">
        <nav className="max-w-[1600px] mx-auto flex justify-between items-center px-8 py-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* You can add your logo image here */}
            {/* <img src="/logo.png" alt="RePut logo" className="h-10 w-auto" /> */}
            <span className="text-2xl font-bold tracking-tight">RePut</span>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-8 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`transition-colors duration-200 hover:text-yellow-300 ${
                    pathname === item.href ? "text-yellow-400 font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
                <span
                  className={`absolute left-0 -bottom-2 h-[3px] w-full bg-yellow-400 transform transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${
                    pathname === item.href ? "scale-x-100" : ""
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div>
            <button onClick={scrollToContact} className="bg-white text-[#0a2941] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-yellow-400 hover:text-[#0a2941] transition-colors duration-300 shadow-md">
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}













// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "Technology", href: "/technology" },
//   { label: "Regulation", href: "/regulation" },
//   { label: "News", href: "/news" },
//   { label: "About RePut", href: "/about-reput" },
//   { label: "Platform", href: "/platform" },
//   { label: "Policies", href: "/policies" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();

//   return (
//     <header className="bg-[#0a2941] text-white">
//       <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <span className="text-xl font-bold">RePut</span>
//         </div>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex gap-6 text-xl font-medium">
//           {navItems.map((item) => (
//             <li key={item.href} className="relative group">
//               <Link
//                 href={item.href}
//                 className={`transition-colors ${
//                   pathname === item.href ? "text-yellow-400 font-semibold" : ""
//                 }`}
//               >
//                 {item.label}
//               </Link>
//               <span
//                 className={`absolute left-0 -bottom-1 h-[2px] w-full bg-yellow-400 transform transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${
//                   pathname === item.href ? "scale-x-100" : ""
//                 }`}
//               />
//             </li>
//           ))}
//         </ul>

//         {/* Contact Button */}
//         <div>
//           <button className="bg-white text-[#0a2941] px-4 py-2 rounded-full font-medium text-sm hover:opacity-90">
//             Contact Us
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }









 