import CodeLayout from 'react-code-preview-layout';
import { getMetaId, isMeta, getURLParameters } from 'markdown-react-code-preview-loader';
import MarkdownPreview from '@uiw/react-markdown-preview';
import data from 'react-keywords/README.md';
import { Root, Element, RootContent } from 'hast';

const MarkdownCode = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

export default function Markdown() {
  return (
    <MarkdownPreview
      style={{ paddingTop: 30 }}
      disableCopy={true}
      source={data.source}
      rehypeRewrite={(node: Root | RootContent, index: number, parent: Root | Element) => {
        if (node.type === 'element' && parent && parent.type === 'root') {
          [...parent.children].map((item) => {
            if (item.type === 'element' && item.tagName === 'pre') {
              const meta = (item.children[0]?.data as any)?.meta as string;
              if (isMeta(meta)) {
                item.tagName = 'div';
                item.properties = {
                  ...item.properties,
                  'data-md': meta,
                  'data-meta': 'preview',
                };
                return { ...item };
              }
            }
            return item;
          });
        }
      }}
      components={{
        div: ({ node, ...props }) => {
          const { 'data-meta': meta, 'data-md': metaData, ...rest } = props as any;
          const line = node?.position?.start.line;
          const metaId = getMetaId(metaData) || String(line);
          const Child = data.components[metaId];
          if (meta !== 'preview' || !metaId || typeof Child !== 'function') return <div {...props} />;
          const code = data.data[metaId].value || '';
          const param = getURLParameters(meta);
          return (
            <CodeLayout disableCheckered style={{ marginBottom: 18 }}>
              <MarkdownCode>
                <Child />
              </MarkdownCode>
              <Toolbar text={code}>{param.title || 'Example'}</Toolbar>
              <Code style={{ padding: 0 }}>
                <pre {...rest} />
              </Code>
            </CodeLayout>
          );
        },
      }}
    />
  );
}
