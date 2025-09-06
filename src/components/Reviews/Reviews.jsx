import s from "./style.module.scss";
import React from "react";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      review:
        "GitPod is incredibly cool. In my opinion, this is a big step in open source software contribution. I’m excited to see where we go from here.",
      info: {
        name: "Ben Halpern",
        image: "/Ben.png",
        job: " Creator and Co-founder @forem and @ThePracticalDev",
      },
    },
    {
      id: 2,
      review:
        "GitPod is incredibly cool. In my opinion, this is a big step in open source software contribution. I’m excited to see where we go from here.",
      info: {
        name: "Michael Friedrich",
        image: "/Ben.png",
        job: " Creator and Co-founder @forem and @ThePracticalDev",
      },
    },
    {
      id: 3,
      review:
        "GitPod is incredibly cool. In my opinion, this is a big step in open source software contribution. I’m excited to see where we go from here.",
      info: {
        name: "Ben Halpern",
        image: "/Ben.png",
        job: " Creator and Co-founder @forem and @ThePracticalDev",
      },
    },
  ];
  return (
    <div className="container">
      <div className={s.wrapper}>
        <h1>Used by 400,000+ developers.</h1>
        <div className={s.reviewsList}>
          {reviews.map((review) => (
            <div className={s.review}>
              <p className={s.reviewText}>{review.review}</p>
              <div className={s.reviewAuthor}>
                <img
                  src={review.info.image}
                  alt={review.info.name}
                  className="review-avatar"
                />
                <div>
                  <strong>{review.info.name}</strong>
                  <br />
                  {review.info.job}
                </div>
              </div>
            </div>
          ))}
        </div>
        <img src="/Brands.png" alt="Brands" />
      </div>
    </div>
  );
}
