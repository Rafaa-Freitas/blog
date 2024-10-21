import BlogImageSvg from '/images/blog.svg';

function About() {
  return (
    <section className="container-layout justify-center items-center">
      <div className="flex flex-wrap w-full">
        <div className="w-grid-12 lg:w-grid-6 m-4 py-4">
          <h1 className="h0">
            blog
            <span className="text-primary-normal inline-block relative">.</span>
          </h1>

          <p className="mt-2">
            O Blog é um projeto desenvolvido em React e Tailwind.
          </p>

          <a href="#" className="btn mt-8">
            Saber mais
          </a>
        </div>
        <div className="w-grid-12 lg:w-grid-6 m-4 py-4">
          <img src={BlogImageSvg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
