import { Breadcrumb } from "react-bootstrap";
import { GroupList } from "../../features/auth/Group";
import { CentralWindow } from "../../tools/page_generator/page_generator";

export function GroupListHeader() {
    return (
        <Breadcrumb>
            <Breadcrumb.Item active>Groups</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export function GroupListBody() {
    return (
        <CentralWindow>
            <GroupList />
        </CentralWindow>
    )
}