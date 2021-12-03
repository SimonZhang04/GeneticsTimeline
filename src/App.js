import './App.css';
import { ReactComponent as DNAIcon } from "./DNA.svg"
import timelineElements from './timelineElements';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


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
        
      </div>
      </div>


      <div className="info">
        <h3>Sources </h3>
        <p class="description">Nelson Biology 12 Textbook <br/>
 
 http://www.dnaftb.org/15/bio.html <br/>
  
 https://www.britannica.com/biography/Frederick-Griffith<br/>
  
 https://opentextbc.ca/microbiologyopenstax/chapter/using-microbiology-to-discover-the-secrets-of-life/<br/>
  
 https://www.genome.gov/25520250/online-education-kit-1944-dna-is-transforming-principle <br/>
  
 https://secure1.nbed.nb.ca/sites/ASD-S/1941/Gallant/Documents/biology/DNA_Notes.pdf <br/>
  
 https://www.scr.org/get-connected/south-coast-repertorys-stories/south-coast-repertory's-stories/2019/02/25/a-nobel-experiment-rosalind-franklin-and-the-prize<br/>
  
 https://lmuthisweek.lmu.edu/2021/03/22/sexism-in-science-was-rosalind-franklin-robbed-of-a-nobel-prize/<br/>
  
 https://www.britannica.com/biography/Kary-Mullis <br/>
  
 http://www.genomenewsnetwork.org/resources/timeline/1986_Hood.php<br/>
  
 https://biography.yourdictionary.com/erwin-chargaff<br/>
 </p>
 <p> <strong>Images: </strong></p>
 <p class="sources">https://www.britannica.com/biography/Friedrich-Miescher
 
 https://commons.wikimedia.org/wiki/File:Fred_Griffith_and_%22Bobby%22_1936.jpg
  
 https://www.istrapedia.hr/hr/natuknice/2489/hammerling-joachim
  
 https://www.timetoast.com/timelines/the-history-of-genetics 
  
 https://en.wikipedia.org/wiki/Erwin_Chargaff
  
 https://paulingblog.wordpress.com/2009/08/18/the-hershey-chase-blender-experiments/
  
 https://blog.oup.com/2012/07/rosalind-franklin-sister-memoir-dna/
  
 https://www.bbc.com/news/health-18041884
  
 https://digitalcommons.rockefeller.edu/transforming-principle-dna/23/
  
 https://www.nobelprize.org/prizes/chemistry/1993/mullis/facts/
  
 https://en.wikipedia.org/wiki/Leroy_Hood
 </p>
      </div>
      <div className="footer">
        <p>By Simon Zhang on Dec 2, 2021</p>
      </div>
      
    </div>
  );
}

export default App;
