import { FC } from "react";
import { IProgram } from "../models/IProgram";
import { ProgramsModule } from "./ProgramsModule";

interface ProgramsListProps {
	programs: IProgram[]
};

export const ProgramsList: FC<ProgramsListProps> = ({ programs }) => {
	return (
		<>
			{programs?.map((program: IProgram) => (
				<section className="section" key={program.id}>
					<h2 className="section__title">
						{program.title}
					</h2>
					<div className="section__body">
						{[1, 2].map((item) => (
							<ProgramsModule key={item} idx={item} subjects={program.specializedSubjects.slice((item - 1) * 5, item * 5)} />
						))}
					</div>
				</section>
			))}
		</>
	)
};