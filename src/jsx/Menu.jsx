import '../styles/menu.css'
import CV from "../assets/CV Jakub Wiszowaty October 2024.pdf"
import { Link } from 'react-router-dom'
import OpenAI from 'openai'
import { useEffect, useState } from 'react'
function Menu({ clicked }) {
  const myCV = `Jakub Wiszowaty
Junior Software Engineer
Leeds (open to relocation) jakubwiszowaty@hotmail.com 07732 028 601
Personal Website GitHub account
I'm a curious and fast-learning junior software developer with a strong background in chemistry. I am eager to join a team with a supportive environment to develop my skills further and use my excellent problem-solving skills to contribute to real-world projects. I have experience with working in teams and independently. In the past four months, I have explored PL/SQL, Java and testing. I'm currently undertaking the Java 17 Masterclass course on Udemy. Next, I plan to obtain the OCA certification.
Technical Skills
Language(s): JavaScript, Java
Front-end: HTML, CSS, React, React Native, Tableau
Back-end: PostgreSQL, Express.js, seeding, PL/SQL
Testing: TDD, Jest, Supertest, JUnit, Selenium
Hosting: ElephantSQL, Render, Netlify
Methodologies: Agile, SCRUM
Experience
Trainee Software Engineer Ten10 May 2024 - Present
Rock Paper Scissors (Scanner): GitHub
Spring Boot REST API: GitHub
•
Completed two specialized trainings in Data Science and Software Development.
Trainee Software Engineer Northcoders Aug 2023 - Nov 2023
PSQL & React: back end repo website
PSQL & React Native: back end repo front end repo app presentation
•
The boot camp involved high-intensity learning where I learned about the industry's best practices
•
Practised collaboration in paired programming throughout the boot camp and significantly improved interpersonal skills
English Tutor Online Oct 2019 - Present
•
Prepared over 600 hours of online lessons for Polish high school students
•
Improved my students' pronunciation
•
Helped them overcome a fear of speaking in a foreign language
Research Assistant NewChem Technologies Jun 2022 - Jun 2023
• Organic synthesis of substituted amphetamines and analogues of cannabidiols
• Reversed and normal phase purification of organic compounds using Biotage
• Analytical methods used: NMR, LC-MS, HPLC
Research Project BiBerChem Research Aug - Sept 2021
•
Supervision: Prof. Bernard T Golding
•
Organic synthesis of analogues of barbituric acid
• Purification using manual column chromatography and recrystallisation
•
Analytical methods used: LC-MS, HPLC, NMR (1H, 13C, 19F)
Summer Intern NewChem Technologies Aug - Sept 2020
• Organic synthesis of analogues of cannabidiols
Team Member Creams Café Newcastle Jul 2017 - Aug 2021
•
Worked efficiently with a team of 13 staff members in a busy restaurant environment
•
Maintained clean working space and shared responsibilities of a waiter, kitchen porter, cashier
Education
Master of Chemistry (2:1) Newcastle University Oct 2018 - June 2022
Volunteer Work
RVI Newcastle Hospitals NHS Foundation Trust:
Vaccination Centre "Centre For Life" in Newcastle Oct - Dec 2021
•
4-hour shift on Sundays for three months
•
Welcomed and directed patients in the centre to the check-in desks and kept them company in the queue, which in many cases distracted them from their fear of vaccination
•
Organised a line for patients under 18 to maintain a good flow of patients and their parents and made sure their visit was as comforting as possible
Pharmacy Department Feb 2022
•
4-hour shift on Sundays for three weeks
•
Contacted COVID-19 patients with underlying conditions to confirm their details and dispatched their medication to their homes.
Emergency Department Oct - Dec 2022
•
4-hour night shift on Saturdays
•
While in the A&E department, I conversed with patients and comforted them with available food and beverages. I also helped communicate between the nurses/doctors and patients and notified the personnel about anything that needed attention.`;
  const [ reason, setReason ] = useState()
  const openai =  new OpenAI({apiKey:import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true})
  
  const giveAMillionReasons = async () => {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
          { role: "system", content: "You are generating a single sentence responses." },
          {
              role: "user",
              content: `Why would Jakub make an exceptional Software Engineer based on his CV: ${myCV}. You don't have to relate to everything there is, but show how two different experiences make him interesting. Response maximum 10 words. Always use his name in response.`,
          },
      ],
    });
    setReason(completion.choices[0].message.content)
  }

  const tabs = [{tab: 'Simple Java Programs', endpoint: '/', label: 'sjp-nav'}, {tab: 'Coding projects', endpoint: '/projects', label: "projects-nav"}, {tab: '❄️ Advent of Code ❄️', endpoint: '/aoc', label: "aoc-nav"}, {tab: 'Blender', endpoint: '/blender', label: "blender-nav"}]
  useEffect(() => {
    
    giveAMillionReasons()
  },[])
  return (
    <section className='menu'>
      <div className='menu-top'>
        <div className='name'>
          <h1 className='first'>Jakub</h1>
          <h1 className='surname'>Wiszowaty</h1>
        </div>
        <nav className="nav">
          <Link to={CV} target='_blank'>CV</Link>
            {
            tabs.map(({ tab, endpoint, label}, index) => {
              if (clicked == tab) {
                return <p className={"active " + label} key={index}>{tab}</p>
              } else {
                return <Link className={label} to={endpoint} key={index}>{tab}</Link>
              }
              })
            }
        </nav>
      </div>
      <div className='menu-bottom'>
        {reason}
      </div>
    </section>
  )
}

export default Menu