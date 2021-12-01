import React, { memo } from "react";
import RefreshIcon from "../../../assets/images/refresh.svg";

import {
  Card,
  Typography,
  Button,
  Select,
  MenuItem,
} from "../../../components";
import CONTRIES from "../../../commons/constants/countries";
import { CardPanelContentStyled, ItemStyled } from "./style";

const navigatorHasShare = navigator.share;

const Panel = ({ updateAt, onChange, data, country, getCovidData }) => {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img
          src={country.flag}
          alt={`País-${country.label}`}
          style={{ maxWidth: "32px" }}
        />
      </ItemStyled>
    </MenuItem>
  );

  const textCovid19 = `País: ${country} - recuperados: ${recovered}`;

  const shareInfo = () => {
    navigator.share({
      title: `Dados da Covid19 - ${country}`,
      text: textCovid19,
      url: "url",
    });
  };

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  );

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  };

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  );

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primaty">
            Covid-19 cases
          </Typography>
          <Typography variant="h6" component="span" color="primaty">
            Painel CoronaVírus
          </Typography>
          <Typography variant="body2" component="span" color="primaty">
            Atualizado em: {updateAt}
          </Typography>
          <div className={"pt-2"}>
            <Select onChange={onChange} value={country}>
              {CONTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  );
};

export default memo(Panel);
