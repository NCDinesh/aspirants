import React from 'react';
import { FaNewspaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import IELTSvsPTE from '../blog/ielts-vs-pte.mdx';
import ChooseRightCountry from '../blog/choose-right-country.mdx';

const posts = [
  {
    title: IELTSvsPTE.meta?.title || 'IELTS vs PTE',
    img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
    summary: 'A detailed comparison of IELTS and PTE for students planning to study abroad.',
    category: IELTSvsPTE.meta?.category || 'Test Prep',
    date: IELTSvsPTE.meta?.date || '2024-06-01',
    slug: 'ielts-vs-pte',
  },
  {
    title: ChooseRightCountry.meta?.title || 'How to Choose the Right Country for Study Abroad',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    summary: 'Explore key factors to consider when selecting your study destination, from academics to lifestyle.',
    category: ChooseRightCountry.meta?.category || 'Guides',
    date: ChooseRightCountry.meta?.date || '2024-06-10',
    slug: 'choose-right-country',
  },

];

const Blog = () => (
  <div className="max-w-5xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-2">
      <FaNewspaper /> Blog & News
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.map(post => (
        <div key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
          <img src={post.img} alt={post.title} className="w-full h-40 object-cover" />
          <div className="p-6 flex-1 flex flex-col">
            <div className="text-xs text-secondary mb-1">
              {post.category} • {new Date(post.date).toLocaleDateString()}
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">{post.title}</h3>
            <p className="mb-4 text-gray-600">{post.summary}</p>
            <Link to={`/blog/${post.slug}`} className="mt-auto text-secondary font-semibold hover:underline">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Blog;
