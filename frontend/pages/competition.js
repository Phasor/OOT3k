import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function competition() {
    const { address, isConnected } = useAccount();
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const answer = e.target.answer.value
            const submission = { address, answer }
            
            const sendAnswer = async (data) => {
                const res = await fetch('/api/add-address', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
                })
                return res
            }

            const res = await sendAnswer(submission)
            const data = await res.json()
            console.log(`data: ${data}`)
            if (data.success) {
                console.log(data.message)
                toast.success(data.message);
            } else {
                console.log(data.message)
                toast.error(data.message);
            }
        } catch(err){
            console.log(err)
            setError(err.message)
        }
    }

  return (
    <div className='min-h-screen w-screen'>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className='flex flex-col justify-center items-center mx-auto'>
            <h1 className='mt-[16rem] text-4xl font-leckton font-semibold text-center'>Oceans of Terra Whitelist Competition #1</h1>
            <div className='my-4'>
                <p className='mt-4 text-xl font-leckton font-semibold'> INSTRUCTIONS</p>
                <p className='text-xl font-leckton'> 1. Connect Wallet</p>
                <p className='text-xl font-leckton'> 2. Type in Answer</p>
                <p className='text-xl font-leckton'> 3. Hit Submit</p>
            </div>
            <ConnectButton/>
            <p className='text-2xl font-leckton font-bold mt-6'>The sun is highest at noon but it looks blue. What am I?</p>

            <form onSubmit={handleSubmit}>
                <div className='space-x-3 mt-6'>
                    <input
                        name="answer"
                        id="answer"
                        type="text"
                        placeholder="What is the answer?"
                        className="w-96 h-12 mt-4 border-2 border-gray-300 rounded-lg px-4 focus:outline-none focus:border-[#FBBF24]"
                        required
                    />
                    <button
                        type="submit"
                        
                        className='bg-blue-500 hover:bg-blue-600 border rounded-xl py-3 px-4 text-white'
                    >SUBMIT
                    </button>
                </div>
            </form>
            { error && <p className='text-red-500 text-xl font-leckton'>{error}</p>}
        </div>
    </div>
  )
}
