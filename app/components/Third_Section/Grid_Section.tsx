/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
const CardDetails = [
  {
    title: "Responsive Break Points",
    icon: "/Feature Icon 01.svg",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit commodo ornare.",
    footerDescription: "Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    title: "Easy to Customize",
    icon: "/Feature Icon 02.svg",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit commodo ornare.",
    footerDescription: "Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    title: "Framer CMS",
    icon: "/Feature Icon 03.svg",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit commodo ornare.",
    footerDescription: "Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    title: "Structured Layers",
    icon: "/Feature Icon 05.svg",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit commodo ornare.",
    footerDescription: "Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    title: "Text Effects",
    icon: "/Feature Icon 04.svg",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit commodo ornare.",
    footerDescription: "Vestibulum lobortis ligula vehicula, semper.",
  },
  {
    title: "Time Animations",
    icon: "/Feature Icon 06.svg",
    descriptionFirst: "Lorem ipsum dolor sit amet, consectetur",
    descriptionSecond: "adipiscing elit commodo ornare.",
    footerDescription: "Vestibulum lobortis ligula vehicula, semper.",
  },
];

const Grid_Section = () => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-3 text-white w-[80%] mx-auto mt-15">
        {CardDetails.map((data, i) => (
          <div
            key={i}
            className="border-[0.75px] border-zinc-100/10 bg-zinc-100/4 m-2 rounded-3xl p-8"
          >
            <img src={data.icon} alt="Feature Icons" className="mb-8" />
            <p className="text-2xl mb-4 font-semibold">{data.title}</p>
            <p className="text-sm text-zinc-400">
              {data.descriptionFirst} <br /> {data.descriptionSecond}
            </p>
            <p className="text-sm mt-6 text-zinc-400">
              {data.footerDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid_Section;
