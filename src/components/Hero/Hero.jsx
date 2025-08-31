import s from "./style.module.scss";

export default function Hero() {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <div className={s.text}>
          <h1>
            Always <br /> Ready to Code.
          </h1>

          <p className={s.paragraph}>
            Spin up fresh, automated dev environments for each task, in the
            cloud, in seconds.
          </p>
          <div className={s.text1}>
            <button className={s.button}>Try Now</button>

            <p className={s.p}>
              Open a workspace.
              <br />
              Start from any Git context.
            </p>
          </div>
        </div>

        <img className={s.img} src="Hero.png" alt="hero" />
      </div>
    </div>
  );
}
