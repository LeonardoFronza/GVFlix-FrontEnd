import {
  TextField as MaterialTextField,
  Skeleton,
  TextFieldProps,
} from '@mui/material';
import {useField} from '@unform/core';
import {useEffect, useState} from 'react';

//Juntandos os dois
interface ITogetherTextFieldProps extends Omit<TextFieldProps, 'value'> {
  name: string;
  isLoading?: boolean | undefined;
  skeletonWidth?: number | undefined;
  skeletonHeight?: number | undefined;
}

export const TextField: React.FC<ITogetherTextFieldProps> = ({
  name,
  isLoading,
  skeletonWidth,
  skeletonHeight = 70,
  onChange,
  ...rest
}) => {
  //Variavel resposavel por usar o campo.
  const {fieldName, defaultValue, registerField, error} = useField(name);
  const [value, setValue] = useState(defaultValue || '');

  //Executa a ação.
  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, value) => setValue(value),
    });
  }, [fieldName, value, registerField]);

  //Atualização por mudança digitada pelo usuario.
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    value: string,
  ) => {
    setValue(value);
    onChange && onChange(event);
  };

  if (isLoading)
    return <Skeleton width={skeletonWidth} height={skeletonHeight} />;

  return (
    <MaterialTextField
      {...rest}
      value={value}
      fullWidth
      error={!!error}
      helperText={error}
      onChange={(e) => handleChange(e, e.target.value)}
    />
  );
};

/* (Skeleton) 

Exiba uma visualização do espaço reservado de seu conteúdo antes que os dados sejam carregados, 
reduzindo a sensação de lentidão do tempo de carregamento.
*/

/* (UseEffect) https://pt-br.reactjs.org/docs/hooks-effect.html */

//Field - campo
