import s from "./style.module.scss";
import { FooterColumn } from "../FooterColumn/FooterColumn";

export default function Footer() {
  const gitpodLinks = [
    { id: 1, title: "Home" },
    { id: 2, title: "Features" },
    { id: 3, title: "Pricing" },
    { id: 4, title: "Changelog" },
    { id: 5, title: "Self-Hosted" },
    { id: 6, title: "Status" },
  ];

  const developerLinks = [
    { id: 1, title: "Getting started" },
    { id: 2, title: "Screencasts" },
    { id: 3, title: "Blog" },
    { id: 4, title: "Documentation" },
    { id: 5, title: "Report a bug" },
    { id: 6, title: "Community" },
  ];
  const companyLinks = [
    { id: 1, title: "About" },
    { id: 2, title: "Careers" },
    { id: 3, title: "Contact" },
    { id: 4, title: "Medi Kit" },
  ];
  const legalLinks = [
    { id: 1, title: "Imprint" },
    { id: 2, title: "Term of Service" },
    { id: 3, title: "Pivacy Policy" },
  ];
  return (
    <footer>
      <div className="container">
        <div className={s.wrapper}>
          <FooterColumn title={"Gitpod"} data={gitpodLinks} />
          <FooterColumn title={"Developer"} data={developerLinks} />
          <FooterColumn title={"Company"} data={gitpodLinks} />
          <FooterColumn title={"Legal"} data={developerLinks} />
        </div>

        <div className={s.copyright}>
          <div className={s.copyrightText}>
            <img src="/FooterLogo.svg" alt="FooterLogo" />
            Copyright © 2021 Gitpod
          </div>
          <div className={s.logos}>
            {" "}
            <img src="/Twitter.svg" alt="TwitterLogo" />
            <img src="/GitHub.svg" alt="GitHubLogo" />
            <img src="/SMS.svg" alt="SMSLogo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
