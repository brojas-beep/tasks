import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-mode-switch"
                label="Edit Mode?"
                checked={isEditMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setIsEditMode(event.target.checked);
                }}
            />
            {isEditMode ?
                <Form>
                    <Form.Group controlId="formStudentName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Is Student?"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setIsStudent(event.target.checked);
                        }}
                    />
                </Form>
            :   <div>
                    {name} {isStudent ? "is a student" : "is not a student"}
                </div>
            }
        </div>
    );
}
