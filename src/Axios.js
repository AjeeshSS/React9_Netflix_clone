import axios from "axios";
import { BaseUrl } from "./constants/constants";

const instance = axios.create({
    baseURL: BaseUrl,
  });

export default instance;