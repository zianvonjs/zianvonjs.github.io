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
  const navMap = [
    ["a[href='#home']", "home"],
    ["a[href='#job-intention']", "job_intention"],
    ["a[href='#awards']", "awards"],
    ["a[href='#experience']", "experience"],
    ["a[href='#techstack']", "techstack"],
    ["a[href='#publications']", "publications"]
  ];
  navMap.forEach(([selector, key]) => {
    document.querySelectorAll(selector).forEach(el => {
      el.innerText = lang[language][key];
    });
  });
  const github = document.getElementById("github-link");
  if (github) github.innerText = lang[language].github;
  const license = document.getElementById("license-link");
  if (license) license.innerText = lang[language].license;
}
