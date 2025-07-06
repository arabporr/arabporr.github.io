// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Research publications in machine learning, computational finance, and AI applications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching and mentoring activities in AI, machine learning, and computational finance.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-hobbies",
          title: "hobbies",
          description: "Personal interests and passions beyond research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hobbies/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-completed-msc-at-mcmaster-university",
          title: 'Completed MSc at McMaster University',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-joined-vector-institute-as-faculty-affiliate-researcher-excited-to-contribute-to-cutting-edge-ai-research",
          title: 'Joined Vector Institute as Faculty Affiliate Researcher! Excited to contribute to cutting-edge AI...',
          description: "",
          section: "News",},{id: "news-published-new-research-on-arxiv-low-dimensional-approximations-of-the-conditional-law-of-volterra-processes-novel-approach-combining-differential-geometry-with-deep-learning-for-mathematical-finance-applications",
          title: 'Published new research on arXiv: “Low-dimensional approximations of the conditional law of Volterra...',
          description: "",
          section: "News",},{id: "news-excited-to-share-my-research-on-deep-learning-applications-in-quantitative-finance-at-the-upcoming-vector-institute-symposium-ut-post-date-2016-01-15-07-59-00-0400-inline-true-related-posts-false-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'Excited to share my research on deep learning applications in quantitative finance at...',
          description: "",
          section: "News",},{id: "news-new-paper-accepted-to-icml-2025-workshop-lora-fine-tuning-without-gpus-a-cpu-efficient-meta-generation-framework-for-llms-making-llm-fine-tuning-accessible-on-standard-laptop-cpus",
          title: 'New paper accepted to ICML 2025 Workshop: “LoRA Fine-Tuning Without GPUs: A CPU-Efficient...',
          description: "",
          section: "News",},{id: "projects-cpu-efficient-llm-fine-tuning",
          title: 'CPU-Efficient LLM Fine-Tuning',
          description: "Meta-learning framework for LoRA fine-tuning without GPU requirements",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-volterra-processes-amp-non-positive-curvature",
          title: 'Volterra Processes &amp;amp; Non-Positive Curvature',
          description: "Low-dimensional approximations for stochastic volatility using differential geometry",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-advanced-financial-time-series-modeling",
          title: 'Advanced Financial Time Series Modeling',
          description: "Deep learning approaches for financial market prediction and risk assessment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%72%61%62%70%6F%75%72@%6D%63%6D%61%73%74%65%72.%63%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/arabporr", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/arabporr", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xYS8ycUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
