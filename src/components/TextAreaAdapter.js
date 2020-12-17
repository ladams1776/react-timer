import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextAreaAdapter = ({ description, setDescription, id }) => {
  const toolbar = 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help';

  const onHandler = e => {
    setDescription(e.target.value);
  }

  const adapter = <Editor
    key={id}
    value={description}
    id={id}
    name="description"
    data-test-id="text-area-adapter"
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
    onEditorChange={setDescription}
  />;

  const textarea = <textarea
    rows="15"
    cols="125"
    name="description"
    value={description}
    onChange={onHandler}
    id={id}
  />;

  const comp = navigator.onLine ? adapter : textarea;
  return comp;
};

export default TextAreaAdapter;
