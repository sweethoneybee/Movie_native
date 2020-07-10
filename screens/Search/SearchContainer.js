import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";

export default () => {
  const [keyword, setKeyword] = useState("");
  const onChange = (text) => setKeyword(text);
  const onSubmit = () => console.log("search for", keyword);
  return (
    <SearchPresenter
      keyword={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
