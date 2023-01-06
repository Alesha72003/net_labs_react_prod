import { ListTemplate } from "../../tools/page_generator/page_generator";
import { CustomForm, Group, Select, Control } from "../../tools/form_generator/form_generator";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getItem, updateItem, selectItemLoading, selectItemValue, setPreloaded } from "./itemSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectValue } from "../list/listSlice";
// import { Editor } from "@tinymce/tinymce-react";

export function Item() {
  const value = useSelector(selectItemValue);
  const listValue = useSelector(selectValue)
  const loading = useSelector(selectItemLoading);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getItem(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(setPreloaded(listValue.filter(elem => elem.id === id)[0]));
  }, [id, listValue, dispatch]);

  return(!value ? "Loading..." :
    <CustomForm onSubmitData={data => !loading ? dispatch(updateItem({...value, ...data})) : null}>
      <ListTemplate>
        <Group name="taskname" label="Taskname">
          <Control value={value.taskname} loading={!value.taskname} />
        </Group>
        <Group name="description" label="Description">
          {/* <Editor tinymceScriptSrc="/js/tinymce/tinymce.min.js" /> */}
          <Control value={value.description} loading={!value.description} />
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
  );
}