import React from 'react'
import { assets, plans } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import axios from 'axios'
import { toast } from 'react-toastify'

function BuyCredit() {

  const { backendURL, loadCreditsData } = useContext(AppContext);
  const navigate = useNavigate();
  const { getToken} = useAuth();
  const initPay = async (order) => {
      console.log('initPay called with order:', order);
      if (!window.Razorpay) {
        console.error('Razorpay checkout script not loaded (window.Razorpay is undefined)');
        toast.error('Payment gateway not available. Try again later.');
        return;
      }
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: order.amount,
        currency: order.currency,
        name: "Credits Payment",
        description: "Credits Payment",
        order_id: order.id,
        receipt: order.receipt,
        handler: async (response) => {
          console.log(response);
        }
      }
      const rzp = new window.Razorpay(options);
        console.log('Opening Razorpay checkout');
      rzp.open();
  }


  const paymentRazorpay = async (planId) => {
    try {

      const token = await getToken();
      console.log('Got token, requesting order for plan:', planId);
      const { data } = await axios.post(backendURL + '/api/user/pay-razor', { planId },{ headers:{token}});
      console.log('Backend response for pay-razor:', data);
      if(data.success){
          initPay(data.order);
      }
      else {
        toast.error(data.message || 'Payment initialization failed');
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      
    }
  }



  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
       <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our plans</button>
       <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold mb-6 sm:mb-10'>Choose the right plan for you</h1>

       <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item,index) =>(
          <div className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500' key={index}>
            <img width={40} src={assets.logo_icon} alt="icon" />
            <p className='mt-3 font-semibold'>{item.id}</p>
            <p className='mt-3 text-gray-500 text-sm mb-3'>{item.desc}</p>
            <p>
              <span className='font-bold text-3xl'>${item.price}</span> / {item.credits} Credits
            </p>
            <button onClick={() => paymentRazorpay(item.id)} className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52 hover:cursor-pointer'>Purchase</button>
          </div>
        ))}
       </div>
    </div>
  )
}

export default BuyCredit