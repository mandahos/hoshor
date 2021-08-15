import React from 'react';

const useStyles = makeStyles({
    root: {
      maxWidth: 900,
    },
    media: {
      height: 500,
    },
  });


  function About() {
    return(
        <section className="my-5 lg:flex lg:flex-row">
            <div className="p-5">
                <img src={} className="my-2" alt="cover" />
            </div>
            <div className="p-5">
                <h1 id="about" className="font-bold text-5xl"></h1>
                <hr />
                <br />
                <div className="my-2 text-xl">
                    <p>
                        
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;