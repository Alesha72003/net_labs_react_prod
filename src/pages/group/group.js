import { Alert, Breadcrumb } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GroupModule } from "../../features/auth/Group";
import { selectGroupError } from "../../features/auth/groupSlice";
import { CentralWindow } from "../../tools/page_generator/page_generator";

export function GroupHeader() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={() => navigate("/group")}>Groups</Breadcrumb.Item>
      <Breadcrumb.Item active>{id}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export function GroupBody() {
  const error = useSelector(selectGroupError);

  return (
    <CentralWindow>
      {error ? <Alert variant="danger">{error}</Alert> : null}
      <GroupModule />
    </CentralWindow>
  );
}