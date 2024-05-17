import "./components.css"

function Navbar() {
  return (
    <header className="bg-slate-900 text-white">
    <nav className="flex justify-between p-6">
        <img src="" alt="logoCR" />
        <ul className="flex gap-4">
            <li className="nav-element">INICIO</li>
            <li className="nav-element">LEARN CODE</li>
            <li className="nav-element">ABOUT US</li>
        </ul>
    </nav>
    </header>
  )
}

export default Navbar
