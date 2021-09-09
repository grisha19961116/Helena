import s from './App.module.css';

import CountriesList from './components/CountriesList/CountriesList';

function App() {
  return (
    <div className={s.appWrapper}>
      <CountriesList />
    </div>
  );
}

export default App;
