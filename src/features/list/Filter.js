import {Form, Button} from "react-bootstrap";
import { CustomForm, Group, Checkbox } from "../../tools/form_generator/form_generator";
import { useSelector, useDispatch } from 'react-redux';
import "./Filter.css";
import { selectLoading, getData } from "./listSlice";
import { selectMe } from "../auth/authSlice";


export default function Filter() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const me = useSelector(selectMe);


  return (
    <CustomForm className="filter" onSubmitData={(formData) => !loading ? dispatch(getData(formData)) : null}>
      <Group name="title" label="Search query">
        <Form.Control placeholder="Type your query" />
      </Group>
      <Group name="group" label="Select Group">
          <Form.Select aria-label="Select group">
            <option key="all" value="">All groups</option>
            {me.Groups.map(el =>
              <option key={el.id} value={el.id}>{el.name}</option>
            )}
          </Form.Select>
      </Group>
      <div>
        <Checkbox name="new" label="NEW" />
        <Checkbox name="in_work" label="IN WORK" />
        <Checkbox name="completed" label="COMPLETED" />
      </div>
      <Button
        variant="secondary"
        disabled={loading}
        type="submit"
      >
      {!loading ? "Filter" : "Loading..."}
      </Button>
    </CustomForm>
  );
}
