// =============================================
// DISCIPLINE ORDER & METADATA
// =============================================
const disciplineOrder = [
  { name: 'All Majors', emoji: '💼', anchor: 'disc-allmajors' },
  { name: 'Architecture', emoji: '🏠', anchor: 'disc-architecture' },
  { name: 'Business Analytics', emoji: '🔍', anchor: 'disc-business' },
  { name: 'CAD / Mechanical Engineering', emoji: '⚙️', anchor: 'disc-cad' },
  { name: 'Computer Science', emoji: '🖥️', anchor: 'disc-cs' },
  { name: 'Cybersecurity', emoji: '🛡️', anchor: 'disc-cyber' },
  { name: 'Economics', emoji: '📈', anchor: 'disc-economics' },
  { name: 'Electrical Engineering', emoji: '⚡', anchor: 'disc-ee' },
  { name: 'Finance', emoji: '💹', anchor: 'disc-finance' },
  { name: 'Game Development', emoji: '🎮', anchor: 'disc-gamedev' },
  { name: 'Neuropsychology', emoji: '🧬', anchor: 'disc-neuropsych' },
  { name: 'Psychology', emoji: '🧪', anchor: 'disc-psychology' },
  { name: 'Statistics', emoji: '📊', anchor: 'disc-statistics' },
];

