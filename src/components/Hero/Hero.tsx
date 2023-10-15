import { heroMachine } from "../../assets"

import "./Hero.scss"

export const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title text-center">Find your dream car</h1>
      <div className="hero__machine flex justify-center">
        <img src={heroMachine} alt="" />
      </div>
      <div className="hero__nav flex justify-center">
        {["Our Stock In Kenya", "Import your Dream Car", "Market Place"]?.map(
          (n, idx) => (
            <button className="hero__nav-btn" key={idx}>
              {n}
            </button>
          )
        )}
      </div>
      <div className="hero__search text-center">
        <h2 className="hero__search-title">Research before buying </h2>
        <p className="hero__search-info">
          We help you find a car that fits Your personality, dream and pocket!
        </p>
      </div>
    </section>
  )
}
