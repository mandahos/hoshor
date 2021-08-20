import React from 'react';
import { BsDownload } from 'react-icons/bs';
import resume from '../../assets/resume/Amanda_Hoshor_Resume.PDF';

function Resume() {
    return(
        <div className="flex items-center my-64">
        <a href={resume} download="Resume_Hoshor.pdf" className="flex flex-row items-center mx-auto p-4 resume text-2xl rounded-lg">
            Download My Resume!
            <BsDownload className="ml-2"/>
        </a>
    </div>
    );
}

export default Resume;