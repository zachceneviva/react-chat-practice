import styles from "../styles/ChatInput.module.scss";
import { FormControl, Button, Form, Row, Col, InputGroup } from "react-bootstrap";

export default function ChatInput() {
    return (
        <div className={styles.messageForm}>
            <Form>
                <Row className="align-items-center">
                    <Col xs={11}>
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            className="mt-4 mx-3"
                            id="inlineFormInput"
                            placeholder="Message"
                        />
                    </Col>
                    <Col xs={1}>
                        <Button type="submit" className={styles.sendButton}>
                            Send
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}
