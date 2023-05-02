import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return (
        <div className='mb-3'>
            <label className='form-label' htmlFor={props.name}>{props.title}</label>
            <input 
                type={props.type}
                name={props.name}
                id={props.name}
                ref={ref}
                autoComplete={props.autoComplete}
                className={props.className}
                onChange={props.onChange}
            />
        </div>
    );
});

export default Input;