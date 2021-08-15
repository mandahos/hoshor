import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CssBaseline from '@material-ui/core/CssBaseline';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import meImage from '../../assets/images/react-profile.png';

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
                <img src={profileImage} className="my-2" alt="cover" />
            </div>
            <div className="p-5">
                <h1 id="about" className="font-bold text-5xl">WHO AM I?</h1>
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