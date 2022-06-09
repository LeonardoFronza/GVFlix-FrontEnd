import { Button as MatrialButton, ButtonProps, Typography } from "@mui/material";

//
interface IButtonProps extends ButtonProps {
    textButton: string;
}

export const Button: React.FC<IButtonProps> = ({textButton, ...props}) =>{
    return (
        <MatrialButton {...props} sx={{height: 49}}>
            <Typography fontWeight={800} textTransform="capitalize">
                {textButton}
            </Typography>
        </MatrialButton>
    );
};

//Extends para poder passar as propiedades