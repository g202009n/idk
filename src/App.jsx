import { useState } from "react";
import "./App.css";
import mysql from "./assets/mysql.png";
function App() {
  return (
    <>
      <header>
        <img src={mysql} />
      </header>
      <section>
        <article id="art1">
          <h3>O QUE É MySQL?</h3>
          <br />
          DIFERENÇAS PARA OUTROS BANCOS DE DADOSTecnologia e Internet: Yahoo!
          Finance, Motorola, NASA, Silicon Graphics, e Texas Instruments usam o
          MySQL. Plataformas de Conteúdo: O MySQL é muito utilizado em Sistemas
          de Gerenciamento de Conteúdo (CMS). Variantes: Muitas empresas optam
          por variantes como MariaDB e Percona Server, que são compatíveis com o
          MySQL. EXEMPLO QUE USAM ESSE BANCOO MySQL é um dos programas de
          gerenciamento de banco de dados relacional (RDBMS) que usa SQL como
          sua linguagem, ele é um dos principais programas de banco de dados de
          código aberto no mundo,o MySQL é muito utilizado pela sua
          confiabilidade, capacidade e desempenho, além de aguentar aplicações
          de alto trafego de informaçõe
        </article>
        <article id="art2">
          <h3>DIFERENÇAS PARA OUTROSBANCOS DE DADOS</h3>
          <br />
          <strong>MySQL vs. PostgreSQL: </strong>
          MySQL é mais rápido para leitura e comum em aplicações web. PostgreSQL
          foca em integridade de dados, segue melhor o padrão SQL e lida melhor
          com dados complexos e não estruturados.
          <br />
          <strong>MySQL vs. SQL Server: </strong>
          SQL Server é mais robusto e voltado para empresas, com forte
          integração ao ecossistema Microsoft. MySQL é mais simples, leve e
          funciona em várias plataformas.
          <br />
          <strong>MySQL vs. MariaDB: </strong>
          MariaDB é um fork do MySQL, totalmente open source, com melhor
          desempen
        </article>
        <article id="art3">
          <h3>EXEMPLO QUE USAM ESSE BANCO</h3>
          <br />
          <strong>Tecnologia e Internet: </strong>Yahoo! Finance, Motorola,
          NASA, Silicon Graphics, e Texas Instruments usam o MySQL. <br />
          <strong>Plataformas de Conteúdo: </strong>O MySQL é muito utilizado em
          Sistemas de Gerenciamento de Conteúdo (CMS). <br />
          <strong>Variantes: </strong>Muitas empresas optam por variantes como
          MariaDB e Percona Server, que são compatíveis com o MySQL.
        </article>
        <article id="art4">
          <h3>ONDE É USADO O MySQL?</h3>
          <br />O MySQL é um dos bancos de dados relacionais de código aberto
          mais conhecidos do mundo. Essa popularidade é resultadode seu uso
          generalizado em sites de comércio eletrônico, mídias sociais e
          aplicativos, entre eles o Drupal, Joomla, Magento e o WordPress.
        </article>
      </section>
    </>
  );
}

export default App;
