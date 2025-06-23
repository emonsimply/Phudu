import React, { useEffect, useState } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);    
      });
  }, []);

  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{blog.question}</h2>
            <p className="text-gray-700">{blog.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
