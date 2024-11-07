import React from 'react';

const BlogItem = ({ image, author, date, title, description, link }) => {

  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-blog-item wow fadeInLeft" data-wow-delay=".4s">
        <div className="blog-bg">
          <img src={image} alt={title} />
        </div>
        <div className="blog-content">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
