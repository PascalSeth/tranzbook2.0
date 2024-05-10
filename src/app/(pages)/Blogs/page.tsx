'use client'
import Carousel from '@/components/Carousel';
import React from 'react';
import { motion } from 'framer-motion';


interface BlogPost {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Future of Electric Vehicles',
    author: 'Michael Foster',
    date: 'Mar 16, 2020',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Hermes_1279-III.jpg',
  },
  {
    title: '5 Tips for a Sustainable Commute',
    author: 'Lindsay Walton',
    date: 'Mar 10, 2020',
    imageUrl: 'https://cdn.prgloo.com/media/ed5c0dc68250460f9f716bb21d3cece6.jpg?width=968&height=1452',
  },
  {
    title: 'Exploring Public Transportation Systems',
    author: 'Tom Cook',
    date: 'Feb 12, 2020',
    imageUrl: 'https://i0.wp.com/londonblog.tfl.gov.uk/wp-content/uploads/2021/09/bus-by-houses-of-parliament.jpg?fit=1200%2C800&ssl=1',
  },
  {
    title: 'The Rise of Ride-Sharing Services',
    author: 'Lindsay Walton',
    date: 'Mar 10, 2020',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/NICE_1916_bus_runs_on_N20G_on_Roosevelt_Avenue%2C_Flushing%2C_NY.jpg',
  },
  {
    title: 'The Impact of Autonomous Vehicles on Cities',
    author: 'Lindsay Walton',
    date: 'Mar 10, 2020',
    imageUrl: 'https://www.masabi.com/wp-content/uploads/2020/02/nice-bus.jpg',
  },
  {
    title: 'The Future of High-Speed Rail',
    author: 'Lindsay Walton',
    date: 'Mar 10, 2020',
    imageUrl: 'https://transdevna.com/wp-content/uploads/2023/11/artic.png',
  },
];


const Blog: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Carousel />
      <div className="w-full mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-4">From the blog</h1>
        <p className="text-center mb-8">Learn how to grow your business with our expert advice.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-[2pc]  hover:cursor-pointer h-72 w-96 max-lg:w-full max-lg:h-60 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover max-h-64 object-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-55">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-sm">{post.date} • {post.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;