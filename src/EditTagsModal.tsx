import { Button, Col, Form, Modal, Row, Stack } from 'react-bootstrap'
import { Tag } from './App'

export type EditTagsModalProps = {
    show: boolean
    availableTags: Tag[]
    handleCloseEvent: () => void
    onDeleteTag: (id: string) => void
    onUpdateTag: (id: string, label: string) => void
}

export function EditTagsModal({
    availableTags,
    handleCloseEvent,
    show,
    onDeleteTag,
    onUpdateTag,
}: EditTagsModalProps) {
    return (
        <Modal show={show} onHide={handleCloseEvent}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Tags</Modal.Title>

                <Modal.Body>
                    <Form>
                        <Stack gap={2}>
                            {availableTags.map((tag) => (
                                <Row key={tag.id}>
                                    <Col>
                                        <Form.Control
                                            type='text'
                                            value={tag.label}
                                            onChange={(e) =>
                                                onUpdateTag(
                                                    tag.id,
                                                    e.target.value
                                                )
                                            }
                                        ></Form.Control>
                                    </Col>

                                    <Col xs='auto'>
                                        <Button
                                            onClick={() => onDeleteTag(tag.id)}
                                            variant='outline-danger'
                                        >
                                            &times;
                                        </Button>
                                    </Col>
                                </Row>
                            ))}
                        </Stack>
                    </Form>
                </Modal.Body>
            </Modal.Header>
        </Modal>
    )
}
