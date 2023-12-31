import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={blog.blogImage}
        alt="loading.."
        className="w-full h-[15rem] object-cover"
        onClick={() => navigate(`/blog-page/${blog._id}`)}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-500 text-sm mb-2">{blog.serviceCategory}</p>

        <p className="text-gray-600 h-[7rem] overflow-hidden">
          {blog.description}
        </p>
        <div className="mt-6 flex justify-end">
          <p
            className=" text-orange-500 font-semibold cursor-pointer"
            onClick={() => navigate(`/blog-page/${blog._id}`)}
          >
            Read More
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
