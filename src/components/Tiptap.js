import { useEditor, EditorContent, generateHTML } from '@tiptap/react';

import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';

const defaultHtml1 = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [{ type: 'text', text: 'Bye bye wordl! 🌎️🔥' }],
    },
  ],
};

const Tiptap = () => {
  const onChange = ({ editor }) => {
    const htmlToSave = JSON.stringify(editor.getJSON());
    console.log(htmlToSave);
  };
  const editor = useEditor({
    extensions: [StarterKit],
    // content: '<p>Hello World! 🌎️</p>',
    content: generateHTML(defaultHtml1, [StarterKit]),
    onUpdate: onChange,
  });

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} onChange={onChange} />;
    </>
  );
};

export default Tiptap;
