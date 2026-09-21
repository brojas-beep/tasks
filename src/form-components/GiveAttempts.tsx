import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const parsedAttempts = parseInt(requestedAttempts, 10);

    function useAttempt() {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gainAttempts() {
        if (!isNaN(parsedAttempts)) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
        }
    }

    function handleRequestChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                Attempts: <span>{attemptsLeft}</span>
            </div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={handleRequestChange}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attemptsLeft <= 0}>
                use
            </Button>
            <Button onClick={gainAttempts}>gain</Button>
        </div>
    );
}
