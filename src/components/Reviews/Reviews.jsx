import s from "./style.module.scss";
import React from "react";

export default function Reviews() {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <h1>Used by 400,000+ developers.</h1>
        <div className={s.reviewsList}>
          <div className={s.review}>
            <p className={s.reviewText}>
              GitPod is incredibly cool. In my opinion, this is a big step in
              open source software contribution. I’m excited to see where we go
              from here.
            </p>
            <div className={s.reviewAuthor}>
              <img src="Ben.png" alt="Ben Halpern" class="review-avatar" />
              <div>
                <strong>Ben Halpern</strong>
                <br />
                Creator and Co-founder @forem and @ThePracticalDev
              </div>
            </div>
          </div>

          <div className={s.review}>
            <p className={s.reviewText}>
              Let’s say we were overwhelmed how smooth Gitpod workspaces
              creation & own Docker image for workspaces worked. Plus,
              installing @code extensions from the store and integrating @gitlab
              CI. That blew my mind entirely, and that is hard ;
            </p>
            <div className={s.reviewAuthor}>
              <img
                src="Michael.png"
                alt="Michael Friedrich"
                class="review-avatar"
              />
              <div>
                <strong>Michael Friedrich</strong>
                <br />
                Developer Evangelist @GitLab
              </div>
            </div>
          </div>

          <div className={s.review}>
            <p className={s.reviewText}>
              Look at any PR (pull request) in a full coding environment where
              you can edit, build, and test the PR code, by just prepending
              “gitpod.io#” to the PR URL. Super useful for reviewing/testing
              stuff without having to check it out locally!
            </p>
            <div className={s.reviewAuthor}>
              <img src="Julius.png" alt="Julius Volz" class="review-avatar" />
              <div>
                <strong>Julius Volz</strong>
                <br />
                Creator @PrometheusIO
              </div>
            </div>
          </div>
        </div>
        <img src="Brands.png" alt="Brands" />
      </div>
    </div>
  );
}