// =============================================
// PROJECT DATA
// =============================================
const projects = [

  // ── INGREDIENTS ──────────────────────────────────────────────────

  {
    id: 1, cat: 'cat1', type: 'ingredient',
    emoji: '🎯', title: 'Goal-Pursuit',
    desc: 'Give Claude a destination, not a step-by-step plan. It decides what to do.',
    superpower: 'You describe the destination. Claude figures out the steps to get there.',
    long: 'Tell Claude what you want to accomplish — not how to accomplish it. Claude will determine the method, sequence its own steps, execute them, and report back. In one example, a psychology professor described a goal in one sentence and Claude carried out a chain of actions to accomplish it.',
    usedIn: ['Cognitive Experiment Builder', 'FRED Macro Dashboard', 'Live Portfolio Analyzer', 'Competitive Intelligence Monitor', 'End-to-End Analysis Pipeline', 'Case Study Pattern Extractor', 'Autonomous Codebase Reviewer', 'CVE Threat Intelligence Dashboard', 'O*NET Career Intelligence Explorer', 'arXiv Research Landscape Visualizer', 'Tokenizer Explorer', 'Next-Token Explorer', 'Neural Network Animator', 'Document Similarity Map']
  },
  {
    id: 2, cat: 'cat1', type: 'ingredient',
    emoji: '👁️', title: 'Vision & Image Reading',
    desc: 'Extract structured data from photos, diagrams, receipts, whiteboards, or charts.',
    superpower: 'Photos, diagrams, and handwritten notes become structured, searchable data.',
    long: 'Claude can look at an image and extract structured information from it — read numbers from a chart, transcribe a whiteboard, parse a receipt, identify components in a diagram. Visual content that previously required manual data entry can be converted to structured data automatically. Works on photos, screenshots, PDFs with embedded images, and scanned documents.',
    usedIn: ['Live Portfolio Analyzer (earnings call screenshots)', 'Case Study Pattern Extractor (figure extraction)', 'Autonomous Codebase Reviewer (architecture diagrams)']
  },
  {
    id: 3, cat: 'cat1', type: 'ingredient',
    emoji: '🌐', title: 'Live Web Search',
    desc: 'Pull current information from the web and synthesize it with reasoning.',
    superpower: 'Claude searches the web, reads what it finds, and uses the information in the same workflow.',
    long: 'Claude can search the web during a task and use what it finds — reading, evaluating, and synthesizing web content as part of a larger workflow. Rather than handing you a list of links, Claude incorporates what it finds into the task it is already working on.',
    usedIn: ['Competitive Intelligence Monitor', 'Next-Token Probability Explorer (exploit news)', 'CVE Threat Intelligence Dashboard (active exploit news)', 'O*NET Career Intelligence Explorer (job market context)', 'arXiv Research Landscape Visualizer (citation context)']
  },
  {
    id: 4, cat: 'cat1', type: 'ingredient',
    emoji: '🔌', title: 'API Integration',
    desc: 'Connect to live data sources — government databases, research archives, financial markets.',
    superpower: 'Connect to live data sources so your project uses current information, not static snapshots.',
    long: 'Claude knows about dozens of major public APIs and can write code to connect to them, parse the results, and build tools on top of them. You describe what data you need and Claude handles the API details. The verified free APIs in this guide include FRED (economic data), O*NET (occupational data), arXiv (research papers), NVD/NIST (CVE vulnerabilities), PubMed (biomedical literature), and yfinance (financial markets).',
    usedIn: ['FRED Macro Dashboard', 'Live Portfolio Analyzer', 'Case Study Pattern Extractor', 'CVE Threat Intelligence Dashboard', 'O*NET Career Intelligence Explorer', 'arXiv Research Landscape Visualizer', 'Next-Token Probability Explorer']
  },
  {
    id: 5, cat: 'cat1', type: 'ingredient',
    emoji: '📚', title: 'Corpus Reading',
    desc: 'Read dozens of documents simultaneously and find patterns across them.',
    superpower: 'Feed Claude many documents at once and it looks for patterns across the full set.',
    long: 'Claude can ingest a large collection of documents and synthesize across them — finding what is consistent, what varies, what is missing, and what no single document says but the collection implies. This goes beyond summarizing each document individually: the value is in cross-document analysis.',
    usedIn: ['Case Study Pattern Extractor', 'Autonomous Codebase Reviewer', 'arXiv Research Landscape Visualizer', 'Document Semantic Similarity Map', 'Competitive Intelligence Monitor']
  },
  {
    id: 6, cat: 'cat1', type: 'ingredient',
    emoji: '🧠', title: 'NLP & Text Analysis',
    desc: 'Analyze sentiment, themes, and language patterns across any text.',
    superpower: 'Analyze sentiment, themes, and patterns in text — turning language into structured data.',
    long: 'Claude can analyze the linguistic properties of text — sentiment, tone, named entities, rhetorical structure, topic clusters, argument patterns — and produce structured output from unstructured language. This makes qualitative material analyzable at scale: not converting it to numbers, but making its patterns visible and comparable.',
    usedIn: ['Competitive Intelligence Monitor', 'Live Portfolio Analyzer', 'O*NET Career Intelligence Explorer', 'arXiv Research Landscape Visualizer', 'Document Semantic Similarity Map']
  },
  {
    id: 7, cat: 'cat1', type: 'ingredient',
    emoji: '🔧', title: 'Structured Extraction',
    desc: 'Transform messy or narrative content into clean, organized, queryable data.',
    superpower: 'Turn messy prose, PDFs, and unformatted content into clean tables and structured data.',
    long: 'Claude can read narrative, unformatted, or messy content and extract the structured information within it — building tables from prose, timelines from descriptions, comparison matrices from individual case studies. Works on PDFs, emails, messy spreadsheets, natural language reports, web pages. The output is clean data you can query, compare, or visualize.',
    usedIn: ['Case Study Pattern Extractor', 'Autonomous Codebase Reviewer', 'CVE Threat Intelligence Dashboard', 'Cognitive Experiment Builder', 'Signal Processing Workbench', 'Tokenizer Explorer']
  },
  {
    id: 8, cat: 'cat1', type: 'ingredient',
    emoji: '💻', title: 'Interface Building',
    desc: 'Create a real, interactive browser tool or script that persists after the session.',
    superpower: 'The output is a working file — an HTML dashboard, a Python script, a tool you can keep and share.',
    long: 'Claude can write and run code to produce persistent artifacts: an HTML/JS dashboard you open in a browser, a Python script that runs on your computer, a tool that others can use. This is the ingredient that distinguishes Claude Code from Claude chat — the conversation produces a working file that exists after the session ends.',
    usedIn: ['All recipes']
  },
  {
    id: 52, cat: 'cat1', type: 'ingredient',
    emoji: '📁', title: 'File & Format Export',
    desc: 'Generate Excel spreadsheets, PowerPoint decks, CSVs, PDFs, and other file formats.',
    superpower: 'Claude writes code that creates formatted files — .xlsx with multiple sheets, .pptx with slides, .csv, .pdf — ready to open or share.',
    long: 'Claude Code can generate files in standard business and academic formats. Need a spreadsheet with charts? A slide deck summarizing results? A CSV for import into SPSS or R? Claude writes the code to produce these files directly. The output is a real file on your computer, not a preview — you can email it, upload it to Canvas, or open it in Excel or PowerPoint.',
    usedIn: ['Cognitive Experiment Builder', 'End-to-End Analysis Pipeline', 'Signal Processing Workbench', 'Retirement Monte Carlo Simulator', 'Regression Diagnostic Dashboard']
  },
  {
    id: 53, cat: 'cat1', type: 'ingredient',
    emoji: '🧊', title: '3D Visualization',
    desc: 'Build interactive 3D scenes, models, and walkthroughs that run in the browser.',
    superpower: 'Claude generates Three.js code that renders 3D objects, cameras, lighting, and interaction — all in a single HTML file.',
    long: 'Claude can build interactive 3D visualizations using Three.js — a JavaScript library for browser-based 3D graphics. You describe what you want to see and Claude produces a working HTML file with orbitable cameras, lighting, materials, and animation. No software installation required — it runs in any browser. Used for architectural walkthroughs, mechanical part design, terrain generation, physics simulations, and games.',
    usedIn: ['Options Pricing Workbench', '3D Floor Plan Visualizer', 'Structural Load Visualizer', 'Parametric Building Facade Generator', '3D Maze Game', 'Procedural Terrain Generator', '3D Physics Sandbox', 'Parametric Mechanical Part Designer', '3D Assembly Exploded View', '3D Print Slicer Visualizer']
  },
  {
    id: 54, cat: 'cat1', type: 'ingredient',
    emoji: '🧮', title: 'Simulation & Computation',
    desc: 'Run Monte Carlo simulations, physics engines, statistical models, and algorithmic experiments.',
    superpower: 'Claude writes and runs code that simulates complex systems — thousands of scenarios, physical forces, probability distributions — and visualizes the results.',
    long: 'Claude can write code that runs computational experiments: Monte Carlo simulations with thousands of randomized trials, physics engines with gravity and collisions, statistical models across multiple distributions, and algorithmic races that compare performance. The results are not hypothetical — Claude runs the code and shows you the output. This makes abstract concepts in finance, statistics, physics, and computer science something you can watch and interact with.',
    usedIn: ['Game Theory Tournament Simulator', 'Retirement Monte Carlo Simulator', 'Probability Distribution Explorer', 'Algorithm Race Visualizer', 'Structural Load Visualizer', 'Procedural Terrain Generator', '3D Physics Sandbox']
  },

  // ── DISCIPLINE RECIPES ────────────────────────────────────────────

  {
    id: 9, cat: 'cat2', type: 'recipe',
    emoji: '🧪', title: 'Cognitive Experiment Builder',
    discipline: 'Psychology',
    desc: 'Build a real browser-based Stroop task with response timing and data export.',
    chips: ['goal', 'build', 'extract', 'export'],
    dataReq: { type: 'zero', text: 'No data needed. Claude generates the experiment from scratch.' },
    prompt: '"I need to run a classic Stroop task experiment for my cognitive psychology class. Build me a browser-based experiment with proper randomization, millisecond response timing, and a CSV file of results I can analyze. The interface should feel clean and professional."',
    chain: [
      'Looks up standard Stroop task design parameters from the research literature',
      'Builds a complete, working browser experiment with randomization baked in',
      'Creates response timing accurate to the millisecond',
      'Outputs a structured CSV ready for statistical analysis'
    ],
    extend: '"Now add a practice block, track error rates separately from response times, and build a summary visualization I can paste into my lab report."'
  },
  {
    id: 10, cat: 'cat2', type: 'recipe',
    emoji: '📈', title: 'FRED Macro Dashboard',
    discipline: 'Economics',
    desc: 'Pull 20 years of real Fed data and build an interactive annotated policy dashboard.',
    chips: ['api', 'goal', 'build'],
    dataReq: { type: 'free', text: 'FRED API key — free account at fred.stlouisfed.org. Takes 2 minutes.' },
    prompt: '"I\'m studying the relationship between Fed interest rate decisions and unemployment. Use the FRED API to pull 20 years of relevant data, build an interactive dashboard where I can overlay indicators and annotate major policy events, and save it as a file I can open in a browser."',
    chain: [
      'Identifies the relevant FRED series IDs based on the economic indicators you need',
      'Fetches 20 years of real government economic data',
      'Builds a working interactive browser dashboard',
      'Suggests annotation points for major Fed decisions'
    ],
    extend: '"Add housing prices by metro area and let me compare how different cities responded to the same rate changes."'
  },
  {
    id: 11, cat: 'cat2', type: 'recipe',
    emoji: '💹', title: 'Live Portfolio Analyzer',
    discipline: 'Finance',
    desc: 'Fetch live market data, calculate Sharpe ratio and correlations, build a live dashboard.',
    chips: ['api', 'goal', 'build', 'nlp'],
    dataReq: { type: 'zero', text: 'yfinance — free, no API key. Note: unofficial scraper, may occasionally need troubleshooting — itself a useful lesson about AI tool dependencies.' },
    prompt: '"I\'m studying a portfolio: AAPL, MSFT, NVDA, JPM, JNJ, BRK-B, XOM, and SPY as a benchmark. Pull live price and financial data, calculate returns, volatility, Sharpe ratio, and correlation matrix, then build an interactive dashboard that updates when I open it. Flag anything that looks like an outlier and explain why."',
    chain: [
      'Installs yfinance and fetches live market data based on the tickers you provide',
      'Calculates standard portfolio metrics: Sharpe ratio, volatility, correlations, and more',
      'Builds a portfolio dashboard that refreshes on open',
      'Interprets the outliers and explains what they might mean for the analysis'
    ],
    extend: '"Add the latest earnings call sentiment for each company by pulling recent news and running NLP on the headlines."'
  },
  {
    id: 12, cat: 'cat2', type: 'recipe',
    emoji: '🔍', title: 'Competitive Intelligence Monitor',
    discipline: 'Business Analytics',
    desc: 'Monitor competitors, categorize findings by topic, generate a shareable intelligence brief.',
    chips: ['web', 'goal', 'nlp', 'build'],
    dataReq: { type: 'zero', text: 'Claude\'s web search capability. No external data needed.' },
    prompt: '"I want a local tool that monitors 4 competitors in [any industry]. Every time I run it, pull their latest press releases, product announcements, and news coverage, categorize by topic (pricing, product, hiring, legal), and generate a one-page intelligence brief I can share with a team."',
    chain: [
      'Decides how to search for and retrieve competitor information',
      'Categorizes findings into themes based on the content it collects',
      'Formats a professional intelligence brief',
      'Saves a timestamped report each time it runs'
    ],
    extend: '"Run it on the same companies every week for a month. Then ask Claude to identify what changed and what the trend suggests."'
  },
  {
    id: 13, cat: 'cat2', type: 'recipe',
    emoji: '📊', title: 'End-to-End Analysis Pipeline',
    discipline: 'Statistics',
    desc: 'Claude finds a dataset, checks quality, runs regression, visualizes, and interprets.',
    chips: ['goal', 'api', 'build', 'extract', 'export'],
    dataReq: { type: 'zero', text: 'Claude finds and fetches data from UCI ML Repository or government open data portals. You bring no data.' },
    prompt: '"I need to teach my classmates about multiple linear regression using a real, compelling dataset. Find an appropriate public dataset, check it for quality issues, confirm your choice with me, run the analysis, build an interactive visualization where we can adjust variables and see how the model changes, and write an interpretation in plain language."',
    chain: [
      'Evaluates multiple public datasets and selects one, explaining its reasoning',
      'Cleans, checks, and reports data quality as part of the analysis workflow',
      'Runs the full analysis and builds an interactive visualization',
      'Writes a plain-language interpretation alongside the statistical output'
    ],
    extend: '"Build a second version where students can upload their own CSV and run the same pipeline on different data."'
  },
  {
    id: 14, cat: 'cat2', type: 'recipe',
    emoji: '🧬', title: 'Case Study Pattern Extractor',
    discipline: 'Neuropsychology',
    desc: 'Pull 30 real PubMed case study papers, extract clinical data, and find patterns across cases.',
    chips: ['api', 'corpus', 'extract', 'build'],
    dataReq: { type: 'zero', text: 'PubMed API — completely free, no registration required.' },
    prompt: '"I\'m studying prosopagnosia. Use the PubMed API to pull 30 recent case study papers, extract symptom profile, lesion location, cognitive test results, and outcome for each case, build a comparison matrix, and tell me what\'s consistent across cases, what varies, and what questions the literature isn\'t answering."',
    chain: [
      'Fetches real published literature via the PubMed API',
      'Extracts structured clinical data from narrative case descriptions',
      'Builds a comparison matrix across all cases',
      'Identifies potential gaps in the literature by comparing across the full set of papers'
    ],
    extend: '"Filter to only pediatric cases and compare the profile to adult-onset cases. What\'s different?"'
  },
  {
    id: 15, cat: 'cat2', type: 'recipe',
    emoji: '🖥️', title: 'Autonomous Codebase Reviewer',
    discipline: 'Computer Science',
    desc: 'Clone a GitHub repo, analyze architecture, flag complexity, generate a professional review.',
    chips: ['goal', 'corpus', 'extract', 'build'],
    dataReq: { type: 'zero', text: 'Any public GitHub repository. Clone URL is all you need.' },
    prompt: '"Clone this public GitHub repo [any open source project]. Analyze the architecture, identify design pattern violations, flag functions with cyclomatic complexity above 10, check test coverage gaps, and generate a structured code review report formatted like a professional pull request review with prioritized findings."',
    chain: [
      'Clones and reads the entire codebase, not just a file or two',
      'Understands why the code is structured the way it is',
      'Calculates complexity metrics and installs the necessary tools',
      'Generates a structured code review with specific, actionable observations'
    ],
    extend: '"Write the tests for the three highest-risk functions you identified. Run them and tell me which ones fail."'
  },
  {
    id: 16, cat: 'cat2', type: 'recipe',
    emoji: '⚡', title: 'Signal Processing Workbench',
    discipline: 'Electrical Engineering',
    desc: 'Build an interactive browser tool for filtering, FFT, and anomaly detection on sensor data.',
    chips: ['goal', 'build', 'extract', 'export'],
    dataReq: { type: 'own', text: 'Any CSV of sensor readings from lab work. No access issues — this is your own data. Or use any public IoT dataset from Kaggle free tier.' },
    prompt: '"Build me an interactive signal processing workbench. I should be able to load a CSV of sensor readings, apply different filters (Butterworth, Kalman, moving average) with adjustable parameters, run FFT to see the frequency spectrum, compare filtered vs. raw signals side by side, and save filtered outputs as new files."',
    chain: [
      'Builds a complete interactive signal processing tool — not a demo, a real workbench',
      'Implements multiple filter algorithms and makes them adjustable via UI controls',
      'Adds FFT analysis and visualization as part of the signal processing workflow',
      'Creates file export and an interface that works on any CSV you bring to it'
    ],
    extend: '"Add anomaly detection — flag any sample that deviates more than 2 standard deviations from the filtered signal and log it to a separate file."'
  },
  {
    id: 17, cat: 'cat2', type: 'recipe',
    emoji: '🛡️', title: 'CVE Threat Intelligence Dashboard',
    discipline: 'Cybersecurity',
    desc: 'Query NIST NVD for your tech stack\'s CVEs, scored and prioritized by exploitability.',
    chips: ['api', 'goal', 'extract', 'build'],
    dataReq: { type: 'zero', text: 'NVD API — works without a key (rate limited). Optional free API key at nvd.nist.gov for faster requests.' },
    prompt: '"I want a threat intelligence dashboard for a hypothetical tech stack: Python 3.11, Django 4.2, PostgreSQL 15, Nginx, and Ubuntu 22. Use the NIST NVD API to pull all known CVEs for each component, score by CVSS severity, filter to currently exploitable vulnerabilities, and build a prioritized remediation dashboard I can open in a browser."',
    chain: [
      'Identifies the correct CPE strings for each component in your stack',
      'Fetches real, current CVE data from the official NIST database',
      'Filters by exploitability — not just severity score — applying security judgment',
      'Builds a prioritized dashboard with actionable remediation guidance'
    ],
    extend: '"Update the dashboard to pull news about active exploits in the wild for each CVE and flag any currently being used in attacks."'
  },
  {
    id: 18, cat: 'cat2', type: 'recipe',
    emoji: '💼', title: 'O*NET Career Intelligence Explorer',
    discipline: 'All Majors',
    desc: 'Map 900+ occupations by skills, tasks, wages, and outlook using U.S. Dept. of Labor data.',
    chips: ['api', 'goal', 'nlp', 'build', 'corpus'],
    dataReq: { type: 'free', text: 'O*NET API key — free at services.onetcenter.org. 900+ occupations, 500 data points each, updated quarterly.' },
    prompt: '"I\'m a [your major] student exploring career options. Use the O*NET API to build an interactive local tool where I can search any occupation, see its full skill and task profile, compare it to three others side by side, and visualize which skills overlap. Show job outlook and wage data. Then — given my major — suggest which three occupations I should compare first and tell me why."',
    chain: [
      'Registers that O*NET exists as a data source and knows its API structure',
      'Fetches ~500 data points per occupation from the U.S. Department of Labor',
      'Builds a working comparison and skill-overlap visualization',
      'Reasons about your specific major to suggest relevant careers — combining data retrieval with contextual judgment'
    ],
    extend: '"Add a feature where I can paste in a job description and it tells me which O*NET occupation it most closely matches, and what skills I\'m missing for it."'
  },
  {
    id: 19, cat: 'cat2', type: 'recipe',
    emoji: '🗺️', title: 'arXiv Research Landscape Visualizer',
    discipline: 'All Majors',
    desc: 'Pull 300 papers on any topic, cluster by subtopic, trace evolution, map the field in 2D.',
    chips: ['api', 'corpus', 'nlp', 'build', 'goal'],
    dataReq: { type: 'zero', text: 'arXiv API — completely free, no registration, no API key. Over 1 million papers. The cleanest public API in this list.' },
    prompt: '"I\'m interested in [your topic]. Use the arXiv API to pull the last 300 papers on this topic, analyze how research themes evolved over 4 years, identify the 10 most influential authors, cluster the papers by subtopic, and build an interactive browser-based map of the field I can explore. Then tell me what questions the field is not asking."',
    chain: [
      'Fetches hundreds of real papers from Cornell\'s arXiv without downloading any files',
      'Clusters papers into subtopics based on their content',
      'Traces evolution of the field over time from metadata alone',
      'Identifies potential gaps by comparing across the full set of papers'
    ],
    extend: '"Compare how this topic is covered in arXiv versus what\'s covered in my course syllabus. What\'s on the research frontier that we haven\'t discussed in class?"'
  },

  // ── UNDERSTAND AI ─────────────────────────────────────────────────

  {
    id: 20, cat: 'cat3', type: 'edu',
    emoji: '🔤', title: 'Tokenizer & Context Window Explorer',
    desc: 'See how text breaks into tokens, watch the context window fill, compare across languages.',
    chips: ['build', 'goal', 'extract'],
    dataReq: { type: 'zero', text: 'tiktoken — free, open source, no API key, runs entirely locally. The text you type is the data.' },
    prompt: '"Build me an interactive browser tool that tokenizes any text I type using the GPT-4 tokenizer (tiktoken). Show each token as a color-coded block with its ID number underneath. Show a running token count and context window fill bar. Add a comparison mode where I can see how the same text tokenizes in English vs. another language. Highlight any tokenization that would surprise a non-technical user — words that break in unexpected places."',
    chain: [
      'Installs and uses tiktoken to perform real tokenization',
      'Builds color-coded token blocks with IDs — a design decision it makes itself',
      'Adds a context window fill visualization showing how much capacity different inputs use',
      'Identifies "surprising" tokenizations — applying judgment about what a non-expert would expect'
    ],
    extend: '"Add a prompt cost calculator: given a model name and current API pricing, show the dollar cost of tokenizing any text."',
    moment: 'Type your own name. Watch it tokenize. Now type it in a different capitalization or in another language. You may notice inconsistencies — these are not bugs but reflections of how these models were trained and what "language" means to a tokenizer.'
  },
  {
    id: 21, cat: 'cat3', type: 'edu',
    emoji: '🎲', title: 'Next-Token Probability Explorer',
    desc: 'See the top 5 candidate tokens at each position with probabilities, plus a "what if" mode.',
    chips: ['api', 'build', 'goal'],
    dataReq: { type: 'free', text: 'HuggingFace free account + access token. Free tier is generous. Model runs on HuggingFace\'s servers — no GPU needed on your machine.' },
    prompt: '"Use the HuggingFace Inference API with a small open-source language model to build an interactive tool that shows me the top 5 candidate tokens at each position in a generated response, with their probabilities displayed as a bar chart. I should be able to type any prompt and see the model\'s token-by-token thinking. Add a mode where I can click on a token and see what the response would have been if the model had chosen the second-most-likely token instead."',
    chain: [
      'Selects an appropriate small open model that exposes logprobs',
      'Builds a token-by-token probability bar visualization',
      'Implements the "what if" counterfactual mode — a design insight, not an instruction',
      'Makes generation stochasticity interactive and observable'
    ],
    extend: '"Add a temperature slider. Watch how the probability distribution flattens and sharpens as you change it. Now the temperature parameter is something you\'ve seen, not just read about."',
    moment: 'Ask the model to complete "The capital of France is..." and watch "Paris" appear at 0.73 probability, "Lyon" at 0.09, "a" at 0.06. This shows what "stochastic" means and what temperature does — the model is not looking up the answer but sampling from a distribution.'
  },
  {
    id: 22, cat: 'cat3', type: 'edu',
    emoji: '🧮', title: 'Neural Network Training Animator',
    desc: 'Watch a network learn in real time — weights adjusting, decision boundary forming, loss falling.',
    chips: ['build', 'goal'],
    dataReq: { type: 'zero', text: 'No data, no libraries, no API. Pure JavaScript running in a browser. Claude builds the neural network from mathematical first principles.' },
    prompt: '"Build me an interactive browser-based visualization of a small neural network learning to classify two groups of points. Show the network architecture with animated weights — thickness and color should represent weight magnitude and sign. Show the decision boundary forming in real time as training progresses. Include a live loss curve, adjustable learning rate and number of hidden neurons, and a button to reset and retrain from scratch. Make it beautiful — this is for teaching."',
    chain: [
      'Implements backpropagation and gradient descent from scratch in JavaScript',
      'Designs the visual encoding (weight thickness, color for sign) — a creative decision',
      'Animates the decision boundary forming in real time as weights update',
      'Adds interactive controls that make the concepts adjustable and explorable'
    ],
    extend: '"Add a mode where I can draw my own boundary between the two classes by hand, and then the network tries to learn that specific boundary. Compare how many iterations it needs."',
    moment: 'Crank the learning rate too high and watch the network fail to converge — oscillating wildly instead of settling. Now reduce it. Watch it learn. Seeing the learning rate problem play out in real time makes the concept concrete in a way that is hard to get from a static description.'
  },
  {
    id: 23, cat: 'cat3', type: 'edu',
    emoji: '🗺️', title: 'Document Semantic Similarity Map',
    desc: 'Embed your course PDFs, cluster by meaning, and map your intellectual world in 2D.',
    chips: ['corpus', 'nlp', 'build', 'goal'],
    dataReq: { type: 'own', text: 'Your own PDFs — course readings are perfect. sentence-transformers runs entirely locally, no API key, no registration. The more documents, the richer the map.' },
    prompt: '"I have a folder of PDFs — my course readings for this semester. Build me an interactive tool that computes semantic embeddings for each document using sentence-transformers, reduces them to 2D using UMAP, and displays them as an interactive map where hovering over a point shows the document title and a key sentence. Cluster them automatically and color by cluster. Let me click any document to see which others are most similar to it and why."',
    chain: [
      'Installs sentence-transformers and UMAP — knows these are the right tools',
      'Extracts text from PDFs and computes embeddings for each',
      'Chooses a clustering algorithm and applies it — a methodological decision',
      'Builds an interactive map and decides how to surface similarity explanations'
    ],
    extend: '"Add a search bar: I type any concept or phrase and the map highlights the documents most relevant to it. This is now a semantic search engine for your own library."',
    moment: 'Two papers you wouldn\'t have grouped together end up adjacent. A reading from week 1 clusters with something from week 10. That is what embeddings do — and it opens a genuine question worth exploring: does the model\'s notion of similarity match yours?'
  },

  // ── NEW DISCIPLINE CARDS (24–51) ────────────────────────────

  // ── Psychology ──────────────────────────────────────────────
  {
    id: 24, cat: 'cat2', type: 'recipe',
    emoji: '👁️', title: 'Visual Illusion Lab',
    discipline: 'Psychology',
    desc: 'Explore 5 classic visual illusions with adjustable parameters and a self-test mode.',
    chips: ['build', 'goal'],
    dataReq: { type: 'zero', text: 'No data needed. All illusions are generated computationally.' },
    prompt: '"Build me an interactive gallery of 5 classic visual perception illusions (Müller-Lyer, Ponzo, Ebbinghaus, Necker cube, Café Wall) as a single browser tool. Each illusion should have sliders that adjust parameters so I can see how changing line length, angle, or context affects perception. Add a \'test yourself\' mode that measures my susceptibility to each illusion and exports results as CSV."',
    chain: [
      'Implements 5 classic perceptual illusions with mathematically accurate geometry',
      'Adds interactive parameter controls — each slider maps to a specific perceptual variable',
      'Builds a measurement mode that quantifies individual susceptibility',
      'Exports structured results ready for analysis'
    ],
    extend: '"Add a 6th illusion of your choice that demonstrates a different perceptual principle, and include a brief literature reference for each."'
  },
  {
    id: 25, cat: 'cat2', type: 'recipe',
    emoji: '🧠', title: 'Cognitive Assessment Battery',
    discipline: 'Psychology',
    desc: 'Practice four classic neuropsych screening tests with scoring and interpretation.',
    chips: ['build', 'goal', 'extract'],
    dataReq: { type: 'zero', text: 'No data needed. All tests are generated from standard cognitive science protocols.' },
    prompt: '"Build me a browser-based cognitive test battery for my neuropsych class. Include digit span (forward and backward), Trail Making Test (connect numbers, then alternate numbers-letters), Stroop test, and a verbal fluency timer. For each test, show my results, explain what cognitive domain it assesses, and explain what impaired performance might suggest about brain function. This is for educational demonstration, not clinical use."',
    chain: [
      'Implements four standard neuropsych screening tasks with proper timing and scoring',
      'Adds normative comparison context for each test',
      'Links each test to specific cognitive domains and brain regions',
      'Generates a summary profile across all tests'
    ],
    extend: '"Add the Wisconsin Card Sort Test (simplified) and a reaction time task. Show a radar chart of performance across all domains."'
  },

  // ── Economics ───────────────────────────────────────────────
  {
    id: 26, cat: 'cat2', type: 'recipe',
    emoji: '💵', title: 'Real Wage / Inflation Calculator',
    discipline: 'Economics',
    desc: 'Enter any salary and year — see its real purchasing power over 50 years of CPI data.',
    chips: ['api', 'build', 'goal'],
    dataReq: { type: 'free', text: 'FRED API key — free account at fred.stlouisfed.org. Takes 2 minutes.' },
    prompt: '"Build me an interactive tool that lets me enter any salary and year between 1970 and today, then shows what that salary is worth in today\'s dollars using CPI data from the FRED API. Chart how the real purchasing power of that salary changed year by year, overlay major economic events (oil crisis, dot-com, 2008, COVID), and calculate what the salary would need to be today for equal buying power."',
    chain: [
      'Fetches the right CPI time series from FRED based on the analysis you described',
      'Calculates real vs. nominal wage trajectory over 50+ years',
      'Annotates major economic shocks on the timeline',
      'Produces a clear purchasing-power equivalence number'
    ],
    extend: '"Add a comparison mode: enter two salaries from two different years and see which one was actually worth more. Add regional CPI adjustment."'
  },
  {
    id: 27, cat: 'cat2', type: 'recipe',
    emoji: '🎲', title: 'Game Theory Tournament Simulator',
    discipline: 'Economics',
    desc: 'Run prisoner\'s dilemma tournaments with classic strategies and custom ones you describe in English.',
    chips: ['build', 'goal', 'sim'],
    dataReq: { type: 'zero', text: 'No data needed. Pure computation — all strategies are code.' },
    prompt: '"Build me an interactive prisoner\'s dilemma tournament for my game theory class. I should be able to define strategies (always cooperate, always defect, tit-for-tat, random, grudger, pavlov) and run round-robin tournaments of any length. Show a live leaderboard, round-by-round history, and a heatmap of how each strategy performs against every other. Let me create a custom strategy by describing it in plain English."',
    chain: [
      'Implements 6+ classic game theory strategies from the literature',
      'Builds a full round-robin tournament engine with configurable rounds',
      'Creates real-time visualizations: leaderboard, history, and head-to-head heatmap',
      'Parses natural-language strategy descriptions into executable logic'
    ],
    extend: '"Add an evolutionary mode: strategies that score well reproduce, losers die off. Watch which strategy dominates over 1,000 generations."'
  },

  // ── Finance ─────────────────────────────────────────────────
  {
    id: 28, cat: 'cat2', type: 'recipe',
    emoji: '📊', title: 'Options Pricing Workbench',
    discipline: 'Finance',
    desc: 'Interactive Black-Scholes calculator with Greeks, 3D surfaces, and multi-leg strategy P&L.',
    chips: ['build', 'goal', 'sim', 'viz3d'],
    dataReq: { type: 'zero', text: 'No data needed. Black-Scholes is pure mathematics.' },
    prompt: '"Build me an interactive Black-Scholes options pricing calculator. I enter underlying price, strike, time to expiration, risk-free rate, and volatility. Show call/put prices, all five Greeks (delta, gamma, theta, vega, rho) with visual gauges, and an interactive 3D surface plot of how option price varies with underlying price and volatility simultaneously. Add P&L diagrams for four strategies: covered call, protective put, straddle, iron condor — with parameters I can set."',
    chain: [
      'Implements the full Black-Scholes model with all five Greeks',
      'Builds a 3D option price surface that shows how price varies with underlying and volatility',
      'Creates interactive P&L diagrams for four multi-leg strategies',
      'Adds visual gauges that make abstract Greek values intuitive'
    ],
    extend: '"Add implied volatility: given a market option price, back-solve for the volatility the market is pricing in. Compare to historical volatility."'
  },
  {
    id: 29, cat: 'cat2', type: 'recipe',
    emoji: '🏦', title: 'Retirement Monte Carlo Simulator',
    discipline: 'Finance',
    desc: 'Visualize compound growth and run 1,000 randomized retirement scenarios as a fan chart.',
    chips: ['build', 'goal', 'sim', 'export'],
    dataReq: { type: 'zero', text: 'No data needed. Uses historical return distributions built into the model.' },
    prompt: '"Build me a retirement planning visualizer. I enter my age, current savings, monthly contribution, expected return, and target retirement age. Show a year-by-year growth chart with compound interest visible. Add a Monte Carlo mode that runs 1,000 scenarios with randomized returns based on historical S&P 500 distribution, displayed as a fan chart showing 10th/25th/50th/75th/90th percentile outcomes. Include an inflation-adjusted view."',
    chain: [
      'Builds a deterministic compound growth model with year-by-year breakdown',
      'Implements Monte Carlo simulation with 1,000 randomized return paths',
      'Creates a fan chart showing the full range of possible outcomes',
      'Adds inflation adjustment to show real purchasing power of future dollars'
    ],
    extend: '"Add life events: buying a house, having kids, career change. Each event modifies contributions. Show how each event shifts the probability distribution."'
  },

  // ── Business Analytics ──────────────────────────────────────
  {
    id: 30, cat: 'cat2', type: 'recipe',
    emoji: '🔬', title: 'A/B Test Significance Calculator',
    discipline: 'Business Analytics',
    desc: 'Enter two conversion rates — see p-values, power, and a simulation of why peeking is dangerous.',
    chips: ['build', 'goal', 'sim'],
    dataReq: { type: 'zero', text: 'No data needed. You enter the numbers manually or use preset examples.' },
    prompt: '"Build me an A/B test significance calculator for my marketing analytics class. I enter sample sizes and conversion rates for two groups. Show p-value, confidence interval, statistical power, minimum detectable effect, and recommended sample size — all with clear visualizations. Include a simulation mode where I watch the p-value evolve as more data comes in, demonstrating why you shouldn\'t peek at results early. Preload three realistic marketing scenarios."',
    chain: [
      'Implements proper two-proportion z-test with all relevant outputs',
      'Visualizes confidence intervals and effect sizes — not just a p-value number',
      'Builds a real-time simulation of accumulating evidence',
      'Preloads realistic scenarios so students can experiment immediately'
    ],
    extend: '"Add a Bayesian mode that shows the posterior probability of one variant being better, updated continuously. Compare frequentist vs. Bayesian conclusions on the same data."'
  },
  {
    id: 31, cat: 'cat2', type: 'recipe',
    emoji: '💰', title: 'Break-Even & Pricing Scenario Tool',
    discipline: 'Business Analytics',
    desc: 'Interactive break-even analysis with sensitivity charts and side-by-side scenario comparison.',
    chips: ['build', 'goal'],
    dataReq: { type: 'zero', text: 'No data needed. You enter cost and pricing assumptions.' },
    prompt: '"Build me an interactive break-even analysis tool. I enter fixed costs, variable cost per unit, and selling price. Show the break-even point on a chart with revenue, total cost, and profit lines. Add pricing sensitivity analysis: what happens if I change price by ±10/20/30%? Include a scenario comparison mode where I save and compare three different business models side by side. Make it professional enough to include in a business plan."',
    chain: [
      'Calculates break-even with contribution margin approach',
      'Builds a clear multi-line chart with annotated break-even point',
      'Creates a sensitivity analysis grid showing how price changes affect profitability',
      'Implements save/compare mode for side-by-side scenario evaluation'
    ],
    extend: '"Add a demand curve: as price increases, units sold decrease. Find the profit-maximizing price that accounts for demand elasticity."'
  },

  // ── Statistics ──────────────────────────────────────────────
  {
    id: 32, cat: 'cat2', type: 'recipe',
    emoji: '📈', title: 'Probability Distribution Explorer',
    discipline: 'Statistics',
    desc: 'Adjust parameters of 7 distributions in real time and watch the Central Limit Theorem happen.',
    chips: ['build', 'goal', 'sim'],
    dataReq: { type: 'zero', text: 'No data needed. Pure mathematical visualization.' },
    prompt: '"Build me an interactive probability distribution explorer. Include Normal, t, Chi-squared, F, Binomial, Poisson, and Exponential. For each, I adjust parameters with sliders and see the PDF/CDF update in real time. Add shading for p-values and critical regions. Include a Central Limit Theorem demonstrator: I pick any source distribution, set a sample size, and watch the sampling distribution of the mean become normal as I increase the number of samples."',
    chain: [
      'Implements 7 probability distributions with exact formulas',
      'Adds real-time parameter adjustment with immediate visual feedback',
      'Creates interactive p-value shading — students can see what a significance level looks like',
      'Builds a CLT simulator that makes the theorem observable, not just provable'
    ],
    extend: '"Add hypothesis testing mode: set up H0 and H1, choose significance level, and see Type I and Type II error regions shaded on the same plot."'
  },
  {
    id: 33, cat: 'cat2', type: 'recipe',
    emoji: '🔍', title: 'Regression Diagnostic Dashboard',
    discipline: 'Statistics',
    desc: 'Upload a CSV, run regression, and get all four diagnostic plots with interactive outlier removal.',
    chips: ['build', 'goal', 'extract', 'export'],
    dataReq: { type: 'own', text: 'Any CSV dataset — or use the built-in sample datasets (Boston housing, mtcars, iris).' },
    prompt: '"Build me a regression diagnostic tool I can open in a browser. I upload a CSV, pick dependent and independent variables, and it runs multiple linear regression. Show not just results but all diagnostic plots: residuals vs fitted, QQ plot, scale-location, Cook\'s distance. Highlight influential points or assumption violations in red. Let me remove outliers with one click and rerun, showing before/after comparison of how the model changes."',
    chain: [
      'Implements OLS regression from scratch in JavaScript — no Python needed',
      'Generates all four standard diagnostic plots',
      'Automatically flags assumption violations and influential observations',
      'Builds interactive outlier removal with instant before/after comparison'
    ],
    extend: '"Add variable selection: run all possible subsets and show AIC/BIC for each model. Recommend the best specification and explain why."'
  },

  // ── Neuropsychology ─────────────────────────────────────────
  {
    id: 34, cat: 'cat2', type: 'recipe',
    emoji: '🧩', title: 'Brain Region Function Explorer',
    discipline: 'Neuropsychology',
    desc: 'Click any brain region to see its function, famous damage cases, and relevant neuropsych tests.',
    chips: ['build', 'goal'],
    dataReq: { type: 'zero', text: 'No data needed. Claude generates the neuroanatomy reference from textbook knowledge.' },
    prompt: '"Build me an interactive brain region explorer. Show a 2D brain diagram (lateral and medial views) where I click any region to see its name, primary functions, what happens when it\'s damaged (with famous cases — Phineas Gage for frontal lobe, H.M. for hippocampus, Broca\'s area, Wernicke\'s area), and which neuropsych tests assess it. Add a search-by-symptom mode: I type \'inability to recognize faces\' and it highlights the relevant regions. Include a quiz mode."',
    chain: [
      'Draws accurate brain region maps with clickable zones in SVG',
      'Links each region to function, damage effects, famous cases, and assessment tools',
      'Builds a reverse-lookup symptom search that maps symptoms to anatomy',
      'Creates a quiz mode that tests region-function knowledge'
    ],
    extend: '"Add a pathway view: show how regions connect to each other (e.g., the visual processing stream from V1 to ventral/dorsal pathways)."'
  },
  {
    id: 35, cat: 'cat2', type: 'recipe',
    emoji: '📋', title: 'Single-Case Study Analyzer',
    discipline: 'Neuropsychology',
    desc: 'Paste a published case study — get a structured dashboard with timeline, norms table, and discussion questions.',
    chips: ['extract', 'goal', 'nlp'],
    dataReq: { type: 'zero', text: 'You paste a published case study — Claude structures it. No API needed.' },
    prompt: '"I\'m reading a published neuropsychological case study for class. I\'ll paste the full text. Build me a structured analysis dashboard that extracts: patient demographics, lesion location, presenting symptoms, cognitive test results and scores, treatment approach, and outcome. Generate a visual timeline of the case, a table comparing the patient\'s scores to published norms, and three discussion questions linking this case to broader neuropsych principles."',
    chain: [
      'Parses unstructured clinical narrative into structured fields',
      'Builds a visual case timeline from admission through outcome',
      'Creates a normative comparison table for all reported test scores',
      'Generates discussion questions that connect the case to textbook concepts'
    ],
    extend: '"Paste a second case study. Generate a side-by-side comparison highlighting what\'s similar and different between the two cases."'
  },

  // ── Computer Science ────────────────────────────────────────
  {
    id: 36, cat: 'cat2', type: 'recipe',
    emoji: '🏁', title: 'Algorithm Race Visualizer',
    discipline: 'Computer Science',
    desc: 'Animate sorting and pathfinding algorithms step-by-step, with a head-to-head race mode.',
    chips: ['build', 'goal', 'sim'],
    dataReq: { type: 'zero', text: 'No data needed. Algorithms run on generated arrays and graphs.' },
    prompt: '"Build me an interactive algorithm visualizer. Include sorting (bubble, merge, quick, heap) and pathfinding (BFS, DFS, Dijkstra, A*). Each algorithm animates step-by-step with adjustable speed. Show time and space complexity, highlight the current operation, and let me pause and step manually. Include a race mode where two sorting algorithms compete on the same random array, and a maze generator for pathfinding demos."',
    chain: [
      'Implements 8 algorithms with step-by-step animation',
      'Adds speed control, pause, and manual stepping',
      'Creates a head-to-head race mode with shared input data',
      'Generates random mazes for pathfinding visualization'
    ],
    extend: '"Add a complexity counter that tallies comparisons and swaps in real time. Show how the counts scale as you increase array size from 10 to 100 to 1,000."'
  },
  {
    id: 37, cat: 'cat2', type: 'recipe',
    emoji: '🏗️', title: 'Design Patterns Interactive Reference',
    discipline: 'Computer Science',
    desc: 'Explore 8 Gang of Four patterns with live-editable code, diagrams, and a quiz mode.',
    chips: ['build', 'goal'],
    dataReq: { type: 'zero', text: 'No data needed. Patterns are generated from software engineering principles.' },
    prompt: '"Build me an interactive design patterns reference for my software engineering class. For the 8 most common Gang of Four patterns (Singleton, Factory, Observer, Strategy, Decorator, Adapter, Command, Iterator), show: a real-world analogy, a visual diagram, working JavaScript I can edit and run in the browser, and a \'when to use it\' checklist. Add a quiz mode that presents a code scenario and asks me to pick the right pattern."',
    chain: [
      'Creates 8 complete pattern references with analogies, diagrams, and code',
      'Builds a live code editor where students can modify and run each pattern',
      'Designs a quiz engine that presents realistic design scenarios',
      'Links patterns to each other — shows when Observer leads to Mediator, etc.'
    ],
    extend: '"Add an anti-patterns section showing common mistakes and how to refactor them into proper patterns."'
  },

  // ── Electrical Engineering ──────────────────────────────────
  {
    id: 38, cat: 'cat2', type: 'recipe',
    emoji: '⚡', title: 'Circuit Simulator',
    discipline: 'Electrical Engineering',
    desc: 'Place components on a grid, solve DC/AC circuits, and watch animated current flow.',
    chips: ['build', 'goal', 'sim'],
    dataReq: { type: 'zero', text: 'No data needed. Circuit analysis is pure computation.' },
    prompt: '"Build me a browser-based DC/AC circuit simulator. I place components on a grid — resistors, capacitors, inductors, voltage sources, op-amps — and connect them. Calculate and display node voltages and branch currents. For AC circuits, show the Bode plot (magnitude and phase). Include presets: voltage divider, RC low-pass filter, RLC resonant circuit, inverting amplifier. Animate current flow direction and magnitude with moving dots."',
    chain: [
      'Implements nodal analysis for DC circuit solving',
      'Adds AC analysis with complex impedance and phasor calculations',
      'Builds a drag-and-drop component placement interface',
      'Creates animated current flow that makes invisible physics visible'
    ],
    extend: '"Add a transient analysis mode: show voltage/current waveforms over time when a switch is flipped. Animate the RC charge/discharge curve."'
  },
  {
    id: 39, cat: 'cat2', type: 'recipe',
    emoji: '🤖', title: 'Arduino Project Generator',
    discipline: 'Electrical Engineering',
    desc: 'Describe your components — get a wiring diagram, commented sketch, and live data dashboard.',
    chips: ['build', 'goal'],
    dataReq: { type: 'own', text: 'Your own Arduino + components. Describe what you have — Claude designs around it.' },
    prompt: '"I have an Arduino Uno and a breadboard with these components: [list what you have — LEDs, buttons, a temperature sensor, a servo, an LCD, etc.]. Generate a complete project: wiring diagram described as text and as an ASCII visual, the Arduino sketch with detailed comments explaining every line, and a browser-based dashboard that receives serial data and displays it in real time. Walk me through uploading and testing step by step."',
    chain: [
      'Designs a project around exactly the components the student has',
      'Creates a wiring diagram the student can follow without prior experience',
      'Writes fully commented firmware with educational explanations',
      'Builds a companion browser dashboard for data visualization'
    ],
    extend: '"Now add WiFi capability — connect the Arduino to the internet and build a simple web API that serves sensor data. Access it from your phone."'
  },

  // ── Cybersecurity ───────────────────────────────────────────
  {
    id: 40, cat: 'cat2', type: 'recipe',
    emoji: '🏴', title: 'CTF Challenge Partner',
    discipline: 'Cybersecurity',
    desc: 'Work through PicoCTF challenges step-by-step and build a cumulative technique cheat sheet.',
    chips: ['goal', 'build'],
    dataReq: { type: 'zero', text: 'PicoCTF is free and open to all. No registration required to view challenges.' },
    prompt: '"I\'m working through PicoCTF beginner challenges. For each challenge I paste in, walk me through the thought process step by step — don\'t just give me the flag. Teach me to use the tools: how to analyze a binary with strings and xxd, how to decode base64 and hex, how to inspect HTTP headers, how to find hidden data in images. After each challenge, build me a cheat sheet page that accumulates all techniques we\'ve used, organized by category."',
    chain: [
      'Teaches the analytical reasoning behind each CTF challenge',
      'Demonstrates real security tools and their proper usage',
      'Builds a cumulative reference guide that grows with each solved challenge',
      'Explains defensive implications — why this vulnerability matters in the real world'
    ],
    extend: '"Move to medium-difficulty challenges. For each new technique, add a practice exercise to the cheat sheet that I can try on my own."'
  },
  {
    id: 41, cat: 'cat2', type: 'recipe',
    emoji: '🔐', title: 'Password Security Analyzer',
    discipline: 'Cybersecurity',
    desc: 'Analyze password strength, visualize hash functions, and watch a dictionary attack animate.',
    chips: ['build', 'goal'],
    dataReq: { type: 'zero', text: 'No data needed. All computation is local — no passwords are transmitted.' },
    prompt: '"Build me a password security education tool. I type a password and it shows: estimated crack time at consumer, GPU cluster, and nation-state scales, entropy in bits, and specific weaknesses. Add a live demo of how hash functions work: I type any input, see its MD5, SHA-256, and bcrypt output, and watch how changing one character transforms the entire hash. Include a dictionary attack simulator with a small wordlist that animates the search."',
    chain: [
      'Calculates entropy and crack time estimates across realistic attack scenarios',
      'Implements multiple hash algorithms running in the browser',
      'Builds an animated dictionary attack so you can watch brute-force search in action',
      'All computation stays local — teaches security by practicing it'
    ],
    extend: '"Add a rainbow table demo: precompute hashes for a small dictionary and show how lookup attacks work. Then demonstrate how salting defeats them."'
  },

  // ── All Majors ──────────────────────────────────────────────
  {
    id: 42, cat: 'cat2', type: 'recipe',
    emoji: '🔗', title: 'Course Connection Mapper',
    discipline: 'All Majors',
    desc: 'Paste syllabi from your classes — discover hidden connections and generate cross-course study questions.',
    chips: ['nlp', 'goal', 'extract'],
    dataReq: { type: 'zero', text: 'You paste your own syllabi or course descriptions. Claude does the rest.' },
    prompt: '"I\'m going to paste my syllabus or course descriptions from 3-4 classes I\'m taking this semester. Build me an interactive visual map that finds connections between topics across my different courses that I haven\'t noticed. Cluster related concepts, draw links between courses, and generate 5 study questions that bridge two different classes. Make it a browser tool I can keep adding to."',
    chain: [
      'Extracts key concepts and topics from unstructured syllabi',
      'Finds cross-course connections the student hasn\'t noticed',
      'Builds an interactive concept map with clickable nodes and edges',
      'Generates bridge questions that synthesize ideas across courses'
    ],
    extend: '"Add your readings list. Map which readings connect to which concepts and identify gaps — topics discussed in class but not covered by any reading."'
  },

  // ── Architecture (NEW DISCIPLINE) ───────────────────────────
  {
    id: 43, cat: 'cat2', type: 'recipe',
    emoji: '🏠', title: '3D Floor Plan Visualizer',
    discipline: 'Architecture',
    desc: 'Describe a floor plan in English — get a 3D walkthrough with furniture and camera modes.',
    chips: ['build', 'goal', 'viz3d'],
    dataReq: { type: 'zero', text: 'No data needed. Describe the floor plan in plain English.' },
    prompt: '"I\'ll describe a simple building floor plan in plain English — rooms, approximate dimensions, door and window placements. Build me a 3D walkthrough visualization using Three.js that I can rotate, zoom, and orbit. Render walls, floors, doors, and windows with basic materials. Add a furniture placement mode where I describe what goes in each room and you add 3D representations. Include a toggle between bird\'s-eye view and first-person perspective."',
    chain: [
      'Parses a natural-language floor plan description into 3D geometry',
      'Renders a complete walkable space with walls, doors, and windows in Three.js',
      'Adds furniture as 3D objects based on room descriptions',
      'Implements multiple camera modes for different viewing perspectives'
    ],
    extend: '"Add a sunlight simulation: set the building orientation and time of day, and watch shadows move across the floor plan. Identify which rooms get the most natural light."'
  },
  {
    id: 44, cat: 'cat2', type: 'recipe',
    emoji: '🏗️', title: 'Structural Load Visualizer',
    discipline: 'Architecture',
    desc: '3D beam and truss analyzer — apply loads, see deformation, color-code stress levels.',
    chips: ['build', 'goal', 'viz3d', 'sim'],
    dataReq: { type: 'zero', text: 'No data needed. Structural analysis is pure computation.' },
    prompt: '"Build me an interactive 3D beam and truss analyzer using Three.js. I define a simple structure by placing nodes in 3D space and connecting them with beams. I apply point loads and distributed loads by clicking. Show the deformed shape (exaggerated for visibility), color-code members by stress level (green=safe, yellow=approaching limit, red=exceeds), and display reaction forces at supports. Include presets: simply supported beam, cantilever, Warren truss, Pratt truss."',
    chain: [
      'Implements structural analysis with force equilibrium and deformation calculations',
      'Renders 3D truss structures with interactive node/beam placement',
      'Color-codes stress levels to make structural behavior instantly visible',
      'Animates deformation so students can see how structures respond to load'
    ],
    extend: '"Add a failure animation: increase the load until a member fails. Show which member fails first and how the load redistributes."'
  },
  {
    id: 45, cat: 'cat2', type: 'recipe',
    emoji: '🏛️', title: 'Parametric Building Facade Generator',
    discipline: 'Architecture',
    desc: 'Adjust sliders to generate infinite facade variations in 3D with material and solar overlays.',
    chips: ['build', 'goal', 'viz3d'],
    dataReq: { type: 'zero', text: 'No data needed. Parametric design is pure geometry.' },
    prompt: '"Build me a 3D parametric facade generator using Three.js for my architecture studio. I adjust parameters with sliders: building width, height, number of floors, window-to-wall ratio, column spacing, balcony depth, and a randomization seed for organic variation. The facade renders in real-time 3D. Include material options (glass, concrete, brick, wood) with distinct visual styles. Let me toggle a solar analysis overlay that color-codes the facade by estimated sun exposure based on orientation."',
    chain: [
      'Creates a parametric design system that generates infinite facade variations',
      'Renders in real-time 3D so parameter changes are instantly visible',
      'Implements material swapping with visually distinct surface treatments',
      'Adds a solar analysis overlay based on facade orientation and geometry'
    ],
    extend: '"Add a cost estimator: based on materials and dimensions, show approximate construction cost per square meter. Compare how material choices affect both aesthetics and budget."'
  },

  // ── Game Development (NEW DISCIPLINE) ───────────────────────
  {
    id: 46, cat: 'cat2', type: 'recipe',
    emoji: '🎮', title: '3D Maze Game',
    discipline: 'Game Development',
    desc: 'First-person 3D maze with fog, collectibles, timer, and persistent high scores.',
    chips: ['build', 'goal', 'viz3d', 'sim'],
    dataReq: { type: 'zero', text: 'No data needed. Mazes are procedurally generated.' },
    prompt: '"Build me a complete 3D first-person maze game using Three.js that runs in the browser. Generate a random maze each time using a recursive backtracker algorithm. I navigate with WASD and mouse look. Add a minimap in the corner, a timer, collectible items scattered through the maze, fog that limits visibility, and a best-times leaderboard stored in localStorage. Include 3 difficulty levels affecting maze size."',
    chain: [
      'Generates random mazes using a proper graph algorithm',
      'Builds a first-person 3D experience with smooth movement and mouse look',
      'Adds game mechanics: collectibles, timer, difficulty scaling',
      'Implements persistent high scores without any backend'
    ],
    extend: '"Add a multiplayer mode: two players in the same maze (split screen), racing to reach the center first."'
  },
  {
    id: 47, cat: 'cat2', type: 'recipe',
    emoji: '🏔️', title: 'Procedural Terrain Generator',
    discipline: 'Game Development',
    desc: 'Generate 3D landscapes with noise algorithms — adjust roughness, water, mountains, and weather.',
    chips: ['build', 'goal', 'viz3d', 'sim'],
    dataReq: { type: 'zero', text: 'No data needed. Terrain is generated mathematically.' },
    prompt: '"Build me an interactive 3D procedural terrain generator using Three.js. Use Perlin or simplex noise to generate realistic landscapes. I should have sliders for: terrain roughness, water level, mountain height, erosion, and vegetation density. Render with realistic coloring — snow on peaks, green valleys, sandy beaches, blue water. Include a day/night cycle with a moving sun that casts shadows. Let me export a screenshot."',
    chain: [
      'Implements noise-based terrain generation with configurable parameters',
      'Creates realistic height-based coloring (biome assignment)',
      'Adds atmospheric effects: fog, day/night cycle, directional lighting',
      'Builds an interactive parameter panel for real-time terrain sculpting'
    ],
    extend: '"Add a fly-through camera mode with cinematic movement. Generate a procedural city on the terrain with buildings sized by elevation and proximity to water."'
  },
  {
    id: 48, cat: 'cat2', type: 'recipe',
    emoji: '🎱', title: '3D Physics Sandbox',
    discipline: 'Game Development',
    desc: 'Spawn objects with different physics properties — build towers, launch projectiles, trigger chain reactions.',
    chips: ['build', 'goal', 'viz3d', 'sim'],
    dataReq: { type: 'zero', text: 'No data needed. Physics simulation is pure mathematics.' },
    prompt: '"Build me a 3D physics playground using Three.js with a simple physics engine. I spawn objects (cubes, spheres, cylinders) with different masses, sizes, and materials (bouncy, heavy, sticky). I can drop them, throw them, and build towers. Include a cannon that launches projectiles at adjustable angles and velocities. Add gravity controls, slow-motion mode, and a Rube Goldberg preset that demonstrates a chain reaction."',
    chain: [
      'Implements rigid body physics: gravity, collisions, bouncing, friction',
      'Builds an object spawner with configurable physical properties',
      'Creates a projectile cannon with angle and velocity controls',
      'Designs a preset chain-reaction demonstration'
    ],
    extend: '"Add a destruction mode: build a wall of blocks and fire cannonballs at it. Track how many blocks you can knock down in one shot."'
  },

  // ── CAD / Mechanical Engineering (NEW DISCIPLINE) ───────────
  {
    id: 49, cat: 'cat2', type: 'recipe',
    emoji: '⚙️', title: 'Parametric Mechanical Part Designer',
    discipline: 'CAD / Mechanical Engineering',
    desc: 'Create and combine 3D shapes with boolean operations — preset mechanical parts included.',
    chips: ['build', 'goal', 'viz3d'],
    dataReq: { type: 'zero', text: 'No data needed. Parts are designed from dimensional parameters.' },
    prompt: '"Build me a browser-based parametric 3D part designer using Three.js. I create basic shapes (box, cylinder, sphere, cone, torus) and combine them using boolean operations (union, subtract, intersect). Each dimension is adjustable with number inputs or sliders. Show a dimensioned wireframe overlay. Include preset templates: bolt, nut, gear, bracket, pipe fitting. Let me orbit, zoom, and toggle between solid, wireframe, and transparent views."',
    chain: [
      'Implements constructive solid geometry (CSG) with boolean operations',
      'Creates parametric shapes where every dimension is adjustable',
      'Adds engineering drawing overlays with dimension lines',
      'Builds preset mechanical component templates'
    ],
    extend: '"Add a material stress visualization: set a force direction and magnitude, and color the part surface by estimated stress concentration."'
  },
  {
    id: 50, cat: 'cat2', type: 'recipe',
    emoji: '🔧', title: '3D Assembly Exploded View',
    discipline: 'CAD / Mechanical Engineering',
    desc: 'Describe a mechanism — get a 3D model with explode slider, labels, and step-by-step assembly animation.',
    chips: ['build', 'goal', 'viz3d'],
    dataReq: { type: 'zero', text: 'No data needed. Describe the assembly in plain English.' },
    prompt: '"Build me a 3D assembly visualizer using Three.js. I describe a multi-part mechanical assembly (like a simple gear train, a pen, or a door hinge) and you build a 3D model of each part. Add an \'explode\' slider that smoothly separates all parts along their assembly axis so I can see how they fit together. Include labels for each part, a bill of materials table, and an animation that shows the assembly sequence step by step."',
    chain: [
      'Creates individual 3D parts from a natural-language assembly description',
      'Implements smooth exploded-view animation along correct assembly axes',
      'Adds part labels and a structured bill of materials',
      'Builds a step-by-step assembly animation'
    ],
    extend: '"Add a cross-section mode: slice through the assembled view at any plane to see internal features and how parts interface."'
  },
  {
    id: 51, cat: 'cat2', type: 'recipe',
    emoji: '🖨️', title: '3D Print Slicer Visualizer',
    discipline: 'CAD / Mechanical Engineering',
    desc: 'Describe an object — see it sliced layer-by-layer with infill patterns, supports, and cost estimates.',
    chips: ['build', 'goal', 'viz3d', 'sim'],
    dataReq: { type: 'zero', text: 'No data needed. Describe the object — Claude generates the model and simulates slicing.' },
    prompt: '"Build me a browser-based 3D print preview tool using Three.js. I describe a simple object and you generate a 3D model. Simulate the slicing process: show layer-by-layer cross-sections with a slider that scrubs through the build height. Estimate print time and material usage based on adjustable parameters: layer height, infill percentage, and print speed. Color-code areas that need support material. Show the difference between 10%, 25%, 50%, and 100% infill patterns."',
    chain: [
      'Generates a 3D model from a text description',
      'Simulates FDM slicing with visible layer cross-sections',
      'Calculates print time and material estimates from real printing parameters',
      'Visualizes infill patterns and support structure requirements'
    ],
    extend: '"Add a cost calculator: given filament price per kg and electricity rate, estimate the total cost to print. Compare PLA vs. PETG vs. ABS."'
  }

]; // end projects

