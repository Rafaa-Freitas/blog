import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostInterface from '../../interfaces/Post';
import api from '../../services/api';
import ENDPOINTS from '../../services/endpoints';
import { AxiosResponse } from 'axios';
import UserInterface from '../../interfaces/User';

function Post() {
  const { idPost } = useParams();
  const [currentPost, setCurrentPost] = useState<PostInterface | null>(null);
  const [postAuthor, setPostAuthor] = useState<UserInterface | null>(null);

  useEffect(() => {
    if (idPost) {
      api
        .get(ENDPOINTS.getPost(idPost))
        .then((response: AxiosResponse<PostInterface>) => {
          setCurrentPost(response.data);

          api
            .get(ENDPOINTS.getUser(response.data.id_user))
            .then((response: AxiosResponse<UserInterface>) => {
              setPostAuthor(response.data);
            });
        });
    }
  }, [idPost]);

  return (
    <section className="container-layout">
      <h6 className="uppercase text-center tracking-[2px] text-primary-light">
        {currentPost?.category}
      </h6>

      <h3 className="text-center">{currentPost?.title}</h3>

      <div className="flex justify-center items-center my-6">
        {/* <div className="profile">
          <img
            src={postAuthor?.imageProfile}
            className="profile-img"
            alt="Autor"
          />
        </div>

        <div className="ml-4">
          <h6 className="text-primary-light">
            {postAuthor?.name} {postAuthor?.surname}
          </h6>
          <h6 className="text-gray-5">Autor</h6>
        </div> */}

        <p className="ml-8 text-gray-5">
          {currentPost?.date} - {currentPost?.duration} min read
        </p>
      </div>

      <div className="img-banner overflow-hidden">
        <img src={currentPost?.imageUrl} alt="Imagem do post" />
      </div>

      <div className="flex flex-wrap w-full my-6">
        <h4>{currentPost?.resume}</h4>

        <p className="mt-2">{currentPost?.content}</p>
      </div>

      <div className="flex flex-wrap w-full my-6 justify-center">
        <div className="w-grid-12 lg:w-grid-6 m-4 py-4 card">
          <div className="flex flex-wrap w-full">
            <div className="w-grid-12 lg:w-grid-3 m-4 py-4 pl-2 justify-center">
              <div>
                <img
                  src={postAuthor?.imageProfile}
                  alt="Autor"
                  className="profile-img"
                />
              </div>
            </div>

            <div className="w-grid-12 lg:w-grid-9 m-4 py-4">
              <h6 className="text-primary-light">
                {postAuthor?.name} {postAuthor?.surname}
              </h6>

              <h6 className="text-gray-5">Autor</h6>
              <p className="mt-2">{postAuthor?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Post;
