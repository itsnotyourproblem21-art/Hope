// All test data organized by subject
const allTestData = {
    "Biology": [
        [
            { stem: "Which organelle is primarily responsible for protein modification and sorting for secretion?", c: ["Smooth ER", "Golgi apparatus", "Lysosome", "Peroxisome"], a: 1 },
            { stem: "In eukaryotes, ATP synthase directly uses the proton motive force across which membrane during oxidative phosphorylation?", c: ["Outer mitochondrial membrane", "Inner mitochondrial membrane", "Thylakoid membrane", "Nuclear envelope"], a: 1 }
        ]
    ],
    "General Chemistry": [
        [
            { stem: "Nitric oxide, NO, rapidly reacts with O₂ to form NO₂. How many grams of NO are required to completely react with 1.75 g of O₂?", c: ["(1/32)(2/1)(30/1)", "1.75(1/32)(30/1)", "1.75(1/16)(2/1)(30/1)", "1.75(1/32)(2/1)(30/1)"], a: 3 },
            { stem: "At constant volume, pressure is directly proportional to absolute temperature. Which gas law is this?", c: ["Boyle's Law", "Charles's Law", "Gay-Lussac's Law", "Avogadro's Law"], a: 2 }
        ]
    ],
    "Organic Chemistry": [
        [
            { stem: "What is the hybridization of the central atom in XeF₄?", c: ["sp³", "sp³d", "sp³d²", "sp³d³"], a: 2 },
            { stem: "How many σ and π bonds are in benzene (C₆H₆)?", c: ["6 σ, 6 π", "12 σ, 3 π", "6 σ, 3 π", "12 σ, 6 π"], a: 1 }
        ]
    ],
    "Reading Comprehension": [
        [
            { passageId: "epigenetics", stem: "According to the passage, histone acetylation tends to", c: ["tighten chromatin structure", "prevent transcription", "loosen chromatin structure, promoting transcriptional activity", "cause DNA damage"], a: 2 }
        ]
    ],
    "Physics": [
        [
            { stem: "A piston contains an ideal gas at 25°C and 2 atm. The piston is compressed isothermally to half of its original volume. What is the new pressure?", c: ["1 atm", "2 atm", "3 atm", "4 atm"], a: 3 },
            { stem: "What is the speed of light in a vacuum?", c: ["3.00 x 10^6 m/s", "3.00 x 10^8 m/s", "3.00 x 10^10 m/s", "3.00 x 10^12 m/s"], a: 1 }
        ]
    ],
    "Quantitative Reasoning": [
        [
            { stem: "If a train travels 120 km in 2 hours, what is its average speed?", c: ["60 km/h", "120 km/h", "240 km/h", "30 km/h"], a: 0 },
            { stem: "Solve for x: 2x + 3 = 7", c: ["x = 1", "x = 2", "x = 3", "x = 4"], a: 1 }
        ]
    ]
};
            { stem: "Which of the following events is TRUE regarding the human ovarian cycle?", c: ["There is a surge of progesterone in the follicular phase", "The thickness of the uterine wall is at its peak during ovulation", "If fertilization does not occur, the corpus luteum disintegrates", "Follicular development is hormone-independent", "Ovulation occurs due to a peak in LH levels"], a: 4 },
            { stem: "A long-distance runner collapses after running for days without food, completely depleting all ATP in her leg muscles. What is the most likely state of her muscular filaments?", c: ["Myosin head is detached from actin", "Myosin head is attached to actin and ready for a power stroke", "Myosin head is attached to actin immediately after a power stroke (rigor state)", "Myosin head is detached and ready to form another cross bridge", "Myosin head is detached as tropomyosin is blocking the actin site"], a: 2 },
            { stem: "During inhalation, the contraction of the diaphragm muscle causes which of the following mechanical actions?", c: ["It brings the lungs upward, decreasing thoracic volume", "It brings the lungs downward, increasing thoracic volume", "It allows air to be passively exhaled", "It decreases the volume of the thoracic cavity", "It increases the pressure within the thoracic cavity"], a: 1 },
            { stem: "What is the correct pathway of air entering the respiratory system?", c: ["Nostril -> Larynx -> Pharynx -> Trachea -> Bronchi -> Bronchioles -> Alveoli", "Nostril -> Pharynx -> Larynx -> Trachea -> Bronchi -> Bronchioles -> Alveoli", "Nostril -> Larynx -> Pharynx -> Trachea -> Bronchioles -> Bronchi -> Alveoli", "Nostril -> Pharynx -> Trachea -> Larynx -> Bronchi -> Bronchioles -> Alveoli", "Nostril -> Pharynx -> Larynx -> Trachea -> Bronchi -> Alveoli -> Bronchioles"], a: 1 },
            { stem: "Which of the following represents the final, most specific line of defense in the immune system?", c: ["Neutrophils", "Cytotoxic T-cells", "Mucous secretions", "Fever", "Skin"], a: 1 },
            { stem: "The circulatory system is a high-pressure system for blood, while the lymphatic system is a low-pressure system. What other system does the lymphatic system share significant structural and functional similarities with?", c: ["Endocrine system", "Digestive system", "Circulatory system (venous side)", "Renal system", "Nervous system"], a: 2 },
            { stem: "Glucagon is a hormone that raises blood glucose levels. In which organ is it produced?", c: ["Thyroid", "Pancreas", "Kidney", "Gallbladder", "Liver"], a: 1 },
            { stem: "What occurs during the 'power stroke' phase of skeletal muscle contraction?", c: ["ATP binds to myosin, causing it to detach from actin", "Calcium binds to troponin", "Tropomyosin shifts, revealing the binding sites", "Myosin heads bind to actin, forming a cross-bridge", "ADP and inorganic phosphate are released from the myosin head"], a: 4 },
            { stem: "Each of the following cell types contains a nucleus EXCEPT one. Which one is the EXCEPTION?", c: ["Leukocytes", "Granulocytes", "Lymphocytes", "Erythrocytes (mature)", "Monocytes"], a: 3 },
            { stem: "A skeletal muscle is subjected to a stepwise increase in its submaximal stimulus strength. What will be the outcome?", c: ["It recruits additional motor units over time", "Contraction ceases", "Contraction is constant and does not change", "It activates all the motor units at once", "Only one motor unit responds"], a: 0 },
            { stem: "Which of the following molecules is made from cholesterol?", c: ["Epinephrine", "Growth hormone", "Adrenocorticotropic hormone", "Follicle-stimulating hormone", "Cortisol"], a: 4 },
            { stem: "What is the function of the cilia lining the respiratory system, from the trachea to the bronchi?", c: ["Keratin production", "Propulsion via flagella", "Increase surface area for absorption (microvilli)", "Clearing debris and pathogens from the airway", "Bacterial conjugation (pili)"], a: 3 },
            { stem: "Which layer covers the outer surface of cortical bone and provides nourishment and attachment points for tendons?", c: ["Spongy bone", "Periosteum", "Endosteum", "Epiphyseal line", "Compact bone"], a: 1 },
            { stem: "Surgical removal of the posterior pituitary gland would result in a decreased secretion of which hormone?", c: ["FSH", "LH", "Vasopressin (ADH)", "hGH", "Cortisol"], a: 2 },
            { stem: "Which part of the sarcomere is defined as the region containing only thick (myosin) filaments?", c: ["Z-Line", "Thin filaments (I-band)", "I-band", "H-zone", "A-band"], a: 3 },
            { stem: "All of the following processes involve negative feedback EXCEPT one. Which one is the EXCEPTION?", c: ["Testosterone production regulation", "Control of blood calcium levels", "Population levels of a predator and prey", "Temperature regulation of the human body", "Density-independent population control"], a: 4 },
            { stem: "Failure to produce bile in the liver would result in an inability to properly digest and process which substance?", c: ["Protein", "Trypsin", "Glucagon", "Fat", "Carbohydrates"], a: 3 },
            { stem: "Which pancreatic enzyme is secreted as a zymogen and, when activated, functions to cleave peptide chains as part of protein digestion?", c: ["Chymotrypsin", "Nuclease", "Amylase", "Pepsin", "Maltase"], a: 0 },
            { stem: "Estrogen is a lipid-soluble steroid hormone. What is its primary mechanism of action on a target cell?", c: ["It diffuses through the membrane and binds to an intracellular receptor", "It binds to a lipid raft to enter the cell", "It binds to a transmembrane receptor", "It activates the secondary messenger IP3", "It utilizes the cAMP pathway"], a: 0 },
            { stem: "At the start of depolarization (the rising phase of an action potential), what is the state of the voltage-gated ion channels?", c: ["Na+ channels are opened, K+ channels are closed", "Na+ channels are closed, K+ channels are opened", "Na+ channels are closed, K+ channels are closed", "Na+ channels are opened, K+ channels are opened", "Both are inactivated"], a: 0 },
            { stem: "Which of the following organisms is classified as a vascular plant (possesses xylem and phloem) but does NOT produce seeds?", c: ["Gymnosperms", "Angiosperms", "Ferns", "Mosses", "Fungi"], a: 2 }
        ],
        // Practice Test 6
        [
            { stem: "When white light strikes a plant's chloroplast, which color's wavelengths are most strongly reflected or transmitted, giving the plant its characteristic color?", c: ["Red", "Blue", "Green", "Orange", "Violet"], a: 2 },
            { stem: "Which form of endocytosis is characterized by the cell non-specifically 'drinking' or taking in dissolved solutes and extracellular fluid?", c: ["Phagocytosis", "Receptor-mediated endocytosis", "Pinocytosis", "Transformation", "Conjugation"], a: 2 },
            { stem: "Under anaerobic conditions, organisms like E. coli must regenerate NAD+ to continue ATP production. Which processes will they carry out?", c: ["Glycolysis only", "Fermentation only", "Krebs cycle only", "Glycolysis and Fermentation", "Glycolysis and Krebs cycle"], a: 3 },
            { stem: "Prokaryotic cells are generally much smaller than eukaryotic cells. This size limitation is primarily due to the constraints of:", c: ["Their slow metabolic rate", "The surface area to volume ratio becoming insufficient for nutrient exchange", "Their physically smaller phospholipid molecules", "The nucleus-to-cytoplasm ratio limiting gene products", "The lack of a rigid cell wall for support"], a: 1 },
            { stem: "What is the very first intermediate molecule formed when a glucose molecule enters the glycolytic pathway?", c: ["Acetyl-CoA", "Pyruvate", "Fructose-6-phosphate", "Glucose-6-phosphate", "Glyceraldehyde-3-phosphate"], a: 3 },
            { stem: "Which of the following double-stranded DNA sequences represents a palindromic sequence, which can be recognized by a restriction enzyme?", c: ["5'-GAATTC-3' / 3'-CTTAAG-5'", "5'-TATTAA-3' / 3'-AUAAUU-5'", "5'-GGGGCC-3' / 3'-CCCCGG-5'", "5'-GATCCA-3' / 3'-CTAGGT-5'", "5'-AAAAAA-3' / 3'-TTTTTT-5'"], a: 0 },
            { stem: "A study finds that human height is affected by over 400 distinct genes. This inheritance pattern is best described as:", c: ["Codominance", "Incomplete dominance", "Epistasis", "Polygenic inheritance", "Pleiotropy"], a: 3 },
            { stem: "A male tiger (diploid number 2N = 40) mates with a female lion (diploid number 2N = 38). What will be the diploid (2N) chromosome number of their liger offspring?", c: ["41", "38", "39", "78", "40"], a: 2 },
            { stem: "Which laboratory technique is the most appropriate method for visualizing chromosomes to identify aneuploidy, such as a nondisjunction event?", c: ["DNA microarray", "Karyotyping", "Hemocytometer", "Scanning electron microscopy", "ELISA"], a: 1 },
            { stem: "What is the definition of 'gene linkage'?", c: ["The tendency for the same genes to be on different chromosomes", "The tendency for different genes to be on different chromosomes", "The presence of the same genes on different gametes", "The tendency for different genes on the same chromosome to be inherited together", "The presence of identical genes on the same gamete"], a: 3 },
            { stem: "If two parents both have the genotype DdEe, and the genes assort independently, what is the probability of them producing an offspring with the genotype ddee?", c: ["1/2", "1/4", "1/8", "1/16", "1/32"], a: 3 },
            { stem: "The nucleus from an adult photoreceptor cell is transferred into an enucleated oocyte, which is then stimulated to develop. The resulting organism is best described as a:", c: ["Mosaic", "Chimera", "Dizygotic twin", "Clone", "Gamete"], a: 3 },
            { stem: "Which of the following correctly ranks genetic components from the smallest, most fundamental unit to the largest, most inclusive structure?", c: ["Cytosine -> Gene -> Chromosome -> Nucleus", "Gene -> Cytosine -> Nucleus -> Chromosome", "Nucleus -> Chromosome -> Gene -> Cytosine", "Cytosine -> Chromosome -> Gene -> Nucleus", "Gene -> Nucleus -> Cytosine -> Chromosome"], a: 0 },
            { stem: "E. coli cells are lysed, releasing their genomic DNA into a solution. Live H. pylori cells, which cannot produce a specific toxin, are added to this solution. After some time, the H. pylori cells are found to be producing the toxin. This genetic uptake from the environment is called:", c: ["Transduction", "Transformation", "Conjugation", "Transcription", "Meiosis"], a: 1 },
            { stem: "A patient tears their anterior cruciate ligament (ACL). This injury involves the disconnection of which two structures?", c: ["The diaphysis and metaphysis of the femur", "The femur bone and the tibia bone", "The calf muscle and the calcaneus bone", "The soleus muscle and the tibialis anterior muscle", "The periosteum and the femur bone"], a: 1 },
            { stem: "The endometrium, a mucous membrane that thickens in preparation for implantation, is the inner lining of which organ?", c: ["Cervix", "Ovary", "Vagina", "Uterus", "Fallopian tube"], a: 3 },
            { stem: "Which type of axon would be expected to propagate an action potential with the fastest conduction velocity?", c: ["Thin and myelinated", "Thin and unmyelinated", "Thick and myelinated", "Thick and unmyelinated", "All axons conduct at the same speed regardless of size"], a: 2 },
            { stem: "Which of the following is the most likely physiological response to hypoglycemia (low blood sugar)?", c: ["Decreased calcitonin release", "Increased glucagon release", "Increased insulin release", "Decreased parathyroid hormone release", "Increased ADH release"], a: 1 },
            { stem: "The release of parathyroid hormone (PTH) acts on the nephron to increase the:", c: ["Reabsorption of potassium ions", "Reabsorption of calcium ions", "Reabsorption of water", "Secretion of chloride ions", "Secretion of sodium ions"], a: 1 },
            { stem: "Which of the following endocrine structures is the primary source of epinephrine release during a 'fight-or-flight' response?", c: ["Anterior pituitary", "Adrenal cortex", "Adrenal medulla", "Hypothalamus", "Thyroid gland"], a: 2 },
            { stem: "During an inflammatory response, mast cells release histamine, which has what primary effect on local blood vessels?", c: ["Reduces tissue swelling", "Activates B cells", "Causes vasodilation (dilates capillaries)", "Decreases the inflammatory response", "Causes systemic vasoconstriction"], a: 2 },
            { stem: "In a healthy individual, which of the following molecules is filtered at the glomerulus and then entirely reabsorbed back into the blood by the nephron?", c: ["Creatinine", "Glucose", "Large proteins", "Urea", "Water"], a: 1 },
            { stem: "Which chamber of the heart is responsible for pumping oxygenated blood into the aorta to supply the systemic circuit?", c: ["Right ventricle", "Left ventricle", "Right atrium", "Left atrium", "Pulmonary artery"], a: 1 },
            { stem: "What is the correct pathway for air entering the human respiratory system?", c: ["Nostril -> Larynx -> Pharynx -> Trachea -> Bronchi", "Nostril -> Pharynx -> Larynx -> Trachea -> Bronchi", "Nostril -> Pharynx -> Larynx -> Bronchi -> Trachea", "Larynx -> Pharynx -> Trachea -> Bronchi -> Nostril", "Nostril -> Pharynx -> Trachea -> Larynx -> Bronchi"], a: 1 },
            { stem: "Spermatogenesis, the process of sperm production, is initiated within which of the following structures?", c: ["Seminiferous tubules", "Urethra", "Seminal vesicle", "Epididymis", "Vas deferens"], a: 0 },
            { stem: "The terms cervical, thoracic, lumbar, and sacral are used to describe the different regions of the:", c: ["Digestive tract", "Lobes of the cerebral cortex", "Male reproductive tract", "Respiratory pathways", "Vertebral column and spinal nerves"], a: 4 },
            { stem: "In human females, primary oocytes are arrested in which of the following stages at the time of birth?", c: ["Prophase II of meiosis", "Prophase I of meiosis", "Prophase of mitosis", "Metaphase I of meiosis", "Metaphase II of meiosis"], a: 1 },
            { stem: "A sperm cell that has a defective acrosome would be unable to perform which critical function?", c: ["Exhaust its ATP supply", "Propel itself with its flagellum", "Fuse with the oocyte's plasma membrane", "Penetrate the zona pellucida", "Undergo capacitation"], a: 3 },
            { stem: "All of the following are true characteristics of IgG antibodies EXCEPT one. Which one is the EXCEPTION?", c: ["It is composed of two heavy and two light chains", "Its chains are connected via disulfide bonds", "It is involved in passive immunity for the fetus", "It participates in opsonization", "It has a pentameric structure"], a: 4 },
            { stem: "Which of the following statements best describes Jean-Baptiste Lamarck's theory of 'inheritance of acquired characteristics'?", c: ["Environmental pressures promote the survival of the fittest", "Allele frequencies change randomly over time due to chance", "Gene frequencies change due to the movement of individuals", "Catastrophes resulted in the random selection of species", "Traits developed through use and disuse during an organism's life are passed to offspring"], a: 4 },
            { stem: "A large population of insects is split into two geographically isolated populations by a new, impassable mountain range. This scenario could lead to:", c: ["Allopatric speciation", "Adaptive radiation", "Balanced polymorphism", "Sympatric speciation", "Polyploidy"], a: 0 },
            { stem: "A population of foxes includes animals with white, black, and intermediate gray fur. Predatory eagles begin targeting foxes with white or black fur. Over time, the fox population consists mainly of individuals with intermediate gray fur. This is an example of:", c: ["Disruptive selection", "Stabilizing selection", "Balancing selection", "Directional selection", "Sexual selection"], a: 1 },
            { stem: "Which of the following is the best measure of an organism's evolutionary fitness?", c: ["The length of time an organism survives", "The number of fertile offspring an organism produces", "The strength of an organism compared to its population", "The length of time its offspring survive", "Its ability to avoid predators"], a: 1 },
            { stem: "A newly hatched goose follows the first moving object it sees, treating it as its mother. This rapid, phase-sensitive learning is known as:", c: ["A fixed action pattern", "A conditioned reflex", "Imprinting", "Habituation", "Operant conditioning"], a: 2 },
            { stem: "In a small, isolated population of wolves, a random landslide kills a large portion of the individuals. The allele frequencies of the surviving population are, by chance, different from the original population. This is an example of:", c: ["Allopatric speciation", "Gene flow", "Natural selection", "The founder effect", "The bottleneck effect"], a: 4 },
            { stem: "The wing of a bat and the wing of a bee are both used for flight but are derived from different ancestral structures. These are examples of:", c: ["Homologous structures resulting from divergent evolution", "Two species from different ancestors developing similar morphologies (convergent evolution)", "Two species splitting from the same ancestor and then re-converging", "Two species from the same ancestor continuing to evolve similar features", "Many species arising from a common ancestor to adapt to unique niches"], a: 1 },
            { stem: "Which type of survivorship curve is characteristic of a species that produces many offspring, most of which die young, with few surviving to reproductive age?", c: ["Type I (e.g., humans)", "Type II (e.g., birds)", "Type IV", "Type III (e.g., sea turtles, trees)", "Type V"], a: 3 },
            { stem: "Which embryonic germ layer is responsible for forming the central nervous system, epidermis of the skin, and neural crest cells?", c: ["Ectoderm", "Mesoderm", "Endoderm", "Notochord", "Archenteron"], a: 0 },
            { stem: "Which hormone is directly responsible for stimulating spermatogenesis in males by acting on Sertoli cells?", c: ["Follicle-stimulating hormone (FSH)", "Luteinizing hormone (LH)", "Estrogen", "Triiodothyronine (T3)", "Growth Hormone (GH)"], a: 0 },
            { stem: "Which step of glycolysis is rate limiting and heavily regulated by ATP and citrate?", c: ["Hexokinase", "Phosphofructokinase-1", "Pyruvate kinase", "Aldolase", "Triose phosphate isomerase"], a: 1 }
        ],
        // Practice Test 7
        [
            { stem: "Which of the following correctly pairs a macromolecule monomer with its corresponding polymer?", c: ["Deoxyribonucleic acid and ribosome", "Amino acid and a digestive enzyme", "Nucleic acid and phospholipid", "Cholesterol and polysaccharide", "Fatty acid and nucleotide"], a: 1 },
            { stem: "A researcher identifies a cell with a thick peptidoglycan layer, no outer membrane, and teichoic acids. This cell will most likely stain...", c: ["Pink (Gram-negative)", "Purple (Gram-positive)", "Green (acid-fast)", "Red (spore-stain)", "It will not stain"], a: 1 },
            { stem: "Which of the following is the primary purpose of the electron transport chain in the inner mitochondrial membrane?", c: ["To directly synthesize ATP from ADP and Pi", "To break down glucose into pyruvate", "To create a proton (H+) gradient", "To oxidize water and release oxygen", "To reduce NAD+ and FAD"], a: 2 },
            { stem: "A competitive inhibitor of an enzyme will have what effect on its kinetic parameters?", c: ["Increase Vmax, no change in Km", "Decrease Vmax, decrease Km", "No change in Vmax, increase Km", "Decrease Vmax, increase Km", "No change in Vmax, decrease Km"], a: 2 },
            { stem: "Which of the following structures is composed of microtubules and is involved in organizing the spindle fibers during mitosis?", c: ["Ribosome", "Centrosome", "Lysosome", "Peroxisome", "Chromatin"], a: 1 },
            { stem: "A DNA sequence reads 5'-TGCGCACTAT-3'. What is its complementary DNA strand, written in the 5' to 3' direction?", c: ["5'-ACGCGTGATA-3'", "3'-ACGCGTGATA-5'", "5'-ATAGTGCGCA-3'", "3'-UGCGUGUAUA-5'", "5'-ATAGTGCGCA-3'"], a: 2 },
            { stem: "A cell that is active in steroid hormone synthesis, such as a Leydig cell, would be expected to have an extensive network of which organelle?", c: ["Rough endoplasmic reticulum", "Golgi apparatus", "Lysosomes", "Mitochondria", "Smooth endoplasmic reticulum"], a: 4 },
            { stem: "A father has hemophilia, an X-linked recessive trait. The mother is a carrier but does not have hemophilia. What are the chances that their son will have hemophilia?", c: ["0%", "25%", "50%", "75%", "100%"], a: 2 },
            { stem: "A man and a woman both have normal skin color, but both have one parent with albinism (an autosomal recessive condition). If they have two children, what is the probability that both children will have albinism?", c: ["1/2", "1/4", "1/8", "1/16", "1/32"], a: 3 },
            { stem: "In pea plants, tall (T) is dominant to short (t), and round (R) is dominant to wrinkled (r). If a plant with genotype TtRr is crossed with itself, what fraction of the offspring will be recessive for both traits (ttrr)?", c: ["1/32", "1/16", "1/8", "1/4", "1/2"], a: 1 },
            { stem: "A mutation occurs where one or more nucleotide pairs are inserted into or deleted from a gene. This type of mutation is particularly dangerous because it alters the reading frame. What is it called?", c: ["Missense mutation", "Nonsense mutation", "Silent mutation", "Frameshift mutation", "Point mutation"], a: 3 },
            { stem: "A bacterial cell takes in a small, circular piece of DNA from its environment after a nearby bacterium lyses. This piece of DNA, which is separate from the bacterial genome, is most likely a:", c: ["Plasmid", "Vector", "tRNA", "Intron", "Exon"], a: 0 },
            { stem: "The failure of one or more pairs of homologous chromosomes or sister chromatids to separate normally during nuclear division is called:", c: ["Translocation", "Inversion", "Nondisjunction", "Crossing over", "Synapsis"], a: 2 },
            { stem: "Which of the following is the correct order of structures that chyme passes through after leaving the stomach?", c: ["Ileum -> Jejunum -> Duodenum -> Cecum -> Colon", "Duodenum -> Jejunum -> Ileum -> Cecum -> Colon", "Duodenum -> Ileum -> Jejunum -> Colon -> Cecum", "Jejunum -> Duodenum -> Ileum -> Colon -> Cecum", "Cecum -> Duodenum -> Jejunum -> Ileum -> Colon"], a: 1 },
            { stem: "Which hormone, released from the posterior pituitary, acts on the collecting ducts of the kidney to increase water reabsorption?", c: ["Aldosterone", "Angiotensin II", "Oxytocin", "Vasopressin (ADH)", "Prolactin"], a: 3 },
            { stem: "In the process of skeletal muscle contraction, what is the direct role of calcium ions (Ca2+)?", c: ["They bind to the myosin head, causing it to detach from actin.", "They are released from the sarcoplasmic reticulum and bind to troponin.", "They bind to tropomyosin, moving it off the actin-binding sites.", "They provide the energy for the power stroke.", "They are co-factors for the enzyme acetylcholinesterase."], a: 1 },
            { stem: "Which of the following blood components is a cell fragment derived from a megakaryocyte and is essential for blood clotting (hemostasis)?", c: ["Erythrocyte", "Leukocyte", "Platelet (Thrombocyte)", "Monocyte", "Neutrophil"], a: 2 },
            { stem: "Which part of the brain is primarily responsible for coordinating balance, posture, and fine motor control?", c: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus", "Thalamus"], a: 1 },
            { stem: "The P wave on an electrocardiogram (ECG) corresponds to which electrical event in the heart?", c: ["Depolarization of the atria", "Repolarization of the atria", "Depolarization of the ventricles", "Repolarization of the ventricles", "Firing of the AV node"], a: 0 },
            { stem: "Which of the following is the most superficial layer of the epidermis, composed of dead, anucleated, keratinized cells?", c: ["Stratum basale", "Stratum spinosum", "Stratum granulosum", "Stratum lucidum", "Stratum corneum"], a: 4 },
            { stem: "What is the primary function of bile, which is produced by the liver and stored in the gallbladder?", c: ["To enzymatically digest proteins", "To neutralize stomach acid in the duodenum", "To enzymatically digest carbohydrates", "To emulsify fats, increasing their surface area for lipases", "To stimulate the release of gastrin"], a: 3 },
            { stem: "Which of the following is an example of a cell involved in the innate (non-specific) immune response?", c: ["Plasma cell", "Helper T-cell", "Macrophage", "Cytotoxic T-cell", "Memory B-cell"], a: 2 },
            { stem: "A patient's vision is impaired. He can see clearly in bright light and perceive color, but has great difficulty seeing in dim light. This suggests damage to his:", c: ["Rods", "Cones", "Cornea", "Iris", "Lens"], a: 0 },
            { stem: "Which hormone is directly responsible for the development of male secondary sex characteristics during puberty?", c: ["Follicle-stimulating hormone (FSH)", "Luteinizing hormone (LH)", "Gonadotropin-releasing hormone (GnRH)", "Estrogen", "Testosterone"], a: 4 },
            { stem: "Which embryonic germ layer gives rise to the circulatory system, the musculoskeletal system, and the gonads?", c: ["Ectoderm", "Mesoderm", "Endoderm", "Neural Tube", "Archenteron"], a: 1 },
            { stem: "What is the correct order of the early stages of embryonic development?", c: ["Cleavage -> Zygote -> Blastocyst -> Morula -> Implantation", "Zygote -> Morula -> Cleavage -> Blastocyst -> Implantation", "Zygote -> Cleavage -> Morula -> Blastocyst -> Implantation", "Blastocyst -> Morula -> Zygote -> Cleavage -> Implantation", "Zygote -> Blastocyst -> Morula -> Cleavage -> Implantation"], a: 2 },
            { stem: "The phenomenon in which one group of embryonic cells influences the developmental fate of an adjacent group of cells is known as:", c: ["Transformation", "Transduction", "Gastrulation", "Induction", "Cleavage"], a: 3 },
            { stem: "In humans, the yolk sac, which is nutrient-rich in birds, serves a different primary purpose. What is this function in the early human embryo?", c: ["Uric acid storage", "It is the first site of red blood cell synthesis", "Site to excrete wastes to the mother", "Development of the nervous system", "Provides all nourishment until the placenta forms"], a: 1 },
            { stem: "During gastrulation in a deuterostome, the blastopore (the first opening) develops into the:", c: ["Mouth", "Anus", "Neural tube", "Heart", "Gills"], a: 1 },
            { stem: "Which extraembryonic membrane in an amniotic egg (like a chicken's) is a sac that buds off the archenteron, stores uric acid, and later fuses with the chorion for gas exchange?", c: ["Chorion", "Yolk sac", "Amnion", "Placenta", "Allantois"], a: 4 },
            { stem: "A population of deer is reduced by 90% due to a new viral disease. The surviving deer, by chance, have a different allele frequency than the original population. This is an example of:", c: ["The founder effect", "The bottleneck effect", "Stabilizing selection", "Disruptive selection", "Gene flow"], a: 1 },
            { stem: "Which of the following is a density-dependent factor that would limit population growth?", c: ["A severe frost", "A volcanic eruption", "A wildfire", "An earthquake", "Competition for food"], a: 4 },
            { stem: "A harmless hoverfly has evolved to have black and yellow stripes, mimicking the appearance of a dangerous wasp. This is an example of:", c: ["Aposematic coloration", "Mullerian mimicry", "Batesian mimicry", "Cryptic coloration (camouflage)", "Commensalism"], a: 2 },
            { stem: "Which of the following conditions is required for a population to be in Hardy-Weinberg equilibrium?", c: ["No mutations", "Small population size", "Natural selection is occurring", "Non-random mating", "Gene flow is present"], a: 0 },
            { stem: "Organisms such as rabbits and bacteria, which are characterized by rapid reproduction, many offspring, and low parental investment, are known as:", c: ["K-selected species", "r-selected species", "Keystone species", "Indicator species", "Pioneer species"], a: 1 },
            { stem: "The emergence of new land from a volcanic eruption would be colonized by organisms in a process known as:", c: ["Secondary succession", "A climax community", "Primary succession", "The founder effect", "Competitive exclusion"], a: 2 },
            { stem: "Which of the following organisms, which includes both unicellular (yeast) and multicellular (mushroom) forms, are heterotrophic decomposers with cell walls made of chitin?", c: ["Plantae", "Animalia", "Bacteria", "Fungi", "Protista"], a: 3 },
            { stem: "A marine biologist discovers a new organism with bilateral symmetry, body segmentation, and multiple pairs of jointed appendages. This organism most likely belongs to which animal phylum?", c: ["Chordata", "Annelida", "Echinodermata", "Platyhelminthes", "Arthropoda"], a: 4 },
            { stem: "Bryophytes, such as mosses, are distinct from other plant groups because they:", c: ["Have a dominant sporophyte generation", "Are non-vascular (lack xylem and phloem)", "Produce seeds", "Have flowers and fruits", "Are prokaryotic"], a: 1 },
            { stem: "Obligate anaerobic bacteria are most sensitive to oxygen because they typically lack which detoxifying enzyme?", c: ["DNA polymerase", "Catalase", "RNA polymerase", "Topoisomerase", "Lysozyme"], a: 1 }
        ],
        // Practice Test 8
        [
            { stem: "Which of the following double-stranded DNA sequences would require the most heat to denature (i.e., has the highest melting point)?", c: ["5'-ACGATTATAA-3'", "5'-TGCGCACTAT-3'", "5'-AGATGCTAAG-3'", "5'-TGCAGGCTAC-3'", "5'-ACAATGTTAG-3'"], a: 3 },
            { stem: "A scientist observes small particles isolated from a cell. When placed in a solution with radioactive amino acids, the amount of radioactive protein increases over time. What are these particles?", c: ["Lipid vacuoles", "Lysosomes", "Mitochondria", "Ribosomes", "Histones"], a: 3 },
            { stem: "In the absence of oxygen, yeast cells will perform fermentation to regenerate NAD+. In addition to NAD+, what is the other major product of this anaerobic process in yeast?", c: ["Glucose", "Methanol", "Lactic acid", "Ethanol", "Pyruvate"], a: 3 },
            { stem: "A genetic mutation inactivates the histone proteins in a eukaryotic cell. Which of the following would be the most likely and immediate result?", c: ["A significant decrease in gene expression", "A large increase in mutation rate", "RNA polymerase will be able to more easily access the DNA", "The cell cycle duration will become shorter", "Chromatin will become more tightly packaged"], a: 2 },
            { stem: "Which of the following correctly describes the process of forming a biomolecular polymer from its monomers?", c: ["A molecule of H2O is formed (dehydration synthesis)", "A molecule of O2 is consumed", "A molecule of H2O is consumed (hydrolysis)", "A molecule of ATP is formed", "A molecule of O2 is formed"], a: 0 },
            { stem: "During transcription, the RNA polymerase reads the template DNA strand in the 3' -> 5' direction. What is the orientation of the resulting mRNA strand that is synthesized?", c: ["It is synthesized in the 3' -> 5' direction", "It is synthesized in the 5' -> 3' direction", "It is synthesized in both directions simultaneously", "Its orientation depends on whether it is a prokaryote or eukaryote", "It is synthesized from the centromere outwards"], a: 1 },
            { stem: "An enzyme's function is highly dependent on its specific 3D shape, which is defined by its tertiary structure. The tertiary structure is primarily stabilized by what type of interactions?", c: ["The sequence of amino acids", "Hydrogen bonds between backbone amides and carbonyls", "Interactions between the R-groups (side chains) of amino acids", "The interaction of multiple polypeptide subunits", "The phosphodiester bonds"], a: 2 },
            { stem: "Which of the following processes occurs in the mitochondrial matrix of a eukaryotic cell?", c: ["Glycolysis", "Light-dependent reactions", "The Krebs cycle (Citric Acid Cycle)", "Fermentation", "The Calvin Cycle"], a: 2 },
            { stem: "A father has muscular dystrophy (X-linked recessive, XmY). He and a phenotypically normal mother have a son who also has muscular dystrophy (XmY). What must be the genotype of the mother?", c: ["XmY", "XY", "XMXm (carrier)", "XMXM (homozygous dominant)", "XmXm (affected)"], a: 2 },
            { stem: "A couple has had 12 children, and all of them happen to be males. What is the probability that their 13th child will be a female?", c: ["1/13", "1/2", "1/4", "1/2048", "1/4096"], a: 1 },
            { stem: "A cell from a diploid organism is 2N = 20. How many chromatids will be present in this cell at Metaphase of mitosis?", c: ["10", "20", "30", "40", "80"], a: 3 },
            { stem: "A mutation in a single gene (FBN1) causes Marfan syndrome, which results in a wide range of symptoms including heart defects, vision problems, and skeletal abnormalities. This phenomenon, where one gene affects multiple traits, is called:", c: ["Epistasis", "Variable penetrance", "Incomplete dominance", "Pleiotropy", "Polygenic inheritance"], a: 3 },
            { stem: "In a dihybrid cross between two plants with the genotype AaBbCcDd, what is the probability of obtaining an offspring with the genotype AaBbCcDD?", c: ["1/12", "1/16", "1/32", "1/64", "1/128"], a: 2 },
            { stem: "Epigenetic modifications are heritable changes that affect gene expression. All of the following are characteristics of epigenetics EXCEPT one. Which one is the EXCEPTION?", c: ["It modifies the nucleotide sequence (e.g., A, T, C, G)", "It can be heritable", "It contributes to phenotypic variability", "It influences gene expression", "It may result from external or environmental factors"], a: 0 },
            { stem: "Which of the following structures is the 'pacemaker' of the heart, initiating the electrical impulse for a normal heartbeat?", c: ["Interventricular septum", "Purkinje fibers", "Sympathetic vagus nerve", "Sinoatrial (SA) node", "Atrioventricular (AV) node"], a: 3 },
            { stem: "A man is injected with an unknown substance. It causes dilation of blood vessels in the heart, lungs, and skeletal muscle, but constricts blood flow to the skin and kidneys. This substance is most likely:", c: ["Glucagon", "Epinephrine", "Acetylcholine", "Cortisol", "Nitric oxide"], a: 1 },
            { stem: "The passive circulation of lymph throughout the body is driven by all of the following EXCEPT one. Which one is the EXCEPTION?", c: ["The location of re-entry into the circulatory system", "Smooth muscle contractions in lymph vessels", "Skeletal muscle contractions", "Lymph node contractions", "Lymphatic valves preventing backflow"], a: 3 },
            { stem: "Which of the following are hormones that directly stimulate the development and maintenance of female secondary sex characteristics?", c: ["Progesterone and FSH", "LH and Estrogen", "LH and Progesterone", "FSH and hCG", "Estrogen and Progesterone"], a: 4 },
            { stem: "Which of these immune cells differentiates into antibody-secreting plasma cells and memory cells?", c: ["T lymphocytes", "B lymphocytes", "Neutrophils", "Macrophages", "Basophils"], a: 1 },
            { stem: "Which of the following is the correct order of the layers of the skin, from the most superficial layer to the deepest layer that attaches to the basement membrane?", c: ["Corneum -> Granulosum -> Spinosum -> Basale", "Basale -> Spinosum -> Granulosum -> Corneum", "Corneum -> Spinosum -> Granulosum -> Basale", "Spinosum -> Granulosum -> Corneum -> Basale", "Basale -> Granulosum -> Spinosum -> Corneum"], a: 0 },
            { stem: "Alcohol consumption famously leads to increased urination because it inhibits the release of which hormone?", c: ["Aldosterone", "Angiotensin", "Insulin", "Parathyroid hormone", "Antidiuretic hormone (ADH)"], a: 4 },
            { stem: "Which of the following structures is responsible for processing sensory information and initiating voluntary movement?", c: ["Medulla oblongata", "Brainstem", "Cerebral cortex", "Olfactory bulb", "Thalamus"], a: 2 },
            { stem: "Which of the following structures is found lining the respiratory tract and is responsible for clearing debris and pathogens from the airway?", c: ["Keratin", "Flagella", "Microvilli", "Cilia", "Pili"], a: 3 },
            { stem: "A patient is unable to see objects in color or with high visual acuity, suggesting a defect in which of his retinal cells?", c: ["Rods", "Cones", "Cornea", "Iris", "Bipolar cells"], a: 1 },
            { stem: "All of the following are cell types found within the gastric glands of the stomach EXCEPT one. Which one is the EXCEPTION?", c: ["Mucous cells", "Chief cells", "Parietal cells", "G cells", "Goblet cells"], a: 4 },
            { stem: "A chicken embryo goes through 8 rounds of cell division (cleavage) with no G-phases. How many cells will the embryo consist of, and what will their size be compared to the original zygote?", c: ["The cell size gets smaller; cell number will be 2^8", "The cell size gets larger; cell number will be 2^8", "The cell size stays the same; cell number will be 16", "The cell size stays the same; cell number will be 8", "The embryo will consist of one large cell with 8 nuclei"], a: 0 },
            { stem: "In humans, fertilization of an oocyte by a sperm typically occurs in which location?", c: ["Vagina", "Uterus", "Ovary", "Ampulla of the fallopian tube", "Cervix"], a: 3 },
            { stem: "What term describes the asexual reproduction process where an animal develops from an unfertilized egg?", c: ["Parthenogenesis", "Binary Fission", "Regeneration", "Budding", "Fragmentation"], a: 0 },
            { stem: "Which of the following organisms would be expected to lack an amnion, an extraembryonic membrane that cushions and protects the developing embryo?", c: ["Swan (bird)", "Human", "Platypus (monotreme)", "Alligator (reptile)", "Frog (amphibian)"], a: 4 },
            { stem: "Human semen contains a high concentration of prostaglandins. What is the primary effect of these molecules on the female reproductive system?", c: ["They inhibit milk production", "They stimulate uterine contractions", "They inhibit contraction of the uterus", "They regulate the stress response", "They trigger ovulation"], a: 1 },
            { stem: "Which of the following is the best definition of an organism's evolutionary fitness?", c: ["The length of time an organism survives", "The number of fertile offspring an organism produces", "The strength of an organism compared to the population", "The ability of an organism to adapt to new environments", "The complexity of an organism's metabolic pathways"], a: 1 },
            { stem: "The forelimb of a human and the wing of a bat are considered homologous structures because they:", c: ["Serve the same function in both organisms", "Evolved independently from different ancestors to look similar", "Are derived from a common ancestor but have been modified for different functions", "Are non-functional, vestigial remnants of a past ancestor", "Are examples of convergent evolution"], a: 2 },
            { stem: "A species is best defined by the biological species concept as a group of individuals that are:", c: ["Morphologically identical", "Geographically isolated from all other groups", "Reproductively isolated from other such groups", "Found in the same habitat", "Genetically identical"], a: 2 },
            { stem: "A lichen is a symbiotic organism composed of which two types of organisms?", c: ["Fungi and animals", "Cyanobacteria and plants", "Plants and protists", "Fungi and insects", "Algae (or cyanobacteria) and fungi"], a: 4 },
            { stem: "In a stable ecosystem, as energy is transferred up the trophic levels from producers to tertiary consumers, what percentage of energy is typically lost at each step?", c: ["1%", "10%", "50%", "90%", "99%"], a: 3 },
            { stem: "Which of the following organisms belongs to the Kingdom Protista?", c: ["Ferns", "Fungi", "Eukaryotic algae", "Cyanobacteria", "Mushroom"], a: 2 },
            { stem: "The first living organisms to appear on Earth were most likely:", c: ["Autotrophic eukaryotes", "Heterotrophic prokaryotes", "Unicellular eukaryotes", "Photosynthetic prokaryotes", "Autotrophic archaea"], a: 1 },
            { stem: "Which of the following structures is found in both bacteria and viruses?", c: ["Organelles", "Cell wall", "Capsid", "Nucleic acids", "Ribosomes"], a: 3 },
            { stem: "Which of the following best describes DNA that is introduced into a bacterium through a virus and then becomes incorporated into the bacterial DNA?", c: ["An F factor", "In the lytic phase", "Transformed", "In the lysogenic phase", "An R plasmid"], a: 3 },
            { stem: "Which component is characteristic of the outer membrane of Gram-negative bacteria and contributes to endotoxin activity?", c: ["Peptidoglycan", "Teichoic acids", "Lipopolysaccharide (LPS)", "Cellulose", "Chitin"], a: 2 }
        ],
        // Practice Test 9
        [
            { stem: "A scientist lyses a cell and centrifuges the contents. Which organelle, being one of the smallest and most numerous, would be expected to pellet last (i.e., remain in the supernatant the longest)?", c: ["Nucleus", "Mitochondria", "Lysosomes", "Ribosomes", "Chloroplasts"], a: 3 },
            { stem: "Alpha-helices and beta-pleated sheets are examples of what level of protein structure, stabilized primarily by hydrogen bonds between backbone functional groups?", c: ["Primary", "Secondary", "Tertiary", "Quaternary", "Holoenzyme"], a: 1 },
            { stem: "A molecule, such as a steroid hormone, diffuses directly through the plasma membrane and binds to an intracellular receptor. This type of molecule is most likely:", c: ["Small and hydrophilic", "Large and charged", "Small and lipid-soluble (hydrophobic)", "A polypeptide", "A carbohydrate"], a: 2 },
            { stem: "Which of the following metabolic processes is common to both aerobic cellular respiration and anaerobic fermentation?", c: ["Krebs Cycle", "Electron Transport Chain", "Oxidative Phosphorylation", "Glycolysis", "Beta-oxidation"], a: 3 },
            { stem: "A mutation prevents a cell from polymerizing actin into microfilaments. Which stage of the cell cycle would be most directly inhibited?", c: ["Chromosome alignment at the metaphase plate", "Organization of the mitotic spindle", "Separation of sister chromatids", "Cytokinesis (formation of the cleavage furrow)", "Prophase condensation"], a: 3 },
            { stem: "Which of the following is a key component of the extracellular matrix in animals, known for providing tensile strength?", c: ["Keratin", "Collagen", "Tubulin", "Actin", "Myosin"], a: 1 },
            { stem: "A cell is placed in a hypertonic solution. What will be the net movement of water and the resulting state of the cell?", c: ["Water moves in; the cell will lyse", "Water moves out; the cell will shrivel (crenate)", "Water moves in; the cell will become turgid", "No net movement; the cell will be flaccid", "Water moves out; the cell will lyse"], a: 1 },
            { stem: "In a eukaryotic gene, what are the non-coding sequences that are transcribed into pre-mRNA but are subsequently spliced out before translation?", c: ["Introns", "Codons", "Exons", "Promoters", "Operons"], a: 0 },
            { stem: "A father has Type A blood (heterozygous, AO) and a mother has Type B blood (heterozygous, BO). What is the probability that they will have a child with Type AB blood?", c: ["0%", "25%", "50%", "75%", "100%"], a: 1 },
            { stem: "Which of the following genetic crosses, where 'A' is dominant to 'a' and 'B' is dominant to 'b', will produce *only* heterozygous offspring (AaBb)?", c: ["AABb x AaBb", "AABB x aabb", "AaBb x AaBb", "aabb x AABB", "AaBB x AABb"], a: 1 },
            { stem: "A geneticist finds that two genes on the same chromosome are rarely separated by crossing over. This indicates that the two genes are:", c: ["On different chromosomes", "Located very close together", "Located very far apart", "Recessive alleles", "Dominant alleles"], a: 1 },
            { stem: "Down syndrome (Trisomy 21) is caused by a nondisjunction event. Which of the following best describes this type of chromosomal abnormality?", c: ["A piece of one chromosome breaks off and attaches to another", "An individual is missing one copy of a chromosome (monosomy)", "An individual has an extra copy of a chromosome (trisomy)", "A segment of a chromosome is reversed", "A segment of a chromosome is lost"], a: 2 },
            { stem: "A researcher wants to create many copies of a specific DNA segment from a very small sample. Which technique is most appropriate?", c: ["Gel electrophoresis", "Karyotyping", "ELISA", "Polymerase Chain Reaction (PCR)", "Western blotting"], a: 3 },
            { stem: "What is the term for the specific location of a gene on a chromosome?", c: ["Allele", "Locus", "Centromere", "Telomere", "Operon"], a: 1 },
            { stem: "Which of the following is the correct order of blood flow after it leaves the left ventricle?", c: ["Aorta -> Arteries -> Arterioles -> Capillaries -> Venules -> Veins -> Vena Cava", "Aorta -> Veins -> Venules -> Capillaries -> Arterioles -> Arteries -> Vena Cava", "Pulmonary Artery -> Lungs -> Pulmonary Vein -> Left Atrium", "Vena Cava -> Right Atrium -> Right Ventricle -> Aorta", "Aorta -> Arterioles -> Arteries -> Capillaries -> Venules -> Veins -> Vena Cava"], a: 0 },
            { stem: "Which hormone, produced by the adrenal cortex, acts on the distal convoluted tubule and collecting duct to increase sodium reabsorption and potassium secretion?", c: ["Aldosterone", "Antidiuretic hormone (ADH)", "Glucagon", "Calcitonin", "Parathyroid hormone"], a: 0 },
            { stem: "During the transmission of a nerve impulse, the influx of which ion is primarily responsible for the depolarization (rising phase) of the action potential?", c: ["Potassium (K+)", "Calcium (Ca2+)", "Chloride (Cl-)", "Sodium (Na+)", "Magnesium (Mg2+)"], a: 3 },
            { stem: "Which of the following is NOT a function of the liver?", c: ["Bile production", "Detoxification of drugs", "Synthesis of plasma proteins (e.g., albumin)", "Storage of glycogen", "Secretion of digestive enzymes like amylase and lipase"], a: 4 },
            { stem: "What is the primary function of the ciliary muscles in the human eye?", c: ["To control the diameter of the pupil", "To move the entire eye in its socket", "To change the shape of the lens for accommodation (focusing)", "To produce the vitreous humor", "To detect photons of light"], a: 2 },
            { stem: "Which of the following correctly pairs a human digestive enzyme with its function?", c: ["Amylase - begins protein digestion in the stomach", "Pepsin - begins carbohydrate digestion in the mouth", "Lipase - breaks down fats (triglycerides) in the small intestine", "Trypsin - emulsifies fats in the small intestine", "Nuclease - digests fiber in the large intestine"], a: 2 },
            { stem: "What is the primary function of the large intestine (colon)?", c: ["Absorption of most nutrients", "Absorption of water and electrolytes", "Production of bile", "Digestion of proteins", "Secretion of hydrochloric acid"], a: 1 },
            { stem: "A bodybuilder injects synthetic testosterone. This will cause a negative feedback loop, leading to which of the following?", c: ["Increased natural testosterone production", "Increased secretion of GnRH by the hypothalamus", "Decreased spermatogenesis", "Increased secretion of LH and FSH by the pituitary", "Hypertrophy of the testes"], a: 2 },
            { stem: "Which of the following structures are mechanoreceptors found in the stratum basale of the epidermis, responsible for light touch sensation?", c: ["Merkel cells", "Meissner's corpuscles", "Langerhans cells", "Melanocytes", "Ruffini endings"], a: 0 },
            { stem: "Which valve prevents backflow of blood from the left ventricle into the left atrium during ventricular systole?", c: ["Tricuspid valve", "Pulmonary semilunar valve", "Mitral (bicuspid) valve", "Aortic semilunar valve", "Eustachian valve"], a: 2 },
            { stem: "Which embryonic germ layer is responsible for forming the lining of the digestive tract, the respiratory system, and organs like the liver and pancreas?", c: ["Ectoderm", "Mesoderm", "Endoderm", "Neural Tube", "Notochord"], a: 2 },
            { stem: "What is the stage of embryonic development that consists of a solid ball of 16-32 cells and precedes the blastocyst?", c: ["Zygote", "Blastocoel", "Gastrula", "Archenteron", "Morula"], a: 4 },
            { stem: "In a developing embryo, the process of gastrulation is most significant because it:", c: ["Is the first mitotic division of the zygote", "Forms the placenta", "Establishes the three primary germ layers", "Is the stage of implantation into the uterus", "Completes meiosis II in the oocyte"], a: 2 },
            { stem: "A breeder crosses an alpaca with a llama, but the hybrid offspring are sterile and cannot reproduce. This is an example of what kind of reproductive isolation?", c: ["Prezygotic isolation", "Mechanical isolation", "Temporal isolation", "Behavioral isolation", "Postzygotic isolation (hybrid sterility)"], a: 4 },
            { stem: "A population of birds has a range of beak sizes. A drought eliminates plants with small seeds, leaving only large, hard seeds. Over time, the average beak size in the population increases. This is an example of:", c: ["Stabilizing selection", "Directional selection", "Disruptive selection", "Artificial selection", "Sexual selection"], a: 1 },
            { stem: "The competitive exclusion principle states that two species cannot indefinitely:", c: ["Live in the same habitat", "Have a symbiotic relationship", "Occupy the exact same niche", "Have a predator-prey relationship", "Be r-selected"], a: 2 },
            { stem: "In the nitrogen cycle, which process is carried out by bacteria in root nodules of legumes, converting atmospheric N2 gas into ammonia (NH3)?", c: ["Nitrification", "Denitrification", "Nitrogen fixation", "Assimilation", "Ammonification"], a: 2 },
            { stem: "Which of the following biomes is characterized by low precipitation, extremely cold temperatures, and a permanently frozen subsoil known as permafrost?", c: ["Taiga (Boreal Forest)", "Temperate Grassland", "Desert", "Tundra", "Savanna"], a: 3 },
            { stem: "A farmer's field, previously plowed and left fallow, begins to be colonized by weeds and grasses. This is an example of:", c: ["Primary succession", "Secondary succession", "A climax community", "The founder effect", "Competitive exclusion"], a: 1 },
            { stem: "Which of the following is a characteristic of all members of Class Mammalia?", c: ["They are endothermic (warm-blooded)", "They lay eggs", "They have a three-chambered heart", "They possess hair or fur at some point in their life", "They all undergo external fertilization"], a: 3 },
            { stem: "Which of the following organisms is a protist that moves and captures food using pseudopods ('false feet')?", c: ["Euglena", "Paramecium", "Yeast", "Amoeba", "Cyanobacteria"], a: 3 },
            { stem: "Fungi are classified as heterotrophs and play a crucial ecological role. What is their primary mode of nutrition?", c: ["Photosynthesis (autotrophs)", "Ingestion (like animals)", "Chemosynthesis", "Absorption of nutrients from their environment (saprophytes/decomposers)", "Parasitism only"], a: 3 },
            { stem: "Which of the following is a key difference between angiosperms (flowering plants) and gymnosperms (conifers)?", c: ["Angiosperms have seeds; gymnosperms do not", "Angiosperms are vascular; gymnosperms are non-vascular", "Angiosperms have 'naked' seeds; gymnosperms have seeds enclosed in a fruit", "Angiosperms have seeds enclosed in a fruit; gymnosperms have 'naked' seeds", "Angiosperms have a dominant gametophyte; gymnosperms have a dominant sporophyte"], a: 3 },
            { stem: "Which plant vascular tissue is responsible for the transport of water and dissolved minerals from the roots to the leaves?", c: ["Phloem", "Xylem", "Stomata", "Cuticle", "Epidermis"], a: 1 },
            { stem: "A virus that infects a bacterium and integrates its own genetic material into the host's chromosome, remaining dormant and replicating with the host, is in which phase?", c: ["Lytic phase", "Lysogenic phase", "Transformation phase", "Conjugation phase", "Binary fission phase"], a: 1 },
            { stem: "Which component of Gram-negative bacteria is located in the outer membrane and acts as an endotoxin?", c: ["Teichoic acid", "Peptidoglycan", "Lipopolysaccharide (LPS)", "Porin protein", "Capsule"], a: 2 }
        ],
        // Practice Test 10
        [
            { stem: "Which of the following is a key distinction between prokaryotic and eukaryotic gene expression?", c: ["Prokaryotes have a nucleus, while eukaryotes do not", "Eukaryotes perform transcription and translation simultaneously, while prokaryotes do not", "Prokaryotes perform transcription and translation simultaneously, while eukaryotes do not", "Prokaryotes have histones, while eukaryotes do not", "Eukaryotes have circular DNA, while prokaryotes have linear chromosomes"], a: 2 },
            { stem: "Pepsin, an enzyme secreted in the stomach, functions to break down proteins. Pepsin is best classified as a:", c: ["Lipase", "Amylase", "Nuclease", "Protease", "Kinase"], a: 3 },
            { stem: "Which organelle, lacking ribosomes, is the primary site of lipid synthesis, steroid hormone production, and detoxification?", c: ["Rough ER", "Golgi apparatus", "Smooth ER", "Peroxisome", "Lysosome"], a: 2 },
            { stem: "During DNA replication, what is the function of single-strand binding proteins (SSBs)?", c: ["They unwind the DNA double helix", "They synthesize the RNA primers", "They prevent the separated DNA strands from re-annealing", "They relieve supercoiling and knots in the DNA", "They join Okazaki fragments together"], a: 2 },
            { stem: "In aerobic cellular respiration, what is the final electron acceptor in the electron transport chain?", c: ["NADP+", "Water", "Oxygen (O2)", "ATP", "Pyruvate"], a: 2 },
            { stem: "A competitive inhibitor binds to the active site of an enzyme. How does this affect the enzyme's kinetics?", c: ["KM increases, Vmax remains unchanged", "KM decreases, Vmax remains unchanged", "Vmax increases, KM remains unchanged", "Vmax decreases, KM remains unchanged", "Both Vmax and KM decrease"], a: 0 },
            { stem: "Which of the following metabolic pathways generates the vast majority of ATP during aerobic respiration?", c: ["Glycolysis", "The Krebs Cycle", "Fermentation", "Beta-oxidation", "Oxidative Phosphorylation (ETC & Chemiosmosis)"], a: 4 },
            { stem: "A plant is placed in a solution with an enzyme that degrades chitin. Which of the following organisms would also be most affected by this enzyme?", c: ["Yeast", "Pine tree", "Slime molds", "Diatoms", "Amoeba"], a: 0 },
            { stem: "Klinefelter syndrome (XXY) is a condition that results from which of the following meiotic errors?", c: ["Translocation", "Nondisjunction", "Inversion", "Polyploidy", "Point mutation"], a: 1 },
            { stem: "In a dihybrid cross of two parents heterozygous for both traits (AaBb x AaBb), what is the expected phenotypic ratio of offspring?", c: ["1:1:1:1", "3:1", "1:2:1", "9:3:3:1", "1:1"], a: 3 },
            { stem: "A point mutation in a somatic (body) cell of an organism will:", c: ["Be passed on to all of the organism's offspring", "Cause a frameshift in all subsequent genes", "Not be passed on to the organism's offspring", "Be immediately corrected by DNA polymerase", "Only occur in prokaryotes"], a: 2 },
            { stem: "A man with normal vision marries a woman who is a carrier for red-green color blindness (an X-linked recessive trait). What is the probability that their son will be color-blind?", c: ["0%", "25%", "50%", "75%", "100%"], a: 2 },
            { stem: "A mother has blood type O and a father has blood type AB. Which of the following blood types is possible for their children?", c: ["Type A", "Type B", "Type AB", "Type O", "All are possible"], a: 0 },
            { stem: "A geneticist crosses a tall pea plant (unknown genotype) with a short pea plant (genotype tt). The offspring are 50% tall and 50% short. What was the genotype of the tall parent plant?", c: ["TT", "Tt", "tt", "T", "t"], a: 1 },
            { stem: "Which of the following best describes the 'Central Dogma' of molecular biology?", c: ["Protein -> RNA -> DNA", "DNA -> RNA -> Protein", "RNA -> DNA -> Protein", "DNA -> Protein -> RNA", "Protein -> DNA -> RNA"], a: 1 },
            { stem: "Which hormone, released by the posterior pituitary, acts on the collecting ducts of the nephron to increase water reabsorption?", c: ["Aldosterone", "Glucagon", "Calcitonin", "Antidiuretic hormone (ADH)", "Thyroxine"], a: 3 },
            { stem: "Which hormone is directly responsible for the development of male secondary sex characteristics, such as facial hair and deepening of the voice?", c: ["FSH", "LH", "GnRH", "Estrogen", "Testosterone"], a: 4 },
            { stem: "In skeletal muscle, the release of calcium from the sarcoplasmic reticulum initiates contraction by binding to which protein?", c: ["Myosin", "Actin", "Tropomyosin", "Troponin", "Titin"], a: 3 },
            { stem: "The descending loop of Henle in the nephron is permeable to __________ but impermeable to _________.", c: ["Water; Salt", "Salt; Water", "Glucose; Water", "Water; Urea", "Salt; Urea"], a: 0 },
            { stem: "A drop in blood calcium levels would trigger the secretion of which hormone?", c: ["Calcitonin", "Parathyroid hormone (PTH)", "Aldosterone", "Insulin", "Glucagon"], a: 1 },
            { stem: "Which structure in the heart is known as the 'pacemaker' because it initiates the normal cardiac cycle?", c: ["AV node", "Purkinje fibers", "Bundle of His", "SA node", "Aortic valve"], a: 3 },
            { stem: "What is the correct order of the epidermal layers, from the surface of the skin to the basement membrane?", c: ["Basale -> Spinosum -> Granulosum -> Lucidum -> Corneum", "Corneum -> Lucidum -> Granulosum -> Spinosum -> Basale", "Corneum -> Granulosum -> Lucidum -> Spinosum -> Basale", "Spinosum -> Basale -> Corneum -> Lucidum -> Granulosum", "Corneum -> Spinosum -> Basale -> Granulosum -> Lucidum"], a: 1 },
            { stem: "What is the correct pathway of air as it is inhaled into the human respiratory system?", c: ["Nostril -> Larynx -> Pharynx -> Trachea -> Bronchi", "Nostril -> Pharynx -> Larynx -> Trachea -> Bronchi", "Nostril -> Pharynx -> Trachea -> Larynx -> Bronchi", "Pharynx -> Larynx -> Nostril -> Trachea -> Bronchi", "Nostril -> Larynx -> Trachea -> Pharynx -> Bronchi"], a: 1 },
            { stem: "The primary function of the large intestine in the human digestive system is:", c: ["Digestion of proteins", "Absorption of fats", "Absorption of water and electrolytes", "Production of bile", "Neutralization of acid"], a: 2 },
            { stem: "In humans, fertilization of an oocyte by a sperm most commonly occurs in which part of the female reproductive system?", c: ["Ovary", "Uterus", "Cervix", "Fallopian tube (oviduct)", "Vagina"], a: 3 },
            { stem: "The theory of 'inheritance of acquired characteristics,' which states that traits developed during an organism's life (like muscle growth) can be passed to offspring, is most closely associated with which scientist?", c: ["Charles Darwin", "Alfred Russel Wallace", "Georges Cuvier", "Jean-Baptiste Lamarck", "Gregor Mendel"], a: 3 },
            { stem: "A population of squirrels is divided by the formation of a large canyon. Over millions of years, the two separate populations become distinct species. This is an example of:", c: ["Sympatric speciation", "Allopatric speciation", "Adaptive radiation", "Genetic drift", "Founder effect"], a: 1 },
            { stem: "In a population of birds, individuals with average-sized wings survive severe storms better than those with very long or very short wings. This is an example of:", c: ["Directional selection", "Stabilizing selection", "Disruptive selection", "Sexual selection", "Artificial selection"], a: 1 },
            { stem: "Which of the following is NOT a condition required for a population to be in Hardy-Weinberg equilibrium?", c: ["No mutations", "Random mating", "No gene flow", "Large population size", "Non-random mating (sexual selection)"], a: 4 },
            { stem: "The wing of a bat and the flipper of a whale are examples of ______________ structures, as they are derived from a common ancestor but have been adapted for different functions.", c: ["Homologous", "Analogous", "Vestigial", "Convergent", "Sympatric"], a: 0 },
            { stem: "In a food web, which trophic level would be expected to have the least amount of biomass?", c: ["Primary producers", "Primary consumers", "Secondary consumers", "Tertiary consumers", "Decomposers"], a: 3 },
            { stem: "A barnacle attaches to the skin of a whale. The barnacle benefits by gaining a place to live and feed, while the whale is apparently unharmed. This relationship is an example of:", c: ["Parasitism", "Mutualism", "Commensalism", "Predation", "Competition"], a: 2 },
            { stem: "Which of the following organisms is an example of an r-selected species?", c: ["An elephant (K-selected)", "A human (K-selected)", "A whale (K-selected)", "A rabbit", "A gorilla (K-selected)"], a: 3 },
            { stem: "The nervous system (brain, spinal cord) and the epidermis of the skin are both derived from which embryonic germ layer?", c: ["Ectoderm", "Mesoderm", "Endoderm", "Archenteron", "Notochord"], a: 0 },
            { stem: "Which of the following is the correct sequence of early embryonic development?", c: ["Zygote -> Blastocyst -> Morula -> Gastrula", "Zygote -> Cleavage -> Morula -> Blastocyst", "Morula -> Zygote -> Cleavage -> Blastocyst", "Gastrula -> Morula -> Blastocyst -> Zygote", "Zygote -> Gastrula -> Morula -> Blastocyst"], a: 1 },
            { stem: "All members of the Kingdom Fungi share which of the following characteristics?", c: ["They are photosynthetic", "They have cell walls made of cellulose", "They are prokaryotic", "They are absorptive heterotrophs with cell walls of chitin", "They are unicellular"], a: 3 },
            { stem: "In the developmental classification of animals, a key difference between protostomes and deuterostomes is that in protostomes, the blastopore becomes the:", c: ["Mouth", "Anus", "Gill slit", "Spinal cord", "Brain"], a: 0 },
            { stem: "Which of the following is a seedless vascular plant, meaning it has xylem and phloem but reproduces via spores?", c: ["Moss", "Pine tree (Gymnosperm)", "Rose (Angiosperm)", "Fern", "Lichen"], a: 3 },
            { stem: "The development of an embryo from an unfertilized egg is a form of asexual reproduction known as:", c: ["Parthenogenesis", "Budding", "Fragmentation", "Binary fission", "Induction"], a: 0 },
            { stem: "What is the key characteristic that distinguishes angiosperms from gymnosperms?", c: ["Angiosperms produce seeds", "Angiosperms are vascular", "Angiosperms produce flowers and fruits that enclose the seeds", "Angiosperms lack a dominant sporophyte generation", "Angiosperms are non-vascular"], a: 2 }
        ]
    ],
    "General Chemistry": [
        // Practice Test 1
        [
            { stem: "Nitric oxide, NO, rapidly reacts with O₂ to form NO₂. How many grams of NO are required to completely react with 1.75 g of O₂?", c: ["(1⁄32)(2⁄1)(30⁄1)", "1.75(1⁄32)(30⁄1)", "1.75(1⁄16)(2⁄1)(30⁄1)", "1.75(1⁄32)(2⁄1)(30⁄1)", "(1⁄16)(30⁄1)"], a: 3 },
            { stem: "At constant volume, pressure is directly proportional to absolute temperature. Which gas law is this?", c: ["Boyle’s Law", "Charles’s Law", "Gay-Lussac’s Law", "Avogadro’s Law"], a: 2 },
            { stem: "Which aqueous solution has the lowest pH at 25°C?", c: ["0.10 M NH₃ (Kᵇ = 1.8×10⁻⁵)", "0.10 M HCN (Kₐ = 6.2×10⁻¹⁰)", "0.10 M HCl", "0.10 M NaOAc (acetic acid Kₐ = 1.8×10⁻⁵)"], a: 2 },
            { stem: "For an endothermic reaction with positive ΔS, the reaction is:", c: ["Spontaneous at all T", "Nonspontaneous at all T", "Spontaneous only at low T", "Spontaneous only at high T"], a: 3 },
            { stem: "Which atom has the largest first ionization energy?", c: ["Na", "Cl", "K", "S"], a: 1 },
            { stem: "Adding NaCl to water primarily changes which property?", c: ["Vapor pressure (decreases)", "Density (decreases)", "Boiling point (decreases)", "Freezing point (increases)"], a: 0 },
            { stem: "For the reaction N₂O₄(g) ⇌ 2 NO₂(g), which change shifts equilibrium to the right?", c: ["Decrease T (exo forward)", "Increase volume of container", "Add inert gas at constant V", "Remove NO₂"], a: 1 },
            { stem: "A plot of ln[A] vs time is linear. The reaction order in A is:", c: ["Zero", "First", "Second", "Third"], a: 1 },
            { stem: "In the acidic half-reaction method, what is the coefficient of H₂O when balancing Cr₂O₇²⁻ → Cr³⁺?", c: ["7 on product side", "7 on reactant side", "14 on product side", "None"], a: 0 },
            { stem: "What is the molecular geometry of SF₄?", c: ["Tetrahedral", "Trigonal bipyramidal", "Seesaw", "Square planar"], a: 2 },
            { stem: "Which has the highest normal boiling point?", c: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"], a: 3 },
            { stem: "For a galvanic cell, which is true?", c: ["Electrons flow anode→cathode; E°cell > 0", "Electrons flow cathode→anode; E°cell < 0", "Oxidation at cathode", "Cations flow to anode through salt bridge"], a: 0 },
            { stem: "Compared with ideal behavior, a real gas at high pressure shows:", c: ["Lower P due to attractions", "Higher P due to attractions", "Same P because b cancels a", "No dependence on a or b"], a: 0 },
            { stem: "A buffer is made by mixing 0.20 mol HA (Kₐ = 1.0×10⁻⁵) and 0.10 mol A⁻ in 1.0 L. pH is roughly:", c: ["4.70", "4.30", "5.00", "9.70"], a: 1 },
            { stem: "Which radiation has the greatest penetrating power?", c: ["α", "β", "γ", "Positron"], a: 2 },
            { stem: "How many orbitals are in a 4d subshell?", c: ["5", "7", "9", "10"], a: 0 },
            { stem: "At the equivalence point of a strong acid–strong base titration, the pH is:", c: ["< 7", "= 7", "> 7", "Cannot be determined"], a: 1 },
            { stem: "Which of the following statements is true regarding an ideal gas?", c: ["Gas molecules occupy significant volume.", "Gas molecules exert attractive forces.", "Gas molecules undergo elastic collisions.", "Gas molecules have different kinetic energies at the same temperature."], a: 2 },
            { stem: "A piston contains an ideal gas at 25°C and 2 atm. The piston is compressed isothermally to half of its original volume. What is the new pressure?", c: ["1 atm", "2 atm", "3 atm", "4 atm"], a: 3 },
            { stem: "For the equilibrium: 2 NOCl(g) ⇌ 2 NO(g) + Cl₂(g), increasing the volume will:", c: ["Shift equilibrium right", "Shift equilibrium left", "Have no effect", "Decrease K_eq"], a: 0 },
            { stem: "Which salt forms a basic solution in water?", c: ["NaCl", "NH₄NO₃", "Na₂CO₃", "KNO₃"], a: 2 },
            { stem: "Which of the following has zero dipole moment?", c: ["NH₃", "CO₂", "CH₃Cl", "SO₂"], a: 1 },
            { stem: "Which statement about galvanic cells is correct?", c: ["The anode is positive.", "Oxidation occurs at the anode.", "Electrons flow from cathode to anode.", "The cell requires external power."], a: 1 },
            { stem: "Which of the following species has the highest lattice energy?", c: ["NaCl", "MgO", "CaS", "KI"], a: 1 },
            { stem: "Mixing 50 mL of 0.10 M HCl with 50 mL of 0.10 M NaOH gives a solution with:", c: ["pH < 7", "pH = 7", "pH > 7", "Undefined pH"], a: 1 },
            { stem: "The reduction half-reaction with the highest E°red is the strongest:", c: ["Reducing agent", "Oxidizing agent", "Neutral species", "Base"], a: 1 },
            { stem: "Which of the following gases deviates most from ideal behavior?", c: ["He at 300 K, 1 atm", "Ne at 300 K, 1 atm", "CO₂ at 300 K, 1 atm", "CO₂ at 200 K, 10 atm"], a: 3 },
            { stem: "What is the hybridization of the central atom in XeF₄?", c: ["sp³", "sp³d", "sp³d²", "sp³d³"], a: 2 },
            { stem: "How many σ and π bonds are in benzene (C₆H₆)?", c: ["6 σ, 6 π", "12 σ, 3 π", "6 σ, 3 π", "12 σ, 6 π"], a: 1 },
            { stem: "A 1.0 L flask contains 0.20 mol N₂, 0.10 mol O₂, and 0.30 mol CO₂ at 25°C. What is the total pressure (R = 0.0821 L·atm·mol⁻¹·K⁻¹)?", c: ["~7.4 atm", "~6.0 atm", "~2.5 atm", "~1.5 atm"], a: 0 }
        ],
        // Practice Test 2
        [
            { stem: "A student measures the mass of a liquid three times, obtaining 15.2 g, 15.3 g, and 15.1 g. The actual mass of the liquid is 17.5 g. Which of the following best describes these measurements?", c: ["Accurate but not precise", "Precise but not accurate", "Both accurate and precise", "Neither accurate nor precise"], a: 1 },
            { stem: "Using an incorrectly calibrated pipette (e.g., it always dispenses 0.95 mL when it should dispense 1.00 mL) will result in what type of error?", c: ["Random error", "Systematic error", "Gross error", "Personal error"], a: 1 },
            { stem: "A molecule has a molar mass of 180.15 g/mol and an empirical formula of CH₂O. What is the molecular formula?", c: ["CH₂O", "C₃H₆O₃", "C₆H₁₂O₆", "C₇H₁₄O₇"], a: 2 },
            { stem: "How many grams of magnesium chloride (95.3 g/mol) are produced when 1.0 mol Cl₂ reacts with 0.5 mol Mg? Mg(s) + Cl₂(g) → MgCl₂(s)", c: ["47.7 g", "95.3 g", "190.6 g", "24.1 g"], a: 0 },
            { stem: "Which element has the highest first ionization energy?", c: ["Na", "Si", "S", "Ar"], a: 3 },
            { stem: "Rank the following in order of decreasing atomic radius: K, Ca, Sc.", c: ["K > Ca > Sc", "Sc > Ca > K", "Ca > K > Sc", "K > Sc > Ca"], a: 0 },
            { stem: "What is the correct molecular geometry of NH₃?", c: ["Tetrahedral", "Trigonal planar", "Bent", "Trigonal pyramidal"], a: 3 },
            { stem: "Which of the following is an isoelectronic series?", c: ["Na⁺, K⁺, Rb⁺", "K⁺, Ca²⁺, Ar, S²⁻", "Na⁺, Mg²⁺, S²⁻, Cl⁻", "Li, Be, B, C"], a: 1 },
            { stem: "A triple bond, such as in N₂, contains:", c: ["Three σ bonds", "Two σ bonds and one π bond", "One σ bond and two π bonds", "Three π bonds"], a: 2 },
            { stem: "If the temperature of a gas is halved at constant pressure, the volume…", c: ["will be halved.", "will double.", "will be reduced to a third.", "will not change."], a: 0 },
            { stem: "A container holds 4.0 L of gas at 3.5 atm and 27°C. If the pressure is reduced to 0.8 atm at constant temperature, what is the new volume?", c: ["11.0 L", "14.0 L", "15.0 L", "17.5 L"], a: 3 },
            { stem: "A mixture of O₂, N₂, and F₂ has a total pressure of 2.0 atm. Mole fractions are 0.3, 0.5, and 0.2, respectively. What is the partial pressure of the gas present in the greatest mass? (Mᵣ: O₂=32, N₂=28, F₂=38 g/mol)", c: ["0.4 atm (F₂)", "0.6 atm (O₂)", "1.0 atm (N₂)", "0.8 atm (F₂)"], a: 2 },
            { stem: "Which of the following is expected to be insoluble in water?", c: ["AgNO₃", "CsOH", "Mg(ClO₄)₂", "HgCO₃"], a: 3 },
            { stem: "A solution that cannot dissolve any more solute at room temperature is said to be…", c: ["Unsaturated", "Saturated", "Supersaturated", "Dilute"], a: 1 },
            { stem: "How many liters of a 10 M NaOH stock are needed to prepare 4 L of 0.12 M NaOH?", c: ["0.48 L", "0.30 L", "0.12 L", "0.05 L"], a: 3 },
            { stem: "A chemical compound X decomposes with a half-life of 3 hours. If there are 20 g of X, how long until 5 g remain?", c: ["1.5 h", "3 h", "6 h", "9 h"], a: 2 },
            { stem: "What is the overall order for rate = k[O₂]²[H₂]⁰·⁵?", c: ["2", "0.5", "2.5", "1"], a: 2 },
            { stem: "A plot of 1/[A] versus time produces a straight line. What is the rate law?", c: ["rate = k", "rate = k[A]", "rate = k[A]²", "rate = k[A]³"], a: 2 },
            { stem: "Which statement is true regarding an endothermic reaction?", c: ["Heat is released.", "The surroundings cool down.", "ΔH is negative.", "Heat energy leaves the system."], a: 1 },
            { stem: "Given CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g), what is the setup for ΔH°rxn? (ΔH°f: CH₄=-75, CO₂=-393.5, H₂O=-285.8 kJ/mol)", c: ["[-393.5 + 2(-285.8)] - [-75]", "[-393.5 + (-285.8)] - [-75]", "[-75] - [-393.5 + 2(-285.8)]", "[-393.5 + 2(-285.8)] - [-75 + 2(0)]"], a: 3 },
            { stem: "Which statement is true for a reaction with a small negative ΔG?", c: ["Products favored at equilibrium.", "Reactants favored at equilibrium.", "No reaction occurs.", "Reaction is non-spontaneous."], a: 0 },
            { stem: "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + heat, which change decreases K_eq?", c: ["Increasing T", "Decreasing T", "Increasing P", "Adding catalyst"], a: 0 },
            { stem: "Which of the following indicates a reaction is at equilibrium?", c: ["ΔH = 0", "[Reactants] = [Products]", "Q = K", "Forward rate = 0"], a: 2 },
            { stem: "What is the equilibrium expression for MgCO₃(s) ⇌ MgO(s) + CO₂(g)?", c: ["K_c = [CO₂]", "K_c = [MgO][CO₂]/[MgCO₃]", "K_c = [MgCO₃]/([MgO][CO₂])", "K_c = 1/[CO₂]"], a: 0 },
            { stem: "In a galvanic cell, which is true?", c: ["Oxidation at cathode", "Cathode positive, anode negative", "Non-spontaneous reaction", "Electrons flow cathode → anode"], a: 1 },
            { stem: "To electroplate copper with zinc, what occurs at the cathode?", c: ["Cu²⁺ + 2e⁻ → Cu", "Zn²⁺ + 2e⁻ → Zn", "Cu → Cu²⁺ + 2e⁻", "Zn → Zn²⁺ + 2e⁻"], a: 1 },
            { stem: "What is the oxidation number of Mn in [Mn(CN)₆]³⁻?", c: ["-3", "0", "+3", "+6"], a: 2 },
            { stem: "The half-life of strontium-90 is 28 years. Starting with 100 g, how much remains after 84 years?", c: ["50 g", "25 g", "12.5 g", "6.25 g"], a: 2 },
            { stem: "What is the missing product in ²³⁰₉₀Th → ⁰₋₁β + X?", c: ["²³⁰₉₁Pa", "²³⁰₈₉Ac", "²²⁶₈₈Ra", "²³⁰₉₀Th"], a: 0 },
            { stem: "Which best describes nuclear binding energy?", c: ["Energy holding electrons and protons together.", "Energy released during fusion.", "Energy to remove an electron.", "Energy required to disassemble a nucleus."], a: 3 }
        ],
        // Practice Test 3
        [
            { stem: "Which type of glassware sits below the burette in an acid–base titration?", c: ["Beaker", "Volumetric flask", "Graduated cylinder", "Erlenmeyer flask"], a: 3 },
            { stem: "A student performs an experimental reaction and recovers 15 g of product. Based on the amount of reactant used, 20 g of product should have been obtained. What is the percent yield?", c: ["(15)/(20)", "(20)/(15)", "(20−15)/(20)", "(15−20)/(20)"], a: 0 },
            { stem: "A single gram of a compound has 0.5 moles. What is its molar mass?", c: ["0.5 g/mol", "1.0 g/mol", "2.0 g/mol", "4.0 g/mol"], a: 2 },
            { stem: "What is the empirical formula of a molecule with 7 g of N and 16 g of O? (N = 14 g/mol, O = 16 g/mol)", c: ["NO", "N₂O", "NO₂", "N₂O₄"], a: 2 },
            { stem: "Which element has the smallest first ionization energy?", c: ["N", "C", "B", "Be", "Li"], a: 4 },
            { stem: "Which property applies to alkaline-earth metals?", c: ["Form 2⁺ cations", "Have 7 valence electrons", "Are gases at room temp", "Form acidic oxides"], a: 0 },
            { stem: "Which molecule possesses a non-zero dipole moment?", c: ["BF₃", "Si(CH₃)₄", "CO₂", "NH₃"], a: 3 },
            { stem: "What is the bond angle within SO₃?", c: ["90°", "104.5°", "109.5°", "120°"], a: 3 },
            { stem: "Which is the correct electron configuration for Br⁻?", c: ["[Ar] 4s² 4p⁶", "[Ar] 4s² 3d¹⁰ 4p⁵", "[Kr]", "[Ar] 4s² 3d¹⁰ 4p⁶"], a: 2 },
            { stem: "If you halve the pressure of a gas at constant T, what happens to the volume?", c: ["Halved", "Doubles", "Reduced to ¼", "No change"], a: 1 },
            { stem: "Under which condition do real gases behave least ideally?", c: ["High T and high P", "High T and low P", "Low T and high P", "Low T and low P"], a: 2 },
            { stem: "If compound 1 has 1/9 the molar mass of compound 2, how many times faster is its effusion rate?", c: ["1/9", "1/3", "3", "9"], a: 2 },
            { stem: "The point above which a gas cannot be liquefied regardless of pressure is the ___ point.", c: ["Triple", "Critical", "Boiling", "Equivalence"], a: 1 },
            { stem: "75 g of MgCl₂ (M ≈ 95 g/mol) is dissolved in 150 g of H₂O. What is the molality?", c: ["2.5 m", "3.3 m", "5.3 m", "0.5 m"], a: 2 },
            { stem: "When a non-volatile solute like NaCl is added to H₂O, which change occurs?", c: ["Boiling point decreases", "Vapor pressure increases", "Freezing point decreases", "Viscosity unchanged"], a: 2 },
            { stem: "The activation energy of a reaction can be decreased by ___", c: ["Increasing pressure", "Adding reactant", "Increasing temperature", "Adding a catalyst"], a: 3 },
            { stem: "Which is true of a reaction intermediate?", c: ["Consumed in a later step", "Speeds up reaction", "Appears in final equation", "Stable low-energy species"], a: 0 },
            { stem: "For a first-order reaction, what is [A]ₜ/[A]₀ after two half-lives?", c: ["0.5", "0.25", "0.125", "0"], a: 1 },
            { stem: "Which phase transition is exothermic?", c: ["Melting", "Vaporization", "Sublimation", "Freezing"], a: 3 },
            { stem: "Which is a state function?", c: ["Enthalpy", "Work", "Heat", "Power"], a: 0 },
            { stem: "Reactants = 50 kJ; TS = 250 kJ; Products = 100 kJ. Find Ea (forward).", c: ["50 kJ", "150 kJ", "200 kJ", "250 kJ"], a: 2 },
            { stem: "For 2 H₂O(g) + heat ⇌ 2 H₂(g) + O₂(g), which change shifts right?", c: ["↓ T", "Add catalyst", "Remove H₂O", "↓ P"], a: 3 },
            { stem: "For 2 H₂(g)+O₂(g) ⇌ 2 H₂O(g)+heat, which change shifts left?", c: ["↓ T", "Add H₂", "↑ T", "↑ P"], a: 2 },
            { stem: "Correct Ksp for Mg(OH)₂:", c: ["[Mg²⁺][OH⁻]", "[Mg²⁺][2OH⁻]", "[Mg²⁺][OH⁻]²", "[Mg²⁺][2OH⁻]²"], a: 2 },
            { stem: "Which is a redox reaction?", c: ["NaOH+HCl→NaCl+H₂O", "2 Na+Cl₂→2 NaCl", "AgNO₃+NaCl→AgCl+NaNO₃", "AlCl₃+3 H₂O→Al(OH)₃+3 HCl"], a: 1 },
            { stem: "A reducing agent is a species that ___", c: ["gains e⁻", "oxidizes another species", "is reduced", "loses e⁻"], a: 3 },
            { stem: "2 Al₂O₃ + 3 C → 4 Al + 3 CO₂. Which statement is true?", c: ["C oxidized, Al reduced", "C reduced, Al oxidized", "Both oxidized", "No change"], a: 0 },
            
            // --- fixed nuclear section with proper isotope formatting ---
            
            { 
              stem: "The α-decay of iridium-168 produces an α-particle (⁴₂He). What daughter nuclide results?", 
              c: [
                "¹⁷²₇₉Au", 
                "¹⁶⁴₇₅Re", 
                "¹⁶⁸₇₆Os", 
                "¹⁶⁴₇₇Ir"
              ], 
              a: 1 
            },
            
            { 
              stem: "Identify the reaction type: ²³⁵₉₂U + ¹₀n → ¹³⁹₅₆Ba + ⁹²₃₆Kr + 2 ¹₀n", 
              c: [
                "Alpha decay", 
                "Beta decay", 
                "Nuclear fusion", 
                "Nuclear fission"
              ], 
              a: 3 
            },
            
            { 
              stem: " Calculate the mass defect of ²⁰⁰₈₀Hg (weight = 199.078 amu). (p = 1.00728 amu, n = 1.00867 amu)", 
              c: [
                "199.078 − [(80×1.00728)+(120×1.00867)]", 
                "[(80×1.00728)+(120×1.00867)] − 199.078", 
                "[(80×1.00728)+(200×1.00867)] − 199.078", 
                "199.078 − (80×1.00728)"
              ], 
              a: 1 
            },
        // Practice Test 4
        [
            { stem: "Which of the following in this isoelectronic series has the largest atomic radius: OÂ²â», Fâ», Ne, Naâº, MgÂ²âº?", c: ["MgÂ²âº", "Naâº", "Ne", "Fâ»", "OÂ²â»"], a: 4 },
            { stem: "What is the correct number of unpaired electrons in a ground-state cobalt (Co) atom?", c: ["0", "1", "2", "3", "7"], a: 3 },
            { stem: "A container holds a mixture of helium (He, 4 g/mol) and methane (CHâ‚„, 16 g/mol). If there is a small hole, how many times faster will the helium effuse compared to the methane?", c: ["1.5x", "2x", "3x", "4x", "16x"], a: 1 },
            { stem: "Based on the following reduction potentials, which of the following is the strongest oxidizing agent? (EÂ°red values: A=-2.93 V, B=-1.37 V, C=+0.742 V, D=+1.07 V)", c: ["A", "B", "C", "D"], a: 3 },
            { stem: "Which of the following best describes the signs of heat (q) and internal energy (Î”E) for a reaction where no work is done but heat is lost to the surroundings?", c: ["q > 0, Î”E > 0", "q < 0, Î”E < 0", "q > 0, Î”E < 0", "q = 0, Î”E < 0"], a: 1 },
            { stem: "Given A+B â†’ C. Using the data below, determine the rate law. (Trial 1: [A]=0.8, [B]=0.5, Rate=2.5x10â»âµ) (Trial 2: [A]=1.6, [B]=0.5, Rate=1.0x10â»â´) (Trial 3: [A]=0.8, [B]=1.0, Rate=5.0x10â»âµ)", c: ["Rate = k[A][B]", "Rate = k[A]Â²[B]", "Rate = k[A][B]Â²", "Rate = k[A]Â²[B]Â²"], a: 1 },
            { stem: "If the equilibrium constant for the given balanced reaction (A â‡Œ B) is 5, what is the equilibrium constant for the reverse reaction (B â‡Œ A)?", c: ["-5", "5", "0.2", "0.5"], a: 2 },
            { stem: "How many atoms of oxygen are in a 68 g sample of Hâ‚‚Oâ‚‚? (Molar mass Hâ‚‚Oâ‚‚ = 34 g/mol; Avogadro's # â‰ˆ 6.0 x 10Â²Â³)", c: ["6.0 x 10Â²Â³", "1.2 x 10Â²â´", "1.8 x 10Â²â´", "2.4 x 10Â²â´"], a: 3 },
            { stem: "Which of the following numbers possesses the *most* significant digits?", c: ["10.20", "0.000761", "1,000.0", "812.0", "0.905"], a: 2 },
            { stem: "What is the decay constant (k) of a first-order reaction with a half-life of 5 minutes?", c: ["k = 0.693 / 5", "k = 5 / 0.693", "k = 0.693 / 300", "k = 300 / 0.693"], a: 2 },
            { stem: "What is the approximate osmotic pressure (Î ) of a 1.5 M sucrose solution at 300 K? (R = 0.0821 LÂ·atm/molÂ·K)", c: ["3.7 atm", "5.5 atm", "37 atm", "71 atm"], a: 2 },
            { stem: "Which of the following elements is a metalloid?", c: ["Aluminum", "Titanium", "Antimony", "Tin"], a: 2 },
            { stem: "Which of the following molecules has the shortest N-O bond length?", c: ["NOâ‚ƒâ»", "NOâ‚‚â»", "NOâº", "Hâ‚‚NOH"], a: 2 },
            { stem: "A sample of an ideal gas at 25Â°C and 1.0 atm has a volume of 1.2 L. What will be the volume of the same sample at 0.5 atm and 25Â°C?", c: ["0.60 L", "1.2 L", "2.4 L", "4.8 L"], a: 2 },
            { stem: "Given the following redox reaction, which of the following is the oxidizing agent? Cd + NiOâ‚‚ + 2Hâ‚‚O â†’ Cd(OH)â‚‚ + Ni(OH)â‚‚", c: ["Cd", "NiOâ‚‚", "Hâ‚‚O", "Cd(OH)â‚‚"], a: 1 },
            { stem: "Which of the following enthalpy changes is correctly arranged from highest to lowest?", c: ["Î”H_vap > Î”H_sub > Î”H_fus", "Î”H_sub > Î”H_vap > Î”H_fus", "Î”H_fus > Î”H_vap > Î”H_sub", "Î”H_sub > Î”H_fus > Î”H_vap"], a: 1 },
            { stem: "25% of a reactant remains during the process of a 1st order reaction in 20 minutes. What is the rate constant (k)?", c: ["k = -ln(0.25) / 20", "k = -ln(0.75) / 20", "k = ln(20) / 0.25", "k = -ln(0.25) * 20"], a: 0 },
            { stem: "For the reaction 2 NaCl(aq) + SFâ‚‚(g) â‡Œ 2 NaF(s) + SClâ‚‚(l), which of the following changes shifts the equilibrium to the right?", c: ["Adding Hâ‚‚O(l)", "Adding a catalyst", "Increasing the pressure", "Removing NaCl(aq)"], a: 2 },
            { stem: "In the combustion reaction of methane (CHâ‚„ + 2Oâ‚‚ â†’ COâ‚‚ + 2Hâ‚‚O), how many moles of Oâ‚‚ are required to produce 2 moles of Hâ‚‚O?", c: ["1", "2", "3", "4"], a: 1 },
            { stem: "What sequence of steps can be taken to separate a mixture of Substance 1 (Insoluble in cold water, Soluble in hot) and Substance 2 (Soluble in cold water, Soluble in hot)?", c: ["Add cold water, then filter", "Add hot water, then filter", "Add cold water, then add hot water", "Add hot water, then filter, then add cold water"], a: 0 },
            { stem: "Sodium-21 has a binding energy of 7.77 MeV and sodium-23 has a binding energy of 8.11 MeV. Which statement is true about these two isotopes?", c: ["Sodium-21 is more stable.", "Sodium-21 has a greater mass defect.", "Sodium-23 has a greater mass defect.", "Both have the same mass defect."], a: 2 },
            { stem: "Which of the following compounds has the highest boiling point?", c: ["CClâ‚„", "HCl", "Hâ‚‚O", "CHâ‚ƒCHâ‚‚CHâ‚‚", "CHâ‚„"], a: 2 },
            { stem: "Which of the following best explains the phenomenon that chlorine has a greater first ionization energy than sulfur?", c: ["Larger atomic radius", "Weaker electrostatic interactions", "Lower electronegativity", "Higher effective nuclear charge"], a: 3 },
            { stem: "Which of the following electron configurations obeys Hund's Rule?", c: ["1s(â†‘â†“) 2s(â†‘â†“) 2p(â†‘â†“ â†‘_ __)", "1s(â†‘â†“) 2s(â†‘â†“) 2p(â†‘ â†‘ â†‘)", "1s(â†‘â†“) 2s(â†‘â†“) 2p(â†‘â†“ â†‘â†“ __)", "1s(â†‘â†“) 2s(â†‘â†“) 2p(â†‘ â†‘â†“ â†‘)"], a: 1 },
            { stem: "A 5 g block of dry ice (COâ‚‚, 44 g/mol) is placed in an empty 4.00 L sealed container at 27Â°C (300K). What is the correct setup for the pressure in kPa? (R = 8.314 LÂ·kPa/molÂ·K)", c: ["P = (5/44)(8.314)(27) / 4", "P = (44/5)(8.314)(300) / 4", "P = (5/44)(8.314)(300) / 4", "P = (5/44)(0.0821)(300) / 4"], a: 2 },
            { stem: "What is the E°cell for a voltaic cell composed of the half-cells shown? (Br2 + 2 e- -> 2 Br-, E°=+1.09 V) and (Ag+ + e- -> Ag, E°=+0.80 V)", c: ["-0.29 V", "+0.29 V", "+1.89 V", "-1.89 V"], a: 1 },
            { stem: "A 200g sample of mercury at 25Â°C is heated to 75Â°C with the addition of 3kJ of energy. What is the correct setup to calculate the specific heat (c) in J/gÂ°C?", c: ["c = (3000) / (200)(50)", "c = (3000) / (200)(75)", "c = (3) / (200)(50)", "c = (200)(50) / (3000)"], a: 0 },
            { stem: "For a first-order reaction, the half-life is:", c: ["dependent on the initial concentration.", "constant and independent of concentration.", "proportional to the square of the concentration.", "linearly related to time."], a: 1 },
            { stem: "For an exothermic reaction (Î”H < 0), what happens to the value of the equilibrium constant (K_eq) if the temperature is increased?", c: ["K_eq increases", "K_eq decreases", "K_eq stays the same", "K_eq becomes 0"], a: 1 },
            { stem: "A cube with side lengths of 2 cm was filled with 5 moles of oxygen gas (Oâ‚‚). What is the resulting density? (Molar mass Oâ‚‚ = 32 g/mol)", c: ["1.3 g/mL", "10 g/mL", "20 g/mL", "40 g/mL"], a: 2 }
        ],
        // Practice Test 5
        [
            { stem: "Which of the following elements exists as a diatomic gas in its standard state and contains a double covalent bond?", c: ["Krypton", "Oxygen", "Nitrogen", "Chlorine"], a: 1 },
            { stem: "An endothermic reaction is accompanied by an increase in entropy. Under what condition is this reaction spontaneous?", c: ["Spontaneous at all temperatures", "Spontaneous at high temperatures", "Spontaneous at low temperatures", "Non-spontaneous at all temperatures"], a: 1 },
            { stem: "Which of the following tools is correctly matched with its description?", c: ["Graduated cylinder - transfer of precise amounts", "Beaker - mix solutions", "Electronic balance - measure changes in heat", "Buret - vacuum filtration"], a: 1 },
            { stem: "Which of the following best describes the function of a catalyst?", c: ["Shifts equilibrium towards the products", "Provides more energy to a reaction", "Decreases the rate constant", "Provides a more efficient reaction pathway"], a: 3 },
            { stem: "How many moles of oxygen are formed during the decomposition of 4 moles of nitric oxide (NO)? (Reaction: 2 NOâ‚‚(g) â†’ 2 NO(g) + Oâ‚‚(g))", c: ["0.5 mol", "1 mol", "2 mol", "4 mol"], a: 2 },
            { stem: "Consider the reaction: A(g) â‡Œ 2 B(g). At equilibrium, [A] = 3 M and [B] = 2 M. What is the value of the equilibrium constant (K)?", c: ["0.2", "1.3", "3.0", "4.5"], a: 1 },
            { stem: "Which of the following elements has the lowest atomic radius?", c: ["Na", "Li", "Be", "B"], a: 3 },
            { stem: "Which of the following best represents 'X' in the decay process shown below? Â²Â³â°â‚‰â‚€Th â†’ â°â‚‹â‚Î² + X", c: ["Â²Â³â°â‚‰â‚Pa", "Â²Â³â°â‚ˆâ‚‰Ac", "Â²Â²â¶â‚ˆâ‚ˆRa", "Â²Â³â°â‚‰â‚€Th"], a: 0 },
            { stem: "A gas is contained at 2.5 atm. If the volume and temperature are both doubled, what is the new pressure?", c: ["1.25 atm", "2.5 atm", "5 atm", "10 atm"], a: 1 },
            { stem: "Which of the following statements is true regarding a galvanic cell based on these potentials? (Ag+ + e- -> Ag, E°=+0.80 V) and (Tl+ + e- -> Tl, E°=-0.34 V)", c: ["Ag+ is oxidized", "Tl is oxidized", "Ag is oxidized", "Tl+ is reduced"], a: 1 },
            { stem: "What is the correct setup for the osmotic pressure (Î ) of a 0.20 M solution of Naâ‚ƒPOâ‚„ at 30Â°C (303 K)? (R = 0.0821 LÂ·atm/molÂ·K)", c: ["Î  = (0.2)(0.0821)(303)", "Î  = (2)(0.2)(0.0821)(303)", "Î  = (3)(0.2)(0.0821)(303)", "Î  = (4)(0.2)(0.0821)(303)"], a: 3 },
            { stem: "How many equivalent resonance structures can be drawn for the carbonate ion, COâ‚ƒÂ²â»?", c: ["1", "2", "3", "4"], a: 2 },
            { stem: "Which of the following statements is true regarding entropy?", c: ["The entropy of a system will increase as temperature increases.", "Spontaneous reactions require an increase in entropy.", "The entropy of a system increases as pressure increases.", "The entropy of a system decreases as volume increases."], a: 0 },
            { stem: "Which of the following would cause a random error?", c: ["pH meter calibrated incorrectly", "Reading the meniscus at a different angle each time", "Spilling the product", "Electronic balance tarred incorrectly"], a: 1 },
            { stem: "The decomposition of A into B and C is monitored, and a graph of ln[A] vs. time (s) is linear with the equation y = -0.0072x + 0.035. What is the rate constant (k)?", c: ["0.0072 sâ»Â¹", "0.0072 Mâ»Â¹sâ»Â¹", "0.035 sâ»Â¹", "0.035 Mâ»Â¹sâ»Â¹"], a: 0 },
            { stem: "A 5 g block of dry ice (COâ‚‚) is placed in an empty 4.00 L sealed container at a temperature of 27Â°C. What is the pressure in kPa? (R = 8.314 LÂ·kPaÂ·Kâ»Â¹Â·molâ»Â¹)", c: ["(5/44)(8.314)(300) / (4)", "(44/5)(8.314)(300) / (4)", "(5/44)(8.314)(27) / (4)", "(5/44)(0.0821)(300) / (4)"], a: 0 },
            { stem: "Which of the following indicates that a reaction is at equilibrium?", c: ["Î”G = 0", "Î”H = 0", "Î”S = 0", "[Reactants] = [Products]"], a: 0 },
            { stem: "Which of the following elements has the lowest electron affinity?", c: ["Li", "B", "O", "F", "Ne"], a: 4 },
            { stem: "After 220 million years, how much of a 100-gram sample of Uranium-235 would remain, assuming a half-life of 700 million years?", c: ["100 * (1/2)^(220/700)", "100 * (1/2)^(700/220)", "100 * (1/2) * (220/700)", "100 * (1/2) * (700/220)"], a: 0 },
            { stem: "If the temperature of an ideal gas is quadrupled under isovolumetric (constant volume) conditions, what will occur to the pressure?", c: ["2x the original pressure", "1/2 of the original pressure", "1/4 of the original pressure", "4x the original pressure"], a: 3 },
            { stem: "In the process of electroplating a silver object with gold, which reaction must occur at the cathode?", c: ["Agâº + eâ» â†’ Ag", "Ag â†’ Agâº + eâ»", "AuÂ³âº + 3eâ» â†’ Au", "Au â†’ AuÂ³âº + 3eâ»"], a: 2 },
            { stem: "Which physical property is described when the vapor pressure of a liquid equals the atmospheric pressure?", c: ["Melting point", "Triple point", "Critical point", "Boiling point"], a: 3 },
            { stem: "Which of the following is the correct ground-state electron configuration for MgÂ²âº?", c: ["1sÂ²2sÂ²2pâ´3sÂ²", "[Ne] 3sÂ²3pÂ²", "1sÂ²2sÂ²2pâ¶3sÂ²", "1sÂ²2sÂ²2pâ¶"], a: 3 },
            { stem: "Which of the following must be true for a chemical reaction that has the same activation energy for the forward and reverse directions?", c: ["Enthalpy (Î”H) is zero", "Entropy (Î”S) is zero", "The reaction is endothermic", "The reaction is exothermic"], a: 0 },
            { stem: "Which of the following values is needed to determine molar absorbance using the Beer-Lambert Law (A = Îµlc)?", c: ["Tolerance", "Molar Concentration", "Density", "Temperature"], a: 1 },
            { stem: "Based on the graph of 1/[A] vs. time (t) which shows a straight line with a positive slope, which of the following is true?", c: ["This reaction is first-order", "The rate law for this reaction is rate = k[A]Â²", "The half-life of this reaction is constant", "There is a linear relationship between [A] and time"], a: 1 },
            { stem: "A cube with side lengths of 2 cm was filled with 5 moles of oxygen gas. Which of the following would be the resulting density? (Molar mass Oâ‚‚ = 32 g/mol)", c: ["0.1 g/mL", "10 g/mL", "20 g/mL", "40 g/mL"], a: 2 },
            { stem: "Which of the following statements indicates that a reaction is at equilibrium?", c: ["Î”H = 0", "Î”S = 0", "Q = K", "The forward rate is 0"], a: 2 },
            { stem: "Which of the following correctly ranks the atomic radii in decreasing order?", c: ["K > Rb > Na", "Br > I > Cl", "Cl > Na > Mg", "K > Ca > Sc"], a: 3 },
            { stem: "If 25% of a compound remains after 90 days, what is the half-life of the compound?", c: ["22.5 days", "45 days", "90 days", "180 days"], a: 1 }
        ],
        // Practice Test 6
        [
            { stem: "Which of the following would cause a *systematic* error?", c: ["Reading the meniscus at a different angle each time", "An uncalibrated electronic balance that always reads 0.5g high", "A one-time event like spilling product", "Miscalculating a single value"], a: 1 },
            { stem: "Which of the following phase transitions *absorbs* heat (is endothermic)?", c: ["Condensation (gas to liquid)", "Freezing (liquid to solid)", "Deposition (gas to solid)", "Vaporization (liquid to gas)"], a: 3 },
            { stem: "What is the geometry and bonding angle of a CHâ‚ƒCl molecule?", c: ["Bent, 120Â°", "Trigonal planar, 120Â°", "Tetrahedral, 109.5Â°", "Trigonal pyramidal, 107.8Â°"], a: 2 },
            { stem: "Which of the following elements has the *highest* electron affinity (most exothermic)?", c: ["Na", "Al", "S", "Cl", "Ar"], a: 3 },
            { stem: "A container with 1 mol of Hâ‚‚ and 3 mol of He has a total pressure of 200 kPa. What is the partial pressure of Hâ‚‚?", c: ["25 kPa", "50 kPa", "100 kPa", "150 kPa"], a: 1 },
            { stem: "A molecule has a molar mass of 90 g/mol and an empirical formula of CHâ‚‚O (mass â‰ˆ 30 g/mol). What is the molecular formula?", c: ["Câ‚‚Hâ‚„Oâ‚‚", "Câ‚ƒHâ‚†Oâ‚ƒ", "Câ‚†Hâ‚â‚‚Oâ‚†", "CHâ‚‚O"], a: 1 },
            { stem: "For the reaction 2 Hâ‚‚(g) + Oâ‚‚(g) â‡Œ 2 Hâ‚‚O(g) + heat. Which change would shift the equilibrium to the *right* (favor products)?", c: ["Increasing the temperature", "Adding a catalyst", "Decreasing the pressure", "Decreasing the temperature"], a: 3 },
            { stem: "What is the molality (m) of a solution made by dissolving 10 g of NaOH (40 g/mol) in 500 g of water?", c: ["0.25 m", "0.5 m", "1.0 m", "2.0 m"], a: 1 },
            { stem: "A reaction's rate is found to be independent of the concentration of reactant A. What is the reaction order with respect to A?", c: ["Zero-order", "First-order", "Second-order", "Cannot be determined"], a: 0 },
            { stem: "A 32 g sample of an isotope remains after 5 weeks. The isotope's half-life is 7 days. What was the *original* mass?", c: ["1 g", "160 g", "640 g", "1024 g"], a: 3 },
            { stem: "What is the oxidation number of chlorine in HClOâ‚„?", c: ["+1", "+3", "+5", "+7"], a: 3 },
            { stem: "A 1.00 M standard solution is measured three times: 0.81 M, 0.80 M, and 0.82 M. These measurements are:", c: ["Accurate but not precise", "Precise but not accurate", "Both accurate and precise", "Neither accurate nor precise"], a: 1 },
            { stem: "Which of the following molecules is *nonpolar*?", c: ["Hâ‚‚O", "NHâ‚ƒ", "CHâ‚ƒCl", "CClâ‚„"], a: 3 },
            { stem: "Which of the following statements best explains why sodium (Na) is more reactive than magnesium (Mg)?", c: ["Sodium has a lower atomic radius", "Sodium has a lower first ionization energy", "Sodium is a non-metal", "Sodium has a higher electronegativity"], a: 1 },
            { stem: "A 2 L container has a pressure of 5.0 atm. If the volume is expanded to 10 L at constant temperature, what is the new pressure?", c: ["1.0 atm", "2.0 atm", "5.0 atm", "25.0 atm"], a: 0 },
            { stem: "During the decomposition of 2 moles of nitrogen dioxide (NOâ‚‚), 2 moles of nitric oxide (NO) are produced. How many moles of oxygen (Oâ‚‚) are formed? (Reaction: 2 NOâ‚‚(g) â†’ 2 NO(g) + Oâ‚‚(g))", c: ["0.5 mol", "1 mol", "2 mol", "4 mol"], a: 1 },
            { stem: "A chemical reaction that has a positive Î”H and a positive Î”S will be:", c: ["Spontaneous at all temperatures", "Non-spontaneous at all temperatures", "Spontaneous only at high temperatures", "Spontaneous only at low temperatures"], a: 2 },
            { stem: "Which of the following compounds would have the *highest* boiling point due to its intermolecular forces?", c: ["CHâ‚„ (London)", "CHâ‚ƒF (Dipole-dipole)", "CHâ‚ƒOH (Hydrogen bonding)", "Ne (London)"], a: 2 },
            { stem: "What is the overall reaction order for the rate law: rate = k[A]Â¹[B]Â²?", c: ["1", "2", "3", "4"], a: 2 },
            { stem: "In an electrolytic cell, which of the following is true?", c: ["The reaction is spontaneous (EÂ° > 0)", "The anode is positive and the cathode is negative", "Reduction occurs at the anode", "Electrons flow from cathode to anode"], a: 1 },
            { stem: "What is the missing particle 'X' in the reaction: Â¹â´â‚†C â†’ Â¹â´â‚‡N + X?", c: ["Alpha particle (â´â‚‚He)", "Positron (â°â‚Šâ‚e)", "Electron (â°â‚‹â‚e)", "Gamma ray (Î³)"], a: 2 },
            { stem: "What is the equilibrium constant expression (K_c) for the reaction: 2 Câ‚‚Hâ‚†(g) + 7 Oâ‚‚(g) â‡Œ 4 COâ‚‚(g) + 6 Hâ‚‚O(l)?", c: ["[COâ‚‚]â´ / ([Câ‚‚Hâ‚†]Â²[Oâ‚‚]â·)", "[COâ‚‚]â´[Hâ‚‚O]â¶ / ([Câ‚‚Hâ‚†]Â²[Oâ‚‚]â·)", "([Câ‚‚Hâ‚†]Â²[Oâ‚‚]â·) / [COâ‚‚]â´", "[COâ‚‚]â´ / [Câ‚‚Hâ‚†]Â²"], a: 0 },
            { stem: "How many electrons can be held in the d-subshell?", c: ["2", "6", "10", "14"], a: 2 },
            { stem: "Which of the following elements is an Actinide?", c: ["Lithium (Li)", "Scandium (Sc)", "Lanthanum (La)", "Uranium (U)"], a: 3 },
            { stem: "A 10-mole sample of an ideal gas is at 25Â°C and 1.0 atm. If the temperature is changed to 50Â°C at constant pressure, what happens to the volume?", c: ["It is halved", "It is doubled", "It increases slightly", "It decreases slightly"], a: 2 },
            { stem: "Given the bond enthalpies (Br-Br: 250, C-H: 400, C-Br: 300, H-Br: 450 kJ/mol), calculate Î”H_rxn for: CHâ‚„ + Brâ‚‚ â†’ CHâ‚ƒBr + HBr.", c: ["-100 kJ/mol", "+100 kJ/mol", "-200 kJ/mol", "+200 kJ/mol"], a: 0 },
            { stem: "A solution is prepared by dissolving 0.92 g of toluene in 100 g of benzene. The freezing point is lowered by 0.50Â°C. What is the estimated molar mass of toluene? (Kf benzene = 5.0 Â°CÂ·kg/mol; i=1)", c: ["78 g/mol", "85 g/mol", "92 g/mol", "100 g/mol"], a: 2 },
            { stem: "What is the percentage of nitrogen by mass in Câ‚…Hâ‚â‚„Nâ‚‚? (Molar masses: C=12, H=1, N=14)", c: ["13.7%", "27.4%", "58.8%", "1.9%"], a: 1 },
            { stem: "A 40 g sample of a compound decomposes via first-order kinetics with a half-life of 2 hours. How much will be left after 6 hours?", c: ["20 g", "10 g", "5 g", "2.5 g"], a: 2 },
            { stem: "In the reaction Zn(s) + CuÂ²âº(aq) â†’ ZnÂ²âº(aq) + Cu(s), which element is oxidized?", c: ["Zn", "CuÂ²âº", "ZnÂ²âº", "Cu"], a: 0 }
        ],
        // Practice Test 7
        [
            { stem: "According to the following reaction, how many grams of COâ‚‚ (44 g/mol) are produced when 32 grams of Oâ‚‚ (32 g/mol) reacts with excess ethane? (Reaction: 2 Câ‚‚Hâ‚†(g) + 7 Oâ‚‚(g) â†’ 4 COâ‚‚(g) + 6 Hâ‚‚O(l))", c: ["(4)(44) / 7", "(1)(7) / (4)(44)", "(1)(44) / 7", "(1)(4)(44) / 7"], a: 3 },
            { stem: "Compared to pure water, an aqueous solution of glucose would have which of the following changes in properties?", c: ["BP increases, VP increases, MP decreases", "BP decreases, VP decreases, MP increases", "BP increases, VP decreases, MP decreases", "BP decreases, VP increases, MP increases"], a: 2 },
            { stem: "Which of the following elements has the *largest* atomic radius?", c: ["O", "S", "Se", "Te", "Po"], a: 4 },
            { stem: "What is the correct molecular geometry of PClâ‚…?", c: ["Bent", "Trigonal planar", "Tetrahedral", "Trigonal bipyramidal", "Octahedral"], a: 3 },
            { stem: "Which of the following would cause a random error in an experiment?", c: ["Using an uncalibrated pH meter", "Forgetting to tar the balance", "Fluctuations in room temperature affecting a measurement", "Using the wrong concentration of a titrant"], a: 2 },
            { stem: "A container holds 32 g of Oâ‚‚ (32 g/mol) and 28 g of Nâ‚‚ (28 g/mol). The total pressure is 112 atm. What is the partial pressure of nitrogen (Nâ‚‚)?", c: ["9 atm", "32 atm", "56 atm", "112 atm"], a: 2 },
            { stem: "Given a reaction with Î”H = +50 kJ and Î”S = +25 J/K, at what temperature will the reaction become spontaneous?", c: ["Above 2,000 K", "Below 2,000 K", "Above 2,273 K", "At all temperatures"], a: 0 },
            { stem: "For the endothermic reaction: A(s) + 2B(g) â‡Œ C(g). Which of the following changes will shift the equilibrium to the right?", c: ["Increasing the temperature", "Decreasing the temperature", "Increasing the pressure", "Adding more A(s)"], a: 0 },
            { stem: "A 100 g sample of a radioactive isotope decays to 12.5 g in 30 minutes. What is the half-life of this isotope?", c: ["5 minutes", "10 minutes", "15 minutes", "30 minutes"], a: 1 },
            { stem: "Given the reaction: 2Alâ‚‚Oâ‚ƒ + 3C â†’ 4Al + 3COâ‚‚. Which element is the *reducing agent*?", c: ["Al in Alâ‚‚Oâ‚ƒ", "O in Alâ‚‚Oâ‚ƒ", "C", "Al"], a: 2 },
            { stem: "What is the nuclear binding energy for an isotope?", c: ["The energy released when the nucleus is formed from its constituent nucleons.", "The energy required to remove a valence electron.", "The energy holding the electrons in orbit.", "The energy released during beta decay."], a: 0 },
            { stem: "How many grams of AlBrâ‚ƒ (267 g/mol) are needed to react with Kâ‚‚SOâ‚„ to produce 0.191 kg of Alâ‚‚(SOâ‚„)â‚ƒ (342 g/mol)? (Reaction: 2 AlBrâ‚ƒ + 3 Kâ‚‚SOâ‚„ â†’ Alâ‚‚(SOâ‚„)â‚ƒ + 6 KBr)", c: ["(191)(2)(267) / (342)", "(0.191)(1)(267) / (342)", "(191)(342) / (267)(2)", "(191)(267) / (342)"], a: 0 },
            { stem: "Which of the following atoms has the *lowest* first ionization energy?", c: ["O", "S", "Se", "Te", "Po"], a: 4 },
            { stem: "Which of the following ions is diamagnetic in its ground state?", c: ["CÂ²â»", "NÂ²â»", "Liâº", "SÂ²âº"], a: 2 },
            { stem: "Which of the following is an *unsafe* lab practice?", c: ["Weighing calcium outside the fume hood", "Washing an Erlenmeyer flask in the sink", "Adding water to concentrated acid", "Pouring sodium bicarbonate on an acid spill"], a: 2 },
            { stem: "If the temperature of a gas is doubled and the pressure is doubled, what happens to the volume?", c: ["It is quadrupled", "It is halved", "It stays the same", "It is doubled"], a: 2 },
            { stem: "How much energy (in joules) is required to heat 15 grams of water from 35Â°C to 80Â°C? (c_water = 4.18 J/gÂ°C)", c: ["(15)(4.18)(35)", "(15)(4.18)(45)", "(15)(4.18)(80)", "(0.015)(4.18)(45)"], a: 1 },
            { stem: "A liquid with *weak* intermolecular forces would be expected to have:", c: ["A high boiling point and high volatility", "A low boiling point and high volatility", "A high boiling point and low volatility", "A low boiling point and low volatility"], a: 1 },
            { stem: "The half-life of a *second-order* reaction (rate = k[A]Â²) is:", c: ["Constant (tâ‚/â‚‚ = 0.693/k)", "Dependent on initial concentration (tâ‚/â‚‚ = 1 / k[A]â‚€)", "Dependent on initial concentration (tâ‚/â‚‚ = [A]â‚€ / 2k)", "Independent of the rate constant (k)"], a: 1 },
            { stem: "What is the E°cell for the reaction: Cl2(g) + 2 I- (aq) -> 2 Cl- (aq) + I2(s)? (Given E°red: Cl2/Cl- = +1.36 V, I2/I- = +0.54 V)", c: ["+0.82 V", "-0.82 V", "+1.90 V", "-1.90 V"], a: 0 },
            { stem: "Which of the following best describes an isotope?", c: ["Same protons, different electrons", "Same neutrons, different protons", "Same protons, different neutrons", "Same mass number, different protons"], a: 2 },
            { stem: "Which of the following changes will *always* shift the equilibrium of an exothermic gas-phase reaction to the left?", c: ["Increasing temperature", "Decreasing temperature", "Increasing pressure", "Removing product"], a: 0 },
            { stem: "What is the ground-state electron configuration of a neutral Copper (Cu) atom?", c: ["[Ar] 4sÂ²3dâ¹", "[Ar] 4sÂ¹3dÂ¹â°", "[Ar] 4sÂ²3dÂ¹â°", "[Ar] 4sÂ¹3dâ¹"], a: 1 },
            { stem: "Transition metals are characterized by having partially filled:", c: ["s-subshells", "p-subshells", "d-subshells", "f-subshells"], a: 2 },
            { stem: "Which of the following gas laws states that two gases with equal volumes will have an equal number of molecules at the same T and P?", c: ["Boyle's Law", "Dalton's Law", "Charles's Law", "Avogadro's Law"], a: 3 },
            { stem: "A 20g block of ice is at -10Â°C. What is the setup to find the energy needed to heat it to 0Â°C (but not melt)? (c_ice = 2.09 J/gÂ°C)", c: ["(20)(2.09)(10)", "(20)(4.18)(10)", "(20)(334)", "(20)(2.09)(0)"], a: 0 },
            { stem: "Which of the following is a characteristic of covalent network solids (like diamond)?", c: ["Malleability and high conductivity", "Low melting point and soft", "High melting point and very hard", "Soluble in water"], a: 2 },
            { stem: "What is the percentage of oxygen by mass in glucose, Câ‚†Hâ‚â‚‚Oâ‚†? (Molar masses: C=12, H=1, O=16)", c: ["(16*6) / (12*6 + 1*12 + 16*6) * 100", "(16) / (12*6 + 1*12 + 16*6) * 100", "(12*6) / (180) * 100", "(1*12) / (180) * 100"], a: 0 },
            { stem: "For the reaction 2A + B â†’ C, the rate law is found to be Rate = k[A][B]. What is the overall reaction order?", c: ["3", "2", "1", "0"], a: 1 },
            { stem: "Given the reaction: CHâ‚„ + 2Oâ‚‚ â†’ COâ‚‚ + 2Hâ‚‚O. Which element is *reduced*?", c: ["C in CHâ‚„", "H in CHâ‚„", "O in Oâ‚‚", "O in Hâ‚‚O"], a: 2 }
        ],
        // Practice Test 8
        [
            { stem: "If a chemist wants to measure 500ÂµL of a solution, which laboratory equipment would be the *most* precise?", c: ["Micropipette", "Buret", "Erlenmeyer flask", "Graduated cylinder"], a: 0 },
            { stem: "What is the percent yield if a reaction *theoretically* should produce 20 g of product, but the student only *actually* recovers 18 g?", c: ["90%", "111%", "10%", "80%"], a: 0 },
            { stem: "Consider a vessel with an ideal gas at 3 atm. If the volume is halved and the internal temperature triples, what is the new pressure?", c: ["2 atm", "4.5 atm", "9 atm", "18 atm"], a: 3 },
            { stem: "Which of the following elements has the *highest* second ionization energy?", c: ["Na", "Mg", "Al", "Si"], a: 0 },
            { stem: "Which of the following molecules is *non-polar* (has a zero dipole moment)?", c: ["Hâ‚‚O", "NHâ‚ƒ", "CHâ‚ƒCl", "BFâ‚ƒ"], a: 3 },
            { stem: "Which of the following enthalpy changes is the *largest* (most endothermic) for a given substance?", c: ["Î”H_fusion", "Î”H_vaporization", "Î”H_sublimation", "Î”H_freezing"], a: 2 },
            { stem: "What is the K_c expression for the reaction: Nâ‚‚(g) + 3 Hâ‚‚(g) â‡Œ 2 NHâ‚ƒ(g)?", c: ["[NHâ‚ƒ]Â² / ([Nâ‚‚][Hâ‚‚]Â³)", "([Nâ‚‚][Hâ‚‚]Â³) / [NHâ‚ƒ]Â²", "[NHâ‚ƒ] / ([Nâ‚‚][Hâ‚‚])", "[NHâ‚ƒ]Â² / ([Nâ‚‚][Hâ‚‚])"], a: 0 },
            { stem: "A plot of ln[A] vs. time (t) produces a straight line. What is the reaction order?", c: ["Zero-order", "First-order", "Second-order", "Third-order"], a: 1 },
            { stem: "What is the correct setup to find the change in freezing point (Î”Tf) for a 0.5 m solution of MgClâ‚‚? (Kf = 1.86 Â°C/m)", c: ["Î”Tf = (1)(1.86)(0.5)", "Î”Tf = (2)(1.86)(0.5)", "Î”Tf = (3)(1.86)(0.5)", "Î”Tf = (1.86)(0.5)"], a: 2 },
            { stem: "In a galvanic cell, the site of oxidation is the:", c: ["Anode, which is positive", "Anode, which is negative", "Cathode, which is positive", "Cathode, which is negative"], a: 1 },
            { stem: "A 60 g sample of a radioactive isotope has a half-life of 10 days. How much of the sample remains after 30 days?", c: ["30 g", "15 g", "7.5 g", "3.75 g"], a: 2 },
            { stem: "Which of the following is an example of a *systematic* error?", c: ["An incorrectly calibrated balance that always reads 0.2g low", "Reading the meniscus differently each time", "Forgetting to write down a measurement", "A random fluctuation in room temperature"], a: 0 },
            { stem: "What is the empirical formula of a compound that is 75% carbon and 25% hydrogen by mass? (C=12 g/mol, H=1 g/mol)", c: ["CH", "CHâ‚‚", "CHâ‚ƒ", "CHâ‚„"], a: 3 },
            { stem: "At constant temperature, pressure is inversely proportional to volume. Which gas law is this?", c: ["Boyle's Law", "Charles's Law", "Gay-Lussac's Law", "Avogadro's Law"], a: 0 },
            { stem: "Which of the following elements is a non-metal?", c: ["Sulfur (S)", "Titanium (Ti)", "Antimony (Sb)", "Gallium (Ga)"], a: 0 },
            { stem: "What is the ground-state electron configuration of the Cr atom?", c: ["[Ar] 4sÂ²3dâ´", "[Ar] 4sÂ¹3dâµ", "[Ar] 4sÂ²3dÂ³", "[Ar] 4sÂ¹3dâ´"], a: 1 },
            { stem: "A 100 g sample of water at 20.0Â°C is mixed with 200 g of water at 80.0Â°C. What is the approximate final temperature?", c: ["40.0Â°C", "50.0Â°C", "60.0Â°C", "70.0Â°C"], a: 2 },
            { stem: "For the reaction: 2 SOâ‚‚(g) + Oâ‚‚(g) â‡Œ 2 SOâ‚ƒ(g) + heat. Which change will shift the equilibrium to the *left* (favor reactants)?", c: ["Increasing the pressure", "Removing Oâ‚‚(g)", "Decreasing the temperature", "Adding a catalyst"], a: 1 },
            { stem: "What is the function of a catalyst in a chemical reaction?", c: ["It increases the activation energy.", "It provides an alternative reaction pathway with a lower activation energy.", "It shifts the equilibrium to favor the products.", "It is consumed in the reaction."], a: 1 },
            { stem: "Which of the following is a colligative property?", c: ["Density", "Color", "Boiling point elevation", "Viscosity"], a: 2 },
            { stem: "What is the oxidation number of Sulfur (S) in the sulfate ion, SOâ‚„Â²â»?", c: ["-2", "+2", "+4", "+6"], a: 3 },
            { stem: "Uranium-238 (â¹Â²U) undergoes alpha decay. What is the resulting daughter nucleus?", c: ["Â²Â³â´â‚‰â‚€Th", "Â²Â³â¸â‚‰â‚Pa", "Â²Â³â´â‚‰â‚‚U", "Â²Â³â¸â‚‰â‚ƒNp"], a: 0 },
            { stem: "A student performs an experiment and gets a value of 15.2 m/s. The true, accepted value is 14.8 m/s. What is the percent error?", c: ["(|15.2 - 14.8| / 15.2) * 100", "(|15.2 - 14.8| / 14.8) * 100", "(14.8 / 15.2) * 100", "(15.2 / 14.8) * 100"], a: 1 },
            { stem: "How many moles of Hâ‚‚O are produced when 2 moles of methane (CHâ‚„) are completely combusted? (CHâ‚„ + 2Oâ‚‚ â†’ COâ‚‚ + 2Hâ‚‚O)", c: ["1 mole", "2 moles", "4 moles", "8 moles"], a: 2 },
            { stem: "Which of the following bonds is the *most* polar?", c: ["C-H", "N-H", "O-H", "F-F"], a: 2 },
            { stem: "Elements in Group 17 (F, Cl, Br) are known as:", c: ["Alkali metals", "Alkaline earth metals", "Halogens", "Noble gases"], a: 2 },
            { stem: "A 2.0 L container of gas at 1.0 atm is compressed to 0.5 L at constant temperature. What is the new pressure?", c: ["0.25 atm", "0.5 atm", "2.0 atm", "4.0 atm"], a: 3 },
            { stem: "A 50 g sample of an unknown metal absorbs 500 J of heat and its temperature rises from 20Â°C to 40Â°C. What is the specific heat (c) of the metal?", c: ["c = (500) / (50)(20)", "c = (50)(20) / (500)", "c = (500) / (50)(40)", "c = (500) / (20)"], a: 0 },
            { stem: "What is the K_sp expression for AgCl(s)?", c: ["K_sp = [Agâº][Clâ»]", "K_sp = [Agâº][Clâ»] / [AgCl]", "K_sp = [AgCl] / [Agâº][Clâ»]", "K_sp = [Agâº] + [Clâ»]"], a: 0 },
            { stem: "For a *first-order* reaction, what is the half-life (tâ‚/â‚‚) if the rate constant (k) is 0.02 sâ»Â¹?", c: ["0.02 / 0.693", "0.693 / 0.02", "1 / (0.02 * [A]â‚€)", "[A]â‚€ / (2 * 0.02)"], a: 1 }
        ],
        // Practice Test 10
        [
            { stem: "Which of the following must be true for a reaction that is spontaneous at low temperatures but non-spontaneous at high temperatures?", c: ["ΔH < 0, ΔS < 0", "ΔH < 0, ΔS > 0", "ΔH > 0, ΔS < 0", "ΔH > 0, ΔS > 0"], a: 0 },
            { stem: "A plot of [A] vs. time (t) produces a straight line with a negative slope. What is the reaction order?", c: ["Zero-order", "First-order", "Second-order", "Third-order"], a: 0 },
            { stem: "Which of the following elements has properties such as being a good conductor, solid at room temp, forming basic oxides, and having a high melting point?", c: ["Sulfur", "Carbon", "Krypton", "Titanium"], a: 3 },
            { stem: "Which of the following values is needed to determine the molar absorptivity (ε) from the Beer-Lambert Law (A = εlc)?", c: ["Absorbance (A)", "Path length (l)", "Molar concentration (c)", "All of the above"], a: 3 },
            { stem: "What is the molar mass of a compound if 2.0 moles of it has a mass of 88 g?", c: ["22 g/mol", "44 g/mol", "88 g/mol", "176 g/mol"], a: 1 },
            { stem: "Which of the following pairs of compounds can form hydrogen bonds with each other?", c: ["CH₃CH₂OH and H₂O", "NH₂CH₃ and CO", "H₂S and HCl", "CH₄ and CH₄"], a: 0 },
            { stem: "Which of the following statements is an assumption of an ideal gas?", c: ["Gas molecules lose energy when they collide.", "There are strong intermolecular forces between gas molecules.", "The gas particles themselves occupy a significant volume.", "The average kinetic energy of gas molecules is proportional to temperature."], a: 3 },
            { stem: "For the reaction: 2 NO₂(g) ⇌ N₂O₄(g). If the pressure is increased by decreasing the volume, what will happen?", c: ["Equilibrium shifts left", "Equilibrium shifts right", "No change in equilibrium", "K_eq will increase"], a: 1 },
            { stem: "What is the correct setup for finding the molality of a solution where 5.32 g of HNO₃ (63 g/mol) is dissolved in 200 g of water, causing a freezing point depression of -5.32°C? (Kf = 1.86 °C/m, i=2)", c: ["m = (5.32) / (1.86)(2)", "m = (5.32)(1.86)(2)", "m = (1.86)(2) / (5.32)", "m = (5.32)(0.2) / (1.86)(2)"], a: 0 },
            { stem: "Which of the following nuclear reactions is an example of nuclear fusion?", c: ["²³⁵U + ¹n → ¹⁴¹Ba + ⁹²Kr + 3¹n", "¹⁴C → ¹⁴N + ⁰₋₁e", "²H + ³H → ⁴He + ¹n", "²³⁸U → ²³⁴Th + ⁴He"], a: 2 },
            { stem: "In the following reaction, which element is the *oxidizing agent*? 2Na(s) + Cl₂(g) → 2NaCl(s)", c: ["Na", "Cl₂", "NaCl", "This is not a redox reaction"], a: 1 },
            { stem: "How much energy is released during the combustion of 60 g of ethane (C₂H₆, 30 g/mol)? (Reaction: 2 C₂H₆ + 7O₂ → 4CO₂ + 6H₂O, ΔH = -1500 kJ/mol)", c: ["750 kJ", "1500 kJ", "3000 kJ", "6000 kJ"], a: 1 },
            { stem: "A 100 g sample of a compound has a half-life of 25 days. How much of the compound will remain after 100 days?", c: ["50 g", "25 g", "12.5 g", "6.25 g"], a: 3 },
            { stem: "Which of the following correctly ranks the ions in order of *increasing* radius? (smallest to largest)", c: ["Ca²⁺ < K⁺ < Cl⁻ < S²⁻", "S²⁻ < Cl⁻ < K⁺ < Ca²⁺", "K⁺ < Ca²⁺ < S²⁻ < Cl⁻", "Ca²⁺ < S²⁻ < K⁺ < Cl⁻"], a: 0 },
            { stem: "Which of the following is the correct setup to find the percent composition of oxygen in glucose, C₆H₁₂O₆? (M=180 g/mol, O=16 g/mol)", c: ["(16*6 * 100) / 180", "(12*6 * 100) / 180", "(1*12 * 100) / 180", "(16 * 100) / 180"], a: 0 },
            { stem: "A 4.0 g sample of an unknown compound is found to contain 1.2 g of Carbon. If the compound is 160 g/mol, how many moles of Carbon are in one mole of the compound?", c: ["1.2 moles", "4.0 moles", "10.0 moles", "12.0 moles"], a: 3 },
            { stem: "How many electrons are in the 3p orbitals of a neutral Phosphorus (P) atom?", c: ["1", "2", "3", "5"], a: 2 },
            { stem: "Which of the following has the same average kinetic energy as 40 grams of CO₂ at 10°C?", c: ["10 grams of CO₂ at 10°C", "10 grams of CO₂ at 60°C", "20 grams of CO₂ at 20°C", "40 grams of CO₂ at 30°C"], a: 0 },
            { stem: "What is the K_sp expression for Calcium Phosphate, Ca₃(PO₄)₂(s)?", c: ["K_sp = [Ca²⁺]³[PO₄³⁻]²", "K_sp = [Ca²⁺]²[PO₄³⁻]³", "K_sp = [3Ca²⁺][2PO₄³⁻]", "K_sp = [Ca₃(PO₄)₂]"], a: 0 },
            { stem: "Which of the following is true about a face-centered cubic (FCC) unit cell?", c: ["It is comprised of 2 atoms total.", "It is comprised of 4 atoms total.", "It is comprised of 1 atom total.", "It has atoms at the corners and one in the very center."], a: 1 },
            { stem: "Which type of nuclear decay emits a particle with a mass of 4 amu and a +2 charge?", c: ["Alpha decay", "Beta decay (electron)", "Positron emission", "Gamma decay"], a: 0 },
            { stem: "How many electrons are transferred when MnO₄⁻ reacts to form Mn²⁺ in an acidic medium?", c: ["1", "3", "5", "7"], a: 2 },
            { stem: "Which of the following would *most* accurately measure 10.0 mL of a liquid?", c: ["10 mL beaker", "10 mL graduated cylinder", "10 mL burette", "10 mL Erlenmeyer flask"], a: 2 },
            { stem: "An object releases heat into the surroundings but is *not* doing work. What best describes this object?", c: ["ΔH is positive", "ΔH is negative", "ΔU is positive", "q is positive"], a: 1 },
            { stem: "In which of the following solvents would methylamine (CH₃NH₂) be the *most* soluble?", c: ["BH₃", "C₆H₆ (benzene)", "C₂H₅OH (ethanol)", "SO₃"], a: 2 },
            { stem: "Which of the following elements has the *lowest* electronegativity?", c: ["F", "Cl", "Br", "I", "At"], a: 4 },
            { stem: "A 2.0 L container holds 0.5 mol of an ideal gas at 300K. What is the pressure? (R = 0.0821 L·atm/mol·K)", c: ["P = (0.5)(0.0821)(300) / 2.0", "P = (2.0)(0.0821)(300) / 0.5", "P = (0.5)(0.0821) / (300)(2.0)", "P = (0.5)(300) / (0.0821)(2.0)"], a: 0 },
            { stem: "If M binds with S to form M₂S and M binds with F to form MF, what is the charge of M?", c: ["-2", "-1", "0", "+1"], a: 3 },
            { stem: "For the reaction N₂(g) + O₂(g) ⇌ 2NO(g), K_c1 = 1x10³⁰. For 2NO(g) + O₂(g) ⇌ 2NO₂(g), K_c2 = 6.9x10⁵. What is K_c3 for the combined reaction N₂(g) + 2O₂(g) ⇌ 2NO₂(g)?", c: ["K_c1 / K_c2", "K_c1 + K_c2", "K_c2 - K_c1", "K_c1 * K_c2"], a: 3 },
            { stem: "A reaction has a rate law of Rate = k. What happens to the rate if the concentration of the reactant is doubled?", c: ["The rate doubles", "The rate quadruples", "The rate is halved", "The rate does not change"], a: 3 }
        ]
    ],
    "Quantitative Reasoning": [
        // Practice Test 1
        [
            { stem: "Placeholder quantitative reasoning question 1. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 0 },
            { stem: "Placeholder quantitative reasoning question 2. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 1 },
            { stem: "Placeholder quantitative reasoning question 3. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 2 },
            { stem: "Placeholder quantitative reasoning question 4. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 3 },
            { stem: "Placeholder quantitative reasoning question 5. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 4 },
            { stem: "Placeholder quantitative reasoning question 6. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 0 },
            { stem: "Placeholder quantitative reasoning question 7. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 1 },
            { stem: "Placeholder quantitative reasoning question 8. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 2 },
            { stem: "Placeholder quantitative reasoning question 9. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 3 },
            { stem: "Placeholder quantitative reasoning question 10. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 4 },
            { stem: "Placeholder quantitative reasoning question 11. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 0 },
            { stem: "Placeholder quantitative reasoning question 12. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 1 },
            { stem: "Placeholder quantitative reasoning question 13. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 2 },
            { stem: "Placeholder quantitative reasoning question 14. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 3 },
            { stem: "Placeholder quantitative reasoning question 15. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 4 },
            { stem: "Placeholder quantitative reasoning question 16. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 0 },
            { stem: "Placeholder quantitative reasoning question 17. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 1 },
            { stem: "Placeholder quantitative reasoning question 18. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 2 },
            { stem: "Placeholder quantitative reasoning question 19. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 3 },
            { stem: "Placeholder quantitative reasoning question 20. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 4 },
            { stem: "Placeholder quantitative reasoning question 21. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 0 },
            { stem: "Placeholder quantitative reasoning question 22. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 1 },
            { stem: "Placeholder quantitative reasoning question 23. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 2 },
            { stem: "Placeholder quantitative reasoning question 24. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 3 },
            { stem: "Placeholder quantitative reasoning question 25. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 4 },
            { stem: "Placeholder quantitative reasoning question 26. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 0 },
            { stem: "Placeholder quantitative reasoning question 27. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 1 },
            { stem: "Placeholder quantitative reasoning question 28. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 2 },
            { stem: "Placeholder quantitative reasoning question 29. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 3 },
            { stem: "Placeholder quantitative reasoning question 30. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 4 },
            { stem: "Placeholder quantitative reasoning question 31. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 0 },
            { stem: "Placeholder quantitative reasoning question 32. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 1 },
            { stem: "Placeholder quantitative reasoning question 33. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 2 },
            { stem: "Placeholder quantitative reasoning question 34. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 3 },
            { stem: "Placeholder quantitative reasoning question 35. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 4 },
            { stem: "Placeholder quantitative reasoning question 36. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 0 },
            { stem: "Placeholder quantitative reasoning question 37. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 1 },
            { stem: "Placeholder quantitative reasoning question 38. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 2 },
            { stem: "Placeholder quantitative reasoning question 39. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 3 },
            { stem: "Placeholder quantitative reasoning question 40. Replace with real content.", c: ["Option A", "Option B", "Option C", "Option D", "Option E"], a: 4 }
        ]
    ],
    "Reading Comprehension": [
        // Practice Test 1
        [
            { stem: "When would acute inflammation transition into chronic inflammation?", c: ["After a period of a few minutes", "After a period of a few hours", "After a period of a few days", "After a period of a few weeks", "After a period of a few months"], a: 2 },
            { stem: "What microscopic transformation would you expect to see during the transition from acute to chronic inflammation?", c: ["A predominantly neutrophilic infiltrate evolving into an infiltrate with more lymphocytes and macrophages", "A predominantly lymphocytic infiltrate evolving into an infiltrate with more neutrophils and macrophages", "A predominantly macrophagic infiltrate evolving into an infiltrate with more neutrophils and lymphocytes", "A resolution of scar tissue and tissue necrosis in the area of injury", "An increase in vasculature and blood vessel dilation"], a: 0 },
            { stem: "Which of the following shows a likely ordering of events following a spider bite?", c: ["Microvascular permeability increases -> blood vessels in the area dilate -> white blood cells migrate into interstitial tissues -> white blood cells attach to endothelial cells", "Blood vessels in the area dilate -> microvascular permeability increases -> white blood cells attach to endothelial cells -> white blood cells infiltrate interstitial tissues", "The area becomes swollen -> blood vessels in the area dilate -> white blood cells attach to endothelial cells -> microvascular permeability increases", "The area becomes red -> blood vessels in the area dilate -> microvascular permeability increases -> white blood cells migrate into interstitial tissues"], a: 1 },
            { stem: "The passage includes all of the following as components of acute inflammation EXCEPT one. What is the one EXCEPTION?", c: ["Alterations in vasculature at the site of the injured area", "Accumulation of white blood cells at the area of injury", "Decreased lymphatic flow around the area of injury", "Redness at the site of injury", "Swelling at the site of injury"], a: 2 },
            { stem: "The swelling and pain observed acutely after injury or infection are caused by", c: ["dilation of blood vessels around the area of injury.", "apoptosis and tissue necrosis following injury.", "formation of granulation tissue to repair the area.", "infiltration of cells and proteins into the area of injury.", "hypertonicity from secretions released by pathogens."], a: 3 },
            { stem: "A patient visits the doctor after contracting pulmonary tuberculosis while visiting another country. Though his X-ray is initially normal, imaging taken weeks later shows round areas of opacity (white areas of increased tissue density) in the lung. According to the passage, this is most likely", c: ["a focal point hypervascularity, as blood flow is directed to the infection.", "a granuloma composed of immune cells surrounding and containing the pathogen.", "a neutrophilic infiltration into the tissues containing the pathogen.", "an area of fluid accumulation due to changes in microvasculature."], a: 1 },
            { stem: "According to the passage, all of the following are important for the recruitment and movement of leukocytes or white blood cells to the site of tissue infection or injury EXCEPT one. What is the one EXCEPTION?", c: ["Binding of P-selectin and E-selectin to L-selectin", "Binding of integrins to adhesion molecules", "Extension of pseudopodia between endothelial cells", "The release of interleukins in the area of injury", "The release of reactive oxygen species in the area of injury"], a: 4 },
            { stem: "According to the passage, which of the following cell types is NOT matched correctly?", c: ["Leukocytes: general name for white blood cells", "Lymphocytes: B cells and T cells", "Neutrophils: the first inflammatory cells recruited to a site", "Fibroblasts: cells that break down collagen", "Mononuclear cells: lymphocytes and macrophages"], a: 3 },
            { stem: "Arthritis can result from immunological attacks on normal tissues. Arthritis can result from repeated injury and scarring.", c: ["Statement 1 is correct, but statement 2 is incorrect.", "Statement 1 is incorrect, but statement 2 is correct.", "Both statements are correct.", "Both statements are incorrect."], a: 2 },
            { stem: "According to the passage, which description most likely matches the microscopic appearance of basophils?", c: ["Round cells peppered with numerous granules visible in cytoplasm", "Oddly shaped cells with long pseudopodia that allow for attachment to surfaces", "Flat cells lacking nuclei and most organelles", "Elongated cells filled with collagen and other connective tissue", "Nerve cells with long axons and many connections with effector cells"], a: 0 },
            { stem: "According to the passage, fibroblasts are involved in the repair process. Very high numbers of them could lead to abnormal healing and scarring. Their main role is to remove cellular debris from an area of injury. Increased fibroblast activity would likely aid in the treatment of lung fibrosis.", c: ["Only statement 1 is correct", "Only statement 2 is correct", "Only statement 3 is correct", "Only statement 4 is correct", "Statements 1 and 2 are correct"], a: 1 },
            { stem: "The passage suggests that reactive oxygen species (ROS) are", c: ["damaging to normal tissues.", "important for catalyzing reactions.", "more reactive than nitrogen species.", "a common drug target for rheumatoid arthritis.", "an insignificant component of the immune response."], a: 0 },
            { stem: "Long-term use of which drug would put a patient at the highest risk for developing eye disease?", c: ["Aspirin", "Dexamethasone", "Ibuprofen", "Indomethacin", "Celecoxib"], a: 1 },
            { stem: "Interest in herbal medications is growing in the West, because autoimmune conditions are rarely observed in Asia.", c: ["Both the statement and the reason are correct.", "The statement is correct, but the reason is incorrect.", "The statement is incorrect, but the reason is correct.", "Both the statement and the reason are incorrect."], a: 1 },
            { stem: "Pharmacological classes of drugs available in the market that are derived from natural products include atropine from Atropa belladonna, digoxin from Digitalis purpurea, and morphine and codeine from Papaver somnifera. This information best supports the passage statement that", c: ["herbal medicine continues to be an accepted form of treatment in Asia.", "plant drugs based on traditional practice represent a large portion of the pharmaceutical products.", "there are countless reasons for the public to adopt herbal medications.", "even naturally derived ingredients can create drugs with dangerous side effects.", "natural drugs could help prevent prevalent fear and distrust of pharmaceutical companies."], a: 1 },
            { stem: "A patient presents to the doctor with poor tissue regeneration, leaving a gaping but sterile (non-infected) wound following a skin infection. They most likely have a defect in which process specifically?", c: ["Vascular responses", "Leukocyte migration", "Cell signaling", "Acute inflammation", "Repair"], a: 4 },
            { stem: "According to the passage, which of the following would NOT be a likely drug target for an inhibitor used to treat chronic autoimmune disease?", c: ["Amino terminal N-formyl methionyl groups on endotoxins", "Integrins (CDII/CDI8) expressed on white blood cells", "Adhesion molecules (CAM-I and CAM-2) expressed on endothelial cells", "P-selectin produced by endothelial cells", "Interleukins secreted by white blood cells"], a: 0 },
            { stem: "One limitation of relative dating is that it", c: ["depends on knowledge of tree growth patterns.", "requires analysis of carbon-14 in each rock layer.", "does not provide the actual age of a fossil.", "is inherently unreliable due to the principle of superposition.", "can only be used in areas where the rock layers have been disturbed."], a: 2 },
            { stem: "Which finding would most violate the principle of superposition?", c: ["Fossil species that appear in multiple rock layers", "Rock layers containing large variations in carbon content", "Rocks with layers that have vastly different fossilized components", "Rocks whose layers have been disturbed by seismic activity", "Rocks with newer layers that sink below older layers"], a: 4 },
            { stem: "Which of the following could NOT count as a fossil as defined by the passage?", c: ["Shells left by mollusks such as clams and snails", "An insect trapped in amber hardened from tree resin", "Footprints or imprints left by animals or plants", "Petrified wood, or wood replaced by minerals and turned into stone", "Pottery bowls buried along with bodies by ancient tribes"], a: 4 },
            { stem: "What is one advantage of uranium-lead dating over more commonly used radiometric dating techniques?", c: ["It can be used to date samples that are much older than those analyzed with more common radiometric dating techniques.", "It can be used to date samples with a higher degree of precision compared to more common radiometric dating techniques.", "It produces results that are more accurate and don't require calibration by methods like dendrochronology.", "It analyzes species that are more abundant in the atmosphere.", "It utilizes uranium, which has a much shorter half life than carbon-14."], a: 0 },
            { stem: "The use of biostratigraphy to determine the age of a rock layer would be most complicated by", c: ["some rock layers containing a large number of fossil species of known age.", "some rock layers having no overlap in the types of fossil species present.", "some fossil species only appearing in one rock layer.", "some fossil species having a wider range in time than scientists believe.", "rock layers containing higher amounts of uranium than they should according to their true age."], a: 3 },
            { stem: "Carbon-14 mainly decays to", c: ["Nitrogen-14; electron", "Nitrogen-14; neutron", "Carbon-12; electron", "Carbon-12; neutron", "Carbon-13; neutron"], a: 0 },
            { stem: "As the passage mentions, potassium-argon dating is used to date volcanic rocks. Which of the following LEAST likely contributes to this practice?", c: ["Volcanic rocks contain minerals such as feldspars and micas that are rich in potassium.", "The radioactive isotope potassium-40 decays to argon-40 over time, at a relatively stable, predictable rate.", "The decay rate of radioactive potassium is affected by environmental factors such as heat, pressure, and chemical reactions.", "Radioactive potassium has a long half-life and can be used to date rocks that are millions of years old."], a: 2 },
            { stem: "According to the passage, the approximate percentages of different carbon isotopes in the atmosphere are likely closest to which of the following?", c: ["50% carbon-12; 25% carbon-13; 25% carbon-14", "33% carbon-12; 33% carbon-13; 33% carbon-14", "99% carbon-12; 0.05% carbon-13; 0.05% carbon-14", "99% carbon-12; ~0.99% carbon-13; ~0.99% carbon-14", "99% carbon-12; <0.01% carbon-13; <0.01% carbon-14"], a: 2 },
            { stem: "What typically happens to the concentration of carbon-14 in an organism's blood and tissues during the course of its life and after its death?", c: ["It increases through life, then decreases by the same percentage each half-life after death.", "It increases through life, then decreases by the same amount each year following death.", "It remains relatively constant through life, then decreases by the same percentage each half-life after death.", "It remains relatively constant through life, then decreases by the same amount each year following death.", "It increases in the beginning of life then starts to decrease as the organism ages."], a: 2 },
            { stem: "Approximately how old is a fossil if it now contains a total of 12 grams of carbon-14 but originally contained 32 grams?", c: ["5,700 years old", "8,000 years old", "11,500 years old", "13,000 years old", "23,000 years old"], a: 2 },
            { stem: "All of the following are limitations of radiocarbon dating EXCEPT one. What is the one EXCEPTION?", c: ["It requires a certain amount of analyzable material", "It cannot be used to date rocks that are millions of years old", "It cannot be used to date rocks with high amounts of nitrogen", "It is susceptible to variations in the rate of decay of carbon-14", "It is susceptible to variations in the amount carbon-14 in the Atmosphere"], a: 2 },
            { stem: "The normal amount of carbon-14 in the atmosphere is 1 part per trillion. Suppose that an organism lived under extreme environmental conditions in which atmospheric carbon-14 levels reached 2 parts per trillion. What effect would this have on the fossil's age as determined by radiocarbon dating?", c: ["The determined age would be higher than the real age due to higher carbon-14 levels in the fossil than what would be estimated from its real age.", "The determined age would be higher than the real age due to lower carbon-14 levels in the fossil than what would be estimated from its real age", "The determined age would be lower than the real age due to higher carbon-14 levels in the fossil than what would be estimated from its real age.", "The determined age would be lower than the real age due to lower carbon-14 levels in the fossil than what would be estimated from its real age."], a: 2 },
            { stem: "The presence of humic acids in soil or carbonates in rocks could", c: ["alter the decay rate of carbon-14.", "alter the amounts of carbon-12 and carbon-14 present.", "alter the temperature and pressure of soil and rocks.", "provide another useful source of information for dating.", "interfere with calibration equipment used in dating."], a: 1 },
            { stem: "The size and shape of tree rings can also provide information. For example, a narrow ring may indicate a drought year, while a wide ring may indicate a wet year. This information best supports the statement that", c: ["tree rings can be used as a point of comparison for radiocarbon ages.", "tree rings can be used to date events and variations in the past.", "tree rings grow in a stable and predictable pattern.", "decreased precipitation causes a tree ring to grow larger.", "the shape of a tree ring will reveal the age of the tree ring."], a: 1 },
            { stem: "Scientists can calibrate the results of radiocarbon dating for a sample by", c: ["repeating their measurements several times and taking the average of their results.", "comparing the carbon-14 content of the sample to other fossils and observing relative differences.", "comparing the carbon-14 content of the sample to that of a tree ring with a known calendar age.", "matching the sample to a tree ring containing similar fossilized components, then determining the tree ring's age.", "using a dendrochronology library to identify a tree with the same age as the sample, then measuring the carbon-14 content of the tree roots."], a: 2 },
            { stem: "Compared to radiocarbon dating alone, calibration with dendrochronology produces results that are", c: ["more accurate but less precise.", "less accurate but more precise.", "more accurate and more precise.", "less accurate and less precise."], a: 0 },
            { stem: "Each of the following preventable diseases was mentioned in this passage EXCEPT one. Which is the one EXCEPTION?", c: ["HIV/AIDS", "Polio", "Cardiovascular disease", "Diabetes", "Hepatitis B"], a: 4 },
            { stem: "How could epidemiologists best identify population groups that have the highest burden of a particular disease?", c: ["By comparing the incidence of disease in different population groups", "By comparing the prevalence of disease in different population groups", "By comparing the incidence versus the prevalence of disease in one group", "By comparing the prevalence of disease in one group to the incidence in another group", "By analyzing trends in disease rates over time"], a: 1 },
            { stem: "Which of the following research studies would NOT be typically conducted by an epidemiologist?", c: ["Investigating the spread of a contagious disease in the community", "Examining the effectiveness of a new vaccine in preventing the spread of a specific illness", "Studying the risk factors of autoimmune disease in a population", "Evaluating the effectiveness of a new cancer drug in preventing cancer in cell cultures", "Analyzing data to create maps of disease distribution"], a: 3 },
            { stem: "In a population of 100,000, there were 500 breast cancer cases at the end of 2017 and 800 breast cancer cases by the end of 2018. Assuming no deaths or cancer remission in the population, what was the incidence of breast cancer in 2018?", c: ["0.2%", "0.3%", "0.5%", "0.8%", "1.3%"], a: 1 },
            { stem: "John Snow and George Soper were able to trace the cholera and typhoid outbreaks to which sources, respectively?", c: ["A person and a contaminated air", "A water source and a person", "Contaminated food and a person", "A water pump and spoiled meat", "Contaminated food and bad air"], a: 1 },
            { stem: "The three kinds of epidemiological prevention strategies differ in", c: ["the stage at which the strategy is implemented in relation to the progression of a disease.", "whether the specific prevention tools involve pharmaceutical versus lifestyle interventions.", "the personnel involved in implementing the strategies or interventions.", "the scale at which interventions are implemented within a population.", "the amount of impact that an intervention is likely to have."], a: 0 },
            { stem: "Each of the following is mentioned as a toxin that can contribute to the development of cancer EXCEPT for one. Which is the one EXCEPTION?", c: ["Asbestos", "Lead", "Benzene", "Mercury", "Cigarette smoke"], a: 3 },
            { stem: "According to statistics presented here, for every 100 people who currently get lung cancer, approximately how many would get lung cancer if smoking were eliminated?", c: ["10", "15", "25", "45", "75"], a: 0 },
            { stem: "The author suggests that, for diseases like Alzheimer's disease and prostate cancer,", c: ["epidemiologists have done an effective job at eliminating risk factors.", "prevention programs have been as successful as they have for lung cancer.", "primary prevention programs have been the most successful.", "their development is too poorly understood to be effectively prevented.", "epidemiology will likely help eradicate them soon."], a: 3 },
            { stem: "The quarantining of typhoid Mary was an example of which type of prevention?", c: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "None of the above", "This cannot be determined from the information given"], a: 0 },
            { stem: "According to the passage, efforts that have led to a 70% decline in the death rate from heart attacks and strokes since the 1960s are examples of what type of prevention?", c: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "None of the above", "This cannot be determined from the information given"], a: 2 },
            { stem: "HIV testing is now more widely available and accessible than ever before. Testing can be done at health clinics, hospitals, community-based organizations, and even in some retail pharmacies. This is an example of what type of prevention efforts?", c: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "None of the above", "This cannot be determined from the information given"], a: 1 },
            { stem: "Efforts to reduce the incidence of lung cancer, as described in the passage, are an example of what type of prevention method?", c: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Primary and secondary prevention", "Secondary and tertiary prevention"], a: 0 },
            { stem: "Since 1997, there has been an approximately 39% reduction in the", c: ["number of current cases of HIV infection.", "incidence of HIV infection.", "prevalence of HIV infection.", "deaths caused by HIV infection.", "severity of HIV symptoms."], a: 1 },
            { stem: "With which statement about prevention methods would the author of the passage agree?", c: ["Rigorous experimentation must be carried out to more accurately assess the value of prevention.", "Tertiary prevention methods are best carried out alongside primary or secondary prevention methods and are less effective alone.", "Infectious disease prevention is a more serious problem for epidemiologists than non-infectious disease prevention.", "The most effective way to combat a disease is to eliminate risk factors in individuals who do not yet have the disease.", "It is better to put more effort into effective disease management than effective prevention measures."], a: 3 },
            { stem: "The early uses of epidemiology in both the London and New York outbreaks largely dealt with", c: ["identifying risk factors that made individuals more susceptible to disease.", "comparing the spread of disease in two different populations.", "quarantining diseased individuals to prevent transmission to healthy individuals.", "locating a source of infection in order to contain an outbreak of disease.", "describing how disease spreads throughout a population."], a: 3 },
            { stem: "According to the passage, which of the following best describes the relationship between incidence and prevalence?", c: ["Incidence measures new cases while prevalence measures all existing cases at a point in time.", "Incidence and prevalence are always equal in a stable population.", "Prevalence is always higher than incidence for chronic diseases.", "Incidence can only be calculated for infectious diseases, while prevalence applies to all diseases.", "Prevalence measures new cases while incidence measures existing cases."], a: 0 }
        ],
        // Practice Test 2
        [
            // Passage 1: Antibiotic Resistance (Questions 1-17)
            { stem: "The author describes the introduction of penicillin primarily to emphasize", c: ["the limited impact of early antibiotics", "that bacterial infections were once rare", "how quickly optimism about antibiotics emerged", "that penicillin was ineffective against pneumonia"], a: 2 },
            { stem: "According to the passage, what do β-lactam antibiotics mainly target?", c: ["Bacterial DNA replication enzymes", "Bacterial cell-wall synthesis", "Viral protein coats", "Human mitochondrial membranes"], a: 1 },
            { stem: "In paragraph 3, which mechanism is not mentioned as a way bacteria resist antibiotics?", c: ["Efflux pumps", "Enzymatic inactivation of drugs", "Alteration of drug targets", "Increased viral replication"], a: 3 },
            { stem: "Methicillin-resistant Staphylococcus aureus (MRSA) is used in the passage as an example of", c: ["a virus that evolved resistance to vaccines", "a bacterium initially confined to hospitals that became more widespread", "a pathogen that remains fully susceptible to penicillin", "a parasite without clinical significance"], a: 1 },
            { stem: "Which of the following is cited as a consequence of patients stopping antibiotics early?", c: ["Reduced drug costs for hospitals", "Decreased evolution of resistant bacteria", "Survival of partially treated bacterial populations", "Improved immune-system memory against bacteria"], a: 2 },
            { stem: "The passage suggests that antibiotic use in agriculture primarily contributes to resistance by", c: ["curing viral infections in livestock", "exposing large bacterial populations to low-level antibiotics", "reducing the need for vaccination", "eliminating all pathogenic bacteria in farm environments"], a: 1 },
            { stem: "Which of the following best describes antimicrobial stewardship?", c: ["A genetic technique to modify bacterial DNA", "A public campaign discouraging any antibiotic usage", "A coordinated effort to optimize when and how antibiotics are prescribed", "A policy that allows patients to choose their own antibiotics"], a: 2 },
            { stem: "A major obstacle to stewardship programs in low- and middle-income countries is", c: ["lack of any bacterial infections", "absence of antibiotic resistance", "limited resources and trained personnel", "excess funding allocated to antibiotic discovery"], a: 2 },
            { stem: "The paradox described in paragraph 8 centers on the fact that", c: ["profitable antibiotics tend to be clinically ineffective", "effective new antibiotics should be used sparingly, reducing financial returns", "patients refuse to take new antibiotics", "resistance never develops to newly discovered drugs"], a: 1 },
            { stem: "Which of the following statements about bacteriophages is supported by the passage?", c: ["They are human cells that attack bacteria.", "They are viruses that can infect and kill bacteria.", "They are a form of broad-spectrum antibiotic.", "They have eliminated the need for antibiotics in hospitals."], a: 1 },
            { stem: "What is implied about anti-virulence drugs in paragraph 9?", c: ["They may exert less selective pressure for resistance than traditional antibiotics.", "They must kill all bacteria rapidly to be effective.", "They only work against viruses.", "They have already replaced standard antibiotics in most settings."], a: 0 },
            { stem: "The author's tone toward the future of antibiotic resistance is best described as", c: ["dismissive", "complacent", "cautiously concerned", "celebratory"], a: 2 },
            { stem: "In paragraph 3, the word \"susceptible\" most nearly means", c: ["genetically identical", "easily influenced or harmed", "environmentally stable", "nutritionally deficient"], a: 1 },
            { stem: "According to the passage, all of the following contribute to the spread of resistant bacteria EXCEPT", c: ["international travel", "over-the-counter access to antibiotics", "strict isolation of all hospital patients", "use of antibiotics for viral illnesses"], a: 2 },
            { stem: "Statement: \"Some pharmaceutical companies have reduced or abandoned antibiotic research.\" Reason: \"Extremely successful new antibiotics are expected to be used as frequently as possible to maximize sales.\"", c: ["Both the statement and the reason are correct and related.", "Both the statement and the reason are correct but NOT related.", "The statement is correct, but the reason is NOT correct.", "The statement is NOT correct, but the reason is correct.", "NEITHER the statement NOR the reason is correct."], a: 2 },
            { stem: "Which of the following best captures the main idea of the passage?", c: ["Antibiotics are outdated and should be replaced immediately.", "Antibiotic resistance is a dynamic evolutionary process driven by human behavior and policy.", "Resistance arises only in hospital settings and is easily reversed.", "The discovery of penicillin has had no lasting impact on medicine."], a: 1 },
            { stem: "The author's comparison of resistance to \"evolution in real time\" chiefly serves to", c: ["argue that evolution is only relevant in laboratories", "highlight how quickly bacterial populations can adapt under selection", "claim that evolution no longer occurs in nature", "suggest that resistance is purely random and cannot be influenced"], a: 1 },
            // Passage 2: Ocean Acidification (Questions 18-34)
            { stem: "According to the passage, the primary cause of ocean acidification is", c: ["plastic pollution", "increased volcanic eruptions", "rising atmospheric CO₂ levels", "depletion of ozone"], a: 2 },
            { stem: "In paragraph 2, which ion is directly responsible for lowering the pH of seawater?", c: ["Sodium (Na⁺)", "Hydrogen (H⁺)", "Chloride (Cl⁻)", "Calcium (Ca²⁺)"], a: 1 },
            { stem: "The author emphasizes that the pH scale is logarithmic to show that", c: ["ocean pH cannot change more than 0.1 units", "small numerical changes can correspond to large chemical shifts", "pH is unrelated to hydrogen-ion concentration", "acidity and alkalinity are interchangeable terms"], a: 1 },
            { stem: "Which of the following best describes the chemical effect of increased CO₂ on carbonate ions?", c: ["It increases carbonate availability, aiding shell formation.", "It leaves carbonate levels unchanged.", "It reduces carbonate ion concentration, hindering shell building.", "It converts carbonate entirely into oxygen gas."], a: 2 },
            { stem: "Coral reefs are important to marine ecosystems primarily because they", c: ["occupy the majority of the ocean floor", "support a disproportionately large share of marine species", "are resistant to warming and acidification", "remove all CO₂ from seawater"], a: 1 },
            { stem: "Which of the following is NOT mentioned as a stressor affecting coral reefs?", c: ["Warming", "Overfishing", "Nutrient pollution", "Increased salinity"], a: 3 },
            { stem: "The passage cites juvenile fish being attracted to predator scent as an example of", c: ["improved predator-avoidance behavior", "altered behavior under high CO₂ conditions", "successful adaptation to acidification", "reduced experimental reliability"], a: 1 },
            { stem: "In paragraph 7, the relationship between ocean acidification and human societies is presented as", c: ["indirect and negligible", "primarily economic, with no ecological component", "tightly linked through food security and livelihoods", "limited to wealthy tourists and cruise ships"], a: 2 },
            { stem: "Statement: \"Restoring seagrass and mangroves can help buffer local pH levels.\" Reason: \"These ecosystems absorb CO₂ and can locally modify water chemistry.\"", c: ["Both the statement and the reason are correct and related.", "Both the statement and the reason are correct but NOT related.", "The statement is correct, but the reason is NOT correct.", "The statement is NOT correct, but the reason is correct.", "NEITHER the statement NOR the reason is correct."], a: 0 },
            { stem: "The author's attitude toward geoengineering approaches in paragraph 9 is best described as", c: ["uncritical enthusiasm", "cautiously skeptical due to potential risks", "dismissive of any scientific value", "indifferent and uninterested"], a: 1 },
            { stem: "The word \"inexhaustible\" in paragraph 10 most nearly means", c: ["impossible to measure", "incapable of being used up", "easily polluted", "chemically unstable"], a: 1 },
            { stem: "According to the passage, geological records suggest that current ocean-chemistry changes", c: ["are slower than in past mass-extinction events", "have no historical precedent of ecological impact", "are rapid compared to changes over tens of millions of years", "are entirely caused by volcanic eruptions"], a: 2 },
            { stem: "Which of the following best states the main idea of paragraph 5?", c: ["Coral reefs occupy a small area and are therefore unimportant.", "Acidification has minimal impact compared to overfishing.", "Coral reefs are ecologically crucial and highly vulnerable to acidification plus other stressors.", "Coral reefs are primarily affected by tourism and not by chemical changes."], a: 2 },
            { stem: "All of the following are direct or indirect consequences of ocean acidification mentioned in the passage EXCEPT", c: ["dissolution of shells in hatcheries", "altered fish navigation and predator detection", "increased stability of coral skeletons", "threats to tourism and coastal protection"], a: 2 },
            { stem: "The author opens the passage by describing historical perceptions of the oceans primarily to", c: ["argue that the oceans cannot be altered", "show how earlier assumptions underestimated human impact", "claim that waste disposal at sea remains safe", "demonstrate that pH was well understood in the past"], a: 1 },
            { stem: "Which of the following best summarizes the author's central claim?", c: ["Ocean acidification is a minor side effect of climate change with limited impact.", "Ocean acidification is a fundamental chemical consequence of CO₂ emissions with widespread ecological and human implications.", "Acidification can be fully reversed by local restoration projects alone.", "The main problem with acidification is public misunderstanding, not chemistry."], a: 1 },
            { stem: "The relative invisibility of acidification, as discussed in paragraph 10, primarily complicates", c: ["laboratory measurement of ocean pH", "the ability of marine organisms to sense predators", "efforts to communicate the urgency of the problem", "the formation of calcium carbonate"], a: 2 },
            // Passage 3: JWST (Questions 35-50)
            { stem: "JWST was primarily designed to", c: ["replace Hubble's visible-light observations entirely", "study the universe in infrared light, especially at very early epochs", "operate in Earth's atmosphere to observe weather patterns", "focus exclusively on planets within our Solar System"], a: 1 },
            { stem: "The location of JWST at the L2 point mainly allows it to", c: ["orbit Earth every 90 minutes", "remain aligned so its sunshield can consistently block heat from the Sun and Earth", "be easily serviced by astronauts", "avoid gravitational forces entirely"], a: 1 },
            { stem: "According to the passage, JWST's mirror is constructed from", c: ["a single piece of uncoated glass", "multiple beryllium segments coated with gold", "silver-coated plastic panels", "carbon fiber without any metallic coating"], a: 1 },
            { stem: "JWST can observe more distant objects than Hubble primarily because", c: ["it uses only visible light", "its mirror collects more light due to its larger area", "it is much closer to Earth", "it operates at higher temperatures"], a: 1 },
            { stem: "In paragraph 4, the term \"redshifted\" most nearly refers to light that has", c: ["shifted toward shorter wavelengths", "lost all energy and become invisible", "stretched to longer wavelengths due to cosmic expansion", "changed from electromagnetic to sound energy"], a: 2 },
            { stem: "The passage indicates that early JWST galaxy observations have", c: ["perfectly confirmed all existing theoretical models", "revealed galaxies forming earlier and more rapidly than expected", "shown that no galaxies existed in the first billion years", "proven that dark matter does not exist"], a: 1 },
            { stem: "Transit spectroscopy, as used by JWST, involves", c: ["bouncing radar off a planet's surface", "measuring changes in a star's light as a planet passes in front of it", "analyzing gravitational waves produced by exoplanets", "imaging planets directly in visible light only"], a: 1 },
            { stem: "Which of the following molecules is not listed as an atmospheric component JWST might detect?", c: ["Water vapor", "Methane", "Carbon dioxide", "Sodium chloride"], a: 3 },
            { stem: "The phrase \"single-point failures\" in paragraph 7 implies that", c: ["the mission had many backup systems for each step", "any failure in certain deployment steps could jeopardize the entire mission", "JWST could be reset easily after a malfunction", "astronauts were available to repair any problems"], a: 1 },
            { stem: "Critics of JWST, as described in paragraph 8, primarily focused on", c: ["the telescope's inability to observe in visible light", "the project's cost and delays compared to other missions", "the lack of international collaboration", "the absence of exoplanet instruments"], a: 1 },
            { stem: "The passage suggests that supporters of JWST justified its cost by", c: ["emphasizing that it would end the need for ground-based telescopes", "citing its potential scientific impact, analogous to major observatories", "arguing that it was cheaper than originally projected", "claiming it would generate direct economic profit"], a: 1 },
            { stem: "Statement: \"JWST can be physically serviced by astronauts, similar to Hubble.\" Reason: \"It orbits relatively close to Earth in low Earth orbit.\"", c: ["Both the statement and the reason are TRUE.", "Both the statement and the reason are FALSE.", "The statement is TRUE, but the reason is FALSE.", "The statement is FALSE, but the reason is TRUE."], a: 1 },
            { stem: "The author's primary purpose in paragraph 10 is to", c: ["criticize the public for misunderstanding JWST images", "highlight how JWST's outputs function both as scientific data and as cultural symbols", "argue that artistic renderings are misleading and unscientific", "show that JWST's images have no relevance outside astronomy"], a: 1 },
            { stem: "In paragraph 1, the author mentions \"more than two decades of engineering, scientific planning, and political negotiation\" mainly to underscore", c: ["how routine large telescope missions have become", "the long, complex effort required to bring JWST to fruition", "that JWST was built without international cooperation", "that planning is less important than luck in space missions"], a: 1 },
            { stem: "The overall tone of the passage toward JWST is best described as", c: ["dismissive and skeptical", "neutral and indifferent", "cautiously celebratory and informative", "alarmed and pessimistic"], a: 2 },
            { stem: "Which of the following best summarizes the main idea of the passage?", c: ["JWST is an expensive failure that offers little beyond Hubble.", "JWST extends human vision into the infrared, enabling transformative studies of early galaxies and exoplanets despite significant technical and financial challenges.", "JWST was launched primarily to replace all ground-based observatories.", "JWST's main value lies in its popularity with the general public, not in its scientific contributions."], a: 1 }
        ],
        // Practice Test 3
        [
            // Passage 1: The Gut-Brain Axis (Questions 1-17)
            { stem: "According to the passage, the enteric nervous system (ENS) is called \"the second brain\" primarily because", c: ["it contains more neurons than the brain", "it contains over 100 million neurons, more than the spinal cord", "it operates completely independently from the central nervous system", "it is located in the head region"], a: 3 },
            { stem: "The gut-brain axis is described as bidirectional, meaning that", c: ["communication flows only from gut to brain", "communication flows in both directions between the gut and brain", "it involves only neural pathways", "it operates independently of hormones"], a: 1 },
            { stem: "According to the passage, which neurotransmitter is NOT mentioned as being produced by gut microbes?", c: ["Serotonin", "Dopamine", "Norepinephrine", "GABA"], a: 2 },
            { stem: "The passage states that about 90% of the body's serotonin is synthesized in the gut. This peripheral serotonin influences mental states primarily by", c: ["crossing the blood-brain barrier directly", "acting on the vagus nerve and affecting systemic inflammation", "replacing brain serotonin entirely", "causing immediate mood changes"], a: 2 },
            { stem: "Germ-free mice studies mentioned in the passage demonstrate that", c: ["microbial colonization is crucial for normal brain development", "mice do not need microbes to function normally", "sterile environments improve memory", "microbes have no effect on behavior"], a: 0 },
            { stem: "The passage suggests that human studies linking microbiome to psychiatric conditions face challenges because", c: ["there are no distinct microbial signatures", "correlation does not prove causation, and many confounding factors exist", "all psychiatric patients have identical microbiomes", "microbiome changes are impossible to measure"], a: 3 },
            { stem: "According to the passage, \"psychobiotics\" refers to", c: ["probiotics and prebiotics that may improve mental health", "antibiotics that kill gut bacteria", "drugs that only affect the brain", "substances that have no effect on the microbiome"], a: 2 },
            { stem: "The passage indicates that Parkinson's disease may begin in the intestines because", c: ["all Parkinson's patients have intestinal infections", "misfolded alpha-synuclein proteins can migrate from gut to brain via the vagus nerve", "the disease only affects the digestive system", "intestinal neurons are identical to brain neurons"], a: 1 },
            { stem: "According to the passage, certain gut bacteria may contribute to Alzheimer's disease by producing", c: ["only beneficial proteins", "amyloid-like proteins and inflammatory molecules such as LPS", "antibodies that protect the brain", "substances that strengthen the blood-brain barrier"], a: 2 },
            { stem: "The passage suggests that future treatments for mental and neurodegenerative disorders may involve", c: ["only traditional drugs", "only surgical interventions", "manipulating microbial ecosystems along with traditional therapies", "completely avoiding any microbial interventions"], a: 3 },
            { stem: "Experts caution against premature enthusiasm about probiotics because", c: ["the human microbiome is poorly understood, and commercial products often make unsupported claims", "all probiotics are proven to be harmful", "probiotics cannot survive in the gut", "there are no viable probiotic organisms available"], a: 0 },
            { stem: "According to the passage, tools such as metagenomic sequencing and metabolomics are helping researchers", c: ["untangle the molecular dialogue between gut microbes and the brain", "eliminate all gut bacteria", "prove that microbes have no effect on health", "create sterile environments for all humans"], a: 2 },
            { stem: "The passage's overall tone toward the gut-brain axis research is best described as", c: ["dismissive and skeptical", "cautiously optimistic but acknowledging limitations", "completely negative", "unrealistically enthusiastic"], a: 1 },
            { stem: "According to the passage, which of the following is NOT mentioned as a pathway in the gut-brain axis?", c: ["The vagus nerve", "Hormonal messengers", "Direct neural connections through the spinal cord", "Immune system responses"], a: 1 },
            { stem: "The passage suggests that inflammation in the gut can alter brain chemistry, leading some scientists to hypothesize that", c: ["psychiatric disorders might sometimes originate from intestinal dysfunction", "gut inflammation has no effect on the brain", "all psychiatric disorders are caused by gut problems", "the gut and brain are completely separate"], a: 0 },
            { stem: "Studies transferring gut microbes from anxious to calm mice, and vice versa, demonstrate that", c: ["microbes have no effect on behavior", "personality traits can, in part, follow microbial communities", "all mice have identical microbiomes", "behavior is completely determined by genetics"], a: 3 },
            { stem: "The passage indicates that the gut-brain axis represents an emerging frontier in medicine because it", c: ["has been fully understood for decades", "bridges psychiatry, neurology, and gastroenterology", "only affects digestion", "has no clinical applications"], a: 1 },
            // Passage 2: Nuclear Fusion (Questions 18-34)
            { stem: "According to the passage, nuclear fusion differs from nuclear fission in that fusion", c: ["produces long-lived radioactive waste", "splits uranium atoms", "combines light nuclei and leaves minimal byproducts", "only occurs in the Sun"], a: 2 },
            { stem: "In the Sun's core, fusion occurs because", c: ["gravity is weaker than on Earth", "temperatures and pressures allow hydrogen nuclei to overcome electrostatic repulsion", "no energy is required", "uranium is present"], a: 3 },
            { stem: "The passage states that terrestrial fusion experiments primarily use deuterium and tritium because", c: ["they are easier to obtain than hydrogen", "they fuse more readily than ordinary hydrogen", "they are not isotopes", "they require lower temperatures"], a: 0 },
            { stem: "To ignite fusion on Earth, plasma must reach temperatures", c: ["above 100 million kelvin, more than six times hotter than the Sun's core", "equal to room temperature", "below freezing", "exactly matching the Sun's core temperature"], a: 0 },
            { stem: "The tokamak design uses", c: ["lasers to compress fuel", "powerful superconducting magnets to corral plasma", "chemical reactions", "solar panels"], a: 2 },
            { stem: "According to the passage, ITER aims to demonstrate", c: ["a twofold energy gain", "a tenfold energy gain, producing 500 megawatts from 50 megawatts input", "no energy gain", "infinite energy"], a: 0 },
            { stem: "The National Ignition Facility (NIF) uses", c: ["hundreds of high-energy lasers to bombard a fuel pellet", "only magnetic fields", "chemical reactions", "solar energy"], a: 0 },
            { stem: "The NIF ignition milestone in 2022 represented", c: ["net electrical gain for power production", "the first experimental proof that self-sustaining fusion burn is possible", "complete failure", "the end of fusion research"], a: 3 },
            { stem: "According to the passage, fusion fuel supplies are effectively inexhaustible because", c: ["deuterium can be extracted from seawater and tritium can be bred from lithium", "fusion doesn't require fuel", "fuel is created during fusion", "there are unlimited supplies of uranium"], a: 2 },
            { stem: "The passage states that a single kilogram of fusion fuel could yield as much energy as", c: ["one ton of coal", "tens of thousands of tons of coal", "no energy at all", "less than a gram of coal"], a: 0 },
            { stem: "Maintaining plasma stability is described as", c: ["easy and straightforward", "akin to balancing a tornado in a bottle", "impossible", "not necessary for fusion"], a: 1 },
            { stem: "According to the passage, the inner walls of fusion reactors must withstand", c: ["only low temperatures", "intense bombardment by high-energy neutrons", "no stress at all", "only magnetic fields"], a: 1 },
            { stem: "Critics of fusion research argue that", c: ["fusion is already practical", "resources could be better spent on existing renewable technologies", "fusion is too cheap", "fusion requires no funding"], a: 0 },
            { stem: "Private startups have entered fusion research with", c: ["only traditional designs", "compact reactor designs using advanced superconducting magnets and machine-learning algorithms", "no new ideas", "only theoretical concepts"], a: 3 },
            { stem: "The passage suggests that advances from fusion research", c: ["benefit only fusion itself", "already benefit medicine, computing, and industry", "have no applications", "are purely theoretical"], a: 2 },
            { stem: "According to the passage, the pursuit of fusion", c: ["has no value beyond energy production", "illuminates human perseverance and pushes technological boundaries", "is a waste of resources", "only benefits space exploration"], a: 1 },
            { stem: "The passage's overall message about fusion is that", c: ["fusion is impossible", "fusion represents a potential energy revolution with significant challenges", "fusion is already commercially viable", "fusion research should be abandoned"], a: 3 },
            // Passage 3: The Expanding Universe and Dark Energy (Questions 35-50)
            { stem: "Edwin Hubble's 1929 discovery fundamentally altered understanding of the cosmos by providing evidence that", c: ["the universe is static", "the universe itself is expanding", "galaxies are not moving", "the universe is shrinking"], a: 1 },
            { stem: "According to the passage, the cosmic microwave background (CMB) provides a snapshot of the universe", c: ["at the moment of the Big Bang", "just 380,000 years after its birth", "one billion years ago", "in the present day"], a: 2 },
            { stem: "The passage states that in 1998, two research teams found that distant supernovae appeared dimmer than expected, suggesting that", c: ["the universe is static", "the expansion of the universe is accelerating", "the universe is not expanding", "supernovae don't exist"], a: 0 },
            { stem: "According to the passage, dark energy comprises about", c: ["10% of the universe's energy density", "50% of the universe's energy density", "68% of the total energy density of the universe", "100% of the universe's energy density"], a: 2 },
            { stem: "The cosmological constant (Λ) was originally introduced by Einstein to", c: ["describe dark energy", "maintain a static universe", "prove the universe is expanding", "explain gravity"], a: 1 },
            { stem: "According to the passage, \"quintessence\" is a theory that posits", c: ["dark energy is constant", "dark energy is a dynamic field whose energy density evolves over time", "dark energy doesn't exist", "the universe is static"], a: 0 },
            { stem: "The passage suggests that if dark energy remains constant, the universe's fate will be", c: ["a Big Crunch", "galaxies beyond our local group will drift beyond our observable horizon", "immediate collapse", "no change"], a: 1 },
            { stem: "According to the passage, the \"Big Rip\" scenario would occur if", c: ["dark energy remains constant", "dark energy grows stronger over time", "dark energy disappears", "the universe stops expanding"], a: 2 },
            { stem: "The \"Hubble tension\" refers to", c: ["agreement between all measurements", "discrepancies in measurements of the universe's expansion rate", "the discovery of dark energy", "proof that the universe is static"], a: 2 },
            { stem: "Upcoming missions such as the Euclid satellite and Nancy Grace Roman Space Telescope aim to", c: ["prove the universe is static", "map billions of galaxies to study dark energy", "disprove the Big Bang", "find life on other planets"], a: 0 },
            { stem: "The passage suggests that the discovery of acceleration underscores", c: ["that science never changes", "the self-correcting nature of science", "that all theories are wrong", "that observation is unimportant"], a: 3 },
            { stem: "According to the passage, cosmology has repeatedly overturned its assumptions, progressing from", c: ["expansion to static to accelerated expansion", "a static universe, to expansion, to accelerated expansion", "accelerated expansion to static", "no understanding to complete understanding"], a: 1 },
            { stem: "The passage describes dark energy as", c: ["completely understood", "a placeholder for our ignorance, yet symbolizing how observation drives theoretical revolutions", "a proven constant", "not real"], a: 2 },
            { stem: "According to the passage, dark energy could be", c: ["only a cosmological constant", "only an evolving field", "a cosmological constant, an evolving field, or evidence that gravity requires revision", "proven to not exist"], a: 1 },
            { stem: "The passage's concluding message is that dark energy stands as", c: ["proof that we understand everything", "a humbling reminder that the cosmos is far stranger than our equations can yet describe", "evidence that science has failed", "proof that the universe is simple"], a: 2 },
            { stem: "The passage indicates that observations of the CMB, galaxy clustering, and gravitational lensing all", c: ["prove dark energy doesn't exist", "reveal the fundamental cause of dark energy", "reinforce the need for dark energy, but none reveal its fundamental cause", "show the universe is static"], a: 0 }
        ],
        // Practice Test 4
        [
            // Passage 1: Epigenetics and the Control of Gene Expression (Questions 1-17)
            { stem: "According to the passage, epigenetics refers to the process by which", c: ["DNA sequence is permanently altered", "environmental factors regulate how genes are expressed without altering the DNA code", "genes are completely deleted from the genome", "mutations occur in genetic sequences"], a: 2 },
            { stem: "The passage states that DNA methylation typically", c: ["activates genes", "silences the associated gene", "has no effect on gene expression", "causes genetic mutations"], a: 1 },
            { stem: "According to the passage, histone acetylation tends to", c: ["tighten chromatin structure", "prevent transcription", "loosen chromatin structure, promoting transcriptional activity", "cause DNA damage"], a: 3 },
            { stem: "The passage compares the genome to a piano to illustrate that", c: ["genes are permanent and unchangeable", "genes are keys and epigenetic marks determine which melodies are played", "all genes are always active", "epigenetics has no effect"], a: 2 },
            { stem: "Unlike genetic mutations, epigenetic changes are described as", c: ["reversible and often influenced by external cues", "permanent and unchangeable", "always harmful", "only occurring during reproduction"], a: 0 },
            { stem: "The passage mentions that famine exposure during pregnancy has been linked to", c: ["immediate genetic mutations", "persistent methylation changes in offspring, predisposing them to metabolic diseases", "no biological effects", "complete gene deletion"], a: 2 },
            { stem: "According to the passage, epigenetics helps explain how multicellular organisms", c: ["maintain identical cells throughout the body", "generate hundreds of distinct cell types from a single fertilized egg", "prevent cell differentiation", "eliminate all genetic variation"], a: 1 },
            { stem: "The passage states that stem cells maintain their pluripotency partly by", c: ["activating all genes", "suppressing differentiation genes through methylation and histone modification", "deleting unnecessary genes", "mutating their DNA"], a: 2 },
            { stem: "Studies on identical twins mentioned in the passage show that", c: ["twins always have identical epigenomes", "the longer identical twins live apart, the more their epigenomes diverge", "epigenetics has no effect on twins", "twins cannot have different appearances"], a: 1 },
            { stem: "According to the passage, in many tumors, tumor suppressor genes are", c: ["overactive", "activated through demethylation", "silenced through hypermethylation", "completely deleted"], a: 3 },
            { stem: "The passage describes \"epigenetic therapies\" as", c: ["drugs that inhibit DNA methylation or modify histone acetylation to reverse abnormal gene silencing", "treatments that permanently alter DNA sequences", "therapies that have no effect on cancer", "methods to delete genes"], a: 0 },
            { stem: "According to the passage, epigenetics raises evolutionary questions because", c: ["it proves Darwin was wrong", "if environmentally induced epigenetic changes can be inherited, this challenges traditional Darwinian views", "it has no evolutionary implications", "all epigenetic changes are permanent"], a: 3 },
            { stem: "The passage states that epigenomics", c: ["maps genetic mutations", "maps epigenetic marks across the genome", "only studies DNA sequences", "has no practical applications"], a: 2 },
            { stem: "Scientists caution against oversimplifying epigenetics because", c: ["it is completely understood", "most epigenetic changes are tightly constrained by biological systems", "it has no biological significance", "all epigenetic changes are identical"], a: 1 },
            { stem: "According to the passage, the challenge in epigenetics research lies in", c: ["finding any epigenetic changes", "distinguishing causal relationships from correlations", "proving that epigenetics exists", "eliminating all epigenetic marks"], a: 2 },
            { stem: "The passage suggests that epigenetics promises to", c: ["replace genetics entirely", "bridge the gap between nature and nurture", "prove that environment has no effect", "eliminate all genetic variation"], a: 0 },
            { stem: "According to the passage, epigenetics expands our understanding of", c: ["only genetic inheritance", "what inheritance truly means", "only environmental effects", "DNA structure alone"], a: 3 },
            // Passage 2: The Chemistry of Battery Technology (Questions 18-34)
            { stem: "According to the passage, batteries convert", c: ["electrical energy into chemical energy", "chemical energy into electrical energy through controlled redox reactions", "mechanical energy into heat", "solar energy directly into electricity"], a: 2 },
            { stem: "The passage states that a lithium-ion cell consists of", c: ["one electrode and an electrolyte", "two electrodes, an anode and a cathode, separated by an electrolyte", "only a cathode", "only an anode"], a: 1 },
            { stem: "During discharge of a lithium-ion battery, lithium ions flow", c: ["from cathode to anode", "from anode to cathode through the electrolyte", "only through the external circuit", "in no particular direction"], a: 2 },
            { stem: "According to the passage, lithium-ion batteries are popular due to their", c: ["low cost and unlimited supply", "high energy density, long cycle life, and relatively low weight", "ability to work without charging", "complete lack of environmental concerns"], a: 0 },
            { stem: "The passage mentions that lithium is", c: ["abundant everywhere", "scarce and unevenly distributed across the planet", "not used in batteries", "easily recyclable"], a: 1 },
            { stem: "According to the passage, sodium-ion batteries", c: ["store more energy than lithium-ion batteries", "offer a promising option that could provide cost-effective solutions for grid-scale energy storage", "are impossible to manufacture", "use only cobalt"], a: 2 },
            { stem: "The passage states that solid-state batteries", c: ["use liquid electrolytes", "replace the flammable liquid electrolyte with a solid one", "cannot be recharged", "have no safety advantages"], a: 2 },
            { stem: "According to the passage, manufacturing challenges and limited ionic conductivity currently", c: ["have been completely solved", "hinder widespread adoption of solid-state batteries", "only affect lithium-ion batteries", "have no impact on battery development"], a: 1 },
            { stem: "The passage mentions that metal-air batteries", c: ["cannot use oxygen", "use oxygen from the atmosphere as a reactant", "only work in space", "have no theoretical energy density"], a: 1 },
            { stem: "According to the passage, zinc-air and aluminum-air batteries suffer from", c: ["too high energy density", "slow reaction kinetics and limited rechargeability", "being too safe", "using too much oxygen"], a: 2 },
            { stem: "The passage states that redox flow batteries are well-suited for renewable energy grids because", c: ["they have the highest energy density", "their storage capacity scales with tank size rather than electrode surface area", "they cannot be scaled", "they only work for small devices"], a: 1 },
            { stem: "According to the passage, machine learning is being used to", c: ["replace all batteries", "predict optimal combinations of materials and accelerate discovery", "eliminate the need for batteries", "only study old battery designs"], a: 2 },
            { stem: "The passage emphasizes that improvements in recycling and circular design are", c: ["unnecessary", "equally essential to battery development", "only important for lithium", "impossible to achieve"], a: 3 },
            { stem: "According to the passage, closed-loop systems that recover materials from spent batteries can", c: ["only recover lithium", "reduce waste and dependence on raw material extraction", "increase waste", "only work for new batteries"], a: 1 },
            { stem: "The passage describes batteries as", c: ["outdated technology", "one of the defining technologies of the 21st century", "only useful for phones", "not important for sustainability"], a: 1 },
            { stem: "According to the passage, battery improvement will determine the success of", c: ["only electric vehicles", "electric transportation, renewable integration, and broader sustainability efforts", "only renewable energy", "only grid storage"], a: 0 },
            { stem: "The passage's overall message about batteries is that", c: ["batteries are not important", "they are central to modern energy storage and sustainability", "only lithium-ion batteries matter", "batteries cannot be improved"], a: 1 },
            // Passage 3: Seismic Waves and Earth's Interior (Questions 35-50)
            { stem: "According to the passage, scientists have mapped Earth's interior using", c: ["seismic waves generated by earthquakes", "direct observation", "satellite imaging", "drilling"], a: 0 },
            { stem: "The passage states that seismic waves change speed or direction depending on", c: ["only the time of day", "the weather", "the season", "the materials they encounter"], a: 3 },
            { stem: "According to the passage, body waves are subdivided into", c: ["only P-waves", "primary (P) waves and secondary (S) waves", "only surface waves", "only S-waves"], a: 2 },
            { stem: "The passage states that P-waves are", c: ["shear waves", "compressional, traveling through both solids and liquids", "only surface waves", "unable to travel through solids"], a: 1 },
            { stem: "According to the passage, S-waves", c: ["travel through both solids and liquids", "are shear waves that move only through solids", "cannot exist", "are faster than P-waves"], a: 1 },
            { stem: "The passage states that the inability of S-waves to pass through liquid provides evidence for", c: ["Earth's solid core", "Earth's molten outer core", "a completely solid Earth", "no core at all"], a: 3 },
            { stem: "According to the passage, shadow zones are", c: ["regions where all waves appear", "regions where specific wave types fail to appear", "areas with no earthquakes", "only found on the surface"], a: 1 },
            { stem: "The passage identifies distinct internal layers including", c: ["only crust and mantle", "a thin crust, a viscous mantle, a liquid outer core, and a solid inner core", "only the core", "no distinct layers"], a: 0 },
            { stem: "According to the passage, the circulation of molten iron in the outer core", c: ["has no effect", "generates electrical currents that sustain the geomagnetic field", "only causes earthquakes", "prevents plate tectonics"], a: 1 },
            { stem: "The passage states that the Gutenberg discontinuity marks", c: ["the boundary between crust and mantle", "the end of the inner core", "the surface of Earth", "the beginning of the liquid outer core"], a: 3 },
            { stem: "According to the passage, the Lehmann boundary separates", c: ["crust from mantle", "the liquid outer core from the solid inner core", "mantle from core", "surface from interior"], a: 1 },
            { stem: "The passage mentions that tomographic imaging uses", c: ["only one seismic recording", "thousands of seismic recordings to produce three-dimensional models", "only satellite data", "only surface observations"], a: 2 },
            { stem: "According to the passage, mantle plumes can form", c: ["volcanic hotspots like those in Hawaii", "only in the ocean", "only on continents", "only at plate boundaries"], a: 0 },
            { stem: "The passage states that understanding the behavior of the core helps explain", c: ["only earthquakes", "the generation of the geomagnetic field", "only surface features", "only plate tectonics"], a: 1 },
            { stem: "According to the passage, the geomagnetic field", c: ["has no function", "shields life from harmful solar radiation", "only affects compasses", "is constant and unchanging"], a: 1 },
            { stem: "The passage mentions that NASA's InSight mission", c: ["used marsquakes to detect a liquid outer core similar to Earth's", "only studied Earth", "found no core on Mars", "only studied the Moon"], a: 0 }
        ],
        // Practice Test 5
        [
            // Passage 1: Neural Plasticity and the Adaptive Brain (Questions 1-17)
            { stem: "Which statement best summarizes the main purpose of the passage?", c: ["Brain growth ceases after childhood", "Neural plasticity enables the brain to adapt and change throughout life", "Plasticity only applies to children", "Experience has minimal impact on neural structure"], a: 1 },
            { stem: "Which scientific principle best describes how neural connections strengthen over time?", c: ["Adaptive suppression", "Hebbian learning", "Dopaminergic activation", "Neural inhibition"], a: 1 },
            { stem: "Why are musicians and multilingual individuals mentioned?", c: ["To demonstrate that only children exhibit plasticity", "To show real-world examples of brain adaptability", "To criticize training intensity", "To suggest that skill learning damages neurons"], a: 1 },
            { stem: "What process allows the brain to compensate for damaged areas following a stroke?", c: ["Synaptic pruning", "Functional reorganization", "Neural inhibition", "Myelin degradation"], a: 1 },
            { stem: "What is implied about the adult brain's capacity for change?", c: ["It is completely inflexible", "It can still adapt, though less efficiently", "It only changes through injury", "It depends entirely on external intervention"], a: 1 },
            { stem: "What role does glutamate play in neural communication?", c: ["It blocks neural activity", "It activates receptors that support plasticity", "It destroys dendrites to form new ones", "It eliminates electrical signals"], a: 1 },
            { stem: "Which of the following would most likely inhibit neural plasticity?", c: ["Exercise", "Chronic stress", "Sleep", "Nutritional balance"], a: 1 },
            { stem: "What type of research technology enables scientists to see active brain pathways?", c: ["Diffusion tensor imaging", "X-ray crystallography", "Electrocardiography", "Gene sequencing"], a: 0 },
            { stem: "What does the passage suggest about individuality?", c: ["It is solely genetic", "It emerges from the interplay of genes and experience", "It depends only on intelligence", "It is entirely environmental"], a: 1 },
            { stem: "What is implied by comparing learning to a metabolic process?", c: ["It requires significant energy and coordination", "It is limited to childhood", "It is purely psychological", "It cannot be measured"], a: 0 },
            { stem: "What does the term \"Hebbian learning\" imply about neural coordination?", c: ["Neurons weaken when activated simultaneously", "Neurons strengthen connections through repeated co-activation", "Brain regions lose connections randomly", "Synapses form independently of activity"], a: 1 },
            { stem: "Which statement best characterizes the tone of the passage?", c: ["Pessimistic", "Informative and optimistic", "Argumentative", "Skeptical"], a: 1 },
            { stem: "Which of the following would best support the author's argument about environmental influence?", c: ["A study showing that exercise increases neural growth", "A report linking isolation to improved cognition", "Data showing nutrition harms brain development", "Research proving genetics alone determines plasticity"], a: 0 },
            { stem: "Which developmental stage exhibits the highest neural flexibility?", c: ["Infancy and childhood", "Adolescence", "Adulthood", "Old age"], a: 0 },
            { stem: "What is the author's attitude toward rehabilitation therapy?", c: ["Doubtful", "Encouraging", "Indifferent", "Negative"], a: 1 },
            { stem: "The passage most strongly suggests that brain function is:", c: ["Adaptive and modifiable", "Static and predetermined", "Random and chaotic", "Mechanically fixed"], a: 0 },
            { stem: "What is the relationship between nature and nurture as described by the author?", c: ["They act independently", "They interact to shape neural pathways", "Only nurture determines behavior", "Nature overrides experience"], a: 1 },
            // Passage 2: Atmospheric Chemistry and Climate Dynamics (Questions 18-33)
            { stem: "What is the main focus of atmospheric chemistry as described in the passage?", c: ["The behavior of gases in outer space", "The chemical processes that influence Earth's climate", "The physical structure of ocean currents", "The economic effects of pollution"], a: 1 },
            { stem: "What gases primarily make up Earth's atmosphere?", c: ["Nitrogen and oxygen", "Carbon dioxide and methane", "Hydrogen and helium", "Nitrous oxide and ozone"], a: 0 },
            { stem: "What would Earth's average temperature be without the greenhouse effect?", c: ["–18°C", "15°C", "30°C", "0°C"], a: 0 },
            { stem: "What human activity contributes most to rising CO₂ levels?", c: ["Fossil fuel combustion", "Photosynthesis", "Oceanic gas exchange", "Volcanic eruption"], a: 0 },
            { stem: "Why is methane considered more dangerous than CO₂ per molecule?", c: ["It reflects solar energy", "It traps more heat per molecule", "It dissolves in oceans", "It increases ozone concentration"], a: 1 },
            { stem: "Why does ozone have different effects depending on altitude?", c: ["It absorbs UV radiation in the stratosphere but harms organisms near the ground", "It only reacts with nitrogen gases", "It exists only at high altitudes", "It cannot be measured accurately"], a: 0 },
            { stem: "What was the purpose of the Montreal Protocol?", c: ["To ban volcanic emissions", "To phase out ozone-depleting chemicals", "To regulate methane production", "To promote greenhouse gases"], a: 1 },
            { stem: "How do aerosols complicate the planet's climate system?", c: ["They destroy the ozone layer", "They can both reflect and absorb sunlight", "They only warm the atmosphere", "They cause acid rain exclusively"], a: 1 },
            { stem: "What was the effect of Mount Pinatubo's eruption?", c: ["Increased atmospheric warming", "Temporary global cooling", "Permanent ozone depletion", "Disrupted ocean currents"], a: 1 },
            { stem: "Why are clouds a major uncertainty in climate prediction?", c: ["They can both trap heat and reflect sunlight", "They contain too much CO₂", "They have fixed lifespans", "They form only from industrial aerosols"], a: 0 },
            { stem: "What is the primary cause of ocean acidification?", c: ["CO₂ absorption by seawater", "Decline in marine biodiversity", "Increased rainfall", "Methane oxidation"], a: 0 },
            { stem: "How does ocean warming impact CO₂ absorption?", c: ["It increases absorption capacity", "It decreases absorption capacity", "It creates more carbon sinks", "It stabilizes pH levels"], a: 1 },
            { stem: "What is the significance of albedo in climate feedbacks?", c: ["It measures Earth's reflectivity and affects heat balance", "It measures ocean salinity", "It monitors oxygen cycles", "It determines carbon concentration"], a: 0 },
            { stem: "What technologies are used to study atmospheric composition?", c: ["Seismic detectors", "Satellite remote sensing and spectroscopy", "Groundwater probes", "Biological field surveys"], a: 1 },
            { stem: "What obstacle does the author highlight in global climate response?", c: ["Lack of international cooperation", "Excessive rainfall", "Volcanic unpredictability", "Ocean salinity changes"], a: 0 },
            { stem: "What best summarizes the author's tone toward climate science?", c: ["Analytical and informative", "Dismissive", "Cynical", "Alarmist"], a: 0 },
            // Passage 3: Quantum Optics and the Nature of Light (Questions 34-50)
            { stem: "What is the central focus of quantum optics as described in the passage?", c: ["The study of planetary radiation", "The interaction of light and matter at the quantum scale", "The evolution of gravitational theory", "The history of optical inventions"], a: 1 },
            { stem: "What paradox is revealed by the dual nature of light?", c: ["Light can act as both a wave and a particle", "Light is visible only at night", "Light does not obey physical laws", "Light travels slower in a vacuum"], a: 0 },
            { stem: "Why was the double-slit experiment significant?", c: ["It showed that light behaves like a wave", "It confirmed that light is only a particle", "It disproved Newton's theories", "It revealed that light bends around corners"], a: 0 },
            { stem: "What role did Einstein play in explaining light's behavior?", c: ["He demonstrated interference", "He proposed that light consists of photons", "He disproved the photon theory", "He discovered the wave equation"], a: 1 },
            { stem: "Why are lasers described as coherent light sources?", c: ["Their photons move in the same phase and direction", "They produce random wavelengths", "They scatter easily in all directions", "They lose intensity over distance"], a: 0 },
            { stem: "Which of the following modern technologies rely on lasers?", c: ["Barcode scanners and optical fiber networks", "Hydraulic pumps", "Gas turbines", "Satellite thrusters"], a: 0 },
            { stem: "What does the phrase \"spooky action at a distance\" refer to?", c: ["Quantum entanglement", "Superposition collapse", "Nuclear decay", "Gravitational force"], a: 0 },
            { stem: "How does quantum communication achieve unbreakable security?", c: ["By using classical encryption", "By relying on entangled photon pairs", "By employing sound waves", "By limiting transmission distance"], a: 1 },
            { stem: "What distinguishes qubits from traditional bits?", c: ["Qubits can exist in multiple states simultaneously", "Qubits are permanently fixed as 0 or 1", "Bits operate faster than qubits", "Bits can store more information than qubits"], a: 0 },
            { stem: "Why are photons ideal candidates for quantum computing?", c: ["They interact weakly with the environment", "They require constant cooling", "They can't be manipulated", "They move slowly through circuits"], a: 0 },
            { stem: "What are atomic clocks used for in quantum optics?", c: ["Measuring gravitational pull", "Defining precise time standards", "Generating magnetic fields", "Producing visible spectra"], a: 1 },
            { stem: "What makes quantum sensors uniquely powerful?", c: ["Their ability to detect minuscule physical changes", "Their independence from light", "Their mechanical precision", "Their simplicity"], a: 0 },
            { stem: "How do optical lattices advance quantum research?", c: ["By trapping atoms in grids of light for simulation", "By amplifying electrical current", "By measuring heat flow", "By reducing interference"], a: 0 },
            { stem: "What concept allows information transfer without physical movement of matter?", c: ["Quantum teleportation", "Gravitational oscillation", "Thermal conduction", "Entropy reduction"], a: 0 },
            { stem: "What philosophical implication arises from the observer effect?", c: ["Measurement may influence physical reality", "The universe is entirely deterministic", "Human observation halts quantum behavior", "Science cannot explain consciousness"], a: 0 },
            { stem: "What best summarizes the author's tone toward quantum optics?", c: ["Awe-inspired and informative", "Indifferent", "Cynical", "Disapproving"], a: 0 },
            { stem: "According to the passage, what makes light \"humanity's most illuminating teacher\"?", c: ["It reveals both scientific and philosophical truths", "It produces visible color", "It travels faster than sound", "It enables photosynthesis"], a: 0 }
        ],
        // Practice Test 6
        [
            // Passage 1: Deep Sea Microbiology and the Origins of Life (Questions 1-17)
            { stem: "What distinguishes hydrothermal vent ecosystems from most surface ecosystems described in the passage?", c: ["They rely on chemosynthesis instead of photosynthesis", "They use solar energy indirectly through reflection", "They depend entirely on plant matter from the surface", "They generate energy by absorbing atmospheric oxygen"], a: 0 },
            { stem: "What was the major implication of discovering communities around hydrothermal vents?", c: ["Life requires sunlight to evolve", "Life can exist without photosynthesis", "Only bacteria can live under high pressure", "Deep sea heat prevents molecular reactions"], a: 1 },
            { stem: "Which compound primarily fuels chemosynthetic organisms at vents according to the passage?", c: ["Hydrogen sulfide", "Carbon dioxide", "Sodium chloride", "Ammonia"], a: 0 },
            { stem: "How do hydrothermal vents help scientists study early life on Earth?", c: ["They replicate ancient chemical conditions thought to exist on early Earth", "They provide abundant fossilized microbes", "They generate radioactive isotopes that date rocks", "They eliminate modern biological contaminants from experiments"], a: 0 },
            { stem: "What characteristic allows certain archaea to survive extreme environments at vents?", c: ["Photosynthetic pigments that trap light", "Heat stable enzymes and specialized membranes", "High levels of stored oxygen in vacuoles", "Protective silica shells"], a: 1 },
            { stem: "Which statement best explains the scientific importance of archaea in evolutionary biology?", c: ["They show that life evolved only once on Earth", "They link simple microbes and complex cells in the tree of life", "They are the direct ancestors of all marine algae", "They prove that all cell types share identical genomes"], a: 1 },
            { stem: "The chemical gradients near hydrothermal vents are compared in the passage to which of the following?", c: ["Photosynthetic cells", "Electrochemical batteries", "Radioactive elements", "Fossil structures"], a: 1 },
            { stem: "What makes Enceladus particularly significant to astrobiologists?", c: ["Its plumes suggest a subsurface ocean that could harbor life", "It has a dense nitrogen atmosphere similar to Earth's", "Its surface minerals prevent chemical reactions from occurring", "It emits large quantities of carbon dioxide into space"], a: 0 },
            { stem: "What is the relationship between tube worms and chemosynthetic bacteria at vents?", c: ["Competitive, both feeding on the same resources", "Symbiotic, with each partner benefiting from the other", "Parasitic, with bacteria harming their hosts", "Predatory, with worms consuming the bacteria"], a: 1 },
            { stem: "Why do scientists express concern about deep sea mining near hydrothermal vents?", c: ["It interferes with satellite communication systems", "It risks destroying ancient and unique ecosystems", "It causes coral bleaching in shallow waters", "It significantly increases greenhouse gas levels in the atmosphere"], a: 1 },
            { stem: "What makes vent research directly relevant to planetary science?", c: ["It may reveal how life could exist in subsurface oceans on other worlds", "It allows prediction of solar flare activity on distant stars", "It provides precise measurements of global ocean currents", "It explains the formation of asteroid belts"], a: 0 },
            { stem: "The overall tone of the passage can best be described as:", c: ["Sarcastic and dismissive", "Informative and exploratory", "Pessimistic about life's future", "Emotional and nostalgic"], a: 1 },
            { stem: "Which of the following observations from the passage best supports the idea that life is highly adaptable?", c: ["The discovery of symbiotic vent organisms thriving without sunlight", "The extinction of numerous marine species in shallow waters", "The destruction of coral reefs by warming oceans", "The decline of fisheries due to overharvesting"], a: 0 },
            { stem: "What do extremozymes primarily contribute to modern science and industry?", c: ["They function in molecular biology and industrial processes under harsh conditions", "They rapidly degrade plastic pollutants in the ocean", "They block carbon emissions from fossil fuel plants", "They absorb solar radiation to generate electricity"], a: 0 },
            { stem: "The phrase \"natural laboratories\" in paragraph 2 implies that hydrothermal vents:", c: ["Are artificial environments created by scientists", "Provide conditions ideal for studying life's chemical origins", "Permit experiments only on large marine animals", "Stop natural evolution by freezing genetic change"], a: 1 },
            { stem: "Which hypothesis is reinforced by laboratory simulations that mimic vent conditions?", c: ["Life may have begun in deep sea hydrothermal environments", "Life first emerged on icy moons beyond the solar system", "Early life required continuous exposure to sunlight", "Oxygen was abundant before the first organisms appeared"], a: 0 },
            { stem: "According to the passage, hydrothermal vent research has:", c: ["Become central to evolutionary and astrobiological studies", "Had little impact on mainstream biology", "Been largely disproven by fossil evidence", "Caused scientists to reject microbial life as a subject of study"], a: 0 },
            // Passage 2: Renewable Energy Materials and Photovoltaic Innovation (Questions 18-33)
            { stem: "What is the main limitation of traditional silicon based solar panels highlighted in the passage?", c: ["They cannot operate in cold climates", "They face cost and efficiency constraints", "They absorb only ultraviolet light", "They are chemically unstable in air"], a: 1 },
            { stem: "Why have perovskite materials attracted intense research interest?", c: ["They are naturally abundant in Earth's crust", "They combine strong light absorption with low cost processing", "They have been used safely for centuries", "They require no protective encapsulation"], a: 1 },
            { stem: "Which feature of perovskite solar cells has allowed them to reach high efficiencies so quickly?", c: ["Their reliance on thick, heavy wafers", "Their ability to absorb a broad spectrum with thin films", "Their dependence on expensive crystal growth", "Their use of purely organic components"], a: 1 },
            { stem: "What is the primary challenge associated with many high performance perovskites?", c: ["They cannot absorb visible light", "They are unstable and may degrade under normal conditions", "They are too reflective to harness sunlight", "They require extremely cold temperatures to function"], a: 1 },
            { stem: "Why is the presence of lead in some perovskites a concern?", c: ["Lead reduces the electrical conductivity of the material", "Lead complicates the printing process for flexible panels", "Lead can pose toxicity and environmental risks if released", "Lead prevents perovskites from forming thin films"], a: 2 },
            { stem: "What is the goal of tandem solar cell designs that combine perovskites with silicon?", c: ["To reduce the weight of solar modules at the expense of efficiency", "To capture different parts of the solar spectrum and raise overall efficiency", "To eliminate the need for electrical wiring in solar systems", "To replace silicon entirely with organic polymers"], a: 1 },
            { stem: "Which potential application best illustrates the advantage of flexible, semi transparent perovskite films?", c: ["Underground energy storage facilities", "Windows that generate electricity while remaining see through", "Nuclear reactor shielding panels", "Deep sea exploration vehicles"], a: 1 },
            { stem: "What distinguishes quantum dot solar cells from other photovoltaic technologies?", c: ["Their use of pure silicon wafers", "Their ability to tune light absorption by changing particle size", "Their exclusive reliance on metallic mirrors", "Their dependence on extremely high temperatures"], a: 1 },
            { stem: "According to the passage, what is a key environmental consideration for new photovoltaic materials?", c: ["They must be made only from organic molecules", "They should be evaluated over their entire life cycle", "They should contain as many rare elements as possible", "They must be completely biodegradable within weeks"], a: 1 },
            { stem: "What does the concept of a circular economy imply for solar technology?", c: ["Solar modules should be rotated between countries", "Materials from old panels should be recovered and reused", "All photovoltaic devices should follow a circular shape", "Energy production should occur only in circular grids"], a: 1 },
            { stem: "How does machine learning accelerate photovoltaic materials research?", c: ["By replacing laboratory experiments entirely", "By predicting promising compounds and guiding experiments", "By increasing the cost of computational studies", "By limiting the number of candidate materials considered"], a: 1 },
            { stem: "What geopolitical effect could widespread inexpensive solar technology have, according to the passage?", c: ["It would increase dependence on imported fossil fuels", "It could enable new energy exporting nations and greater energy independence", "It would eliminate the need for international trade agreements", "It would restrict access to electricity in developing regions"], a: 1 },
            { stem: "Which statement best captures the passage's view of solar technology in remote areas?", c: ["It is impractical due to maintenance costs", "It offers a way to provide electricity without conventional grids", "It requires large centralized power plants", "It is less reliable than diesel generators"], a: 1 },
            { stem: "The tone of the passage is best described as:", c: ["Alarmist and speculative", "Technical and optimistic about future potential", "Dismissive of traditional energy sources", "Satirical toward scientific research"], a: 1 },
            { stem: "What can be inferred about the relationship between perovskites and silicon from the passage?", c: ["Perovskites will immediately replace silicon in all applications", "Perovskites are best used alongside silicon in tandem configurations", "Silicon has no remaining value in photovoltaic technology", "Perovskites are suitable only for laboratory demonstrations"], a: 1 },
            { stem: "Overall, the passage suggests that photovoltaic innovation:", c: ["Is purely a scientific curiosity with little real world impact", "Will play a central role in the global transition to sustainable energy", "Has reached its maximum possible efficiency", "Depends entirely on quantum dot technologies"], a: 1 },
            // Passage 3: Exoplanetary Atmospheres and the Search for Biosignatures (Questions 34-50)
            { stem: "What is the primary goal of studying exoplanetary atmospheres as described in the passage?", c: ["To measure the size of distant stars", "To determine whether distant planets could host life", "To calculate the age of the galaxy", "To map the distribution of dark matter"], a: 1 },
            { stem: "How does spectroscopy help scientists identify atmospheric gases on exoplanets?", c: ["By measuring the planet's magnetic field", "By detecting characteristic absorption lines in the starlight", "By recording changes in the planet's orbit", "By observing radio emissions from the surface"], a: 1 },
            { stem: "Why is the simultaneous presence of oxygen and methane in an atmosphere considered significant?", c: ["These gases are only produced in laboratories", "They naturally repel each other and cannot coexist", "They react and would disappear without continuous replenishment", "They block all incoming starlight when combined"], a: 2 },
            { stem: "What role does the James Webb Space Telescope play in atmospheric studies?", c: ["It measures the mass of exoplanets using gravity", "It detects tiny changes in infrared starlight during planetary transits", "It launches probes to distant planets", "It creates artificial atmospheres for testing"], a: 1 },
            { stem: "According to the passage, why is methane alone not a definitive sign of life?", c: ["Methane is too unstable to measure accurately", "Methane can also be produced by non biological processes", "Methane only forms in the presence of oxygen", "Methane cannot exist in rocky planet atmospheres"], a: 1 },
            { stem: "Which example from the passage illustrates the diversity of exoplanetary atmospheres?", c: ["All planets having identical gas compositions", "Hot Jupiters with vaporized metals and hazes", "Planets with no detected elements at all", "Only Earth like planets showing carbon dioxide"], a: 1 },
            { stem: "How has the concept of the habitable zone been revised according to the passage?", c: ["It now excludes planets with thick atmospheres", "It considers internal heat and atmospheric properties in addition to distance", "It applies only to planets orbiting red dwarf stars", "It ignores the possibility of subsurface oceans"], a: 1 },
            { stem: "What is the purpose of combining spectral data with climate and photochemical models?", c: ["To determine the size of the host star", "To reduce the need for direct imaging", "To distinguish biological signals from non biological processes", "To eliminate the need for space telescopes"], a: 2 },
            { stem: "Which of the following best describes a false positive biosignature?", c: ["A signal produced by faulty telescope instruments", "A gas combination created by abiotic chemistry that mimics biology", "A biosignature found on multiple planets", "A signal that is too weak to analyze"], a: 1 },
            { stem: "What is the main advantage of using coronagraphs or starshades in future missions?", c: ["They cool the telescope to very low temperatures", "They block starlight so that faint planetary light can be observed", "They increase the speed of planetary orbits", "They measure gravitational waves from black holes"], a: 1 },
            { stem: "Which of the following would most strongly support the claim that a planet hosts life?", c: ["Detection of high atmospheric pressure", "Spectral evidence of water vapor alone", "Consistent gas combinations best explained by biological activity", "Presence of a large magnetic field"], a: 2 },
            { stem: "The passage implies that discovering extraterrestrial life would:", c: ["Have little impact beyond astronomy", "Confirm that Earth is the only habitable planet", "Reshape multiple scientific and philosophical disciplines", "Prove that human biology is universal"], a: 2 },
            { stem: "The tone of the passage is best described as:", c: ["Skeptical about the value of exoplanet research", "Enthusiastic and cautiously optimistic", "Dismissive of interdisciplinary science", "Pessimistic about finding life elsewhere"], a: 1 },
            { stem: "Which statement best summarizes the passage's view of habitability?", c: ["It depends solely on a planet's distance from its star", "It is determined only by the presence of oxygen", "It arises from a combination of stellar, planetary, and atmospheric factors", "It can be judged from planet size alone"], a: 2 },
            { stem: "Why might a carbon dioxide dominated atmosphere on a rocky planet be of interest to scientists?", c: ["It guarantees the presence of intelligent life", "It resembles conditions thought to exist on early Earth", "It prevents any water from existing on the planet", "It reflects all incoming starlight"], a: 1 },
            { stem: "What can be inferred about planets with subsurface oceans heated by internal processes?", c: ["They are automatically excluded from habitability studies", "They may host liquid water even outside the traditional habitable zone", "They are too dark to be detected by any telescope", "They cannot retain any form of atmosphere"], a: 1 },
            { stem: "According to the passage, one benefit of searching for life on other planets is that it:", c: ["Reduces the need to study Earth's climate", "Helps us better understand and value Earth's own biosphere", "Proves that human activity has little effect on planetary systems", "Eliminates the need for environmental protection efforts"], a: 1 }
        ],
        // Practice Test 7
        [
            // Passage 1: Photosynthetic Adaptations in Extreme Environments (Questions 1-17)
            { stem: "The primary purpose of the passage is to", c: ["argue that photosynthesis is inefficient in most environments", "describe how photosynthesis adapts to a range of extreme conditions", "compare photosynthesis with respiration in higher plants", "explain why photosynthesis is limited to temperate climates"], a: 1 },
            { stem: "According to paragraph 2, polar microalgae primarily cope with low temperatures by", c: ["switching entirely to respiration", "forming dormant spores until spring", "accumulating polyunsaturated fatty acids and using specialized pigments", "replacing chlorophyll with carotenoids"], a: 2 },
            { stem: "The behavior of desert cyanobacteria retreating beneath translucent rocks is best described as", c: ["a method of increasing water uptake", "a behavioral adaptation that filters damaging radiation", "a strategy to enhance nitrogen fixation", "evidence of symbiosis with fungi"], a: 1 },
            { stem: "In paragraph 4, glycerol in Dunaliella salina serves mainly to", c: ["act as a light-absorbing pigment", "function as an enzyme cofactor", "balance osmotic pressure without disrupting enzymes", "store long-term energy reserves"], a: 2 },
            { stem: "The use of C4 and CAM pathways in high-altitude plants primarily helps them", c: ["increase oxygen production", "minimize water loss while maintaining carbon fixation", "survive complete darkness", "tolerate high salinity"], a: 1 },
            { stem: "CAM photosynthesis differs from the standard pathway in that it", c: ["takes up carbon dioxide at night and uses it during the day", "operates only at very high temperatures", "removes the need for chlorophyll", "eliminates the light-dependent reactions"], a: 0 },
            { stem: "Phytoplankton in the oceans are significant because they", c: ["regulate salinity in deep water", "contribute roughly half of global primary productivity", "carry out only chemosynthesis", "exist only in polar regions"], a: 1 },
            { stem: "The description of chemosynthetic bacteria at hydrothermal vents mainly serves to", c: ["argue that photosynthesis is obsolete", "provide an example of energy capture that does not use light", "show that pigments are unnecessary for life", "demonstrate the inefficiency of bacterial metabolism"], a: 1 },
            { stem: "The author's tone throughout the passage is best described as", c: ["skeptical and dismissive", "descriptive and evidence-based", "humorous and informal", "speculative and emotional"], a: 1 },
            { stem: "The phrase \"photosynthesis is not a rigid mechanism but an evolutionary canvas\" (paragraph 10) implies that", c: ["photosynthesis is limited to a single universal pathway", "photosynthesis can be modified in many ways to fit different environments", "photosynthesis is being replaced by respiration", "evolution has largely stopped altering photosynthetic processes"], a: 1 },
            { stem: "Adjusting the ratio of photosystem I to photosystem II allows halophilic algae to", c: ["increase pigment diversity", "optimize electron transport under ionic stress", "reduce their need for nitrogen", "avoid producing oxygen"], a: 1 },
            { stem: "The mention of radiation-tolerant pigments in extremophiles is most relevant to", c: ["improving terrestrial agriculture", "designing new fossil fuels", "guiding the search for life on other planets", "increasing atmospheric oxygen"], a: 2 },
            { stem: "The behavior described in paragraph 3 is labeled \"behavioral adaptation\" because it", c: ["involves a change in genetic structure", "results from enzyme modification", "depends on the organisms' movement to a microhabitat", "is caused solely by random mutation"], a: 2 },
            { stem: "The passage suggests that CAM photosynthesis likely", c: ["evolved independently in multiple plant lineages", "is restricted to polar algae", "arose once and spread via horizontal gene transfer", "depends entirely on chemosynthetic bacteria"], a: 0 },
            { stem: "Phytoplankton are important in the global carbon cycle chiefly because they", c: ["live in deep ocean trenches", "are decomposers of organic matter", "fix carbon dioxide into biomass on a massive scale", "prevent ocean acidification directly"], a: 2 },
            { stem: "The author includes discussion of extraterrestrial pigments in order to", c: ["claim that photosynthesis began in space", "extend the idea of adaptive energy capture beyond Earth", "argue that Earth life is chemically unique", "suggest that extremophiles cannot exist on other planets"], a: 1 },
            { stem: "The structure of the passage is best described as", c: ["listing unrelated facts about different species", "presenting a general concept followed by examples of adaptations in various environments", "narrating the discovery of photosynthesis chronologically", "comparing photosynthesis and respiration experiment by experiment"], a: 1 },
            // Passage 2: The Chemistry of Ocean Acidification (Questions 18-33)
            { stem: "The main focus of the passage is to", c: ["explain the chemical and ecological consequences of ocean acidification", "describe physical ocean circulation", "analyze coral bleaching unrelated to chemistry", "compare freshwater and marine lakes"], a: 0 },
            { stem: "When CO₂ dissolves in seawater, it first forms", c: ["ammonia", "carbonic acid", "sulfuric acid", "nitric acid"], a: 1 },
            { stem: "Reduced carbonate ion concentration primarily affects", c: ["shell- and skeleton-forming organisms", "marine mammals", "phytoplankton photosynthesis only", "ocean salinity"], a: 0 },
            { stem: "Coral calcification rates decline mainly because", c: ["lower pH decreases calcium carbonate saturation", "warmer water eliminates all algae", "nitrogen replaces carbon in coral skeletons", "wave action breaks reefs mechanically"], a: 0 },
            { stem: "According to the passage, polar waters acidify faster because", c: ["they absorb more CO₂ and have lower alkalinity", "they receive more sunlight", "they are less mixed by currents", "they contain no carbonate ions naturally"], a: 0 },
            { stem: "A decline in coccolithophores and foraminifera could", c: ["weaken the biological carbon pump and alter climate feedbacks", "increase fish populations dramatically", "lower atmospheric CO₂ immediately", "eliminate marine snow formation entirely"], a: 0 },
            { stem: "Le Chatelier's principle is used in paragraph 6 to show that", c: ["added CO₂ shifts carbonate equilibria toward more acidic species", "increased pH raises carbonate concentration", "temperature changes have no effect on equilibria", "ionic strength does not matter in seawater"], a: 0 },
            { stem: "The buffering effect created by seagrasses and algae is described as", c: ["localized and temporary", "global and permanent", "harmful to calcifying organisms", "unrelated to photosynthesis"], a: 0 },
            { stem: "The author's attitude toward geoengineering approaches is best described as", c: ["cautious and aware of potential risks", "strongly enthusiastic", "dismissive and uninterested", "certain of their success"], a: 0 },
            { stem: "The anthropogenic activity most directly responsible for ocean acidification is", c: ["combustion of fossil fuels", "deforestation by insects", "fertilizer runoff alone", "overfishing of coral reefs"], a: 0 },
            { stem: "In the context of the passage, a \"saturation threshold\" refers to", c: ["the level below which calcium carbonate structures begin to dissolve", "the maximum volume of ocean water", "the salinity limit for marine plants", "the pH at which photosynthesis stops"], a: 0 },
            { stem: "Regional differences in acidification rates are attributed mainly to", c: ["varying alkalinity and temperature patterns", "identical CO₂ uptake everywhere", "uniform upwelling globally", "deep ocean isolation from the atmosphere"], a: 0 },
            { stem: "Geoengineering proposals described in paragraph 9 are intended to", c: ["neutralize acidity by adding alkaline minerals", "reduce sea surface temperatures", "increase atmospheric CO₂", "fertilize coral reefs with nutrients"], a: 0 },
            { stem: "The economic concerns related to acidification include", c: ["damage to coral reef tourism and shellfish industries", "increased mining revenue", "more efficient shipping routes", "lower fuel costs for fishing vessels"], a: 0 },
            { stem: "Paragraph 10 mainly emphasizes that", c: ["chemistry and marine ecology are tightly interconnected", "oceans can easily recover from any pH change", "acidification occurs only in shallow waters", "atmospheric processes are unrelated to life in the sea"], a: 0 },
            { stem: "The passage's organization can best be described as", c: ["cause and chemical mechanism leading to biological effects and broader implications", "chronological history of CO₂ measurements", "personal narrative about coral diving", "debate between two scientific theories"], a: 0 },
            // Passage 3: The Nature of Time and Relativity (Questions 34-50)
            { stem: "The main purpose of the passage is to", c: ["explain how relativity and other physical theories have reshaped our understanding of time", "argue that time is purely an illusion with no physical basis", "describe the mathematics of quantum field theory in detail", "present historical biographies of physicists who studied time"], a: 0 },
            { stem: "According to special relativity, simultaneity", c: ["is absolute and identical for all observers", "depends on the observer's state of motion", "occurs only at the speed of light", "is unaffected by the speed of light"], a: 1 },
            { stem: "The term \"spacetime\" refers to", c: ["separate three-dimensional space and one-dimensional time", "the unified four-dimensional continuum of space and time", "a purely mathematical trick with no physical meaning", "the region inside a black hole only"], a: 1 },
            { stem: "Time dilation in special relativity means that", c: ["a moving clock runs slower relative to a stationary observer", "clocks in strong gravity run faster", "time passes more quickly in all inertial frames", "the speed of light decreases at high velocities"], a: 0 },
            { stem: "Which example from the passage provides direct experimental evidence for time dilation?", c: ["Formation of galaxies", "Survival of atmospheric muons and behavior of atomic clocks on aircraft", "Measurement of ocean tides", "Changes in planetary orbits"], a: 1 },
            { stem: "In general relativity, gravitational time dilation causes", c: ["clocks in stronger gravitational fields to tick more slowly", "clocks on mountaintops to run slower than at sea level", "the speed of light to vary with height", "mass to decrease as gravity increases"], a: 0 },
            { stem: "The operation of the Global Positioning System shows that relativity", c: ["is irrelevant to everyday life", "must be applied to keep satellite-based timekeeping accurate", "violates Newton's laws completely", "prevents satellites from maintaining stable orbits"], a: 1 },
            { stem: "The description of objects falling toward a black hole's event horizon illustrates that", c: ["time appears to freeze for the infalling object as seen by a distant observer", "time flows faster near the event horizon", "light speeds up when leaving strong gravity", "entropy decreases near black holes"], a: 0 },
            { stem: "The \"arrow of time\" as described in the passage is most closely associated with", c: ["increasing entropy according to the second law of thermodynamics", "changes in the speed of light", "the expansion rate of the universe alone", "the rotation of Earth on its axis"], a: 0 },
            { stem: "Quantum mechanics complicates the arrow of time because its fundamental equations", c: ["forbid any evolution in time", "are time-symmetric, allowing forward and backward evolution mathematically", "require entropy to always decrease", "apply only to macroscopic systems"], a: 1 },
            { stem: "The concept of decoherence is introduced to suggest that", c: ["interactions with the environment may produce irreversible, classical behavior from underlying quantum laws", "the arrow of time is an illusion created by human perception", "quantum mechanics and thermodynamics are identical theories", "black holes cause quantum states to reverse in time"], a: 0 },
            { stem: "The passage implies that the origin of the arrow of time may be linked to", c: ["the low-entropy initial state of the universe at the Big Bang", "changes in Earth's magnetic field", "irregularities in planetary motions", "the formation of black holes in galaxies"], a: 0 },
            { stem: "Ultra-precise optical lattice clocks are important because they", c: ["show that gravitational effects on time can be measured over centimeter height differences", "disprove the existence of gravitational time dilation", "demonstrate that time is unaffected by altitude", "replace all other types of clocks in everyday use"], a: 0 },
            { stem: "The author's tone in discussing relativity and time is best described as", c: ["technical yet broadly explanatory", "sarcastic and dismissive of older theories", "purely speculative with no reference to evidence", "emotional and anecdotal"], a: 0 },
            { stem: "Which of the following best summarizes the relationship between relativity and technology as presented in the passage?", c: ["Relativity has little practical impact on modern devices", "Relativistic corrections are essential for accurate operation of systems like GPS", "Technology has largely replaced the need to test relativity", "Only quantum mechanics, not relativity, influences modern instruments"], a: 1 },
            { stem: "The passage suggests that general relativity becomes inadequate", c: ["at the singularity inside black holes, where classical space and time break down", "for describing planetary orbits in our solar system", "when dealing with motion at everyday speeds", "whenever entropy increases"], a: 0 },
            { stem: "Overall, the passage portrays time as", c: ["a fixed, universal parameter unrelated to physical processes", "a dynamic quantity shaped by motion, gravity, and statistical behavior", "a human illusion with no measurable features", "an unchanging background unaffected by experimental tests"], a: 1 }
        ],
        // Practice Test 8
        [
            // Passage 1: Gene Drives in Wild Populations (Questions 1-17)
            { stem: "The main purpose of the passage is to", c: ["argue that gene drives should be immediately released in the wild", "explain how gene drives work and examine their risks and potential uses", "describe traditional Mendelian inheritance in detail", "show that CRISPR has replaced all other forms of genetic engineering"], a: 1 },
            { stem: "Gene drives differ from normal inheritance primarily because they", c: ["decrease the chance of offspring receiving the engineered allele", "ensure that alleles remain at low frequency", "bias inheritance so that a specific allele is passed on more than fifty percent of the time", "remove alleles from both chromosomes"], a: 2 },
            { stem: "In the CRISPR based gene drive described in paragraph 2, the copying mechanism occurs when", c: ["the organism develops from embryo to adult", "gametes are formed and the wild type allele is cut and repaired using the drive allele", "mature mosquitoes ingest blood meals", "the drive organism encounters environmental stress"], a: 1 },
            { stem: "The proposed malaria control strategy relies on", c: ["eradicating all mosquito species globally", "releasing mosquitoes that carry a drive affecting parasite transmission or reproduction", "vaccinating humans and livestock simultaneously", "introducing predators that consume mosquitoes"], a: 1 },
            { stem: "The passage suggests that one reason gene drives are ecologically concerning is that", c: ["they can be easily turned off after release", "they are limited to a single generation", "their spread is difficult to reverse once in wild populations", "they affect only laboratory bred individuals"], a: 2 },
            { stem: "The phrase \"ripple effects across ecosystems\" in paragraph 4 refers to", c: ["minor changes that are easily measured and controlled", "secondary impacts on other species and ecological processes", "improved biodiversity due to removal of disease vectors", "short term changes that disappear after one season"], a: 1 },
            { stem: "Resistance alleles arise when", c: ["mutations prevent CRISPR from recognizing or cutting the target site", "organisms migrate to new habitats", "populations are kept in closed laboratory conditions", "the gene drive is copied perfectly in every individual"], a: 0 },
            { stem: "The passage presents self limiting gene drives mainly as", c: ["a way to strengthen and accelerate spread", "a conceptual approach to reduce long term persistence and geographic reach", "an economic strategy to lower development costs", "a means of eliminating the need for regulation"], a: 1 },
            { stem: "Daisy chain drives are described as systems in which", c: ["the drive is passed only through maternal lines", "each genetic element drives the next, but the system weakens over generations", "multiple species share the same drive", "the drive operates only in a single generation"], a: 1 },
            { stem: "Governance recommendations mentioned in paragraph 7 emphasize", c: ["immediate release in high burden countries without trials", "avoiding public discussion to prevent confusion", "phased testing and engagement with affected communities", "transferring all authority to private companies"], a: 2 },
            { stem: "Intellectual property issues are relevant because", c: ["patents on CRISPR can influence who can develop and control gene drive technologies", "gene drives cannot be patented", "ownership always prevents ecological harm", "patents automatically guarantee humanitarian use"], a: 0 },
            { stem: "The tension between open science and proprietary control arises from", c: ["disagreement over whether CRISPR functions in mosquitoes", "conflicts between sharing tools widely and managing responsibility, regulation, and liability", "the need to keep all genetic tools secret for security reasons", "a lack of interest from public health organizations"], a: 1 },
            { stem: "The idea of a chemical on off switch for gene drives would", c: ["make drives active only in habitats with specific natural nutrients", "allow human control by requiring a synthetic compound absent from nature", "remove the need for any laboratory testing", "ensure that drives spread globally without interference"], a: 1 },
            { stem: "The passage implies that reversal drives", c: ["are guaranteed to work in all circumstances", "would overwrite the original drive but add complexity and new uncertainties", "are already in wide use in wild populations", "would have no ecological consequences"], a: 1 },
            { stem: "Which of the following best characterizes the author's attitude toward gene drives?", c: ["Unconditional enthusiasm for rapid deployment", "Dismissal of their potential for public health", "Recognition of both their powerful promise and serious risks", "Belief that they are technically infeasible"], a: 2 },
            { stem: "The discussion of international panels and organizations serves mainly to", c: ["show that regulators are blocking all innovation", "illustrate that governance frameworks are being considered alongside technical research", "argue that only scientists should decide on deployment", "suggest that gene drives are already fully regulated"], a: 1 },
            { stem: "Overall, the passage suggests that the future use of gene drives will depend most on", c: ["reducing the cost of laboratory experiments", "eliminating concerns about intellectual property", "both technical success and societal decisions about acceptable risks and responsibilities", "allowing individual researchers to release drives independently"], a: 2 },
            // Passage 2: Solid-State Batteries and Next-Generation Energy Storage (Questions 18-33)
            { stem: "The main focus of the passage is to", c: ["describe how lithium ion batteries are assembled for consumer electronics", "explain solid state battery concepts, advantages, and challenges in comparison to conventional lithium ion cells", "argue that liquid electrolytes will always be superior to solid ones", "discuss only sodium ion battery development"], a: 1 },
            { stem: "In conventional lithium ion batteries, the liquid electrolyte primarily", c: ["conducts electrons between electrodes", "provides ionic conductivity for lithium ions between anode and cathode", "prevents dendrite formation by forming a hard coating", "stores most of the battery's energy"], a: 1 },
            { stem: "Solid electrolytes are expected to improve safety mainly because they", c: ["are completely inert and cannot fail", "replace flammable liquid solvents and are more resistant to dendrite penetration", "eliminate the need for separators and packaging", "lower the voltage of the cell"], a: 1 },
            { stem: "A significant drawback of oxide based solid electrolytes mentioned in the passage is that they", c: ["have extremely low ionic conductivity", "are brittle and difficult to process into thin, defect free layers", "dissolve readily in water", "react violently with lithium metal at all temperatures"], a: 1 },
            { stem: "Sulfide electrolytes are attractive partly because they", c: ["have very low ionic conductivity", "are easy to sinter at high temperatures", "can exhibit ionic conductivity comparable to liquid electrolytes and can be densified at modest pressures", "require no protection from moisture"], a: 2 },
            { stem: "The primary motivation for pairing solid electrolytes with lithium metal anodes is to", c: ["reduce the need for cathode materials", "lower manufacturing temperature", "take advantage of the higher specific capacity of lithium metal compared with graphite", "avoid the use of any current collectors"], a: 2 },
            { stem: "Interface problems between lithium metal and solid electrolytes can lead to", c: ["improved ionic conductivity over time", "formation of resistive layers and mechanical cracking", "complete elimination of side reactions", "increased flexibility of the cell"], a: 1 },
            { stem: "According to the passage, solid state cathodes face difficulties because", c: ["liquid electrolytes cannot wet them properly", "volume changes during cycling can break contact between solid particles and solid electrolyte", "they contain no active material", "they require no conductive additives"], a: 1 },
            { stem: "Composite cathodes are designed in part to", c: ["replace all solid electrolytes with plastic films", "maintain continuous pathways for ions and electrons despite mechanical deformation", "eliminate the need for binders and additives", "prevent lithium insertion entirely"], a: 1 },
            { stem: "Manufacturing solid state cells at industrial scale is challenging because", c: ["ceramic layers are self healing and unpredictable", "high temperature sintering and tight defect control are difficult and expensive", "the process requires no quality control", "only polymers can be used"], a: 1 },
            { stem: "The passage suggests that many current solid state prototypes", c: ["already match automotive packs in size and reliability", "prove that scale up is trivial", "show promising performance in small cells under controlled conditions, but may not translate directly to large scale devices", "have been widely deployed on the electrical grid"], a: 2 },
            { stem: "The statement that safety is not guaranteed merely by removing liquid electrolytes implies that", c: ["all solid state batteries will fail catastrophically", "other failure modes such as mechanical fracture and internal shorts must still be managed", "liquid electrolytes are actually safer", "safety testing is unnecessary"], a: 1 },
            { stem: "The discussion of alternative chemistries like sodium ion and lithium sulfur primarily serves to", c: ["show that solid state batteries are the only future technology", "emphasize that multiple battery approaches are being explored, not just solid state lithium ion", "argue that lithium ion batteries are obsolete", "suggest that solid electrolytes cannot work with any other chemistry"], a: 1 },
            { stem: "The tone of the passage toward solid state batteries is best described as", c: ["uncritically enthusiastic", "dismissive and pessimistic", "balanced, acknowledging both potential and significant challenges", "indifferent"], a: 2 },
            { stem: "The phrase \"complex trade offs inherent in energy technology\" in paragraph 10 refers to the idea that", c: ["every improvement in one performance metric may cause difficulties in other aspects such as cost or durability", "energy technologies never improve", "policy decisions have no impact on engineering outcomes", "consumers cannot evaluate battery performance"], a: 0 },
            { stem: "According to the passage, solid state batteries are most likely to succeed if", c: ["they can be produced cheaply while meeting performance and safety needs", "they reduce energy density to increase safety", "they are limited to laboratory prototypes", "they completely ignore manufacturing constraints"], a: 0 },
            // Passage 3: Detecting Exoplanets (Questions 34-50)
            { stem: "The primary purpose of the passage is to", c: ["argue that only one exoplanet detection method is scientifically valid", "compare several exoplanet detection techniques and show how their biases shape our view of planetary systems", "describe the internal structure of exoplanets in detail", "prove that Earth like planets are extremely rare"], a: 1 },
            { stem: "The transit method detects planets by", c: ["measuring changes in a star's radial velocity caused by gravitational tugs", "observing periodic dips in starlight when a planet passes in front of its star", "imaging planets directly in reflected light", "tracking thermal emission from planetary atmospheres"], a: 1 },
            { stem: "According to the passage, transit surveys are biased toward", c: ["planets with very long orbital periods", "planets orbiting behind their stars", "large, close in planets whose orbits are aligned with our line of sight", "planets orbiting multiple stars"], a: 2 },
            { stem: "The radial velocity technique reveals a planet's presence by", c: ["detecting variations in the color of the star's spectrum as it moves toward and away from Earth", "measuring drops in brightness during eclipses", "observing flares on the stellar surface", "mapping the planet's reflected light"], a: 0 },
            { stem: "When both radius and mass of a planet are known, astronomers can", c: ["determine the planet's age precisely", "calculate its bulk density, which suggests likely composition", "measure its magnetic field strength", "infer the exact atmospheric composition without spectroscopy"], a: 1 },
            { stem: "Direct imaging is most successful for planets that are", c: ["small, cool, and close to their stars", "young, massive, and widely separated from their stars", "part of multi planet systems that transit", "orbiting white dwarf stars only"], a: 1 },
            { stem: "Coronagraphs and starshades are employed in direct imaging primarily to", c: ["increase the star's brightness", "block or reduce starlight so that faint planets can be seen", "measure the planet's mass", "detect microlensing events"], a: 1 },
            { stem: "Gravitational microlensing is particularly useful for detecting", c: ["planets in the habitable zone of nearby stars only", "free floating planets and planets at intermediate orbital distances that are hard to find by other methods", "only hot Jupiters", "planets around pulsars"], a: 1 },
            { stem: "A disadvantage of microlensing noted in the passage is that", c: ["it cannot detect any planets in our galaxy", "events are rare, unpredictable, and usually not repeatable for the same system", "it requires transits to occur", "it only works in the infrared"], a: 1 },
            { stem: "The passage indicates that selection effects", c: ["are negligible and can be ignored in population studies", "mean that each method tends to find certain kinds of planets more easily than others", "guarantee that we have a complete census of exoplanets", "apply only to direct imaging, not to transit surveys"], a: 1 },
            { stem: "To correct for detection biases when estimating planet populations, astronomers must", c: ["observe only one type of star", "ignore all non transiting planets", "model the sensitivities and limitations of each survey", "restrict themselves to ground based telescopes"], a: 2 },
            { stem: "The goal of identifying potentially habitable planets involves", c: ["finding only gas giants", "detecting planets of any size regardless of orbit", "locating Earth sized planets in suitable orbits and studying their atmospheres", "ignoring atmospheric composition"], a: 2 },
            { stem: "Transit spectroscopy aims to", c: ["measure changes in stellar mass", "use starlight that passes through a planet's atmosphere during transit to infer atmospheric molecules", "image planetary surfaces directly", "detect microlensing events in distant galaxies"], a: 1 },
            { stem: "The passage suggests that interpreting atmospheric biosignatures is difficult because", c: ["telescope instruments cannot detect any molecules reliably", "planets have no atmospheres", "non biological processes can produce similar spectral features to those associated with life", "all atmospheres are identical"], a: 2 },
            { stem: "The tone of the passage toward exoplanet detection methods is best described as", c: ["descriptive and analytical, emphasizing capabilities and limitations", "dismissive of current techniques", "purely speculative with no reference to data", "promotional for a single preferred mission"], a: 0 },
            { stem: "By stating that detection methods act as filters, the author means that they", c: ["distort all data so severely that no scientific conclusions are possible", "determine which types of planets we are most likely to detect and study", "eliminate all small planets from samples", "make every planetary system appear identical"], a: 1 },
            { stem: "The passage as a whole implies that future understanding of exoplanets will improve most by", c: ["abandoning indirect methods in favor of direct imaging only", "combining multiple detection techniques and more advanced instruments to build a more complete and less biased picture", "focusing solely on microlensing events", "restricting surveys to planets identical to Earth"], a: 1 }
        ],
        // Practice Test 9
        [
            // Passage 1: RNA Interference and Gene Regulation (Questions 1-17)
            { stem: "The primary purpose of the passage is to", c: ["argue that transcription factors are unimportant in gene regulation", "describe RNA interference as a mechanism of gene regulation and its biological and therapeutic implications", "prove that RNA is more important than DNA in heredity", "claim that RNA interference has replaced all other regulatory pathways"], a: 1 },
            { stem: "RNA interference primarily acts at which level of gene expression", c: ["DNA replication", "transcription initiation", "post transcriptional regulation of messenger RNA", "protein folding"], a: 2 },
            { stem: "Small interfering RNAs guide the silencing complex to target transcripts by", c: ["forming covalent bonds with proteins", "matching complementary sequences in messenger RNAs", "binding directly to DNA promoters", "altering ribosome structure"], a: 1 },
            { stem: "MicroRNAs differ from experimentally introduced small interfering RNAs mainly because they", c: ["are always longer than one thousand nucleotides", "are encoded in the genome and often bind imperfectly to multiple targets", "function only in plants", "do not associate with the RNA induced silencing complex"], a: 1 },
            { stem: "A major natural role of RNA interference described in the passage is", c: ["synthesizing new DNA", "protecting against viruses and transposable elements", "increasing mutation rates", "enhancing protein folding"], a: 1 },
            { stem: "Using RNA interference as an experimental tool allows researchers to", c: ["permanently remove genes from the genome", "silence specific genes transiently without changing DNA sequence", "alter chromosome number", "measure transcription factor binding directly"], a: 1 },
            { stem: "One major challenge for therapeutic use of small RNAs in humans is that", c: ["RNA cannot be synthesized chemically", "small RNAs are unstable in the bloodstream and poorly taken up by cells", "human cells lack RNA interference machinery", "targets can only be viral genes"], a: 1 },
            { stem: "Strategies to improve delivery of RNA interference therapeutics include", c: ["avoiding any chemical modification", "using only oral administration", "chemically modifying RNAs and packaging them in nanoparticles or conjugates", "eliminating all targeting molecules"], a: 2 },
            { stem: "Off target effects arise when", c: ["small RNAs degrade themselves", "small RNAs bind partially to unintended transcripts and alter their expression", "RNA induced silencing complex fails to form", "transcription factors are overexpressed"], a: 1 },
            { stem: "The passage suggests that RNA interference based crops", c: ["are universally accepted as completely safe", "express foreign proteins at high levels", "regulate traits through RNA level silencing and may have different perceived risks than traditional transgenic plants", "cannot affect pigment or nutrient content"], a: 2 },
            { stem: "A potential ecological concern with RNA interference engineered plants is that", c: ["they cannot grow outside the laboratory", "non target organisms might be affected by ingested small RNAs", "they always kill pollinators", "they do not undergo photosynthesis"], a: 1 },
            { stem: "The role of microRNAs in cancer illustrates that they", c: ["act only as oncogenes", "can function as oncogenes or tumor suppressors depending on context", "are irrelevant to human disease", "are expressed only in embryonic tissues"], a: 1 },
            { stem: "Therapeutic approaches involving microRNAs include", c: ["inhibiting overactive microRNAs or replacing deficient ones", "increasing all microRNA levels indiscriminately", "deleting microRNA genes from the genome", "preventing RNA processing entirely"], a: 0 },
            { stem: "The statement that RNA is \"not simply a transient messenger\" implies that", c: ["RNA is more stable than DNA in all cells", "RNA molecules can actively regulate gene expression rather than just carry information", "messenger RNA is never translated", "proteins do not depend on RNA"], a: 1 },
            { stem: "The tone of the passage is best described as", c: ["explanatory, highlighting both mechanisms and applications", "sarcastic, mocking traditional genetics", "speculative, with little reference to evidence", "autobiographical"], a: 0 },
            { stem: "The passage indicates that the functional genomics value of RNA interference lies mainly in", c: ["its ability to change DNA sequences rapidly", "enabling systematic knockdown screens to infer gene function", "increasing mutation rates in model organisms", "blocking all transcription"], a: 1 },
            { stem: "Overall, the passage emphasizes that RNA interference", c: ["replaces transcriptional regulation entirely", "adds an additional flexible layer of gene control that can be exploited experimentally and therapeutically", "functions only in plants and worms", "is too nonspecific to be useful"], a: 1 },
            // Passage 2: Fuel Cells and the Hydrogen Energy System (Questions 18-33)
            { stem: "The main focus of the passage is to", c: ["describe only the chemistry of combustion engines", "explain how fuel cells operate, their advantages, and the challenges of integrating hydrogen into energy systems", "argue that batteries are always superior to fuel cells", "present a history of platinum mining"], a: 1 },
            { stem: "In a proton exchange membrane fuel cell, hydrogen is first", c: ["burned in a flame to generate heat", "split into protons and electrons at the anode", "dissolved directly in the membrane", "combined with nitrogen to form ammonia"], a: 1 },
            { stem: "The role of the polymer membrane is to", c: ["conduct electrons while blocking protons", "allow gases to mix freely", "conduct protons while preventing electron and gas crossover", "store hydrogen for later use"], a: 2 },
            { stem: "Platinum is used in fuel cell electrodes primarily because it", c: ["is inexpensive and inert", "acts as a catalyst for hydrogen oxidation and oxygen reduction", "conducts protons across the membrane", "stores electricity like a battery"], a: 1 },
            { stem: "A challenge associated with platinum catalysts is that they", c: ["are completely resistant to all impurities", "are abundant but have low activity", "are expensive and can be poisoned by species such as carbon monoxide", "cannot be deposited on supports"], a: 2 },
            { stem: "Membrane hydration is critical because", c: ["dry membranes conduct protons poorly, whereas excessive water can flood gas diffusion layers", "water has no effect on proton conduction", "only dry membranes form water", "membranes dissolve when hydrated"], a: 0 },
            { stem: "The passage indicates that most current hydrogen production", c: ["comes from electrolysis using renewable energy", "emits no carbon dioxide", "is derived from natural gas via steam reforming, often producing carbon dioxide", "occurs naturally in underground reservoirs"], a: 2 },
            { stem: "Hydrogen produced by renewable powered electrolysis", c: ["avoids direct emissions but requires significant investment and infrastructure", "always costs less than natural gas", "cannot be used in fuel cells", "eliminates the need for storage tanks"], a: 0 },
            { stem: "One advantage of solid oxide fuel cells compared with proton exchange membrane fuel cells is that solid oxide devices", c: ["operate at low temperature and start up instantly", "can use hydrocarbons or ammonia directly at high efficiency", "require no catalysts", "do not produce heat"], a: 1 },
            { stem: "The passage suggests that a major barrier to adoption of fuel cell vehicles is", c: ["lack of interest from manufacturers", "absence of any safety standards", "limited hydrogen refueling infrastructure and associated investment requirements", "inability of hydrogen tanks to withstand crashes"], a: 2 },
            { stem: "When comparing fuel cell vehicles with battery electric vehicles, the passage emphasizes that", c: ["fuel cells always have higher round trip efficiency", "batteries charge instantly", "fuel cells can refuel quickly but involve additional energy losses in hydrogen production and distribution", "both technologies rely on identical supply chains"], a: 2 },
            { stem: "Stationary fuel cell systems are used in places like data centers primarily because", c: ["they have high noise levels", "they provide quiet, low emission power and can enhance reliability", "they require no fuel", "they are cheaper than all other power sources in every region"], a: 1 },
            { stem: "The tone of the passage toward fuel cells and hydrogen is", c: ["uncritical enthusiasm, claiming they are a complete solution", "dismissive and negative", "balanced, acknowledging both potential benefits and significant challenges", "indifferent"], a: 2 },
            { stem: "The phrase \"chicken and egg problem\" in paragraph 7 refers to", c: ["the difficulty of producing hydrogen without electricity", "the mutual dependence between infrastructure deployment and consumer adoption", "the relationship between platinum mining and catalyst cost", "the need for both anode and cathode in a cell"], a: 1 },
            { stem: "According to the passage, the environmental value of hydrogen fuel cell systems depends mainly on", c: ["how hydrogen is produced and integrated into broader energy systems", "the color of hydrogen storage tanks", "using only imported hydrogen", "operating fuel cells at the lowest possible temperature"], a: 0 },
            { stem: "Overall, the passage suggests that fuel cells will be most useful if they", c: ["entirely replace batteries and combustion engines", "are implemented as part of a broader portfolio of decarbonization technologies, with attention to costs and emissions across the value chain", "are deployed without considering hydrogen sources", "rely exclusively on natural gas derived hydrogen"], a: 1 },
            // Passage 3: Superconductivity and Its Applications (Questions 34-50)
            { stem: "The main purpose of the passage is to", c: ["argue that superconductivity has no practical uses", "explain the basic physics of superconductivity and survey key applications and challenges", "describe only magnetic resonance imaging scanners", "present a biography of the discoverers of superconductivity"], a: 1 },
            { stem: "A defining property of a superconductor below its critical temperature is that it", c: ["has very low but nonzero resistance", "exhibits exactly zero electrical resistance", "can no longer carry current", "stops interacting with magnetic fields"], a: 1 },
            { stem: "According to the Bardeen Cooper Schrieffer theory, superconductivity arises when", c: ["electrons move independently at high temperature", "Cooper pairs of electrons form and condense into a coherent quantum state", "phonons are eliminated from the lattice", "magnetic fields align electron spins"], a: 1 },
            { stem: "The energy gap mentioned in the passage is important because it", c: ["increases scattering and resistance", "prevents electrons from pairing", "makes it energetically costly to break Cooper pairs, suppressing scattering", "eliminates the need for cooling"], a: 2 },
            { stem: "The Meissner effect refers to", c: ["the ability of a superconductor to trap pre existing magnetic fields", "expulsion of magnetic fields from the interior of a material when it becomes superconducting", "generation of magnetic fields by electrons", "destruction of superconductivity in a magnetic field"], a: 1 },
            { stem: "Magnetic levitation over a superconducting slab occurs primarily because", c: ["the superconductor amplifies the magnetic field", "the magnet becomes superconducting", "the Meissner effect causes repulsive forces between the superconductor and the magnet", "gravity is canceled"], a: 2 },
            { stem: "Superconducting magnets are especially useful in devices like MRI scanners because they", c: ["require no cooling", "generate strong magnetic fields without resistive heating losses", "operate at room temperature", "can reverse magnetization instantly"], a: 1 },
            { stem: "High temperature superconductors are distinguished from conventional ones mainly by", c: ["becoming superconducting at temperatures accessible with liquid nitrogen rather than only liquid helium", "having no need for electrons", "being composed solely of metals", "lacking an energy gap"], a: 0 },
            { stem: "A difficulty associated with high temperature superconducting materials is that they", c: ["are ductile and easy to form into wires", "are brittle and structurally complex, complicating fabrication", "have no magnetic response", "work only under very high pressure"], a: 1 },
            { stem: "Superconducting power cables are attractive because they", c: ["increase resistive losses", "allow large currents to be transmitted with negligible electrical resistance in compact structures", "cannot carry more current than copper cables", "do not require any cryogenic cooling"], a: 1 },
            { stem: "Fault current limiters based on superconductors function by", c: ["remaining superconducting regardless of current", "switching to a resistive state when currents exceed critical values, thereby limiting surges", "shorting out the grid", "increasing current flow during faults"], a: 1 },
            { stem: "In quantum computing, superconducting circuits are valuable because they", c: ["operate only at room temperature", "provide classical bits that never change", "form quantum bits using Josephson junctions and can be manipulated by microwaves", "eliminate the need for error correction"], a: 2 },
            { stem: "The passage implies that scaling superconducting quantum processors is challenging mainly due to", c: ["lack of available microwaves", "the difficulty of maintaining coherence while increasing the number of interconnected qubits", "the impossibility of cooling circuits", "absence of fabrication methods"], a: 1 },
            { stem: "Reports of room temperature superconductivity are treated as", c: ["established facts with no controversy", "impossible under any circumstances", "promising but requiring careful verification and often involving extreme pressures", "irrelevant to future technology"], a: 2 },
            { stem: "The tone of the passage regarding the future of superconductivity is best described as", c: ["optimistic but cautious, recognizing both potential and unresolved problems", "dismissive of further research", "certain that room temperature superconductors already exist", "focused only on historical achievements"], a: 0 },
            { stem: "The phrase \"every application must contend with the demands of cooling, fabrication, and stability\" suggests that", c: ["practical use of superconductors is limited by engineering and materials challenges", "cooling is optional for most devices", "fabrication is trivial for all superconductors", "stability is guaranteed once superconductivity appears"], a: 0 },
            { stem: "Overall, the passage emphasizes that superconductivity", c: ["is purely a theoretical curiosity with no real applications", "is a macroscopic quantum phenomenon with significant technological potential, constrained by material and engineering realities", "eliminates all losses in every device without conditions", "is fully understood and requires no further research"], a: 1 }
        ],
    ],
    "Physics": [
        // Practice Test 1
        [
            { stem: "A sprinter, already moving at 6 m/s, accelerates at a constant rate of 2 m/sÂ². What distance does she cover while accelerating to a final velocity of 10 m/s?", c: ["8 m", "16 m", "32 m", "64 m"], a: 1 },
            { stem: "A construction worker drops a wrench from the top of a building. It takes 4 seconds to hit the ground. Ignoring air resistance, what is the height of the building? (Use g = 10 m/sÂ²)", c: ["20 m", "40 m", "80 m", "160 m"], a: 2 },
            { stem: "A cannonball is fired at 60Â° above the horizontal with an initial speed of 100 m/s. What is the horizontal distance it travels in the first 2 seconds?", c: ["50 m", "86.6 m", "100 m", "200 m"], a: 2 },
            { stem: "A 10 kg sled rests on a snowy horizontal surface with a coefficient of static friction of 0.15. What is the maximum horizontal force that can be applied to the sled before it starts to move? (Use g = 10 m/sÂ²)", c: ["1.5 N", "10 N", "15 N", "100 N"], a: 2 },
            { stem: "A 4 kg block rests on a frictionless horizontal surface. It is connected by a string to a 1 kg block hanging over a massless pulley. What is the acceleration of the system? (Use g = 10 m/sÂ²)", c: ["1 m/sÂ²", "2 m/sÂ²", "2.5 m/sÂ²", "4 m/sÂ²"], a: 1 },
            { stem: "An 80 kg man stands on a scale inside an elevator. The elevator accelerates downward at 1.5 m/sÂ². What does the scale read? (Use g = 10 m/sÂ²)", c: ["120 N", "680 N", "800 N", "920 N"], a: 1 },
            { stem: "A 2 kg flowerpot falls from a windowsill 10 m above the ground. Ignoring air resistance, what is its kinetic energy just before it hits the ground? (Use g = 10 m/sÂ²)", c: ["20 J", "100 J", "200 J", "2000 J"], a: 2 },
            { stem: "A 3 kg cart moving right at 5 m/s collides with a 2 kg cart moving left at 2 m/s. They stick together in a perfectly inelastic collision. What is their final velocity?", c: ["2.2 m/s to the right", "2.2 m/s to the left", "3.8 m/s to the right", "3.8 m/s to the left"], a: 0 },
            { stem: "A 4 kg bowling ball has a linear momentum of 20 kgÂ·m/s. What is its kinetic energy?", c: ["5 J", "25 J", "50 J", "100 J"], a: 2 },
            { stem: "A 0.5 kg stone is tied to a 2 m string and swung in a horizontal circle at a constant speed of 6 m/s. What is the centripetal acceleration of the stone?", c: ["3 m/sÂ²", "12 m/sÂ²", "18 m/sÂ²", "36 m/sÂ²"], a: 2 },
            { stem: "A diver pulls into a tuck position after jumping from the diving board. Which of the following correctly describes the change in their moment of inertia and angular velocity?", c: ["Moment of inertia increases, angular velocity decreases.", "Moment of inertia decreases, angular velocity increases.", "Moment of inertia increases, angular velocity increases.", "Moment of inertia decreases, angular velocity decreases."], a: 1 },
            { stem: "Two planets exert a gravitational force F on each other. If the mass of *one* planet is doubled and the distance between them is also doubled, what is the new gravitational force?", c: ["F/4", "F/2", "F", "2F"], a: 1 },
            { stem: "To balance a seesaw, a 50 kg child sits 3 m from the fulcrum. How far from the fulcrum on the opposite side must a 30 kg child sit?", c: ["1.8 m", "2.5 m", "3.0 m", "5.0 m"], a: 3 },
            { stem: "A mechanic needs to apply 50 NÂ·m of torque to a bolt using a 0.4 m wrench. If the mechanic applies the force at an angle of 30Â° to the wrench handle, how much force must be applied?", c: ["100 N", "125 N", "200 N", "250 N"], a: 3 },
            { stem: "A 5 kg object is suspended from a spring scale. In air, the scale reads 50 N. When the object is fully submerged in water, the scale reads 30 N. What is the volume of the object? (Use Ï_water = 1000 kg/mÂ³ and g = 10 m/sÂ²)", c: ["1 x 10â»Â³ mÂ³", "2 x 10â»Â³ mÂ³", "3 x 10â»Â³ mÂ³", "5 x 10â»Â³ mÂ³"], a: 1 },
            { stem: "A block of wood has a density of 0.6 g/cmÂ³ and a total volume of 50 cmÂ³. If it is placed in water (density 1.0 g/cmÂ³), what volume of the block will be submerged?", c: ["6 cmÂ³", "20 cmÂ³", "30 cmÂ³", "50 cmÂ³"], a: 2 },
            { stem: "What is the absolute pressure experienced by a submarine at a depth of 100 m in seawater? (Use Ï_seawater â‰ˆ 1025 kg/mÂ³, P_atm â‰ˆ 101,000 Pa, and g = 10 m/sÂ²)", c: ["101 kPa", "1025 kPa", "1130 kPa", "10250 kPa"], a: 2 },
            { stem: "How much heat energy is required to raise the temperature of 500 g of water from 20Â°C to 50Â°C? (Specific heat of water is 4.18 J/gÂ°C)", c: ["4.18 kJ", "20.9 kJ", "62.7 kJ", "125.4 kJ"], a: 2 },
            { stem: "A gas in a piston expands and does 100 J of work on its surroundings. During this process, it absorbs 400 J of heat. What is the change in the internal energy of the gas?", c: ["-500 J", "-300 J", "300 J", "500 J"], a: 2 },
            { stem: "A 2.0 m long steel beam has a coefficient of linear expansion of 1.2 x 10â»âµ /Â°C. If the temperature increases by 50Â°C, what is the increase in the beam's length?", c: ["0.6 mm", "1.2 mm", "2.4 mm", "6.0 mm"], a: 1 },
            { stem: "What is the resistance of a 100 m long copper wire with a resistivity of 1.7 x 10â»â¸ Î©Â·m and a cross-sectional area of 2.0 x 10â»â¶ mÂ²?", c: ["0.43 Î©", "0.85 Î©", "1.7 Î©", "3.4 Î©"], a: 1 },
            { stem: "Three resistors (5 Î©, 10 Î©, and 15 Î©) are connected in series to a 60 V battery. What is the voltage drop across the 10 Î© resistor?", c: ["10 V", "15 V", "20 V", "30 V"], a: 2 },
            { stem: "Two resistors (20 Î© and 30 Î©) are connected in parallel to a 60 V power source. What is the total current delivered by the source?", c: ["1.0 A", "2.0 A", "3.0 A", "5.0 A"], a: 3 },
            { stem: "A +5.0 Î¼C charge and a -10.0 Î¼C charge are separated by 0.5 m. What is the magnitude and direction of the electrostatic force between them? (Use k = 9 x 10â¹ NÂ·mÂ²/CÂ²)", c: ["1.8 N, attractive", "1.8 N, repulsive", "0.9 N, attractive", "0.9 N, repulsive"], a: 0 },
            { stem: "Point X is 3 m from a positive point charge. Point Y is 1 m from the same charge. What is the ratio of the electric field magnitude at Point Y to that at Point X (E_Y / E_X)?", c: ["1:3", "3:1", "1:9", "9:1"], a: 3 },
            { stem: "An electric field does 40 J of work to move a +4 C charge from Point A to Point B. What is the potential difference, V_B - V_A?", c: ["-10 V", "+10 V", "-160 V", "+160 V"], a: 0 },
            { stem: "A beam of light travels from water (n=1.33) into the air (n=1.00). Which of the following describes what happens to its speed and frequency?", c: ["Speed increases, frequency increases.", "Speed increases, frequency stays the same.", "Speed decreases, frequency decreases.", "Speed decreases, frequency stays the same."], a: 1 },
            { stem: "An object is placed 25 cm in front of a converging lens, and a real image is formed 50 cm behind the lens. What is the power of this lens in diopters?", c: ["+2.0 D", "+3.0 D", "+4.0 D", "+6.0 D"], a: 3 },
            { stem: "An object is placed 30 cm from a mirror. A real, inverted image is formed with a magnification of -0.5. What is the focal length of the mirror?", c: ["-20 cm", "-10 cm", "+10 cm", "+20 cm"], a: 2 },
            { stem: "Two tuning forks are sounded simultaneously. Which pair of frequencies will produce a beat frequency of 5 Hz?", c: ["250 Hz and 252 Hz", "500 Hz and 510 Hz", "100 Hz and 105 Hz", "5 Hz and 15 Hz"], a: 2 },
            { stem: "A sound wave in air has a frequency of 500 Hz and a speed of 343 m/s. What is its wavelength?", c: ["0.686 m", "1.46 m", "157 m", "171,500 m"], a: 0 },
            { stem: "A 0.5 m long guitar string is fixed at both ends. It vibrates at its fundamental frequency (n=1) with a wave speed of 400 m/s. What is this fundamental frequency?", c: ["100 Hz", "200 Hz", "400 Hz", "800 Hz"], a: 2 },
            { stem: "A 2.0 kg mass is attached to a vertical spring, causing it to stretch 0.10 m from its equilibrium position. What is the spring constant? (Use g = 10 m/sÂ²)", c: ["2 N/m", "20 N/m", "200 N/m", "2000 N/m"], a: 2 },
            { stem: "A mass-spring system oscillates in simple harmonic motion. If the mass is quadrupled, by what factor does the period of oscillation change?", c: ["It is halved.", "It remains the same.", "It is doubled.", "It is quadrupled."], a: 2 },
            { stem: "A simple pendulum has its length decreased by a factor of 9. By what factor does its oscillation frequency change?", c: ["Decreases by a factor of 3", "Increases by a factor of 3", "Decreases by a factor of 9", "Increases by a factor of 9"], a: 1 },
            { stem: "Which of the following is NOT a valid unit for energy?", c: ["Joule (J)", "Newton-meter (NÂ·m)", "kgÂ·mÂ²/sÂ²", "kgÂ·m/s"], a: 3 },
            { stem: "The unit 'Watt-second' (WÂ·s) is a unit of which physical quantity?", c: ["Charge", "Power", "Energy", "Force"], a: 2 },
            { stem: "A hiker walks 6 km east and then 8 km north. What is the magnitude of the hiker's total displacement?", c: ["2 km", "7 km", "10 km", "14 km"], a: 2 },
            { stem: "A runner completes one full lap around a 400 m circular track. What is the magnitude of the runner's total displacement?", c: ["0 m", "200 m", "400 m", "800 m"], a: 0 },
            { stem: "A sample of Technetium-99m has a half-life of 6 hours. If a hospital starts with a 120 mg sample, how much will remain after 24 hours?", c: ["7.5 mg", "15 mg", "20 mg", "30 mg"], a: 0 }
        ],
        // Practice Test 6
        [
            { stem: "To get to his friend Alex's house, Ben walks 0.8 km south, turns left onto Alex's street and walks 0.6 km east. What is the magnitude of his total displacement?", c: ["1.4 km", "1.2 km", "1.0 km", "0.6 km"], a: 2 },
            { stem: "Coulomb's Law is given by the formula F = k * (q1 * q2) / r². What are the units of Coulomb's constant, k?", c: ["N/C", "N·C²/m²", "N·m/C", "N·m²/C²"], a: 3 },
            { stem: "Which of the following distinguishes a vector from a scalar?", c: ["Units", "Magnitude", "Direction", "Sign"], a: 2 },
            { stem: "A plane is cruising north at a velocity of 100 m/s with a westward wind blowing at 20 m/s. What is the magnitude of the velocity of the plane relative to the ground?", c: ["120 m/s", "80 m/s", "100 m/s", "102 m/s"], a: 3 },
            { stem: "Chris runs twice around a 400m running track. On his third time around he gets a cramp on the final straight and stops 17m from the starting point. What was the magnitude of Chris's total displacement?", c: ["383 m", "1183 m", "417 m", "17 m"], a: 3 },
            { stem: "Which of the following situations is not possible?", c: ["An object has zero velocity and non-zero acceleration", "An object has negative velocity and negative acceleration", "An object has zero acceleration and changing velocity", "An object has constant acceleration and changing velocity"], a: 2 },
            { stem: "A boat travelling west at a speed of 3 m/s meets a southward current of 4 m/s. If the boat is currently 8m away from the south shore, how far will it travel westward before it reaches the shore?", c: ["5 m", "8 m", "10 m", "6 m"], a: 3 },
            { stem: "John is going for a 16-km bike ride. How long will it take to complete the ride if he maintains his target average velocity of 20 mph? (1 km ≈ 0.62 miles)", c: ["2 hours", "30 minutes", "48 minutes", "1 hour, 20 minutes"], a: 1 },
            { stem: "A baseball is hit horizontally with an initial velocity of 36 m/s. What is its total displacement after 0.25s (ignore air resistance)?", c: ["Less than 9m", "Greater than 9m", "Exactly 9m", "Exactly 4.5m"], a: 1 },
            { stem: "A 100kg skydiver has reached a terminal velocity of 50m/s. What is the net force acting on the skydiver?", c: ["Zero", "0.5N", "2N", "500N"], a: 0 },
            { stem: "A 3,000kg tow truck exerts a force of 750N on a 1,500kg car. What is the magnitude of the force exerted by the car on the tow truck?", c: ["Zero", "375N", "750N", "1,500N"], a: 2 },
            { stem: "A 20kg block slides down a slope inclined at 30 degrees above the horizontal with a constant velocity of 2m/s. What is the magnitude of the force of friction acting on the block? (Use g=9.8 m/s²)", c: ["Zero", "24.5N", "49N", "98N"], a: 3 },
            { stem: "A box of mass 10kg is sent to a new planet with twice the mass and the same radius as Earth. What is the mass of the box on the surface of the new planet?", c: ["10kg", "20kg", "196kg", "49kg"], a: 0 },
            { stem: "A 2.0kg object has an acceleration of 3.0 m/s² east. There are two forces acting on the object. One has a magnitude of 20N directed west. What is the magnitude and direction of the second force?", c: ["14N East", "14N West", "6N East", "26N East"], a: 3 },
            { stem: "A car drives around a curve at constant speed. While it is going around the curve, which of the following quantities are changing?", c: ["Speed only", "Velocity only", "Acceleration only", "Velocity and Acceleration"], a: 3 },
            { stem: "Pushing open a heavy door from the edge opposite the hinge requires ___ the amount of force than when pushing it open halfway between the hinge and the opposite edge.", c: ["Half", "Twice", "Four times", "The same"], a: 0 },
            { stem: "Which of the following cannot have a negative value?", c: ["Work", "Force", "Kinetic Energy", "Potential Energy"], a: 2 },
            { stem: "A skydiver has reached terminal velocity. The net work performed on the skydiver during the next 10 seconds of fall is:", c: ["Positive", "Negative", "Zero", "Cannot be determined"], a: 2 },
            { stem: "A 2.0kg stone is dropped from rest from a 10m tall bridge. What is the maximum kinetic energy of the stone as it hits the ground? (Use g=9.8 m/s²)", c: ["19.6J", "49J", "98J", "196J"], a: 3 },
            { stem: "A 10kg block slides down a frictionless incline 5m tall and hits a rough surface, sliding 10m before stopping. How high would the incline need to be for the block to slide 20m on the same rough surface?", c: ["15m", "20m", "10m", "5m"], a: 2 },
            { stem: "A 500g baseball is moving at 40m/s when it is hit in the opposite direction, acquiring a speed of 20m/s. If the force of the bat on the ball was 150N, how long was the baseball in contact with the bat?", c: ["0.56 s", "0.13 s", "0.06 s", "0.2 s"], a: 3 },
            { stem: "A 2000kg car moving at 30m/s rear ends a 4000kg truck moving at 10m/s in the same direction. They lock together. What is their velocity immediately after the collision?", c: ["6 m/s", "12 m/s", "17 m/s", "26 m/s"], a: 2 },
            { stem: "A 4kg mass oscillating on a spring (k = 16N/m) has velocity 8m/s when passing through the equilibrium position. What is the total energy of the mass-spring system?", c: ["0 J", "128 J", "256 J", "1152 J"], a: 1 },
            { stem: "What is the potential energy of a spring with spring constant 5 N/m when it is stretched 10cm from its equilibrium position?", c: ["0.025 J", "0.005 J", "0.05 J", "0.1 J"], a: 0 },
            { stem: "For an object undergoing simple harmonic motion, which of the following quantities are constant?", c: ["Frequency and Velocity", "Frequency and Period", "Acceleration and Period", "Velocity and Acceleration"], a: 1 },
            { stem: "If the frequency of a sound wave in air is tripled, the velocity of the wave in air:", c: ["Increases by a factor of 3", "Decreases by a factor of 3", "Remains constant", "Increases by a factor of 9"], a: 2 },
            { stem: "Which of the following types of electromagnetic radiation has the highest frequency?", c: ["Infrared", "Gamma rays", "Microwaves", "Radiowaves"], a: 1 },
            { stem: "A solid cube with density 500 kg/m³ is fully submerged in pure water (density 1000 kg/m³) and released. The initial acceleration of the cube is:", c: ["Zero", "Non-zero and directed upwards", "Non-zero and directed downwards", "Cannot be determined"], a: 1 },
            { stem: "A gas is stored in a cubic container at constant temperature. If the lengths of each side of the container are halved, the pressure of the gas will be ___ the original pressure.", c: ["Twice", "Half", "Four times", "Eight times"], a: 3 },
            { stem: "The end of a metal rod is heated, causing vibration of atoms. Collisions with adjacent atoms transfer this energy down the rod. This is a description of:", c: ["Irradiation", "Conduction", "Diffusion", "Convection"], a: 1 },
            { stem: "If the addition of 800J of heat to an object causes its temperature to rise 6°C, what is the heat capacity of the object?", c: ["4800 J/°C", "0.0075 °C/J", "806 J/°C", "133 J/°C"], a: 3 },
            { stem: "How many protons and neutrons, respectively, are present in an atom of Cobalt-60 (⁶⁰₂₇Co)?", c: ["27, 60", "60, 27", "33, 27", "27, 33"], a: 3 },
            { stem: "A charge q1 is placed a distance r1 from a fixed charge Q, experiencing a force F1. If q1 is replaced by a new charge q2 = 3*q1 at a new distance r2 = 3*r1, the new force F2 will be:", c: ["(1/3) F1", "(1/9) F1", "The same as F1", "3 F1"], a: 0 },
            { stem: "If the radius and length of a cylindrical wire are both reduced by half, what is the effect on the resistance of the wire?", c: ["It is reduced by half", "It is reduced by 1/4", "It remains constant", "It doubles"], a: 3 },
            { stem: "A series circuit consists of a 9V battery and a 4Ω resistor. If the battery has an internal resistance of 0.5Ω, what is the terminal voltage of the battery?", c: ["2.5 V", "8.5 V", "1.0 V", "8.0 V"], a: 3 },
            { stem: "An object is placed 12cm from a thin converging lens with a focal length of 4cm. Which of the following is true regarding the image?", c: ["Real, inverted, forms on same side", "Virtual, upright, forms on same side", "Virtual, inverted, forms on opposite side", "Real, inverted, forms on opposite side"], a: 3 },
            { stem: "A single thin lens produces a virtual image that is larger than the object. This occurs when:", c: ["The object is within the focal distance of a diverging lens", "The object is beyond the focal distance of a diverging lens", "The object is within the focal distance of a converging lens", "The object is beyond the focal distance of a converging lens"], a: 2 },
            { stem: "Air has a refractive index of n=1.0 and water has n=1.33. As light passes from air to water, its speed ___, its frequency ___, and its wavelength ___.", c: ["increases, remains the same, increases", "decreases, decreases, decreases", "decreases, increases, decreases", "decreases, remains the same, decreases"], a: 3 },
            { stem: "A radioactive sample has a half-life of 10 days. If the sample initially contains 128 g of the substance, how much of the substance will remain after 40 days?", c: ["128 g", "32 g", "16 g", "8 g"], a: 3 },
            { stem: "A straight 0.5 m wire carries a current of 4 A through a uniform magnetic field of 0.2 T. What is the maximum possible magnetic force on this wire?", c: ["0.04 N", "0.4 N", "0.8 N", "1.6 N"], a: 1 }
        ],
        // Practice Test 7
        [
            { stem: "A ball is thrown vertically upward with an initial velocity of 20 m/s. How high does it go before it stops? (Use g = 10 m/s²)", c: ["10 m", "20 m", "30 m", "40 m"], a: 1 },
            { stem: "A car accelerates uniformly from rest to 30 m/s in 6 seconds. What is its average acceleration?", c: ["2 m/s²", "5 m/s²", "10 m/s²", "180 m/s²"], a: 1 },
            { stem: "An object's position-time (x-t) graph is a straight line with a positive slope. What does this indicate?", c: ["Constant positive velocity", "Constant positive acceleration", "Increasing velocity", "The object is at rest"], a: 0 },
            { stem: "A 10 kg box is pushed on a rough floor with a 50 N force. It accelerates at 2 m/s². What is the magnitude of the force of friction?", c: ["10 N", "20 N", "30 N", "50 N"], a: 2 },
            { stem: "An apple sits on a table. According to Newton's Third Law, the reaction force to the Earth's gravitational pull on the apple is:", c: ["The normal force from the table on the apple", "The apple's gravitational pull on the Earth", "The normal force from the apple on the table", "The weight of the apple"], a: 1 },
            { stem: "What is the acceleration of a 5 kg block on a frictionless incline of 30°? (Use g = 10 m/s² and sin(30°) = 0.5)", c: ["2.5 m/s²", "5 m/s²", "8.7 m/s²", "10 m/s²"], a: 1 },
            { stem: "A 2 kg object is lifted from the floor to a shelf 3 m high. How much work is done against gravity? (Use g = 10 m/s²)", c: ["6 J", "20 J", "30 J", "60 J"], a: 3 },
            { stem: "A 1 kg pendulum bob is released from rest at a height H above its lowest point. At the bottom of its swing, its speed is 4 m/s. What is H? (Use g = 10 m/s²)", c: ["0.4 m", "0.8 m", "1.6 m", "3.2 m"], a: 1 },
            { stem: "A motor performs 600 J of work in 15 seconds. What is its average power output?", c: ["4 W", "40 W", "900 W", "9000 W"], a: 1 },
            { stem: "A 1000 kg car moving at 10 m/s collides and sticks to a 1000 kg car that was at rest. What is the final speed of the two-car system?", c: ["2.5 m/s", "5 m/s", "10 m/s", "20 m/s"], a: 1 },
            { stem: "A 0.5 kg ball hits a wall at 10 m/s and bounces straight back at 8 m/s. What is the magnitude of the impulse delivered to the ball?", c: ["1 N·s", "5 N·s", "9 N·s", "18 N·s"], a: 2 },
            { stem: "A wheel accelerates uniformly from rest to an angular velocity of 10 rad/s in 2 seconds. What is its angular acceleration?", c: ["2 rad/s²", "5 rad/s²", "10 rad/s²", "20 rad/s²"], a: 1 },
            { stem: "A 1 kg mass moves in a 2 m radius circle at a constant speed of 3 m/s. What is the magnitude of the centripetal force?", c: ["1.5 N", "3 N", "4.5 N", "9 N"], a: 2 },
            { stem: "Planet X has twice the mass and twice the radius of Earth. The acceleration due to gravity on Planet X (g_X) compared to Earth's (g_E) is:", c: ["4 g_E", "2 g_E", "g_E", "1/2 g_E"], a: 3 },
            { stem: "A 10 kg mass is placed 2 m from a fulcrum. Where must a 4 kg mass be placed on the opposite side to balance the system?", c: ["2 m", "4 m", "5 m", "8 m"], a: 2 },
            { stem: "A 20 N force is applied 0.5 m from a pivot at a 90° angle. What is the magnitude of the torque produced?", c: ["5 N·m", "10 N·m", "20 N·m", "40 N·m"], a: 1 },
            { stem: "What is the gauge pressure at a depth of 10 m in pure water? (Use ρ_water = 1000 kg/m³ and g = 10 m/s²)", c: ["1,000 Pa", "10,000 Pa", "100,000 Pa", "1,000,000 Pa"], a: 2 },
            { stem: "An object with a volume of 2 m³ is fully submerged in water (ρ = 1000 kg/m³). What is the buoyant force acting on it? (Use g = 10 m/s²)", c: ["2,000 N", "10,000 N", "20,000 N", "40,000 N"], a: 2 },
            { stem: "Water flows through a pipe. If the radius of the pipe decreases by a factor of 2, the velocity of the water will:", c: ["Decrease by a factor of 4", "Decrease by a factor of 2", "Increase by a factor of 2", "Increase by a factor of 4"], a: 3 },
            { stem: "The design of an airplane wing, which causes air to move faster over the top surface, generates lift. This is a primary application of:", c: ["Archimedes' Principle", "Bernoulli's Principle", "Pascal's Principle", "Torricelli's Law"], a: 1 },
            { stem: "A comfortable room temperature is 20°C. What is this temperature in Kelvin?", c: ["-253 K", "273 K", "293 K", "303 K"], a: 2 },
            { stem: "How much heat energy is needed to raise the temperature of 2 kg of water from 10°C to 15°C? (Specific heat of water ≈ 4186 J/kg°C)", c: ["8,372 J", "20,930 J", "41,860 J", "83,720 J"], a: 2 },
            { stem: "The First Law of Thermodynamics (ΔU = Q - W) is a restatement of which of the following principles?", c: ["Conservation of Energy", "Conservation of Mass", "The law of increasing entropy", "Conservation of Momentum"], a: 0 },
            { stem: "An 'isochoric' process is a thermodynamic process that takes place at constant:", c: ["Pressure", "Temperature", "Volume", "Internal Energy"], a: 2 },
            { stem: "Two positive charges, +Q and +Q, are separated by a distance $r$ and exert a force $F$ on each other. If one charge is doubled to +2Q, what is the new force?", c: ["F/2", "F", "2F", "4F"], a: 2 },
            { stem: "The electric field at a distance of 2 m from a +4 C point charge is E. What is the electric field at a distance of 4 m from the same charge?", c: ["E/4", "E/2", "2E", "4E"], a: 0 },
            { stem: "What is the change in electrical potential energy when a +2 C charge is moved through a potential difference of +10 V?", c: ["5 J", "10 J", "20 J", "40 J"], a: 2 },
            { stem: "A 12 V battery is connected to a 3 Ω resistor. What is the current flowing through the resistor?", c: ["0.25 A", "4 A", "15 A", "36 A"], a: 1 },
            { stem: "A wire has resistance $R$. It is replaced by a new wire of the same material, but with twice the length and twice the cross-sectional area. What is the new resistance?", c: ["R/4", "R/2", "R", "2R"], a: 2 },
            { stem: "Two resistors, 2 Ω and 4 Ω, are connected in series with a 12 V battery. What is the total current drawn from the battery?", c: ["1 A", "2 A", "3 A", "6 A"], a: 1 },
            { stem: "Two resistors, 3 Ω and 6 Ω, are connected in parallel. What is the equivalent resistance of this combination?", c: ["1 Ω", "2 Ω", "4.5 Ω", "9 Ω"], a: 1 },
            { stem: "A lightbulb is rated at 60 W when operated at 120 V. What is the resistance of the lightbulb?", c: ["0.5 Ω", "2 Ω", "120 Ω", "240 Ω"], a: 3 },
            { stem: "A proton (charge +e) is moving due east in a uniform magnetic field that points due north. What is the direction of the magnetic force on the proton?", c: ["Up", "Down", "West", "East"], a: 0 },
            { stem: "A wave is observed to have a frequency of 10 Hz and a wavelength of 3 m. What is the speed of this wave?", c: ["0.33 m/s", "3.3 m/s", "30 m/s", "300 m/s"], a: 2 },
            { stem: "The intensity of a sound is increased by a factor of 100. By how many decibels (dB) has the sound level increased?", c: ["2 dB", "10 dB", "20 dB", "100 dB"], a: 2 },
            { stem: "A police car with its siren on is driving towards you. Compared to the frequency of the siren at rest, the frequency you hear is:", c: ["Higher", "Lower", "The same", "Zero"], a: 0 },
            { stem: "Light passes from air (n ≈ 1.0) into glass (n = 1.5). The angle of incidence is 30°. What is the angle of refraction? (sin(30°) = 0.5)", c: ["19.5°", "30°", "45°", "48.6°"], a: 0 },
            { stem: "An object is placed at the focal point (F) of a concave mirror. Where is the image formed?", c: ["At F, real and inverted", "At 2F, real and inverted", "Behind the mirror, virtual and upright", "At infinity"], a: 3 },
            { stem: "A single diverging lens always produces an image with which of the following characteristics?", c: ["Real and upright", "Real and inverted", "Virtual and upright", "Virtual and inverted"], a: 2 },
            { stem: "A radioactive isotope has a half-life of 2 hours. If you start with a 100 g sample, what fraction of the original sample will remain after 6 hours?", c: ["1/3", "1/4", "1/6", "1/8"], a: 3 }
        ],
        // Practice Test 8
        [
            { stem: "A car traveling at 12 m/s begins to slow down at a constant rate of 3 m/s². How far does it travel before it comes to a complete stop?", c: ["4 m", "18 m", "24 m", "36 m"], a: 2 },
            { stem: "A bullet traveling at 200 m/s hits a block and burrows 10 cm into it before stopping. What was the magnitude of the bullet's average acceleration while stopping?", c: ["2,000 m/s²", "20,000 m/s²", "200,000 m/s²", "2,000,000 m/s²"], a: 2 },
            { stem: "A stone is dropped from rest from a tall cliff. How far has it fallen after 3 seconds of free fall? (Use g = 10 m/s²)", c: ["15 m", "30 m", "45 m", "90 m"], a: 2 },
            { stem: "A person drives 90 miles to work in 30 minutes. They drive back home along the same route, also taking 30 minutes. What is their average velocity for the entire round trip?", c: ["0 mph", "45 mph", "90 mph", "180 mph"], a: 0 },
            { stem: "A 20 kg block rests on the ground. A person pulls up on it with a rope, exerting a force of 50 N. The block remains at rest. What is the magnitude of the normal force? (Use g = 10 m/s²)", c: ["50 N", "150 N", "200 N", "250 N"], a: 1 },
            { stem: "A 5 kg object slides on a horizontal surface, decelerating at 2.0 m/s² due solely to friction. What is the coefficient of kinetic friction between the object and the surface? (Use g = 10 m/s²)", c: ["0.1", "0.2", "0.4", "0.5"], a: 1 },
            { stem: "Which of the following scenarios is a direct application of Newton's Third Law?", c: ["A book stays at rest on a table due to balanced forces.", "A hockey puck slides at a constant velocity on ice.", "A man pushes on a wall, and the wall exerts an equal and opposite force on the man.", "The force of gravity on an object is Fg = mg."], a: 2 },
            { stem: "A 5 kg block starts from rest on a frictionless 30° incline. What is its velocity after sliding for 2.0 seconds? (Use g = 10 m/s², sin(30°)=0.5)", c: ["2.5 m/s", "5.0 m/s", "8.7 m/s", "10.0 m/s"], a: 3 },
            { stem: "A block slides 5 m down a rough incline. Which force does zero work on the block?", c: ["Gravity", "Friction", "Normal force", "Air resistance"], a: 2 },
            { stem: "Which of the following objects possesses gravitational potential energy (relative to the ground) but possesses zero kinetic energy?", c: ["A book resting on a 2 m high shelf.", "A spring stretched 10 cm.", "A balloon rising at a constant 1 m/s.", "A rock held in a pulled-back slingshot."], a: 0 },
            { stem: "A change in an object's mass would affect all of the following quantities EXCEPT:", c: ["Its kinetic energy", "Its gravitational potential energy", "Its momentum", "Its gravitational acceleration in free fall"], a: 3 },
            { stem: "A constant 1000 N force moves a car 100 m, and the task takes 10 seconds. This requires work W1. If the same 1000 N force moves the same car 100 m in 20 seconds (requiring work W2), how does W2 compare to W1?", c: ["W2 = 0.5 W1", "W2 = W1", "W2 = 2 W1", "W2 = 4 W1"], a: 1 },
            { stem: "Calculate the total mechanical energy of a 2 kg eagle flying at 15 m/s at an altitude of 50 m. (Use g = 10 m/s²)", c: ["225 J", "1000 J", "1225 J", "2250 J"], a: 2 },
            { stem: "An object with mass 2.0 kg has a linear momentum of 10.0 kg·m/s. What is its kinetic energy?", c: ["5 J", "20 J", "25 J", "50 J"], a: 2 },
            { stem: "If the net force acting on an object of constant mass is zero, which of the following quantities must also be constant?", c: ["Acceleration", "Momentum", "Position", "Both A and B"], a: 3 },
            { stem: "A bug sits on the edge of a 0.5 m radius disk rotating at a constant angular velocity of 4 rad/s. What is the bug's centripetal acceleration?", c: ["2 m/s²", "4 m/s²", "8 m/s²", "16 m/s²"], a: 2 },
            { stem: "An object is in uniform circular motion. Which of the following properties is not constant?", c: ["Mass", "Speed", "Kinetic energy", "Velocity"], a: 3 },
            { stem: "The gravitational force between two stars of mass m1 and m2 is F. If the mass of both stars is doubled and the distance between them is also doubled, what is the new force?", c: ["F/4", "F/2", "F", "2F"], a: 2 },
            { stem: "A 1000 kg car travels on a circular track of radius 50 m. The coefficient of static friction is 0.8. What is the maximum speed the car can travel without sliding? (Use g = 10 m/s²)", c: ["10 m/s", "20 m/s", "28 m/s", "40 m/s"], a: 1 },
            { stem: "A 10 m uniform rod has a fulcrum at its center. A 4 kg mass is hung at one end, 5 m from the fulcrum. Where must an 8 kg mass be hung to balance the rod?", c: ["At 2.5 m", "At 6.25 m", "At 7.5 m", "At 8.75 m"], a: 2 },
            { stem: "A net torque applied to a rigid, non-rotating body will produce which of the following?", c: ["Linear acceleration", "Rotational equilibrium", "Angular acceleration", "Constant angular velocity"], a: 2 },
            { stem: "A 15 m massless beam has a fulcrum at the 5 m mark. A 6 kg mass hangs at 0 m and a 3 kg mass hangs at 2 m. What mass must be hung at 15 m to balance?", c: ["3.0 kg", "3.9 kg", "6.3 kg", "9.0 kg"], a: 1 },
            { stem: "The pressure on a submerged object is given by P = P0 + ρ g h. Which factor does not affect the gauge pressure on the object?", c: ["Depth of the object", "Density of the fluid", "Atmospheric pressure", "Acceleration due to gravity"], a: 2 },
            { stem: "A projectile is fired at a 45° angle. At the very peak of its trajectory, which of the following is true?", c: ["Its velocity is zero.", "Its acceleration is zero.", "Its vertical velocity is zero.", "Its horizontal velocity is zero."], a: 2 },
            { stem: "A ball is dropped from rest. How far does it travel *during the third second* of its fall? (Use g = 10 m/s²)", c: ["10 m", "20 m", "25 m", "45 m"], a: 2 },
            { stem: "A runner completes one full lap around a 400 m circular track in 50 seconds. What is the runner's average speed and average velocity?", c: ["Speed = 8 m/s, Velocity = 8 m/s", "Speed = 8 m/s, Velocity = 0 m/s", "Speed = 0 m/s, Velocity = 8 m/s", "Speed = 0 m/s, Velocity = 0 m/s"], a: 1 },
            { stem: "The slope of a velocity-time graph represents which of the following quantities?", c: ["Displacement", "Acceleration", "Jerk", "Position"], a: 1 },
            { stem: "A 5 kg block is pulled across a rough floor by a 40 N horizontal force. If the force of friction is 10 N, what is the acceleration of the block?", c: ["2 m/s²", "6 m/s²", "8 m/s²", "10 m/s²"], a: 1 },
            { stem: "A 70 kg person stands on a weight scale in an elevator that is accelerating *upward* at 2 m/s². What is the reading on the scale? (Use g = 10 m/s²)", c: ["560 N", "700 N", "840 N", "140 N"], a: 2 },
            { stem: "It takes 50 N of horizontal force to start a 20 kg box moving on a floor, but only 30 N to keep it moving at a constant velocity. What is the coefficient of *static* friction?", c: ["0.15", "0.25", "0.50", "0.83"], a: 1 },
            { stem: "A 10 kg block slides down a 30° incline at a constant velocity. What is the coefficient of kinetic friction (μ_k)? (sin(30°)=0.5, cos(30°)=0.87)", c: ["0.50", "0.58", "0.87", "1.00"], a: 1 },
            { stem: "A 2 kg object, initially at rest, is pushed by a net force of 10 N over a distance of 4 m. What is its final kinetic energy?", c: ["20 J", "40 J", "80 J", "200 J"], a: 1 },
            { stem: "A spring with a spring constant (k) of 200 N/m is compressed by 0.1 m. How much potential energy is stored in the spring?", c: ["1 J", "2 J", "10 J", "20 J"], a: 0 },
            { stem: "A 100 kg roller coaster cart starts from rest at a height of 10 m. What is its speed when it reaches a height of 5 m? (Use g = 10 m/s²)", c: ["5 m/s", "10 m/s", "14.1 m/s", "20 m/s"], a: 1 },
            { stem: "A 2.0 kg object is moving at 5 m/s. A net force of 10 N acts on it for 2 seconds in the direction of motion. What is the object's final momentum?", c: ["10 kg·m/s", "20 kg·m/s", "30 kg·m/s", "50 kg·m/s"], a: 2 },
            { stem: "In a perfectly *elastic* collision between two objects, which of the following is conserved?", c: ["Momentum only", "Kinetic energy only", "Momentum and kinetic energy", "Neither momentum nor kinetic energy"], a: 2 },
            { stem: "A 5 N force is applied to a wrench at a distance of 0.2 m from the pivot. The force is applied at a 30° angle to the wrench handle. What is the torque?", c: ["0.5 N·m", "0.87 N·m", "1.0 N·m", "10 N·m"], a: 0 },
            { stem: "A solid sphere and a hollow cylinder, both with the same mass and radius, are released from rest at the top of an incline. Which reaches the bottom first?", c: ["The hollow cylinder", "The solid sphere", "They reach at the same time", "It depends on their mass"], a: 1 },
            { stem: "An ice skater is spinning with her arms outstretched. She pulls her arms in close to her body. Her angular momentum is ___ and her angular velocity ___.", c: ["conserved, decreases", "conserved, increases", "increases, increases", "decreases, decreases"], a: 1 },
            { stem: "If the Earth's radius suddenly shrank to half its original value (with its mass remaining constant), what would happen to the acceleration due to gravity (g) at its surface?", c: ["It would be quartered", "It would be halved", "It would double", "It would quadruple"], a: 3 },
            { stem: "In a hydraulic lift, a 10 N force is applied to a small piston with an area of 0.1 m². What is the lifting force on a large piston with an area of 2.0 m²?", c: ["50 N", "100 N", "200 N", "2000 N"], a: 2 },
            { stem: "An object with a density of 400 kg/m³ is placed in water (density 1000 kg/m³). What percentage of the object's volume will be submerged?", c: ["20%", "40%", "60%", "100%"], a: 1 },
            { stem: "An object has a weight of 50 N in air and an apparent weight of 30 N when fully submerged in water. What is the specific gravity of the object?", c: ["1.67", "2.0", "2.5", "5.0"], a: 2 },
            { stem: "Which of the following is NOT a unit of pressure?", c: ["Pascal (Pa)", "Atmosphere (atm)", "N/m²", "Joule (J)"], a: 3 },
            { stem: "A 2.0 m long steel rod is heated, causing its temperature to increase by 50°C. What is the rod's change in length? (α_steel = 12 x 10⁻⁶ /°C)", c: ["0.0012 m", "0.0024 m", "0.012 m", "0.024 m"], a: 0 },
            { stem: "You feel the heat from a bonfire while standing several feet away. This is primarily an example of which type of heat transfer?", c: ["Conduction", "Convection", "Radiation", "Advection"], a: 2 },
            { stem: "A gas expands at a constant pressure (isobaric), doing 100 J of work. During this process, its internal energy increases by 50 J. How much heat (Q) was added?", c: ["-50 J (heat left)", "50 J", "100 J", "150 J"], a: 3 },
            { stem: "Which of the following statements is the best summary of the Second Law of Thermodynamics?", c: ["Energy is always conserved.", "The total entropy of the universe tends to increase.", "Heat always flows from hot to cold.", "It is impossible to reach absolute zero."], a: 1 },
            { stem: "An electric dipole consists of a +5 C charge and a -5 C charge. The net electric field at a point exactly halfway between them is:", c: ["Zero, because the charges cancel", "Non-zero, pointing toward the negative charge", "Non-zero, pointing toward the positive charge", "Non-zero, pointing perpendicular to the dipole axis"], a: 1 },
            { stem: "A stone is dropped from rest from a tall cliff. How fast is it traveling after 2.5 seconds of free fall? (Use g = 10 m/s²)", c: ["10 m/s", "12.5 m/s", "25 m/s", "50 m/s"], a: 2 }
        ],
        // Practice Test 9
        [
            { stem: "A projectile is fired at a 45° angle. At the very peak of its trajectory, which of the following is true?", c: ["Its velocity is zero.", "Its acceleration is zero.", "Its vertical velocity is zero.", "Its horizontal velocity is zero."], a: 2 },
            { stem: "A ball is dropped from rest. How far does it travel *during the third second* of its fall? (Use g = 10 m/s²)", c: ["10 m", "20 m", "25 m", "45 m"], a: 2 },
            { stem: "A runner completes one full lap around a 400 m circular track in 50 seconds. What is the runner's average speed and average velocity?", c: ["Speed = 8 m/s, Velocity = 8 m/s", "Speed = 8 m/s, Velocity = 0 m/s", "Speed = 0 m/s, Velocity = 8 m/s", "Speed = 0 m/s, Velocity = 0 m/s"], a: 1 },
            { stem: "The slope of a velocity-time graph represents which of the following quantities?", c: ["Displacement", "Acceleration", "Jerk", "Position"], a: 1 },
            { stem: "A 5 kg block is pulled across a rough floor by a 40 N horizontal force. If the force of friction is 10 N, what is the acceleration of the block?", c: ["2 m/s²", "6 m/s²", "8 m/s²", "10 m/s²"], a: 1 },
            { stem: "A 70 kg person stands on a weight scale in an elevator that is accelerating *upward* at 2 m/s². What is the reading on the scale? (Use g = 10 m/s²)", c: ["560 N", "700 N", "840 N", "140 N"], a: 2 },
            { stem: "It takes 50 N of horizontal force to start a 20 kg box moving on a floor, but only 30 N to keep it moving at a constant velocity. What is the coefficient of *static* friction?", c: ["0.15", "0.25", "0.50", "0.83"], a: 1 },
            { stem: "A 10 kg block slides down a 30° incline at a constant velocity. What is the coefficient of kinetic friction (μ_k)? (sin(30°)=0.5, cos(30°)=0.87)", c: ["0.50", "0.58", "0.87", "1.00"], a: 1 },
            { stem: "A 2 kg object, initially at rest, is pushed by a net force of 10 N over a distance of 4 m. What is its final kinetic energy?", c: ["20 J", "40 J", "80 J", "200 J"], a: 1 },
            { stem: "A spring with a spring constant (k) of 200 N/m is compressed by 0.1 m. How much potential energy is stored in the spring?", c: ["1 J", "2 J", "10 J", "20 J"], a: 0 },
            { stem: "A 100 kg roller coaster cart starts from rest at a height of 10 m. What is its speed when it reaches a height of 5 m? (Use g = 10 m/s²)", c: ["5 m/s", "10 m/s", "14.1 m/s", "20 m/s"], a: 1 },
            { stem: "A 2.0 kg object is moving at 5 m/s. A net force of 10 N acts on it for 2 seconds in the direction of motion. What is the object's final momentum?", c: ["10 kg·m/s", "20 kg·m/s", "30 kg·m/s", "50 kg·m/s"], a: 2 },
            { stem: "In a perfectly *elastic* collision between two objects, which of the following is conserved?", c: ["Momentum only", "Kinetic energy only", "Momentum and kinetic energy", "Neither momentum nor kinetic energy"], a: 2 },
            { stem: "A 5 N force is applied to a wrench at a distance of 0.2 m from the pivot. The force is applied at a 30° angle to the wrench handle. What is the torque?", c: ["0.5 N·m", "0.87 N·m", "1.0 N·m", "10 N·m"], a: 0 },
            { stem: "A solid sphere and a hollow cylinder, both with the same mass and radius, are released from rest at the top of an incline. Which reaches the bottom first?", c: ["The hollow cylinder", "The solid sphere", "They reach at the same time", "It depends on their mass"], a: 1 },
            { stem: "An ice skater is spinning with her arms outstretched. She pulls her arms in close to her body. Her angular momentum is ___ and her angular velocity ___.", c: ["conserved, decreases", "conserved, increases", "increases, increases", "decreases, decreases"], a: 1 },
            { stem: "If the Earth's radius suddenly shrank to half its original value (with its mass remaining constant), what would happen to the acceleration due to gravity (g) at its surface?", c: ["It would be quartered", "It would be halved", "It would double", "It would quadruple"], a: 3 },
            { stem: "In a hydraulic lift, a 10 N force is applied to a small piston with an area of 0.1 m². What is the lifting force on a large piston with an area of 2.0 m²?", c: ["50 N", "100 N", "200 N", "2000 N"], a: 2 },
            { stem: "An object with a density of 400 kg/m³ is placed in water (density 1000 kg/m³). What percentage of the object's volume will be submerged?", c: ["20%", "40%", "60%", "100%"], a: 1 },
            { stem: "An object has a weight of 50 N in air and an apparent weight of 30 N when fully submerged in water. What is the specific gravity of the object?", c: ["1.67", "2.0", "2.5", "5.0"], a: 2 },
            { stem: "Which of the following is NOT a unit of pressure?", c: ["Pascal (Pa)", "Atmosphere (atm)", "N/m²", "Joule (J)"], a: 3 },
            { stem: "A 2.0 m long steel rod is heated, causing its temperature to increase by 50°C. What is the rod's change in length? (α_steel = 12 x 10⁻⁶ /°C)", c: ["0.0012 m", "0.0024 m", "0.012 m", "0.024 m"], a: 0 },
            { stem: "You feel the heat from a bonfire while standing several feet away. This is primarily an example of which type of heat transfer?", c: ["Conduction", "Convection", "Radiation", "Advection"], a: 2 },
            { stem: "A gas expands at a constant pressure (isobaric), doing 100 J of work. During this process, its internal energy increases by 50 J. How much heat (Q) was added?", c: ["-50 J (heat left)", "50 J", "100 J", "150 J"], a: 3 },
            { stem: "Which of the following statements is the best summary of the Second Law of Thermodynamics?", c: ["Energy is always conserved.", "The total entropy of the universe tends to increase.", "Heat always flows from hot to cold.", "It is impossible to reach absolute zero."], a: 1 },
            { stem: "An electric dipole consists of a +5 C charge and a -5 C charge. The net electric field at a point exactly halfway between them is:", c: ["Zero, because the charges cancel", "Non-zero, pointing toward the negative charge", "Non-zero, pointing toward the positive charge", "Non-zero, pointing perpendicular to the dipole axis"], a: 1 },
            { stem: "A stone is dropped from rest from a tall cliff. How fast is it traveling after 2.5 seconds of free fall? (Use g = 10 m/s²)", c: ["10 m/s", "12.5 m/s", "25 m/s", "50 m/s"], a: 2 },
            { stem: "An 'equipotential line' is a line connecting points in space that all have the same:", c: ["Electric field strength", "Electric potential", "Electric charge", "Distance from a charge"], a: 1 },
            { stem: "A positive charge $q$ experiences a force $F$ when placed in an electric field $E$. If $q$ is replaced by a charge of $-2q$, what new force will it experience?", c: ["-2F", "-F/2", "F/2", "2F"], a: 0 },
            { stem: "A 10 Ω resistor has a current of 5 A flowing through it. What is the voltage drop across the resistor?", c: ["0.5 V", "2 V", "50 V", "500 V"], a: 2 },
            { stem: "A 20 Ω resistor has 2 A of current flowing through it. How much power does it dissipate as heat?", c: ["10 W", "40 W", "80 W", "100 W"], a: 2 },
            { stem: "A 3 Ω resistor and a 6 Ω resistor are connected in series with a 9 V battery. What is the voltage drop across the 3 Ω resistor?", c: ["1 V", "3 V", "6 V", "9 V"], a: 1 },
            { stem: "Two 10 Ω resistors are connected in parallel with a 10 V battery. What is the equivalent resistance of the circuit?", c: ["5 Ω", "10 Ω", "20 Ω", "100 Ω"], a: 0 },
            { stem: "A 0.5 m long wire carries a 2 A current. The wire is oriented *parallel* to a uniform 0.1 T magnetic field. What is the magnetic force on the wire?", c: ["0 N", "0.1 N", "0.2 N", "1.0 N"], a: 0 },
            { stem: "A long, straight wire carries a current $I$ pointing out of the page. The magnetic field lines produced by this current are:", c: ["Concentric circles, clockwise", "Concentric circles, counter-clockwise", "Radial, pointing outward", "Radial, pointing inward"], a: 1 },
            { stem: "Which of the following correctly ranks electromagnetic radiation from *lowest* energy to *highest* energy?", c: ["UV, Infrared, X-ray", "Infrared, UV, X-ray", "X-ray, UV, Infrared", "Infrared, X-ray, UV"], a: 1 },
            { stem: "A 1.0 m long string is fixed at both ends and vibrates at its fundamental frequency (first harmonic). What is the wavelength of the standing wave?", c: ["0.5 m", "1.0 m", "2.0 m", "4.0 m"], a: 2 },
            { stem: "A wave has a frequency of 50 Hz and a speed of 10 m/s. What is its wavelength?", c: ["0.2 m", "5 m", "200 m", "500 m"], a: 0 },
            { stem: "A pencil placed in a glass of water appears 'bent' at the water's surface. This phenomenon is caused by:", c: ["Reflection", "Refraction", "Diffraction", "Polarization"], a: 1 },
            { stem: "An object is placed in front of a *convex* mirror. The image formed is always:", c: ["Real, inverted, and reduced", "Real, upright, and magnified", "Virtual, upright, and reduced", "Virtual, inverted, and magnified"], a: 2 },
            { stem: "An object is placed at a distance of 2F (twice the focal length) from a thin *converging* lens. The image formed will be:", c: ["Real, inverted, and same size, at 2F", "Real, inverted, and reduced, between F and 2F", "Virtual, upright, and magnified", "No image is formed (at infinity)"], a: 0 }
        ],
        // Practice Test 10
        [
            { stem: "A ball is thrown vertically upward with an initial velocity of 20 m/s. How high does it go before it stops? (Use g = 10 m/s²)", c: ["10 m", "20 m", "30 m", "40 m"], a: 1 },
            { stem: "A car accelerates uniformly from rest to 30 m/s in 6 seconds. What is its average acceleration?", c: ["2 m/s²", "5 m/s²", "10 m/s²", "180 m/s²"], a: 1 },
            { stem: "A stone is dropped from rest from a tall cliff. How fast is it traveling after 2.5 seconds of free fall? (Use g = 10 m/s²)", c: ["10 m/s", "12.5 m/s", "25 m/s", "50 m/s"], a: 2 },
            { stem: "A 10 kg box is pushed on a rough floor with a 50 N force. It accelerates at 2 m/s². What is the magnitude of the force of friction?", c: ["10 N", "20 N", "30 N", "50 N"], a: 2 },
            { stem: "An apple sits on a table. According to Newton's Third Law, the reaction force to the Earth's gravitational pull on the apple is:", c: ["The normal force from the table on the apple", "The apple's gravitational pull on the Earth", "The normal force from the apple on the table", "The weight of the apple"], a: 1 },
            { stem: "What is the acceleration of a 5 kg block on a frictionless incline of 30°? (Use g = 10 m/s² and sin(30°) = 0.5)", c: ["2.5 m/s²", "5 m/s²", "8.7 m/s²", "10 m/s²"], a: 1 },
            { stem: "A 2 kg object is lifted from the floor to a shelf 3 m high. How much work is done against gravity? (Use g = 10 m/s²)", c: ["6 J", "20 J", "30 J", "60 J"], a: 3 },
            { stem: "A 1 kg pendulum bob is released from rest at a height H above its lowest point. At the bottom of its swing, its speed is 4 m/s. What is H? (Use g = 10 m/s²)", c: ["0.4 m", "0.8 m", "1.6 m", "3.2 m"], a: 1 },
            { stem: "A motor performs 600 J of work in 15 seconds. What is its average power output?", c: ["4 W", "40 W", "900 W", "9000 W"], a: 1 },
            { stem: "A 1000 kg car moving at 10 m/s collides and sticks to a 1000 kg car that was at rest. What is the final speed of the two-car system?", c: ["2.5 m/s", "5 m/s", "10 m/s", "20 m/s"], a: 1 },
            { stem: "A 0.5 kg ball hits a wall at 10 m/s and bounces straight back at 8 m/s. What is the magnitude of the impulse delivered to the ball?", c: ["1 N·s", "5 N·s", "9 N·s", "18 N·s"], a: 2 },
            { stem: "A wheel accelerates uniformly from rest to an angular velocity of 10 rad/s in 2 seconds. What is its angular acceleration?", c: ["2 rad/s²", "5 rad/s²", "10 rad/s²", "20 rad/s²"], a: 1 },
            { stem: "A 1 kg mass moves in a 2 m radius circle at a constant speed of 3 m/s. What is the magnitude of the centripetal force?", c: ["1.5 N", "3 N", "4.5 N", "9 N"], a: 2 },
            { stem: "Planet X has twice the mass and twice the radius of Earth. The acceleration due to gravity on Planet X (g_X) compared to Earth's (g_E) is:", c: ["4 g_E", "2 g_E", "g_E", "1/2 g_E"], a: 3 },
            { stem: "A 10 kg mass is placed 2 m from a fulcrum. Where must a 4 kg mass be placed on the opposite side to balance the system?", c: ["2 m", "4 m", "5 m", "8 m"], a: 2 },
            { stem: "A 20 N force is applied 0.5 m from a pivot at a 90° angle. What is the magnitude of the torque produced?", c: ["5 N·m", "10 N·m", "20 N·m", "40 N·m"], a: 1 },
            { stem: "What is the gauge pressure at a depth of 10 m in pure water? (Use ρ_water = 1000 kg/m³ and g = 10 m/s²)", c: ["1,000 Pa", "10,000 Pa", "100,000 Pa", "1,000,000 Pa"], a: 2 },
            { stem: "An object with a volume of 2 m³ is fully submerged in water (ρ = 1000 kg/m³). What is the buoyant force acting on it? (Use g = 10 m/s²)", c: ["2,000 N", "10,000 N", "20,000 N", "40,000 N"], a: 2 },
            { stem: "Water flows through a pipe. If the radius of the pipe decreases by a factor of 2, the velocity of the water will:", c: ["Decrease by a factor of 4", "Decrease by a factor of 2", "Increase by a factor of 2", "Increase by a factor of 4"], a: 3 },
            { stem: "The design of an airplane wing, which causes air to move faster over the top surface, generates lift. This is a primary application of:", c: ["Archimedes' Principle", "Bernoulli's Principle", "Pascal's Principle", "Torricelli's Law"], a: 1 },
            { stem: "A comfortable room temperature is 20°C. What is this temperature in Kelvin?", c: ["-253 K", "273 K", "293 K", "303 K"], a: 2 },
            { stem: "How much heat energy is needed to raise the temperature of 2 kg of water from 10°C to 15°C? (Specific heat of water ≈ 4186 J/kg°C)", c: ["8,372 J", "20,930 J", "41,860 J", "83,720 J"], a: 2 },
            { stem: "The First Law of Thermodynamics (ΔU = Q - W) is a restatement of which of the following principles?", c: ["Conservation of Energy", "Conservation of Mass", "The law of increasing entropy", "Conservation of Momentum"], a: 0 },
            { stem: "An 'isochoric' process is a thermodynamic process that takes place at constant:", c: ["Pressure", "Temperature", "Volume", "Internal Energy"], a: 2 },
            { stem: "Two positive charges, +Q and +Q, are separated by a distance $r$ and exert a force $F$ on each other. If one charge is doubled to +2Q, what is the new force?", c: ["F/2", "F", "2F", "4F"], a: 2 },
            { stem: "The electric field at a distance of 2 m from a +4 C point charge is E. What is the electric field at a distance of 4 m from the same charge?", c: ["E/4", "E/2", "2E", "4E"], a: 0 },
            { stem: "What is the change in electrical potential energy when a +2 C charge is moved through a potential difference of +10 V?", c: ["5 J", "10 J", "20 J", "40 J"], a: 2 },
            { stem: "A 12 V battery is connected to a 3 Ω resistor. What is the current flowing through the resistor?", c: ["0.25 A", "4 A", "15 A", "36 A"], a: 1 },
            { stem: "A wire has resistance $R$. It is replaced by a new wire of the same material, but with twice the length and twice the cross-sectional area. What is the new resistance?", c: ["R/4", "R/2", "R", "2R"], a: 2 },
            { stem: "Two resistors, 2 Ω and 4 Ω, are connected in series with a 12 V battery. What is the total current drawn from the battery?", c: ["1 A", "2 A", "3 A", "6 A"], a: 1 },
            { stem: "Two resistors, 3 Ω and 6 Ω, are connected in parallel. What is the equivalent resistance of this combination?", c: ["1 Ω", "2 Ω", "4.5 Ω", "9 Ω"], a: 1 },
            { stem: "A lightbulb is rated at 60 W when operated at 120 V. What is the resistance of the lightbulb?", c: ["0.5 Ω", "2 Ω", "120 Ω", "240 Ω"], a: 3 },
            { stem: "A proton (charge +e) is moving due east in a uniform magnetic field that points due north. What is the direction of the magnetic force on the proton?", c: ["Up", "Down", "West", "East"], a: 0 },
            { stem: "A wave is observed to have a frequency of 10 Hz and a wavelength of 3 m. What is the speed of this wave?", c: ["0.33 m/s", "3.3 m/s", "30 m/s", "300 m/s"], a: 2 },
            { stem: "The intensity of a sound is increased by a factor of 100. By how many decibels (dB) has the sound level increased?", c: ["2 dB", "10 dB", "20 dB", "100 dB"], a: 2 },
            { stem: "A police car with its siren on is driving towards you. Compared to the frequency of the siren at rest, the frequency you hear is:", c: ["Higher", "Lower", "The same", "Zero"], a: 0 },
            { stem: "Light passes from air (n ≈ 1.0) into glass (n = 1.5). The angle of incidence is 30°. What is the angle of refraction? (sin(30°) = 0.5)", c: ["19.5°", "30°", "45°", "48.6°"], a: 0 },
            { stem: "An object is placed at the focal point (F) of a concave mirror. Where is the image formed?", c: ["At F, real and inverted", "At 2F, real and inverted", "Behind the mirror, virtual and upright", "At infinity"], a: 3 },
            { stem: "A single diverging lens always produces an image with which of the following characteristics?", c: ["Real and upright", "Real and inverted", "Virtual and upright", "Virtual and inverted"], a: 2 },
            { stem: "A radioactive isotope has a half-life of 2 hours. If you start with a 100 g sample, what fraction of the original sample will remain after 6 hours?", c: ["1/3", "1/4", "1/6", "1/8"], a: 3 }
        ],
        // Practice Test 2
        [
            { stem: "A stone is thrown horizontally from a 100 m high cliff with an initial speed of 15 m/s. If air resistance is negligible, what is the direction of the stone's acceleration when it is halfway to the ground?", c: ["Down and in the direction of motion", "In the direction of motion", "Straight down", "Straight up"], a: 2 },
            { stem: "A mail truck drives 5 km North, then makes a turn and drives 12 km West. What is the magnitude of the truck's total displacement?", c: ["7 km", "13 km", "17 km", "10 km"], a: 1 },
            { stem: "The position-time graph for a particle shows a horizontal line segment from t = 3s to t = 5s. What is the instantaneous velocity of the particle at t = 4s?", c: ["0 m/s", "4 m/s", "5 m/s", "Cannot be determined"], a: 0 },
            { stem: "A 60 kg mass is supported by a simple pulley system where two vertical ropes pull up on the mass (as in Pulley 1 in the document). What force F is required on the end of the rope to hold the mass in equilibrium? (Use g = 10 m/sÂ²)", c: ["30 N", "60 N", "300 N", "600 N"], a: 2 },
            { stem: "Three blocks with weights M=10N, N=20N, and P=30N are stacked on a table. M is on top of N, and N is on top of P. What is the magnitude of the normal force exerted by block N on block M?", c: ["10 N", "20 N", "30 N", "60 N"], a: 0 },
            { stem: "Using the same stacked blocks (M=10N, N=20N, P=30N; M on N, N on P), what is the magnitude of the normal force exerted by block P on block N?", c: ["10 N", "20 N", "30 N", "60 N"], a: 2 },
            { stem: "A 50 kg crate is on a frictionless horizontal surface. A 100 N force pushes it to the right, and a 20 N force pushes it to the left. What is the acceleration of the crate?", c: ["1.6 m/sÂ² right", "2.0 m/sÂ² right", "2.4 m/sÂ² right", "4.0 m/sÂ² right"], a: 0 },
            { stem: "A collision occurs in which momentum is conserved, but kinetic energy is not. The two objects do not stick together. What type of collision is this?", c: ["Elastic", "Inelastic", "Perfectly Inelastic", "This scenario is impossible"], a: 1 },
            { stem: "A 2 kg cart is released from rest at the top of a frictionless ramp at height hâ‚ = 10 m. It slides down and up a second ramp, reaching a max height of hâ‚‚ = 8 m. What is its speed at height hâ‚‚? (Use g = 10 m/sÂ²)", c: ["2 m/s", "6.3 m/s", "8.1 m/s", "12.6 m/s"], a: 1 },
            { stem: "A weightlifter holds a 1000 N barbell stationary over his head at a height of 2 m for 10 seconds. How much work does the weightlifter do on the barbell during these 10 seconds?", c: ["0 J", "200 J", "2000 J", "20,000 J"], a: 0 },
            { stem: "A 20 N force is required to compress a spring by 10 cm from its equilibrium position. What is the spring constant k?", c: ["0.2 N/m", "2 N/m", "20 N/m", "200 N/m"], a: 3 },
            { stem: "A spring with k = 400 N/m is compressed 0.1 m. It is then used to launch a 2.0 kg block horizontally on a frictionless surface. What is the block's velocity as it leaves the spring?", c: ["1.0 m/s", "1.4 m/s", "2.0 m/s", "4.0 m/s"], a: 1 },
            { stem: "A cube with a total volume of 2 mÂ³ is floating in a liquid. The volume of fluid displaced is 0.5 mÂ³. If the density of the liquid is 800 kg/mÂ³, what is the buoyant force on the cube? (Use g = 10 m/sÂ²)", c: ["500 N", "800 N", "4000 N", "16000 N"], a: 2 },
            { stem: "An object has a density of 900 kg/mÂ³. When placed in fresh water (density 1000 kg/mÂ³), what percentage of the object will be submerged?", c: ["10%", "50%", "90%", "100%"], a: 2 },
            { stem: "In a hydraulic lift, a force of 100 N is applied to a small piston with an area of 10 cmÂ². What is the maximum mass that can be lifted by the large piston, which has an area of 200 cmÂ²? (Use g = 10 m/sÂ²)", c: ["100 kg", "200 kg", "1000 kg", "2000 kg"], a: 1 },
            { stem: "Water flows through a horizontal pipe. The radius of the wide section is 10 cm, and the radius of the narrow section is 5 cm. If the water's speed in the wide section is 2 m/s, what is its speed in the narrow section?", c: ["0.5 m/s", "1 m/s", "4 m/s", "8 m/s"], a: 3 },
            { stem: "The volume of an ideal gas is tripled, and its absolute temperature is halved. What is the effect on the pressure of the gas?", c: ["It decreases by a factor of 6", "It decreases by a factor of 3/2", "It increases by a factor of 3/2", "It increases by a factor of 6"], a: 0 },
            { stem: "Substance A has a specific heat capacity of 400 J/kgÂ°C. Substance B has a specific heat of 1200 J/kgÂ°C. If equal masses of both substances absorb the same amount of heat, what is the relationship between their temperature changes (Î”T_A and Î”T_B)?", c: ["Î”T_A = (1/3)Î”T_B", "Î”T_A = Î”T_B", "Î”T_A = 3Î”T_B", "Î”T_A = 9Î”T_B"], a: 2 },
            { stem: "A thermodynamic system has 200 J of work done *on* it, and it releases 50 J of heat to its surroundings. What is the change in the internal energy of the system?", c: ["-250 J", "-150 J", "+150 J", "+250 J"], a: 2 },
            { stem: "The rate of heat conduction (Q/t) through a glass window is 50 W. If the area of the window is doubled and its thickness is also doubled, what will be the new rate of heat conduction?", c: ["25 W", "50 W", "100 W", "200 W"], a: 1 },
            { stem: "Two particles, A and B, are held a distance `d` apart. Particle A experiences a repulsive force of 10 Î¼N. When the distance between them is halved to `d/2`, what is the new repulsive force on particle A?", c: ["2.5 Î¼N", "5 Î¼N", "20 Î¼N", "40 Î¼N"], a: 3 },
            { stem: "An electron (charge -e) is moved from a line of 20V potential to a line of 30V potential. What is the work done *by the electric field* on the electron?", c: ["-10e J", "+10e J", "-50e J", "+50e J"], a: 1 },
            { stem: "A charge of +4Q is located at x = -2d on the x-axis. A charge of +2Q is at x = +2d. What is the total electric potential at the origin (x = 0)?", c: ["kQ/d", "2kQ/d", "3kQ/d", "6kQ/d"], a: 2 },
            { stem: "A proton (a positive charge) is placed in a uniform electric field that points north. What is the direction of the electrostatic force on the proton?", c: ["North", "South", "East", "West"], a: 0 },
            { stem: "A wire's resistance is 10 Î©. If the wire is replaced by one of the same material, but with *twice the length* and *half the cross-sectional area*, what is the new resistance?", c: ["2.5 Î©", "5 Î©", "20 Î©", "40 Î©"], a: 3 },
            { stem: "An ideal battery with a constant voltage `V` is connected to a circuit with total resistance `R`. If the voltage `V` is doubled, what happens to the power dissipated by the circuit?", c: ["It is halved", "It is doubled", "It is quadrupled", "It stays the same"], a: 2 },
            { stem: "Two capacitors, Câ‚ = 3 Î¼F and Câ‚‚ = 6 Î¼F, are connected in series to a 12 V battery. What is the total charge stored in the system?", c: ["12 Î¼C", "24 Î¼C", "36 Î¼C", "108 Î¼C"], a: 1 },
            { stem: "The capacitance of a parallel plate capacitor is `C`. If the area of the plates is doubled and the distance between them is halved, what is the new capacitance?", c: ["C/4", "C", "2C", "4C"], a: 3 },
            { stem: "Two guitars play notes at 330 Hz and 334 Hz simultaneously. What is the beat frequency, and how much time elapses between successive beats?", c: ["4 Hz, 0.25 s", "4 Hz, 4.0 s", "664 Hz, 0.0015 s", "2 Hz, 0.5 s"], a: 0 },
            { stem: "Which of the following is an example of a longitudinal wave?", c: ["A light wave", "A wave on a guitar string", "A ripple in a pond", "A sound wave"], a: 3 },
            { stem: "The sound intensity level of a jet engine increases from 40 dB to 70 dB. By what factor does the sound *intensity* (in W/mÂ²) increase?", c: ["3", "30", "100", "1000"], a: 3 },
            { stem: "What is the fundamental frequency (n=1) of a 2.0 m pipe that is *closed at one end*? (Assume speed of sound v = 340 m/s)", c: ["42.5 Hz", "85 Hz", "170 Hz", "340 Hz"], a: 0 },
            { stem: "A person stands 3 m in front of a flat, plane mirror. How far behind the mirror is their image, and how far is the person from their image?", c: ["3 m behind; 3 m total", "3 m behind; 6 m total", "6 m behind; 6 m total", "6 m behind; 12 m total"], a: 1 },
            { stem: "An object is placed 15 cm in front of a converging lens with a 10 cm focal length. Which of the following describes the image formed?", c: ["Real, inverted, and larger", "Real, inverted, and smaller", "Virtual, upright, and larger", "Virtual, upright, and smaller"], a: 0 },
            { stem: "An object is placed 10 cm in front of a *diverging* lens that has a focal length of -10 cm. Which of the following describes the image formed?", c: ["Real, inverted, at 10 cm", "Virtual, upright, at 5 cm", "Real, inverted, at 5 cm", "No image is formed"], a: 1 },
            { stem: "To produce a magnified, upright, virtual image, what type of mirror should be used, and where must the object be placed?", c: ["Concave, between F and the mirror", "Concave, beyond C", "Convex, anywhere", "Plane, anywhere"], a: 0 },
            { stem: "A spinning disk with moment of inertia `I` rotates at angular velocity `Ï‰`. A second, non-rotating disk with moment of inertia `2I` is dropped on top, and it sticks. What is the final angular velocity of the combined system?", c: ["Ï‰/3", "Ï‰/2", "2Ï‰/3", "3Ï‰"], a: 0 },
            { stem: "A 10 kg mass and a 20 kg mass are attached to identical strings of length `L` to create two pendulums. How does the period of the 10 kg pendulum (Tâ‚) compare to the period of the 20 kg pendulum (Tâ‚‚)?", c: ["Tâ‚ = Tâ‚‚/2", "Tâ‚ = Tâ‚‚", "Tâ‚ = 2Tâ‚‚", "Tâ‚ = Tâ‚‚/âˆš2"], a: 1 },
            { stem: "The isotope Polonium-210 (Â²Â¹â°â‚ˆâ‚„Po) undergoes alpha decay. What is the resulting daughter nucleus?", c: ["Â²â°â¶â‚ˆâ‚‚Pb", "Â²Â¹â°â‚ˆâ‚‚Pb", "Â²Â¹â°â‚ˆâ‚…At", "Â²â°â¶â‚ˆâ‚†Rn"], a: 0 },
            { stem: "Which of the following lists contains *only* vector quantities?", c: ["Speed, Mass, Time", "Velocity, Force, Displacement", "Acceleration, Energy, Power", "Momentum, Work, Density"], a: 1 }
        ],
        // Practice Test 3
        [
            { stem: "An airplane accelerates from rest down a 3000 m runway for 30 seconds at a constant acceleration of 5 m/sÂ². What is its displacement when it takes off?", c: ["150 m", "2250 m", "3000 m", "4500 m"], a: 1 },
            { stem: "A block is thrown horizontally from a height h with an initial speed vâ‚€. What is its vertical speed v_y just before it strikes the ground? (Ignore air resistance.)", c: ["vâ‚€", "âˆš(2gh)", "âˆš(vâ‚€Â²+2gh)", "gh"], a: 1 },
            { stem: "A 50 kg woman is in an elevator that is accelerating upwards at 3 m/sÂ². What is the normal force acting on the woman from the elevator floor? (Use g = 10 m/sÂ²)", c: ["150 N", "350 N", "500 N", "650 N"], a: 3 },
            { stem: "A 10 kg painting is hung by two wires, each making a 30Â° angle with the horizontal ceiling. What is the tension in one of the wires? (Use g = 10 m/sÂ²)", c: ["50 N", "57.7 N", "100 N", "200 N"], a: 2 },
            { stem: "The graph shows velocity vs. time. What is the ratio of the acceleration from t=0 to t=5 (aâ‚) to the acceleration from t=10 to t=15 (aâ‚‚)?", c: ["-2", "-1", "1", "2"], a: 1 },
            { stem: "A block is released from rest on a ramp angled at 20Â°. The force of kinetic friction is f=Î¼_k F_N. How does f change if the angle is increased to 30Â°?", c: ["It increases", "It decreases", "It remains constant", "It becomes zero"], a: 1 },
            { stem: "Object A (mass m) moves right at 6 m/s. It collides head-on with Object B (mass m/2) moving left. After the collision both are at rest. What was B's initial speed?", c: ["3 m/s", "6 m/s", "9 m/s", "12 m/s"], a: 3 },
            { stem: "A 5 kg object is launched vertically at 20 m/s. Ignore air resistance. What is the maximum height? (g = 10 m/sÂ²)", c: ["10 m", "20 m", "40 m", "100 m"], a: 1 },
            { stem: "A 500 kg rollercoaster cart starts from rest at the top of a 30 m hill. Neglect friction. What is its speed when it is 10 m above the ground? (g = 10 m/sÂ²)", c: ["10 m/s", "20 m/s", "25 m/s", "30 m/s"], a: 1 },
            { stem: "A 50 g ball is whirled in a horizontal circle at constant speed of 5 m/s. What is the net work done on the ball during one complete revolution?", c: ["0 J", "0.5 J", "5 J", "10 J"], a: 0 },
            { stem: "A 1 kg ball on a 1.0 m string is swung in a horizontal circle. It completes 2 revolutions in 4 s. What is the tension in the string?", c: ["Ï€ N", "Ï€Â²/2 N", "Ï€Â² N", "2Ï€ N"], a: 2 },
            { stem: "A flywheel rotating at 10Ï€ rad/s decelerates uniformly to rest in 5 s. What is the angular acceleration?", c: ["-Ï€ rad/sÂ²", "-2Ï€ rad/sÂ²", "-5Ï€ rad/sÂ²", "-10Ï€ rad/sÂ²"], a: 1 },
            { stem: "Planet A has mass M and radius R. Planet B has mass 4M and radius 2R. What is the gravitational acceleration on Planet B (g_B) compared to Planet A (g_A)?", c: ["g_B = g_A/2", "g_B = g_A", "g_B = 2g_A", "g_B = 4g_A"], a: 1 },
            { stem: "Which scenario produces zero torque about pivot O?", c: ["Force F âŸ‚ at distance L", "Force F at 30Â° at L", "Force F âŸ‚ at L/2", "Force 2F parallel (180Â°) at L"], a: 3 },
            { stem: "A 10 N force at 1.0 m gives clockwise torque. What counterâ€‘clockwise force at 2.0 m balances it?", c: ["2.5 N", "5 N", "10 N", "20 N"], a: 1 },
            { stem: "A solid cylinder has mass 400 g, crossâ€‘section 10 cmÂ², length 5 cm. What is its density?", c: ["4 g/cmÂ³", "5 g/cmÂ³", "8 g/cmÂ³", "40 g/cmÂ³"], a: 2 },
            { stem: "A 100 g cube with side 2 cm is dropped into a fluid of density 15 g/cmÂ³. What is the cube's density?", c: ["12.5 g/cmÂ³", "15 g/cmÂ³", "25 g/cmÂ³", "50 g/cmÂ³"], a: 0 },
            { stem: "The average molecular KE at 100 K is KE. What is the average KE at 400 K?", c: ["KE/4", "2KE", "4KE", "16KE"], a: 2 },
            { stem: "A bimetal strip is copper (Î± = 17Ã—10â»â¶/Â°C) on left and aluminum (Î± = 23Ã—10â»â¶/Â°C) on right. When heated, which way does it bend?", c: ["Right (toward Al)", "Left (toward Cu)", "No bend", "Up"], a: 1 },
            { stem: "A +2.0 nC charge at x = âˆ’1 cm and a âˆ’2.0 nC charge at x = +1 cm. At origin, the field from + charge is E to the right. What is the total field at origin?", c: ["0", "E", "2E", "E/2"], a: 2 },
            { stem: "Two spheres with charge Q at separation d exert force F. If both charges become 3Q and distance becomes 3d, what is the new force?", c: ["F/9", "F/3", "F", "3F"], a: 2 },
            { stem: "Total potential at origin due to +2Q at x = âˆ’d and +Q at x = +d isâ€¦", c: ["kQ/d", "2kQ/d", "3kQ/d", "kQ/dÂ²"], a: 2 },
            { stem: "Which movement requires the most external work (equipotentials: A = âˆ’10 V, B = +10 V, C = 0 V, D = +30 V)?", c: ["Aâ†’B", "Bâ†’C", "Bâ†’D", "Aâ†’D"], a: 3 },
            { stem: "Which action increases resistance of a metal wire?", c: ["Decrease length", "Increase crossâ€‘section", "Decrease temperature", "Increase length"], a: 3 },
            { stem: "Across a 10 Î© resistor is 50 V. How much heat energy in 4 s?", c: ["200 J", "250 J", "1000 J", "10,000 J"], a: 2 },
            { stem: "Four identical 8 Î© resistors in parallel. Total equivalent resistance?", c: ["0.5 Î©", "2 Î©", "8 Î©", "32 Î©"], a: 1 },
            { stem: "Wire Wâ‚ has resistance R. Wire Wâ‚‚ (same material) has half the length and double the diameter. What is Râ‚‚?", c: ["R/8", "R/4", "R/2", "R"], a: 0 },
            { stem: "Rank EM waves from highest to lowest frequency:", c: ["Radio, Visible, Xâ€‘ray", "Xâ€‘ray, Radio, Visible", "Radio, Xâ€‘ray, Visible", "Xâ€‘ray, Visible, Radio"], a: 3 },
            { stem: "A wave has frequency 500 Hz. What is the period?", c: ["0.002 s", "0.02 s", "50 s", "500 s"], a: 0 },
            { stem: "A 0.5 m string fixed at both ends vibrates at second harmonic (n=2). Wave speed 300 m/s. Frequency?", c: ["150 Hz", "300 Hz", "600 Hz", "1200 Hz"], a: 2 },
            { stem: "A pencil before a plane mirrorâ€”true statement about the image?", c: ["Real, inverted, same size", "Real, upright, same size", "Virtual, inverted, same size", "Virtual, upright, same size"], a: 3 },
            { stem: "Object 30 cm from a converging lens (f = 10 cm). Describe the image.", c: ["Virtual, upright, larger", "Real, inverted, smaller", "Real, upright, larger", "Virtual, inverted, smaller"], a: 1 },
            { stem: "Object 20 cm before a diverging lens (f = âˆ’10 cm). Describe the image.", c: ["Real, inverted, at 10 cm", "Virtual, upright, smaller, at â‰ˆ 6.7 cm", "Real, inverted, smaller, at â‰ˆ 6.7 cm", "No image"], a: 1 },
            { stem: "To see a magnified, upright image in a concave mirror, object must be placedâ€¦", c: ["Between F and mirror", "At 2F", "Beyond 2F", "Anywhere"], a: 0 },
            { stem: "Massâ€“spring oscillator has period T. If k is quadrupled (m same), what happens to period?", c: ["T/4", "T/2", "2T", "Unchanged"], a: 1 },
            { stem: "Radioisotope halfâ€‘life 12 h. Start 160 mg. How much remains after 36 h?", c: ["10 mg", "20 mg", "40 mg", "80 mg"], a: 1 },
            { stem: "Which is NOT a unit of power?", c: ["W", "J/s", "NÂ·m/s", "JÂ·s"], a: 3 },
            { stem: "Walk 3 km E, 4 km N, 3 km W, 4 km S. Magnitude of displacement?", c: ["0 km", "3 km", "4 km", "5 km"], a: 0 },
            { stem: "Projectile with initial vertical component 20 m/s. Total time of flight? (g = 10 m/sÂ²)", c: ["1 s", "2 s", "3 s", "4 s"], a: 3 },
            { stem: "A 12 V battery connected to 3 Î© and 6 Î© in series. Voltage drop across 6 Î©?", c: ["4 V", "6 V", "8 V", "12 V"], a: 2 }
        ],
        // Practice Test 4
        [
            { stem: "A plane flies due north at 150 km/hr relative to the air. It encounters a strong crosswind blowing due east at 50 km/hr. What is the plane's speed relative to the ground?", c: ["100 km/hr", "158 km/hr", "175 km/hr", "200 km/hr"], a: 1 },
            { stem: "Four projectiles are launched with the same initial speed from ground level. Ignoring air resistance, which launch angle will produce the maximum horizontal range?", c: ["30Â°", "45Â°", "60Â°", "90Â°"], a: 1 },
            { stem: "A 40 kg crate is pushed across a floor at a *constant velocity* of 1.5 m/s. What is the net force acting on the crate?", c: ["0 N", "26.7 N", "40 N", "60 N"], a: 0 },
            { stem: "An airbag brings a 100 kg driver from an initial speed of 20 m/s to a complete stop in 0.10 seconds. What is the magnitude of the average force exerted by the airbag on the driver?", c: ["200 N", "2,000 N", "20,000 N", "200,000 N"], a: 2 },
            { stem: "A 40 kg box (A) and a 10 kg box (B) are linked by a rope on a frictionless table. A force of 100 N pulls on box A (the leading box). What is the tension in the rope connecting A and B?", c: ["20 N", "25 N", "80 N", "100 N"], a: 0 },
            { stem: "Light beam 'Alpha' has four times the wavelength of light beam 'Beta'. What is the ratio of the energy of beam 'Alpha' to the energy of beam 'Beta' (E_A : E_B)?", c: ["1:4", "1:2", "2:1", "4:1"], a: 0 },
            { stem: "A motor has an efficiency of 80%. It lifts a 20 kg object to a height of 10 m in 4.0 seconds. What is the required *input* power for the motor? (Use g = 10 m/sÂ²)", c: ["400 W", "500 W", "625 W", "2000 W"], a: 2 },
            { stem: "A 5 kg cart (Object 1) moving at 4 m/s to the right collides with a 15 kg cart (Object 2) moving at 6 m/s to the left. They stick together. What is their final velocity?", c: ["3.5 m/s to the left", "3.5 m/s to the right", "5.5 m/s to the left", "5.5 m/s to the right"], a: 0 },
            { stem: "A child pulls a 10 kg wagon with 50 N of force on a strap angled at 30Â° above the horizontal. How much work does the child do in pulling the wagon 20 m? (cos(30Â°) â‰ˆ 0.866)", c: ["500 J", "866 J", "1000 J", "1732 J"], a: 1 },
            { stem: "The graph shows a force acting on an object over time. The force increases linearly from 0 N to 40 N in 1 ms, stays at 40 N for 3 ms (from t=1 to t=4), then decreases linearly to 0 N at t=5 ms. What is the total impulse?", c: ["0.08 NÂ·s", "0.12 NÂ·s", "0.16 NÂ·s", "0.20 NÂ·s"], a: 2 },
            { stem: "Three identical masses m are attached to a massless rod at distances of 1 m, 3 m, and 4 m from a rotating axis. What is the total moment of inertia of the system?", c: ["m(8)", "m(14)", "m(26)", "m(36)"], a: 2 },
            { stem: "A person weighs 600 N on Earth. What would they weigh on a planet that has *half* Earth's mass and *half* Earth's radius?", c: ["300 N", "600 N", "1200 N", "2400 N"], a: 2 },
            { stem: "A massless beam has a fulcrum in the middle. Box A (mass m) hangs at distance 2r to the left. Box B (mass m) hangs at r to the left. Where must Box C (mass 3m) hang on the right to achieve equilibrium?", c: ["At distance r", "At distance 1.5r", "At distance 2r", "At distance 3r"], a: 0 },
            { stem: "A solid steel ball is sinking at a constant velocity in a deep lake. As it sinks deeper (while fully submerged), what happens to the buoyant force acting on it?", c: ["It increases", "It decreases", "It remains constant", "It decreases, then increases"], a: 2 },
            { stem: "Three containers (one narrow, one wide, one V-shaped) are all filled with water to the same height h. Which statement is true about the gauge pressure at the bottom of each container?", c: ["The narrowest has the highest pressure.", "The widest has the highest pressure.", "All three containers have the same pressure.", "The V-shaped one has the highest pressure."], a: 2 },
            { stem: "An object has a specific gravity of 0.80. When it floats in fresh water (specific gravity 1.0), what percentage of its volume will be *above* the water's surface?", c: ["20%", "40%", "80%", "100%"], a: 0 },
            { stem: "How much heat is required to raise 10 kg of iron from 20Â°C to 100Â°C? (The specific heat of iron is 450 J/kgÂ°C).", c: ["90,000 J", "360,000 J", "450,000 J", "4,500,000 J"], a: 1 },
            { stem: "Which law of thermodynamics states that the entropy of an isolated system tends to increase over time?", c: ["Zeroth Law", "First Law", "Second Law", "Third Law"], a: 2 },
            { stem: "An ideal gas undergoes a process at constant temperature. Which of the following must be true?", c: ["The work done is zero.", "The heat transfer is zero.", "The change in internal energy is zero.", "The pressure remains constant."], a: 2 },
            { stem: "A gas is heated in a sealed, rigid container. What type of thermodynamic process is this?", c: ["Isothermal", "Isobaric", "Isochoric", "Adiabatic"], a: 2 },
            { stem: "A positively charged rod is brought near the left side of two touching, neutral metal spheres (Sphere 1 on left, Sphere 2 on right). What will be the charge on Sphere 1 and Sphere 2?", c: ["1: Negative, 2: Positive", "1: Positive, 2: Negative", "1: Negative, 2: Negative", "1: Positive, 2: Positive"], a: 0 },
            { stem: "Four point charges are placed at the corners of a square: +Q, -Q, +Q, -Q, in clockwise order. What is the net electrostatic force on a positive test charge q placed at the exact center of the square?", c: ["Zero", "It points toward one of the -Q charges", "It points toward one of the +Q charges", "It points parallel to a side"], a: 0 },
            { stem: "Which of the following best describes the electric field lines produced by an isolated *negative* point charge?", c: ["They point radially outward.", "They point radially inward.", "They form clockwise circles.", "They form counter-clockwise circles."], a: 1 },
            { stem: "A circuit has two parallel branches between points 'a' and 'b'. The top branch has one 84 Î© resistor. The bottom branch has three resistors in series: 12 Î©, 16 Î©, and 14 Î©. What is the equivalent resistance between 'a' and 'b'?", c: ["28 Î©", "42 Î©", "84 Î©", "126 Î©"], a: 0 },
            { stem: "In the given circuit, two 6Î¼F capacitors are in series. This combination is in parallel with a 9Î¼F capacitor. This new combination is in series with a 12Î¼F capacitor. What is the total charge stored if connected to a 24V battery?", c: ["72 Î¼C", "144 Î¼C", "216 Î¼C", "288 Î¼C"], a: 1 },
            { stem: "Find the total resistance. A 6Î© and 3Î© resistor are in parallel. A 12Î© and 4Î© resistor are in parallel. These two parallel sections are connected by a 7Î© resistor in series.", c: ["7 Î©", "10 Î©", "12 Î©", "22 Î©"], a: 2 },
            { stem: "What is the maximum number of 100 W lightbulbs that can be connected in parallel to a standard 120 V household circuit before tripping a 15 A circuit breaker?", c: ["12", "15", "18", "1800"], a: 2 },
            { stem: "Two waves, A and B, travel on identical strings. Wave A has a wavelength of 4 m and Wave B has a wavelength of 2 m. What is the ratio of the frequency of Wave A to Wave B (f_A : f_B)?", c: ["1:1", "1:2", "2:1", "4:1"], a: 1 },
            { stem: "Two identical waves meet in a medium. If they are 180Â° out of phase, what type of interference occurs?", c: ["Constructive, resulting in a larger amplitude", "Destructive, resulting in a smaller amplitude", "Total destructive, resulting in zero amplitude", "Resonance"], a: 2 },
            { stem: "A sound wave travels from air (speed 340 m/s) into glass (speed 3400 m/s). What happens to the wave's frequency and wavelength?", c: ["Frequency increases, wavelength increases", "Frequency is constant, wavelength increases", "Frequency is constant, wavelength decreases", "Frequency decreases, wavelength is constant"], a: 1 },
            { stem: "An object is placed 30 cm in front of a concave mirror. A real, inverted image is formed at the *same location*. What is the focal length of the mirror?", c: ["15 cm", "30 cm", "45 cm", "60 cm"], a: 0 },
            { stem: "A farsighted person (hyperopia) sees distant objects clearly, but near objects are blurry. Where does the image of a near object form, and what type of lens corrects this?", c: ["In front of the retina; concave lens", "Behind the retina; concave lens", "In front of the retina; convex lens", "Behind the retina; convex lens"], a: 3 },
            { stem: "A nearsighted person (myopia) sees near objects clearly, but distant objects are blurry. Where does the image of a distant object form, and what type of lens corrects this?", c: ["In front of the retina; concave lens", "Behind the retina; concave lens", "In front of the retina; convex lens", "Behind the retina; convex lens"], a: 0 },
            { stem: "A ray of light enters glass (n=1.50) from air (n=1.00). If the angle of incidence is 30.0Â°, what is the angle of refraction? (sin(30.0Â°) = 0.500)", c: ["19.5Â°", "22.5Â°", "30.0Â°", "48.6Â°"], a: 0 },
            { stem: "A simple pendulum oscillates back and forth. At which point of its motion is its kinetic energy at a maximum and its potential energy at a minimum?", c: ["At the highest point of its swing", "At the lowest (equilibrium) point", "When it is halfway to the top", "The energy is constant, so KE and PE are always equal"], a: 1 },
            { stem: "Four pendulums are constructed: (1) L=1m, m=1kg; (2) L=1m, m=2kg; (3) L=2m, m=1kg; (4) L=2m, m=2kg. Which pair of pendulums will have the same period?", c: ["1 and 3", "2 and 4", "1 and 4", "1 and 2"], a: 3 },
            { stem: "Which of the following is a unit of energy or work, but *not* a unit of power?", c: ["Watt", "Joule / second", "Newton-meter", "kgÂ·mÂ²/sÂ³"], a: 2 },
            { stem: "The 'Ampere-hour' (AÂ·h) is a unit often used to describe battery capacity. What physical quantity does this unit measure?", c: ["Energy", "Power", "Current", "Charge"], a: 3 },
            { stem: "An object is acted upon by three forces: 10 N East, 10 N West, and 20 N North. What is the net force on the object?", c: ["0 N", "20 N North", "20 N South", "40 N North-East"], a: 1 },
            { stem: "A proton (Â¹â‚p) collides with a nucleus to produce Nitrogen-13 and a neutron (Â¹â‚€n). What was the original nucleus? ( ? + Â¹â‚p â†’ Â¹Â³â‚‡N + Â¹â‚€n )", c: ["Â¹Â³â‚‡N", "Â¹Â²â‚†C", "Â¹Â³â‚†C", "Â¹Â²â‚‡N"], a: 2 }
        ],
        // Practice Test 5
        [
            { stem: "A car traveling at 12 m/s begins to slow down at a constant rate of 3 m/sÂ². How far does it travel before it comes to a complete stop?", c: ["4 m", "18 m", "24 m", "36 m"], a: 2 },
            { stem: "A bullet traveling at 200 m/s hits a block and burrows 10 cm into it before stopping. What was the magnitude of the bullet's average acceleration while stopping?", c: ["2,000 m/sÂ²", "20,000 m/sÂ²", "200,000 m/sÂ²", "2,000,000 m/sÂ²"], a: 2 },
            { stem: "A v-t graph shows velocity going from (0s, 20m/s) to (5s, 0m/s), then from (5s, 0m/s) to (10s, -20m/s), then from (10s, -20m/s) to (15s, 0m/s). What is the total displacement from t=0 to t=15s?", c: ["+100 m", "+50 m", "0 m", "-50 m"], a: 3 },
            { stem: "A person drives 90 miles to work in 30 minutes. They drive back home along the same route, also taking 30 minutes. What is their average velocity for the entire round trip?", c: ["0 mph", "45 mph", "90 mph", "180 mph"], a: 0 },
            { stem: "A 20 kg block rests on the ground. A person pulls up on it with a rope, exerting a force of 50 N. The block remains at rest. What is the magnitude of the normal force? (Use g = 10 m/sÂ²)", c: ["50 N", "150 N", "200 N", "250 N"], a: 1 },
            { stem: "A 5 kg object slides on a horizontal surface, decelerating at 2.0 m/sÂ² due solely to friction. What is the coefficient of kinetic friction between the object and the surface? (Use g = 10 m/sÂ²)", c: ["0.1", "0.2", "0.4", "0.5"], a: 1 },
            { stem: "Which of the following scenarios is a direct application of Newton's Third Law?", c: ["A book stays at rest on a table due to balanced forces.", "A hockey puck slides at a constant velocity on ice.", "A man pushes on a wall, and the wall exerts an equal and opposite force on the man.", "The force of gravity on an object is Fg = mg."], a: 2 },
            { stem: "A 5 kg block starts from rest on a frictionless 30Â° incline. What is its velocity after sliding for 2.0 seconds? (Use g = 10 m/sÂ², sin(30Â°)=0.5)", c: ["2.5 m/s", "5.0 m/s", "8.7 m/s", "10.0 m/s"], a: 3 },
            { stem: "A block slides 5 m down a rough incline. Which force does zero work on the block?", c: ["Gravity", "Friction", "Normal Force", "Air Resistance"], a: 2 },
            { stem: "Which of the following objects possesses gravitational potential energy (relative to the ground) but possesses zero kinetic energy?", c: ["A book resting on a 2m high shelf.", "A spring stretched 10 cm.", "A balloon rising at a constant 1 m/s.", "A rock held in a pulled-back slingshot."], a: 0 },
            { stem: "A change in an object's mass would affect all of the following quantities EXCEPT:", c: ["Its Kinetic Energy", "Its Gravitational Potential Energy", "Its Momentum", "Its Gravitational Acceleration (g) in free fall"], a: 3 },
            { stem: "A constant 1000 N force moves a car 100 m, and the task takes 10 seconds. This requires work Wâ‚. If the same 1000 N force moves the same car 100 m in 20 seconds (requiring work Wâ‚‚), how does Wâ‚‚ compare to Wâ‚?", c: ["Wâ‚‚ = 0.5 * Wâ‚", "Wâ‚‚ = Wâ‚", "Wâ‚‚ = 2 * Wâ‚", "Wâ‚‚ = 4 * Wâ‚"], a: 1 },
            { stem: "Calculate the total mechanical energy of a 2 kg eagle flying at 15 m/s at an altitude of 50 m. (Use g = 10 m/sÂ²)", c: ["225 J", "1000 J", "1225 J", "2250 J"], a: 2 },
            { stem: "An object with mass 2.0 kg has a linear momentum of 10.0 kgÂ·m/s. What is its kinetic energy?", c: ["5 J", "20 J", "25 J", "50 J"], a: 2 },
            { stem: "If the net force acting on an object of constant mass is zero, which of the following quantities must also be constant?", c: ["Acceleration", "Momentum", "Position", "Both A and B"], a: 3 },
            { stem: "A bug sits on the edge of a 0.5 m radius disk rotating at a constant angular velocity of 4 rad/s. What is the bug's centripetal acceleration?", c: ["2 m/sÂ²", "4 m/sÂ²", "8 m/sÂ²", "16 m/sÂ²"], a: 2 },
            { stem: "An object is in uniform circular motion. Which of the following properties is not constant?", c: ["Mass", "Speed", "Kinetic Energy", "Velocity"], a: 3 },
            { stem: "The gravitational force between two stars of mass mâ‚ and mâ‚‚ is F. If the mass of both stars is doubled (to 2mâ‚ and 2mâ‚‚) and the distance between them is also doubled (to 2r), what is the new force?", c: ["F/4", "F/2", "F", "2F"], a: 2 },
            { stem: "A 1000 kg car travels on a circular track of radius 50 m. The coefficient of static friction is 0.8. What is the maximum speed the car can travel without sliding? (Use g = 10 m/sÂ²)", c: ["10 m/s", "20 m/s", "28 m/s", "40 m/s"], a: 1 },
            { stem: "A 10 m uniform rod has a fulcrum at its center (the 5 m mark). A 4 kg mass is hung at the 10 m end (5 m from fulcrum). Where must an 8 kg mass be hung to balance the rod?", c: ["At the 2.5 m mark", "At the 6.25 m mark", "At the 7.5 m mark", "At the 8.75 m mark"], a: 2 },
            { stem: "A net torque applied to a rigid, non-rotating body will produce which of the following?", c: ["Linear acceleration", "Rotational equilibrium", "Angular acceleration", "Constant angular velocity"], a: 2 },
            { stem: "A 15 m massless beam has a fulcrum at the 5 m mark. A 6 kg mass hangs at the 0 m mark (5 m left of fulcrum). A 3 kg mass hangs at the 2 m mark (3 m left of fulcrum). What mass mâ‚ƒ must be hung at the 15 m mark (10 m right of fulcrum) to balance?", c: ["3.0 kg", "3.9 kg", "6.3 kg", "9.0 kg"], a: 1 },
            { stem: "The pressure on a submerged object is given by P = Pâ‚€ + Ïgh. Which of the following factors does not affect the gauge pressure on the object?", c: ["The depth of the object", "The density of the fluid", "The acceleration of gravity", "The shape of the container"], a: 3 },
            { stem: "A U-tube contains water (density Ï_w). Benzene (density Ï_b) is poured into the right arm. At equilibrium, the water is a height h_w above the interface and the benzene is h_b above the interface. What is the formula for the density of benzene?", c: ["Ï_b = Ï_w (h_w / h_b)", "Ï_b = Ï_w (h_b / h_w)", "Ï_b = Ï_w (h_w + h_b)", "Ï_b = Ï_w (h_b - h_w)"], a: 0 },
            { stem: "Which of the following conditions must be true for an object to float, in a state of static equilibrium, in a fluid?", c: ["The object's density is greater than the fluid's density.", "The object's weight is equal to the weight of the fluid it displaces.", "The buoyant force is greater than the object's weight.", "The object's volume is equal to the volume of fluid displaced."], a: 1 },
            { stem: "A mercury barometer (Ï_Hg = 13,600 kg/mÂ³) reads 0.76 m. If it were filled with water (Ï_water = 1000 kg/mÂ³) instead, what would the height of the water column be?", c: ["0.76 m", "5.59 m", "10.3 m", "13.6 m"], a: 2 },
            { stem: "A gas in a sealed cylinder is heated and pushed against a piston, undergoing an isothermal expansion. Which statement is true for this process?", c: ["The change in internal energy is zero.", "The work done by the gas is zero.", "The heat added to the system is zero.", "The volume remains constant."], a: 0 },
            { stem: "An adiabatic process is defined as a thermodynamic process in which...", c: ["Pressure is constant.", "Volume is constant.", "Temperature is constant.", "No heat is gained or lost."], a: 3 },
            { stem: "The triple point of a substance represents the specific temperature and pressure at which...", c: ["The substance is most dense.", "Only the solid and liquid phases are in equilibrium.", "The substance becomes a plasma.", "Solid, liquid, and gas phases coexist in equilibrium."], a: 3 },
            { stem: "Which of the following is NOT an assumption of the kinetic molecular theory of ideal gases?", c: ["Collisions between particles are perfectly elastic.", "The average kinetic energy of particles is directly proportional to their temperature in Kelvin.", "The kinetic energy of gas particles is inversely proportional to their temperature.", "There are no attractive or repulsive forces between particles."], a: 2 },
            { stem: "A metal block 'X' has a charge of +2 C, and an identical block 'Y' has a charge of -5 C. If they are connected by a conducting wire, in which direction will conventional current flow?", c: ["From X to Y", "From Y to X", "No current will flow", "Current flows from both blocks to the wire"], a: 0 },
            { stem: "Two positive charges (+Q) are at opposite corners of a square. What is the direction of the net electric field at point P, an empty corner adjacent to both charges?", c: ["Diagonally away from the center of the square", "Diagonally toward the center of the square", "Parallel to the side, towards the other +Q", "The net field is zero"], a: 0 },
            { stem: "A 120 V household circuit is protected by a 10 A circuit breaker. What is the maximum number of 60 W lightbulbs that can be safely run in parallel on this circuit?", c: ["10", "12", "20", "24"], a: 2 },
            { stem: "A 12 A current flows through a series circuit containing Râ‚=1Î©, Râ‚‚=2Î©, and Râ‚ƒ=4Î©. Rank the voltage drops (Vâ‚, Vâ‚‚, Vâ‚ƒ) from smallest to largest.", c: ["Vâ‚ƒ < Vâ‚‚ < Vâ‚", "Vâ‚ = Vâ‚‚ = Vâ‚ƒ", "Vâ‚ < Vâ‚‚ < Vâ‚ƒ", "Vâ‚‚ < Vâ‚ < Vâ‚ƒ"], a: 2 },
            { stem: "Circuit A has three identical resistors R in series with a battery V. Circuit B has one resistor R with the same battery V. What is the current in A (I_A) compared to the current in B (I_B)?", c: ["I_A = 3 * I_B", "I_A = I_B", "I_A = (1/3) * I_B", "I_A = (1/9) * I_B"], a: 2 },
            { stem: "What is the primary effect of increasing the temperature of the air on a sound wave traveling through it?", c: ["Its speed increases.", "Its speed decreases.", "Its frequency increases.", "Its frequency decreases."], a: 0 },
            { stem: "A wave's velocity v is held constant. If its wavelength Î» is decreased by a factor of 3, what happens to its period T?", c: ["It increases by a factor of 3.", "It decreases by a factor of 3.", "It stays the same.", "It increases by a factor of 9."], a: 1 },
            { stem: "An object is placed 20 cm in front of a concave mirror with a radius of curvature of 20 cm. Where is the image formed?", c: ["10 cm in front", "20 cm in front", "40 cm in front", "10 cm behind"], a: 1 },
            { stem: "Which of the following changes would not affect the focal length of a glass lens in air?", c: ["Decreasing the curvature of the lens", "Changing the direction of the incoming light", "Using a glass with a higher refractive index", "Submerging the lens in water"], a: 1 },
            { stem: "The radioactive isotope Gold-196 (Â¹â¹â¶â‚‡â‚‰Au) undergoes alpha decay. What is the resulting daughter nuclide?", c: ["Â¹â¹Â²â‚‡â‚‡Ir", "Â¹â¹â¶â‚‡â‚ˆPt", "Â¹â¹Â²â‚‡â‚‰Au", "Â¹â¹âµâ‚‡â‚†Os"], a: 0 },
            { stem: "A converging lens has focal length +0.10 m. What is its power in diopters?", c: ["+0.1 D", "+1 D", "+10 D", "+100 D"], a: 2 }
        ]
    ]
};

/* Theme toggle and settings panel behavior */
(function(){
    var THEME_KEY = 'site-theme-v2';

    function applyTheme(theme){
        if(theme === 'dark'){
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }
        try{ localStorage.setItem(THEME_KEY, theme); }catch(e){}
    }

    function initTheme(){
        var saved = null;
        try{ saved = localStorage.getItem(THEME_KEY); }catch(e){}
        if(saved !== 'dark' && saved !== 'light') saved = 'light';
        applyTheme(saved);
        var toggle = document.getElementById('theme-toggle');
        if(toggle) toggle.checked = (saved === 'light');
    }

    document.addEventListener('DOMContentLoaded', function(){
        initTheme();
        var settingsBtn = document.getElementById('settings-btn');
        var settingsPanel = document.getElementById('settings-panel');
        var toggle = document.getElementById('theme-toggle');
        if(settingsBtn && settingsPanel){
            settingsBtn.addEventListener('click', function(){
                settingsPanel.classList.toggle('hidden');
            });
        }
        if(toggle){
            toggle.addEventListener('change', function(e){
                applyTheme(e.target.checked ? 'light' : 'dark');
            });
        }
    });
})();

// Reading Comprehension Passages
const readingComprehensionPassages = {
    "Reading Comprehension": [
        // Practice Test 1 - 3 passages
        [
            {
                id: "p1",
                title: "Inflammation",
                text: `(1) The Roman writer Celsus, of the first century AD, was the first to describe the four cardinal signs of inflammation: rubor, fumor, calor, and dolor (redness, swelling, heat, and pain). We now understand inflammation to be a complex reaction that involves the coordination of intricate processes, with many chemical and cellular mediators. It is fundamentally a protective response with a goal of ridding the organism of both the cause of tissue injury, such as microbes and toxins, as well as the consequences of tissue injury, such as the presence of necrotic, or dead, cells.

(2) Inflammation can be divided into two patterns. Acute inflammation lasts for as little as a few minutes and up to a few days; it results in the exudation of fluid, blood proteins, and leukocytes (white blood cells), predominantly neutrophils, into injured tissues. Chronic inflammation, on the other hand, lasts longer and is characterized by the presence of mononuclear white blood cells, including lymphocytes (B cells and T cells) and macrophages; it is also accompanied by the proliferation of blood vessels, fibrosis, and tissue necrosis in the injured tissue. Inflammation is terminated when the injurious stimulus is removed and chemical mediators are dissipated.

(3) Celsus's four cardinal signs match observations of acute inflammation, specifically. The rubor and calor he described result from the first major component of acute inflammation: alterations in vasculature in the area of injury. Vascular changes include immediate vasodilation of arterioles and opening of new capillary beds in the area, which brings about the heat and redness observed at sites of superficial injury.

(4) The fumor and dolor observed by Celsus can be mainly attributed to the other two components of acute inflammation: changes in microvascular permeability, allowing leukocytes and rich protein exudate to exit the bloodstream and enter the interstitial tissues, and the accumulation of leukocytes in the area of injury. Changes in microvasculature normally appear within a few minutes of tissue injury or infection. The occurrence of these processes is rapid and makes the vessels become more permeable, resulting in the entry of inflammatory mediators and producing interstitial swelling or edema.

(6) White blood cells are recruited to the area from a diverse group of chemotactic agents, including microbial endotoxins holding amino terminal N-formyl methionyl groups present on bacterial cells and interleukins released by damaged cells. Basophilic cells, or "basophils," containing secretory granules secrete platelet activating factor, histamine, and leukotriene B, which can trigger intense leukocyte infiltration within a few minutes. Among the leukocytes, neutrophils are the first inflammatory cells that are recruited to the site.

(7) Infiltration of tissues by white blood cells also requires their adhesion to the endothelial cells lining blood vessels and transmigration out of the bloodstream and into the interstitium. Adhesion is mediated by the interaction between integrins (CDII/CDI8) and adhesion molecules (CAM-I and CAM-2) expressed on white blood cells and endothelial cells, respectively, as well as selectin molecules produced by both cells. The selectin group of CAM contains three families: P-selectin and E-selectin produced by endothelial cells and L-selectin produced by white blood cells. Following a period of stationary adhesion, the white blood cells leave postcapillary venules, extending pseudopodia, or foot processes, between endothelial cells and reaching into the subendothelial space. This complex event is often referred as white blood cell extravasation and transendothelial migration.

(8) Chronic inflammation is distinguished from acute inflammation by the presence of mononuclear infiltration (ie. infiltration with lymphocytes and macrophages), fibroblast proliferation, collagen fibers, and connective tissue formation. This ultimately results in granuloma formation - the formation of clumps of white blood cells that serve to wall off pathogens, foreign objects, or other irritants that the body is reacting to. With chronic inflammation, tissue degeneration and necrosis can occur, due to the presence of nitrogen species, proteases, and reactive oxygen species (ROS) released from infiltrated inflammatory cells.

(9) The purpose of inflammation is to walll off and destroy an injurious agent or remove damaged cells, but inflammation sets off a series of events that itself results in further tissue damage. As such, inflammatory processes must be closely intertwined with repair processes. Repair begins during the early phases of inflammation. It consists of regeneration and replacement of parenchymal cells (cells that occupy most of the tissue volume), as fibroblasts fill in defects with fibroblastic or scar tissue. Scar tissue is composed of collagen, a tough and fibrous protein that forms the framework of connective tissue in the body. The collagen in scar tissue is abundant, disorganized and lacks the normal structure and strength of healthy tissue. Over time, the body may gradually remodel the scar tissue, replacing it with new collagen that is more similar in structure and function to the collagen in healthy tissue.

(10) Without inflammation and repair, infections would go unchecked and wounds would never heal. However, the processes involved in inflammation and repair can also become harmful in some cases. Inflammatory reactions can cause acute life-threatening hypersensitivity reactions, such as anaphylactic shock. Inflammatory processes can also cause chronic autoimmune diseases, such as multiple sclerosis and rheumatoid arthritis, where our immune cells attack our normal tissues. Furthermore, repeated injury and scarring can lead to osteoarthritis, plaque formation in blood vessels, lung fibrosis, and other chronic conditions.

(11) Anti-inflammatory drugs used to treat both acute inflammatory condition and chronic inflammatory diseases are either steroidal (e.g., betamethasone, prednisolone, and dexamethasone) or nonsteroidal (e.g. aspirin, diclofenac, ibuprofen, indomethacin. naproxen, nimesulide, and celecoxib). However, their prolonged use is associated with various side effects; for example, steroidal drugs cause adrenal atrophy, osteoporosis, suppression of response to infection or injury, and eye conditions such as cataracts and glaucoma; non-steroidal drugs cause peptic ulcers and bronchospasm due to blockade of both the physiological and inflammatory prostaglandins and concurrent production of leukotrienes.

(12) Taking into account the adverse effects and high cost of conventionally available synthetic drugs, increasingly many scientists are searching for new anti-inflammatory agents from herbal sources, with the objective to find safer, more effective, and more economical ways to treat inflammation. Herbal medicine continues to be an accepted form of treatment in Asia, and plant drugs based on traditional practice represent a huge portion of the pharmaceutical products in modern Western countries. Even in the West, there are countless reasons for the public's adoption of herbal medications, including the perception that natural is better, prevalent fear and distrust of synthetic pharmeceuticals, and disappointment with allopathic care.`
            },
            {
                id: "p2",
                title: "Fossil Dating",
                text: `(1) Fossils are the remains or traces of once-living organisms that have been preserved in rocks. Fossil dating employs a variety of methods to determine the age of fossils. These methods include relative dating, radiometric dating, and other techniques. While these methods have been successful in many cases, they have limitations that must be taken into consideration.

(2) Relative dating is the oldest and most straightforward method of fossil dating. This can involve, for instance, determining the age of a fossil based on its position relative to other fossils and rock layers. This method relies on the principle of superposition, which states that in undisturbed rock layers, the oldest layers are at the bottom and the youngest layers are at the top. Another related method of relative dating is biostratigraphy, which uses the presence or absence of certain fossil species to determine the age of a fossil-bearing rock layer. This method is useful because certain fossils are only found in specific time periods, so their presence in a rock layer can be used to determine its age.

(3) While relative dating is useful, it has limitations. One limitation is that it can only provide a relative age for fossils, not an absolute age. This means that while we can determine which fossils are older or younger than others, we cannot assign a specific age to them.

(4) Radiometric dating is a method of absolute dating that is based on the decay of radioactive isotopes. Radioactive isotopes are unstable and decay over time, releasing energy in the form of radiation. By measuring the amount of each isotope in a sample, scientists can determine how long it has been since the sample was formed. The most common radiometric dating method is carbon-14 dating, which is used to date organic materials up to about 50,000 years old. Other radiometric dating methods include uranium-lead dating and potassium-argon dating, which are both used to date rocks that are millions or billions of years old. These methods are based on the decay of isotopes of uranium and potassium, respectively.

(5) Carbon-14 dating, also known as "radiocarbon dating," determines the age of an object containing organic material by measuring the amount of carbon-14, or "radiocarbon," it contains. Carbon-14 is an isotope of carbon that is formed in the Earth's atmosphere when cosmic rays collide with nitrogen atoms. Although the vast majority of the carbon in the atmosphere is carbon-12, and the rest of it is mostly carbon-13, there are always trace amounts of carbon-14, which is unstable and radioactive relative to the other two isotopes. Some carbon-14 is taken up by plants during photosynthesis and animals consume these plants such that, when an organism is alive, the ratio of carbon-14 to carbon-12 in its body roughly matches the ratio of carbon-14 to carbon-12 in the atmosphere. When an organism dies, it stops taking in carbon-14, and the carbon-14 in its body begins to decay to nitrogen at a predictable rate. Each decaying carbon-14 undergoes beta emission, releasing an electron in the process.

(6) By measuring the amount of carbon-14 remaining in a sample of organic material, scientists can estimate how long ago the organism died. The half-life of carbon-14 is approximately 5,700 years, meaning that after 5,700 years, half of the carbon-14 in a sample will have decayed into nitrogen-14, and after another 5,700 years, the amount of carbon-14 in the sample will be halved again. Carbon-14 dating is particularly useful for dating materials that are up to 50,000 years old, such as fossils, archaeological artifacts, and ancient human remains. However, it is not as reliable for materials that are older than this, as the amount of carbon-14 left in the sample becomes too small to accurately measure.

(7) Even in samples that are not as old, radiometric dating requires a certain amount of material to be analyzed that may not always be available. Additionally, radiometric dating can be affected by contamination, which can alter the ratio of isotopes in a sample and produce inaccurate results. Accurate carbon-14 dating requires the sample to be free of contamination from other sources of carbon, such as humic acids found in soil or carbonates in rocks.

(8) Other limitations involve certain assumptions of carbon-14 dating that may not always be accurate. This includes the assumption that the rate of decay of isotopes has remained constant over time, but may not always be the case, as there are several factors that can affect the rate of decay, such as temperature and pressure. In addition, radiometric dating assumes that the rate of carbon-14 production in the atmosphere has been constant over time, and that the ratio of carbon-14 to carbon-12 in the atmosphere has remained stable. In reality, in modern times, many changes in carbon-14 have been caused by factors including, but not limited to, fluctuations in the earth's geomagnetic moment, fossill fuel burning, and nuclear testing.

(9) Fortunately, scientists have developed several calibration methods that help to account for changes in global radiocarbon concentrations over time. One of the most popular methods uses dendrochronology. Dendrochronologists use tree rings, which grow at predictable patterns from the center of the tree outwards, to date events and variations in the past. They can provide truly accurate ages for certain events and can be used as a point of comparison for radiocarbon ages. Libraries of tree rings of different calendar ages are now available to provide records extending back over the last 11,000 years. The trees often used as references are the bristlecone pine (Pinus aristata) found in the USA and waterlogged oak (Quercus sp.) in Ireland and Germany.

(10) In principle, the age of a certain carbon-containing sample can be easily determined by comparing its carbon-14 content to that of a tree ring with a known calendar age. If a sample has the same proportion of radiocarbon as that of the tree ring, it is safe to conclude that they are of the same age. In practice, this method usually yields a range of possible calendar years, due to the limited precision on the individual measurements made on both the tree ring and the sample of interest. Thus, the results of calibration are often given as an age range rather than an absolute value.`
            },
            {
                id: "p3",
                title: "Epidemiology",
                text: `(1) In August 1854, a sudden outbreak of cholera occurred in the Soho neighborhood of London. Hundreds of people became sick, and many died within a few days. The prevailing theory at the time was that cholera was transmitted through the air, or "miasma," rather than through contaminated water or food.

(2) John Snow, a physician and epidemiologist, was skeptical of the miasma theory and suspected that contaminated water was the source of the outbreak. He mapped the cases of cholera and found that many of them were clustered around the Broad Street water pump. Snow hypothesized that the water from the pump was contaminated with cholera, and he convinced local officials to remove the pump handle to prevent people from using it.

(3) The removal of the pump handle led to a dramatic reduction in the number of cholera cases in the area, providing strong evidence that contaminated water was the source of the outbreak. Snow's work on the Broad Street cholera outbreak is now considered a seminal moment in the history of epidemiology, as it demonstrated the importance of careful observation, data analysis, and hypothesis testing in understanding disease outbreaks.

(4) Another early example of the use of epidemiology to solve a disease outbreak occurred in the early 1900s in New York City. The outbreak was eventually traced back to Mallon Mary Malllon, also known as "Typhoid Mary," a cook who had unknowingly been carrying the bacteria that cause typhoid fever and infecting numerous people through her cooking. Epidemiologist George Soper tracked down Mallon and convinced her to submit to testing, which confirmed that she was a carrier of the typhoid bacteria. Mallon was quarantined for several years to prevent her from spreading the disease, and her case highlighted the importance of identifying carriers of infectious diseases in preventing disease outbreaks.

(5) Epidemiologists continue to play a major role in disease surveillance, which now involves more sophisticated methods of monitoring and tracking the occurrence and spread of diseases in populations, identifying control measures to prevent further spread of diseases, and implementing those measures. In addition, epidemiologists also play a critical role in disease prevention by identifying the causes and risk factors of diseases and understanding how they spread through populations. Epidemiologists use various research methods to study patterns of disease occurrence and distribution and to identify strategies for preventing or controlling the spread of diseases.

(6) There are two commonly used measures of disease frequency that epidemiologists use to track diseases within a population: one is a measure of new disease cases and is called incidence, and the other is a measure of existing disease and is called prevalence.

(7) Incidence can be calculated by dividing the number of new cases of disease over a certain time period by the number of individuals in a population of interest. Epidemiologists may discuss the overall incidence of disease in a given population or discuss incidence within subgroups - for instance, smokers or construction workers. They use incidence to understand the risk of developing a disease, as well as to identify trends in disease occurrence over time. They may also use incidence data to monitor the effectiveness of a prevention program or to identify changes in disease patterns in response to changes in the environment or behavior.

(8) Prevalence can be calculated by dividing the total number of cases of disease at a given time by the total population of interest at the same time. Epidemiologists use prevalence to estimate the overalll burden of disease in a population or subgroup, as well as to identify risk factors and disparities in disease cases.

(9) By studying the incidence and prevalence of diseases in populations, epidemiologists can identify risk factors that contribute to the development of diseases. They can then design prevention strategies that target these risk factors to reduce the overall burden of disease in the population. Prevention strategies are categorized into three main types: primary, secondary, and tertiary prevention.

(10) Primary prevention denotes steps taken to prevent the initial occurrence of a disease or health condition in persons who are well and do not have the disease, by addressing the underlying causes and risk factors and preventing exposure to potential hazards. Examples of primary prevention include vaccinating healthy individuals against infectious diseases and encouraging healthy lifestyle changes in people who don't yet have the disease being prevented. Primary prevention should be our ultimate goal. For instance, we know that most lung cancers are preventable. If we can eliminate smoking, we can eliminate approximately 80-90% of lung cancer in human beings. However, for many diseases, such as Alzheimer's disease and prostate cancer, we do not have the biological, clinical, and epidemiological data or tools on which to base such effective primary interventions.

(11) Secondary prevention in epidemiology is a strategy aimed at early detection and intervention of a disease or health condition, in order to prevent or delay its progression. By identifying the disease early in its natural history, when the disease has not yet led to clinical symptoms, secondary prevention can help to reduce the morbidity, mortality, and economic burden associated with chronic diseases. Examples of secondary prevention include regular screenings, such as mammograms and colonoscopies, and blood pressure screening to identify high blood pressure early, before it leads to consequences such as heart disease and stroke.

(12) Finally, tertiary prevention aims to manage and treat an existing disease or health condition to prevent further complications and disabilities. For example, cardiac rehabilitation following a heart attack can help individuals regain strength and reduce the risk of future heart problems. For individuals with chronic diseases, such as diabetes, managing the condition through diet and lifestyle changes can prevent complications and improve quality of life. Similarly, physical therapy after a serious injury or illness can help individuals regain mobility and strength and prevent further disability.

(13) Throughout the 1900s, epidemiology has been instrumental in containing infectious disease, which has drastically decreased infection-related deaths in developed nations. For instance, the World Health Organization (WHO) planned its global smallpox vaccination campaign in 1967 using epidemiological data that showed the regions and populations in which the disease was most prevalent; by 1980, smallpox was officially declared eradicated. Epidemiological studies also helped to identify poliovirus and its transmission patterns and have been used to guide vaccination campaigns in affected regions; the number of polio cases has now decreased by over 99% since 1988. Lastly, epidemiological data has been used to track the disease statistics, transmission patterns, and risk factors for HIV/AIDS; the global response to HIV has averted 16 million deaths since 2000, and the number of new HIV infections has declined by 39% since the peak in 1997.

(14) Furthermore, epidemiological studies have been critical in implementing prevention programs for many non-infectious diseases, such as cardiovascular disease and cancer. For instance, programs that promote smoking cessation and healthy eating habits in patients with cardiovascular disease have led to a 70% decline in the death rate from heart attacks and strokes since the 1960s. In addition, anti-smoking campaigns and workplace safety regulations have led to a decline in both cancer incidence and cancer-related deaths since their peak in 1991. Regulations on asbestos and lead exposure have significantly reduced the incidence of lung cancer and other cancers associated with these substances. Similarly, regulations on benzene and other chemicals have helped to reduce the risk of leukemia and other cancers linked to exposure to these compounds.`
            }
        ],
        // Practice Test 2 - 3 passages
        [
            {
                id: "p1",
                title: "Antibiotic Resistance: Evolution in Real Time",
                text: `(1) When penicillin entered clinical practice in the 1940s, it was heralded as a "miracle drug" that would finally tame bacterial infections that had plagued humans for millennia. Pneumonia, septicemia, and wound infections that once claimed large numbers of lives could suddenly be cured with a few injections. The mortality rate from bacterial pneumonia in high-income countries plummeted, amputations due to infected wounds became less common, and routine surgeries became dramatically safer. For a brief period, some physicians speculated that infectious diseases caused by bacteria might soon be largely eliminated. Yet almost as soon as antibiotics were deployed at scale, the bacteria they targeted began to adapt, revealing the relentless power of evolution under intense selection pressure.

(2) Antibiotics work through a variety of mechanisms that exploit vulnerabilities in bacterial physiology. β-lactam antibiotics such as penicillin inhibit enzymes that build the bacterial cell wall, causing cells to rupture. Macrolides and aminoglycosides bind to bacterial ribosomes, disrupting protein synthesis. Fluoroquinolones interfere with enzymes that manage DNA supercoiling, preventing proper replication. Despite this diversity, all successful antibiotics share a common feature: they kill or inhibit bacteria far more than they affect human cells. That therapeutic window—strongly toxic to microbes but relatively safe for humans—was initially perceived as a stable advantage.

(3) However, bacterial populations are enormous and genetically diverse, and they reproduce rapidly. Within any large population, some cells will, by chance, possess mutations that alter a drug's target or increase the expression of an efflux pump that expels the antibiotic. Others may acquire genes for enzymes such as β-lactamases, which chemically inactivate β-lactam drugs before they reach their target. When an antibiotic is administered, susceptible cells die off, but these rare resistant variants survive and proliferate. Over time, resistance can spread not only vertically, from parent to offspring, but horizontally, through plasmids and other mobile genetic elements that shuttle resistance genes between different bacterial strains and even different species.

(4) The problem is not merely theoretical. Methicillin-resistant Staphylococcus aureus (MRSA), originally confined mostly to hospitals, has become a familiar acronym well beyond medical journals. Multidrug-resistant tuberculosis (MDR-TB) and extensively drug-resistant tuberculosis (XDR-TB) have complicated global TB control efforts, requiring longer, more toxic, and far more expensive treatment regimens. Drug-resistant Neisseria gonorrhoeae has forced revisions to treatment guidelines as fluoroquinolones, and later certain cephalosporins, lost their reliability. These pathogens serve as early warning signs of what some epidemiologists alarmingly call a "post-antibiotic era," in which common infections once again become life-threatening.

(5) Human behavior has accelerated the spread of resistance. In many countries, antibiotics can be purchased without a prescription, leading to widespread self-medication and inappropriate use for viral illnesses such as influenza or the common cold, against which antibiotics are completely ineffective. Even where prescriptions are required, patients often stop treatment as soon as they feel better, leaving behind partially treated bacterial populations that are more likely to contain resistant survivors. In agriculture, antibiotics are commonly used not only to treat sick animals but also to promote faster growth and prevent disease in crowded conditions, exposing huge bacterial populations in livestock and soil to sub-therapeutic doses that favor resistant strains.

(6) The consequences of these practices extend well beyond individual patients or farms. Resistant bacteria and the genes that encode resistance can spread through food chains, water systems, and international travel. A person carrying a resistant strain acquired in one country can unknowingly transport it across continents in a matter of hours. Once established, resistant strains can become endemic in hospitals, where vulnerable patients frequently receive multiple antibiotics, providing further selection pressure. Infection-control measures such as hand hygiene, isolation rooms, and careful cleaning protocols can slow the spread, but they are not infallible and often depend on consistent human behavior.

(7) In response to mounting evidence of antibiotic resistance, global health organizations have promoted "antimicrobial stewardship" programs, which aim to ensure that antibiotics are only used when necessary, in appropriate doses, and for appropriate durations. Stewardship teams review prescriptions, provide feedback to clinicians, and develop hospital guidelines that favor narrow-spectrum drugs over broad-spectrum agents whenever possible. These efforts can reduce overall antibiotic use, slow the emergence of resistance, and sometimes even reverse local trends. However, implementing such programs requires resources, trained personnel, and institutional commitment that are often lacking in low- and middle-income settings where the burden of infectious disease is highest.

(8) At the same time, the antibiotic discovery pipeline has slowed dramatically. Many of the "low-hanging fruit" antibiotic classes were identified in the mid-20th century, and finding entirely new classes has proven technically and economically challenging. Pharmaceutical companies face a paradox: a truly novel antibiotic should be held in reserve and used sparingly to preserve its effectiveness, but that very restraint limits sales and makes it difficult to recoup the substantial investment required for development. As a result, some companies have abandoned antibiotic research entirely in favor of more profitable chronic-disease drugs, leaving a worrying gap between emerging resistance and available treatments.

(9) Scientists are exploring alternative strategies to complement or partially replace conventional antibiotics. Bacteriophages—viruses that infect bacteria—can be selected or engineered to target specific pathogens, though regulatory and manufacturing challenges remain. Anti-virulence drugs aim not to kill bacteria outright but to disarm their toxins or adhesion mechanisms, reducing the selective pressure for resistance. Researchers are also revisiting older antibiotics, optimizing dosing regimens, and employing combination therapies that make it harder for bacteria to evolve resistance to multiple agents simultaneously.

(10) Whether these approaches will succeed in averting a true post-antibiotic era remains uncertain. What is clear is that resistance is not a distant hypothetical future; it is an ongoing evolutionary process unfolding in real time, shaped by every prescription written and every pill taken. The same scientific ingenuity that produced antibiotics in the first place will be needed again, not only in laboratories but in health-care systems and policy decisions. The question is not whether bacteria will continue to evolve—they will—but whether human societies can adapt their own behavior quickly enough to keep pace.`
            },
            {
                id: "p2",
                title: "Ocean Acidification: Chemistry of a Changing Sea",
                text: `(1) For much of human history, the oceans were perceived as too vast to be significantly altered by human activity. Their sheer volume seemed to guarantee an almost infinite capacity to absorb waste, dilute pollutants, and buffer changes in climate. That illusion has eroded as evidence has accumulated that the oceans are not only warming but also undergoing a chemical transformation known as ocean acidification. Unlike oil spills or floating plastic debris, acidification is largely invisible; it unfolds quietly at the molecular level, yet its consequences may be just as far-reaching.

(2) The process begins with carbon dioxide (CO₂), the same greenhouse gas driving global warming. When CO₂ from the atmosphere dissolves into seawater, it reacts with water molecules to form carbonic acid (H₂CO₃). Carbonic acid then dissociates into bicarbonate ions (HCO₃⁻) and hydrogen ions (H⁺). The increase in hydrogen ions is what lowers the pH of seawater, making it more acidic. Although the oceans remain slightly basic overall, even small declines in pH represent substantial increases in acidity because the pH scale is logarithmic, not linear.

(3) Since the beginning of the Industrial Revolution, the average pH of surface ocean waters has fallen from roughly 8.2 to 8.1. A drop of 0.1 units may appear trivial, but it corresponds to about a 30 percent increase in hydrogen-ion concentration. Geological records suggest that the current rate of change is faster than anything seen in at least the last 55 million years. In the distant past, comparable shifts in ocean chemistry have been associated with major disruptions in marine ecosystems and, in some cases, mass extinctions.

(4) Ocean acidification disrupts more than just numbers on a pH scale. Many marine organisms rely on carbonate ions (CO₃²⁻) to build shells and skeletons of calcium carbonate (CaCO₃). As more CO₂ enters the oceans, the equilibrium among carbonate, bicarbonate, and carbonic acid shifts, reducing the concentration of carbonate ions. This makes it more difficult for organisms such as corals, clams, oysters, and certain plankton to precipitate calcium carbonate. In extreme cases, existing shells can begin to dissolve, particularly in colder waters where CO₂ is more soluble.

(5) Coral reefs are especially vulnerable. Although they occupy less than one percent of the ocean floor, they support an estimated quarter of all marine species by providing complex habitats and shelter. Acidification compounds the stress imposed by warming, pollution, and overfishing. As corals struggle to build and maintain their skeletons, reef growth slows or reverses, and the intricate three-dimensional structures that house fish and invertebrates collapse. The result is a loss of biodiversity, diminished fisheries, and reduced coastal protection from storms and erosion.

(6) Acidification does not spare organisms that lack shells. Laboratory studies have shown that elevated CO₂ levels can alter fish behavior, impairing their ability to detect predators, find suitable habitats, and navigate back to home reefs. For example, juvenile reef fish exposed to high CO₂ concentrations may be attracted rather than repelled by the scent of predators, increasing their risk of being eaten. While the exact mechanisms remain under investigation, changes in neurotransmitter function have been suggested as a possible explanation.

(7) Human communities are tightly entangled with these ecological changes. Millions of people, particularly in small island states and coastal regions, depend on coral-reef fisheries for food and livelihoods. Shellfish aquaculture industries have already reported losses as acidic waters have corroded young oyster shells in hatcheries. Tourism revenues tied to healthy reefs, clear waters, and abundant marine life are also at risk. Thus, ocean acidification is not merely an abstract chemical phenomenon; it is a socio-economic issue with tangible consequences.

(8) Addressing acidification is more complex than neutralizing an acid in a laboratory flask. Because the underlying driver is the rising concentration of CO₂ in the atmosphere, the most direct remedy is reducing greenhouse-gas emissions. Local efforts can provide partial buffers: restoring seagrass meadows and mangrove forests, which absorb CO₂ and can locally raise pH, or reducing nutrient pollution that exacerbates other stressors. Nevertheless, these measures cannot fully compensate for continued global emissions.

(9) Some researchers have proposed geoengineering approaches such as adding alkaline minerals to the oceans to counteract acidity or enhancing natural processes that draw CO₂ out of the atmosphere. While such ideas are scientifically intriguing, they carry uncertainties and risks. Large-scale manipulation of ocean chemistry could produce unintended ecological side effects, and governance frameworks for such interventions are only beginning to be discussed.

(10) The relative invisibility of ocean acidification poses a communication challenge. Unlike bleaching corals or retreating glaciers, decreasing pH cannot be captured easily in a photograph. Yet the chemical signatures are unmistakable in measurements collected around the globe. The oceans are not an inexhaustible sink; they are changing in ways that reflect the cumulative impact of human activity. Recognizing ocean acidification as a central component of climate change, rather than a secondary side effect, may be essential for motivating action commensurate with the scale of the problem.`
            },
            {
                id: "p3",
                title: "The James Webb Space Telescope: Infrared Eyes on the Early Universe",
                text: `(1) The launch of the James Webb Space Telescope (JWST) marked the culmination of more than two decades of engineering, scientific planning, and political negotiation. Conceived as the successor to the Hubble Space Telescope, JWST was designed not to replace Hubble's iconic images but to extend humanity's vision into regions of the electromagnetic spectrum and epochs of cosmic history that Hubble could only glimpse. Its primary mission is ambitious: to study the universe in infrared light with sufficient sensitivity to detect the faint glow of the first stars and galaxies.

(2) Unlike Hubble, which orbits relatively close to Earth, JWST operates from a vantage point known as the second Sun-Earth Lagrange point, or L2, approximately 1.5 million kilometers from the planet. At L2, the gravitational forces of the Earth and Sun, combined with the satellite's orbital motion, allow JWST to maintain a stable position relative to both bodies. This location enables the telescope to keep its sunshield permanently oriented toward the Sun and Earth, shielding its instruments from heat and stray light that would overwhelm the faint infrared signals it is designed to detect.

(3) JWST's most striking feature is its 6.5-meter primary mirror, composed of 18 hexagonal segments made of beryllium and coated with a thin layer of gold to enhance reflectivity in the infrared. Folded up to fit inside the launch vehicle and then carefully deployed in space, the mirror collects more than six times as much light as Hubble's. The larger light-collecting area allows JWST to observe fainter and more distant objects, effectively looking further back in time toward the universe's first few hundred million years.

(4) Observing in the infrared confers several advantages for cosmology and astrophysics. As the universe expands, light from distant galaxies is stretched, or redshifted, toward longer wavelengths, moving out of the visible range and into the infrared. Dust clouds within galaxies also absorb and scatter visible light while allowing infrared radiation to pass through relatively unimpeded. By operating primarily in the infrared, JWST can see both very distant galaxies whose light has been highly redshifted and dust-enshrouded regions where stars and planets are forming.

(5) Early JWST observations have already identified galaxies that appear to have formed only a few hundred million years after the Big Bang, earlier than many theoretical models predicted. Some of these galaxies are surprisingly massive and luminous, suggesting that star formation and galaxy assembly may have proceeded more rapidly in the early universe than previously thought. These findings have prompted cosmologists to revisit assumptions in their models, illustrating how new data can refine or challenge long-standing theoretical frameworks.

(6) In addition to studying distant galaxies, JWST is revolutionizing the field of exoplanet research. By precisely measuring how a star's light changes as a planet passes in front of it—a process known as transit spectroscopy—JWST can infer the composition of the planet's atmosphere. Absorption features in the resulting spectra can reveal the presence of molecules such as water vapor, carbon dioxide, methane, and, in principle, more complex compounds. While the detection of such molecules does not by itself prove that a planet is habitable, it provides crucial clues about surface conditions and potential for life.

(7) To perform these sensitive measurements, JWST's instruments must be kept extremely cold—around 40 Kelvin for most instruments, and even lower for some. A five-layer sunshield roughly the size of a tennis court protects the telescope from solar and terrestrial radiation, allowing it to radiate its own heat into space. The deployment of this sunshield and the alignment of the mirror segments were among the most complex sequences ever attempted in spaceflight. Engineers often referred to the mission as having hundreds of "single-point failures"—steps in the deployment process that had no backup if they went wrong.

(8) The telescope's complexity and ambition came at a high price. JWST's cost ultimately exceeded ten billion dollars, and its launch date was postponed multiple times due to technical challenges and funding issues. Critics argued that the project consumed resources that could have supported a broader portfolio of smaller missions. Supporters countered that the potential scientific payoff justified the investment, comparing JWST to major ground-based observatories that have transformed astronomy in the past.

(9) One practical consequence of JWST's distant orbit is that, unlike Hubble, it cannot be serviced by astronauts. Any problems that arise must be addressed through software updates, careful management of hardware, or, in the worst case, by limiting certain operations. This constraint underscores both the risks involved in such a mission and the meticulous planning required to minimize them. So far, the telescope has performed largely as intended, a testament to the engineering effort that preceded launch.

(10) Beyond the technical achievements, JWST has captured public imagination through its images and data. Detailed views of star-forming regions, colliding galaxies, and planetary systems have been widely shared, often accompanied by colorized renderings that translate infrared signals into visible hues. These images simultaneously serve as scientific datasets and as cultural artifacts, shaping how non-specialists visualize the cosmos and their place within it.

(11) Over the coming years, JWST's observations are expected to inform questions that span disciplines: How did the first stars ignite? How quickly did heavy elements—those beyond hydrogen and helium—accumulate in the universe? How common are planets with atmospheres that resemble, even superficially, that of Earth? While no single telescope can answer such questions definitively, JWST extends the reach of human inquiry deeper into space and further back in time than any of its predecessors, ensuring that our models of the universe will continue to evolve.`
            }
        ],
        // Practice Test 3 - 3 passages
        [
            {
                id: "p1",
                title: "The Gut-Brain Axis",
                text: `(1) Over the past two decades, researchers have come to recognize that the human digestive tract does far more than digest food. The gut contains over 100 million neurons, more than the spinal cord, earning it the nickname "the second brain." This network, called the enteric nervous system (ENS), not only regulates digestion but communicates constantly with the central nervous system (CNS), forming what scientists refer to as the gut-brain axis. Far from operating independently, this axis integrates neural, endocrine, and immune information that influences both physiological and emotional states.

(2) The gut-brain axis is a bidirectional communication system connecting the ENS and the CNS through multiple overlapping pathways. The vagus nerve plays a key role, relaying electrical signals from the gut to the brainstem and transmitting motor commands from the brain to the intestines. Hormonal messengers, such as cortisol and ghrelin, add another layer of complexity by linking stress responses and appetite regulation. This system allows the brain to modulate digestion, secretion, and permeability, while the gut, in turn, sends sensory information that can shape emotion, motivation, and cognitive function.

(3) Interest in the gut-brain connection intensified when scientists realized that gut microbes, trillions of bacteria, viruses, and fungi residing in the gastrointestinal tract, produce neuroactive compounds. Many of these microbes synthesize neurotransmitters including serotonin, dopamine, and gamma-aminobutyric acid (GABA), each playing central roles in mood and cognition. This revelation blurred the line between neurology and microbiology, suggesting that mental health might depend partly on the ecological balance within the intestines.

(4) About 90% of the body's serotonin is synthesized in the gut, not the brain. Although this peripheral serotonin cannot cross the blood-brain barrier, it may influence mental states indirectly. It acts on the vagus nerve, regulates local immune responses, and even affects systemic inflammation, factors increasingly linked to depression and anxiety. Inflammation in the gut can alter brain chemistry, leading some scientists to hypothesize that psychiatric disorders might sometimes originate from intestinal dysfunction.

(5) Animal research has strengthened these ideas. Germ-free mice, raised in sterile environments without exposure to microbes, display exaggerated stress responses, impaired memory, and reduced sociability. Remarkably, when such mice are colonized with a normal microbiota, many of these behavioral abnormalities subside, implying that microbial colonization is crucial for normal brain development. Studies transferring gut microbes from anxious to calm mice, and vice versa, further demonstrate that personality traits can, in part, follow microbial communities.

(6) Human studies, though less controlled, reveal similar patterns. Distinct microbial signatures have been associated with psychiatric conditions such as major depressive disorder, autism spectrum disorder, and generalized anxiety. However, correlation does not prove causation. Diet, genetics, early-life stress, and medication use can all confound results, making it challenging to determine whether microbiome changes cause or merely accompany these disorders.

(7) Researchers have coined the term "psychobiotics" to describe probiotics and prebiotics that may improve mental health by reshaping the gut microbiota. Preliminary clinical trials suggest that specific strains of Lactobacillus and Bifidobacterium can reduce cortisol levels and alleviate depressive symptoms. Yet the field remains young: placebo effects, inconsistent formulations, and small sample sizes limit the strength of current evidence.

(8) The gut's connection to neurodegeneration has also captured scientific attention. Parkinson's disease, for instance, may begin in the intestines decades before motor symptoms emerge. Misfolded alpha-synuclein proteins found in intestinal neurons appear capable of migrating to the brain via the vagus nerve, initiating pathological cascades. Supporting this idea, people who underwent early-life vagotomies, surgical severing of the vagus nerve, show lower rates of Parkinson's later in life.

(9) Similar hypotheses have been raised for Alzheimer's disease. Certain gut bacteria produce amyloid-like proteins and inflammatory molecules such as lipopolysaccharides (LPS). These substances can compromise the intestinal barrier, trigger systemic inflammation, and potentially accelerate plaque deposition in the brain. Though preliminary, such findings link diet, immunity, and microbiota composition to diseases once thought purely neurological.

(10) The gut-brain axis therefore represents an emerging frontier in medicine, bridging psychiatry, neurology, and gastroenterology. Future treatments for mental and neurodegenerative disorders may involve manipulating microbial ecosystems as precisely as prescribing drugs. Personalized nutrition, targeted probiotics, and microbial metabolites could one day complement antidepressants and neuroprotective therapies.

(11) Still, experts caution against premature enthusiasm. The human microbiome contains thousands of interacting species whose functions remain poorly understood. Commercial probiotics often make unsupported claims and may lack viable organisms by the time they reach consumers. A rigorous, evidence-based approach will be essential to translate microbial insights into reliable clinical practice.

(12) As tools such as metagenomic sequencing, metabolomics, and gnotobiotic animal models mature, researchers are beginning to untangle the molecular dialogue between gut microbes and the brain. Unlocking this conversation may illuminate not only the origins of disease but also the biological roots of thought and emotion themselves.`
            },
            {
                id: "p2",
                title: "Nuclear Fusion: Powering the Stars and Our Future",
                text: `(1) Every second, the Sun fuses nearly 600 million tons of hydrogen into helium, releasing energy that radiates through the solar system and sustains all life on Earth. This process, nuclear fusion, has long inspired scientists seeking a nearly limitless source of clean energy. Fusion combines light atomic nuclei, typically isotopes of hydrogen, to form heavier elements while releasing staggering quantities of energy according to Einstein's E = mc². Unlike nuclear fission, which splits uranium and produces long-lived radioactive waste, fusion leaves behind minimal byproducts and no greenhouse gas emissions.

(2) In the Sun's core, temperatures soar beyond 15 million kelvin, and pressures exceed hundreds of billions of atmospheres. These extreme conditions allow hydrogen nuclei to overcome their mutual electrostatic repulsion, the so-called Coulomb barrier, and merge. Each fusion event releases energy because the resulting helium nucleus weighs slightly less than the sum of its parts; the missing mass is converted to energy. On Earth, recreating such an environment without the Sun's crushing gravity requires ingenious strategies involving temperature, confinement, and timing.

(3) Terrestrial fusion experiments primarily use deuterium and tritium, heavy isotopes of hydrogen that fuse more readily than ordinary hydrogen. To ignite fusion, plasma, the fourth state of matter consisting of charged particles, must reach temperatures above 100 million kelvin, more than six times hotter than the Sun's core. At those temperatures, no solid material can contain it, so physicists rely on either magnetic or inertial confinement to hold plasma stable long enough for fusion to occur.

(4) Magnetic confinement, exemplified by the tokamak design, uses powerful superconducting magnets to corral plasma into a doughnut-shaped chamber. ITER, an enormous international project under construction in southern France, embodies this approach. It aims to demonstrate a tenfold energy gain, producing 500 megawatts of fusion power from 50 megawatts of input heating. Inertial confinement, pursued at the U.S. National Ignition Facility (NIF), takes a different route: hundreds of high-energy lasers bombard a tiny fuel pellet from all directions, compressing and heating it so violently that fusion reactions ignite for a fleeting moment.

(5) In late 2022, scientists at NIF announced a milestone known as ignition, producing more fusion energy than the laser energy delivered to the target. The achievement electrified the scientific community, but it did not yet translate to net electrical gain. The facility consumed far more power overall than it generated due to inefficiencies in laser conversion. Nevertheless, it represented the first experimental proof that self-sustaining fusion burn is possible.

(6) ITER's slower but more scalable path could pave the way for commercial reactors. With contributions from 35 nations, ITER symbolizes global cooperation in pursuit of a shared technological dream. Its success could validate magnetic confinement as the foundation for future power plants capable of continuous, steady-state operation.

(7) The advantages of fusion energy are staggering. Deuterium can be extracted from seawater, and tritium can be bred from lithium, making fuel supplies effectively inexhaustible. A single kilogram of fusion fuel could yield as much energy as tens of thousands of tons of coal. Furthermore, fusion produces no carbon dioxide, poses minimal meltdown risk, and generates only short-lived radioactive waste.

(8) Despite these attractions, enormous engineering challenges remain. Maintaining plasma stability is akin to balancing a tornado in a bottle. Even tiny instabilities can quench the reaction, ending the plasma pulse. The inner walls of reactors must also withstand intense bombardment by high-energy neutrons that can weaken metals over time, necessitating development of new heat-resistant alloys and composite materials.

(9) Financial and political realities add complexity. Fusion reactors are extraordinarily expensive, often requiring decades of funding before producing any power. Critics argue that resources could be better spent on existing renewable technologies. Proponents counter that fusion's long-term potential justifies the investment, citing historical parallels with space exploration and particle physics.

(10) Recently, private startups have entered the arena with compact reactor designs using advanced superconducting magnets and machine-learning algorithms to predict plasma behavior in real time. These efforts, while still speculative, have reinvigorated the field by promising faster innovation cycles and cost reductions. If even one design proves scalable, fusion could transition from a scientific curiosity to an energy revolution.

(11) Whether or not fusion becomes practical within our lifetimes, the quest itself continues to push technological boundaries. Advances in superconductivity, robotics, and materials science born from fusion research already benefit medicine, computing, and industry. Like the stars that inspired it, the pursuit of fusion illuminates not just the cosmos, but human perseverance.`
            },
            {
                id: "p3",
                title: "The Expanding Universe and Dark Energy",
                text: `(1) In 1929, Edwin Hubble fundamentally altered humanity's understanding of the cosmos. Observing distant galaxies, he noticed that their spectral lines were shifted toward longer, redder wavelengths, a phenomenon known as redshift. The greater a galaxy's distance, the larger its redshift, implying that galaxies are receding from us at speeds proportional to their distance. This discovery provided the first observational evidence that the universe itself is expanding, an idea consistent with Einstein's general relativity but contrary to the then-prevailing belief in a static universe.

(2) The subsequent discovery of the cosmic microwave background (CMB), the faint afterglow of the Big Bang, cemented the Big Bang model. Uniform in all directions yet containing subtle temperature fluctuations, the CMB provides a snapshot of the universe just 380,000 years after its birth. From these ripples, cosmologists infer the composition, age, and curvature of the universe, confirming that it is roughly 13.8 billion years old and expanding at an accelerating rate.

(3) For decades, scientists assumed that gravity would gradually slow this expansion. However, in 1998, two research teams studying Type Ia supernovae, stellar explosions that serve as precise distance markers, found that distant supernovae appeared dimmer than expected. The simplest interpretation was shocking: the expansion of the universe is accelerating.

(4) To account for this, cosmologists introduced the concept of dark energy, an enigmatic form of energy that exerts a repulsive force on cosmic scales. Although dark energy comprises about 68% of the total energy density of the universe, its nature remains deeply mysterious. Its discovery forced scientists to confront the possibility that the majority of the cosmos consists of something we cannot directly detect.

(5) One proposed explanation is the cosmological constant (Λ), a term Einstein himself introduced into his equations to maintain a static universe. Ironically, he later called it his "greatest blunder," unaware that it might actually describe real physical phenomena. In this model, the vacuum of space possesses an intrinsic energy density that drives expansion. Another theory posits "quintessence," a dynamic field whose energy density evolves over time rather than remaining constant.

(6) Observations of the CMB, galaxy clustering, and gravitational lensing all reinforce the need for dark energy, but none reveal its fundamental cause. Some physicists suggest modifying general relativity on cosmic scales, while others invoke quantum vacuum fluctuations. These competing explanations highlight how little is known about the universe's largest component.

(7) The accelerating expansion has profound implications for the universe's fate. If dark energy remains constant, galaxies beyond our local group will drift beyond our observable horizon in the far future, leaving behind a cold, dark, and isolated cosmos. Conversely, if dark energy grows stronger over time, it could lead to a "Big Rip," tearing apart galaxies, stars, and even atoms.

(8) Adding to the puzzle is the so-called Hubble tension: measurements of the universe's current expansion rate differ depending on whether they come from local supernova observations or early-universe data such as the CMB. This discrepancy may signal new physics or reveal hidden errors in measurement, and resolving it has become one of modern cosmology's top priorities.

(9) Upcoming missions such as the Euclid satellite and NASA's Nancy Grace Roman Space Telescope aim to map billions of galaxies, tracking how cosmic structures have evolved over time. By studying the distribution of dark matter and the rate of expansion at different epochs, astronomers hope to determine whether dark energy is truly constant or dynamic.

(10) The discovery of acceleration underscores the self-correcting nature of science. Cosmology has repeatedly overturned its own assumptions, from a static universe, to expansion, to accelerated expansion, each time guided by better data. Dark energy remains a placeholder for our ignorance, yet it symbolizes how observation can drive theoretical revolutions.

(11) Whatever dark energy turns out to be, a cosmological constant, an evolving field, or evidence that gravity itself requires revision, it stands as a humbling reminder that the cosmos is far stranger and more beautiful than our equations can yet describe.`
            }
        ],
        // Practice Test 4 - 3 passages
        [
            {
                id: "p1",
                title: "Epigenetics and the Control of Gene Expression",
                text: `(1) For decades, biologists believed that DNA sequence alone determined an organism's traits. This view, known as genetic determinism, has since given way to a more nuanced understanding: that environmental factors can regulate how genes are expressed without altering the underlying DNA code. This process is called epigenetics, meaning "above genetics," and it has transformed modern biology by revealing that identical genetic sequences can lead to vastly different outcomes depending on which genes are turned on or off. Researchers now know that the environment, nutrition, and even early developmental experiences can leave molecular marks that influence health and disease risk throughout life.

(2) The foundation of epigenetic regulation lies in chemical modifications to DNA and the histone proteins around which it is wrapped. The most well-known of these modifications is DNA methylation, where methyl groups attach to cytosine bases, typically silencing the associated gene. Histone acetylation, on the other hand, tends to loosen chromatin structure, promoting transcriptional activity. Together, these molecular marks form a dynamic "epigenetic code" that determines the accessibility of genes to the cellular machinery that reads them. Through this system, the genome operates more like a piano, where genes are keys and epigenetic marks determine which melodies are played.

(3) Unlike genetic mutations, which are permanent, epigenetic changes are reversible and often influenced by external cues such as diet, stress, toxins, and aging. This plasticity allows organisms to adapt to environmental challenges without altering their genome. For example, famine exposure during pregnancy has been linked to persistent methylation changes in offspring, predisposing them to metabolic diseases later in life. These findings provide evidence that the effects of experience can extend beyond a single generation, influencing biological outcomes in descendants.

(4) Epigenetics also helps explain how multicellular organisms generate hundreds of distinct cell types from a single fertilized egg. Although every cell in the body contains the same DNA, only certain genes are active in each cell type. Epigenetic modifications act as molecular switches, establishing stable patterns of gene expression that define cellular identity. Stem cells, for instance, maintain their pluripotency partly by suppressing differentiation genes through methylation and histone modification. The differentiation process can thus be understood as an orchestrated rewriting of the epigenetic landscape.

(5) The field gained widespread attention in the early 2000s with studies on identical twins. Despite sharing identical genomes, twins often exhibit differences in appearance, health, and behavior as they age. These discrepancies correlate with diverging epigenetic profiles, influenced by distinct life experiences and environmental exposures. The longer identical twins live apart, the more their epigenomes diverge, emphasizing that lifestyle and environment are powerful sculptors of gene expression.

(6) Epigenetic mechanisms have been implicated in a wide range of diseases, including cancer. In many tumors, tumor suppressor genes are silenced through hypermethylation, while oncogenes become overactive. Drugs that inhibit DNA methylation or modify histone acetylation are now used therapeutically to reverse abnormal gene silencing and reactivate dormant genes that control cell growth. These "epigenetic therapies" represent one of the most promising intersections of basic biology and clinical medicine.

(7) Beyond medicine, epigenetics raises intriguing evolutionary questions. If environmentally induced epigenetic changes can be inherited, this challenges traditional Darwinian views that only genetic mutations contribute to evolution. Although most epigenetic marks are erased during reproduction, some persist, suggesting a potential mechanism for short-term adaptive inheritance. This possibility adds an exciting dimension to the study of evolution, blurring the line between acquired and inherited traits.

(8) The emerging discipline of epigenomics, which maps epigenetic marks across the genome, offers insights into how lifestyle and environment influence health. Large-scale projects, such as the NIH Roadmap Epigenomics Consortium, aim to chart the full landscape of human epigenetic variation. The ultimate goal is to build predictive models linking specific environmental exposures to molecular outcomes, paving the way for personalized preventive medicine.

(9) However, scientists caution against oversimplifying the role of epigenetics. While popular media sometimes portray it as a form of "mind over DNA," most epigenetic changes are tightly constrained by biological systems. The challenge lies in distinguishing causal relationships from correlations and determining which epigenetic changes truly influence phenotype. Despite these complexities, the field continues to reveal how experience and biology interact at the deepest molecular level.

(10) As research continues, epigenetics promises to bridge the gap between nature and nurture, revealing how experience can leave molecular fingerprints that shape biology across generations and expand our understanding of what inheritance truly means.`
            },
            {
                id: "p2",
                title: "The Chemistry of Battery Technology and Energy Storage",
                text: `(1) Modern society depends on portable energy storage, from smartphones to electric vehicles and renewable energy grids. At the heart of this revolution lies the battery, a device that converts chemical energy into electrical energy through controlled redox reactions. The evolution of battery chemistry has been central to the rise of renewable energy technologies and the global transition toward sustainability. Understanding how these devices function has become essential not only for scientists but also for engineers and policymakers seeking to decarbonize the economy.

(2) The most common rechargeable battery today is the lithium-ion cell. It consists of two electrodes, an anode and a cathode, separated by an electrolyte that permits lithium ions to shuttle between them. During discharge, lithium ions flow from the anode to the cathode through the electrolyte, while electrons travel through an external circuit, producing electric current. Charging reverses this process, restoring the original chemical states. This reversible electrochemistry underpins nearly every portable electronic device in use today.

(3) Lithium-ion batteries owe their popularity to their high energy density, long cycle life, and relatively low weight. However, they are not without drawbacks. Lithium is scarce and unevenly distributed across the planet, leading to geopolitical and environmental challenges in mining and supply chains. Moreover, improper disposal of lithium-ion batteries can release toxic metals and electrolytes into the environment, posing ecological risks.

(4) Scientists are exploring alternative chemistries to overcome these limitations. Sodium-ion batteries, which replace lithium with the more abundant sodium, offer a promising option. Although they generally store less energy, sodium-based systems could provide cost-effective solutions for grid-scale energy storage. By reducing dependence on lithium and cobalt, these batteries may also help alleviate supply constraints and ethical concerns related to mining practices.

(5) Another major innovation is the solid-state battery, which replaces the flammable liquid electrolyte with a solid one. This design enhances safety and could increase energy density, allowing for smaller, lighter batteries. Yet, manufacturing challenges and limited ionic conductivity at room temperature currently hinder widespread adoption. Materials scientists are working to design new ceramics and polymers that can transport ions efficiently while maintaining mechanical stability.

(6) Beyond lithium and sodium, researchers are investigating metal-air batteries that use oxygen from the atmosphere as a reactant. Zinc-air and aluminum-air batteries, for example, boast extremely high theoretical energy densities but suffer from slow reaction kinetics and limited rechargeability. Improving catalysts and controlling water content remain major challenges for these designs.

(7) The future of energy storage may also depend on the development of redox flow batteries, where energy is stored in liquid electrolytes contained in external tanks. Flow batteries are particularly well-suited for stabilizing renewable energy grids because their storage capacity scales with tank size rather than electrode surface area. Although they have lower energy density, their modular design offers unmatched flexibility.

(8) Advances in materials chemistry are critical to these breakthroughs. Nanostructured electrodes, novel electrolytes, and improved catalysts can dramatically improve battery efficiency, lifespan, and sustainability. Machine learning is now being used to predict optimal combinations of materials and accelerate discovery, reducing the time between theoretical design and practical implementation.

(9) While the search for the perfect battery continues, improvements in recycling and circular design are equally essential. Closed-loop systems that recover lithium, cobalt, and nickel from spent batteries can reduce waste and dependence on raw material extraction. Recycling innovations are already being implemented to create a more sustainable battery economy.

(10) Batteries, though often overlooked, represent one of the defining technologies of the 21st century. Their continued improvement will determine the success of electric transportation, renewable integration, and our broader efforts to transition toward a sustainable future.`
            },
            {
                id: "p3",
                title: "Seismic Waves and the Structure of Earth's Interior",
                text: `(1) The interior of Earth remains physically inaccessible to humans, yet scientists have developed ingenious methods to understand it through the study of seismic waves generated by earthquakes. These natural vibrations travel through the planet, carrying information about its density, composition, and physical state. Just as a doctor uses ultrasound to peer inside the human body, geophysicists use seismic waves to create an image of Earth's internal structure. The concept seems deceptively simple: when an earthquake occurs, waves radiate outward in all directions, and by studying their arrival times and intensities at various points on the globe, scientists can infer what lies deep beneath our feet. These discoveries form the foundation of modern seismology and have revealed that Earth is not uniform, but a layered, dynamic body with each layer behaving differently depending on temperature, pressure, and composition.

(2) Seismic waves are broadly classified into two main types: body waves, which pass through the Earth's interior, and surface waves, which travel along its outermost layer. Body waves include primary (P) waves and secondary (S) waves, which differ in both motion and the materials they can traverse. P-waves, also known as compressional waves, are the fastest and can travel through solids, liquids, and gases by alternately compressing and expanding the medium in the same direction as the wave's movement. S-waves, or shear waves, are slower and move particles perpendicular to their direction of travel, much like waves on a stretched rope. Because S-waves cannot propagate through liquids, their absence in certain areas provides one of the most compelling pieces of evidence for the existence of molten material within Earth's core.

(3) When seismic waves generated by major earthquakes are recorded around the world, patterns emerge that reveal "shadow zones," or regions where specific wave types fail to appear. These zones occur because seismic waves bend, reflect, or disappear when they encounter materials of different densities or phases. For example, P-waves slow down drastically and refract as they enter the liquid outer core, while S-waves vanish entirely because they cannot move through fluid. The detection of these shadow zones was one of the earliest clues that Earth possesses distinct internal boundaries. Through decades of global observation, seismologists have mapped how these waves travel, painting a picture of Earth's interior that is far more complex than a simple solid sphere.

(4) This analysis has led to the identification of Earth's principal layers: a thin, brittle crust; a thick, plastic-like mantle; a liquid outer core; and a solid inner core. The crust varies in thickness, from roughly 5 kilometers beneath the ocean floor to about 70 kilometers under mountain ranges. Beneath it lies the mantle, which comprises nearly two-thirds of Earth's mass and behaves like a slow-flowing solid due to intense heat and pressure. Deeper still, the outer core is composed primarily of molten iron and nickel and generates electrical currents that produce Earth's magnetic field. At the center lies the solid inner core, an iron-nickel sphere roughly 1,200 kilometers thick that endures pressures more than three million times greater than atmospheric levels at the surface.

(5) Two critical boundaries within Earth's interior are the Gutenberg and Lehmann discontinuities. The Gutenberg discontinuity marks the transition between the mantle and outer core, where seismic velocity abruptly drops as waves enter the molten layer. The Lehmann boundary, discovered by Danish seismologist Inge Lehmann in 1936, separates the liquid outer core from the solid inner core. The existence of these boundaries confirmed that Earth's internal composition varies not only in density but also in physical state. Temperature gradients across these zones drive convection currents that circulate molten material within the outer core, sustaining the geomagnetic field that shields Earth from solar wind and cosmic radiation.

(6) Seismologists employ increasingly advanced techniques to study these internal processes. By analyzing how seismic waves reflect and refract through the mantle, they can identify the paths of subducting tectonic plates and the slow convection currents that power continental drift. Seismic tomography, which functions much like a medical CT scan, uses thousands of earthquake recordings from around the globe to create three-dimensional models of the planet's interior. These models reveal striking variations in wave velocity that correspond to regions of differing temperature, density, and composition. Through this imaging, scientists have discovered large low-shear-velocity provinces deep beneath Africa and the Pacific, which may represent massive plumes of hot rock rising toward the surface.

(7) The mantle itself is a dynamic, heterogeneous region rather than a static layer. Within it, hot plumes of buoyant material rise slowly upward in a process known as mantle convection. When these plumes reach the lithosphere, they can create volcanic hotspots such as those that formed the Hawaiian Islands or Yellowstone. Conversely, colder, denser oceanic crust sinks back into the mantle at subduction zones, driving plate motion and recycling Earth's surface materials. This constant churning ensures that the planet's interior remains active and that heat generated from radioactive decay in the mantle and core continues to escape gradually to the surface. The interplay between these opposing processes—rising plumes and sinking slabs—maintains the delicate thermal equilibrium that governs Earth's geologic vitality.

(8) Understanding the behavior of the core and mantle is not merely an academic pursuit. The motion of molten iron within the outer core is directly responsible for Earth's magnetic field, which protects living organisms from harmful solar radiation and atmospheric erosion. Variations in this field, known as geomagnetic reversals, are preserved in the magnetic alignment of volcanic rocks, providing a geological record of the field's history. Studying these reversals has helped scientists reconstruct the movement of tectonic plates and the long-term evolution of Earth's interior heat engine. Without the protective influence of this geomagnetic shield, the atmosphere could be stripped away by solar particles, much like what occurred on Mars billions of years ago.

(9) Seismology has also expanded beyond Earth to become a tool of planetary science. By comparing terrestrial seismic data with information gathered from other celestial bodies, scientists can deduce how planets form, differentiate, and evolve. NASA's InSight mission on Mars, for instance, has recorded marsquakes that reveal the planet possesses a liquid outer core, much like Earth's. Lunar seismometers placed by Apollo astronauts decades ago similarly showed that the Moon has a small, partially molten core. These findings demonstrate that the internal dynamics shaping Earth are not unique but part of a broader pattern governing rocky planets across the solar system.

(10) Although earthquakes can cause immense destruction on the surface, they also serve as our most powerful natural probes into the deep Earth. Each seismic event releases waves that, when analyzed, illuminate previously hidden regions of the planet's structure. Through the science of seismology, humanity has transformed violent geological events into instruments of discovery, turning the rumble of tectonic movement into a language through which the Earth tells its story. The study of seismic waves continues to evolve, offering ever more refined glimpses into the mysteries of the planet's interior and, by extension, into the dynamic processes that make Earth a living world.`
            }
        ],
        // Practice Test 5 - 3 passages
        [
            {
                id: "p1",
                title: "Neural Plasticity and the Adaptive Brain",
                text: `(1) The human brain was once thought to be largely fixed after early childhood, with its structure and capabilities predetermined by genetics. However, discoveries over the past half century have shattered that notion, revealing instead a remarkable property known as neural plasticity—the ability of the brain to reorganize its connections in response to experience, learning, and injury. Neural plasticity underlies everything from memory formation to recovery after stroke, showing that the brain is not a static machine but a dynamic, ever-changing network.

(2) On a microscopic level, neural plasticity involves the strengthening or weakening of synapses, the junctions where neurons communicate. When neurons repeatedly fire together, the connections between them become stronger, a principle known as Hebbian learning. Conversely, connections that are seldom used weaken and may eventually disappear. This constant remodeling of synapses allows the brain to adapt its circuitry in real time, forming the biological basis of learning and memory.

(3) One striking demonstration of plasticity comes from studies of musicians and multilingual individuals. Brain imaging shows that areas controlling fine motor skills or language comprehension can expand in size and connectivity with years of training. Similarly, the hippocampus, a region crucial for memory and spatial navigation, enlarges in people who regularly engage in tasks requiring intense memorization or orientation, such as London taxi drivers memorizing complex street maps.

(4) Neural plasticity is not limited to learning new skills—it also plays a central role in recovery after brain injury. Following a stroke, for example, nearby brain regions can sometimes assume the functions of damaged areas through the formation of new neural pathways. Rehabilitation therapies that combine repetitive movement with focused attention exploit this ability, effectively retraining the brain to regain lost functions. This adaptive potential offers hope for individuals recovering from trauma, neurodegenerative disease, or even sensory loss.

(5) In early development, the brain's plasticity is at its peak. Infants and children can acquire languages, skills, and habits with extraordinary ease because their neural networks are still being pruned and refined. This heightened flexibility diminishes with age as synaptic connections stabilize. Nevertheless, adults retain a degree of plasticity throughout life, a fact that has inspired cognitive training programs aimed at preserving mental agility and delaying age-related decline.

(6) At the molecular level, plasticity involves complex biochemical processes that alter gene expression and protein synthesis within neurons. Neurotransmitters such as glutamate play a key role by activating receptors that initiate intracellular signaling cascades, leading to the growth of new dendritic spines or the reorganization of synaptic vesicles. These processes are energy-intensive and require coordination among multiple brain regions, demonstrating that learning is both a physical and metabolic event.

(7) Environmental factors strongly influence the extent and direction of plasticity. Enriched environments filled with sensory, social, and cognitive stimulation promote neural growth and strengthen synaptic connectivity, while stress and isolation can have the opposite effect, leading to dendritic shrinkage and reduced neurogenesis. Exercise, proper sleep, and nutrition have all been shown to enhance plasticity by increasing blood flow, oxygen delivery, and neurotrophic factors like BDNF (brain-derived neurotrophic factor).

(8) Advances in neuroimaging have allowed scientists to observe plastic changes directly in the living brain. Functional MRI (fMRI) and diffusion tensor imaging (DTI) reveal how neural pathways evolve in response to learning, therapy, or experience. These technologies have transformed neuroscience from a static anatomical discipline into a dynamic field capable of mapping cognition and adaptation in real time.

(9) The study of plasticity also blurs the distinction between nature and nurture. Genetic predispositions shape the brain's structure, but experiences determine which connections are strengthened or lost. This interplay between inherited potential and environmental influence defines much of human individuality. Understanding it may lead to new approaches for treating mental illness, improving education, and optimizing brain performance.

(10) Neural plasticity demonstrates that the brain is not merely a product of its past but an engine of continuous change. By revealing how thought and experience sculpt the very organ that generates them, neuroscience offers a profound reminder that growth and adaptation are intrinsic to human nature.`
            },
            {
                id: "p2",
                title: "Atmospheric Chemistry and Climate Dynamics",
                text: `(1) The Earth's atmosphere is a complex mixture of gases that plays a crucial role in regulating the planet's climate and supporting life. Atmospheric chemistry examines the chemical processes that occur within this gaseous envelope, focusing on how various compounds interact, transform, and influence Earth's energy balance. Understanding these processes is essential for comprehending climate change, air quality, and the long-term stability of our environment.

(2) The atmosphere consists primarily of nitrogen (approximately 78%) and oxygen (about 21%), with trace amounts of other gases including argon, carbon dioxide, methane, and water vapor. While nitrogen and oxygen dominate by volume, trace gases such as carbon dioxide and methane have disproportionate effects on climate due to their ability to absorb and re-emit infrared radiation, creating what is known as the greenhouse effect. Without this natural greenhouse effect, Earth's average surface temperature would be approximately –18°C, making the planet uninhabitable. With it, the average temperature is about 15°C, creating conditions suitable for life.

(3) Human activities have significantly altered atmospheric composition, particularly through the burning of fossil fuels, which releases vast quantities of carbon dioxide into the air. Since the Industrial Revolution, atmospheric CO₂ levels have increased from approximately 280 parts per million to over 400 parts per million. This rise correlates with increasing global temperatures and represents one of the most pressing environmental challenges of our time.

(4) Methane, another potent greenhouse gas, traps heat more effectively per molecule than carbon dioxide, though it exists in much smaller concentrations. Methane is released from natural sources such as wetlands and from human activities including agriculture, livestock farming, and fossil fuel extraction. Its shorter atmospheric lifetime compared to CO₂ means that reducing methane emissions could have relatively rapid effects on climate stabilization.

(5) Ozone presents a complex case in atmospheric chemistry. In the stratosphere, ozone molecules absorb harmful ultraviolet radiation from the Sun, protecting life on Earth's surface. However, at ground level, ozone acts as a pollutant that can damage respiratory systems and harm vegetation. The Montreal Protocol, an international agreement signed in 1987, successfully phased out ozone-depleting chemicals such as chlorofluorocarbons (CFCs), demonstrating that coordinated global action can address atmospheric problems.

(6) Aerosols—tiny particles suspended in the atmosphere—complicate climate predictions because they can both reflect sunlight back to space (cooling effect) and absorb solar radiation (warming effect). The net impact depends on their composition, size, and altitude. Volcanic eruptions inject large quantities of aerosols into the stratosphere, as demonstrated by Mount Pinatubo's 1991 eruption, which caused temporary global cooling by reflecting sunlight.

(7) Clouds represent one of the greatest uncertainties in climate modeling. They can trap heat near the surface, contributing to warming, while simultaneously reflecting incoming solar radiation, which cools the planet. The balance between these opposing effects varies with cloud type, altitude, and geographic location, making accurate predictions challenging.

(8) Ocean-atmosphere interactions further complicate the climate system. The oceans absorb approximately one-quarter of anthropogenic CO₂ emissions, helping to mitigate atmospheric warming but causing ocean acidification as dissolved CO₂ forms carbonic acid. As ocean temperatures rise, the capacity to absorb CO₂ decreases, creating a feedback loop that could accelerate climate change.

(9) Albedo, the measure of Earth's reflectivity, plays a critical role in climate feedbacks. Ice and snow have high albedo, reflecting most sunlight. As global temperatures rise and ice melts, darker surfaces are exposed, absorbing more heat and further accelerating warming—a positive feedback mechanism that amplifies climate change.

(10) Scientists use sophisticated technologies including satellite remote sensing and spectroscopy to monitor atmospheric composition and track changes over time. These tools provide essential data for understanding climate dynamics and evaluating the effectiveness of mitigation strategies. However, addressing climate change requires not only scientific understanding but also international cooperation and political will, obstacles that have proven challenging to overcome despite growing evidence of the urgency of the situation.`
            },
            {
                id: "p3",
                title: "Quantum Optics and the Nature of Light",
                text: `(1) Quantum optics represents one of the most fascinating frontiers of modern physics, exploring the interaction between light and matter at the smallest scales. This field emerged from attempts to resolve a fundamental paradox: light exhibits properties of both waves and particles, a duality that challenges classical understanding and reveals the quantum nature of reality. The study of quantum optics has not only deepened our understanding of light but has also enabled revolutionary technologies that transform how we communicate, compute, and measure the world.

(2) The wave-particle duality of light was first clearly demonstrated through the double-slit experiment, which showed that light passing through two narrow slits creates an interference pattern characteristic of waves. When individual photons are detected, however, they behave as discrete particles. This paradox forced physicists to abandon purely classical descriptions and embrace quantum mechanics, which allows light to exist in states that are neither purely wave-like nor purely particle-like but something fundamentally different.

(3) Albert Einstein's explanation of the photoelectric effect, for which he received the Nobel Prize, proposed that light consists of discrete packets of energy called photons. This photon model explained why electrons are ejected from metals only when light exceeds a certain frequency, regardless of intensity. Einstein's work established that light energy is quantized, meaning it comes in discrete units rather than continuous waves, fundamentally altering our understanding of electromagnetic radiation.

(4) Lasers, or light amplification by stimulated emission of radiation, represent one of the most important applications of quantum optics. Lasers produce coherent light, meaning their photons move in the same phase and direction, creating an intense, focused beam. This coherence enables applications ranging from barcode scanners to optical fiber networks that transmit vast amounts of information across continents.

(5) Quantum entanglement, which Einstein famously called "spooky action at a distance," describes a phenomenon where particles become correlated in such a way that measuring one instantly affects the other, regardless of the distance between them. This non-local connection violates classical intuitions about causality and locality but has been repeatedly confirmed through experiments. Entangled photon pairs form the basis for quantum communication systems that offer theoretically unbreakable security, as any attempt to intercept the communication would disturb the quantum state and be immediately detectable.

(6) Quantum computing represents another revolutionary application of quantum optics. Unlike classical bits that exist in states of either 0 or 1, quantum bits (qubits) can exist in superpositions, simultaneously occupying multiple states. This property allows quantum computers to perform certain calculations exponentially faster than classical computers. Photons are ideal candidates for qubits because they interact weakly with their environment, reducing decoherence that would destroy quantum states.

(7) Atomic clocks, which use the precise frequencies of atomic transitions, rely on quantum optical principles to define time standards with extraordinary accuracy. These clocks are so precise that they would lose less than one second over billions of years, enabling technologies such as GPS and fundamental tests of physical theories.

(8) Quantum sensors exploit quantum effects to detect minuscule physical changes that would be impossible to measure with classical instruments. These devices can measure magnetic fields, gravitational waves, and other phenomena with unprecedented sensitivity, opening new possibilities for medical imaging, navigation, and fundamental physics research.

(9) Optical lattices, created by intersecting laser beams, can trap atoms in regular patterns resembling crystal structures. These systems allow physicists to simulate complex quantum many-body systems and study phenomena such as superconductivity and quantum phase transitions in controlled laboratory settings.

(10) Quantum teleportation, despite its science-fiction name, is a real process that transfers quantum information from one location to another without physically moving matter. This process relies on entanglement and has been demonstrated over distances of hundreds of kilometers, with potential applications in secure communication and distributed quantum computing.

(11) The observer effect in quantum mechanics suggests that the act of measurement can influence the physical reality being observed. This principle raises profound philosophical questions about the nature of reality and the role of consciousness, blurring the boundary between the observer and the observed.

(12) Quantum optics continues to reveal both scientific and philosophical truths about the nature of light and reality itself. From its role in enabling modern technologies to its implications for our understanding of the universe, light serves as humanity's most illuminating teacher, revealing the quantum foundations of the world we inhabit.`
            }
        ],
        // Practice Test 6 - 3 passages
        [
            {
                id: "p1",
                title: "Deep Sea Microbiology and the Origins of Life",
                text: `(1) Beneath the crushing pressure of the ocean floor, far beyond the reach of sunlight, life thrives in an environment once thought utterly inhospitable. Around hydrothermal vents, geysers that spew mineral rich water heated by Earth's mantle, entire ecosystems flourish without photosynthesis. Instead, these organisms rely on chemosynthesis, deriving energy from the oxidation of inorganic compounds such as hydrogen sulfide. The discovery of such communities in the late 1970s revolutionized biology, revealing that sunlight is not the only source of life's energy and suggesting that similar processes may have sustained the earliest organisms on Earth.

(2) Hydrothermal vents provide a window into ancient biochemistry. The superheated water emerging from the vents is laden with metals and chemicals that precipitate upon contact with cold seawater, forming towering structures of iron and sulfur compounds. Within these formations, microbial colonies prosper, metabolizing the surrounding chemicals through reactions remarkably similar to those hypothesized for early Earth. These environments mimic the primordial conditions under which life might have first emerged, offering scientists natural laboratories for studying prebiotic chemistry and molecular evolution.

(3) Among the vent inhabitants, archaea, microorganisms distinct from bacteria, display an extraordinary ability to survive extremes of temperature, pressure, and acidity. Some species endure temperatures above 120°C, conditions that would destroy most known life forms. Their unique cellular membranes and heat resistant enzymes have drawn the attention of molecular biologists seeking clues about life's biochemical limits. These enzymes, often called extremozymes, have also found commercial applications, from DNA amplification in polymerase chain reactions to industrial catalysis in harsh chemical environments.

(4) Genetic studies of these archaea have reshaped the tree of life. Once considered simple bacteria, archaea are now recognized as a separate domain, more closely related to eukaryotes than to bacteria. Their discovery underscored the diversity of life's evolutionary paths and provided new insights into how complex cells might have arisen through ancient symbiotic mergers. In this view, the deep ocean may hold the genetic echoes of our own cellular ancestry.

(5) The chemical gradients surrounding hydrothermal vents resemble miniature electrochemical cells. The continuous flow of charged ions across mineral surfaces could have powered primitive metabolic reactions before the advent of biological enzymes. Laboratory simulations have demonstrated that simple organic molecules can spontaneously form under such conditions, supporting the hypothesis that the earliest forms of life may have originated in these deep sea crucibles rather than in sunlit ponds or tidal pools.

(6) Beyond Earth, hydrothermal vent analogs may exist on icy moons such as Europa and Enceladus, where gravitational forces create internal heating beneath frozen crusts. Plumes observed erupting from Enceladus contain water vapor and organic compounds, tantalizing evidence that microbial life might thrive in its hidden ocean. Planned space missions aim to analyze these plumes directly, searching for chemical markers such as amino acids, lipids, or distinctive isotopic ratios that could indicate biological activity.

(7) The study of vent ecosystems also redefines our understanding of ecological interdependence. Tube worms, giant clams, and shrimp inhabit these dark regions not by consuming each other but through symbiosis with chemosynthetic bacteria living within their tissues. The bacteria convert chemical energy into nutrients, sustaining their hosts in a delicate balance reminiscent of plant fungal partnerships on land. This mutualistic arrangement demonstrates that life adapts not only to its environment but also through cooperation among species.

(8) Despite their isolation, hydrothermal vent systems are vulnerable to human activity. Deep sea mining for metals threatens to disturb these fragile habitats, potentially eradicating species that have persisted largely unchanged for millions of years. Scientists urge caution, arguing that these ecosystems hold not just ecological value but also evolutionary and biochemical insight into life's earliest forms, insight that once lost cannot be recovered.

(9) Each discovery beneath the waves reinforces a profound truth about biology. Life is resilient, adaptable, and opportunistic. From volcanic fissures at the bottom of Earth's oceans to the icy crusts of distant moons, the search for microbial extremophiles expands our definition of habitability and challenges our assumptions about where life can exist.

(10) Hydrothermal vent microbiology has transformed from an obscure niche into a cornerstone of astrobiology and evolutionary theory. It reminds us that the origins of life may lie not in the warmth of the sun but in the restless heat of the Earth itself, circulating through cracks in the ocean floor and fueling invisible communities that rewrite the story of how life begins.`
            },
            {
                id: "p2",
                title: "Renewable Energy Materials and Photovoltaic Innovation",
                text: `(1) The global demand for clean and renewable energy has placed photovoltaic technology at the center of scientific and industrial attention. Traditional silicon based solar panels, although efficient and reliable, face limitations in production cost, material use, and theoretical energy conversion efficiency. As the world seeks to decarbonize its energy systems, researchers have turned toward new classes of materials such as perovskites, which possess remarkable light absorbing and electronic properties. These emerging compounds offer a promising pathway to higher efficiency and lower manufacturing costs, signaling a major shift in how sunlight may be captured and converted into usable electricity.

(2) Perovskite solar cells derive their name from a mineral structure first identified in the nineteenth century. In these devices, a thin film of perovskite material coats a substrate and acts as the active layer that absorbs incoming photons. Because many perovskites can absorb a broad spectrum of visible light with relatively little material, they can convert photons into electrical energy with impressive efficiency. Within a decade of focused research, laboratory prototypes have achieved power conversion efficiencies above 25 percent, approaching and in some cases surpassing conventional silicon cells. What makes them particularly attractive is the possibility of manufacturing them using low temperature, solution based processes rather than energy intensive crystal growth.

(3) Despite this rapid progress, perovskite technology faces serious challenges. Many of the most efficient formulations are chemically unstable, degrading when exposed to moisture, oxygen, or prolonged illumination. Some contain lead, raising concerns about toxicity and environmental contamination if devices break or are improperly discarded. Scientists are therefore working to modify perovskite compositions, introduce protective barrier layers, and design lead free alternatives that maintain performance while minimizing risk. The tension between efficiency, stability, and environmental safety lies at the heart of current research efforts.

(4) One of the most promising strategies for maximizing photovoltaic efficiency is the development of tandem solar cells. In these architectures, a perovskite layer is stacked on top of a silicon or other semiconductor layer so that each absorbs a different portion of the solar spectrum. High energy photons are harvested by the upper perovskite cell, while lower energy photons pass through and are captured by the underlying layer. By dividing the workload in this way, tandem devices can overcome the efficiency limits of single junction cells and move toward conversion efficiencies above 30 percent.

(5) Perovskites also open the door to solar technologies that look very different from rigid rooftop panels. Because perovskite films can be deposited on flexible substrates and made semi transparent, researchers envision windows that generate electricity, lightweight panels on vehicles, and wearable electronics powered by ambient light. Such applications would weave energy harvesting into everyday objects, transforming built environments into distributed power generators rather than passive energy consumers.

(6) Photovoltaic innovation is not limited to perovskites alone. Quantum dot solar cells and organic photovoltaic devices represent parallel efforts to exploit novel materials. Quantum dots, which are nanometer scale semiconductor particles, can be tuned to absorb specific wavelengths of light by changing their size or composition. Organic solar cells, built from carbon based molecules and polymers, offer mechanical flexibility and can be manufactured using printing techniques. Although their efficiencies currently lag behind those of perovskites and silicon, their unique properties may prove valuable in niche applications.

(7) Environmental and resource considerations play a crucial role in evaluating new photovoltaic materials. While solar energy aims to reduce greenhouse gas emissions, the use of rare elements, toxic solvents, or non recyclable components could introduce new sustainability problems. Researchers emphasize the importance of life cycle analysis, considering the sourcing, manufacturing, operation, and end of life stages of solar technologies. Ideally, future photovoltaic devices would be both efficient and compatible with a circular economy in which materials are recovered and reused.

(8) Advances in computational modeling and machine learning have accelerated the pace of materials discovery. Algorithms can screen vast libraries of hypothetical compounds, predicting which structures are likely to exhibit desirable optical and electronic properties before any samples are synthesized. Similar tools help diagnose mechanisms of device degradation and optimize fabrication parameters. This combination of theory and experiment allows laboratories to move more quickly from concept to functional prototype.

(9) As solar technologies improve and costs fall, their adoption carries significant geopolitical and social implications. Countries with abundant sunlight and manufacturing capacity may become net exporters of clean energy or photovoltaic components. At the same time, affordable solar panels enable distributed power generation in remote regions that lack stable electrical grids. This decentralization can enhance energy security, reduce dependence on imported fuels, and expand access to electricity for underserved populations.

(10) The pursuit of improved photovoltaic materials illustrates the convergence of chemistry, physics, engineering, and environmental science in service of sustainability. As the world transitions away from carbon based energy sources, innovations in solar technology will shape not only how we power our homes and industries but also how equitably and responsibly that power is produced.`
            },
            {
                id: "p3",
                title: "Exoplanetary Atmospheres and the Search for Biosignatures",
                text: `(1) Since the mid 1990s, astronomers have detected thousands of exoplanets orbiting distant stars, transforming our understanding of how common planets are in the galaxy. The next challenge is not merely to find these worlds but to determine whether any of them could support life. Central to this effort is the study of exoplanetary atmospheres, thin layers of gas that may contain chemical fingerprints of biological processes. By analyzing these atmospheres, scientists hope to address one of humanity's oldest questions, whether life exists beyond Earth.

(2) Light from a star that passes through or reflects off a planet's atmosphere carries encoded information about the gases it encounters. By splitting this light into its component wavelengths, a technique known as spectroscopy, researchers can identify characteristic absorption lines corresponding to molecules such as water vapor, carbon dioxide, methane, and oxygen. These spectral features serve as potential biosignatures, especially when they appear in combinations that suggest chemical disequilibrium maintained by active processes, possibly including metabolism.

(3) Observing such faint atmospheric signals requires extraordinary precision. Space telescopes equipped with sensitive infrared instruments, such as the James Webb Space Telescope, detect minute variations in starlight as a planet passes in front of its star. By comparing the spectrum of the star during transit with that observed when the planet is not in view, scientists can infer the presence of atmospheric gases and estimate temperature structures. These measurements push the limits of current technology, as the differences in brightness can be smaller than one part in ten thousand.

(4) Not all atmospheric gases point directly to life. Methane, for example, can be produced by microbes but also by volcanic activity or the breakdown of certain rocks. To strengthen the case for biology, astronomers look for pairs or sets of gases that would naturally react with each other and vanish unless continuously replenished. On Earth, the coexistence of abundant oxygen and methane is one such sign, since these gases rapidly destroy each other in the absence of ongoing biological production.

(5) Recent observations have revealed an astonishing diversity of exoplanetary atmospheres. Some giant planets orbiting close to their stars, often called hot Jupiters, show signatures of vaporized metals and exotic clouds, while others possess high altitude hazes that obscure deeper layers. Smaller, rocky planets can have atmospheres dominated by carbon dioxide, resemble early Earth, or, in some cases, appear to have lost much of their gas due to intense stellar radiation. This variability underscores that habitability depends on the interplay between a planet's composition, magnetic field, and the behavior of its host star.

(6) The concept of the habitable zone, the range of distances from a star where liquid water could exist on a planet's surface, has long guided target selection. However, scientists now recognize that habitability involves more than distance alone. A thick atmosphere rich in greenhouse gases can keep a planet warm even if it orbits farther from its star, while a thin or stripped atmosphere can leave a closer planet frozen or barren. Additionally, worlds with subsurface oceans heated by tidal forces or internal radioactivity may harbor liquid water well outside the traditional habitable zone.

(7) Detecting credible biosignatures requires guarding against false positives. Abiotic processes such as photodissociation of water molecules or unusual volcanic activity can create gas mixtures that mimic the chemistry expected from life. To avoid misinterpretation, astronomers combine spectral data with climate and photochemical models, asking whether observed gas combinations and temperatures can be explained by non biological mechanisms. Only when biological explanations remain the most plausible do scientists seriously consider the presence of life.

(8) Future space missions under study, including concepts such as LUVOIR and HabEx, aim to directly image Earth sized planets around Sun like stars. These observatories would use coronagraphs or starshades to block the overwhelming glare of the host star, allowing the much fainter reflected light from the planet to be captured. Analyzing this light could reveal not only atmospheric composition but also hints of surface features, such as oceans, continents, or even seasonal changes in vegetation like signatures.

(9) The implications of detecting a robust biosignature on an exoplanet are profound. Confirmation of extraterrestrial life, even in microbial form, would demonstrate that biology is not a rare accident confined to Earth but a natural outcome of planetary evolution under suitable conditions. Such a discovery would reshape disciplines from biology and geology to philosophy and theology, challenging long held assumptions about humanity's place in the cosmos.

(10) The search for life beyond Earth brings together astronomy, planetary science, chemistry, and biology in a single interdisciplinary endeavor. Regardless of the outcome, this pursuit deepens our understanding of the conditions that sustain life on our own world. In seeking other habitable planets, we gain perspective on Earth's fragility and uniqueness, and on the importance of preserving the only confirmed biosphere we currently know.`
            }
        ],
        // Practice Test 7 - 3 passages
        [
            {
                id: "p1",
                title: "Photosynthetic Adaptations in Extreme Environments",
                text: `(1) Photosynthesis is one of the most fundamental biological processes on Earth, converting solar energy into chemical energy through carbon fixation. However, despite its universality, photosynthesis varies remarkably among organisms adapted to extreme conditions. From the icy waters of Antarctica to the blistering heat of desert crusts, different organisms have evolved biochemical strategies to capture light, store energy, and survive in niches that challenge the limits of metabolism. These variations demonstrate the flexibility of nature's most essential energy-conversion system.

(2) The classic photosynthetic process familiar from terrestrial plants involves two major stages: the light-dependent reactions that occur in thylakoid membranes and the light-independent Calvin cycle in the stroma. However, environmental extremes often disrupt these processes. For instance, in polar ecosystems, long periods of darkness and subzero temperatures limit light capture and enzyme activity. Certain polar microalgae compensate by accumulating large stores of polyunsaturated fatty acids, which maintain membrane fluidity, and by using pigments that can absorb low-angle, low-intensity light.

(3) In deserts, cyanobacteria and lichens face the opposite challenge: excessive radiation and desiccation. They produce mycosporine-like amino acids and carotenoids that act as natural sunscreens, absorbing ultraviolet light before it can damage photosystem proteins. Some desert cyanobacteria retreat beneath translucent rocks where filtered sunlight sustains photosynthesis while shielding them from thermal and radiation stress. This behavioral adaptation is complemented by rapid metabolic activation after rare rainfall events.

(4) High-salinity environments, such as salt flats or hypersaline lakes, present osmotic challenges that would normally disrupt cellular hydration. Halophilic algae like Dunaliella salina counteract this by accumulating glycerol, a compatible solute that balances osmotic pressure without interfering with enzymatic function. These algae also adjust the ratio of photosystem I to photosystem II complexes to optimize electron transport efficiency under high ionic stress.

(5) In high-altitude ecosystems, organisms contend with low oxygen pressure and elevated ultraviolet radiation. Some alpine plants have evolved thicker cuticles and higher concentrations of flavonoids, which both protect against radiation and enhance light capture. Others employ C4 or CAM (Crassulacean Acid Metabolism) pathways, which temporally or spatially separate carbon fixation steps, reducing water loss while maintaining photosynthetic output.

(6) CAM photosynthesis, common in succulents, allows carbon dioxide uptake during the cool, moist night rather than during the arid day. The absorbed CO₂ is stored as malic acid and later released for photosynthesis when sunlight returns. This temporal separation is a prime example of how evolution has modified the canonical photosynthetic pathway to minimize water loss while sustaining carbon fixation.

(7) In the world's oceans, photosynthetic organisms called phytoplankton play an outsized role in global carbon cycling. They inhabit the euphotic zone, where sunlight penetrates, and collectively contribute to about half of Earth's primary productivity. In nutrient-poor regions, nitrogen-fixing cyanobacteria like Trichodesmium supplement their photosynthesis with nitrogen assimilation, converting atmospheric N₂ into biologically usable forms.

(8) In extreme darkness such as deep-sea hydrothermal vents, scientists have discovered bacteria that perform chemosynthesis, producing organic molecules using energy derived from inorganic chemical reactions rather than sunlight. While not strictly photosynthesis, this demonstrates how life adapts energy capture to the constraints of its environment, maintaining the principle of converting energy into organic matter.

(9) The study of extremophilic photosynthesis also has astrobiological implications. Understanding how photosynthetic pigments tolerate radiation, temperature, or desiccation extremes informs the search for extraterrestrial life. If life exists elsewhere, it may rely on alternative pigments tuned to different wavelengths of stellar light, such as infrared-absorbing bacteriochlorophylls.

(10) In all these systems, the underlying logic is clear: photosynthesis is not a rigid mechanism but an evolutionary canvas. Whether driven by sunlight, modified by climate, or replaced by chemical energy, it reveals life's persistent creativity in transforming energy into survival.`
            },
            {
                id: "p2",
                title: "The Chemistry of Ocean Acidification",
                text: `(1) The modern rise in atmospheric carbon dioxide has not only altered global climate but has also fundamentally changed the chemistry of the world's oceans. Ocean acidification refers to the progressive decline in seawater pH resulting from the ocean's absorption of anthropogenic CO₂. Since the dawn of the Industrial Revolution, the atmospheric concentration of CO₂ has increased from roughly 280 parts per million to more than 420. About one-third of this excess gas dissolves into the oceans, forming carbonic acid and initiating a cascade of chemical reactions that lower the average oceanic pH from about 8.2 to 8.1, a seemingly small but chemically significant shift. Because the pH scale is logarithmic, even a 0.1 change represents a substantial increase in hydrogen ion concentration.

(2) The fundamental chemistry can be summarized by the equilibria CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ ⇌ 2H⁺ + CO₃²⁻. Increasing atmospheric CO₂ drives these reactions toward the right, generating more hydrogen ions and reducing the concentration of carbonate ions, which are critical for forming calcium carbonate structures. Marine organisms such as corals, mollusks, and calcifying plankton depend on these ions to build skeletons and shells. When carbonate becomes scarce, organisms must expend more energy to precipitate calcium carbonate, resulting in slower growth, thinner shells, and weaker reef frameworks.

(3) Coral reefs represent one of the ecosystems most threatened by acidification. They host approximately one quarter of marine biodiversity and provide essential services including coastal protection, food supply, and tourism revenue. Experimental mesocosms show that coral calcification rates decline dramatically when seawater pH drops below 7.9, and certain species begin to dissolve when aragonite saturation falls beneath critical thresholds. Combined with thermal stress from rising sea surface temperatures, these chemical pressures accelerate coral bleaching and mortality. The collapse of reef habitats has cascading consequences for fish communities and the human economies that depend on them.

(4) Microscopic calcifiers, including coccolithophores and foraminifera, are less visible but equally vital. They form intricate calcium carbonate plates that contribute to marine snow, the slow descent of organic and inorganic particles to the seafloor. This process, known as the biological carbon pump, helps sequester atmospheric carbon over geological timescales. When acidification disrupts calcification, these plankton become smaller and less dense, weakening carbon export and potentially altering global carbon budgets. Their decline could even affect atmospheric properties because certain species emit dimethyl sulfide, a compound that seeds cloud formation and influences climate feedback loops.

(5) Regional variations in acidification reflect physical and chemical differences in ocean waters. Polar regions experience faster acidification because cold water absorbs more CO₂ and their natural alkalinity is relatively low. Upwelling zones, such as those off the Pacific coasts of North and South America, bring CO₂-rich deep waters to the surface, locally amplifying acidity. These patterns complicate predictions, as biological sensitivity can differ even among closely related species.

(6) The buffering capacity of seawater depends on total alkalinity, governed largely by the presence of bicarbonate and carbonate ions. According to Le Chatelier's principle, adding CO₂ shifts the equilibrium toward carbonic acid and bicarbonate formation, consuming carbonate ions in the process. Over time, as these ions are depleted, the ocean's ability to resist further pH change weakens, creating a positive feedback cycle. If carbonate saturation drops below key thresholds, existing shells and coralline structures begin to dissolve, accelerating ecological degradation.

(7) Some organisms show limited adaptability. Seagrasses and certain algae can locally raise pH through photosynthetic uptake of CO₂, creating transient refuges. Yet such effects are spatially confined and depend on sunlight availability. Physiological plasticity, such as increased expression of ion-transport proteins or altered shell mineralogy, may provide partial resilience, but few species can tolerate sustained, large-scale chemical alteration. Evolutionary adaptation occurs on timescales far longer than current CO₂ accumulation.

(8) Scientists monitor ocean acidification using moored buoys, autonomous profiling floats, and pH-sensitive optical sensors. Long-term datasets indicate a mean decrease of roughly 0.02 pH units per decade in surface waters. Satellite observations of CO₂ fluxes complement in situ measurements, revealing hotspots of acidification and informing global carbon models. These tools collectively establish acidification as one of the most precisely observed consequences of anthropogenic climate change.

(9) Mitigation and intervention strategies are actively studied. Reducing CO₂ emissions remains the only permanent solution, but local measures may offer temporary relief. For example, adding finely ground limestone or olivine to seawater can neutralize acidity and enhance alkalinity. However, these geoengineering approaches carry risks such as ecological imbalance, sediment overloading, and high energy costs. Large-scale deployment remains hypothetical, pending rigorous environmental assessment.

(10) Ultimately, ocean acidification underscores the intimate link between atmospheric chemistry and marine biology. It demonstrates how invisible molecular processes can restructure entire ecosystems and how global human activity can alter chemical equilibria governing life on Earth. Understanding these reactions is essential not only for predicting future changes but for designing an integrated response that balances chemistry, ecology, and economics.`
            },
            {
                id: "p3",
                title: "The Nature of Time and Relativity",
                text: `(1) Few scientific concepts are as universally felt yet poorly understood as time. To human intuition, time feels like a steady river, flowing uniformly from past to future. Classical physics embraced this intuition, treating time as an independent parameter that advanced identically for all observers. Albert Einstein's theories of special and general relativity overturned this assumption, revealing that time is elastic, variable, and inseparable from space. Together, space and time form a four-dimensional continuum called spacetime, in which events are characterized by both their spatial coordinates and their temporal position.

(2) Special relativity rests on two key postulates. First, the laws of physics are the same for all observers moving at constant velocity relative to one another. Second, the speed of light in a vacuum is identical for all such observers, regardless of their own motion or that of the light source. These statements lead inevitably to the relativity of simultaneity: two events that appear simultaneous to one observer may occur at different times for another who is moving. This idea replaces the notion of a universal clock with a frame-dependent concept of time.

(3) One of the most striking consequences of special relativity is time dilation. A moving clock ticks more slowly when viewed from the frame of a stationary observer. This is not an illusion but a measurable effect. Muons produced in the upper atmosphere by cosmic rays should decay quickly, yet many reach Earth's surface because their internal "clocks" run slower at high velocities. Similarly, atomic clocks flown on fast aircraft or placed on orbiting satellites record slightly less elapsed time than synchronized clocks that remain on Earth.

(4) General relativity extends these ideas to accelerated motion and gravity. In this theory, mass and energy curve spacetime, and this curvature dictates how objects move and how time passes. Clocks in stronger gravitational fields run more slowly than those in weaker fields, a phenomenon known as gravitational time dilation. Near the surface of Earth, the effect is tiny but measurable; clocks on mountaintops tick faster than those at sea level. Around massive stars or compact objects such as neutron stars, the difference becomes dramatic.

(5) These relativistic effects are not merely theoretical curiosities; they play a central role in modern technology. The Global Positioning System uses satellites orbiting thousands of kilometers above Earth, where gravity is weaker and orbital velocities are high. Both special and general relativistic corrections must be applied to the satellite clocks. Without these adjustments, GPS positioning errors would accumulate to several kilometers in a single day, making the system practically useless for navigation.

(6) Relativity also reshapes our understanding of extreme astrophysical objects. Near a black hole, spacetime curvature becomes so intense that an event horizon forms, beyond which nothing, not even light, can escape. For a distant observer, an object falling toward the event horizon appears to slow and then freeze in time, its light stretched to longer wavelengths in a process called gravitational redshift. At the singularity predicted at the center of a black hole, classical descriptions of space and time break down, signaling the limits of general relativity.

(7) Despite these insights, relativity does not explain why time seems to have a preferred direction, always moving from past to future. Thermodynamics offers a clue: the second law states that entropy, a measure of disorder, tends to increase in isolated systems. This monotonic increase gives rise to the so-called arrow of time. Phenomena such as mixing cream into coffee or breaking a glass illustrate processes that readily move toward higher entropy but virtually never reverse spontaneously.

(8) Quantum mechanics complicates this picture. The fundamental equations describing quantum systems are largely time-symmetric, meaning they look the same whether time runs forward or backward. Yet our macroscopic experience is irreversible. Some physicists argue that irreversibility emerges when quantum systems interact with their environments, causing decoherence that suppresses quantum superpositions and produces classical outcomes. How exactly this transition generates a clear arrow of time remains an open question.

(9) Cosmology extends the discussion of time to the scale of the entire universe. Many models posit that the arrow of time originates in the low-entropy state associated with the Big Bang. As the universe expanded and structures such as galaxies and stars formed, entropy increased, aligning the thermodynamic arrow of time with the direction of cosmic evolution. This viewpoint links everyday experiences of temporal flow to the initial conditions of the universe.

(10) Advances in experimental physics continue to sharpen our understanding of time. Ultra-precise optical lattice clocks can detect gravitational time differences over height separations of mere centimeters, demonstrating that even small changes in gravitational potential affect temporal rates. Interferometric experiments test relativity to extraordinary precision, searching for tiny deviations that might hint at a quantum theory of gravity. Together, these efforts portray time not as a passive backdrop but as a dynamic quantity woven into the structure of the cosmos.`
            }
        ],
        // Practice Test 8 - 3 passages
        [
            {
                id: "p1",
                title: "Gene Drives in Wild Populations",
                text: `(1) Traditional Mendelian inheritance dictates that each allele of a gene has a fifty percent chance of being passed to offspring. Gene drives are engineered genetic systems that bias this probability, increasing the likelihood that a particular trait spreads through a population. By coupling a gene of interest with a mechanism that copies itself onto the homologous chromosome, gene drives can in principle push a trait through an entire wild population in relatively few generations. This prospect has motivated considerable excitement because it appears to offer a way to control disease vectors and invasive species using their own reproduction.

(2) The most widely discussed implementation of a gene drive uses CRISPR based genome editing. In such designs, an organism carries a cassette that includes both the desired trait and the CRISPR machinery required to cut the wild type version of the target gene. When an individual that is heterozygous for the drive produces gametes, the CRISPR system cuts the non drive chromosome, and cellular repair processes use the drive containing chromosome as a template. As a result, nearly all gametes carry the drive, and the inheritance rate can approach one hundred percent rather than fifty.

(3) One of the earliest proposed applications involves mosquitoes that transmit malaria. By inserting a gene drive that either renders mosquitoes resistant to the malaria parasite or reduces their ability to reproduce, researchers hope to suppress or transform wild mosquito populations. Modeling studies suggest that a well designed drive released into a small number of individuals could rapidly spread across an entire region. In principle, even a few hundred engineered mosquitoes could influence millions of wild counterparts within a few years, far outpacing conventional control strategies.

(4) The same power that makes gene drives appealing also creates profound ecological and ethical concerns. Once released, a drive is extremely difficult to recall because every generation of organisms continues to copy and spread the drive through sexual reproduction. If the targeted population plays an important ecological role, such as serving as food for other species or pollinating plants, large scale alteration or suppression could have unpredictable ripple effects across ecosystems. These risks are especially troubling for applications that would operate across national boundaries where regulation and consent may differ.

(5) Technical challenges further complicate gene drive deployment. Wild populations are genetically diverse, and mutations that disrupt the CRISPR target site can create resistance alleles that no longer cut efficiently. These resistant variants can block the spread of the drive, or worse, combine with the drive in ways that produce unintended traits. Laboratory experiments in insects have already observed the emergence of resistance, suggesting that any real world system would have to account for evolutionary feedback rather than assuming perfect inheritance.

(6) To address these risks, scientists have proposed so called self limiting gene drives. One strategy involves designing drives that require the presence of a second, independently introduced element, limiting their spread to regions where both components are present. Another approach, sometimes called a daisy chain drive, arranges the genetic elements in a series where each component drives the next, but the chain gradually loses elements over generations, causing the system to fade out rather than persist indefinitely.

(7) Governance of gene drive research has become an international topic. Bodies such as the World Health Organization and national academies have convened panels to evaluate potential public health benefits and ecological risks. Many reports emphasize phased testing, beginning with contained laboratory studies, followed by field trials in isolated settings, and only then considering broader releases. Public engagement is also stressed, since affected communities may have different values and risk tolerances, particularly in regions that bear the burden of vector borne diseases.

(8) Intellectual property considerations add another layer of complexity. CRISPR technologies are subject to patents, and companies or institutions that control these rights may shape who can develop and deploy gene drives. Some advocates argue that life saving applications like malaria control should be governed under open or humanitarian licenses, while others note that robust regulation and liability frameworks may require identifiable ownership. The tension between open science and proprietary control is unlikely to disappear as technologies mature.

(9) Future gene drive designs may incorporate molecular safeguards that respond to environmental cues or chemical antidotes. For example, a drive could be constructed so that it functions only in the presence of a particular synthetic compound that is not found in nature, effectively creating an on off switch controlled by human intervention. Another possibility is to encode a reversal drive that targets and overwrites the original drive sequence, though such layers of control increase technical complexity and may themselves evolve in unexpected ways.

(10) Gene drives illustrate how advances in molecular biology transform our capacity to alter natural populations, blurring the line between conservation, public health, and environmental engineering. Whether they become routine tools or remain largely theoretical will depend not only on technical feasibility but also on collective decisions about acceptable risk, ecological responsibility, and global equity. The science enables rapid change; the harder question is how deliberately and under what rules it should be used.`
            },
            {
                id: "p2",
                title: "Solid-State Batteries and Next-Generation Energy Storage",
                text: `(1) Lithium ion batteries have become the dominant technology for portable electronics and electric vehicles because they combine relatively high energy density with acceptable cost and cycle life. However, conventional lithium ion cells rely on liquid organic electrolytes that are flammable and can form unstable interfaces with electrodes. Concerns about safety, volumetric energy density, and limits on fast charging have spurred interest in solid state batteries, in which the liquid electrolyte is replaced by a solid ion conducting material. Solid electrolytes promise improved safety and potentially higher energy density, but they introduce new materials and engineering challenges.

(2) In a typical lithium ion cell, lithium ions shuttle between a graphite anode and a layered oxide cathode through a liquid electrolyte containing a lithium salt dissolved in organic solvents. This liquid provides high ionic conductivity but is chemically reactive and can form dendritic lithium deposits under certain conditions. These needle like structures may penetrate the separator and cause internal short circuits that lead to overheating or fire. Solid electrolytes, by contrast, are expected to resist dendrite penetration more effectively and eliminate leakage and flammability risks associated with volatile solvents.

(3) Solid electrolytes fall into several major classes, including ceramic oxides, sulfide based glasses and crystals, and polymer based conductors. Oxide electrolytes such as garnet type lithium lanthanum zirconate exhibit good electrochemical stability and reasonable ionic conductivity but are brittle and difficult to process into thin, defect free layers. Sulfide electrolytes often possess higher ionic conductivity, comparable to or exceeding that of liquid electrolytes, and can be pressed into dense pellets at relatively low temperatures. However, they are more chemically sensitive to moisture and may release toxic gases when exposed to air.

(4) A key motivation for solid state designs is the possibility of pairing a solid electrolyte with a lithium metal anode. Lithium metal has a much higher specific capacity than graphite, which could significantly increase cell level energy density. Yet lithium metal is reactive, and its interface with the solid electrolyte must remain stable over many cycles. Reactions at this interface can form resistive layers that impede ion transport or initiate mechanical cracking. Engineering a chemically compatible, mechanically robust interface is one of the central challenges in solid state battery development.

(5) Cathode design also requires adaptation. Many high energy cathode materials expand and contract as lithium ions are inserted and removed. In conventional liquid cells, the liquid electrolyte can accommodate this volume change, maintaining ionic contact. In a fully solid cell, the intimate contact between solid cathode particles and solid electrolyte can be lost when materials deform, leading to increased resistance and capacity fade. Composite cathodes that mix active material, solid electrolyte, and conductive additives are being optimized to preserve percolating pathways for both ions and electrons during cycling.

(6) Manufacturing solid state cells at scale introduces additional hurdles. Producing uniform thin films of ceramic electrolytes requires high temperature sintering and careful control of porosity and grain boundaries. Even small defects can concentrate electric fields, promoting localized dendrite growth. Stacking multilayer cells with tight tolerances, while maintaining low interfacial resistance, adds further complexity. These challenges must be addressed without making costs prohibitively high compared with well established liquid electrolyte technologies.

(7) Despite these obstacles, several companies and research groups have demonstrated prototype solid state cells with impressive metrics. Some laboratory devices achieve high energy density, rapid charging, and thousands of cycles at moderate temperatures. However, many of these results rely on small area cells tested under controlled conditions that may not reflect real world usage. Scaling from coin cell demonstrations to large format automotive packs involves engineering problems that are distinct from those tackled in academic experiments.

(8) Safety is often cited as a major advantage for solid state batteries, but it is not guaranteed by the absence of liquid electrolyte alone. High energy density devices still store large amounts of chemical energy, and rapid release through internal short circuits or mechanical damage can cause heating and failure. Solid electrolytes themselves may fracture under impact, creating new failure pathways. Comprehensive safety assessment must therefore consider not only materials flammability but also mechanical robustness and system level design.

(9) The landscape of next generation batteries is not limited to solid state lithium systems. Alternatives such as sodium ion batteries, lithium sulfur cells, and multivalent chemistries based on magnesium or calcium are being investigated to reduce cost or increase energy density. Some of these approaches could also benefit from solid electrolytes, while others may retain liquids but employ different electrode materials. As a result, solid state technology represents one branch of a broader effort to evolve energy storage beyond the current lithium ion paradigm.

(10) Whether solid state batteries become the dominant successor will depend on progress in materials discovery, interface engineering, manufacturing, and cost reduction. Their development illustrates the complex trade offs inherent in energy technology: improving one attribute often exposes new limitations elsewhere. For engineers and policymakers, the challenge is to align performance, safety, and economics in ways that meet the demands of electrified transportation and grid storage without creating new vulnerabilities.`
            },
            {
                id: "p3",
                title: "Detecting Exoplanets",
                text: `(1) For most of human history, planets beyond our solar system were the subject of speculation rather than observation. The first confirmed exoplanets were detected in the 1990s, orbiting a pulsar, and since then thousands have been discovered around a wide variety of stars. Because these planets are faint compared with their host stars and lie at vast distances, astronomers rely on indirect detection methods that infer a planet's presence from the way it affects starlight or stellar motion. Each technique carries its own biases and sensitivities, shaping our emerging picture of planetary systems in the galaxy.

(2) One of the most productive methods is the transit technique. When a planet passes in front of its star as seen from Earth, it blocks a small fraction of the starlight, causing a periodic dimming. The depth of this dip in brightness reveals the planet's size relative to the star, while the time between transits gives its orbital period. Space telescopes such as Kepler and TESS have used high precision photometry to monitor hundreds of thousands of stars, identifying thousands of candidate transiting planets by searching for regular, repeating light curve signatures.

(3) However, transit surveys are inherently biased. They favor planets whose orbits happen to be aligned edge on with our line of sight, a geometric requirement that excludes many systems. The method is also more sensitive to large planets close to their stars because these produce deeper and more frequent transits. As a result, hot Jupiters and short period super Earths were among the earliest and easiest planets to find, even though they may be relatively rare in the galaxy compared with smaller, more distant worlds.

(4) The radial velocity technique provides complementary information by measuring tiny shifts in the wavelength of starlight caused by the star's motion around the system's center of mass. A planet exerts a gravitational tug on its host star, inducing a small periodic wobble. This wobble Doppler shifts the star's spectral lines alternately toward blue and red as it moves toward and away from Earth. From the amplitude and period of this signal, astronomers can determine a minimum mass for the planet and its orbital period, even when no transit is observed.

(5) By combining transit and radial velocity data for the same planet, scientists can infer both radius and mass, allowing them to calculate bulk density. This quantity provides clues about composition; high density suggests rocky worlds rich in iron and silicates, while low density points to gas dominated or ice rich planets. Such measurements have revealed a surprising diversity, including planets larger than Earth but smaller than Neptune, a class with no direct analog in our solar system.

(6) Direct imaging of exoplanets is far more challenging because it requires isolating the faint light of a planet from the overwhelming glare of its star. Specialized instruments use coronagraphs or starshades to block starlight and adaptive optics to correct blurring caused by Earth's atmosphere. Direct imaging works best for young, massive planets that emit their own infrared radiation and orbit far from their stars, where they are angularly separated from the stellar glare. Although only a modest number of planets have been imaged directly, this technique allows spectroscopic studies of their atmospheres.

(7) Another method, gravitational microlensing, exploits general relativity. When a foreground star passes almost directly in front of a background star, the foreground star's gravity acts as a lens, magnifying the background star's light. If the lens star hosts a planet, the planet produces a brief additional brightening. Microlensing is especially sensitive to planets at intermediate orbital distances and can detect planets that are too distant or faint for other methods, including free floating planets not bound to any star. However, microlensing events are rare, unpredictable, and typically cannot be repeated for the same system.

(8) Each detection technique has its own selection effects, and together they create an incomplete census of exoplanets. Transit and radial velocity surveys favor close in planets, direct imaging captures wide orbit giants, and microlensing samples more distant regions of the galaxy. To infer underlying population statistics, astronomers must correct for these biases, a task that requires detailed modeling of survey sensitivities and observational limitations.

(9) The ultimate goal of many exoplanet studies is to identify potentially habitable worlds, particularly Earth sized planets in the habitable zone where liquid water could exist on the surface. This requires not only detecting planets of appropriate size and orbital distance but also characterizing their atmospheres. Upcoming space telescopes plan to use transit spectroscopy, in which starlight filters through a planet's atmosphere during transit, imprinting signatures of molecules such as water vapor, carbon dioxide, or methane. Interpreting these signatures is challenging, because abiotic processes can mimic some features that might otherwise be taken as signs of life.

(10) Exoplanet detection methods thus serve not only as technical tools but also as filters through which we view planetary diversity. They shape the catalog of known worlds and influence which questions can be asked about planet formation, atmospheric evolution, and the frequency of habitable environments. As instrumentation advances, combining multiple techniques will be essential to move from mere detection toward a deeper physical understanding of planets beyond our solar system.`
            }
        ],
        // Practice Test 9 - 3 passages
        [
            {
                id: "p1",
                title: "RNA Interference and Gene Regulation",
                text: `(1) For much of the twentieth century, gene expression was framed as a linear flow of information from DNA to RNA to protein. Regulation was understood largely in terms of transcription factors and promoter elements that controlled whether genes were transcribed into messenger RNA. The discovery of RNA interference revealed an additional layer of post transcriptional control in which small RNA molecules guide the selective silencing of target transcripts. This process, first characterized in plants and nematode worms, is now recognized as a conserved mechanism across eukaryotic life and an important tool in biotechnology.

(2) RNA interference involves small double stranded RNA molecules that are processed by cellular enzymes into short fragments, typically about twenty one to twenty three nucleotides long. These small interfering RNAs are loaded into a protein complex known as the RNA induced silencing complex. Within this complex, one strand of the small RNA serves as a guide that directs the complex to complementary messenger RNAs. Once bound, the complex can cleave the target RNA or inhibit its translation, thereby reducing the amount of protein that is produced.

(3) In addition to experimentally introduced small interfering RNAs, many organisms produce endogenous microRNAs that function through similar pathways. MicroRNAs are encoded in the genome and processed from longer precursor transcripts. They often bind imperfectly to target messenger RNAs, leading to translational repression or destabilization rather than precise cleavage. Because a single microRNA can regulate multiple targets, these molecules participate in intricate gene regulatory networks that fine tune development, stress responses, and cell identity.

(4) One biological role of RNA interference appears to be defense against viruses and mobile genetic elements. Many plant and invertebrate viruses generate double stranded RNA intermediates during replication. These molecules are recognized by the RNA interference machinery, which produces small interfering RNAs that direct degradation of viral transcripts. Similarly, transposable elements that threaten genomic stability can be targeted by small RNAs that silence their expression. In this view, RNA interference serves as a molecular immune system operating at the level of RNA.

(5) The discovery that double stranded RNA could silence specific genes in a sequence dependent manner inspired its use as an experimental tool. Researchers can design small interfering RNAs to target virtually any gene of interest, allowing rapid knockdown of gene expression without altering DNA. This has transformed functional genomics, enabling systematic screens in cultured cells and model organisms. By observing the effects of silencing different genes, scientists can infer their roles in pathways ranging from cell division to metabolism.

(6) Therapeutic applications of RNA interference are more challenging because small RNAs must be delivered safely and efficiently to specific tissues in the human body. Naked RNA is rapidly degraded in the bloodstream and does not readily cross cell membranes. Strategies to overcome these barriers include chemical modification of RNA to increase stability, conjugation to targeting molecules such as lipids or sugars, and encapsulation in nanoparticles or viral vectors. Several RNA interference based drugs have been approved for rare liver diseases, where delivery is facilitated by the liver's role in clearing circulating molecules.

(7) Off target effects represent another difficulty. Small RNAs can sometimes partially complement unintended transcripts, leading to unanticipated changes in gene expression. Careful design and extensive testing are required to minimize such effects and to distinguish genuine on target silencing from secondary consequences. In clinical contexts, off target activity could produce toxicity or reduce efficacy if critical genes are inadvertently suppressed.

(8) In plants, RNA interference has been used to engineer resistance to viral pathogens and to modify traits such as pigment production or nutrient content. Because the mechanism relies on RNA level regulation rather than insertion of foreign proteins, some proponents argue that RNA interference based crops may raise fewer safety concerns than traditional transgenic plants. However, debates continue over ecological impacts, such as potential effects on non target organisms that feed on modified plants and ingest small RNAs.

(9) The role of microRNAs in human disease has become a major area of research. Altered microRNA expression profiles have been associated with many cancers, cardiovascular disorders, and neurological conditions. In some cases, microRNAs function as oncogenes by downregulating tumor suppressor genes, while in others they act as tumor suppressors themselves. Therapeutic strategies being explored include restoring missing microRNAs or inhibiting overactive ones using antisense oligonucleotides.

(10) RNA interference and related pathways thus expand the concept of gene regulation beyond transcription. They reveal that RNA is not simply a transient messenger but an active player in controlling which genes are expressed, when, and how strongly. As both a natural defense mechanism and a programmable tool, RNA based silencing technologies offer powerful means to interrogate and potentially treat complex biological systems, even as delivery, specificity, and safety challenges remain.`
            },
            {
                id: "p2",
                title: "Fuel Cells and the Hydrogen Energy System",
                text: `(1) Modern societies rely heavily on combustion of fossil fuels to power transportation and generate electricity. This reliance contributes to greenhouse gas emissions and air pollution. Fuel cells offer an alternative approach that converts chemical energy directly into electrical energy through electrochemical reactions rather than combustion. In principle, fuel cells can achieve higher efficiencies and emit only water when fueled with pure hydrogen, making them attractive components of a lower carbon energy system.

(2) A typical proton exchange membrane fuel cell consists of an anode and cathode separated by a polymer electrolyte membrane that conducts protons but blocks electrons and gases. Hydrogen gas supplied to the anode is catalytically split into protons and electrons. The protons migrate through the membrane to the cathode, while the electrons travel through an external circuit, providing useful electrical power. At the cathode, oxygen from air combines with protons and electrons to form water, closing the electrochemical loop.

(3) The performance of a fuel cell depends on several factors, including catalyst activity, membrane conductivity, gas diffusion, and water management. Platinum based catalysts are commonly used at both electrodes to promote hydrogen oxidation and oxygen reduction. However, platinum is expensive and susceptible to poisoning by impurities such as carbon monoxide. Considerable research focuses on reducing platinum loading, developing alloy catalysts with improved durability, and exploring non precious metal alternatives.

(4) The proton exchange membrane must maintain high ionic conductivity while remaining mechanically robust and impermeable to gases. Most commercial membranes are based on perfluorosulfonic acid polymers, which require adequate hydration to conduct protons effectively. This creates a delicate balance: membranes that dry out exhibit high resistance, while excessive water can flood the gas diffusion layers, blocking reactant access to catalyst sites. Engineers design flow fields and humidification strategies to maintain proper water balance across a range of operating conditions.

(5) Hydrogen supply also presents challenges. Pure hydrogen does not occur abundantly in nature and must be produced from other sources. Today, most hydrogen is generated from natural gas by steam methane reforming, a process that emits carbon dioxide unless paired with carbon capture technologies. Alternatively, hydrogen can be produced by electrolysis of water using renewable electricity, which avoids direct emissions but requires significant infrastructure and investment. Storage and transport of hydrogen gas raise additional concerns due to its low volumetric energy density and tendency to leak.

(6) Fuel cells are not limited to hydrogen as a fuel. Some systems, such as solid oxide fuel cells, operate at high temperatures and can use hydrocarbons or ammonia directly, internally reforming these fuels into hydrogen and carbon monoxide. High temperature operation yields high electrical efficiency and allows cogeneration of heat, but materials must withstand thermal stress and chemical reactivity. In contrast, proton exchange membrane fuel cells operate at lower temperatures and respond quickly to load changes, making them suitable for vehicles but less tolerant of fuel impurities.

(7) The integration of fuel cells into transportation requires more than efficient cells. Vehicles need onboard fuel storage, power electronics, and safety systems. Compressed hydrogen tanks must meet stringent standards to prevent leaks and withstand crashes. Refueling infrastructure, including high pressure dispensers and supply logistics, represents a major capital investment. Without widespread fueling stations, consumer adoption of fuel cell vehicles remains limited, creating a chicken and egg problem between infrastructure and demand.

(8) From a systems perspective, fuel cells compete with batteries and conventional engines. Battery electric vehicles convert grid electricity to stored electrochemical energy and back with high round trip efficiency, but their range and charging times are constrained by battery capacity and charging infrastructure. Fuel cell vehicles can refuel quickly and potentially offer longer range, especially for heavy duty applications, but hydrogen production and distribution introduce additional energy losses. Comparing these technologies requires life cycle assessments that include fuel production, distribution, and end use.

(9) In stationary power applications, fuel cells can provide reliable backup or combined heat and power. Because they produce electricity electrochemically, they can operate quietly with low local emissions. Data centers, hospitals, and remote facilities have deployed fuel cell systems to enhance resilience. Their economic competitiveness depends on fuel price, capital cost, and policy incentives such as carbon pricing or subsidies for low emission technologies.

(10) Fuel cells and hydrogen therefore represent both a technical opportunity and a logistical challenge. They offer a means to decouple energy conversion from combustion, but their environmental benefits depend on how hydrogen is produced and how systems are deployed. As part of a broader portfolio that includes renewable electricity, energy storage, and efficiency improvements, fuel cell technology could contribute to decarbonizing sectors that are difficult to electrify directly, provided that material costs, infrastructure, and emissions across the value chain are addressed.`
            },
            {
                id: "p3",
                title: "Superconductivity and Its Applications",
                text: `(1) In most materials, electrical resistance converts part of the energy carried by moving electrons into heat. This dissipation imposes limits on power transmission and electronic performance. Superconductivity is a quantum state of matter in which electrical resistance drops to exactly zero below a critical temperature. When a material becomes superconducting, an electric current can flow indefinitely without energy loss, at least in principle, and magnetic fields interact with the material in unusual ways.

(2) Superconductivity was first observed in 1911 when mercury was cooled to a few degrees above absolute zero and its resistance vanished abruptly. For decades, superconductivity was found only in a small set of metals and alloys at very low temperatures, often requiring liquid helium for cooling. The development of the Bardeen Cooper Schrieffer theory in the 1950s explained conventional superconductivity as the formation of Cooper pairs, bound states of electrons that move coherently through the crystal lattice without scattering.

(3) In this framework, lattice vibrations known as phonons mediate an effective attraction between electrons with opposite spin and momentum. Below the critical temperature, a macroscopic quantum state forms as electrons condense into Cooper pairs. Breaking a pair requires a finite energy, creating an energy gap that suppresses scattering. Because scattering is linked to resistance, the material exhibits zero resistivity. The theory successfully accounts for many properties of elemental superconductors, including their critical temperatures and magnetic behavior.

(4) A striking feature of superconductors is the Meissner effect, in which a material expels magnetic fields from its interior upon entering the superconducting state. Rather than simply becoming a perfect conductor that preserves pre existing fields, a superconductor actively excludes magnetic flux, except within a thin surface layer. This phenomenon results in magnetic levitation when a magnet is placed above a superconducting slab cooled below its critical temperature, creating frictionless bearings and visually dramatic demonstrations of quantum mechanics.

(5) Practical applications emerged with the ability to fabricate superconducting wires and magnets. High field superconducting magnets are essential components of magnetic resonance imaging scanners and many particle accelerators. By carrying large currents without resistive heating, these magnets can generate strong, stable magnetic fields that would be difficult or impossible to achieve with conventional copper coils. However, maintaining superconducting conditions requires constant cooling and careful control of mechanical and thermal stresses.

(6) The discovery of high temperature superconductors in copper oxide ceramics in the 1980s expanded the field. These materials exhibit superconductivity at temperatures well above the boiling point of liquid nitrogen, making cooling more practical and less costly than liquid helium systems. Despite intense study, their mechanism does not fit neatly into the Bardeen Cooper Schrieffer framework, and the precise origin of pairing remains an open problem. Their brittle nature and complex crystal structures also complicate wire fabrication and large scale deployment.

(7) Superconducting power cables and fault current limiters have been demonstrated as potential grid technologies. Power cables made from superconducting tapes can transmit large currents in compact conduits, reducing resistive losses and easing constraints in densely built environments. Fault current limiters exploit the fact that superconductors revert to a resistive state when currents exceed critical values, providing protective responses to sudden surges. Economic factors, reliability, and the cost of cryogenic infrastructure influence whether these technologies become widespread.

(8) In the realm of quantum information, superconducting circuits form one of the leading platforms for realizing quantum bits. Superconducting loops interrupted by Josephson junctions exhibit quantized energy levels that can be manipulated with microwave pulses. These circuits operate at temperatures near absolute zero and are coupled to control electronics that prepare, manipulate, and measure quantum states. Scaling up to large numbers of interconnected qubits while preserving coherence is a major engineering challenge.

(9) Reports of room temperature superconductivity occasionally appear, often associated with high pressure hydride materials. While some experiments claim superconductivity at or near ambient conditions under extreme pressures, independent verification and reproducibility remain active areas of scrutiny. Achieving robust superconductivity at room temperature and normal pressure would revolutionize energy and electronics, but the path from exotic high pressure phases to practical materials is uncertain.

(10) Superconductivity thus sits at the intersection of fundamental physics and technological ambition. It exemplifies how quantum phenomena manifest on macroscopic scales and how materials science can harness them for imaging, computation, and power systems. Yet every application must contend with the demands of cooling, fabrication, and stability. Whether future advances bring higher temperature materials or new device architectures, superconductors will continue to test both our understanding of condensed matter and our creativity in using it.`
            }
        ]
    ]
};

// Global state
let currentSubject = null;
let currentTestIndex = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let markedQuestions = {};
let testTimer = null;
let timeRemaining = 1800; // 30 minutes in seconds
let prometricDelay = false;
let timeAccommodations = false;
let questionStartTime = {}; // Track when each question was started
let questionTimeSpent = {}; // Track time spent on each question
let testStartTime = null; // Track when test started
let detailedReviewQuestionIndex = 0; // Current question in detailed review
let highlights = {}; // Store highlights: key = "subject-testIndex-questionIndex", value = array of highlight objects
let passageHighlights = {}; // Store passage HTML with highlights: key = "subject-testIndex-passage-N", value = HTML string
let highlightCounter = 0; // Unique ID counter for highlights
let showHighlightButton = false; // Track if highlight button should be shown
let highlightButtonPosition = { x: 0, y: 0 }; // Position for highlight button
const TEST_HISTORY_STORAGE_KEY = 'opto-test-history-v1';
let lastResultRecord = null;
let lastAttemptList = [];
let lastQuestionCount = 0;


(function setupGlobalErrorReporter() {
    function ensureErrorBanner() {
        let banner = document.getElementById('app-error-banner');
        if (!banner) {
            banner = document.createElement('div');
            banner.id = 'app-error-banner';
            banner.style.position = 'fixed';
            banner.style.top = '0';
            banner.style.left = '0';
            banner.style.right = '0';
            banner.style.zIndex = '9999';
            banner.style.background = '#b91c1c';
            banner.style.color = '#fff';
            banner.style.padding = '12px 16px';
            banner.style.fontFamily = 'Arial, sans-serif';
            banner.style.fontSize = '14px';
            banner.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
            banner.style.display = 'none';

            const attach = () => {
                if (!document.body) {
                    setTimeout(attach, 50);
                    return;
                }
                if (!document.body.contains(banner)) {
                    document.body.appendChild(banner);
                }
            };

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', attach);
            } else {
                attach();
            }
        }
        return banner;
    }

    function reportError(message) {
        const banner = ensureErrorBanner();
        const text = typeof message === 'string' ? message : (message && message.message) ? message.message : 'Unknown error';
        const timestamp = new Date().toLocaleTimeString();
        banner.textContent = `[${timestamp}] ${text}`;
        banner.style.display = 'block';
    }

    window.addEventListener('error', (event) => {
        const { message, error } = event;
        if (error && error.stack) {
            console.error('Unhandled error:', error);
        }
        reportError(message || error || 'Unhandled error');
    });

    window.addEventListener('unhandledrejection', (event) => {
        const reason = event.reason;
        if (reason && reason.stack) {
            console.error('Unhandled rejection:', reason);
        }
        reportError(reason || 'Unhandled promise rejection');
    });
})();

const SUBJECT_COLORS = {
    default: '#0e5c84'
};

function setSubjectColor(color) {
    // Theme colors are fixed to Bootcamp blue; no-op retained for compatibility
    return color || SUBJECT_COLORS.default;
}

function loadTestHistory() {
    try {
        const raw = localStorage.getItem(TEST_HISTORY_STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : {};
        return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (error) {
        console.error('Failed to load test history:', error);
        return {};
    }
}

function saveTestHistory(history) {
    try {
        localStorage.setItem(TEST_HISTORY_STORAGE_KEY, JSON.stringify(history));
    } catch (error) {
        console.error('Failed to save test history:', error);
    }
}

function getTestHistoryKey(subject, index) {
    return `${subject || 'unknown'}::${index ?? '0'}`;
}

function getTestAttempts(subject, index) {
    const history = loadTestHistory();
    const key = getTestHistoryKey(subject, index);
    const attempts = history[key];
    return Array.isArray(attempts) ? attempts : [];
}

function recordTestAttempt(attempt) {
    const history = loadTestHistory();
    const key = getTestHistoryKey(attempt.subject, attempt.testIndex);
    const existing = Array.isArray(history[key]) ? history[key] : [];
    existing.push(attempt);
    history[key] = existing;
    saveTestHistory(history);
    return existing;
}

function resetTestAttempts(subject, index) {
    const history = loadTestHistory();
    const key = getTestHistoryKey(subject, index);
    if (history[key]) {
        delete history[key];
        saveTestHistory(history);
    }
}

function getScaledScore(scorePercent) {
    const percent = isNaN(scorePercent) ? 0 : Math.max(0, Math.min(100, scorePercent));
    return 200 + Math.round((percent / 100) * 200);
}

function formatResultDate(dateIso) {
    if (!dateIso) return '--';
    try {
        const date = new Date(dateIso);
        if (Number.isNaN(date.getTime())) return '--';
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    } catch (error) {
        console.warn('Unable to format result date:', error);
        return '--';
    }
}

function formatTimeDisplay(totalSeconds) {
    if (totalSeconds === undefined || totalSeconds === null || Number.isNaN(totalSeconds)) {
        return '--';
    }
    const seconds = Math.max(0, Math.round(totalSeconds));
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;
    if (minutes === 0) {
        return `${remaining}s`;
    }
    return `${minutes}m ${remaining}s`;
}

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Get highlight key for current question
function getHighlightKey() {
    return `${currentSubject}-${currentTestIndex}-${currentQuestionIndex}`;
}

// Setup highlighting listeners
function setupHighlightListeners() {
    const contentArea = document.getElementById('test-content-area');
    const passageText = document.getElementById('test-passage-text');
    const choiceLabels = document.querySelectorAll('.choice-label');
    
    // Remove existing listeners
    if (contentArea) {
        contentArea.removeEventListener('mouseup', handleTextSelection);
    }
    if (passageText) {
        passageText.removeEventListener('mouseup', handleTextSelection);
    }
    choiceLabels.forEach(label => {
        label.removeEventListener('mouseup', handleTextSelection);
    });
    document.removeEventListener('mousedown', handleClickOutside);
    
    // Add new listeners
    if (contentArea) {
        contentArea.addEventListener('mouseup', handleTextSelection);
    }
    if (passageText) {
        passageText.addEventListener('mouseup', handleTextSelection);
    }
    choiceLabels.forEach(label => {
        label.addEventListener('mouseup', handleTextSelection);
    });
    document.addEventListener('mousedown', handleClickOutside);
}

// Handle text selection
function handleTextSelection(e) {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
        showHighlightButton = false;
        removeHighlightButton();
        return;
    }
    
    const range = selection.getRangeAt(0);
    const contentArea = document.getElementById('test-content-area');
    const passageText = document.getElementById('test-passage-text');
    const choiceLabels = document.querySelectorAll('.choice-label');
    
    // Check if selection is within content area, passage area, or choice labels
    const isInContent = contentArea && contentArea.contains(range.commonAncestorContainer);
    const isInPassage = passageText && passageText.contains(range.commonAncestorContainer);
    let isInChoice = false;
    choiceLabels.forEach(label => {
        if (label.contains(range.commonAncestorContainer)) {
            isInChoice = true;
        }
    });
    
    if (!isInContent && !isInPassage && !isInChoice) {
        showHighlightButton = false;
        removeHighlightButton();
        return;
    }
    
    // Get position for highlight button
    const rect = range.getBoundingClientRect();
    highlightButtonPosition = {
        x: rect.right + window.scrollX + 6,
        y: rect.top + window.scrollY - 6
    };
    
    showHighlightButton = true;
    showHighlightButtonUI();
}

// Show highlight button UI
function showHighlightButtonUI() {
    removeHighlightButton();
    
    const button = document.createElement('button');
    button.id = 'highlight-action-btn';
    button.className = 'fixed z-50';
    button.style.cssText = `
        left: ${highlightButtonPosition.x}px;
        top: ${highlightButtonPosition.y}px;
        width: 28px;
        height: 28px;
        border: 1px solid #b7b7b7;
        background: #f2f2f2;
        box-shadow: 0 0 0 1px #ffffff inset, 0 2px 3px rgba(0,0,0,0.25);
        border-radius: 2px;
        padding: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    button.title = 'Highlight selected text';
    button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2" y="18" width="20" height="4" fill="#ffff66" stroke="#cccc00" stroke-width="1"/>
            <path d="M14.5 2.8l6.7 6.7-9.9 9.9H5v-6.3l9.5-10.3z" fill="#ffd700" stroke="#cc9900" stroke-width="1"/>
            <path d="M5 20h6.8" stroke="#999900" stroke-width="1.2"/>
        </svg>
    `;
    button.onclick = (e) => {
        e.stopPropagation();
        createHighlight();
    };
    document.body.appendChild(button);
}

// Remove highlight button
function removeHighlightButton() {
    const existingBtn = document.getElementById('highlight-action-btn');
    if (existingBtn) {
        existingBtn.remove();
    }
}

// Handle click outside
function handleClickOutside(e) {
    const contentArea = document.getElementById('test-content-area');
    const passageText = document.getElementById('test-passage-text');
    const highlightBtn = document.getElementById('highlight-action-btn');
    const toggleBtn = e.target.closest('.highlight-toggle-btn');
    
    if (contentArea && contentArea.contains(e.target)) {
        return; // Click is inside content area
    }
    
    if (passageText && passageText.contains(e.target)) {
        return; // Click is inside passage area
    }
    
    if (highlightBtn && highlightBtn.contains(e.target)) {
        return; // Click is on highlight button
    }
    
    // Click is outside, hide button and clear selection
    showHighlightButton = false;
    removeHighlightButton();
    window.getSelection().removeAllRanges();
}

// Create highlight
function createHighlight() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
        removeHighlightButton();
        return;
    }
    
    const range = selection.getRangeAt(0);
    const contentArea = document.getElementById('test-content-area');
    const passageText = document.getElementById('test-passage-text');
    const choiceLabels = document.querySelectorAll('.choice-label');
    
    const isInContent = contentArea && contentArea.contains(range.commonAncestorContainer);
    const isInPassage = passageText && passageText.contains(range.commonAncestorContainer);
    let isInChoice = false;
    choiceLabels.forEach(label => {
        if (label.contains(range.commonAncestorContainer)) {
            isInChoice = true;
        }
    });
    
    if (!isInContent && !isInPassage && !isInChoice) {
        removeHighlightButton();
        return;
    }
    
    // Create highlight element - directly in yellow
    const highlightId = `highlight-${highlightCounter++}`;
    const mark = document.createElement('mark');
    mark.id = highlightId;
    mark.className = 'text-highlight highlight-yellow';
    mark.style.cssText = `
        background-color: #ffff66;
        color: inherit;
        padding: 0 2px;
        display: inline;
    `;
    
    try {
        // Extract and wrap selected content
        const contents = range.extractContents();
        mark.appendChild(contents);
        range.insertNode(mark);
        
        // Normalize to merge adjacent text nodes
        if (mark.parentNode) {
            mark.parentNode.normalize();
        }
        
        // Add double-click to remove highlight
        mark.addEventListener('dblclick', (e) => {
            e.preventDefault();
            e.stopPropagation();
            removeHighlight(mark, highlightId);
        });
        
        // Add right-click to cross out (strikethrough) functionality
        mark.setAttribute('data-strikethrough-enabled', 'true');
        mark.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle strikethrough
            if (mark.style.textDecoration.includes('line-through')) {
                mark.style.textDecoration = 'none';
            } else {
                mark.style.textDecoration = 'line-through';
            }
            
            // Save updated highlight
            saveHighlight(highlightId, mark);
            
            // If highlight is in passage, save passage HTML
            const passageText = document.getElementById('test-passage-text');
            if (passageText && passageText.contains(mark)) {
                const passageIndex = Math.floor(currentQuestionIndex / 16);
                const passageKey = `${currentSubject}-${currentTestIndex}-passage-${passageIndex}`;
                passageHighlights[passageKey] = passageText.innerHTML;
            }
        });
        
        // Save highlight (no toggle button needed)
        saveHighlight(highlightId, mark);
        
        // If highlight is in passage, save passage HTML
        const passageText = document.getElementById('test-passage-text');
        if (passageText && passageText.contains(mark)) {
            const passageIndex = Math.floor(currentQuestionIndex / 16);
            const passageKey = `${currentSubject}-${currentTestIndex}-passage-${passageIndex}`;
            passageHighlights[passageKey] = passageText.innerHTML;
        }
        
        // Clear selection and hide button
        selection.removeAllRanges();
        removeHighlightButton();
    } catch (err) {
        console.error('Error creating highlight:', err);
    }
}

// Remove highlight properly
function removeHighlight(markElement, highlightId) {
    if (!markElement || !markElement.parentNode) return;
    
    try {
        // Get the parent node
        const parent = markElement.parentNode;
        
        // Create a document fragment to hold the text nodes
        const fragment = document.createDocumentFragment();
        
        // Move all child nodes (text nodes) from the mark to the fragment
        while (markElement.firstChild) {
            fragment.appendChild(markElement.firstChild);
        }
        
        // Replace the mark element with its text content
        parent.replaceChild(fragment, markElement);
        
        // Normalize the parent to merge adjacent text nodes
        parent.normalize();
        
        // Remove from highlights storage
        const key = getHighlightKey();
        if (highlights[key]) {
            highlights[key] = highlights[key].filter(h => h.id !== highlightId);
            if (highlights[key].length === 0) {
                delete highlights[key];
            }
        }
        
        // If highlight is in passage, save passage HTML
        const passageText = document.getElementById('test-passage-text');
        if (passageText && passageText.contains(parent)) {
            const passageIndex = Math.floor(currentQuestionIndex / 16);
            const passageKey = `${currentSubject}-${currentTestIndex}-passage-${passageIndex}`;
            passageHighlights[passageKey] = passageText.innerHTML;
        }
    } catch (err) {
        console.error('Error removing highlight:', err);
    }
}

// Toggle button functionality removed - highlights are now directly yellow

// Save highlight
function saveHighlight(highlightId, markElement) {
    const key = getHighlightKey();
    if (!highlights[key]) {
        highlights[key] = [];
    }
    
    // Get text content and position info
    const text = markElement.textContent;
    
    highlights[key].push({
        id: highlightId,
        text: text,
        color: 'yellow', // Always yellow now
        html: markElement.outerHTML
    });
}

// Clear all highlights and strikethroughs (when leaving exam without completing)
function clearHighlightsAndStrikethroughs() {
    // Clear in-memory highlights
    highlights = {};
    passageHighlights = {};
    highlightCounter = 0;
    
    // Clear localStorage strikethroughs for current test
    if (currentSubject && currentTestIndex !== null) {
        const test = allTestData[currentSubject] && allTestData[currentSubject][currentTestIndex];
        if (test) {
            test.forEach((q, i) => {
                q.c.forEach((choice, j) => {
                    const choiceKey = `${currentSubject}-${currentTestIndex}-${i}-${j}`;
                    localStorage.removeItem(`strikethrough-${choiceKey}`);
                });
            });
        }
    }
    
    // Clear localStorage highlights for current test (only if not completed)
    if (currentSubject && currentTestIndex !== null) {
        const test = allTestData[currentSubject] && allTestData[currentSubject][currentTestIndex];
        if (test) {
            test.forEach((q, i) => {
                const key = `${currentSubject}-${currentTestIndex}-${i}`;
                localStorage.removeItem(`highlights-${key}`);
                const passageIndex = Math.floor(i / 16);
                localStorage.removeItem(`passageHighlights-${currentSubject}-${currentTestIndex}-passage-${passageIndex}`);
            });
        }
    }
}

// Save highlights to localStorage (only when test is completed)
function saveHighlightsToLocalStorage() {
    if (!currentSubject || currentTestIndex === null) return;
    
    try {
        // Save highlights
        Object.keys(highlights).forEach(key => {
            localStorage.setItem(`highlights-${key}`, JSON.stringify(highlights[key]));
        });
        
        // Save passage highlights
        Object.keys(passageHighlights).forEach(key => {
            localStorage.setItem(`passageHighlights-${key}`, passageHighlights[key]);
        });
    } catch (e) {
        console.error('Failed to save highlights to localStorage:', e);
    }
}

// Load highlights from localStorage (only for completed tests)
function loadHighlightsFromLocalStorage() {
    if (!currentSubject || currentTestIndex === null) return;
    
    try {
        const test = allTestData[currentSubject] && allTestData[currentSubject][currentTestIndex];
        if (!test) return;
        
        // Load highlights
        test.forEach((q, i) => {
            const key = `${currentSubject}-${currentTestIndex}-${i}`;
            const saved = localStorage.getItem(`highlights-${key}`);
            if (saved) {
                highlights[key] = JSON.parse(saved);
            }
        });
        
        // Load passage highlights
        test.forEach((q, i) => {
            const passageIndex = Math.floor(i / 16);
            const passageKey = `${currentSubject}-${currentTestIndex}-passage-${passageIndex}`;
            const saved = localStorage.getItem(`passageHighlights-${passageKey}`);
            if (saved) {
                passageHighlights[passageKey] = saved;
            }
        });
    } catch (e) {
        console.error('Failed to load highlights from localStorage:', e);
    }
}

// Re-attach highlight toggle buttons - no longer needed, highlights are just yellow
// But we need to re-attach right-click strikethrough functionality
function reattachHighlightButtons(container) {
    if (!container) return;
    
    // Find all highlight marks in the container
    const marks = container.querySelectorAll('mark.text-highlight');
    marks.forEach(mark => {
        const highlightId = mark.id;
        if (!highlightId) return;
        
        // Only add listener if not already added (check data attribute)
        if (mark.getAttribute('data-strikethrough-enabled') !== 'true') {
            mark.setAttribute('data-strikethrough-enabled', 'true');
            
            // Add double-click to remove highlight
            mark.addEventListener('dblclick', (e) => {
                e.preventDefault();
                e.stopPropagation();
                removeHighlight(mark, highlightId);
            });
            
            // Add right-click to cross out (strikethrough) functionality
            mark.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle strikethrough
                if (mark.style.textDecoration.includes('line-through')) {
                    mark.style.textDecoration = 'none';
                } else {
                    mark.style.textDecoration = 'line-through';
                }
                
                // Save updated highlight
                saveHighlight(highlightId, mark);
                
                // If highlight is in passage, save passage HTML
                const passageText = document.getElementById('test-passage-text');
                if (passageText && passageText.contains(mark)) {
                    const passageIndex = Math.floor(currentQuestionIndex / 16);
                    const passageKey = `${currentSubject}-${currentTestIndex}-passage-${passageIndex}`;
                    passageHighlights[passageKey] = passageText.innerHTML;
                }
            });
        }
    });
}

// Restore highlights
function restoreHighlights() {
    const key = getHighlightKey();
    const questionHighlights = highlights[key] || [];
    
    if (questionHighlights.length === 0) {
        return;
    }
    
    // This is a simplified version - in a real implementation, you'd need to
    // match highlights to their original positions in the text
    // For now, we'll store the HTML and restore it
    // Note: This is a basic implementation. A full solution would require
    // storing range information or using a more sophisticated approach
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set up event listeners
    setupEventListeners();
    // Load saved state
    loadSavedState();
    
    // Ensure dashboard view is shown by default
    const dashboardView = document.getElementById('dashboard-view');
    if (dashboardView) {
        dashboardView.style.display = 'block';
    }
}

function setupEventListeners() {
    // Navigation - exclude Home button and Subjects button from generic handler
    document.querySelectorAll('.sidebar-link').forEach(link => {
        // Skip Home and Subjects buttons as they have their own onclick handlers
        if (link.id === 'nav-home' || link.id === 'nav-subjects') {
            return;
        }
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const subject = this.textContent.trim();
            showSubject(subject, e);
        });
    });

    // Pre-test next button
    const preTestNextBtn = document.getElementById('pre-test-next-btn');
    if (preTestNextBtn) {
        preTestNextBtn.addEventListener('click', startTest);
    }

    // Test navigation buttons
    const testPrevBtn = document.getElementById('test-prev-btn');
    const testNextBtn = document.getElementById('test-next-btn');
    const testMarkBtn = document.getElementById('test-mark-btn');
    const testReviewBtn = document.getElementById('test-review-btn');
    const reviewMarkBtn = document.getElementById('review-mark-btn');

    if (testPrevBtn) testPrevBtn.addEventListener('click', prevQuestion);
    if (testNextBtn) testNextBtn.addEventListener('click', nextQuestion);
    if (testMarkBtn) {
        testMarkBtn.addEventListener('click', () => {
            toggleMark(currentQuestionIndex);
        });
    }
    if (testReviewBtn) testReviewBtn.addEventListener('click', showReviewView);
    if (reviewMarkBtn) {
        reviewMarkBtn.addEventListener('click', () => {
            if (typeof detailedReviewQuestionIndex === 'number') {
                toggleMark(detailedReviewQuestionIndex, { context: 'detailed-review' });
            }
        });
    }

    // Toggle switches
    const togglePrometric = document.getElementById('toggle-prometric-delay');
    const toggleTimeAccom = document.getElementById('toggle-time-accommodations');
    
    if (togglePrometric) {
        togglePrometric.addEventListener('change', function() {
            prometricDelay = this.checked;
            saveSettings();
        });
    }
    
    if (toggleTimeAccom) {
        toggleTimeAccom.addEventListener('change', function() {
            timeAccommodations = this.checked;
            saveSettings();
        });
    }
}

function showView(viewId, event, navElement) {
    console.log('showView called with viewId:', viewId);
    if (event) event.preventDefault();
    
    // Hide all views
    document.querySelectorAll('.app-view').forEach(view => {
        view.style.display = 'none';
    });
    
    const mainContent = document.getElementById('main-content');
    // Show/hide sidebar based on view
    const sidebar = document.getElementById('sidebar');
    const examViews = ['test-view', 'pre-test-instructions-view', 'review-view', 'results-view', 'detailed-review-view'];
    
    if (examViews.includes(viewId)) {
        // Hide sidebar during exam
        if (sidebar) sidebar.style.display = 'none';
        if (mainContent) {
            mainContent.classList.remove('ml-64');
            mainContent.style.marginLeft = '0';
            mainContent.style.width = '100%';
        }
    } else {
        // Show sidebar for other views
        if (sidebar) sidebar.style.display = 'flex';
        if (mainContent) {
            mainContent.classList.add('ml-64');
            mainContent.style.marginLeft = '';
            mainContent.style.width = '';
        }
    }
    
    // Show requested view
    const view = document.getElementById(viewId);
    if (view) {
        if (viewId === 'dashboard-view' || viewId === 'pre-test-view' || viewId === 'pre-test-instructions-view' || viewId === 'results-view') {
            view.style.display = 'block';
        } else {
            view.style.display = 'flex';
        }
    }
    
    // Force hide/show logic for dashboard
    if (viewId === 'dashboard-view') {
        // Ensure dashboard is visible
        if (view) {
            view.style.display = 'block';
        }
    }
    
    // Update active nav
    if (navElement) {
        document.querySelectorAll('.sidebar-link').forEach(link => {
            link.classList.remove('active');
            link.classList.remove('bg-gray-700');
        });
        navElement.classList.add('active');
        if (viewId === 'dashboard-view') {
            navElement.classList.add('bg-gray-700');
        }
    }
    
    // If showing dashboard, remove active from all subject links
    if (viewId === 'dashboard-view') {
        document.querySelectorAll('.sidebar-link').forEach(link => {
            if (link.id && link.id.startsWith('nav-') && link.id !== 'nav-home' && link.id !== 'nav-subjects') {
                link.classList.remove('active');
                link.classList.remove('bg-gray-700');
            }
        });
    }
}

function showSubject(subjectName, event) {
    console.log('showSubject called with:', subjectName, event);
    if (event) event.preventDefault();
    
    currentSubject = subjectName;
    
    // Update sidebar navigation - remove active from all, add to current
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');
        link.classList.remove('bg-gray-700');
    });
    
    // Map subject names to their nav IDs
    const subjectNavMap = {
        'Biology': 'nav-biology',
        'General Chemistry': 'nav-general-chemistry',
        'Organic Chemistry': 'nav-organic-chemistry',
        'Reading Comprehension': 'nav-reading-comprehension',
        'Physics': 'nav-physics',
        'Quantitative Reasoning': 'nav-quantitative-reasoning'
    };
    
    const activeNavId = subjectNavMap[subjectName];
    if (activeNavId) {
        const activeNav = document.getElementById(activeNavId);
        if (activeNav) {
            activeNav.classList.add('active');
            activeNav.classList.add('bg-gray-700');
        }
    }
    
    // Update pre-test view header and title
    const preTestHeaderTitle = document.getElementById('pre-test-header-title');
    const preTestSubjectTitle = document.getElementById('pre-test-subject-title');
    if (preTestHeaderTitle) {
        preTestHeaderTitle.textContent = subjectName;
    }
    if (preTestSubjectTitle) {
        preTestSubjectTitle.textContent = subjectName;
    }
    
    // Show test list
    displayTestList(subjectName);
    
    // Show pre-test view (which now shows the test list)
    showView('pre-test-view', event);
}

function displayTestList(subjectName) {
    console.log('displayTestList called for:', subjectName);
    const tests = allTestData[subjectName] || [];
    console.log('tests found:', tests.length);
    const container = document.getElementById('test-list-container');
    const noTestsView = document.getElementById('no-tests-view');
    const testListView = document.getElementById('test-list-view');
    
    if (tests.length === 0) {
        console.log('No tests found, showing no-tests-view');
        noTestsView.style.display = 'block';
        testListView.style.display = 'none';
        return;
    }
    
    console.log('Showing test list with', tests.length, 'tests');
    noTestsView.style.display = 'none';
    testListView.style.display = 'block';
    
    container.innerHTML = '';
    
    tests.forEach((test, index) => {
        const testCard = document.createElement('div');
        testCard.className = 'bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow';
        
        // Check if this is the trial mode test (Reading Comprehension, index 0, with passageId questions)
        const isTrialMode = subjectName === 'Reading Comprehension' && index === 0 && test[0] && test[0].passageId;
        const testTitle = isTrialMode ? `${subjectName} Trial Mode` : `${subjectName} Test #${index + 1}`;
        
        testCard.innerHTML = `
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="text-lg font-semibold text-gray-900">${testTitle}</h3>
                    <p class="text-sm text-gray-600 mt-1">${test.length} questions • ${subjectName === 'Reading Comprehension' ? '60' : (subjectName === 'Quantitative Reasoning' ? '45' : (subjectName === 'Physics' ? '50' : '30'))} minutes</p>
                </div>
                <button onclick="startPreTest('${subjectName}', ${index})" class="test-btn">
                    START TEST
                </button>
            </div>
        `;
        container.appendChild(testCard);
    });
}

function startPreTest(subjectName, testIndex) {
    currentSubject = subjectName;
    currentTestIndex = testIndex;
    currentQuestionIndex = 0;
    userAnswers = {};
    markedQuestions = {};
    
    // Clear highlights and strikethroughs when starting a new test
    clearHighlightsAndStrikethroughs();
    
    const test = allTestData[subjectName] && allTestData[subjectName][testIndex];
    
    if (!test) {
        console.error('Test not found:', subjectName, testIndex);
        alert('Test not found. Please try again.');
        return;
    }
    
    // Update pre-test instructions view
    const preTestInstructionsTitle = document.getElementById('pre-test-instructions-title');
    const preTestInstructionsInstruction1 = document.getElementById('pre-test-instructions-instruction-1');
    const preTestInstructionsHeaderTitle = document.getElementById('pre-test-instructions-header-title');
    
    if (preTestInstructionsTitle) {
        preTestInstructionsTitle.textContent = `This is ${subjectName} Test #${testIndex + 1}. Please read the following before starting:`;
    }
    
    // Check if this is the trial mode test
    const isTrialMode = subjectName === 'Reading Comprehension' && testIndex === 0 && test[0] && test[0].passageId;
    
    let timeMinutes = 30; // Default
    if (subjectName === 'Reading Comprehension') {
        timeMinutes = isTrialMode ? 10 : 60; // 10 minutes for trial, 60 for regular
    } else if (subjectName === 'Quantitative Reasoning') {
        timeMinutes = 45;
    } else if (subjectName === 'Physics') {
        timeMinutes = 50;
    }
    
    if (preTestInstructionsInstruction1) {
        preTestInstructionsInstruction1.textContent = `You have ${timeMinutes} minutes to finish ${test.length} questions.`;
    }
    
    if (preTestInstructionsHeaderTitle) {
        // Update title for trial mode
        if (isTrialMode) {
            preTestInstructionsHeaderTitle.textContent = `${subjectName} Trial Mode`;
        } else {
            preTestInstructionsHeaderTitle.textContent = `${subjectName} Test #${testIndex + 1}`;
        }
    }
    
    // Update instructions title for trial mode
    if (preTestInstructionsTitle) {
        if (isTrialMode) {
            preTestInstructionsTitle.textContent = `This is Reading Comprehension Trial Mode. Read this before starting:`;
        } else {
            preTestInstructionsTitle.textContent = `This is ${subjectName} Test #${testIndex + 1}. Read this before starting:`;
        }
    }
    
    // Load settings
    loadSettings();
    
    showView('pre-test-instructions-view');
}

function startTest() {
    const test = allTestData[currentSubject][currentTestIndex];
    // Clear highlights and strikethroughs when starting test (in case user went back)
    clearHighlightsAndStrikethroughs();
    
    // Update test header title and subtitle
    const testHeaderSubtitle = document.getElementById('test-header-subtitle');
    if (testHeaderSubtitle) {
        if (currentSubject === 'Reading Comprehension') {
            testHeaderSubtitle.textContent = `Reading Comprehension Test #${currentTestIndex + 1}`;
        } else {
            testHeaderSubtitle.textContent = `${currentSubject} Test #${currentTestIndex + 1}`;
        }
    }
    
    // Adjust width for Reading Comprehension (less wide layout)
    const testContentWrapper = document.getElementById('test-content-wrapper');
    if (testContentWrapper) {
        if (currentSubject === 'Reading Comprehension') {
            testContentWrapper.className = 'w-[50%] min-w-[600px] bg-white border border-black/80 p-8 relative';
        } else {
            testContentWrapper.className = 'w-[62%] min-w-[740px] bg-white border border-black/80 p-8 relative';
        }
    }
    
    // Reset time tracking
    questionStartTime = {};
    questionTimeSpent = {};
    testStartTime = Date.now();
    
    // Calculate time - Reading Comprehension is 60 minutes, Quantitative Reasoning is 45 minutes, Physics is 50 minutes, others are 30 minutes
    // Trial mode test (index 0 with passageId questions) uses 10 minutes
    let baseTime = 1800; // Default 30 minutes
    if (currentSubject === 'Reading Comprehension') {
        // Check if this is the trial mode test (index 0 with passageId questions)
        const isTrialMode = currentTestIndex === 0 && tests[currentTestIndex] && tests[currentTestIndex][0] && tests[currentTestIndex][0].passageId;
        baseTime = isTrialMode ? 600 : 3600; // 10 minutes for trial, 60 minutes for regular
    } else if (currentSubject === 'Quantitative Reasoning') {
        baseTime = 2700; // 45 minutes
    } else if (currentSubject === 'Physics') {
        baseTime = 3000; // 50 minutes
    }
    timeRemaining = timeAccommodations ? Math.floor(baseTime * 1.5) : baseTime;
    
    // Start timer
    startTimer();
    
    // Show first question
    displayQuestion(0);
    
    // Show test view
    showView('test-view');
    
    // Enter fullscreen mode
    enterFullscreen();
}

// Fullscreen functions
function enterFullscreen() {
    const element = document.documentElement;
    
    if (element.requestFullscreen) {
        element.requestFullscreen().catch(err => {
            console.log('Error attempting to enable fullscreen:', err);
        });
    } else if (element.webkitRequestFullscreen) { // Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { // Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    }
}

function displayQuestion(index) {
    const test = allTestData[currentSubject][currentTestIndex];
    const question = test[index];
    
    if (!question) return;
    
    // Load highlights from localStorage if this is a completed test
    // Only load once when displaying first question
    if (index === 0 && Object.keys(highlights).length === 0) {
        loadHighlightsFromLocalStorage();
    }
    
    // Track time spent on previous question
    if (questionStartTime[currentQuestionIndex] !== undefined) {
        const timeSpent = Date.now() - questionStartTime[currentQuestionIndex];
        questionTimeSpent[currentQuestionIndex] = (questionTimeSpent[currentQuestionIndex] || 0) + timeSpent;
    }
    
    // Start timer for current question
    questionStartTime[index] = Date.now();
    
    currentQuestionIndex = index;
    
    // Update header
    document.getElementById('test-q-number').textContent = index + 1;
    document.getElementById('test-q-total').textContent = test.length;
    
    // Update question stem - make it highlightable
    const stemElement = document.getElementById('test-q-stem');
    stemElement.innerHTML = escapeHtml(question.stem);
    stemElement.setAttribute('contenteditable', 'false');
    stemElement.style.userSelect = 'text';
    
    // Update choices - make them highlightable
    const choicesContainer = document.getElementById('test-q-choices');
    choicesContainer.innerHTML = '';
    
    question.c.forEach((choice, i) => {
        const choiceDiv = document.createElement('div');
        choiceDiv.className = 'flex items-start gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded';
        choiceDiv.style.userSelect = 'text';
        
        // Create label with highlightable text
        const label = document.createElement('label');
        label.setAttribute('for', `choice-${i}`);
        label.className = 'flex-1 cursor-pointer choice-label';
        label.style.userSelect = 'text';
        label.setAttribute('data-choice-index', i);
        label.setAttribute('data-question-index', index);
        
        // Check if this choice has strikethrough saved
        const choiceKey = `${currentSubject}-${currentTestIndex}-q${index}-choice${i}`;
        const savedStrikethrough = localStorage.getItem(`strikethrough-${choiceKey}`);
        const choiceText = `${String.fromCharCode(65 + i)}. ${escapeHtml(choice)}`;
        
        if (savedStrikethrough === 'true') {
            label.innerHTML = `<span style="text-decoration: line-through;">${choiceText}</span>`;
        } else {
            label.innerHTML = choiceText;
        }
        
        // Add right-click to toggle strikethrough
        label.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Check if we're right-clicking on highlighted text
            const selection = window.getSelection();
            if (selection && !selection.isCollapsed) {
                // User selected text, check if it's within a highlight
                const range = selection.getRangeAt(0);
                const mark = range.commonAncestorContainer.closest ? 
                    range.commonAncestorContainer.closest('mark') : 
                    (range.commonAncestorContainer.nodeType === 1 && range.commonAncestorContainer.tagName === 'MARK' ? 
                        range.commonAncestorContainer : 
                        range.commonAncestorContainer.parentElement?.closest('mark'));
                
                if (mark) {
                    // Toggle strikethrough on the highlight
                    if (mark.style.textDecoration.includes('line-through')) {
                        mark.style.textDecoration = 'none';
                    } else {
                        mark.style.textDecoration = 'line-through';
                    }
                    selection.removeAllRanges();
                    return;
                }
            }
            
            // Otherwise, toggle strikethrough on the entire choice
            const span = label.querySelector('span[style*="line-through"]');
            if (span) {
                // Remove strikethrough
                label.innerHTML = choiceText;
                localStorage.removeItem(`strikethrough-${choiceKey}`);
            } else {
                // Add strikethrough
                // Preserve any existing highlights
                const currentHTML = label.innerHTML;
                if (currentHTML.includes('<mark')) {
                    // Has highlights, wrap the whole thing
                    label.innerHTML = `<span style="text-decoration: line-through;">${currentHTML}</span>`;
                } else {
                    label.innerHTML = `<span style="text-decoration: line-through;">${choiceText}</span>`;
                }
                localStorage.setItem(`strikethrough-${choiceKey}`, 'true');
            }
        });
        
        // Make the label highlightable (add to highlightable areas)
        label.setAttribute('contenteditable', 'false');
        
        choiceDiv.innerHTML = `
            <input type="radio" name="answer" value="${i}" id="choice-${i}" ${userAnswers[index] === i ? 'checked' : ''} onchange="selectAnswer(${index}, ${i})">
        `;
        choiceDiv.appendChild(label);
        choicesContainer.appendChild(choiceDiv);
    });
    
    // Display passage for Reading Comprehension
    const passageContainer = document.getElementById('test-passage-container');
    const passageText = document.getElementById('test-passage-text');
    const passageTitle = document.getElementById('test-passage-title');
    
    if (currentSubject === 'Reading Comprehension' && passageContainer && passageText && passageTitle) {
        const testPassages = readingComprehensionPassages[currentSubject]?.[currentTestIndex];
        let passage = null;
        let passageKey = null;
        let passageIndex = null;
        
        // Check if question has passageId (new structure - like React code)
        if (question.passageId && testPassages) {
            // Check if testPassages is an object (trial mode structure) or array (old structure)
            if (testPassages && typeof testPassages === 'object' && !Array.isArray(testPassages) && testPassages !== null) {
                // Trial mode: passages are stored as object keyed by ID (like React PASSAGES)
                passage = testPassages[question.passageId];
                if (passage) {
                    passageKey = `${currentSubject}-${currentTestIndex}-passage-${question.passageId}`;
                    passageIndex = 0; // For trial mode, there's only one passage
                }
            } else if (Array.isArray(testPassages)) {
                // Old structure: find passage by ID in array
                passage = testPassages.find(p => p.id === question.passageId);
                if (passage) {
                    passageKey = `${currentSubject}-${currentTestIndex}-passage-${question.passageId}`;
                    passageIndex = testPassages.indexOf(passage);
                }
            }
        } else {
            // Fall back to old structure: determine which passage this question belongs to (16 questions per passage for 50-question tests)
            if (Array.isArray(testPassages)) {
                passageIndex = Math.floor(index / 16); // 0, 1, or 2
                if (testPassages[passageIndex]) {
                    passage = testPassages[passageIndex];
                    passageKey = `${currentSubject}-${currentTestIndex}-passage-${passageIndex}`;
                }
            }
        }
        
        if (passage) {
            // Always use "Passage 1", "Passage 2", "Passage 3" instead of topic names
            passageTitle.textContent = `Passage ${(passageIndex !== null ? passageIndex : 0) + 1}`;
            
            // If passage has content array, use it; otherwise use text and split into paragraphs
            if (passage.content && Array.isArray(passage.content)) {
                // Use content array format (trial mode structure)
            if (!passageHighlights[passageKey]) {
                    // Initialize with content array
                    passageHighlights[passageKey] = passage.content.map(para => escapeHtml(para));
                }
                // Display as paragraphs with proper spacing (space-y-4 is on container, so no margin needed on paragraphs)
                passageText.innerHTML = passageHighlights[passageKey].map((para, idx) => 
                    `<p>${para}</p>`
                ).join('');
            } else if (passage.text) {
                // Use text format and split into paragraphs
                if (!passageHighlights[passageKey]) {
                    // Split text into paragraphs - each paragraph starts with (number)
                    const lines = passage.text.split('\n');
                    const paragraphs = [];
                    let currentPara = '';
                    
                    for (let i = 0; i < lines.length; i++) {
                        const line = lines[i].trim();
                        if (!line) continue;
                        
                        // Check if line starts with a numbered paragraph marker like "(1)", "(2)", etc.
                        if (line.match(/^\(\d+\)/)) {
                            // Start a new paragraph
                            if (currentPara) {
                                paragraphs.push(currentPara.trim());
                            }
                            currentPara = line;
                        } else {
                            // Continue current paragraph
                            if (currentPara) {
                                currentPara += ' ' + line;
                            } else {
                                currentPara = line;
                            }
                        }
                    }
                    
                    // Add the last paragraph
                    if (currentPara) {
                        paragraphs.push(currentPara.trim());
                    }
                    
                    // If we didn't get proper paragraphs, fall back to splitting by double newlines
                    if (paragraphs.length <= 1) {
                        paragraphs = passage.text.split(/\n\n+/).filter(p => p.trim());
                    }
                    
                    passageHighlights[passageKey] = paragraphs.map(para => escapeHtml(para));
                }
                // Display as paragraphs with proper spacing
                passageText.innerHTML = passageHighlights[passageKey].map((para, idx) => 
                    `<p style="margin-bottom: 1rem;">${para}</p>`
                ).join('');
            }
            
            // Re-attach toggle button listeners for existing highlights
            reattachHighlightButtons(passageText);
            
            passageContainer.style.display = 'block';
            
            // Add passage to highlightable content area
            passageText.setAttribute('contenteditable', 'false');
            passageText.style.userSelect = 'text';
        } else {
            passageContainer.style.display = 'none';
        }
    } else if (passageContainer) {
        passageContainer.style.display = 'none';
    }
    
    // Restore highlights for this question
    restoreHighlights();
    
    // Re-attach toggle buttons for any existing highlights in content area
    const contentArea = document.getElementById('test-content-area');
    if (contentArea) {
        reattachHighlightButtons(contentArea);
    }
    
    // Setup highlighting listeners (includes passage area)
    setupHighlightListeners();
    
    // Show exhibit button only for General Chemistry and Quantitative Reasoning
    const exhibitBtn = document.getElementById('test-exhibit-btn');
    if (exhibitBtn) {
        if (currentSubject === 'General Chemistry' || currentSubject === 'Quantitative Reasoning') {
            exhibitBtn.style.display = 'flex';
        } else {
            exhibitBtn.style.display = 'none';
        }
    }
    
    // Update buttons
    const prevBtn = document.getElementById('test-prev-btn');
    if (prevBtn) {
        prevBtn.disabled = index === 0;
    }
    
    const nextBtn = document.getElementById('test-next-btn');
    if (nextBtn) {
        nextBtn.textContent = index === test.length - 1 ? 'END SECTION' : 'NEXT';
    }
    
    updateTestMarkButton(index);
}

function selectAnswer(questionIndex, answerIndex) {
    userAnswers[questionIndex] = answerIndex;
    saveState();
}

function nextQuestion() {
    const test = allTestData[currentSubject][currentTestIndex];
    if (currentQuestionIndex < test.length - 1) {
        const nextIndex = currentQuestionIndex + 1;
        if (prometricDelay) {
            setTimeout(() => displayQuestion(nextIndex), 2000);
        } else {
            displayQuestion(nextIndex);
        }
    } else {
        // End test
        endTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        const prevIndex = currentQuestionIndex - 1;
        if (prometricDelay) {
            setTimeout(() => displayQuestion(prevIndex), 2000);
        } else {
            displayQuestion(prevIndex);
        }
    }
}

function updateTestMarkButton(index) {
    const markBtn = document.getElementById('test-mark-btn');
    if (!markBtn) return;
    const isMarked = !!markedQuestions[index];
    markBtn.textContent = isMarked ? 'MARKED' : 'MARK';
    markBtn.classList.toggle('is-marked', isMarked);
}

function updateDetailedReviewMarkButton(index) {
    const reviewMarkBtn = document.getElementById('review-mark-btn');
    if (!reviewMarkBtn) return;
    const isMarked = !!markedQuestions[index];
    reviewMarkBtn.textContent = isMarked ? 'MARKED' : 'MARK';
    reviewMarkBtn.classList.toggle('is-marked', isMarked);
}

function toggleMark(indexOverride, options = {}) {
    if (indexOverride instanceof Event) {
        indexOverride.preventDefault();
        indexOverride = undefined;
    }

    let targetIndex;
    let context = options.context;

    if (typeof indexOverride === 'number') {
        targetIndex = indexOverride;
    } else {
        targetIndex = currentQuestionIndex;
        if (indexOverride && typeof indexOverride === 'object' && indexOverride.context) {
            context = indexOverride.context;
        }
    }

    if (targetIndex === null || targetIndex === undefined) return;

    if (markedQuestions[targetIndex]) {
        delete markedQuestions[targetIndex];
    } else {
        markedQuestions[targetIndex] = true;
    }
    saveState();

    if (context === 'detailed-review') {
        updateDetailedReviewMarkButton(targetIndex);
        updateDetailedReview();
        updateTestMarkButton(targetIndex);
        displayReviewGrid();
    } else {
        displayQuestion(targetIndex);
    }
}

function showReviewView() {
    // Update review header title
    const reviewHeaderTitle = document.getElementById('review-header-title');
    if (reviewHeaderTitle && currentSubject && currentTestIndex !== null) {
        reviewHeaderTitle.textContent = `${currentSubject} Test #${currentTestIndex + 1}`;
    }
    
    if (prometricDelay) {
        setTimeout(() => {
            showView('review-view');
            displayReviewGrid();
            updateReviewTimer();
        }, 2000);
    } else {
        showView('review-view');
        displayReviewGrid();
        updateReviewTimer();
    }
}

function updateReviewTimer() {
    const reviewTimer = document.getElementById('review-timer');
    if (!reviewTimer) return;
    
    // Format time remaining as MM:SS
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        reviewTimer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function jumpToQuestion(type, index) {
    const test = allTestData[currentSubject][currentTestIndex];
    let targetIndex = 0;
    
    if (typeof type === 'number') {
        // Direct index
        targetIndex = type;
    } else if (type === 'marked') {
        // Find first marked question
        for (let i = 0; i < test.length; i++) {
            if (markedQuestions[i]) {
                targetIndex = i;
                break;
            }
        }
    } else if (type === 'incomplete') {
        // Find first incomplete question
        for (let i = 0; i < test.length; i++) {
            if (userAnswers[i] === undefined) {
                targetIndex = i;
                break;
            }
        }
    } else if (type === 'all') {
        // Start from beginning
        targetIndex = 0;
    }
    
    currentQuestionIndex = targetIndex;
    showView('test-view');
    displayQuestion(targetIndex);
}

function showResultsView() {
    if ((!lastAttemptList || lastAttemptList.length === 0) && currentSubject && currentTestIndex !== null && currentTestIndex !== undefined) {
        const storedAttempts = getTestAttempts(currentSubject, currentTestIndex);
        if (storedAttempts.length > 0) {
            lastAttemptList = storedAttempts.slice();
            lastResultRecord = storedAttempts[storedAttempts.length - 1];
            if (lastResultRecord && lastResultRecord.total) {
                lastQuestionCount = lastResultRecord.total;
            }
        }
    }
    showView('results-view');
    refreshResultsSummaryUI(lastAttemptList, lastResultRecord);
}

function refreshResultsSummaryUI(attempts = [], record = null, options = {}) {
    const attemptList = Array.isArray(attempts) ? attempts : [];
    const attemptCount = attemptList.length;
    const shouldReset = !!options.reset;
    const fallbackRecord = attemptCount > 0 ? attemptList[attemptCount - 1] : null;
    const displayRecord = shouldReset ? null : (record || fallbackRecord);

    const subject = displayRecord && displayRecord.subject ? displayRecord.subject : currentSubject;
    const inferredIndex = displayRecord && typeof displayRecord.testIndex === 'number'
        ? displayRecord.testIndex
        : (typeof currentTestIndex === 'number' ? currentTestIndex : null);
    const testNumberLabel = inferredIndex !== null ? inferredIndex + 1 : '--';
    const scorePercent = displayRecord ? displayRecord.score : 0;
    const scaledScore = displayRecord ? getScaledScore(scorePercent) : 200;
    const averageEl = document.getElementById('result-average-score');
    const scoreRing = document.getElementById('result-score-ring');
    const scoreValueEl = document.getElementById('result-score-value');
    const dateChip = document.getElementById('result-date-chip');
    const attemptChip = document.getElementById('result-attempt-chip');
    const questionCountEl = document.getElementById('result-question-count');
    const titleEl = document.getElementById('result-test-title');
    const breadcrumbEl = document.getElementById('result-breadcrumb');
    const rawScoreEl = document.getElementById('results-raw-score');
    const correctTotalEl = document.getElementById('results-correct-total');
    const timePerQuestionEl = document.getElementById('results-time-per-question');
    const totalTimeEl = document.getElementById('results-total-time');

    if (scoreRing) {
        const degrees = Math.max(0, Math.min(360, scorePercent * 3.6));
        scoreRing.style.setProperty('--score-deg', `${degrees}deg`);
    }
    if (scoreValueEl) {
        scoreValueEl.textContent = displayRecord ? scaledScore : '--';
    }
    if (averageEl) {
        if (attemptCount > 0 && !shouldReset) {
            const totalScaled = attemptList.reduce((sum, attempt) => sum + getScaledScore(attempt.score), 0);
            const averageScaled = Math.round(totalScaled / attemptCount);
            averageEl.textContent = `Average: ${averageScaled}`;
        } else {
            averageEl.textContent = 'Average: --';
        }
    }
    if (dateChip) {
        dateChip.textContent = displayRecord ? formatResultDate(displayRecord.date) : '--';
    }
    if (attemptChip) {
        attemptChip.textContent = attemptCount > 0 && !shouldReset ? `Attempt ${attemptCount}` : 'No attempts yet';
    }
    if (questionCountEl) {
        const qCount = displayRecord ? displayRecord.total : lastQuestionCount;
        questionCountEl.textContent = qCount ? `${qCount} Questions` : '0 Questions';
    }
    if (titleEl) {
        titleEl.textContent = subject ? `${subject} Test #${testNumberLabel}` : 'Test Results';
    }
    if (breadcrumbEl) {
        breadcrumbEl.textContent = subject ? `${subject} ▸ Practice Test` : 'Practice Test';
    }
    if (rawScoreEl) {
        rawScoreEl.textContent = displayRecord ? `${displayRecord.score}%` : '--';
    }
    if (correctTotalEl) {
        correctTotalEl.textContent = displayRecord ? `${displayRecord.correct} / ${displayRecord.total}` : '--';
    }
    if (timePerQuestionEl) {
        timePerQuestionEl.textContent = displayRecord ? formatTimeDisplay(displayRecord.avgTimePerQuestionSeconds) : '--';
    }
    if (totalTimeEl) {
        totalTimeEl.textContent = displayRecord ? formatTimeDisplay(displayRecord.totalTimeSeconds) : '--';
    }
}

function handleResetCurrentTest() {
    const subject = currentSubject || (lastResultRecord && lastResultRecord.subject);
    const index = currentTestIndex !== null && currentTestIndex !== undefined
        ? currentTestIndex
        : (lastResultRecord && typeof lastResultRecord.testIndex === 'number' ? lastResultRecord.testIndex : null);

    if (!subject || index === null) {
        alert('No test attempt found to reset.');
        return;
    }

    if (!window.confirm('Reset attempt history for this test? This will clear all saved scores and progress.')) {
        return;
    }

    resetTestAttempts(subject, index);
    lastAttemptList = [];
    lastResultRecord = null;
    lastQuestionCount = 0;
    refreshResultsSummaryUI([], null, { reset: true });

    try {
        const specificKey = `completed-test-${subject}-${index}`;
        localStorage.removeItem(specificKey);
        const listKey = 'completed-tests-list';
        const listRaw = localStorage.getItem(listKey);
        if (listRaw) {
            const parsed = JSON.parse(listRaw);
            if (Array.isArray(parsed)) {
                const updated = parsed.filter(entry => !(entry.subject === subject && entry.testIndex === index));
                localStorage.setItem(listKey, JSON.stringify(updated));
            }
        }
    } catch (error) {
        console.error('Failed to clear stored completed test after reset:', error);
    }

    const resultsContainer = document.getElementById('results-list-container');
    if (resultsContainer) {
        resultsContainer.innerHTML = `
            <div class="p-6 rounded-2xl bg-white shadow-sm border border-dashed border-indigo-200 text-center text-sm text-gray-500">
                Attempt history cleared. Retake the test to generate a new score report.
            </div>
        `;
    }
}

function openSubmitConfirmation() {
    const modal = document.getElementById('confirm-submit-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
}

function closeSubmitConfirmation() {
    const modal = document.getElementById('confirm-submit-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
}

function confirmSubmitTest() {
    closeSubmitConfirmation();
    endTest();
}

function displayReviewGrid() {
    const test = allTestData[currentSubject][currentTestIndex];
    const container = document.getElementById('review-grid-container');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    // Create table rows
    test.forEach((q, i) => {
        const row = document.createElement('div');
        row.className = 'grid grid-cols-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer';
        row.onclick = () => {
            currentQuestionIndex = i;
            showView('test-view');
            displayQuestion(i);
        };
        
        // Name column with document icon and green checkmark
        const nameCell = document.createElement('div');
        nameCell.className = 'px-3 py-2 flex items-center space-x-2';
        nameCell.style.fontSize = '14px';
        nameCell.style.fontWeight = 'normal';
        nameCell.style.fontFamily = 'Arial, sans-serif';
        nameCell.innerHTML = `
            <div class="relative" style="width: 16px; height: 16px; flex-shrink: 0;">
                <svg style="width: 16px; height: 16px; color: #4b5563;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
                <svg style="position: absolute; top: -2px; right: -2px; width: 12px; height: 12px; color: #16a34a;" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
            </div>
            <span style="font-size: 14px; font-weight: normal; color: #374151; font-family: Arial, sans-serif;">Question ${i + 1}</span>
        `;
        
        // Marked column
        const markedCell = document.createElement('div');
        markedCell.className = 'px-3 py-2';
        markedCell.style.fontSize = '14px';
        markedCell.style.fontWeight = 'normal';
        markedCell.style.color = '#374151';
        markedCell.style.fontFamily = 'Arial, sans-serif';
        markedCell.textContent = markedQuestions[i] ? 'Yes' : '';
        
        // Completed column
        const completedCell = document.createElement('div');
        completedCell.className = 'px-3 py-2';
        completedCell.style.fontSize = '14px';
        completedCell.style.fontWeight = 'normal';
        completedCell.style.color = '#374151';
        completedCell.style.fontFamily = 'Arial, sans-serif';
        completedCell.textContent = userAnswers[i] !== undefined ? 'Yes' : '';
        
        // Skipped column
        const skippedCell = document.createElement('div');
        skippedCell.className = 'px-3 py-2';
        skippedCell.style.fontSize = '14px';
        skippedCell.style.fontWeight = 'normal';
        skippedCell.style.color = '#374151';
        skippedCell.style.fontFamily = 'Arial, sans-serif';
        skippedCell.textContent = userAnswers[i] === undefined ? 'Yes' : '';
        
        row.appendChild(nameCell);
        row.appendChild(markedCell);
        row.appendChild(completedCell);
        row.appendChild(skippedCell);
        
        container.appendChild(row);
    });
}

function startTimer() {
    if (testTimer) clearInterval(testTimer);
    
    testTimer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(testTimer);
            endTest();
        }
    }, 1000);
    
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    const timerElement = document.getElementById('test-timer');
    if (timerElement) {
        timerElement.textContent = timeString;
    }
    
    // Also update review timer if review view is visible
    updateReviewTimer();
}

function saveCompletedTest(testResult) {
    try {
        const key = `completed-test-${testResult.subject}-${testResult.testIndex}`;
        localStorage.setItem(key, JSON.stringify(testResult));
        
        // Also save to a list of all completed tests
        const completedTestsKey = 'completed-tests-list';
        let completedTests = JSON.parse(localStorage.getItem(completedTestsKey) || '[]');
        
        // Check if this test already exists and remove it
        completedTests = completedTests.filter(t => 
            !(t.subject === testResult.subject && t.testIndex === testResult.testIndex)
        );
        
        // Add the new result
        completedTests.push({
            subject: testResult.subject,
            testIndex: testResult.testIndex,
            date: testResult.date,
            score: testResult.score
        });
        
        localStorage.setItem(completedTestsKey, JSON.stringify(completedTests));
    } catch (e) {
        console.error('Error saving completed test:', e);
    }
}

function endTest() {
    console.log('endTest called', { currentSubject, currentTestIndex });
    closeSubmitConfirmation();
    
    // Stop the timer
    if (testTimer) {
        clearInterval(testTimer);
        testTimer = null;
    }
    
    // Exit fullscreen
    try {
    exitFullscreen();
    } catch (e) {
        console.warn('Error exiting fullscreen:', e);
    }
    
    // Show results
    showResults();
}

function showResults() {
    // Check if we have valid test data
    if (!currentSubject || currentTestIndex === null || currentTestIndex === undefined) {
        console.error('Cannot show results: missing test data', { currentSubject, currentTestIndex });
        alert('Error: Test data not found. Please try again.');
        return;
    }
    
    const test = allTestData[currentSubject] && allTestData[currentSubject][currentTestIndex];
    if (!test) {
        console.error('Cannot show results: test not found', { currentSubject, currentTestIndex });
        alert('Error: Test not found. Please try again.');
        return;
    }
    
    // Track time on current question before ending
    if (currentQuestionIndex !== undefined && questionStartTime[currentQuestionIndex] !== undefined) {
        const timeSpent = Date.now() - questionStartTime[currentQuestionIndex];
        questionTimeSpent[currentQuestionIndex] = (questionTimeSpent[currentQuestionIndex] || 0) + timeSpent;
    }
    
    let correct = 0;
    test.forEach((q, i) => {
        if (userAnswers[i] === q.a) {
            correct++;
        }
    });
    
    const score = Math.round((correct / test.length) * 100);
    
    // Calculate total time
    const totalTimeMs = testStartTime ? Date.now() - testStartTime : 0;
    const totalTimeSeconds = Math.max(0, Math.round(totalTimeMs / 1000));
    
    // Calculate average time per question (seconds)
    const totalQuestionTime = Object.values(questionTimeSpent).reduce((sum, time) => sum + time, 0);
    const avgTimePerQuestion = test.length > 0 ? Math.round(totalQuestionTime / test.length / 1000) : 0;
    
    const attemptDate = new Date();
    const attemptRecord = {
        subject: currentSubject,
        testIndex: currentTestIndex,
        score,
        correct,
        total: test.length,
        totalTimeSeconds,
        avgTimePerQuestionSeconds: avgTimePerQuestion,
        date: attemptDate.toISOString()
    };
    lastQuestionCount = test.length;
    
    // Save highlights and strikethroughs to localStorage only when test is completed
    try {
        saveHighlightsToLocalStorage();
    } catch (e) {
        console.error('Error saving highlights:', e);
    }
    
    // Save completed test result
    try {
        saveCompletedTest({
            subject: currentSubject,
            testIndex: currentTestIndex,
            score: score,
            correct: correct,
            total: test.length,
            totalTime: totalTimeMs,
            avgTimePerQuestion: avgTimePerQuestion,
            date: attemptRecord.date,
            userAnswers: {...userAnswers},
            markedQuestions: {...markedQuestions},
            highlights: JSON.parse(JSON.stringify(highlights)),
            passageHighlights: JSON.parse(JSON.stringify(passageHighlights))
        });
    } catch (e) {
        console.error('Error saving completed test:', e);
    }
    
    const attempts = recordTestAttempt(attemptRecord);
    lastResultRecord = attemptRecord;
    lastAttemptList = attempts.slice();
    
    // Show results view
    showView('results-view', null);
    
    const resultsView = document.getElementById('results-view');
    if (resultsView) {
        resultsView.style.display = 'block';
    }
    
    refreshResultsSummaryUI(lastAttemptList, lastResultRecord);
    
    // Display individual question results
    const resultsContainer = document.getElementById('results-list-container');
    if (resultsContainer) {
        resultsContainer.innerHTML = '';
        test.forEach((q, i) => {
            const isCorrect = userAnswers[i] === q.a;
            const resultDiv = document.createElement('div');
            resultDiv.className = `p-4 rounded-2xl border border-gray-200 shadow-sm ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`;
            resultDiv.innerHTML = `
                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <p class="font-semibold mb-2">Question ${i + 1}</p>
                        <p class="text-sm mb-2">${q.stem}</p>
                        <p class="text-sm"><strong>Your answer:</strong> ${userAnswers[i] !== undefined ? String.fromCharCode(65 + userAnswers[i]) : 'Not answered'}</p>
                        <p class="text-sm"><strong>Correct answer:</strong> ${String.fromCharCode(65 + q.a)}</p>
                    </div>
                    <span class="ml-4 text-lg font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}">
                        ${isCorrect ? 'âœ“' : 'âœ—'}
                    </span>
                </div>
            `;
            resultsContainer.appendChild(resultDiv);
        });
    }
}

// Show detailed review page
function showDetailedReview() {
    detailedReviewQuestionIndex = 0;
    showView('detailed-review-view');
    updateDetailedReview();
}

// Update detailed review display
function updateDetailedReview() {
    const test = allTestData[currentSubject][currentTestIndex];
    const question = test[detailedReviewQuestionIndex];
    
    if (!question) return;
    
    updateDetailedReviewMarkButton(detailedReviewQuestionIndex);
    
    // Update header
    document.getElementById('review-test-title').textContent = `${currentSubject} Test #${currentTestIndex + 1}`;
    document.getElementById('review-progress').textContent = `${test.length}/${test.length}`;
    document.getElementById('review-q-number').textContent = detailedReviewQuestionIndex + 1;
    document.getElementById('review-q-total').textContent = test.length;
    
    // Update question stem
    document.getElementById('review-q-stem').textContent = question.stem;
    
    // Update answer choices
    const choicesContainer = document.getElementById('review-q-choices');
    choicesContainer.innerHTML = '';
    
    const userAnswer = userAnswers[detailedReviewQuestionIndex];
    const correctAnswer = question.a;
    const isCorrect = userAnswer === correctAnswer;
    
    question.c.forEach((choice, i) => {
        const choiceDiv = document.createElement('div');
        let bgColor = 'bg-white';
        let borderColor = 'border-gray-300';
        let textColor = 'text-gray-900';
        let icon = '';
        
        if (i === correctAnswer) {
            bgColor = 'bg-green-50';
            borderColor = 'border-green-500';
            textColor = 'text-green-900';
            icon = '<svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>';
        } else if (i === userAnswer && !isCorrect) {
            bgColor = 'bg-red-50';
            borderColor = 'border-red-500';
            textColor = 'text-red-900';
            icon = '<svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>';
        }
        
        choiceDiv.className = `flex items-center gap-3 p-4 border-2 ${borderColor} ${bgColor} rounded-lg`;
        choiceDiv.innerHTML = `
            <div class="flex items-center gap-3 flex-1">
                <input type="radio" ${i === userAnswer ? 'checked' : ''} disabled class="w-5 h-5">
                <span class="${textColor} font-medium">${String.fromCharCode(65 + i)}.</span>
                <span class="${textColor}">${choice}</span>
            </div>
            ${icon}
        `;
        choicesContainer.appendChild(choiceDiv);
    });
    
    // Update feedback bar
    const feedbackStatus = document.getElementById('review-feedback-status');
    const correctAnswerText = document.getElementById('review-correct-answer');
    const timeSpentText = document.getElementById('review-time-spent');
    
    if (isCorrect) {
        feedbackStatus.textContent = 'Correct';
        feedbackStatus.className = 'font-semibold text-green-600';
    } else {
        feedbackStatus.textContent = 'Incorrect';
        feedbackStatus.className = 'font-semibold text-red-600';
    }
    
    correctAnswerText.textContent = `Correct Answer: ${String.fromCharCode(65 + correctAnswer)}`;
    
    // Format time spent
    const timeSpent = questionTimeSpent[detailedReviewQuestionIndex] || 0;
    const minutes = Math.floor(timeSpent / 60000);
    const seconds = Math.floor((timeSpent % 60000) / 1000);
    timeSpentText.textContent = `Time Spent: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // Update question list sidebar
    updateReviewQuestionList();
    
    // Update tag button state
    updateTagButton();
}

// Toggle subjects list visibility
function toggleSubjects(event) {
    if (event) event.preventDefault();
    const subjectsList = document.getElementById('subjects-list');
    const chevron = document.getElementById('subjects-chevron');
    
    if (!subjectsList || !chevron) return;
    
    // Toggle visibility
    const isHidden = subjectsList.style.display === 'none' || subjectsList.style.display === '';
    if (isHidden) {
        subjectsList.style.display = 'block';
        chevron.style.transform = 'rotate(90deg)';
    } else {
        subjectsList.style.display = 'none';
        chevron.style.transform = 'rotate(0deg)';
    }
}

// Toggle tag for current question in review
function toggleTagQuestion() {
    if (!currentSubject || currentTestIndex === null || detailedReviewQuestionIndex === undefined) return;
    
    const tagKey = `${currentSubject}-${currentTestIndex}-${detailedReviewQuestionIndex}`;
    let taggedQuestions = getTaggedQuestions();
    
    if (taggedQuestions[tagKey]) {
        // Untag
        delete taggedQuestions[tagKey];
    } else {
        // Tag
        const test = allTestData[currentSubject][currentTestIndex];
        const question = test[detailedReviewQuestionIndex];
        if (!question) return;
        
        taggedQuestions[tagKey] = {
            subject: currentSubject,
            testIndex: currentTestIndex,
            questionIndex: detailedReviewQuestionIndex,
            question: question.stem,
            correctAnswer: question.a,
            choices: question.c,
            userAnswer: userAnswers[detailedReviewQuestionIndex],
            date: new Date().toISOString()
        };
    }
    
    saveTaggedQuestions(taggedQuestions);
    updateTagButton();
    updateReviewQuestionList();
}

// Update tag button appearance
function updateTagButton() {
    if (!currentSubject || currentTestIndex === null || detailedReviewQuestionIndex === undefined) return;
    
    const tagKey = `${currentSubject}-${currentTestIndex}-${detailedReviewQuestionIndex}`;
    const taggedQuestions = getTaggedQuestions();
    const isTagged = !!taggedQuestions[tagKey];
    
    const tagBtn = document.getElementById('review-tag-btn');
    const tagIcon = document.getElementById('review-tag-icon');
    const tagText = document.getElementById('review-tag-text');
    
    if (!tagBtn || !tagIcon || !tagText) return;
    
    if (isTagged) {
        tagBtn.className = 'px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2';
        tagIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path>';
        tagText.textContent = 'Tagged';
    } else {
        tagBtn.className = 'px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 flex items-center gap-2';
        tagIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>';
        tagText.textContent = 'Tag Question';
    }
}

// Get tagged questions from localStorage
function getTaggedQuestions() {
    try {
        return JSON.parse(localStorage.getItem('tagged_questions') || '{}');
    } catch (e) {
        console.error('Failed to load tagged questions:', e);
        return {};
    }
}

// Save tagged questions to localStorage
function saveTaggedQuestions(taggedQuestions) {
    try {
        localStorage.setItem('tagged_questions', JSON.stringify(taggedQuestions));
    } catch (e) {
        console.error('Failed to save tagged questions:', e);
    }
}

// Show tagged questions view
function showTaggedQuestions(event) {
    if (event) event.preventDefault();
    
    showView('tagged-questions-view');
    displayTaggedQuestions();
}

// Display tagged questions list
function displayTaggedQuestions() {
    const container = document.getElementById('tagged-questions-list');
    if (!container) return;
    
    const taggedQuestions = getTaggedQuestions();
    const taggedArray = Object.values(taggedQuestions);
    
    if (taggedArray.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                </svg>
                <h3 class="mt-2 text-sm font-medium text-gray-900">No tagged questions</h3>
                <p class="mt-1 text-sm text-gray-500">Tag questions during review to see them here.</p>
            </div>
        `;
        return;
    }
    
    // Sort by date (newest first)
    taggedArray.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = '';
    
    taggedArray.forEach((tagged, index) => {
        const tagDate = new Date(tagged.date);
        const dateStr = tagDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric'
        });
        
        const isCorrect = tagged.userAnswer === tagged.correctAnswer;
        
        const questionDiv = document.createElement('div');
        questionDiv.className = 'bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer';
        questionDiv.onclick = () => viewTaggedQuestion(tagged);
        questionDiv.innerHTML = `
            <div class="flex items-start justify-between">
                <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                        <h3 class="text-lg font-semibold text-gray-900">${tagged.subject} - Test #${tagged.testIndex + 1}, Question ${tagged.questionIndex + 1}</h3>
                        <span class="px-3 py-1 rounded-full text-sm font-medium ${
                            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }">
                            ${isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                    </div>
                    <p class="text-sm text-gray-700 mb-3 line-clamp-2">${tagged.question}</p>
                    <div class="flex items-center gap-4 text-xs text-gray-500">
                        <span><strong>Your Answer:</strong> ${tagged.userAnswer !== undefined ? String.fromCharCode(65 + tagged.userAnswer) : 'Not answered'}</span>
                        <span><strong>Correct Answer:</strong> ${String.fromCharCode(65 + tagged.correctAnswer)}</span>
                        <span>${dateStr}</span>
                    </div>
                </div>
                <svg class="h-5 w-5 text-gray-400 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

// View a tagged question
function viewTaggedQuestion(tagged) {
    // Set current test context
    currentSubject = tagged.subject;
    currentTestIndex = tagged.testIndex;
    detailedReviewQuestionIndex = tagged.questionIndex;
    userAnswers = {};
    userAnswers[tagged.questionIndex] = tagged.userAnswer;
    
    // Show detailed review
    showDetailedReview();
}

// Update question list in sidebar
function updateReviewQuestionList() {
    const test = allTestData[currentSubject][currentTestIndex];
    const listContainer = document.getElementById('review-question-list');
    listContainer.innerHTML = '';
    
    test.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.a;
        const listItem = document.createElement('div');
        listItem.className = `flex items-center gap-3 p-3 cursor-pointer hover:bg-purple-800 ${i === detailedReviewQuestionIndex ? 'bg-purple-700' : ''}`;
        listItem.onclick = () => {
            detailedReviewQuestionIndex = i;
            updateDetailedReview();
        };
        
        const icon = isCorrect 
            ? '<svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'
            : '<svg class="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>';
        
        const dotColor = isCorrect ? 'bg-green-400' : 'bg-red-400';
        const tagKey = `${currentSubject}-${currentTestIndex}-${i}`;
        const taggedQuestions = getTaggedQuestions();
        const isTagged = !!taggedQuestions[tagKey];
        const tagIcon = isTagged ? '<svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>' : '';
        
        listItem.innerHTML = `
            ${icon}
            <span class="flex-1 text-sm">Question ${i + 1}</span>
            ${tagIcon}
            <div class="w-2 h-2 ${dotColor} rounded-full"></div>
        `;
        listContainer.appendChild(listItem);
    });
}

// Navigation functions for detailed review
function reviewPrevQuestion() {
    const test = allTestData[currentSubject][currentTestIndex];
    if (detailedReviewQuestionIndex > 0) {
        detailedReviewQuestionIndex--;
        updateDetailedReview();
    }
}

function reviewNextQuestion() {
    const test = allTestData[currentSubject][currentTestIndex];
    if (detailedReviewQuestionIndex < test.length - 1) {
        detailedReviewQuestionIndex++;
        updateDetailedReview();
    }
}

// Filter review questions (placeholder)
function filterReviewQuestions(type) {
    // This can be implemented later for filtering
    updateReviewQuestionList();
}

function showExitTestModal() {
    document.getElementById('exit-test-modal').style.display = 'flex';
}

function hideExitTestModal() {
    document.getElementById('exit-test-modal').style.display = 'none';
}

function goBackToSubject() {
    // Go back to dashboard from pre-test view
    showView('dashboard-view', null, document.getElementById('nav-home'));
}

function confirmExitTest() {
    if (testTimer) {
        clearInterval(testTimer);
        testTimer = null;
    }
    exitFullscreen();
    hideExitTestModal();
    showSubject(currentSubject, null);
}

// Periodic Table Functions
function showExhibit() {
    // For Quantitative Reasoning, show calculator
    if (currentSubject === 'Quantitative Reasoning') {
        showCalculator();
        return;
    }
    
    // For General Chemistry and other subjects, show periodic table
    const modal = document.getElementById('periodic-table-modal');
    if (modal) {
        modal.style.display = 'flex';
        const container = document.getElementById('periodic-table-content');
        
        // Generate the complete periodic table HTML
        container.innerHTML = generatePeriodicTable();
    }
}

function generatePeriodicTable() {
    // Main periodic table elements
    const elements = [
        // Period 1
        [{num: 1, sym: 'H', mass: '1.01'}, {num: 2, sym: 'He', mass: '4.00'}],
        // Period 2
        [{num: 3, sym: 'Li', mass: '6.94'}, {num: 4, sym: 'Be', mass: '9.01'}, {num: 5, sym: 'B', mass: '10.81'}, {num: 6, sym: 'C', mass: '12.01'}, {num: 7, sym: 'N', mass: '14.01'}, {num: 8, sym: 'O', mass: '16.00'}, {num: 9, sym: 'F', mass: '19.00'}, {num: 10, sym: 'Ne', mass: '20.18'}],
        // Period 3
        [{num: 11, sym: 'Na', mass: '22.99'}, {num: 12, sym: 'Mg', mass: '24.31'}, {num: 13, sym: 'Al', mass: '26.98'}, {num: 14, sym: 'Si', mass: '28.09'}, {num: 15, sym: 'P', mass: '30.97'}, {num: 16, sym: 'S', mass: '32.06'}, {num: 17, sym: 'Cl', mass: '35.45'}, {num: 18, sym: 'Ar', mass: '39.95'}],
        // Period 4
        [{num: 19, sym: 'K', mass: '39.10'}, {num: 20, sym: 'Ca', mass: '40.08'}, {num: 21, sym: 'Sc', mass: '44.96'}, {num: 22, sym: 'Ti', mass: '47.90'}, {num: 23, sym: 'V', mass: '50.94'}, {num: 24, sym: 'Cr', mass: '52.00'}, {num: 25, sym: 'Mn', mass: '54.94'}, {num: 26, sym: 'Fe', mass: '55.85'}, {num: 27, sym: 'Co', mass: '58.93'}, {num: 28, sym: 'Ni', mass: '58.71'}, {num: 29, sym: 'Cu', mass: '63.55'}, {num: 30, sym: 'Zn', mass: '65.37'}, {num: 31, sym: 'Ga', mass: '69.72'}, {num: 32, sym: 'Ge', mass: '72.59'}, {num: 33, sym: 'As', mass: '74.92'}, {num: 34, sym: 'Se', mass: '78.96'}, {num: 35, sym: 'Br', mass: '79.90'}, {num: 36, sym: 'Kr', mass: '83.80'}],
        // Period 5
        [{num: 37, sym: 'Rb', mass: '85.47'}, {num: 38, sym: 'Sr', mass: '87.62'}, {num: 39, sym: 'Y', mass: '88.91'}, {num: 40, sym: 'Zr', mass: '91.22'}, {num: 41, sym: 'Nb', mass: '92.91'}, {num: 42, sym: 'Mo', mass: '95.94'}, {num: 43, sym: 'Tc', mass: '(97)'}, {num: 44, sym: 'Ru', mass: '101.07'}, {num: 45, sym: 'Rh', mass: '102.91'}, {num: 46, sym: 'Pd', mass: '106.40'}, {num: 47, sym: 'Ag', mass: '107.87'}, {num: 48, sym: 'Cd', mass: '112.40'}, {num: 49, sym: 'In', mass: '114.82'}, {num: 50, sym: 'Sn', mass: '118.69'}, {num: 51, sym: 'Sb', mass: '121.75'}, {num: 52, sym: 'Te', mass: '127.60'}, {num: 53, sym: 'I', mass: '126.90'}, {num: 54, sym: 'Xe', mass: '131.30'}],
        // Period 6
        [{num: 55, sym: 'Cs', mass: '132.91'}, {num: 56, sym: 'Ba', mass: '137.34'}, {num: 57, sym: 'La', mass: '138.91'}, {num: 72, sym: 'Hf', mass: '178.49'}, {num: 73, sym: 'Ta', mass: '180.95'}, {num: 74, sym: 'W', mass: '183.85'}, {num: 75, sym: 'Re', mass: '186.20'}, {num: 76, sym: 'Os', mass: '190.20'}, {num: 77, sym: 'Ir', mass: '192.20'}, {num: 78, sym: 'Pt', mass: '195.08'}, {num: 79, sym: 'Au', mass: '196.97'}, {num: 80, sym: 'Hg', mass: '200.59'}, {num: 81, sym: 'Tl', mass: '204.37'}, {num: 82, sym: 'Pb', mass: '207.19'}, {num: 83, sym: 'Bi', mass: '208.98'}, {num: 84, sym: 'Po', mass: '210.00'}, {num: 85, sym: 'At', mass: '210.00'}, {num: 86, sym: 'Rn', mass: '222.00'}],
        // Period 7
        [{num: 87, sym: 'Fr', mass: '215.00'}, {num: 88, sym: 'Ra', mass: '226.03'}, {num: 89, sym: 'Ac', mass: '227.03'}, {num: 104, sym: 'Rf', mass: '(261)'}, {num: 105, sym: 'Db', mass: '(262)'}, {num: 106, sym: 'Sg', mass: '(266)'}, {num: 107, sym: 'Bh', mass: '(264)'}, {num: 108, sym: 'Hs', mass: '(269)'}, {num: 109, sym: 'Mt', mass: '(268)'}, {num: 110, sym: 'Ds', mass: '(271)'}, {num: 111, sym: 'Rg', mass: '(272)'}, {num: 112, sym: 'Cn', mass: '(277)'}, {num: 113, sym: 'Nh', mass: '(286)'}, {num: 114, sym: 'Fl', mass: '(289)'}, {num: 115, sym: 'Mc', mass: '(290)'}, {num: 116, sym: 'Lv', mass: '(293)'}, {num: 117, sym: 'Ts', mass: '(294)'}, {num: 118, sym: 'Og', mass: '(294)'}]
    ];
    
    // Lanthanides (58-71)
    const lanthanides = [
        {num: 58, sym: 'Ce', mass: '140.12'}, {num: 59, sym: 'Pr', mass: '140.91'}, {num: 60, sym: 'Nd', mass: '144.24'}, {num: 61, sym: 'Pm', mass: '145.00'}, {num: 62, sym: 'Sm', mass: '150.35'}, {num: 63, sym: 'Eu', mass: '151.96'}, {num: 64, sym: 'Gd', mass: '157.25'}, {num: 65, sym: 'Tb', mass: '158.92'}, {num: 66, sym: 'Dy', mass: '162.50'}, {num: 67, sym: 'Ho', mass: '164.93'}, {num: 68, sym: 'Er', mass: '167.26'}, {num: 69, sym: 'Tm', mass: '168.93'}, {num: 70, sym: 'Yb', mass: '173.04'}, {num: 71, sym: 'Lu', mass: '174.97'}
    ];
    
    // Actinides (90-103)
    const actinides = [
        {num: 90, sym: 'Th', mass: '232.04'}, {num: 91, sym: 'Pa', mass: '231.00'}, {num: 92, sym: 'U', mass: '238.03'}, {num: 93, sym: 'Np', mass: '237.05'}, {num: 94, sym: 'Pu', mass: '239.05'}, {num: 95, sym: 'Am', mass: '241.06'}, {num: 96, sym: 'Cm', mass: '244.06'}, {num: 97, sym: 'Bk', mass: '249.08'}, {num: 98, sym: 'Cf', mass: '252.08'}, {num: 99, sym: 'Es', mass: '252.08'}, {num: 100, sym: 'Fm', mass: '257.10'}, {num: 101, sym: 'Md', mass: '258.10'}, {num: 102, sym: 'No', mass: '259.10'}, {num: 103, sym: 'Lr', mass: '262.11'}
    ];
    
    // Patched function to allow for custom styles (e.g., f-block highlighting)
    function createElementCell(el) {
        // Handle a typo in the user's data for Phosphorus
        if (el.num === 15 && !el.sym) el.sym = 'P'; 
        
        return `
            <div style="border: 1px solid #000; padding: 3px; text-align: center; min-width: 50px; min-height: 50px; display: flex; flex-direction: column; justify-content: space-between; font-size: 11px; background: white;">
                <div style="font-size: 8px; text-align: left; padding-left: 2px; line-height: 1;">${el.num}</div>
                <div style="font-size: 16px; font-weight: bold; margin: 1px 0; line-height: 1.2;">${el.sym}</div>
                <div style="font-size: 8px; line-height: 1;">${el.mass}</div>
            </div>
        `;
    }
    
    let html = `
        <div style="font-family: Arial, sans-serif; color: #000; background: white; padding: 20px; max-width: 1200px; margin: auto; overflow-x: auto;">
            <h1 style="text-align: center; font-size: 20px; font-weight: bold; margin-bottom: 20px;">PERIODIC TABLE OF THE ELEMENTS</h1>
            
            <!-- Group numbers -->
            <div style="display: grid; grid-template-columns: 0px repeat(18, 1fr); gap: 1px; margin-bottom: 3px; min-width: 900px;">
                <div style="border: 1px solid #000; background: white; border-width: 0;"></div>
                ${Array.from({length: 18}, (_, i) => `<div style="text-align: center; font-size: 11px; font-weight: bold; border: 1px solid #000; background: white; padding: 2px;">${i + 1}</div>`).join('')}
            </div>
            
            <!-- Main table -->
            ${elements.map((period, periodIdx) => {
                const periodNum = periodIdx + 1;
                let row = `<div style="display: grid; grid-template-columns: 0px repeat(18, 1fr); gap: 1px; margin-bottom: 1px; min-width: 900px;">`;
                row += `<div style="text-align: center; font-size: 11px; font-weight: bold; display: flex; align-items: center; justify-content: center; border: 1px solid #000; background: white; border-width: 0;"></div>`;
                
                // Fill in elements based on period
                if (periodNum === 1) {
                    // Period 1: H in column 1, He in column 18
                    row += createElementCell(period[0]);
                    for (let i = 0; i < 16; i++) row += `<div style="min-height: 50px;"></div>`;
                    row += createElementCell(period[1]);
                } else if (periodNum === 2 || periodNum === 3) {
                    // Periods 2-3: elements in columns 1-2, then 10 empty, then 13-18
                    row += createElementCell(period[0]); // Col 1 (e.g., Li)
                    row += createElementCell(period[1]); // Col 2 (e.g., Be)
                    
                    // Add 10 empty spacer cells for groups 3-12
                    for (let i = 0; i < 10; i++) {
                        row += `<div style="min-height: 50px;"></div>`;
                    }
                    
                    // Add remaining 6 elements (groups 13-18)
                    for (let i = 2; i < period.length; i++) {
                        row += createElementCell(period[i]);
                    }
                } else if (periodNum === 4 || periodNum === 5) {
                    // Periods 4-5: all 18 elements
                    period.forEach(el => row += createElementCell(el));
                } else if (periodNum === 6) {
                    // Period 6: Data array has [55, 56, 57, 72...86] which is 18 elements.
                    row += createElementCell(period[0]); // Cs
                    row += createElementCell(period[1]); // Ba
                    row += createElementCell(period[2]); // La
                    // Add the rest of the d-block and p-block
                    for (let i = 3; i < period.length; i++) {
                        row += createElementCell(period[i]);
                    }
                } else if (periodNum === 7) {
                    // Period 7: Data array now has [87...118], all 18 elements.
                    // Render them sequentially.
                    row += createElementCell(period[0]); // Fr
                    row += createElementCell(period[1]); // Ra
                    row += createElementCell(period[2]); // Ac
                    // Add the rest of the d-block and p-block
                    for (let i = 3; i < period.length; i++) {
                        row += createElementCell(period[i]);
                    }
                }
                
                row += `</div>`;
                return row;
            }).join('')}
            
            <!-- Lanthanides -->
            <div style="margin-top: 15px; min-width: 900px;">
                <div style="display: grid; grid-template-columns: 0px repeat(18, 1fr); gap: 1px; margin-bottom: 1px; min-width: 900px;">
                    <div></div>
                    <div style="min-height: 50px;"></div>
                    <div style="min-height: 50px;"></div>
                    ${lanthanides.map(createElementCell).join('')}
                    <div style="min-height: 50px;"></div>
                    <div style="min-height: 50px;"></div>
                </div>
            </div>
            
            <!-- Actinides -->
            <div style="margin-top: 3px; min-width: 900px;">
                <div style="display: grid; grid-template-columns: 0px repeat(18, 1fr); gap: 1px; margin-bottom: 1px; min-width: 900px;">
                    <div></div>
                    <div style="min-height: 50px;"></div>
                    <div style="min-height: 50px;"></div>
                    ${actinides.map(createElementCell).join('')}
                    <div style="min-height: 50px;"></div>
                    <div style="min-height: 50px;"></div>
                </div>
            </div>
            
            <!-- Physical Constants -->
            <div style="margin-top: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 11px; min-width: 900px; align-items: start;">
                <!-- Left Column -->
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 8px 15px; align-items: center;">
                    <span>Avogadro's number</span>
                    <span><b>N<sub>A</sub></b> = 6.02 x 10<sup>23</sup>/mol</span>
                    
                    <span>Faraday constant</span>
                    <span><b>F</b> = 96,500 C/mol</span>
                    
                    <span>Planck's constant</span>
                    <span><b>h</b> = 6.63 x 10<sup>-34</sup> J·s</span>
                </div>
    
                <!-- Right Column -->
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 8px 15px; align-items: start;">
                    <span>speed of light in a vacuum</span>
                    <span><b>c</b> = 3.00 x 10<sup>8</sup> m/s</span>
                    
                    <span>universal gas constant</span>
                <div>
                        <div><b>R</b> = 8.314 J/(mol·K)</div>
                        <div style="padding-left: 20px;">= 0.08206 (atm·L)/(mol·K)</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return html;
}

function hideExhibit() {
    const modal = document.getElementById('periodic-table-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Calculator Functions
// Calculator state
let calcAcc = null;
let calcOp = null;
let calcOverwrite = true;
let calcMemory = 0;

const displayEl = () => document.getElementById('calc-display');
const memEl = () => document.getElementById('calc-mem');

function showCalculator() {
    const modal = document.getElementById('calculator-modal');
    if (modal) {
        modal.style.display = 'flex';
        // Reset calculator state
        calcAcc = null;
        calcOp = null;
        calcOverwrite = true;
        calcMemory = 0;
        const display = displayEl();
        const memDisplay = memEl();
        if (display) display.value = '0';
        if (memDisplay) memDisplay.value = '';
        
        // Wire calculator if not already wired
        setTimeout(() => {
            wireCalculator();
        }, 0);
    }
}

function hideCalculator() {
    const modal = document.getElementById('calculator-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function setDisplay(val) {
    const display = displayEl();
    if (!display) return;
    display.value = formatNumber(val);
}

function getDisplayNumber() {
    const display = displayEl();
    if (!display) return 0;
    const v = parseFloat(display.value.replace(/,/g, ''));
    return Number.isFinite(v) ? v : 0;
}

function formatNumber(n) {
    if (!Number.isFinite(n)) return 'Error';
    if (Math.abs(n) >= 1e12 || (Math.abs(n) > 0 && Math.abs(n) < 1e-9)) return n.toExponential(8);
    const s = n.toString();
    if (s.includes('e') || s.includes('E')) return s;
    const parts = s.split('.');
    const i = parts[0];
    const d = parts[1];
    const iFmt = i.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return d ? iFmt + '.' + d : iFmt;
}

function applyPending(nextVal) {
    if (calcOp === '+') calcAcc = (calcAcc ?? 0) + nextVal;
    else if (calcOp === '-') calcAcc = (calcAcc ?? 0) - nextVal;
    else if (calcOp === '*') calcAcc = (calcAcc ?? 0) * nextVal;
    else if (calcOp === '/') calcAcc = (calcAcc ?? 0) / nextVal;
    else calcAcc = nextVal;
}

function handlePercent() {
    const x = getDisplayNumber();
    if (calcAcc !== null && calcOp) return (calcAcc * x) / 100;
    return x / 100;
}

function press(key) {
    const display = displayEl();
    if (!display) return;
    
    const d = getDisplayNumber();
    if (/^\d$/.test(key)) {
        if (calcOverwrite || display.value === '0') setDisplay(Number(key));
        else {
            const raw = display.value.replace(/,/g, '') + key;
            setDisplay(parseFloat(raw));
        }
        calcOverwrite = false;
        return;
    }
    switch (key) {
        case '.': {
            const raw = display.value.replace(/,/g, '');
            if (!raw.includes('.')) { display.value = raw + '.'; calcOverwrite = false; }
            break;
        }
        case '+/-': setDisplay(-d); break;
        case 'Backspace': {
            if (!calcOverwrite) {
                const raw = display.value.replace(/,/g, '');
                const next = raw.length <= 1 ? '0' : raw.slice(0, -1);
                display.value = next;
            }
            break;
        }
        case 'CE': setDisplay(0); calcOverwrite = true; break;
        case 'CA': calcAcc = null; calcOp = null; calcOverwrite = true; setDisplay(0); break;
        case '+': case '-': case '*': case '/': {
            applyPending(d); calcOp = key; calcOverwrite = true; setDisplay(calcAcc); break;
        }
        case '=': {
            if (calcOp !== null) { applyPending(d); calcOp = null; setDisplay(calcAcc); calcOverwrite = true; }
            break;
        }
        case 'sqrt': setDisplay(Math.sqrt(d)); calcOverwrite = true; break;
        case '1/x': setDisplay(1 / d); calcOverwrite = true; break;
        case '%': { const val = handlePercent(); setDisplay(val); calcOverwrite = true; break; }
        case 'MC': calcMemory = 0; memEl().value = ''; break;
        case 'MR': setDisplay(calcMemory); calcOverwrite = true; break;
        case 'MS': calcMemory = d; memEl().value = 'M'; break;
        case 'M+': calcMemory += d; memEl().value = calcMemory ? 'M' : ''; break;
    }
}

function wireCalculator() {
    const buttons = document.querySelectorAll('.calc-btn');
    if (buttons.length === 0) return;
    
    buttons.forEach(btn => {
        if (!btn.hasAttribute('data-wired')) {
            btn.addEventListener('click', () => press(btn.getAttribute('data-key')));
            btn.setAttribute('data-wired', 'true');
        }
    });
    
    // Only add keyboard listener once
    if (!window.calcKeyboardWired) {
        window.addEventListener('keydown', e => {
    const modal = document.getElementById('calculator-modal');
            if (!modal || modal.style.display === 'none') return;
            
            const k = e.key;
            if (/^[0-9]$/.test(k)) { e.preventDefault(); return press(k); }
            if (['+', '-', '*', '/'].includes(k)) { e.preventDefault(); return press(k); }
            if (k === 'Enter' || k === '=') { e.preventDefault(); return press('='); }
            if (k === 'Backspace') { e.preventDefault(); return press('Backspace'); }
            if (k === 'Delete') { e.preventDefault(); return press('CE'); }
            if (k === '.') { e.preventDefault(); return press('.'); }
        });
        window.calcKeyboardWired = true;
    }
}

function initializeCalculator() {
    // Reset calculator state
    calcState = {
        acc: null,
        op: null,
        overwrite: true,
        mem: 0
    };
    
    const display = document.getElementById('calc-display');
    const memDisplay = document.getElementById('calc-mem');
    const buttonsContainer = document.getElementById('calc-buttons');
    
    if (!display || !buttonsContainer) return;
    
    display.value = '0';
    memDisplay.value = '';
    
    // Clear container
    buttonsContainer.innerHTML = '';
    
    // Set up grid: 6 columns, 4 rows (each row is 34px + 3px gap = 37px total per row)
    buttonsContainer.style.cssText = 'display: grid; grid-template-columns: repeat(6, 1fr); grid-template-rows: repeat(4, 34px); gap: 3px; position: relative;';
    
    // Button definitions - Row 1 (top row of main grid)
    // Colors: Memory=orange, Numbers=black, Operators=red, Special=blue
    const row1 = [
        { label: 'MC', key: 'MC', color: '#d46b00', col: 1 },
        { label: '7', key: '7', color: '#1a1a1a', col: 2 },
        { label: '8', key: '8', color: '#1a1a1a', col: 3 },
        { label: '9', key: '9', color: '#1a1a1a', col: 4 },
        { label: '/', key: '/', color: '#b80000', col: 5 },
        { label: 'sqrt', key: 'sqrt', color: '#0047ff', col: 6 }
    ];
    
    // Row 2
    const row2 = [
        { label: 'MR', key: 'MR', color: '#d46b00', col: 1 },
        { label: '4', key: '4', color: '#1a1a1a', col: 2 },
        { label: '5', key: '5', color: '#1a1a1a', col: 3 },
        { label: '6', key: '6', color: '#1a1a1a', col: 4 },
        { label: '*', key: '*', color: '#b80000', col: 5 },
        { label: '%', key: '%', color: '#0047ff', col: 6 }
    ];
    
    // Row 3
    const row3 = [
        { label: 'MS', key: 'MS', color: '#d46b00', col: 1 },
        { label: '1', key: '1', color: '#1a1a1a', col: 2 },
        { label: '2', key: '2', color: '#1a1a1a', col: 3 },
        { label: '3', key: '3', color: '#1a1a1a', col: 4 },
        { label: '-', key: '-', color: '#b80000', col: 5 }
        // Column 6 is reserved for 1/x and = (handled separately)
    ];
    
    // Row 4
    const row4 = [
        { label: 'M+', key: 'M+', color: '#d46b00', col: 1 },
        { label: '0', key: '0', color: '#1a1a1a', col: 2 },
        { label: '+/-', key: '+/-', color: '#0047ff', col: 3 },
        { label: '.', key: '.', color: '#1a1a1a', col: 4 },
        { label: '+', key: '+', color: '#b80000', col: 5 }
        // Column 6 is reserved for = (handled separately)
    ];
    
    // Helper function to create a standard button
    function createButton(btn, row) {
        const button = document.createElement('button');
        button.className = 'calc-btn';
        button.setAttribute('data-key', btn.key);
        button.textContent = btn.label;
        button.style.cssText = `
            grid-row: ${row};
            grid-column: ${btn.col};
            height: 34px;
            border-radius: 6px;
            border: 1px solid #bdbdbd;
            background: linear-gradient(#f3f3f3, #d8d8d8);
            box-shadow: inset 0 1px 0 #fff, 0 1px 2px rgba(0,0,0,0.2);
            cursor: pointer;
            font-size: 14px;
            color: ${btn.color};
            font-weight: ${btn.color === '#b80000' || btn.color === '#d46b00' || btn.color === '#1a1a1a' ? '700' : '600'};
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
        `;
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            handleCalculatorButton(btn.key);
        });
        return button;
    }
    
    // Add all standard buttons
    row1.forEach(btn => buttonsContainer.appendChild(createButton(btn, 1)));
    row2.forEach(btn => buttonsContainer.appendChild(createButton(btn, 2)));
    row3.forEach(btn => buttonsContainer.appendChild(createButton(btn, 3)));
    row4.forEach(btn => buttonsContainer.appendChild(createButton(btn, 4)));
    
    // Create container for column 6 (rows 3-4) to hold both 1/x and =
    const col6Container = document.createElement('div');
    col6Container.style.cssText = `
        grid-row: 3 / span 2;
        grid-column: 6;
        position: relative;
        height: 71px;
    `;
    
    // Add = button (tall, spans rows 3-4) - should be blue, not red
    const equalsBtn = document.createElement('button');
    equalsBtn.className = 'calc-btn';
    equalsBtn.setAttribute('data-key', '=');
    equalsBtn.textContent = '=';
    equalsBtn.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 71px;
        border-radius: 6px;
        border: 1px solid #bdbdbd;
        background: linear-gradient(#f3f3f3, #d8d8d8);
        box-shadow: inset 0 1px 0 #fff, 0 1px 2px rgba(0,0,0,0.2);
        cursor: pointer;
        font-size: 14px;
        color: #0047ff;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        z-index: 1;
    `;
    equalsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleCalculatorButton('=');
    });
    col6Container.appendChild(equalsBtn);
    
    // Add 1/x button (small, on top of = button in row 3)
    const invBtn = document.createElement('button');
    invBtn.className = 'calc-btn';
    invBtn.setAttribute('data-key', '1/x');
    invBtn.textContent = '1/x';
    invBtn.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 34px;
        border-radius: 6px;
        border: 1px solid #bdbdbd;
        background: linear-gradient(#f3f3f3, #d8d8d8);
        box-shadow: inset 0 1px 0 #fff, 0 1px 2px rgba(0,0,0,0.2);
        cursor: pointer;
        font-size: 11px;
        color: #0047ff;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        z-index: 10;
    `;
    invBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleCalculatorButton('1/x');
    });
    col6Container.appendChild(invBtn);
    
    buttonsContainer.appendChild(col6Container);
}

function handleCalculatorButton(key) {
    const display = document.getElementById('calc-display');
    const memDisplay = document.getElementById('calc-mem');
    if (!display) return;
    
    const MAX_CHARS = 16;
    
    const toNumber = (s) => {
        const n = Number(s);
        return Number.isFinite(n) ? n : 0;
    };
    
    const setDisplay = (v) => {
        if (!Number.isFinite(v)) {
            display.value = 'Error';
            calcState.acc = null;
            calcState.op = null;
            calcState.overwrite = true;
            return;
        }
        let s = String(v);
        if (/\.\d{10,}/.test(s)) s = Number(v.toFixed(10)).toString();
        if (s.length > MAX_CHARS) s = Number(v).toExponential(8);
        s = s.replace(/\.0+$/, '').replace(/(\.\d*?[1-9])0+$/, '$1').replace(/\.$/, '');
        display.value = s;
    };
    
    const pushDigit = (d) => {
        if (display.value === 'Error') setDisplay(0);
        if (calcState.overwrite) {
            display.value = d;
            calcState.overwrite = false;
            return;
        }
        if (display.value.length < MAX_CHARS) display.value += d;
    };
    
    const pushDot = () => {
        if (calcState.overwrite) {
            display.value = '0.';
            calcState.overwrite = false;
            return;
        }
        if (!display.value.includes('.')) display.value += '.';
    };
    
    const clearEntry = () => {
        setDisplay(0);
        calcState.overwrite = true;
    };
    
    const clearAll = () => {
        calcState.acc = null;
        calcState.op = null;
        setDisplay(0);
        calcState.overwrite = true;
    };
    
    const backspace = () => {
        if (calcState.overwrite) return;
        const s = display.value;
        if (s.length <= 1 || (s.length === 2 && s.startsWith('-'))) {
            setDisplay(0);
            calcState.overwrite = true;
        } else {
            display.value = s.slice(0, -1);
        }
    };
    
    const compute = (a, b, sym) => {
        switch (sym) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return b === 0 ? NaN : a / b;
            default: return b;
        }
    };
    
    const commitPending = (nextOp) => {
        const current = toNumber(display.value);
        if (calcState.acc === null) {
            calcState.acc = current;
        } else if (calcState.op) {
            calcState.acc = compute(calcState.acc, current, calcState.op);
            setDisplay(calcState.acc);
        }
        calcState.op = nextOp;
        calcState.overwrite = true;
    };
    
    const equals = () => {
        if (calcState.op === null) return;
        const current = toNumber(display.value);
        const out = compute(calcState.acc, current, calcState.op);
        setDisplay(out);
        calcState.acc = null;
        calcState.op = null;
        calcState.overwrite = true;
    };
    
    const percent = () => {
        const base = calcState.acc === null ? 0 : calcState.acc;
        const x = toNumber(display.value);
        const result = base ? base * (x / 100) : (x / 100);
        setDisplay(result);
        calcState.overwrite = true;
    };
    
    const invert = () => {
        const x = toNumber(display.value);
        setDisplay(x === 0 ? NaN : 1 / x);
        calcState.overwrite = true;
    };
    
    const sqrt = () => {
        const x = toNumber(display.value);
        setDisplay(x < 0 ? NaN : Math.sqrt(x));
        calcState.overwrite = true;
    };
    
    const negate = () => {
        if (display.value === '0' || display.value === 'Error') return;
        display.value = display.value.startsWith('-')
            ? display.value.slice(1)
            : '-' + display.value;
    };
    
    const memory = (opcode) => {
        const x = toNumber(display.value);
        switch (opcode) {
            case 'MC':
                calcState.mem = 0;
                if (memDisplay) memDisplay.value = '';
                break;
            case 'MR':
                setDisplay(calcState.mem);
                calcState.overwrite = true;
                break;
            case 'MS':
                calcState.mem = x;
                if (memDisplay) memDisplay.value = 'M';
                break;
            case 'M+':
                calcState.mem += x;
                if (memDisplay) memDisplay.value = 'M';
                break;
        }
    };
    
    // Handle button press
    if (/^\d$/.test(key)) {
        pushDigit(key);
    } else if (key === '.') {
        pushDot();
    } else if (key === 'CE') {
        clearEntry();
    } else if (key === 'CA') {
        clearAll();
    } else if (key === 'Backspace') {
        backspace();
    } else if (['+', '-', '*', '/'].includes(key)) {
        commitPending(key);
    } else if (key === '=') {
        equals();
    } else if (key === '%') {
        percent();
    } else if (key === '1/x') {
        invert();
    } else if (key === 'sqrt') {
        sqrt();
    } else if (key === '+/-') {
        negate();
    } else if (['MC', 'MR', 'MS', 'M+'].includes(key)) {
        memory(key);
    }
}


// Save/Load state
function saveState() {
    try {
        const state = {
            answers: userAnswers,
            marked: markedQuestions,
            questionIndex: currentQuestionIndex
        };
        localStorage.setItem(`test_${currentSubject}_${currentTestIndex}`, JSON.stringify(state));
    } catch (e) {
        console.error('Failed to save state:', e);
    }
}

function loadSavedState() {
    // Load settings
    loadSettings();
}

function saveSettings() {
    try {
        const settings = {
            prometricDelay,
            timeAccommodations
        };
        localStorage.setItem('test_settings', JSON.stringify(settings));
    } catch (e) {
        console.error('Failed to save settings:', e);
    }
}

function loadSettings() {
    try {
        const saved = localStorage.getItem('test_settings');
        if (saved) {
            const settings = JSON.parse(saved);
            prometricDelay = settings.prometricDelay || false;
            timeAccommodations = settings.timeAccommodations || false;
            
            const togglePrometric = document.getElementById('toggle-prometric-delay');
            const toggleTimeAccom = document.getElementById('toggle-time-accommodations');
            
            if (togglePrometric) togglePrometric.checked = prometricDelay;
            if (toggleTimeAccom) toggleTimeAccom.checked = timeAccommodations;
        }
    } catch (e) {
        console.error('Failed to load settings:', e);
    }
}



