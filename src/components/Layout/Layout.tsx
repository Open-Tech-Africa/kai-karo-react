import * as React from "react"

import { useWindowSize } from "../../hooks/useWindowSize"
import { DarkMode } from "../DarkMode/DarkMode"
import { close, logo } from "../../assets"

import "./Layout.scss"

type LayoutProps = React.PropsWithChildren<{}>
type MobileMenuProps = {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
  isNavOpen: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  isDarkMode: boolean
}

const headerNavigation = [
  "Our Stock in Kenya",
  "Direct Import Stock",
  "Market Place",
  "About",
  "Contact",
  "Frequently Asked Question",
]

const footerNavigation = [
  "Our Stock in Kenya",
  "Ready for import",
  "Market Place",
  "About",
  "Contact",
  "Frequently Asked Question",
]

const MobileMenu = ({
  isNavOpen,
  setIsNavOpen,
  setIsDarkMode,
  isDarkMode,
}: MobileMenuProps) => {
  return (
    <>
      {isNavOpen ? (
        <nav className="header__nav--mobile">
          <div className="flex justify-center">
            <img
              src={close}
              alt=""
              onClick={() => {
                setIsNavOpen(!isNavOpen)
              }}
            />
          </div>
          <ul className="header__nav-list--mobile flex flex-col justify-center text-center">
            {headerNavigation?.map((n, idx) => (
              <li key={idx}>{n}</li>
            ))}
          </ul>
        </nav>
      ) : (
        <DarkMode
          isDarkMode={isDarkMode}
          isNavOpen={isNavOpen}
          setIsDarkMode={setIsDarkMode}
          setIsNavOpen={setIsNavOpen}
        />
      )}
    </>
  )
}

const Header = () => {
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false)
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false)
  const { width } = useWindowSize()
  const isDesktopNav = width >= 1123

  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="header__logo flex items-center">
            <img src={logo} alt="" className="" />
            <span className="">Kai & Karo</span>
          </div>
          {isDesktopNav ? (
            <nav className="header__nav flex items-center">
              <ul className="header__nav-list flex">
                {headerNavigation?.map((n, idx) => (
                  <li key={idx}>{n}</li>
                ))}
              </ul>
              <DarkMode
                isDarkMode={isDarkMode}
                isNavOpen={isNavOpen}
                setIsDarkMode={setIsDarkMode}
                setIsNavOpen={setIsNavOpen}
              />
            </nav>
          ) : (
            <MobileMenu
              setIsNavOpen={setIsNavOpen}
              isNavOpen={isNavOpen}
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          )}
        </div>
      </div>
    </header>
  )
}

const Footer = () => (
  <footer>
    <div className="footer__logo"></div>
    <div className="footer__nav">
      <h3>Company</h3>
      <ul>
        {footerNavigation?.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
    </div>
  </footer>
)

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}
