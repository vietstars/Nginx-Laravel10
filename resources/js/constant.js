const constants = {
  BASE_URL: "https://it4todays.org/api/",
}

Object.entries(constants).map(([_k, _v]) => {
  if (!window[_k]) {
    window[_k] = _v
  }
});
