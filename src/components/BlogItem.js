import React from 'react';

const BlogItem = ({ image, author, date, title, description, link }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="single-blog-item wow fadeInLeft" data-wow-delay=".4s">
        <div className="blog-bg">
          <img src={image} alt="" />
        </div>
        <div className="blog-content">
          <p className="blog-meta">
            <i className="las la-user-circle"></i> {author} | <i className="las la-calendar-check"></i> {date}
          </p>
          <h5>
            <a href={link}>{title}</a>
          </h5>
          <p>{description}</p>
          <a href={link} className="read-more">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;