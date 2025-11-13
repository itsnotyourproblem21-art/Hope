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
