import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CustomForm, Group } from "../../tools/form_generator/form_generator";
import { CentralWindow, ListTemplate } from "../../tools/page_generator/page_generator";
import "./User.css";
import { selectUser, selectUserLoading } from "./userSlice";

export function User({disabled, canDelete})  {
  const value = useSelector(selectUser);
  const loading = useSelector(selectUserLoading);

  return (
    <CustomForm className="userform" onSubmitData={data => !loading ? console.log(data) : null}>
      <ListTemplate>
        <Group label="Username" name="username">
          <Form.Control disabled={disabled} defaultValue={value.username} />
        </Group>
        {!disabled ? 
          <Group label="Password" name="password">
            <Form.Control type="password" placeholder="Type here password for change it"/>
          </Group>
        : null}
        <Group label="Groups" id="listgroups">
          <ListTemplate action>
            <p>test</p>
            <p>test2</p>
            <p>test2</p>
            <p>test2</p>
            <p>test2</p>
            <p>test2</p>
            <p>test2</p>
            <p>test2</p>
            <p>test2</p>
            <p>test2</p>
            <p>test2</p>
          </ListTemplate>
        </Group>
        {!disabled ? <>
          <Button type="submit" disabled={loading}>{loading ? "Loading..." : "Update"}</Button>
          {canDelete ? <Button>Delete</Button> : null}
        </> : null}
      </ListTemplate>
    </CustomForm>
  );
}

User.defaultProps = {
  disabled: false,
  canDelete: true
}