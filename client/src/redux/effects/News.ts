import { getNewsAction } from "../actions/NewsActions";
import { Dispatch } from "redux";
import { NewsActionTypes } from "../types/NewsTypes";

export const getNews = (input: string) => {
  return function (dispatch: Dispatch<NewsActionTypes>) {
    const URL = `https://newsapi.org/v2/everything?q=${input}&language=en&pageSize=100&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    fetch(URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(getNewsAction(data.articles));
        return data.articles;
      });
  };
};
