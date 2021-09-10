import s from './Logo.module.css';
import logoImg from '../../../img/logo.png';

const Logo = () => {
  return (
    <div className={s.logoWrapper}>
      <img src={logoImg} alt="logo" width="200px" height="200px" />
      <h1 className={s.logoStatistic}>statistic</h1>
    </div>
  );
};

export default Logo;
