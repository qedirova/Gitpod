import s from "./style.module.scss";

export default function Steps() {
  return (
    <div className={s.wrapper}>
      <p>
        <div className={s.bold}>Select project,</div>
        <div className={s.crossed}>
          check dependencies, checkout branch, view readme.txt, install tools,
          run build, run test,
        </div>
        <div className={s.bold}>start coding.</div>
      </p>
    </div>
  );
}
