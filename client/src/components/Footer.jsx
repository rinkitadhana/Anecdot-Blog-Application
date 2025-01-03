import { FaXTwitter } from "react-icons/fa6"
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"

const Footer = () => {
  const links = [
    {
      id: 1,
      name: "Github",
      link: "https://github.com/rinkitadhana",
      icon: <FiGithub />,
    },
    {
      id: 2,
      name: "Twitter",
      link: "https://twitter.com/damnGruz",
      icon: <FaXTwitter />,
    },
    {
      id: 3,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rinkitadhana",
      icon: <FiLinkedin />,
    },

    {
      id: 4,
      name: "Instagram",
      link: "https://www.instagram.com/rnkktt",
      icon: <FiInstagram />,
    },
  ]
  return (
    <footer className=" select-none flex flex-col gap-1 items-center justify-centers py-8">
      <div className=" border-b my-4 w-[95%] border-primary dark:border-primaryDark" />
      <div className="flex flex-wrap gap-5 md:gap-4 items-center">
        {links.map((link) => (
          <a
            href={link.link}
            key={link.id}
            target="_blank"
            className=" font-medium text-xl md:text-base  md:hover:text-mainBlack/65 md:dark:hover:text-mainWhite/65 flex flex-row gap-1 items-center"
          >
            {link.icon}
            <span className=" hidden md:block"> {link.name}</span>
          </a>
        ))}
      </div>

      <div>© 2024 Anecdot. All rights reserved.</div>
    </footer>
  )
}

export default Footer
