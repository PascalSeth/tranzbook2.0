import React from "react";

const AboutUs: React.FC = () => {
  const sections = [
    {
      title: "About Us",
      imageSrc: "https://cdn-egjbg.nitrocdn.com/BhxGwttHKWrbABsTLrAHuTigMVSocCMN/assets/images/optimized/rev-0486da7/www.masterstransportation.com/wp-content/uploads/2021/02/group-transportation-for-team-building-1080x500.jpg",
      imageAlt: "A group of People",
      content: "TranzBook is a transportation and logistics technology platform offering bus ticket booking and cargo vehicle services through web and mobile applications. It allows travelers to search for bus routes, view schedules, and securely book tickets online, with options to select seats and receive real-time updates on bus status and arrival times. For cargo booking, users can locate nearby vehicles, book transportation services, track goods in real-time, receive delivery notifications, and manage shipments. TranzBook utilizes advanced logistics software and GPS tracking to optimize routes, reduce costs, improve delivery efficiency, and enhance the overall customer experience for both travelers and cargo shippers."
    },

  ];
  const Goalsections = [
    {
      title: "Our Goals",
      imageSrc: "https://i.pinimg.com/736x/4d/22/a8/4d22a85689d237715d502013cd9cc5d7.jpg",
      imageAlt: "A group of People",
      content: "1. Be the number one transportation and logistics partner in Africa\n\n 2. Create a community of travelers, shippers, and carriers who share our vision of a more connected and sustainable future, and work together to build a transportation ecosystem that is inclusive, transparent, and accessible to all\n\n3. Become the go-to technology provider for transportation solutions in the country, by offering the most comprehensive, user-friendly, and efficient platform for online bus ticketing and cargo/truck booking services, while ensuring the highest standards of safety, security, and sustainability"
    }
  ];

  const teamMembers = [
    {
      name: "Andres Berlin",
      role: "Chief Executive Officer",
      description: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
      imageSrc: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
      socialLinks: [
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg",
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg",
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
      ]
    },

    {
        name: "Andres Berlin",
        role: "Chief Executive Officer",
        description: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
        imageSrc: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
        socialLinks: [
          "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg",
          "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg",
          "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
        ]
      },

      {
        name: "Andres Berlin",
        role: "Chief Executive Officer",
        description: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
        imageSrc: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
        socialLinks: [
          "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg",
          "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg",
          "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
        ]
      },
];

  return (
    <div className="flex flex-col overflow-x-hidden w-full items-center ">
      <div className="px-20 py-5">
      {sections.map((section, index) => (
        <div key={index} className=" mb-16 w-full flex flex-col items-center lg:flex-row justify-between gap-5">
          <div className="w-full flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">{section.title}</h1>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">{section.content}</p>
          </div>
          <div className="w-full">
            <img className="w-full h-full max-h-80 rounded-[2pc]" src={section.imageSrc} alt={section.imageAlt} />
          </div>
        </div>
      ))}
         {Goalsections.map((section, index) => (
          <div key={index} className=" w-full flex flex-col items-center lg:flex-row-reverse justify-between gap-5">
            <div className="w-full flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">{section.title}</h1>
              <div className="font-normal text-base leading-6 text-gray-600 dark:text-white">
                <ol className=" space-y-3">
                  {section.content.split("\n\n").map((goal, idx) => (
                    <li key={idx}>{goal}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="w-full">
              <img className="w-full h-full max-h-80 rounded-[2pc]" src={section.imageSrc} alt={section.imageAlt} />
            </div>
          </div>
        ))}
      </div>
      
      <div className="container flex flex-col justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 dark:text-gray-200 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="mt-5 relative">
              <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                <div className="flex justify-center">
                  <div className="h-32 w-32">
                    <img src={member.imageSrc} alt={"Display Picture of " + member.name} role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold dark:text-white text-3xl text-center mb-1">{member.name}</h1>
                  <p className="text-gray-800 dark:text-white text-sm text-center">{member.role}</p>
                  <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">{member.description}</p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    {member.socialLinks.map((link, i) => (
                      <a key={i} href="javascript:void(0)" className="mx-5">
                        <div aria-label={member.name} role="img">
                          <img src={link} alt={member.name + " " + (i + 1)} />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
