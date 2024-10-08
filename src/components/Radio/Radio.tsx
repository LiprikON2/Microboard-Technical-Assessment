import { randomId } from "~/utils";
import classes from "./Radio.module.css";

type RadioProps = {
    checked: boolean;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Radio = ({ checked, name, onChange = () => {}, ...rest }: RadioProps) => {
    const id = randomId();
    return (
        <div className={classes.root}>
            <input
                checked={checked}
                type="radio"
                id={id}
                name={name}
                onChange={onChange}
                {...rest}
            />
            <label htmlFor={id}>{name}</label>
        </div>
    );
};
