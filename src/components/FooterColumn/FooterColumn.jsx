import s from "./style.module.scss";

export const FooterColumn = ({ title, data }) => {
  return (
    <div className={s.column}>
      <h3>{title}</h3>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
