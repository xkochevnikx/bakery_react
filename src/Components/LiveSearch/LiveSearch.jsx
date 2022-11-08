import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const LiveSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const [paramsSearch, setParamsSearch] = useSearchParams();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/pageproduct") {
      setParamsSearch({
        q: searchValue,
      });
    }
  }, [searchValue]);

  return (
    <input
      id="inpSearch"
      type="text"
      placeholder="найти буличку"
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
    />
  );
};

export default LiveSearch;
