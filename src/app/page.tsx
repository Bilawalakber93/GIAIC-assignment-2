import React from 'react';
import Card1 from '@/components/card1/card1';
import Card2 from '@/components/card2/card2';
import Card3 from '@/components/card3/card3';


export default function Home() {
  return (
    <div className="min-h-screen bg-[#252B42] text-white">
      <header className="text-center py-20">
        <h3 className="text-blue-300 mb-16 font-bold text-base">Welcome</h3>
        <h1 className="text-4xl font-bold mb-4">Selling on the internet like a pro</h1>
        <p className="text-gray-200 max-w-md mx-auto mb-8">
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <div className="space-x-4 ">
          <button className="bg-[#23A6F0] text-white px-4 py-2 rounded font-bold align-center">Get Quote Now</button>
          <button className="bg-gray-700 px-4 py-2 rounded font-semibold border-blue-500 border-2">Learn More</button>
        </div>
      </header>
      <section className="flex justify-center space-x-6 p-6">
        <Card1
          title="Training Courses"
          description="The gradual accumulation of information about atomic and small-scale behaviour."
        />
        <Card2
          title="2,769 Online Courses"
          description="The gradual accumulation of information about atomic and small-scale behaviour."
        />
        <Card3
          title="Training Courses"
          description="The gradual accumulation of information about atomic and small-scale behaviour."
        />
      </section>
  </div>
  );
}