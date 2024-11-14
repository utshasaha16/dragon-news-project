

import { FaRegEye } from 'react-icons/fa';
import { FaStar, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({singleNews}) => {
    const {thumbnail_url,  total_view,  rating, details, author, title} = singleNews;
  
    return (
    <div className="p-4 card bg-base-100 rounded-none shadow-xl">
        {/* Author Information */}
        <div className="flex items-center mb-4">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{author.published_date}</p>
          </div>
        </div>
        {/* Title */}
        <h2 className="card-title text-lg font-bold">{title}</h2>
      {/* Image */}
      <figure>
        <img src={thumbnail_url} alt="News Thumbnail" className="w-full h-60 object-cover rounded-lg " />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Details */}
        <p className="text-sm text-gray-700">
          {details.slice(0, 150)}... <Link to={`/news/${singleNews._id}`} className="text-blue-500">Read More</Link>
        </p>

        {/* Footer */}
        <div className="card-actions justify-between items-center mt-4">
          {/* Rating */}
          <div className="flex items-center text-yellow-500">
            <span className="font-bold mr-2">{rating.number}</span>
            <span>{rating.badge}</span>
          </div>

          {/* Views and Share */}
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <FaRegEye className="mr-2" />
              {total_view}
            </div>
            <FaShareAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
