import React from 'react'
import PageLayout from 'layouts/PageLayout/components/PageLayout'
import { shallow } from 'enzyme'

describe('(Layout) PageLayout', () => {
  it('renders as a <div>', () => {
    shallow(<PageLayout />).should.have.tagName('div')
  })
})
