import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({ children, size = 'medium' }: ButtonProps) => (
  <S.Wrapper size={size}>{!!children && <span>{children}</span>}</S.Wrapper>
);