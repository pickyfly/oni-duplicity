import { css } from "styled-components";
import { Intent, getTheme } from "./theme";

export interface TextProps {
  intent?: Intent;
}

export const text = css<TextProps>`
  color: ${props => getTheme(props).colors.intent[props.intent || "default"]};
`;