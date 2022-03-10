import hommer from "./Components/Images/hommer.gif"
import reinhabit from "./Components/Images/reinhabit.gif"
import tvShows from "./Components/Images/tv_shows.png"
import subCity from "./Components/Images/sub-city.gif"

export const projects = [
    {
      title: "Sub-city Events",
      subtitle: "PERN Stack with TypeScript",
      description:
        "Event planning app with stripe payment api allows the user to plan custom events and distribute details and invitations between third parties via a link",
      image: subCity,
      link: "https://sub-city.netlify.app/",
    },
    {
      title: "Code Runner",
      subtitle: "JavaScript & Node.js",
      description:
        "An app where users can anonymously post journal entries for other people to see, comment on and react to using emojis.",
      image: hommer,
      link: "https://coderunners.netlify.app/",
    },
    {
      title: "ReinHabit",
      subtitle: "JavaScript & Postgress",
      description:
        "Habit tracking app where users can make an account and create habits for themselves to track and update with visual data.",
      image: reinhabit,
      link: "https://reinhabit.netlify.app",
    },
    {
        title: "Tv Shows App",
        subtitle: "React Hooks",
        description:
          "Tv shows app, displays relevent information about the show and indiviual episodes",
        image: tvShows,
        link: "https://compassionate-agnesi-6be84b.netlify.app/",
      },
    ];


export const skills = [ "TypeScript", "JavaScript" , "React", "MongoDB", "SQL", "Node.js", "Python", "Flask" , "Docker", "Html/Css" ]
