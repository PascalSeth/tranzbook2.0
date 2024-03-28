import Carousels from '@/components/Carousel';
import Image from 'next/image';
import React from 'react';

interface Blog {
  image: string;
  title: string;
  time: string;
  description: string;
}

  const blogs: Blog[] = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Hermes_1279-III.jpg',
      title: 'How to improve public transportation in urban areas',
      time: '10th Oct 2022',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis"
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Hermes_1279-III.jpg',
      title: 'The future of electric vehicles: Challenges and opportunities',
      time: '10th Oct 2022',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis"
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Hermes_1279-III.jpg',
      title: 'The impact of ride-sharing on urban transportation systems',
      time: '10th Oct 2022',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis"
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Hermes_1279-III.jpg',
      title: 'Sustainable transportation: Building a greener future',
      time: '10th Oct 2022',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis"
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Hermes_1279-III.jpg',
      title: 'The role of technology in modern transportation',
      time: '10th Oct 2022',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis"
    }
  ];
function Blogs() {
  return (
    <div className="flex flex-col items-center">
      <Carousels/>
     
     <div className='w-full p-8'>
  <h1 className='text-[#fdb004] text-4xl p-3 font-bold'>
    <span className='bg-gradient-to-l from-blue-500 to-gray-600 text-transparent bg-clip-text'>BLOG</span>S
  </h1>
</div>

      <div className="grid grid-cols-4  flex-col max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <div key={index}>
          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src={blog.image}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <time className="block text-xs text-gray-500">{blog.time}</time>
              <a href="#" className="mt-2 block text-lg font-semibold text-gray-800 hover:text-blue-600">{blog.title}</a>
              <p className="mt-2 text-sm text-gray-700">{blog.description}</p>
            </div>
          </article>
        </div>
      ))}</div>
    </div>
  );
}

export default Blogs;
