import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { BsFillSendFill } from 'react-icons/bs';

const ContactMeCard = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_yw9o7sd',        
            'template_bvccn24',       
            form.current,
            {
                publicKey: 'KRSs8kmxdH4WN6Mae'  
            }
        )
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully',
                });
                e.target.reset();  
            })
            .catch(() => {
                Swal.fire({
                    icon: 'warning',
                    title: 'Unable to send message',
                });
            });
    };

    return (
        <section id='contact' className='flex justify-center items-center py-10 px-4 z-20'>
            <div className="w-full max-w-[1000px] bg-gray-100 shadow-2xl rounded-xl p-6 md:p-10 flex flex-col lg:flex-row gap-[50px]">

                {/* Left Side - Address */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Details</h2>

                    <div className='bg-white p-5 rounded-md flex items-start gap-4 mr-16 shadow-2xl'>
                        <div className='w-11 h-11 rounded bg-[#A53DFF] text-white text-xl flex items-center justify-center'>
                            <IoLocationSharp />
                        </div>
                        <div>
                            <p className="font-medium">Address</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className='bg-gray-50 text-gray-500 p-5 rounded-md flex items-start gap-4 mr-16 mt-5'>
                        <div className='w-11 h-11 rounded bg-[#EDD8FF80] text-black text-xl flex items-center justify-center'>
                            <MdEmail />
                        </div>
                        <div>
                            <p className="font-medium">My Email</p>
                            <p>fahadbin0212@gmail.com</p>
                        </div>
                    </div>
                    <div className='bg-gray-50 text-gray-500 p-5 rounded-md flex items-start gap-4 mr-16 mt-5'>
                        <div className='w-11 h-11 rounded bg-[#EDD8FF80] text-black text-xl flex items-center justify-center'>
                            <FaPhoneAlt />
                        </div>
                        <div>
                            <p className="font-medium">Contact</p>
                            <p>+88 01886-420667</p>
                        </div>
                    </div>
                    <div className='mt-5 flex gap-6 px-20'>
                        <a href="">
                            <img className='w-7 h-7 rounded' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="" />
                        </a>

                        <a href="">
                            <img className='w-7 h-7 rounded' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" alt="" />
                        </a>

                        <a href="">
                            <img className='w-7 h-7 rounded' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="" />
                        </a>


                    </div>
                </div>

                {/* Right Side - Contact Me Form */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your name"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your email"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Your message"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300 flex items-center gap-3"
                        >
                            Send Message <BsFillSendFill />
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactMeCard;
