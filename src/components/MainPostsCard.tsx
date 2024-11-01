import { useEffect, useState } from 'react';
import Post from '../interfaces/Post';
import User from '../interfaces/User';
import api from '../services/api';
import ENDPOINTS from '../services/endpoints';
import { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

interface MainPostsCardProps {
  mainPost: Post;
}

function MainPostsCard({ mainPost }: MainPostsCardProps) {
  const [user, setUser] = useState<User>();
  const userId = mainPost.id_user;

  useEffect(() => {
    if (mainPost) {
      api
        .get(ENDPOINTS.getUser(userId))
        .then((response: AxiosResponse<User>) => {
          setUser(response.data);
        });
    }
  }, [userId, mainPost]);

  return (
    <div className="border-b border-black-light py-8">
      <h6 className="text-gray-5">{mainPost.date}</h6>
      <h6 className="uppercase tracking-[2px] text-primary-light">
        {mainPost.category}
      </h6>

      <Link to={`/post/${mainPost.id}`}>
        <h4>{mainPost.title}</h4>
      </Link>

      <p className="mt-2">{mainPost.resume}</p>

      <div className="flex items-center justify-start mt-6">
        <div className="profile">
          <img
            src="./images/rafaelfreitas.png"
            className="profile-img"
            alt=""
          />
        </div>
        <div className="ml-2">
          <h6 className="text-primary-light">
            {user?.name} {user?.surname}
          </h6>
          <h6 className="text-gray-5">{`@${user?.user}`}</h6>
        </div>
      </div>
    </div>
  );
}

export default MainPostsCard;
