import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Error404 from './components/Error404';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setLoggedIn } from './features/loggedInSlice'
import { setTheUser } from './features/theUserSlice';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const darkEnabled = useSelector(state => state.darkEnabled.value);

  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);

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
          dispatch(setLoggedIn(true));
          dispatch(setTheUser(data.user));
          console.log(data.user);
        }
        if (data.error) {
          dispatch(setLoggedIn(false));
        }
      }
      catch (err) {
        console.log(err);
      }
    }
  }, [cookies.authToken, dispatch]);

  return (
    <Router>
      <div className={`${darkEnabled ? 'dark' : ''}`}>
        <Navbar setCookie={setCookie} removeCookie={removeCookie} />
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
              <About setCookie={setCookie} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;