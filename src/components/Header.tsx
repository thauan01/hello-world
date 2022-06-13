type Props = {
    nome: string;
    idade: number;
}

function Header({ nome, idade }: Props) {
    return(
       <header>
        <h1>
            Olá, {nome}, seja bem-vindo! Você tem {idade} anos.
        </h1>
       </header>

    );

}

export default Header;
