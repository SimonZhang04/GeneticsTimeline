let timelineElements = [
    {
        id: 1,
        title: "Friedrich Miescher",
        subtitle: "Discovery of nucleic acid",
        description: 'In 1869, Swiss physician Friedrich Miescher discovered “nuclein”, which is now identified as DNA. He obtained pus from the bandages of his patients, which contained mostly white blood cells. From those cells, Miescher accumulated substantial amounts of an unidentified substance that was acidic and contained large quantities of phosphorus. He named this substance “nuclein” as it was found in the nucleus of white blood cells. Miescher also determined that it was made up of oxygen, hydrogen, nitrogen, and phosphorus and had a specific ratio of phosphorus to nitrogen.',
        date: "1869",
        icon: 'DNA',
        image: 'https://cdn.britannica.com/22/151122-050-F0F77EAC/Friedrich-Miescher.jpg',
    },
    {
        id: 2,
        title: "Frederick Griffith",
        subtitle: "Discovery of transformation",
        description: 'In 1928, British bacteriologist Frederick Griffith experimented with two strains of the bacterium Streptococcus pneumoniae. One strain, which he named the S-strain caused mice to develop pneumonia and die. The other strain that was harmless to the mice was named the R-strain. Griffith heated the S-strain cells, killing the bacteria. When he combined the heat-killed S-strain cells with the R-strain cells, he noticed that the mice injected contracted pneumonia and died. This meant that the R-strain bacteria acquired characteristics from the S-strain that made them deadly. From this experiment, Griffith concluded that bacteria can take genetic material from nearby bacteria and use the DNA as their own. He called this process where a hereditary substance is passed on “transformation."',
        date: "1928",
        icon: 'DNA',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Fred_Griffith_and_%22Bobby%22_1936.jpg'
    },
    {
        id: 3,
        title: "Joachim Hammerling",
        subtitle: "Nucleus as the location of hereditary information",
        description: 'In the 1930s, Danish-German scientist Joachim Hammerling experimented with the single-celled algae Acetabularia. He determined that genetic information in an eukaryotic cell exists in the nucleus. The algae grows asymmetrically, with a “foot” that contains the nucleus, a stalk stemming upwards, and a cap on top. When Hammerling removed the cap of the cell, a new cap was regenerated. However, when Hammerling removed the foot of the cell, a new foot did not grow. This proved that hereditary information was located in the foot (which contains the nucleus) of each cell.       ',
        date: "1930s",
        icon: 'DNA',
        image: 'https://www.istrapedia.hr/media/__sized__/uploads/images/article_images/photo_1495223028_1_133-crop-c0-5__0-5-400x500-70.jpg'

    },
    {
        id: 4,
        title: "Oswald Avery, Colin MacLeod, and Maclyn McCarty",
        subtitle: "DNA as the transforming substance",
        description: 'In 1944, the physician Oswald Avery and his colleagues Colin MacLeod, and Maclyn McCarty grew different strains of Streptococcus bacteria in culture tubes. Similar to Griffith’s experiment, they used an S-strain and R-strain variant. They wanted to determine which part of the S-strain was responsible for making the R-strain deadly. The possible substances were RNA, DNA and proteins. In Avery’s experiment, they heat-killed S-strain and used a different enzyme to destroy each of the possible transforming substances individually. They combined each sample of the heat-killed S-strain with the R-strain and observed the appearance of the new culture when it was grown. The results proved that DNA was the transforming substance, as only when DNA was absent, no S-strain cells grew. ',
        date: "1944",
        icon: 'DNA',
        image: 'https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/1604609/image/c90e6482803a71c0bc30ee874ab16a7d'

    },
    {
        id: 5,
        title: "Erwin Chargaff",
        subtitle: "Chargaff's Rules",
        description: 'In 1950, organic chemist Erwin Chargaff discovered that in a single species, the four bases (adenine, thymine, guanine, and cytosine) are present in specific ratios that are not necessarily equal. The amount of cytosine is always the same as the amount of guanine and similarly, the amount of adenine is always the same as the amount of thymine. Chargaff also determined that different species have different DNA compositions. He did this by experimenting with DNA extracted from nuclei and analyzing how much of each base was present in the DNA.',
        date: "1950",
        icon: 'DNA',
        image: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Erwin_Chargaff.jpg'

    },
    {
        id: 6,
        title: "Alfred Hershy and Martha Chase",
        subtitle: "DNA carries genetic information",
        description: 'In 1952, bacteriologists Alfred Hershey and Martha Chase experimented with the bacteria E. coli and a bacteriophage virus. As the bacteriophage is composed both of DNA and a protein coat. Hershey and Chase wanted to determine which was the genetic material by examining which was inserted into a bacterium to produce more bacteriophages. They labelled proteins with sulfur-35. On the other hand, DNA was labelled with phosphorus-32. Bacteriophages, some containing the sulfur isotope and others the phosphorus isotope, infected different colonies of bacteria. Hershey and Chase found that radioactivity was only detected in the bacteria colonies infected by the bacteriophage containing phosphorus-32. They concluded that DNA is responsible for carrying genetic information.',
        date: "1952",
        icon: 'DNA',
        image: 'https://i0.wp.com/scarc.library.oregonstate.edu/coll/nonspcoll/catalogue/portrait-hersheychase-600w.jpg?zoom=2'

    },
    {
        id: 7,
        title: "Rosalind Franklin",
        subtitle: "Photo 51",
        description: 'In 1953, British scientist Rosalind Franklin conducted X-ray crystallography experiments to understand the structure of DNA. She was able to produce high-quality images by using very pure crystallized DNA samples. Franklin noticed the pattern produced by the images was in the shape of an ‘X’. She suggested that the sugar-phosphate backbone of DNA faced the outside of the molecule rather than the inside and also that its structure was a double helix that rotated in a clockwise direction. Franklin also found that the nucleotide bases were stacked like saucers and had repeated measurements of 0.34 nm, 3.4 nm, and 2.0 nm.',
        date: "1953",
        icon: 'DNA',
        image: 'https://42796r1ctbz645bo223zkcdl-wpengine.netdna-ssl.com/wp-content/uploads/2012/07/18.-Rosalind-in-Alpine-hut.jpg'

    },
    {
        id: 8,
        title: "James Watson and Francis Crick",
        subtitle: "The Double Helix Structure",
        description: 'In 1953, biologists James Watson and Francis Crick determined the double helix of DNA. Maurice Wilkins revealed details of Rosalind Franklin’s work to Watson and Crick without her knowledge. Seeing the photographs, Watson and Crick recognized that the double helix structure agreed	with much of what was already known: there are 4 different nitrogenous bases, Chargaff’s rule, and the phosphate-sugar backbone. In their model, the nitrogenous bases attached to the backbone and faced each other in the center of the molecule. The strands twisted around another in a clock direction. Each nitrogenous base on a strand was hydrogen-bonded with a nitrogenous base on the strand that ran antiparallel.       ',
        date: "1953",
        icon: 'DNA',
        image: 'https://digitalcommons.rockefeller.edu/transforming-principle-dna/1020/preview.jpg'

    },
    {
        id: 9,
        title: "Kary Banks Mullis",
        subtitle: "The Polymerase Chain Reaction",
        description: 'In 1983, American biochemist Kary Banks Mullis invented the polymerase chain reaction (PCR). This process allowed certain segments of DNA to be replicated billions of times in just a few hours. The method involves four ingredients: a template DNA, two oligonucleotide primers, nucleotides, and a polymerase enzyme. When the ingredients are heated, the template DNA splits into 2 strands. The primers bind to the complementary sites and the polymerase begins copying the template strands by adding nucleotides onto the end of the primers. The polymerase chain reaction has many applications such as screening patients for genetic disorders, studying DNA from fossils, identifying crime suspects, and is now commonly used for COVID-19 tests. In 1993, Mullis was awarded a Nobel Prize in Chemistry.         ',
        date: "1983",
        icon: 'DNA',
        image: 'https://www.nobelprize.org/images/mullis-13444-portrait-mini-2x.jpg'

    },
    {
        id: 10,
        title: "Leroy Hood",
        subtitle: "The first automated DNA sequencer",
        description: 'In 1986, American biologist Leroy Hood developed the first automated DNA sequencer along with Lloyd Smith, Tim, and Michael Hunkapiller. Hood also created a new way to label nitrogenous bases, using fluorescent dyes instead of radioisotopes (which were unstable and a health hazard). The machine included a laser that would stimulate the fluorescent labels, causing them to glow. The light emitted was picked up by a lens and photomultiplier, and the information was sent to a computer. The automated DNA sequencer made sequencing whole genomes possible, enabling the Human Genome Project.  ',
        date: "1986",
        icon: 'DNA',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Leroy_Hood_1986.png/330px-Leroy_Hood_1986.png'

    },
];

export default timelineElements