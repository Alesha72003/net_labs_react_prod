import { Button, Form } from "react-bootstrap";
import { CustomForm, Group } from "../../tools/form_generator/form_generator";
import { CentralWindow, ListTemplate } from "../../tools/page_generator/page_generator";
import "./User.css";

export function User({disabled, canDelete})  {
  return (
    <CentralWindow>
      <CustomForm>
        <ListTemplate>
          <Group label="Username" name="username">
            <Form.Control disabled={disabled} value="test" />
          </Group>
          {!disabled ? 
            <Group label="Password" name="password">
              <Form.Control type="password" placeholder="Type here password for change it"/>
            </Group>
          : null}
          <Group label="Groups" id="listgroups">
            <ListTemplate>
              <p>test</p>
              <p>test2</p>
            </ListTemplate>
          </Group>
          {!disabled ? <>
            <Button type="submit">Update</Button>
            {canDelete ? <Button>Delete</Button> : null}
          </> : null}
        </ListTemplate>
      </CustomForm>
    </CentralWindow>
  );
}

User.defaultProps = {
  disabled: false,
  canDelete: true
}