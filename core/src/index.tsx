import { FC, Fragment, PropsWithChildren, useMemo } from 'react';

export interface KeywordsProps {
  value?: string;
  color?: string;
  caseIgnored?: boolean;
  backgroundColor?: string;
  render?: (keyword: string, color: string, backgroundColor: string) => JSX.Element;
}

interface HighlightProps extends KeywordsProps {}
const Highlight: FC<PropsWithChildren<HighlightProps>> = (props) => {
  const { children, value, color, backgroundColor, render } = props;
  const child = useMemo(
    () => (render ? render(value!, color!, backgroundColor!) : <span style={{ color, backgroundColor }}>{value}</span>),
    [color, backgroundColor, value],
  );
  return (
    <Fragment>
      {children}
      {value && child}
    </Fragment>
  );
};

const KeywordsInner: FC<PropsWithChildren<KeywordsProps>> = (props) => {
  const { children, caseIgnored = true, color = 'inherit', backgroundColor = '#ffff00', value, render } = props;
  if (typeof children !== 'string') return <Fragment>{children}</Fragment>;
  const splitMatch = new RegExp((value || '').replace(/\\/g, '\\\\'), caseIgnored ? 'ig' : 'g');
  const values = value ? children.match(splitMatch) : [];
  const matched = children.split(splitMatch);
  return (
    <Fragment>
      {matched.map((item, idx) => {
        return (
          <Highlight
            key={idx}
            color={color}
            value={matched.length > idx + 1 ? (values as string[])[idx] : undefined}
            render={render}
            backgroundColor={backgroundColor}
          >
            {item}
          </Highlight>
        );
      })}
    </Fragment>
  );
};

export default KeywordsInner;
