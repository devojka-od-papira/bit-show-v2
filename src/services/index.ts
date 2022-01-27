import React from "react";
import axios from "axios";

export const getShows = () => {
  return axios
    .get("https://api.tvmaze.com/shows")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error", error);
    });
};
