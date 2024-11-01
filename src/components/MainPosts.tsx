import { useEffect, useState } from 'react';
import MainPostsCard from './MainPostsCard';
import api from '../services/api';
import ENDPOINTS from '../services/endpoints';
import { AxiosResponse } from 'axios';
import Post from '../interfaces/Post';

function MainPosts() {
  const [mainPosts, setMainPosts] = useState<Post[]>([]);

  useEffect(() => {
    api
      .get(ENDPOINTS.getAllPosts('?star=5&_limit=2&_order=desc'))
      .then((response: AxiosResponse<Post[]>) => {
        setMainPosts(response.data);
      });
  }, []);

  return (
    <section className="container-layout">
      <div className="flex flex-wrap w-full">
        <div className="w-grid-12 lg:w-grid-6 m-4 py-4">
          <img
            src="./images/icon-star.svg"
            className="max-w-[120px] transition-all duration-500 ease-in-out max-lg:max-w-24"
          />
          <h3 className="mt-4">Os melhores e mais bem votados posts do mês.</h3>
          <p className="mt-4">
            Aqui apareceram os 2 posts mais recentes que receberam nota de 5
            estrelas.
          </p>
        </div>

        <div className="w-grid-12 lg:w-grid-6 m-4 py-4">
          {mainPosts.map((item) => {
            return (
              <MainPostsCard key={item.id} mainPost={item}></MainPostsCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MainPosts;
