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



