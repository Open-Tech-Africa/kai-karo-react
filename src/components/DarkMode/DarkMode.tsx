import { moon, sun } from "../../assets"
import burger from "../../assets/burger.svg"
import { useWindowSize } from "../../hooks/useWindowSize"

type DarkModeProps = {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
  isNavOpen: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  isDarkMode: boolean
}

export const DarkMode = ({
  isDarkMode,
  isNavOpen,
  setIsDarkMode,
  setIsNavOpen,
}: DarkModeProps) => {
  const { width } = useWindowSize()
  const isDesktop = width >= 1123

  return (
    <div className="header__icons flex">
      {!isDarkMode ? (
        <img src={moon} alt="" onClick={() => setIsDarkMode(!isDarkMode)} />
      ) : (
        <img src={sun} alt="" onClick={() => setIsDarkMode(!isDarkMode)} />
      )}
      {!isDesktop && (
        <img src={burger} alt="" onClick={() => setIsNavOpen(!isNavOpen)} />
      )}
    </div>
  )
}
