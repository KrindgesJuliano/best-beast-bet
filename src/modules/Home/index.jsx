import Jogo from '../../assets/jogo-cover.jpg';

export const Home = () => {
  return (
    <div className="container ma mt h-full">
      <h1>Não é Jogo do Bicho</h1>
      <p>
        Este site é apenas um trabalho de Pos-Graduação e não tem qualquer
        ligação com o Jogo do Bicho ou qualquer outro tipo de aposta, os jogos e
        prêmios são apenas fictícios não envolvem qualquer transação financeira.
      </p>
      <img src={Jogo} className="flex w-full justify-center mt-10" />
      <p className="text-center mt-10 font-500 text-lg text-blueGray-700 ">
        Pós Graduação Arquitetura de Software Distribuído - PUC Minas
      </p>
    </div>
  );
};
