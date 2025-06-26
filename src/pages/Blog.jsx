import React from 'react';
import { FaNewspaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import IELTSvsPTE from '../blog/ielts-vs-pte.mdx';
import ChooseRightCountry from '../blog/choose-right-country.mdx';

const posts = [
  {
    title: IELTSvsPTE.meta?.title || 'IELTS vs PTE',
    img: 'https://i.pinimg.com/474x/50/75/20/507520e23cbbac6e0829c403c310ff87.jpg',
    summary: 'A detailed comparison of IELTS and PTE for students planning to study abroad.',
    category: IELTSvsPTE.meta?.category || 'Test Prep',
    date: IELTSvsPTE.meta?.date || '2024-06-01',
    slug: 'ielts-vs-pte',
  },
  {
    title: ChooseRightCountry.meta?.title || 'How to Choose the Right Country for Study Abroad',
    img: 'https://media.istockphoto.com/id/1731557188/photo/portrait-of-young-women-student-showing-plane-ticket-and-passport-standing-isolated-over.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQ4EdoDWGzJ4wVxOQHRz6sFIbpCgx2ig0hmvJrIPWok=',
    summary: 'Explore key factors to consider when selecting your study destination, from academics to lifestyle.',
    category: ChooseRightCountry.meta?.category || 'Guides',
    date: ChooseRightCountry.meta?.date || '2024-06-10',
    slug: 'choose-right-country',
  },

];

const Blog = () => (
  <div className="max-w-5xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold text-secondary mb-8 text-center flex items-center justify-center gap-2">
      <FaNewspaper /> Blog & News
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.map(post => (
  <div key={post.slug} className="group relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition hover:scale-105 border-4">

  {/* Sliding Background */}
  <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/90 before:to-secondary/90 before:translate-y-full group-hover:before:translate-y-0 before:transition-transform before:duration-500 before:z-0 rounded-xl"></div>

  {/* Card Content */}
  <div className="relative z-10 flex flex-col h-full">
    <div className='w-full bg-white'>
    <img src={post.img} alt={post.title} className="w-full h-[225px] object-contain" />
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="text-xs text-secondary group-hover:text-white mb-1 transition-colors duration-300">
        {post.category} • {new Date(post.date).toLocaleDateString()}
      </div>
      <h3 className="text-xl font-bold text-primary group-hover:text-white mb-2 transition-colors duration-300">
        {post.title}
      </h3>
      <p className="mb-4 text-gray-600 group-hover:text-white transition-colors duration-300">
        {post.summary}
      </p>
      <Link to={`/blog/${post.slug}`} className="mt-auto text-secondary group-hover:text-white font-semibold transition-colors duration-300">
       <button className='group-hover:text-white  bg-primary text-white group-hover:bg-secondary'>
         Read More
       </button>
       
      </Link>

    </div>
  </div>
</div>
      ))}
    </div>
  </div>
);

export default Blog;
