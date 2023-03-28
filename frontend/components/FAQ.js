import { useState } from "react";

export default function FAQ() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);

  const toggleExpansion1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const toggleExpansion2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const toggleExpansion3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  const toggleExpansion4 = () => {
    setIsExpanded4(!isExpanded4);
  };
  const toggleExpansion5 = () => {
    setIsExpanded5(!isExpanded5);
  };

  return (
    <section id="FAQ" class="w-full py-10 bg-bg-blue sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-col justify-center items-center">
            <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-gray-50 text-3xl font-raleway font-bold leading-tight sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
        </div>

        
            {/* Question 1 */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[40%] mt-10">
                <div
                    className="w-full p-4 cursor-pointer flex justify-between items-center"
                    onClick={toggleExpansion1}
                >
                    <h3 className="text-lg font-raleway font-semibold text-gray-900">
                    Is there a Discord?
                    </h3>
                    <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                        isExpanded1 ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                    </svg>
                </div>
                <div
                    className={`px-4 pb-4 transition-all duration-500 ${
                    isExpanded1 ? "max-h-96" : "max-h-0"
                    } overflow-hidden`}
                >
                    <p className="text-gray-700 mt-5 font-raleway">
                    We don't have discord access for now but please head to our Twitter to find out more info.
                    </p>
                </div>
            </div>
        

            {/* Question 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[40%] mt-5">
                <div
                className="w-full p-4 cursor-pointer flex justify-between items-center"
                onClick={toggleExpansion2}
                >
                <h3 className="text-lg font-raleway font-semibold text-gray-900">
                    Wen mint?
                </h3>
                <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                    isExpanded2 ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                    />
                </svg>
                </div>
                <div
                className={`px-4 pb-4 transition-all duration-500 ${
                    isExpanded2 ? "max-h-96" : "max-h-0"
                } overflow-hidden`}
                >
                <p className="text-gray-700 mt-5 font-raleway">
                Sometime in April 2023. Keep an eye on our Twitter for updates.
                </p>
                </div>
            </div>

            {/* Question 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[40%] mt-5">
                <div
                className="w-full p-4 cursor-pointer flex justify-between items-center"
                onClick={toggleExpansion3}
                >
                <h3 className="font-raleway text-lg font-semibold text-gray-900">
                    What are the maximum #mints per wallet?
                </h3>
                <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                    isExpanded3 ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                    />
                </svg>
                </div>
                <div
                className={`px-4 pb-4 transition-all duration-500 ${
                    isExpanded3 ? "max-h-96" : "max-h-0"
                } overflow-hidden`}
                >
                <p className="text-gray-700 mt-5 font-raleway">
                Ten (10) per wallet.
                </p>
                </div>
            </div>

                {/* Question 4 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[40%] mt-5">
                <div
                className="w-full p-4 cursor-pointer flex justify-between items-center"
                onClick={toggleExpansion4}
                >
                <h3 className="text-lg font-raleway font-semibold text-gray-900">
                    Will my Terra's be revealed straight after minting?
                </h3>
                <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                    isExpanded4 ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                    />
                </svg>
                </div>
                <div
                className={`px-4 pb-4 transition-all duration-500 ${
                    isExpanded4 ? "max-h-96" : "max-h-0"
                } overflow-hidden`}
                >
                <p className="text-gray-700 font-raleway mt-5">
                No. It Terras will reveal over a 1 week period.
                </p>
                </div>
            </div>

                {/* Question 5 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[40%] mt-5">
                <div
                className="w-full p-4 cursor-pointer flex justify-between items-center"
                onClick={toggleExpansion5}
                >
                <h3 className="text-lg font-raleway font-semibold text-gray-900">
                    How do I get on the whitelist?
                </h3>
                <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                    isExpanded5 ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                    />
                </svg>
                </div>
                <div
                className={`px-4 pb-4 transition-all duration-500 ${
                    isExpanded5 ? "max-h-96" : "max-h-0"
                } overflow-hidden`}
                >
                <p className="text-gray-700  font-raleway mt-5">
                We will be running several giveaways on our Twitter. Follow us and keep an eye out for the next one.
                </p>
                </div>
            </div>
            </div>
    </section>
);
}

{/* 


// <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
//     <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div class="max-w-2xl mx-auto text-center">
//             <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
//             <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
//         </div>

//         <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
//             <div class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
//                 <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
//                     <span class="flex text-lg font-semibold text-black"> How to create an account? </span>

//                     <svg class="w-6 h-6 text-gray-400 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                 </button>

//                 <div class="px-4 pb-5 sm:px-6 sm:pb-6">
//                     <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
//                 </div>
//             </div>

//             <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
//                 <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
//                     <span class="flex text-lg font-semibold text-black"> How can I make payment using Paypal? </span>

//                     <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                 </button>

//                 <div class="hidden px-4 pb-5 sm:px-6 sm:pb-6">
//                     <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
//                 </div>
//             </div>

//             <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
//                 <div class="">
//                     <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
//                         <span class="flex text-lg font-semibold text-black"> Can I cancel my plan? </span>

//                         <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
//                         </svg>
//                     </button>

//                     <div class="hidden px-4 pb-5 sm:px-6 sm:pb-6">
//                         <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
//                     </div>
//                 </div>
//             </div>

//             <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
//                 <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
//                     <span class="flex text-lg font-semibold text-black"> How can I reach to support? </span>

//                     <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                 </button>

//                 <div class="hidden px-4 pb-5 sm:px-6 sm:pb-6">
//                     <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
//                 </div>
//             </div>
//         </div>

//         <p class="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="#" title="" class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
//     </div>
// </section>
 */}
