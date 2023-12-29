import React from 'react'
import './Timeline.css'
function Timeline() {
  const today = new Date();

  let day = today.getDate().toString()
  if ((/([1][1-3])/g).test(day)) {
    day = day + 'th'
  } else if (day.charAt(day.length - 3) === '1') {
    day = day + 'st'
  } else if (day.charAt(day.length - 1) === '2') {
    day = day + 'nd'
  } else if (day.charAt(day.length - 1) === '3') {
    day = day + 'rd'
  } else {
    day = day + 'th'
  }
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']
  const month = months[today.getMonth()]
  const year = today.getFullYear()
  return (
      <section className='timeline-web'>
        <div className="now container">
          <p>Advent of Code - Practicing JavaScript and TDD</p>
        </div>
        <div className='update-timeline'>
          <p>NEXT</p>
          <div>
            <h1>TODAY</h1>
            <p>{day}</p>
            <p>{month}</p>
            <p>{year}</p>
          </div>
        </div>
        <div className="next container">
          <p>Exploring TypeScript by converting  katas completed using JavaScript during Northcoders bootcamp.</p>
          <p>Creating mobile version of this website</p>
          <p>FreeCodeCamp - JavaScript Algorithms and Data Structures</p>
          <p>Tailwind CSS</p>
          <p>Angular</p>
          <p>Vue.js</p>
        </div>
        <div className='flex-done'>
          <div className='timeline'>
            <p className='november-2023 date'>November</p>
            <p className='october-2023 date'>October</p>
            <p className='september-2023 date'>September</p>
            <p className='august-2023 date'>August</p>
            <p className='july-2023 date'>July</p>
            <p className='june-2023 date'>June</p>
            <p className='may-2023 date'>May</p>
            <p className='april-2023 date'>April</p>
            <p className='march-2023 date'>March</p>
            <p className='february-2023 date'>February</p>
            <p className='january-2023 date'>January</p>
            <p className='year-2022 year'>2022</p>
            <p className='december-2022 date'>December</p>
            <p className='november-2022 date'>November</p>
            <p className='october-2022 date'>October</p>
            <p className='september-2022 date'>September</p>
            <p className='august-2022 date'>August</p>
            <p className='july-2022 date'>July</p>
            <p className='june-2022 date'>June</p>
            <p className='may-2022 date'>May</p>
            <p className='april-2022 date'>April</p>
            <p className='march-2022 date'>March</p>
            <p className='february-2022 date'>February</p>
            <p className='january-2022 date'>January</p>
            <p className='year-2021 year'>2021</p>
            <p className='december-2021 date'>December</p>
            <p className='november-2021 date'>November</p>
            <p className='october-2021 date'>October</p>
            <p className='september-2021 date'>September</p>
            <p className='august-2021 date'>August</p>
            <p className='july-2021 date'>July</p>
            <p className='june-2021 date'>June</p>
            <p className='may-2021 date'>May</p>
            <p className='april-2021 date'>April</p>
            <p className='march-2021 date'>March</p>
            <p className='february-2021 date'>February</p>
            <p className='january-2021 date'>January</p>
            <p className='year-2020 year'>2020</p>
            <p className='december-2020 date'>December</p>
            <p className='november-2020 date'>November</p>
            <p className='october-2020 date'>October</p>
            <p className='september-2020 date'>September</p>
            <p className='august-2020 date'>August</p>
            <p className='july-2020 date'>July</p>
            <p className='june-2020 date'>June</p>
            <p className='may-2020 date'>May</p>
            <p className='april-2020 date'>April</p>
            <p className='march-2020 date'>March</p>
            <p className='february-2020 date'>February</p>
            <p className='january-2020 date'>January</p>
            <p className='year-2019 year'>2019</p>
            <p className='december-2019 date'>December</p>
            <p className='november-2019 date'>November</p>
            <p className='october-2019 date'>October</p>
            <p className='september-2019 date'>September</p>
            <p className='august-2019 date'>August</p>
            <p className='july-2019 date'>July</p>
            <p className='june-2019 date'>June</p>
            <p className='may-2019 date'>May</p>
            <p className='april-2019 date'>April</p>
            <p className='march-2019 date'>March</p>
            <p className='february-2019 date'>February</p>
            <p className='january-2019 date'>January</p>
            <p className='year-2018 year'>2018</p>
            <p className='december-2018 date'>December</p>
            <p className='november-2018 date'>November</p>
            <p className='october-2018 date'>October</p>
            <p className='september-2018 date'>September</p>
            <p className='august-2018 date'>August</p>
            <p className='july-2018 date'>July</p>
            <p className='june-2018 date'>June</p>
            <p className='may-2018 date'>May</p>
            <p className='april-2018 date'>April</p>
            <p className='march-2018 date'>March</p>
            <p className='february-2018 date'>February</p>
            <p className='january-2018 date'>January</p>
            <p className='year-2017 year'>2017</p>
            <p className='december-2017 date'>December</p>
            <p className='november-2017 date'>November</p>
            <p className='october-2017 date'>October</p>
            <p className='september-2017 date'>September</p>
            <p className='august-2017 date'>August</p>
            <p className='july-2017 date'>July</p>
            <p className='june-2017 date'>June</p>
            <p className='may-2017 date'>May</p>
            <p className='april-2017 date'>April</p>
            <p className='march-2017 date'>March</p>
            <p className='february-2017 date'>February</p>
            <p className='january-2017 date'>January</p>
          </div>
          <div className='jobs-right'>
            <div className="done container bootcamp">
              
              <div className="content">
                <p>Trainee Software Engineer - 13 weeks - Northcoders</p>
              </div>
            </div>
            <div className="done container basics">
              <div className="content">
                <p>Precourse katas</p>
                <p>Entry Challenge on 13 June 2023</p>
                <p>Learning basics of JavaScript on Northcoder's precourse</p>
              </div>
            </div>
            <div className="done container creams">
              <div className="content">
                <p>Team member - Creams Café</p>
              </div>
            </div>
          </div>
          <div className='jobs-left'>
            <div className="done container newchem2">
              <div className="content">
                <p>Research Assistant - 1 year - NewChem Technologies</p>
                <p>Synthesis of organic chemical compounds for reasearch or patent purposes.</p>
              </div>
            </div>
            <div className="done container uni">
              <div className="content">
                <p>Master of Chemistry with Medicinal Chemistry</p>
                <p>2.1 - Newcastle University</p>
              </div>
            </div>
            <div className="done container northumbria">
              <div className="content">
                <p>Chemistry - 1st year</p>
                <p>Northumbria University</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Timeline