import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light padding">
  <a class="navbar-brand" href="#" id="pacifico">CuriX</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/bloghome">Blog</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="#">About</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Portfolio</a>
      </li>
    </ul>
  </div>
</nav>

    )
}