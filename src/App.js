import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Error404 from './components/Error404';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Payment from './components/Payment';

function App() {
  const [darkEnabled, setDarkEnabled] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [theUser, setTheUser] = useState(null);

  useEffect( () => {
    // console.log(url);
    const token = cookies.authToken;

    if (token) {
      fetchData();
    } else {
      console.log('No user logged in!');
    }

    async function fetchData() {

      try {      
        const res = await fetch('https://my-server-demo.herokuapp.com/user/check', {
          method: 'POST',
          body: JSON.stringify({ token }),
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        // console.log(data);
        if (data.user) {
          setLoggedIn(true);
          setTheUser(data.user);
        }
        if (data.error) {
          setLoggedIn(false);
        }
      }
      catch (err) {
        console.log(err);
      }
    }
  }, [cookies.authToken]);

  return (
    <Router>
      <div className={`${darkEnabled ? 'dark' : ''}`}>
        <Navbar darkEnabled={darkEnabled} setDarkEnabled={setDarkEnabled} loggedIn={loggedIn} setLoggedIn={setLoggedIn} theUser={theUser} removeCookie={removeCookie} />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/signup">
              <Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCookie={setCookie} />
            </Route>
            <Route path="/login">
              <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCookie={setCookie} />
            </Route>
            <Route path='/payment'>
              <Payment />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;