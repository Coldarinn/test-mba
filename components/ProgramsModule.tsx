import { FC, useState, useRef, useEffect } from "react";
import { ISubject } from "../models/ISubject";

interface ProgramsModuleProps {
	idx: number,
	subjects: ISubject[]
};

export const ProgramsModule: FC<ProgramsModuleProps> = ({ idx, subjects }) => {
	const [isActive, setIsActive] = useState<boolean>(true);
	const [blockHeight, setBlockHeight] = useState<number>(0);
	const [size, setSize] = useState<number>(NaN);

	const blockRef = useRef<null | HTMLUListElement>(null);

	const resizeHandler = () => {
		const width = window.innerWidth;
		setSize(width);
	};

	useEffect(() => {
		setSize(window.innerWidth);
		window.addEventListener("resize", resizeHandler);

		if (window.innerWidth <= 760) {
			const blockHeight = blockRef.current?.getBoundingClientRect().height || 0;
			setBlockHeight(blockHeight);
		};

		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, []);

	return (
		<>
			<div className="section__module module">
				<h3 className={isActive ? "module__title active" : "module__title"} onClick={() => size <= 760 ? setIsActive(prev => !prev) : null}>
					{idx} модуль
				</h3>
				<ul
					className={isActive ? "module__list active" : "module__list"}
					ref={blockRef}
					style={size <= 760 ? isActive ? { height: blockHeight + 10 } : { height: 0 } : {}}
				>
					{subjects.map((subject) => (
						<li className="module__subject" key={subject.id}>
							{subject.string}
						</li>
					))}
				</ul>
			</div>
		</>
	)
};