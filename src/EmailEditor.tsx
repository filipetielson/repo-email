import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

import pkg from '../package.json';
import { loadScript } from './loadScript';
import { Editor, EditorRef, EmailEditorProps } from './types';




window.__unlayer_lastEditorId = window.__unlayer_lastEditorId || 0;

export const EmailEditor = React.forwardRef<EditorRef, EmailEditorProps>(
  (props, ref) => {
    const { onLoad, onReady, scriptUrl, minHeight = 500, style = {} } = props;

    const [editor, setEditor] = useState<Editor | null>(null);

    const [hasLoadedEmbedScript, setHasLoadedEmbedScript] = useState(false);

    const editorId = useMemo(
      () => props.editorId || `editor-${++window.__unlayer_lastEditorId}`,
      [props.editorId]
    );

    const options: EmailEditorProps['options'] = {
      ...(props.options || {}),
      appearance: {
        theme: 'dark',
        features: {
          preview: true,
        },
        panels: {
          tools: {
            dock: "right",
            collapsible: true,
            tabs: {
              body: {
                visible: true,
              }
            }
          }
        }
      }
        ?? props.options?.appearance,
      displayMode: props?.displayMode || props.options?.displayMode || 'email',
      locale: 'pt-BR' ?? props.locale ?? props.options?.locale,
      projectId: props.projectId ?? props.options?.projectId,
      tools: {
        form: {
          enabled: true
        }
      } ?? props.tools ?? props.options?.tools,



      id: editorId,
      source: {
        name: pkg.name,
        version: pkg.version,
      },
    };


    useImperativeHandle(
      ref,
      () => ({
        editor,
      }),
      [editor]
    );

    useEffect(() => {
      return () => {
        editor?.destroy();
      };
    }, []);

    useEffect(() => {
      setHasLoadedEmbedScript(false);
      loadScript(() => setHasLoadedEmbedScript(true), scriptUrl);
    }, [scriptUrl]);

    useEffect(() => {
      if (!hasLoadedEmbedScript) return;
      editor?.destroy();
      setEditor(unlayer.createEditor(options));
    }, [JSON.stringify(options), hasLoadedEmbedScript]);

    const methodProps = Object.keys(props).filter((propName) =>
      /^on/.test(propName)
    );
    useEffect(() => {
      if (!editor) return;

      onLoad?.(editor);

      // All properties starting with on[Name] are registered as event listeners.
      methodProps.forEach((methodProp) => {
        if (
          /^on/.test(methodProp) &&
          methodProp !== 'onLoad' &&
          methodProp !== 'onReady' &&
          typeof props[methodProp] === 'function'
        ) {
          editor.addEventListener(methodProp, props[methodProp]);
        }
      });

      if (onReady) {
        editor.addEventListener('editor:ready', () => {
          onReady(editor);
        });
      }
    }, [editor, Object.keys(methodProps).join(',')]);

    return (

      <div
        style={{
          flex: 1,
          display: 'flex',
          minHeight: minHeight,
        }}
      >
        <div id={editorId} style={{ ...style, flex: 1 }} />
      </div>
    );
  }
);
