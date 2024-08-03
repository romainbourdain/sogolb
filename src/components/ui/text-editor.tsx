"use client";

import { cn } from "@/lib/utils";
import TextAlign from "@tiptap/extension-text-align";
import type { Content, Editor } from "@tiptap/react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Heading1 } from "lucide-react";
import { Separator } from "./separator";
import { Toggle } from "./toggle";

import "~/tiptap.css";

type MenuBarProps = {
  editor: Editor | null;
  className?: string;
};
const MenuBar = ({ editor, className }: MenuBarProps) => {
  if (!editor) return null;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Toggle onClick={() => editor.chain().focus().toggleBold().run()}>
        <Bold />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <Heading1 />
      </Toggle>
    </div>
  );
};

export type TextEditorProps = {
  defaultValue?: Content;
};

export const TextEditor = ({ defaultValue }: TextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: defaultValue,
  });
  return (
    <div className=" flex flex-1 flex-col">
      <MenuBar editor={editor} className="mb-3" />
      <Separator />
      <EditorContent editor={editor} className="h-full" />
    </div>
  );
};
