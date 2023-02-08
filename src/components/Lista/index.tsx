import { ITarefa } from '../../types/tarefa';
import Item from './item';
import style from './Lista.module.scss'

interface props {
	tarefas: ITarefa[],
	selecionaTarefa: (tarefaSelecioanda: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa}: props) {

	return (
		<aside className={style.listaTarefas}>
			<h2>
				Estudos do Dia
			</h2>
			<ul>
				{tarefas.map((item) => (
					<Item
						selecionaTarefa={selecionaTarefa}
						key={item.id}
						{...item}
					/>
				))}
			</ul>
		</aside>
	);
}

export default Lista;