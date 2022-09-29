import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import { ProgramsList } from '../components/ProgramsList';
import { Cards } from '../components/Cards';

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch('https://api-moscow-mba.herokuapp.com/products')
		.then((response) => response.json());

	return {
		props: {
			programs: response.slice(55, 60), // по ТЗ должно быть 5 программ
		},
	}
};

const Home: NextPage = ({ programs }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="container">
			<Head>
				<title>Палкин Кирилл Дмитриевич Frontend (Next)</title>
				<meta name="description" content="Тестовое задание для разработчика MBA" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="main">
				<h1 className="title">
					Специализированные дисциплины
				</h1>
				<ProgramsList programs={programs} />
				<Cards />
			</main>
		</div>
	)
};

export default Home;
