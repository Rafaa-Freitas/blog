import { useEffect, useState } from 'react';
import api from '../services/api';
import ENDPOINTS from '../services/endpoints';
import { AxiosResponse } from 'axios';
import Post from '../interfaces/Post';

function Banner() {
  const [banner, setBanner] = useState<Post | null>(null);

  useEffect(() => {
    api
      .get(ENDPOINTS.getAllPosts('?_sort=date&_order=desc&_limit=1'))
      .then((response: AxiosResponse<Post[]>) => {
        setBanner(response.data[0]);
      });
  }, []);

  if (banner != null) {
    return (
      <section className="container-layout">
        <div className="img-banner overflow-hidden">
          <img src={banner.imageUrl} alt="" />
        </div>
        <div className="mt-6">
          <h6 className="text-gray-5 text-center">{banner.date}</h6>
          <h6 className="uppercase tracking-[2px] text-primary-light text-center">
            {banner.category}
          </h6>

          <h3 className="text-center">{banner.title}</h3>
          <p className="mt-2 text-center">{banner.resume}</p>

          <div className="my-6 flex items-center justify-center">
            <a href="" className="text-primary-light">
              Ler mais
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
