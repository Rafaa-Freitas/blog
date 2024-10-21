import AddPost from '../../components/AddPost';

function Profile() {
  return (
    <>
      <section className="container-layout">
        <div className="flex flex-wrap w-full">
          <div className="w-grid-6 max-lg:w-grid-12 m-4 py-4 space-y-6">
            <div className="flex items-center justify-start space-x-6">
              <div className="profile-big">
                <img src="./images/rafaelfreitas.png" className="profile-img" />
              </div>

              <div>
                <h3>Rafael Freitas</h3>
                <h6 className="text-gray-5">@rafaelfreitas</h6>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              distinctio ipsam.
            </p>
          </div>
          <div className="w-grid-6 max-lg:w-grid-12 m-4 py-4 flex items-center justify-center space-x-6">
            <a href="#" className="btn">
              Meus dados
            </a>

            <a href="#" className="btn">
              Adicionar post
            </a>
          </div>
        </div>
      </section>

      <AddPost></AddPost>
    </>
  );
}

export default Profile;
