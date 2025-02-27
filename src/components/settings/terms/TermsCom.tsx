"use client";

import useHistoryBack from "@/hooks/HistoryBack";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

// Dynamically import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

function PrivacyPolicyEditor() {
  // Ref for JoditEditor instance
  const privacyEditor = useRef(null);

  // State for editor content
  const [privacyContent, setPrivacyContent] = useState("");

  // Memoized editor configuration for dark mode
  const editorConfig = useMemo(
    () => ({
      readonly: false,
      theme: "dark", // Enable dark theme
      placeholder: "Start typing...",
      toolbarButtonSize: "small",
      height: 500,
      width: "100%",
      toolbarAdaptive: false,
      style: {
        background: "#000", // Fully black background
        color: "#ffffff", // White text
        border: "1px solid #222", // Slight border for visibility
      },
      contentStyle: {
        background: "#000", // Ensure the content editor is black
        color: "#fff", // Text should be white
        caretColor: "#000", // White caret for visibility
      },
      buttons:
        "bold,italic,underline,strikethrough,eraser,ul,ol,link,undo,redo",
      toolbarSticky: false,
    }),
    []
  );

  // Load default content on mount
  useEffect(() => {
    setPrivacyContent(
      `
      <h2>1. Privacy</h2>
      <p style='color:#fff;'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      


      <h2>1. Policy</h2>
      <p style='color:#fff;'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      `
    );
  }, []);

  const handleSave = () => {
    if (privacyEditor.current) {
      const editor = privacyEditor.current;
      // @ts-ignore
      console.log("Privacy content:", editor?.getEditorValue()); // ✅ Correct way to get editor content
    }
  };

  const { goBack } = useHistoryBack();

  return (
    <div className="p-4 mx-auto bg-black text-white min-h-screen">
      <div className="flex items-center cursor-pointer" onClick={goBack}>
        <Button
          type="text"
          icon={
            <ArrowLeftOutlined
              className="text-2xl"
              style={{ fontSize: "22px", color: "#6C19FF" }}
            />
          }
          className="text-purple-500 mr-2 flex items-center justify-center"
        />

        <span className="text-lg font-semibold">Edit Privacy Policy</span>
      </div>

      {/* Privacy Editor */}
      <div className="mb-6 mt-7">
        <div className="bg-black p-2 rounded-lg shadow-lg">
          <JoditEditor
            ref={privacyEditor}
            value={privacyContent}
            // @ts-ignore
            config={editorConfig}
            onBlur={(newContent) => setPrivacyContent(newContent)}
            onChange={(newContent) => setPrivacyContent(newContent)}
          />
        </div>
      </div>

      <div className="text-center">
        <button
          className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-4 rounded"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default PrivacyPolicyEditor;
