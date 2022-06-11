export type BtnProps = {
  children?: React.ReactNode;
  size?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type TextProps = {
  children: React.ReactNode;
};

export type ImgProps = {
  width?: number;
  height?: number;
  src: string;
  alt: string;
};

export type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};
