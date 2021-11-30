import React, { memo, useCallback, useEffect, useState } from "react";
import Api from "../../api";
import { ContainerStyled } from "./style";

const Main = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("brazil");

  const getCovidData = useCallback((country) => {
    Api(country).then((data) => setData(data));
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);
  return (
    <ContainerStyled>
      <div className={"mb-2"}>test</div>
    </ContainerStyled>
  );
};

export default memo(Main);
