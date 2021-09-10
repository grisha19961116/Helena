import s from './App.module.css';

import CountriesList from './components/CountriesList/CountriesList';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={s.appWrapper}>
      <Header />
      <CountriesList />
    </div>
  );
}

export default App;
