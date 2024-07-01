import { memo } from "react";

interface LogoProps {
    className?: string;
}

export const Logo: React.FC<LogoProps> = memo(function Logo({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 512 512"
            viewBox="0 0 512 512"
            id="diamond"
            className={className}
        >
            <linearGradient id="a" x1="50.343" x2="461.657" y1="525.657" y2="114.343" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#12c2e9"></stop>
                <stop offset=".506" stopColor="#c471ed"></stop>
                <stop offset="1" stopColor="#f64f59"></stop>
            </linearGradient>
            <path
                fill="url(#a)"
                d="M72,112c13.233,0,24,10.767,24,24c0,4.418,3.582,8,8,8s8-3.582,8-8c0-13.233,10.767-24,24-24
	c4.418,0,8-3.582,8-8s-3.582-8-8-8c-13.233,0-24-10.767-24-24c0-4.418-3.582-8-8-8s-8,3.582-8,8c0,13.233-10.767,24-24,24
	c-4.418,0-8,3.582-8,8S67.582,112,72,112z M104,95.975c2.282,3.039,4.986,5.743,8.025,8.025c-3.039,2.282-5.743,4.986-8.025,8.025
	c-2.282-3.039-4.986-5.743-8.025-8.025C99.014,101.718,101.718,99.014,104,95.975z M23.663,264c13.233,0,24,10.767,24,24
	c0,4.418,3.582,8,8,8s8-3.582,8-8c0-13.233,10.767-24,24-24c4.418,0,8-3.582,8-8s-3.582-8-8-8c-13.233,0-24-10.767-24-24
	c0-4.418-3.582-8-8-8s-8,3.582-8,8c0,13.233-10.767,24-24,24c-4.418,0-8,3.582-8,8S19.245,264,23.663,264z M55.663,247.975
	c2.282,3.039,4.986,5.743,8.025,8.025c-3.039,2.282-5.743,4.986-8.025,8.025c-2.282-3.039-4.986-5.743-8.025-8.025
	C50.677,253.718,53.381,251.014,55.663,247.975z M224,64c13.233,0,24,10.767,24,24c0,4.418,3.582,8,8,8s8-3.582,8-8
	c0-13.233,10.767-24,24-24c4.418,0,8-3.582,8-8s-3.582-8-8-8c-13.233,0-24-10.767-24-24c0-4.418-3.582-8-8-8s-8,3.582-8,8
	c0,13.233-10.767,24-24,24c-4.418,0-8,3.582-8,8S219.582,64,224,64z M256,47.975c2.282,3.039,4.986,5.743,8.025,8.025
	c-3.039,2.282-5.743,4.986-8.025,8.025c-2.282-3.039-4.986-5.743-8.025-8.025C251.014,53.718,253.718,51.014,256,47.975z M376,112
	c13.233,0,24,10.767,24,24c0,4.418,3.582,8,8,8s8-3.582,8-8c0-13.233,10.767-24,24-24c4.418,0,8-3.582,8-8s-3.582-8-8-8
	c-13.233,0-24-10.767-24-24c0-4.418-3.582-8-8-8s-8,3.582-8,8c0,13.233-10.767,24-24,24c-4.418,0-8,3.582-8,8S371.582,112,376,112z
	 M408,95.975c2.282,3.039,4.986,5.743,8.025,8.025c-3.039,2.282-5.743,4.986-8.025,8.025c-2.282-3.039-4.986-5.743-8.025-8.025
	C403.014,101.718,405.718,99.014,408,95.975z M424,248c-4.418,0-8,3.582-8,8s3.582,8,8,8c13.233,0,24,10.767,24,24
	c0,4.418,3.582,8,8,8s8-3.582,8-8c0-13.233,10.767-24,24-24c4.418,0,8-3.582,8-8s-3.582-8-8-8c-13.233,0-24-10.767-24-24
	c0-4.418-3.582-8-8-8s-8,3.582-8,8C448,237.233,437.233,248,424,248z M456,247.975c2.282,3.039,4.986,5.743,8.025,8.025
	c-3.039,2.282-5.743,4.986-8.025,8.025c-2.282-3.039-4.986-5.743-8.025-8.025C451.014,253.718,453.718,251.014,456,247.975z
	 M488,416h-32v-32.27c0-13.085-10.646-23.73-23.73-23.73H312v-40c0-4.418-3.582-8-8-8h-6.897l92.612-98.42
	c0.406-0.416,0.778-0.869,1.091-1.374c1.457-2.358,1.59-5.304,0.35-7.784l-32-64C357.8,137.712,355.03,136,352,136H160
	c-3.03,0-5.8,1.712-7.155,4.422l-32,64c-1.24,2.48-1.107,5.426,0.35,7.784c0.238,0.385,0.515,0.735,0.808,1.068L214.897,312H208
	c-4.418,0-8,3.582-8,8v40H79.73C66.646,360,56,370.646,56,383.73V416H24c-4.418,0-8,3.582-8,8v64c0,4.418,3.582,8,8,8h464
	c4.418,0,8-3.582,8-8v-64C496,419.582,492.418,416,488,416z M279.926,306.907L317.357,216h48.127L279.926,306.907z M296,328v32h-80
	v-32H296z M251.475,312l-39.529-96h88.109l-39.529,96H251.475z M371.056,200h-44.621l24.79-39.663L371.056,200z M337.566,152
	l-26.64,42.624L273.63,152H337.566z M294.37,200h-76.74L256,156.148L294.37,200z M238.37,152l-37.296,42.624L174.434,152H238.37z
	 M160.776,160.337L185.566,200h-44.621L160.776,160.337z M146.516,216h48.127l37.432,90.907L146.516,216z M72,383.73
	c0-4.263,3.468-7.73,7.73-7.73H432.27c4.263,0,7.73,3.468,7.73,7.73V416H72V383.73z M480,480H32v-48h448V480z"
            ></path>
        </svg>
    );
});