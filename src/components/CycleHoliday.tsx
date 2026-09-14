import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🦃" | "🎄" | "🎆" | "🍀";

const ALPHABETICAL_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎄": "🎆",
    "🎆": "🎃",
    "🎃": "🍀",
    "🍀": "🦃",
    "🦃": "🎄",
};

const YEARLY_TRANSITIONS: Record<Holiday, Holiday> = {
    "🍀": "🎆",
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🍀",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    function advanceByAlphabet(): void {
        setHoliday(ALPHABETICAL_TRANSITIONS[holiday]);
    }

    function advanceByYear(): void {
        setHoliday(YEARLY_TRANSITIONS[holiday]);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
