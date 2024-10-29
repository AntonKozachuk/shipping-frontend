import React from 'react';
import BlogItem from './BlogItem'; // Make sure the path is correct

const BlogSection = () => {
  const blogPosts = [
    {
      image: 'assets/img/blog/1.jpg',
      author: 'Admin',
      date: '25 Feb',
      title: 'Five Importance logistics solutions for Delivery Services',
      description: 'There are some reason Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, facilis perferendis ipsam.',
      link: 'single-blog.html'
    },
    {
      image: 'assets/img/blog/2.jpg',
      author: 'Admin',
      date: '16 Jan',
      title: 'Cargo Shipment on Ocean Freight Demands Costly',
      description: 'There are some reason Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, facilis perferendis ipsam.',
      link: 'single-blog.html'
    },
    {
      image: 'assets/img/blog/3.jpg',
      author: 'Admin',
      date: '01 Jan',
      title: 'We believe in building long lasting our business relationships',
      description: 'There are some reason Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, facilis perferendis ipsam.',
      link: 'single-blog.html'
    }
  ];

  return (
    <div className="blog-area gray-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="section-title">
              <h6>Blog</h6>
              <h2>What <b>happen</b> inside our <b>company</b></h2>
            </div>
          </div>

          <div className="col-lg-6 text-right">
            {/* Optional additional content */}
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <BlogItem
              key={index}
              image={post.image}
              author={post.author}
              date={post.date}
              title={post.title}
              description={post.description}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;