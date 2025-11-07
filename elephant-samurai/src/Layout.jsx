import Footer from './components/layout/Footer'
import Header from './components/layout/Header'

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                Header
                <nav>
                    <Link to='/'>Home</Link> | <Link to='/test'>Test</Link> | <Link to='/shows'>Shows</Link>
                </nav>
            </header>
            <main className='bg-white'>{children}</main>
            <footer>Footer</footer>
        </div>
        
    )
}

export default Layout 
