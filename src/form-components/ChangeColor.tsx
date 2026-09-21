import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "cyan",
    "magenta",
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSelectedColor(event.target.value);
                    }}
                    id={`color-check-${color}`}
                    label={color}
                    value={color}
                    checked={selectedColor === color}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: selectedColor }}
                >
                    {selectedColor}
                </span>
                .
            </div>
        </div>
    );
}
