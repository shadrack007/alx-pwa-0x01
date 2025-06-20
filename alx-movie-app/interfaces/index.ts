import { ReactNode } from "react";

export interface ComponentProps {
  children: ReactNode;
}

export interface ButtonProps {
  title: string;
  action?: () => void;
}

interface PrimaryImage {
  url: string;
}

interface TitleText {
  text: string;
}

interface ReleaseYear {
  year: string;
}

export interface MovieProps {
  id: string;
  primaryImage: PrimaryImage;
  titleText: TitleText;
  releaseYear: ReleaseYear;
}
