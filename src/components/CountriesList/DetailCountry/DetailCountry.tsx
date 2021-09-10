import s from './DetailCountry.module.css';
import heartSvg from '../../../img/heart.svg';

const DetailCountry = ({
  country,
  handleCloseDetail,
}: {
  country: any;
  handleCloseDetail: any;
}) => {
  const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = country;

  return (
    <div className={s.detailWrapper} id="close" onClick={handleCloseDetail}>
      <div className={s.detailNotification}>
        <h3 className={s.detailNotification__title}>{Country}</h3>
        <div className={s.detailNotification__row}>
          <img src={heartSvg} width="30px" height="30px" alt="heart" />
          <h4 className={s.detailNotification__row__title}>Total Confirmed</h4>
          <h4 className={s.detailNotification__row__amount}>
            {TotalConfirmed}
          </h4>
        </div>
        <div className={s.detailNotification__row}>
          <img src={heartSvg} width="30px" height="30px" alt="death" />
          <h4 className={s.detailNotification__row__title}>Total Deaths</h4>
          <h4 className={s.detailNotification__row__amount}>{TotalDeaths}</h4>
        </div>
        <div className={s.detailNotification__row}>
          <img src={heartSvg} width="30px" height="30px" alt="recovered" />
          <h4 className={s.detailNotification__row__title}>Total Recovered</h4>
          <h4 className={s.detailNotification__row__amount}>
            {TotalRecovered}
          </h4>
        </div>
        <button className={s.detailNotification__btn} id="close">
          ok
        </button>
      </div>
    </div>
  );
};

export default DetailCountry;
