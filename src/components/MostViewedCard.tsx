import { Link } from 'react-router-dom';
import Post from '../interfaces/Post';
interface MostViewedCardProps {
  post: Post;
}

function MostViewedCard({ post }: MostViewedCardProps) {
  return (
    <div className="w-grid-12 lg:w-grid-4 m-4 card flex flex-col">
      <Link
        to={`/post/${post.id}`}
        className="flex flex-col flex-1 hover:opacity-100"
      >
        <div>
          <div className="thumb overflow-hidden">
            <a href="">
              <img src={post.imageUrl} />
            </a>
          </div>

          <div className="mt-4 px-4 flex flex-col flex-1 justify-between">
            <div>
              <h6 className="text-gray-5">{post.date}</h6>

              <h6 className="uppercase tracking-[2px] text-primary-light">
                {post.category}
              </h6>

              <h4>{post.title}</h4>

              <p className="mt-2">{post.resume}</p>
            </div>

            <div className="my-6">
              <a href="" className="text-primary-light">
                Ler mais
              </a>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MostViewedCard;
