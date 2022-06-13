import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Books from './components/Books';
import Users from './components/Users'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

const Home = () => {
  return (
    <>
      <h1>GraphQL Demo</h1>
      <h2>Use the above links to explore the Books and Users sample data.</h2>
      <h2>Visit <a target="_blank" rel="noopener noreferrer" href={process.env.REACT_APP_GRAPHQL_URL}>/graphql</a> to explore the GraphQL API</h2>
      <p>Developed by Jihad Hammoudi</p>
    </>
  )
}

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/users">GitHub Users</Link>
      <hr />
    </nav>
  )
}

export default App