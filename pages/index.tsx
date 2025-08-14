
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', form, selectedDate);
  };

  return (
    <div className="p-6 space-y-8 max-w-4xl mx-auto text-navy">
      <Head>
        <title>Glacier Capital Group</title>
        <meta name="description" content="We buy and sell real estate fast and hassle-free." />
      </Head>

      <div className="flex items-center justify-center space-x-4">
        <Image src="/logo.png" alt="Logo" width={80} height={80} />
        <h1 className="text-4xl font-bold text-navy">Glacier Capital Group</h1>
      </div>

      <p className="text-center text-lg text-navy">
        We specialize in buying and selling real estate fast and hassle-free. Whether you're a property owner
        looking to sell or a buyer looking for investment opportunities, we're here to help.
      </p>

      <div className="bg-white border border-iceblue p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Schedule a Meeting</h2>
        <input type="date" className="border p-2 rounded w-full mb-4" onChange={(e) => setSelectedDate(new Date(e.target.value))} />
        <p className="text-sm">Selected Date: {selectedDate?.toDateString() || 'None'}</p>
      </div>

      <div className="bg-white border border-iceblue p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="border p-2 rounded w-full" />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required className="border p-2 rounded w-full" />
          <button type="submit" className="bg-navy text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </div>
    </div>
  );
}
