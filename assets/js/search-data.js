// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-books",
          title: "Books",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "books-clean-code",
          title: 'Clean Code',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/clean_code/";
            },},{id: "books-clean-architecture",
          title: 'Clean Architecture',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/clean_architecture/";
            },},{id: "books-il-conte-di-montecristo",
          title: 'Il Conte di Montecristo',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/conte_montecristo/";
            },},{id: "books-animal-farm",
          title: 'Animal Farm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/fattoria_animali/";
            },},{id: "books-designing-data-intensive-applications",
          title: 'Designing Data-Intensive Applications',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/data_intensive/";
            },},{id: "links-homelab-architecture",
          title: 'Homelab Architecture',
          description: "My homelab setup",
          section: "Links",handler: () => {
              window.location.href = "/links/homelab-architecture/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%6F%6D%6D%61%73%6F.%62%6F%74%61%72%65%6C%6C%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/TommasoBotarelli", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tommaso-botarelli-37138322a", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=uMG6qu0AAAAJ", "_blank");
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
