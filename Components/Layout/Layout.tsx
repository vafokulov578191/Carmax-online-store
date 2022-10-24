import { Link } from '@chakra-ui/react'
import React from 'react'
import SVGIcons from '../SVGIcons'
import styles from './Layout.module.scss'


const Layout = ({ children }) => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.header_left}>
                    <SVGIcons icon={'logo'} />
                    <Link href='/cars'>Shop</Link>
                    <Link href='/cars'>Sell/Trade</Link>
                    <Link href='/cars'>Finance</Link>
                    <button className={styles.open_bg}>
                        <span>More</span>
                        <SVGIcons icon='icon_option' />
                    </button>

                    <ul className={styles.ul_open}>
                        <li>Service & Repairs</li>
                        <li>FAQ & Support</li>
                        <li>Why CarMax</li>
                        <li>Buying Online</li>
                        <li>Car Research & Advice</li>
                        <li>Warranties & MaxCare®</li>
                        <hr />
                        <li>Search jobs at CarMax</li>
                    </ul>
                </div>
                <div className={styles.header_right}>

                </div>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                Footer
            </footer>
        </div >
    )
}

export default Layout
