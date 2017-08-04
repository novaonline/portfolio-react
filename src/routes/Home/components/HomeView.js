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
            <h2>Hello, I'm Emmanuel Quagraine</h2>
            <p>
              This is a React project. You'll notice that the styling
              looks very similar to the old version of this page.
              The biggest difference is how the content is managed.
              When a page is loaded for the first time, the content is fetched and stored locally on your device.
              The content will only update when a refresh request is triggered by the user.
              It has been setup this way because of my infrequent content updates.
              Every page (minus this one) will have muted text that have the date the content was last updated.
              Click on the muted text to refresh.
            </p>
            <p>
              This project focuses on making the portfolio interactive.
              When this project is complete, I'd like visitors to be presented with data they only care about.
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
