import React from "react";

const BlogPost = ({ title, date, excerpt }) => {
  return (
    <div className="p-4 bg-slate-100 rounded-lg mb-3">
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-sm mb-4 tracking-wider font-bold text-slate-500">
        {date}
      </p>
      <p>{excerpt}</p>
    </div>
  );
};

export default BlogPost;
