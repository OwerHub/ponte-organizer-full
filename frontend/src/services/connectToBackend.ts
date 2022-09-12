import { Iproject } from "../types/projectTypes";

import axios from "axios";

export async function getDataFromBackend() {

  const response = await axios.get("http://localhost:8000/projects/projects");
  //console.log(response);
  return response.data as Iproject[];
}

export async function sendProjectToBackend(project: Iproject) {
  const response = await axios.post(
    "http://localhost:8000/projects/projects",
    project
  );

  return response.data as Iproject[]
}

export async function deleteProjectInBackend(idCome:number) {
    const params = {id: idCome};
    const response = await axios.delete( "http://localhost:8000/projects/projects", {data: params })
    return response.data as Iproject[]
}

export async function getResultFromBackend(idCome:number) {
    const response = await axios.put("http://localhost:8000/projects/projectResult", {id:idCome});
    return response.data as Iproject;
  }