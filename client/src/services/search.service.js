import axios from "axios";

export const findFavLanguage = async (userName) => {
  try {
    const url = `api/v1/language/${userName}`
    if (!userName) {
      return;
    }
    const response = await axios.get(url);

    return response.data.favLang
  } catch (e) {
    throw new Error("search failed ");
  }
};


