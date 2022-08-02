import { FC, Fragment, PropsWithChildren, useMemo } from 'react';

export interface KeywordsProps {
  value?: string;
  children?: string;
  color?: string;
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

export default function Keywords(props: KeywordsProps) {
  const { children, color = 'inherit', backgroundColor = '#ffff00', value, render } = props;
  if (typeof children !== 'string') return children;
  const splitMatch = new RegExp(`${value}`, 'ig');
  const matched = children.split(splitMatch);
  return (
    <Fragment>
      {matched.map((item, idx) => {
        return (
          <Highlight
            key={idx}
            color={color}
            value={matched.length > idx + 1 ? value : undefined}
            render={render}
            backgroundColor={backgroundColor}
          >
            {item}
          </Highlight>
        );
      })}
    </Fragment>
  );
}
