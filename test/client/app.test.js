import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import App from '../../client/components/App'
import Header from '../../client/components/Header'

App.prototype.componentDidMount = () => {}

test('Shows heading', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.header').exists(), true)
})

test('Shows the title of the App', t => {
  const wrapper = mount(<Header />)
   t.is(wrapper.find('h1').text(), 'React Weather App')
})
