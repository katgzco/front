import { useField } from 'formik';
import React from 'react';
import { InputTextWrapper } from './style';

const InputTextFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <InputTextWrapper>
      { 
        label &&
        <label htmlFor={props.id || props.name}>
          {label}
        </label>
      }
      <input {...field} {...props} />
      {
        meta.touched && meta.error 
          ? <div className="feedback">
              {meta.error}
            </div> 
          : null
      }
    </InputTextWrapper>
  );
};

export default InputTextFormik;