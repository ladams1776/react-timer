import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextAreaAdapter = ({ description, setDescription }) => {
  const toolbar =
    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help';
  return (
    <Editor
      initialValue={description}
      id="description"
      name="description"
      data-test-id="text-area-adapter"
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar,
      }}
      onEditorChange={setDescription}
    />
  );
};

export default TextAreaAdapter;
