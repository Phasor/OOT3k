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
        {/* Question 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[40%]">
            <div
                className="w-full p-4 cursor-pointer flex justify-between items-center"
                onClick={toggleExpansion1}
            >
                <h3 className="text-lg font-semibold text-gray-900">
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
                <p className="text-gray-700 mt-5">
                We don't have discord access for now but please head to our Twitter to find out more info.
                </p>
            </div>
        </div>
    

    {/* Question 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[40%] mt-5">
        <div
        className="w-full p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleExpansion2}
        >
        <h3 className="text-lg font-semibold text-gray-900">
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
        <p className="text-gray-700 mt-5">
        Sometime in April 2023. Keep an eye on our Twitter for updates.
        </p>
        </div>
    </div>

    {/* Question 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[40%] mt-5">
        <div
        className="w-full p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleExpansion3}
        >
        <h3 className="text-lg font-semibold text-gray-900">
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
        <p className="text-gray-700 mt-5">
        Ten (10) per wallet.
        </p>
        </div>
    </div>

        {/* Question 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[40%] mt-5">
        <div
        className="w-full p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleExpansion4}
        >
        <h3 className="text-lg font-semibold text-gray-900">
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
        <p className="text-gray-700 mt-5">
        No. It Terras will reveal over a 1 week period.
        </p>
        </div>
    </div>

        {/* Question 5 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[40%] mt-5">
        <div
        className="w-full p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleExpansion5}
        >
        <h3 className="text-lg font-semibold text-gray-900">
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
        <p className="text-gray-700 mt-5">
        We will be running several giveaways on our Twitter. Follow us and keep an eye out for the next one.
        </p>
        </div>
    </div>
</>
);
}
