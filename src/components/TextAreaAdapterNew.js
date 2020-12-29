import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Field } from 'react-final-form';
// import { fieldSubscriptionItems } from 'final-form';

const TextAreaAdapterNew = ({
  name,
  subscription,
  fieldsState = {},
  children,
  originalRender,
  ...rest
}) => {

  const toolbar = 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help';



  const Adapter = ({ ...rest }) => {
    const { onChange } = rest.input;
    const { value } = rest.input;

    return <Editor
      name="description"
      data-test-id="text-area-adapter"
      value={value}
      init={{
        height: '60vh',
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar,
      }}
      onEditorChange={onChange}
      {...rest}
    />
  };

  // const textarea = <textarea
  //   rows="15"
  //   cols="125"
  //   name="description"
  //   value={description}
  //   onChange={onHandler}
  //   id={id}
  // />;

  // const comp = navigator.onLine ?
  return <Field
    name="description"
    subscription={subscription}
    {...rest}>

    {({ ...rest }) => (
      <Adapter {...rest} />
    )}

  </Field>
  // : <Field name={name} type="textarea"
  //   name={name}
  //   subscription={subscription}
  //   originalRender={originalRender || children}
  //   fieldsState={{ ...fieldSubscriptionItems, [name]: fieldsState }} />;
  // return comp;
};

export default TextAreaAdapterNew;
