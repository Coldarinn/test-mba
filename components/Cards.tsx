import { FC } from "react";

export const Cards: FC = () => {
	return (
		<section className="cards">
			<div className="cards__body">
				<div className="cards__item cards__item--red">
					<h3 className="cards__title">
						Практические модули
					</h3>
					<p className="cards__text">
						Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
					</p>
				</div>
				<div className="cards__item cards__item--black">
					<h3 className="cards__title">
						Итоговая аттестация
					</h3>
					<ul className="cards__list">
						<li className="cards__point">
							Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)
						</li>
						<li className="cards__point">
							Защита итоговой аттестационной работы
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}