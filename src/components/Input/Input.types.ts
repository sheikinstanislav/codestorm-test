export interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: 'text' | 'email' | 'password';
  required: boolean;
}
