import axios from "axios"
import { ACCES_TOKEN } from "./constants"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})