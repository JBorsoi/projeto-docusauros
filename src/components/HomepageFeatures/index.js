import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Qual a proposta da Condo-Link?',
    Svg: require('@site/static/img/undraw_town_re_2ng5.svg').default,
    description: (
      <>
        A condo-link está no mercado pra inserir nos condomínios um sistema eletrônico com a finalidade de facilitar os procedimentos do dia a dia de um condomínio.
      </>
    ),
  },
  {
    title: 'Por que usar a Condo-Link?',
    Svg: require('@site/static/img/undraw_choosing_house_re_1rv7.svg').default,
    description: (
      <>
       Com tecnologia de ponta e fácil acesso a Condo-Link chega ao mercado trazendo o melhor aplicativo de controle para gerenciar as áreas comuns  e de lazer do condomínio trazendo mais agilidade e facilidade de acesso na hora de fazer as suas reservas.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
