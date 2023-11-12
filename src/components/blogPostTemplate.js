import React from "react";
import { Link } from "gatsby";

const BlogPostTemplate = (props) => {
  const { title, date, excerpt, href } = props;
  return (
    <div className="p-4 bg-blue-50 rounded-lg mb-3">
      <Link to={href}>
        <h2 className="text-3xl font-semibold mb-2 hover:underline">{title}</h2>
      </Link>
      <p className="text-sm mb-4 tracking-wider font-bold text-slate-500">
        {date}
      </p>
      <p>{excerpt}</p>
    </div>
  );
};

export default BlogPostTemplate;
