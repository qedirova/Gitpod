import s from "./style.module.scss";

export default function Hero() {
  return (
    <div>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.text}>
            <h1>Always Ready to Code.</h1>

            <p className={s.p1}>
              Spin up fresh, automated dev environments for each task, in the
              cloud, in seconds.
            </p>
            <div className={s.text1}>
              <button className={s.button}>Try Now</button>

              <p className={s.p}>
                Open a workspace.Start from any Git context.
              </p>
            </div>
          </div>

          <img src="Hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
}
