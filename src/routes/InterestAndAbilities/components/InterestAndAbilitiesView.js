import React from 'react'
import './InterestAndAbilitiesView.scss'
import { Button } from 'reactstrap'
import { Link } from 'react-router'

const InterestAndAbilities = () => (
  <div>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='content'>
            <section>
              <h2>Management</h2>
              <p>In Highschool, I wrote an essay about what makes me a leader (focusing on Technology sector)
              and received a scholarship for it. In all reality, I was not expecting to get anything out of it.
              I wrote what I believed, and I guess someone believed it too. In all my college group projects,
              I often coordinated meeting times that worked for everyone and
              helped manage tasks that needed to be done before the deadline.
              This lead to getting important functions done and at the same
              time developing friendships with my peers.</p>
              <h2>Development & Programming</h2>
              <p>At the age of 10 or 11, I developed an interest in computer,
              In particular how I could speed up the old Windows 95 Desktop Computer.
              I later gravitated towards Reading & Modifying Code,
              and finally reached the level where I could create my own code and revise older codes.</p>
              <h2>Communication</h2>
              <p>I have a lot of presentation experiences from courses like Intermediate and
              Advanced Software engineering, Database,
              and competitions like the HackathonRegina2014.
              Check out my&nbsp;
              <a href='https://onedrive.live.com/redir?resid=D089BA0640A02804!67191&amp;authkey=!ANlLBx7DDfQNa2k&amp;ithint=folder%2c'>
              Shared Projects</a>&nbsp;for Presentations and Reports for class projects.</p>
              <h2>Organization</h2>
              <p>I use Microsoft Office on a daily basis.
              It keeps me organized.
              Every since Year 3 of University, I've been writing my school notes down in OneNote.
              At first it was challenging (especially for math) but I later developed a system that works amazing.
              It's kept my notes so organized that I have an urge to share my system with the world.
              So one of my projects is to make video tutorials on how to create effective notes for school.</p>
              <p>I love creating templates.
              It helps me stay consistent and it also helps me in the brainstorming and creative process.
              Essentially it allows me to think... "What do I actually need".
              It also helps me separate the interface from the content (exactly like how this page was made).</p>
              <h2>Security & Saftey</h2>
              <p>Information Security
              (<a href='http://ocw.usask.ca/AR/CMPT/352/' /><a href='http://ocw.usask.ca/AR/CMPT/352/' /><a href='http://ocw.usask.ca/AR/CMPT/352/'>CMPT 352</a>)
              is a recent interest. It's constantly on my mind as I code.
              I've taken a class in Information Security and have peers that are big on Security and hacking issues.
              I learn a lot from them. Recently, I've worked on overthewire.org/wargames/natas/ problems.
              They are interesting and I recommend anyone interested in Information Security to check it out.</p>
              <div className='text-center'>
                <Link to='/'>
                  <Button color='link'>&laquo; Introduction</Button>
                </Link>
                <Link to='/education'>
                  <Button color='link'>Education &raquo;</Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default InterestAndAbilities
