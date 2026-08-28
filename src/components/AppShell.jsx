import { Link, Outlet, useNavigate } from "react-router"
import { useAuth } from "../features/auth/hooks/useAuth"
import "./app-shell.scss"

const AppShell = () => {
    const { user, handleLogout } = useAuth()
    const navigate = useNavigate()

    const handleLogoutClick = async () => {
        await handleLogout()
        navigate("/login")
    }

    return (
        <div className="app-shell">
            <header className="site-header">
                <Link className="brand" to="/" aria-label="ResumeAI home">
                    <span className="brand-mark">R</span>
                    <span>Resume<span>AI</span></span>
                </Link>
                <nav className="site-nav" aria-label="Main navigation">
                    <Link to="/">Home</Link>
                    {user ? <><span className="nav-user">Hi, {user.username}</span><button className="nav-logout" type="button" onClick={handleLogoutClick}>Log out</button></> : <><Link to="/login">Log in</Link><Link className="nav-cta" to="/register">Sign up</Link></>}
                </nav>
            </header>
            <div className="app-shell__content"><Outlet /></div>
            <footer className="site-footer">
                <div><strong>ResumeAI</strong><span>Build a sharper interview strategy.</span></div>
                <div className="site-footer__links"><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#help">Help</a></div>
                <span className="site-footer__copyright">© 2026 ResumeAI</span>
            </footer>
        </div>
    )
}

export default AppShell