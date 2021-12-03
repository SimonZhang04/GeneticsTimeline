import './App.css';
import { ReactComponent as DNAIcon } from "./DNA.svg"
import timelineElements from './timelineElements';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import githublogo from './github.png';

function App() {

  let DNAIconStyles = {background: '#06D6A0'}

  return (
    <div>
      <h1 className='title'>The History of Genetics </h1>
      <VerticalTimeline>
        {
          timelineElements.map(element => {
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={DNAIconStyles}
                icon={<DNAIcon/>}
              >
                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                <h5 className="vertical-timeline-element-subtitle">{element.subtitle}</h5>
                <p id="description">{element.description}</p>
                <img className='portrait' src={element.image} alt="portrait"/>
              </VerticalTimelineElement>
              
            )
          })
        }
      </VerticalTimeline>
      <div className="info">
        <h3>Why was Rosalind Franklin not part of the group that was awarded the Nobel Prize in 1962?</h3>
      <div>
        <div className="rightSide">
          <img className="xray" src='https://www.scr.org/images/default-source/blog/18-19-blog/feb-19-blog/photo_51_image.jpg?sfvrsn=0' alt='photo 51'/>
          <p id="caption">Photo 51, an X-ray diffraction image of DNA taken by Rosalind Franklin in 1952.</p>
        </div>
        <div>
          <p id="description">In 1962, James Watson, Francis Crick, and Maurice Wilkins were awarded the Nobel Prize in Physiology or Medicine. However, Rosalind Franklin was not part of this group. In 1953, Rosalind Franklin was working under Maurice Wilkins, although somewhat independently. Wilkins showed Watson and Crick her findings and when Watson and Crick published their discoveries in 1953, they did not credit Franklin's photographs/research. Furthermore, at most three can be awarded a single Nobel Prize. Rosalind Franklin passed away 4 years before 1962 from ovarian cancer. The Nobel Prize committee generally did not award posthumously. </p>
        </div>
        <a href="https://docs.google.com/document/d/1C_viEjXykR7Io5zQ3n24Bo6-hv5k2ii21iT9w4GcYds/edit?usp=sharing"><h3 className="sources">Sources</h3></a>

        </div>
      </div>
     
      <div className="footer">
        <a href="https://github.com/SimonZhang04/GeneticsTimeline">
        <img className='github' src={githublogo} alt='github'/>
        </a>
      </div>
      
    </div>
  );
}

export default App;
