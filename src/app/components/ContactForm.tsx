'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useContact } from './ContactContext';


export default function ScheduleForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [hour, setHour] = useState('01');
  const [minute, setMinute] = useState('00');
  const [ampm, setAmpm] = useState('AM');
  const { contactRef } = useContact();

  return (
    <div ref={contactRef} className="h-screen bg-[#f9fafb] flex flex-col justify-center items-center px-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-medium leading-snug">
          <span className="text-[#4A4EF0]">Let’s Talk! </span>
          <span className="text-[#2F80ED]">Your Next Step Towards </span>
          <span className="text-[#66BB6A]">Sustainability Starts Here!</span>
        </h2>

        {/* Underline design */}
        <div className="flex justify-center items-center mt-2 space-x-2">
          <div className="w-10 h-1 bg-[#f4d95b] rounded"></div>
          <div className="w-3 h-1 bg-[#c3e378] rounded"></div>
          <div className="w-1 h-1 bg-[#f4d95b] rounded"></div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-6xl bg-white rounded-lg p-6 md:p-10 shadow flex flex-col md:flex-row gap-8">
        {/* Left - Calendar and Time */}
        <div className="flex-1">
          <div className="rounded-lg border p-4 w-fit mx-auto">
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => date && setSelectedDate(date)}
              inline
            />
          </div>

          <div className="mt-6 text-gray-800">
            <label className="font-semibold text-sm mb-2 block text-[#0b1d3b]">Select Time:</label>
            <div className="flex gap-2">
              <select value={hour} onChange={(e) => setHour(e.target.value)} className="border px-2 py-1 rounded">
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1}>{String(i + 1).padStart(2, '0')}</option>
                ))}
              </select>
              <select value={minute} onChange={(e) => setMinute(e.target.value)} className="border px-2 py-1 rounded">
                {['00', '15', '30', '45'].map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
              <select value={ampm} onChange={(e) => setAmpm(e.target.value)} className="border px-2 py-1 rounded">
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex-1 flex flex-col justify-center text-gray-800">
          <input
            type="text"
            placeholder="Full name*"
            className="border border-black px-4 py-2 rounded mb-4 focus:outline-none w-full"
          />
          <input
            type="email"
            placeholder="Email ID*"
            className="border border-black px-4 py-2 rounded mb-4 focus:outline-none w-full"
          />
          <textarea
            placeholder="Description*"
            className="border border-black px-4 py-2 rounded mb-4 h-28 focus:outline-none w-full resize-none"
          />
          <button className="bg-[#0b1d3b] text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition w-fit mt-2">
            Talk to an expert →
          </button>
        </div>
      </div>
    </div>
  );
}











// 'use client';

// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export default function ContactForm() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [hour, setHour] = useState('01');
//   const [minute, setMinute] = useState('00');
//   const [ampm, setAmpm] = useState('AM');

//   return (
//     <div className="h-screen w-full bg-[#f7f8fa] flex items-center justify-center px-6">
//       <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12">
//         {/* Left: Title + Calendar */}
//         <div>
//           <h2 className="text-3xl font-semibold mb-2">
//             <span className="text-[#4a4ef0]">Let’s Talk!</span>{' '}
//             <span className="text-[#2196f3]">Your Next Step Towards</span>{' '}
//             <span className="text-[#66bb6a]">Sustainability Starts Here!</span>
//           </h2>
//           <div className="mt-4 bg-white p-6 rounded-lg shadow">
//             <DatePicker
//               selected={selectedDate}
//             //   onChange={(date: Date) => setSelectedDate(date)}
//             onChange={(date: Date | null) => {
//                 if (date) {
//                     setSelectedDate(date);
//                   }
//                 }}

//               inline
//             />
//           </div>

//           {/* Time Select */}
//           <div className="mt-6">
//             <label className="block font-semibold text-sm text-gray-700 mb-2">Select Time:</label>
//             <div className="flex gap-2">
//               <select value={hour} onChange={(e) => setHour(e.target.value)} className="border px-2 py-1 rounded">
//                 {[...Array(12)].map((_, i) => (
//                   <option key={i + 1}>{String(i + 1).padStart(2, '0')}</option>
//                 ))}
//               </select>
//               <select value={minute} onChange={(e) => setMinute(e.target.value)} className="border px-2 py-1 rounded">
//                 {['00', '15', '30', '45'].map((m) => (
//                   <option key={m}>{m}</option>
//                 ))}
//               </select>
//               <select value={ampm} onChange={(e) => setAmpm(e.target.value)} className="border px-2 py-1 rounded">
//                 <option>AM</option>
//                 <option>PM</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Right: Form */}
//         <div className="flex flex-col justify-center">
//           <input
//             type="text"
//             placeholder="Full name*"
//             className="border px-4 py-2 rounded mb-4 focus:outline-none"
//           />
//           <input
//             type="email"
//             placeholder="Email ID*"
//             className="border px-4 py-2 rounded mb-4 focus:outline-none"
//           />
//           <textarea
//             placeholder="Description*"
//             className="border px-4 py-2 rounded mb-4 h-32 resize-none focus:outline-none"
//           />

//           <button className="bg-[#0b1d3b] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#142c4d] transition flex items-center justify-center gap-2 w-max">
//             Talk to an expert →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
