import React, { FunctionComponent } from 'react';

import StyledCheckbox, { StyledInput, StyledLabel } from './styles';

type Props = {
    /* The label of the checkbox */
    children?: string;
    /* Specifies list of class names */
    className?: string;
    /* sets whether the checkbox must be checked or unchecked when the component is load initially*/
    defaultChecked?: boolean;
    /* determines whether the checkbox can be checked or unchecked */
    disabled?: boolean;
    /* Callback function which is fired when user checks or unchecks a checkbox */
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FunctionComponent<Props> = ({
    defaultChecked,
    disabled,
    children,
    className,
    handleChange,
}) => {
    return (
        <StyledCheckbox className={className}>
            <StyledLabel>
                <StyledInput
                    type="checkbox"
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    onChange={handleChange}
                />
                {children}
            </StyledLabel>
        </StyledCheckbox>
    );
};

Checkbox.defaultProps = {
    defaultChecked: false,
    disabled: false,
    className: '',
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => e,
};

export default Checkbox;
