import React, { memo, useCallback, useEffect, useState } from "react";
import Api from "../../api";
import Board from "./components/Board";
import Panel from "./components/Panel";
import { ContainerStyled } from "./style";

const Main = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("brazil");
  const updateAt = new Date().toDateString();

  const getCovidData = useCallback((country) => {
    Api(country).then((data) => setData(data));
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  const handleChange = ({ target }) => {
    const country = target.value;
    setCountry(country);
  };

  return (
    <ContainerStyled>
      <div className={"mb-2"}>
        <Panel
          country={country}
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </ContainerStyled>
  );
};

export default memo(Main);
