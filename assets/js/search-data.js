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
          title: "PUBLICATIONS",
          description: "Research publications in machine learning, computational finance, and AI applications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "PROJECTS",
          description: "Research projects in machine learning, computational finance, and AI applications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "TEACHING",
          description: "Teaching and mentoring activities in AI, machine learning, and computational finance.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-hobbies",
          title: "HOBBIES",
          description: "Personal interests and passions that fuel creativity and balance.",
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
      },{id: "news-started-my-b-sc-in-applied-mathematics-at-the-university-of-tehran-beginning-my-journey-in-computational-mathematics",
          title: 'Started my B.Sc. in Applied Mathematics at the University of Tehran! Beginning my...',
          description: "",
          section: "News",},{id: "news-co-founded-a-quantitative-finance-startup-focused-on-algorithmic-trading-and-statistical-arbitrage-strategies",
          title: 'Co-founded a quantitative finance startup focused on algorithmic trading and statistical arbitrage strategies!...',
          description: "",
          section: "News",},{id: "news-achieved-2nd-place-in-omid-group-s-business-creation-competition-among-30-participants",
          title: 'Achieved 2nd place in Omid Group’s Business Creation Competition among 30 participants! 🏆...',
          description: "",
          section: "News",},{id: "news-proud-to-win-bronze-medal-in-the-acm-icpc-west-asia-regional-contest",
          title: 'Proud to win Bronze Medal in the ACM ICPC West Asia Regional Contest!...',
          description: "",
          section: "News",},{id: "news-successfully-completed-my-b-sc-in-applied-mathematics-at-the-university-of-tehran",
          title: 'Successfully completed my B.Sc. in Applied Mathematics at the University of Tehran! 🎯...',
          description: "",
          section: "News",},{id: "news-thrilled-to-join-the-vector-institute-for-artificial-intelligence-as-a-faculty-affiliate-researcher",
          title: 'Thrilled to join the Vector Institute for Artificial Intelligence as a Faculty Affiliate...',
          description: "",
          section: "News",},{id: "news-excited-to-begin-my-master-s-in-computational-science-amp-amp-engineering-at-mcmaster-university-with-full-scholarship",
          title: 'Excited to begin my Master’s in Computational Science &amp;amp;amp; Engineering at McMaster University...',
          description: "",
          section: "News",},{id: "news-presented-research-on-geometric-deep-learning-applications-in-finance-at-the-fields-institute-seminar-series",
          title: 'Presented research on geometric deep learning applications in finance at the Fields Institute...',
          description: "",
          section: "News",},{id: "news-our-research-on-low-dimensional-approximations-of-the-conditional-law-of-volterra-processes-is-now-available-on-arxiv-and-under-review",
          title: 'Our research on “Low-dimensional approximations of the conditional law of Volterra processes” is...',
          description: "",
          section: "News",},{id: "news-completed-the-deep-learning-reinforcement-learning-summer-school-at-cifar-great-opportunity-to-learn-cutting-edge-techniques-and-network-with-fellow-researchers",
          title: 'Completed the Deep Learning + Reinforcement Learning Summer School at CIFAR! Great opportunity...',
          description: "",
          section: "News",},{id: "news-our-paper-lora-fine-tuning-without-gpus-a-cpu-efficient-meta-generation-framework-for-llms-is-now-available-on-arxiv",
          title: 'Our paper “LoRA Fine-Tuning Without GPUs: A CPU-Efficient Meta-Generation Framework for LLMs” is...',
          description: "",
          section: "News",},{id: "news-our-paper-lora-fine-tuning-without-gpus-has-been-accepted-to-the-icml-2025-workshop-on-efficient-systems-for-foundation-models",
          title: 'Our paper “LoRA Fine-Tuning Without GPUs” has been accepted to the ICML 2025...',
          description: "",
          section: "News",},{id: "projects-lora-fine-tuning-without-gpus",
          title: 'LoRA Fine-Tuning Without GPUs',
          description: "A CPU-Efficient Meta-Generation Framework for Large Language Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-option-pricing-with-machine-learning",
          title: 'Option Pricing with Machine Learning',
          description: "Classic machine learning approaches for financial derivatives pricing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-grapevine-leaves-classification",
          title: 'Grapevine Leaves Classification',
          description: "Deep learning approach for grape variety identification using Convolutional Neural Networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-rnn-game-theoretic-decision-making",
          title: 'RNN Game-Theoretic Decision Making',
          description: "Recurrent Neural Networks applied to strategic decision making in game theory contexts",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
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
