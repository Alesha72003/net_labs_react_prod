import { ListTemplate } from "../../tools/page_generator/page_generator";
import { CustomForm, Group, Select, Control, TinyMCE } from "../../tools/form_generator/form_generator";
import { Alert, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getItem, updateItem, selectItemLoading, selectItemValue, setPreloaded, selectItemError } from "./itemSlice";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectValue, updateListItem } from "../list/listSlice";

export function Item() {
  const value = useSelector(selectItemValue);
  const listValue = useSelector(selectValue)
  const loading = useSelector(selectItemLoading);
  const error = useSelector(selectItemError);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getItem(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(setPreloaded(listValue.filter(elem => elem.id === Number(id))[0]));
  }, [id, listValue, dispatch]);

  function onSubmit(data) {
    dispatch(updateItem(data)).then(() => {
      dispatch(updateListItem(data));
    });
  }

  return(
    <>
      {error ? <Alert variant="danger">{error}</Alert> : null}
      {value ?
        <CustomForm onSubmitData={data => !loading ? onSubmit({id: value.id, ...data}) : null}>
          <ListTemplate>
            <Group name="taskname" label="Taskname">
              <Control value={value.taskname} loading={!value.taskname} />
            </Group>
            <Group name="group" label="Assigned Group">
              <Button disabled={!value.Group} variant="link" onClick={() => navigate(`/group/${value.Group.id}`)}>
                {value.Group ? value.Group.name : "Loading..."}
              </Button>
            </Group>
            <Group name="description" label="Description">
              <TinyMCE value={value.description} loading={value.description === null} textareaName="description" />
            </Group>
            <Group name="status" label="Status">
              <Select loading={!value.status} value={value.status}>
                <option key="NEW" value="NEW">New</option>
                <option key="IN_WORK" value="IN_WORK">In work</option>
                <option key="COMPLETED" value="COMPLETED">Completed</option>
              </Select>
            </Group>
            <Button type="submit" disabled={loading}>{loading ? "Loading..." : "Update"}</Button>
          </ListTemplate>
        </CustomForm>
      : (!error ? "loading..." : null)}
    </>
  );
}