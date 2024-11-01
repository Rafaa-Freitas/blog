import { useEffect, useState } from 'react';
import Post from '../interfaces/Post';
import MostViewedCard from './MostViewedCard';
import api from '../services/api';
import { AxiosResponse } from 'axios';
import ENDPOINTS from '../services/endpoints';

function MostViewed() {
  const [mostViewed, setMostViewed] = useState<Post[]>([]);

  useEffect(() => {
    api
      .get(ENDPOINTS.getAllPosts('?_sort=views&_order=desc&_limit=3'))
      .then((response: AxiosResponse<Post[]>) => {
        setMostViewed(response.data);
      });
  }, []);

  return (
    <section className="container-layout">
      <h3>Post com mais visitas</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        provident iusto recusandae quo impedit ducimus!
      </p>

      <div className="flex flex-wrap w-full mt-8">
        {mostViewed.map((item) => {
          return <MostViewedCard key={item.id} post={item}></MostViewedCard>;
        })}
      </div>
    </section>
  );
}

export default MostViewed;
