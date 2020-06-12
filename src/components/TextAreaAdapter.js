import React from 'react';
// import CKEditor from 'ckeditor4-react';
import { Editor } from '@tinymce/tinymce-react';
import { useTaskEditContext } from 'hooks';
import EditTaskForm from '../pages/createOrEditTask/form/EditTaskForm';

const TextAreaAdapter = ({ description, setDescription }) => {
  // const { task } = useTaskEditContext();
  // const description = task?.description;

  return (
    <Editor
      initialValue={description}
      id="description" //@TODO: Left off trying this stuff
      name="description"
      data-test-id="text-area-adapter"
      // ref={compRef}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | help',
      }}
      onEditorChange={(content, editor) => {
        setDescription(content);
      }}
    />
  );
};

export default TextAreaAdapter;
