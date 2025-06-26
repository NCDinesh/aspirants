import React from 'react';
import { useParams } from 'react-router-dom';
import * as IELTSvsPTE from '../blog/ielts-vs-pte.mdx';
import * as ChooseRightCountry from '../blog/choose-right-country.mdx';

const posts = {
  'ielts-vs-pte': {
    component: IELTSvsPTE.default,
    meta: IELTSvsPTE.meta,
  },
  'choose-right-country': {
    component: ChooseRightCountry.default,
    meta: ChooseRightCountry.meta,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) {
    return <p className="text-center text-red-500 mt-20">Post not found.</p>;
  }

  const { component: PostComponent, meta } = post;

  return (
    <article className="prose max-w-5xl mx-auto p-4">
           {meta?.title && (
        <h1 className="text-4xl font-bold text-secondary">{meta.title}</h1>
      )}
        
        {meta?.date && (
        <h1 className="text-xl font-bold text-primary mb-6">{meta.date}</h1>
      )}
      {meta?.img && (
        <div className=" h-60 md:h-80 rounded-xl overflow-hidden mb-8 max-w-3xl mx-auto">
          <img
            src={meta.img}
            alt={meta.title}
            className="w-full h-full object-contain"
          />
        </div>
      )}

 

      <PostComponent />
    </article>
  );
};

export default BlogPost;
