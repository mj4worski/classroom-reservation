import React from 'react';
import imageSrc from '../../../../assets/images/agh.jpg';
import LayoutContent from '../../components/shared/LayoutContent';
import './Main.scss';

const Main = () => (
  <LayoutContent className="main-page">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="p-5">
            <img className="img-fluid main-page__image" src={imageSrc} alt="" />
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="p-5">
            <h2 className="display-4">Możliwość rezerwacji sal na uczeli</h2>
            <p>Projekt został zrealizowany w ramach pracy dyplomowej. Umożliwia on zarządzanie oraz
rezerwowanie dostępnych pomieszczeń na terenie Akademii Górniczo-Hutniczej. Aby móc korzystać
należy zarejestrować konto i wyszukać dostępną salę. W celu rejestracji potrzebny jest adres mailowy oraz hasło.</p>
          </div>
        </div>
      </div>
    </div>
  </LayoutContent>
);

export default Main;
