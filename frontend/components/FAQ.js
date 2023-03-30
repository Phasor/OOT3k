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
    <>
      <svg className="bg-gray-100" class="section-divider" fill="rgb(248 249 250)" viewBox="0 0 1920 60" aria-hidden="true"><path data-theme="softSecondary" d="M0,80.75H1920V45.833H1742.083a80.491,80.491,0,0,1,12.863-1.55c5.2-.26,17.24-.3,24.153-.24,26.69.222,54.377,1.094,79.341.96,19.287-.1,37.1-.372,53.573-.788L1920,44V34.078l-6.614.216-9.221.256c-6.252.147-12.7.249-19.265.32-13.132.14-26.739.15-40.206.125-26.935-.052-53.313-.247-74.22.168-14.367-1.4-32.582-.756-48.293-1.92-10.145.509-20.876.936-24.149,2.4-16.09-.266-37.611,2.532-50.019.479V34.684c-10.959-2.291-33.371-1.869-48.292-3.84-15.861-.512-26.214,1.347-39.671,1.92-7.032.178-5.941-.773-13.8-.481-40.751-.071-41.131,5.477-62.087,8.16-4.569-5.691-47.085-5.126-77.622-5.04-2.333-4.154-22.643-5.808-50.015-6.479-4.677-2.069-17.763-2.969-22.423-5.04-4.7-.175-3.474.477-6.9.479-11.485-2.964-40.092-2.449-63.813-3.36-23.312.6-29.4,3.589-55.195,3.841-8.3-3.783-56.5-4.561-84.513-3.361-.316-1.857-5.682-3.862-20.7-4.8-2.193-.137-6.78.122-10.352,0-16.331-.564-22.974-3.145-39.671-1.441-22.812-1.938-73.831-3.919-98.311-.719-4.315-2.2-15.369-3.462-20.7-5.521-23.122-.714-41.26-2.815-65.54-2.64-13.5,1-29.918,1.6-39.671,3.12.27,1.317-1.305,2.38-6.9,2.88-35.562-1.333-83.117-2.545-93.139,2.88-14.338-.314-8.341,2.2-22.423,1.92-5.17-.16-2.615-1.4-6.9-1.68-36.327-1.894-80.653-1.762-100.041,2.161-12.433-1.631-21.648-3.708-36.221-5.04-13.359.1-36.33-.325-48.293-1.2-32.483.6-42.463,4.331-53.471,7.92-25.227-.147-43.752,2.274-58.641,4.321-11.966-1.189-27.56-.426-39.67-1.441-19.514,1.284-40.772,2.328-53.468,4.561C301.584,31.04,294,33.888,283.7,37.8c-15.047-.774-19.865-3.5-36.221-4.321-10.453-.522-37.12-1.01-48.3-.959-10.184.046-17.188,1.062-27.595.719-18.244,2.022-31.516,4.736-46.57,7.2-3.726,2.091-9.8,3.854-17.5,5.39H4.061c-.734-1.281-1.512-2.592-2.344-3.949-.546-.09-1.13-.175-1.717-.26Z"/></svg>

        <section id="FAQ" class="w-full pt-10 pb-[12rem] bg-bg-dg ">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-col justify-center items-center">
                <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-gray-800 text-3xl sm:text-5xl font-lekton font-bold">Frequently Asked Questions</h2>
            </div>

            
                {/* Question 1 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[40%] mt-10 sm:mt-20">
                    <div
                        className="w-full p-4 cursor-pointer flex justify-between items-center"
                        onClick={toggleExpansion1}
                    >
                        <h3 className="text-xl font-lekton font-semibold text-gray-800">
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
                        <p className="text-gray-800 text-xl mt-5 font-lekton">
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
                    <h3 className="text-xl font-lekton font-semibold text-gray-800">
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
                    <p className="text-gray-800 text-xl mt-5 font-lekton">
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
                    <h3 className="text-xl font-lekton font-semibold text-gray-800">
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
                    <p className="text-gray-800 text-xl mt-5 font-lekton">
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
                    <h3 className="text-xl font-lekton font-semibold text-gray-800">
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
                    <p className="text-gray-800 text-xl mt-5 font-lekton">
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
                    <h3 className="text-xl font-lekton font-semibold text-gray-800">
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
                    <p className="text-gray-800 text-xl mt-5 font-lekton">
                    We will be running several giveaways on our Twitter. Follow us and keep an eye out for the next one.
                    </p>
                    </div>
                </div>
                </div>
        </section>
    </>
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
