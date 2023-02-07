import { ITarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss'

export default function Item({ tarefa, tempo, completado, selecionado, id }: ITarefa) {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}