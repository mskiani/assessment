import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, ScrollToTop } from './components'

import {

  Error,

  SingleProduct,

  Products,

} from './pages'


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Products />
          </Route>
       
         
         
        
          <Route exact path='/products/:slug' children={<SingleProduct />} />
        
         
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </>
  )
}
