import { useState } from "react";

export default function FAQ() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  const [isExpanded6, setIsExpanded6] = useState(false);
  const [isExpanded7, setIsExpanded7] = useState(false);
  const [isExpanded8, setIsExpanded8] = useState(false);
  const [isExpanded9, setIsExpanded9] = useState(false);

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
  const toggleExpansion6 = () => {
    setIsExpanded6(!isExpanded6);
  };
  const toggleExpansion7 = () => {
    setIsExpanded7(!isExpanded7);
  };
  const toggleExpansion8 = () => {
    setIsExpanded8(!isExpanded8);
  };
  const toggleExpansion9 = () => {
    setIsExpanded9(!isExpanded9);
  };

  return (
    <>
      <svg 
        className="bg-gray-100" 
        class="section-divider" 
        fill="rgb(248 249 250)" 
        viewBox="0 0 1920 60" 
        aria-hidden="true">
            <rect
              width="100%"
              height="100%"
              style={{ fill: 'rgb(243 244 246)' }}
            />
            <path data-theme="softSecondary" d="M0,80.75H1920V45.833H1742.083a80.491,80.491,0,0,1,12.863-1.55c5.2-.26,17.24-.3,24.153-.24,26.69.222,54.377,1.094,79.341.96,19.287-.1,37.1-.372,53.573-.788L1920,44V34.078l-6.614.216-9.221.256c-6.252.147-12.7.249-19.265.32-13.132.14-26.739.15-40.206.125-26.935-.052-53.313-.247-74.22.168-14.367-1.4-32.582-.756-48.293-1.92-10.145.509-20.876.936-24.149,2.4-16.09-.266-37.611,2.532-50.019.479V34.684c-10.959-2.291-33.371-1.869-48.292-3.84-15.861-.512-26.214,1.347-39.671,1.92-7.032.178-5.941-.773-13.8-.481-40.751-.071-41.131,5.477-62.087,8.16-4.569-5.691-47.085-5.126-77.622-5.04-2.333-4.154-22.643-5.808-50.015-6.479-4.677-2.069-17.763-2.969-22.423-5.04-4.7-.175-3.474.477-6.9.479-11.485-2.964-40.092-2.449-63.813-3.36-23.312.6-29.4,3.589-55.195,3.841-8.3-3.783-56.5-4.561-84.513-3.361-.316-1.857-5.682-3.862-20.7-4.8-2.193-.137-6.78.122-10.352,0-16.331-.564-22.974-3.145-39.671-1.441-22.812-1.938-73.831-3.919-98.311-.719-4.315-2.2-15.369-3.462-20.7-5.521-23.122-.714-41.26-2.815-65.54-2.64-13.5,1-29.918,1.6-39.671,3.12.27,1.317-1.305,2.38-6.9,2.88-35.562-1.333-83.117-2.545-93.139,2.88-14.338-.314-8.341,2.2-22.423,1.92-5.17-.16-2.615-1.4-6.9-1.68-36.327-1.894-80.653-1.762-100.041,2.161-12.433-1.631-21.648-3.708-36.221-5.04-13.359.1-36.33-.325-48.293-1.2-32.483.6-42.463,4.331-53.471,7.92-25.227-.147-43.752,2.274-58.641,4.321-11.966-1.189-27.56-.426-39.67-1.441-19.514,1.284-40.772,2.328-53.468,4.561C301.584,31.04,294,33.888,283.7,37.8c-15.047-.774-19.865-3.5-36.221-4.321-10.453-.522-37.12-1.01-48.3-.959-10.184.046-17.188,1.062-27.595.719-18.244,2.022-31.516,4.736-46.57,7.2-3.726,2.091-9.8,3.854-17.5,5.39H4.061c-.734-1.281-1.512-2.592-2.344-3.949-.546-.09-1.13-.175-1.717-.26Z"/>
        </svg>

        <section id="FAQ" class="w-full py-10  bg-bg-dg ">
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
                        Wen mint?
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
                        April 15th 2023. Narwhalist mint starts at 6am PDT. Public mint starts at 10am PDT.
                        </p>
                    </div>
                </div>
            

                {/* Question 2 */}
                {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[40%] mt-5">
                    <div
                    className="w-full p-4 cursor-pointer flex justify-between items-center"
                    onClick={toggleExpansion2}
                    >
                    <h3 className="text-xl font-lekton font-semibold text-gray-800">
                        How much per NFT?
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
                    Narwhalist (whitelist) price is free. Public price is 0.057 ETH.
                    </p>
                    </div>
                </div> */}

                {/* Question 3 */}
                {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[40%] mt-5">
                    <div
                    className="w-full p-4 cursor-pointer flex justify-between items-center"
                    onClick={toggleExpansion3}
                    >
                    <h3 className="text-xl font-lekton font-semibold text-gray-800">
                        What are the maximum number of mints per wallet?
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
                    1 per wallet for the Narwhalist (whitelist) and 2 per wallet for the Public mint.
                    </p>
                    </div>
                </div> */}

                {/* Question 4 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[40%] mt-5">
                    <div
                    className="w-full p-4 cursor-pointer flex justify-between items-center"
                    onClick={toggleExpansion4}
                    >
                    <h3 className="text-xl font-lekton font-semibold text-gray-800">
                        Is there a Discord server?
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
                    Yes, but it will not be open to the public until mint day.
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
                        Will my hero be revealed immediately after I mint?
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
                        No, but the art will be worth the short wait.
                        </p>
                    </div>
                </div>

                {/* Question 6 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[40%] mt-5">
                    <div
                    className="w-full p-4 cursor-pointer flex justify-between items-center"
                    onClick={toggleExpansion6}
                    >
                        <h3 className="text-xl font-lekton font-semibold text-gray-800">
                        Is the game ready to play?
                        </h3>
                        <svg
                            className={`w-6 h-6 transition-transform duration-200 ${
                            isExpanded6 ? "transform rotate-180" : ""
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
                        isExpanded6 ? "max-h-96" : "max-h-0"
                    } overflow-hidden`}
                    >
                        <p className="text-gray-800 text-xl mt-5 font-lekton">
                        We have an Alpha V1 that has been released and tested within a small group. A refined Alpha V2 will be released approximately one month after mint date to all NFT holders.
                        </p>
                    </div>
                </div>

                {/* Question 7 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[40%] mt-5">
                    <div
                    className="w-full p-4 cursor-pointer flex justify-between items-center"
                    onClick={toggleExpansion7}
                    >
                        <h3 className="text-xl font-lekton font-semibold text-gray-800">
                        Will the game be mobile friendly?
                        </h3>
                        <svg
                            className={`w-6 h-6 transition-transform duration-200 ${
                            isExpanded7 ? "transform rotate-180" : ""
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
                        isExpanded7 ? "max-h-96" : "max-h-0"
                    } overflow-hidden`}
                    >
                        <p className="text-gray-800 text-xl mt-5 font-lekton">
                        Yes. V2 will be on desktop. Further versions will be on mobile.
                        </p>
                    </div>
                </div>

                {/* Question 8 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[40%] mt-5">
                    <div
                    className="w-full p-4 cursor-pointer flex justify-between items-center"
                    onClick={toggleExpansion8}
                    >
                        <h3 className="text-xl font-lekton font-semibold text-gray-800">
                        Is there a token?
                        </h3>
                        <svg
                            className={`w-6 h-6 transition-transform duration-200 ${
                            isExpanded8 ? "transform rotate-180" : ""
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
                        isExpanded8 ? "max-h-96" : "max-h-0"
                    } overflow-hidden`}
                    >
                        <p className="text-gray-800 text-xl mt-5 font-lekton">
                        No. However, we may integrate a token at a later stage of development.
                        </p>
                    </div>
                </div>

                {/* Question 9 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[40%] mt-5">
                    <div
                    className="w-full p-4 cursor-pointer flex justify-between items-center"
                    onClick={toggleExpansion9}
                    >
                        <h3 className="text-xl font-lekton font-semibold text-gray-800">
                        What chain are the NFTs on?
                        </h3>
                        <svg
                            className={`w-6 h-6 transition-transform duration-200 ${
                            isExpanded9 ? "transform rotate-180" : ""
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
                        isExpanded9 ? "max-h-96" : "max-h-0"
                    } overflow-hidden`}
                    >
                        <p className="text-gray-800 text-xl mt-5 font-lekton">
                        This collection is on the Ethereum mainnet. Future in game NFTs and transactions will make use of scaling solutions like L2's.
                        </p>
                    </div>
                </div>

                </div>
        </section>
    </>
);
}

