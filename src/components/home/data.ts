import { Project } from './type';

const PAVILION_S_BASEURL = '/assets/project/Pavilion_S';
const PAVILION_S: Project = {
	imageList: [`${PAVILION_S_BASEURL}/Pavilion S_i_1.jpg`],
	draftList: [
		`${PAVILION_S_BASEURL}/Pavilion S_d_1.jpg`,
		`${PAVILION_S_BASEURL}/Pavilion S_d_2.jpg`,
		`${PAVILION_S_BASEURL}/Pavilion S_d_3.jpg`,
		`${PAVILION_S_BASEURL}/Pavilion S_d_4.png`,
	],
};

// TODO: 프로젝트 늘어나면, 추가할 곳
const PROJECT_DATA: Project[] = [PAVILION_S];

export default PROJECT_DATA;
