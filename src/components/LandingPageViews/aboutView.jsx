
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// eslint-disable-next-line no-unused-vars
import { vscDarkPlus, okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function AboutView() {

const codeString = `
class AboutMe {
    constructor() {
        this.name = "Peter Andre Casiano";
        this.age = 21;
        this.location = "Davao City";
        this.occupation = "Student";
        this.email = "pacasiano@icloud.com";
    }
    
    workExperience() {
        return ([
        { "year-year": "none" }
        ]);
    }
    
    education() {
        return ([
        {"year-current": "Ateneo de Davao University"},
        {"year-year": "San Pedro College Davao City"},
        {"year-year": "ABD Educational Development Center"},
        {"year-year": "Notre Dame of Kidapawan City College"},
        ]);
    }
    
    skills() {
        return ([
        "HTML/CSS/JS"
        ]);
    }
}
`;

    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center py-20">
            {/* <p className="absolute text-[55vh] font-bold text-[#9f9f9f] z-0">About</p> */}
            <p className="absolute text-9xl font-bold text-[#9f9f9f] top-14 left-11 -rotate-12 z-0">About</p>
            <p className="absolute text-9xl font-bold text-[#9f9f9f] right-8 bottom-10 -rotate-6 z-0">About</p>
            <SyntaxHighlighter language="javascript" style={okaidia} showLineNumbers wrapLongLines className="w-8/12 z-10 select-text">
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}