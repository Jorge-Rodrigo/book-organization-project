export interface iButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}
