import React from "react";
import Button from "../Button";


const Actions = ({actions, onUseAction}) => {
    return (
        <div className="control">
            {
                actions.map((action, index) =>
                    <Button key={index} color={action.color ?? null} onClick={() => onUseAction(action)} disabled={action.isDisable()}>
                        {action.name}{null !== action.amount && <span> ({action.amount}) </span>}
                    </Button>
                )
            }
        </div>
    );
}

export default Actions;
