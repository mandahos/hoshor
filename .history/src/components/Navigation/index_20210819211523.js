import React from 'react';



function Navigation(props) {
    
  const {
      meSelected,
      setMeSelected,
      portfolioSelected,
      setPortfolioSelected,
      resumeSelected,
      setResumeSelected,
  } = props;

  return(
      <header className="lg:px-16 px-6 text-gray-100 flex flex-wrap items-center lg:py-3 py-2">
          <div className="flex-1 flex justify-center items-center lg:justify-between">
              <h2 className="text-4xl milky">
                  <a href="/">
                      <span role="img">Amanda Hoshor</span>
                  </a>
              </h2>
          </div>
          <div className="menu hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
              <nav>
                  <ul className="flex items-center justify-center text-base pt-4 lg:pt-0">
                      <li className={`mx-3 cursor-pointer ${meSelected && 'navActive'}`}>
                          <span onClick={() => {
                              setMeSelected(true);
                              setPortfolioSelected(false);
                              setResumeSelected(false);
                          }}>
                              Me
                          </span>
                      </li>
                      <li className={`mx-3 cursor-pointer ${portfolioSelected && 'navActive'}`}>
                          <span onClick={() => {
                              setMeSelected(false);
                              setPortfolioSelected(true);
                              setResumeSelected(false);
                          }}>
                              Projects
                          </span>
                      </li>
                      <li className={`mx-3 cursor-pointer ${resumeSelected && 'navActive'}`}>
                          <span onClick={() => {
                              setMeSelected(false);
                              setPortfolioSelected(false);
                              setResumeSelected(true);
                          }}>
                              Resume
                          </span>
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
  );
}

  export default Navigation;


  