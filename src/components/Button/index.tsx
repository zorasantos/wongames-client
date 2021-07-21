import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullwidth?: boolean;
  icon?: JSX.Element;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({
  children,
  icon,
  size = 'medium',
  fullwidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullwidth={fullwidth} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);
