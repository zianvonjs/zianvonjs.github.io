const lang = {
  en: {
    home: "HOME",
    job_intention: "JOB INTENTION",
    awards: "AWARDS",
    experience: "EXPERIENCE",
    techstack: "TECH STACK",
    publications: "PUBLICATIONS",
    github: "GitHub",
    license: "License"
  },
  zh: {
    home: "首页",
    job_intention: "求职意向",
    awards: "奖惩情况",
    experience: "工作经历",
    techstack: "技术栈",
    publications: "发表论文",
    github: "代码仓库",
    license: "许可协议"
  }
};

function setLang(language) {
  document.querySelector("a[href='#home']").innerText = lang[language].home;
  document.querySelector("a[href='#job-intention']").innerText = lang[language].job_intention ;
  document.querySelector("a[href='#awards']").innerText = lang[language].awards;
  document.querySelector("a[href='#experience']").innerText = lang[language].experience;
  document.querySelector("a[href='#techstack']").innerText = lang[language].techstack;
  document.querySelector("a[href='#publications']").innerText = lang[language].publications;
  document.getElementById("github-link").innerText = lang[language].github;
  document.getElementById("license-link").innerText = lang[language].license;
}
