import React from 'react';
import "./Styles/NGOBlogs.css";

const blogs = [
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    title: "Impact of Classical Arts on Society",
    time: "Published on Feb 10, 2025",
    description: "Explore how classical arts influence cultural heritage and personal growth.",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    title: "Reviving Traditional Music",
    time: "Published on Jan 25, 2025",
    description: "Understanding the efforts to keep traditional music alive in the modern era.",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    title: "Classical Dance as Therapy",
    time: "Published on Dec 15, 2024",
    description: "How classical dance can be used as a healing tool for mental well-being.",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    title: "Art & Culture in Education",
    time: "Published on Nov 5, 2024",
    description: "The role of art and culture in shaping a holistic educational experience.",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    title: "The Future of Classical Music",
    time: "Published on Oct 12, 2024",
    description: "A deep dive into how classical music is evolving with technology.",
  },
  {
    img: "/HeropageImage/HeropageImage4.jpg",
    title: "Podcasts on Ancient Traditions",
    time: "Published on Sep 30, 2024",
    description: "Listen to experts discussing India's rich cultural traditions and heritage.",
  },
];

const NGOBlogs = () => {
  return (
    <div className="ngo-blogs-container">
      <h2 className="ngo-blogs-heading">Our Latest Blogs</h2>
      <div className="ngo-blogs-wrapper">
        {blogs.map((blog, index) => (
          <div key={index} className="ngo-blog-box">
            <img src={blog.img} alt={blog.title} className="ngo-blog-image" />
            <div className="ngo-blog-info">
              <h3 className="ngo-blog-title">{blog.title}</h3>
              <p className="ngo-blog-time">{blog.time}</p>
              <p className="ngo-blog-description">{blog.description}</p>
              <button className="ngo-blog-read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const ABTBlog = () => {
  return (
      <div>
          <NGOBlogs />
    </div>
  )
}

export default ABTBlog