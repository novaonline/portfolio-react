import React from 'react'
import './EducationView.scss'
import { Button } from 'reactstrap'
import { Link } from 'react-router'

const EducationView = () => (
  <div>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='content'>
            <section>
              <h2>B.A.Sc | 2010-2015 | University of Saskatchewan</h2>
              <div>
                <div className='meta'>
                  <div><strong>Major:&nbsp;</strong><span>Computer Science</span></div>
                  <div><strong>Minor:&nbsp;</strong><span>Economics</span></div>
                  <div>
                    <strong>Courses Taken:&nbsp;</strong>
                    <a href='http://ca.linkedin.com/in/equagrainejr#background-courses-container'> See here </a>
                  </div>
                </div>
                <p>
                Here are some classes that immediately come to mind.
                I will describe what they taught me on top of the courses primary goal.
              </p>
                <p>
                The first class that comes to mind is Machines &amp;
                Algorithms (
                <a href='http://ocw.usask.ca/AR/CMPT/360/' />
                  <a href='http://ocw.usask.ca/AR/CMPT/360/' />
                  <a href='http://ocw.usask.ca/AR/CMPT/360/'>CMPT 360</a>).
                This one comes to mind immediately because it was the last
                Computer Science class (last final written) I took.
                I experienced a big moment where I understood the power of mathematics and logic.
              </p>
                <p>The next class would be Language paradigm
                (<a href='http://ocw.usask.ca/AR/CMPT/340/' /><a href='http://ocw.usask.ca/AR/CMPT/340/' />
                  <a href='http://ocw.usask.ca/AR/CMPT/340/'>CMPT 340</a>).
                In that class, my mind was stimulated &amp;
                I developed a new interest on how compilers work, Unfortunately,
                I did not take the actual compilers class since I didn't meet all the prerequisites.
                Even if I did, it was not offered that year.
                One thing I'd like to do in my spare time is to read about compilers.
                I believe that will help me become a better programmer.</p>
                <p>Advanced Software Engineering (<a href='http://ocw.usask.ca/AR/CMPT/470/' />
                  <a href='http://ocw.usask.ca/AR/CMPT/470/' />
                  <a href='http://ocw.usask.ca/AR/CMPT/470/'>CMPT 470</a>)
                was a class that actually had me thinking about an interesting trade-off between program performance
                and code readability/code smells. Information Security
                (<a href='http://ocw.usask.ca/AR/CMPT/352/' />
                  <a href='http://ocw.usask.ca/AR/CMPT/352/' />
                  <a href='http://ocw.usask.ca/AR/CMPT/352/'>CMPT 352</a>)
                also presented another trade-off between security and code readability/code smells.
                This paragraph may not make sense at all, and I apologise for it.
                This is still a topic I have not researched about in details yet, so I'll leave it at that.
                During that class, I thought about how code readability</p>
              </div>
            </section>
            <section>
              <h2>General Studies | 2006-2010 | Estevan Comprehensive Highscool</h2>
              <p>General Studies</p>
            </section>
            <section>
              <h2>Elementary | 1998-2006 | Brunskill School</h2>
              <p>Elementary Studies</p>
            </section>
            <div className='text-center'>
              <Link to='/interests'>
                <Button color='link'>&laquo; Interests</Button>
              </Link>
              <Link to='/experiences'>
                <Button color='link'>Experience &raquo;</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default EducationView
