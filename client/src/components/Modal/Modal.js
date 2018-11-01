import React from "react";
import "./Modal.css"
import { Row, Input, Modal, Button, Icon } from "react-materialize"

const TestModal = (props) => (


    <Modal

        header='1 Day In Denver'
        trigger={<Button>Sign Up | Login </Button>}>


        <Row>
            <Input s={6} label="First Name" />
            <Input s={6} label="Last Name" />
            <Input type="email" label="Email" s={12} />
            <Input type="password" label="password" s={12} />

        </Row>
        <div class="navbutton">
            {props.children}
        </div>
    </Modal>
)
export default TestModal;