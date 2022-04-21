/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'

import { makeStore } from './store'

function render (
  ui,
  {
    preloadedState,
    store = makeStore(preloadedState),
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper ({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// eslint-disable-next-line import/export
export * from '@testing-library/react'

// Export the msw server and extra handlers
export { server } from './mocks/server'
export { extraHandlers } from './mocks/handlers'

// eslint-disable-next-line import/export
export { render }
