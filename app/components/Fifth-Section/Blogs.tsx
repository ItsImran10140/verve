/* eslint-disable @next/next/no-img-element */

const BlogsData = [
  {
    image: "/Blog_01.png",
    title: "Design System",
    topic: "Structured Layers",
    descriptionFirst: " Lorem ipsum dolor sit amet, consectetur adipiscing",
    descriptionSecond:
      " elit. Integer et turpis nunc. Nulla justo nibh, convallis.",
  },
  {
    image: "/Blog_02.png",
    title: "Verve Project",
    topic: "Build Pages with verve",
    descriptionFirst: " Lorem ipsum dolor sit amet, consectetur adipiscing",
    descriptionSecond:
      " elit. Integer et turpis nunc. Nulla justo nibh, convallis.",
  },
  {
    image: "/Blog_03.png",
    title: "Design System",
    topic: "Structured Layers",
    descriptionFirst: " Lorem ipsum dolor sit amet, consectetur adipiscing",
    descriptionSecond:
      " elit. Integer et turpis nunc. Nulla justo nibh, convallis.",
  },
];

const Blogs = () => {
  return (
    <div className="flex gap-4 mt-10">
      {BlogsData.map((data, index) => (
        <div key={index}>
          <img
            src={data.image}
            alt="Blog second Image"
            className="border border-zinc-400/30 rounded-3xl"
          />
          <div className="p-2">
            <p className="text-zinc-400 my-4 text-sm">{data.title}</p>
            <p className="text-zinc-200 font-semibold text-2xl">{data.topic}</p>
            <p className="text-zinc-400 my-4 text-sm">
              {data.descriptionFirst} <br /> {data.descriptionSecond}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
