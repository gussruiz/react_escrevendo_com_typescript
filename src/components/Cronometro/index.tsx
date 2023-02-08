import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { ITarefa } from "../../types/tarefa";
import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface props{
    selecionado: ITarefa | undefined
}

export default function Cronometro({...selecionado}: props){
    const [tempo, setTempo] = useState<number>();
    
    if(selecionado.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo));
    }



    return(
        <div className={style.cronometro}>
            <p className={style.titulo} >Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper} >
                <Relogio/>
            </div>
            <Botao texto="Começar"/>
        </div>
    );
}