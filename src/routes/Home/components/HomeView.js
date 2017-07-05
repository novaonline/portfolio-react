import React from 'react'
import './HomeView.scss'
import { Container, Row, Col } from 'reactstrap'
import PaginationItems from '../../../components/shared/PaginationItems'
import ScrollToTop from '../../../layouts/PageLayout/components/ScrollToTop'

export const HomeView = () => (
  <div>
    <ScrollToTop />
    <Container>
      <Row>
        <Col sm='12'>
          <section className='content'>
            <h2>Hello, my name is Emmanuel</h2>
            <p>
              Here is a React project. As you can tell it looks similar to my homepage.
              Both talk to the same api, but handle the data differently.
              This project focuses on making the portfolio interactive.
              At the end of this project, I'd like visitors to be presented with data they only care about.
              What you see so far is just the start.
            </p>
            <p>
              To quickly introduce myself,
              I am a young open-minded individual who has been exposed to many programming languages
              and Computer Science concepts.
              I am now eager to apply what I've learnt to
              real world programs, applications, or other computer-related goods and services.
              I've always loved Computers (at both hardware and software level) and
              I always find myself deep in thought about how a client may actually use the good,
              or apply the service. There is so much more I want to say and if you have the time, check out the pages.
            </p>
            <div className='text-center'>
              <PaginationItems nextLink='/experiences' />
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  </div>
)

export default HomeView
