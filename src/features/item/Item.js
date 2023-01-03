import { ListTemplate } from "../../tools/page_generator/page_generator";
import { CustomForm, Group } from "../../tools/form_generator/form_generator";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getItem, selectItemLoading, selectItemValue, setPreloaded } from "./itemSlice";
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
    <CustomForm onSubmitData={(data) => console.log(data)}>
      <ListTemplate>
        <Group name="taskname" label="Taskname">
          <Form.Control defaultValue={value.taskname} />
        </Group>
        <Group name="description" label="Description">
          {/* <Editor tinymceScriptSrc="/js/tinymce/tinymce.min.js" /> */}
          <Form.Control defaultValue={value.description} />
        </Group>
        <Group name="status" label="Status">
          <Form.Select defaultValue={value.status} >
            <option key="NEW" value="NEW">New</option>
            <option key="IN_WORK" value="IN_WORK">In work</option>
            <option key="COMPLETED" value="COMPLETED">Completed</option>
          </Form.Select>
        </Group>
        <Button type="submit" disabled={loading}>{loading ? "Loading..." : "Update"}</Button>
      </ListTemplate>
    </CustomForm>
  );
}