import { Project } from './type';

const PAVILION_S_BASEURL = '/assets/project/Pavilion_S';
const PAVILION_S: Project = {
	imageList: [`${PAVILION_S_BASEURL}/Pavilion S_i_1.v240105.jpg`],
	draftList: [
		`${PAVILION_S_BASEURL}/Pavilion S_d_1.v240105.jpg`,
		`${PAVILION_S_BASEURL}/Pavilion S_d_2.v240105.jpg`,
		`${PAVILION_S_BASEURL}/Pavilion S_d_3.v240105.jpg`,
		`${PAVILION_S_BASEURL}/Pavilion S_d_4.v240105.jpg`,
	],
};

const LOUNGE_Y_BASEURL = '/assets/project/Lounge_Y';
const Lounge_Y: Project = {
	imageList: [
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_1.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_2.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_3.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_4.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_5.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_6.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_7.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_8.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_left_9.v240105.jpg`,
	],
	draftList: [
		`${LOUNGE_Y_BASEURL}/lounge_Y_right_1.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_right_2.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_right_3.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_right_4.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_right_5.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_right_6.v240105.jpg`,
		`${LOUNGE_Y_BASEURL}/lounge_Y_right_7.v240105.jpg`,
	],
};

// TODO: 프로젝트 늘어나면, 추가할 곳
const PROJECT_DATA: Project[] = [Lounge_Y, PAVILION_S];

export default PROJECT_DATA;
