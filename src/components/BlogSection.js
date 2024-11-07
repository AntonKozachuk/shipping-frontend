import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogItem from './BlogItem'; // Make sure the path is correct

const BlogSection = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      image: '/shipping-frontend/assets/img/blog/2.jpg',
      author: t('home.advantages.author'),
      date: '25 Feb',
      title: t('home.advantages.oneT'),
      description: t('home.advantages.one'),
      link: 'single-advantages.html'
    },
    {
      image: '/shipping-frontend/assets/img/blog/4.jpg',
      author: t('home.advantages.author'),
      date: '16 Jan',
      title: t('home.advantages.twoT'),
      description: t('home.advantages.two'),
      link: 'single-advantages.html'
    },
    {
      image: '/shipping-frontend/assets/img/blog/1.jpg',
      author: t('home.advantages.author'),
      date: '01 Jan',
      title: t('home.advantages.threeT'),
      description: t('home.advantages.three'),
      link: 'single-advantages.html'
    },
    {
      image: '/shipping-frontend/assets/img/blog/3.jpg',
      author: t('home.advantages.author'),
      date: '01 Jan',
      title: t('home.advantages.fourT'),
      description: t('home.advantages.four'),
      link: 'single-advantages.html'
    }
  ];

  return (
    <div className="blog-area gray-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="section-title">
              <h2>{t('home.advantages.title')}</h2>
            </div>
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
