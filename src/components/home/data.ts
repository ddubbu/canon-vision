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

const LOUNGE_Y_BASEURL = '/assets/project/Lounge_Y';
const Lounge_Y: Project = {
	imageList: [
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_1.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_2.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_3.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_4.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_5.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_6.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_7.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_8.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_9.jpg`,
	],
	draftList: [
		`${LOUNGE_Y_BASEURL}/lounge_Y_right_1.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_right_2.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_right_3.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_right_4.jpg`,
	],
};

// TODO: 프로젝트 늘어나면, 추가할 곳
const PROJECT_DATA: Project[] = [PAVILION_S, Lounge_Y];

export default PROJECT_DATA;
