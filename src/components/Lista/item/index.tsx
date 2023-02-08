import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss'

interface props extends ITarefa{
	selecionaTarefa: (tarefaSelecioanda: ITarefa) => void
}

export default function Item({ 
        tarefa, 
        tempo, 
        completado, 
        selecionado, 
        id, 
        selecionaTarefa
}: props) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa(
            {
                tarefa, 
                tempo, 
                completado, 
                selecionado, 
                id, 
            }
        )}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}