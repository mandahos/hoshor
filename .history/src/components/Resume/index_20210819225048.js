import React from 'react';
import { BsDownload } from 'react-icons/bs';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import technical from '../../assets/resume/Amanda_Hoshor_Resume.PDF';
import resume from '../../assets/resume/Resume_Hoshor (1).pdf'

function Resume() {
    return(
        <div className="flex items-center my-64">
        <a href={technical} download="Resume_Hoshor.pdf" className="flex flex-row items-center mx-auto p-4 resume text-2xl rounded-lg">
            Technical Resume
            <BsDownload className="ml-2"/>
        </a>
        <a href={resume} download="Resume_Hoshor.pdf" className="flex flex-row items-center mx-auto p-4 resume text-2xl rounded-lg">
            Standard Resume
            <BsDownload className="ml-2"/>
        </a>
    </div>
    );
}

export default Resume;