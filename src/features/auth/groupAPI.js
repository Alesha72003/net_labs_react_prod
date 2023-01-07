import API from "../../app/api";

export async function getGroup(id) {
  return (await API.get(`/group/${id}`)).data;
}