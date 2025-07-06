const lang = {
  en: {
    home: "HOME",
    awards: "AWARDS",
    experience: "EXPERIENCE",
    publications: "PUBLICATIONS",
    github: "GitHub",
    license: "License"
  },
  zh: {
    home: "首页",
    awards: "奖项",
    experience: "经历",
    publications: "发表作品",
    github: "代码仓库",
    license: "许可协议"
  }
};

function setLang(language) {
  document.querySelector("a[href='#home']").innerText = lang[language].home;
  document.querySelector("a[href='#awards']").innerText = lang[language].awards;
  document.querySelector("a[href='#experience']").innerText = lang[language].experience;
  document.querySelector("a[href='#publications']").innerText = lang[language].publications;
  document.getElementById("github-link").innerText = lang[language].github;
  document.getElementById("license-link").innerText = lang[language].license;
}
